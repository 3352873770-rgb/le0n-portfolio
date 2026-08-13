#!/usr/bin/env python3
"""Create web-sized WebP variants for image assets imported by src/App.jsx."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
APP_FILE = ROOT / "src" / "App.jsx"
ASSET_ROOT = ROOT / "assets"

IMPORT_PATTERN = re.compile(
    r'from\s+["\']\.\./assets/(?P<path>[^"\']+\.(?:png|jpe?g|webp))["\'];',
    re.IGNORECASE,
)

WEB_GROUPS = {
    "tea-ui": (720, 82),
    "yueerting": (720, 82),
    "assetguard": (1280, 80),
    "emotion-pet": (720, 82),
    "red-envelope": (720, 82),
    "qianshan-ip": (1200, 82),
    "posters": (1200, 82),
    "photography": (1440, 80),
}

ROOT_ASSET_RULES = {
    "le0n-wordmark-transparent.png": (1400, 88),
    "profile-avatar-editorial.jpg": (512, 84),
    "resume-portrait-yellow.png": (1000, 82),
}


def find_original(relative_path: Path) -> Path | None:
    candidate = ASSET_ROOT / relative_path
    if candidate.suffix.lower() != ".webp" and candidate.exists():
        return candidate

    for suffix in (".png", ".jpg", ".jpeg"):
        source = candidate.with_suffix(suffix)
        if source.exists():
            return source

    return None


def optimize(source: Path, output: Path, max_width: int, quality: int) -> tuple[int, int]:
    with Image.open(source) as image:
        image.load()
        if image.width > max_width:
            target_height = round(image.height * (max_width / image.width))
            image = image.resize((max_width, target_height), Image.Resampling.LANCZOS)

        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output, "WEBP", quality=quality, method=6, exact=True)

    return source.stat().st_size, output.stat().st_size


def rewrite_imports(replacements: dict[str, str]) -> None:
    source = APP_FILE.read_text(encoding="utf-8")
    for original, optimized in replacements.items():
        source = source.replace(f'../assets/{original}', f'../assets/{optimized}')
    APP_FILE.write_text(source, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--rewrite-imports",
        action="store_true",
        help="Update src/App.jsx to reference generated WebP variants.",
    )
    args = parser.parse_args()

    imported_paths = {
        Path(match.group("path"))
        for match in IMPORT_PATTERN.finditer(APP_FILE.read_text(encoding="utf-8"))
    }
    replacements: dict[str, str] = {}
    original_total = 0
    optimized_total = 0

    for relative_path in sorted(imported_paths):
        group = relative_path.parts[0] if relative_path.parts else ""
        if relative_path.as_posix() in ROOT_ASSET_RULES:
            rule = ROOT_ASSET_RULES[relative_path.as_posix()]
        elif group in WEB_GROUPS:
            rule = WEB_GROUPS[group]
        else:
            continue

        source = find_original(relative_path)
        if source is None:
            raise FileNotFoundError(f"Cannot find original image for {relative_path}")

        output_relative = relative_path.with_suffix(".webp")
        output = ASSET_ROOT / output_relative
        before, after = optimize(source, output, *rule)
        original_total += before
        optimized_total += after
        replacements[relative_path.as_posix()] = output_relative.as_posix()
        print(f"{relative_path}: {before / 1024:.0f} KB -> {after / 1024:.0f} KB")

    if args.rewrite_imports:
        rewrite_imports(replacements)

    if original_total:
        reduction = 100 * (1 - optimized_total / original_total)
        print(
            f"Optimized {len(replacements)} images: "
            f"{original_total / 1024 / 1024:.1f} MB -> "
            f"{optimized_total / 1024 / 1024:.1f} MB "
            f"({reduction:.1f}% smaller)"
        )


if __name__ == "__main__":
    main()
