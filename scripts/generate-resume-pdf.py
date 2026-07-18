from pathlib import Path
from shutil import copy2

from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "he-zhenliang-resume.pdf"
ASSET_COPY = ROOT / "assets" / "he-zhenliang-resume.pdf"
AVATAR = ROOT / "assets" / "resume-portrait-yellow.png"
FONT_PATH = Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf")

FONT = "ResumeSans"
INK = HexColor("#0B2345")
BLUE = HexColor("#1F5EFF")
BODY = HexColor("#263447")
MUTED = HexColor("#687284")
PAPER = HexColor("#FBF8F1")
LINE = Color(31 / 255, 94 / 255, 1, alpha=0.72)
PORTFOLIO_URL = "https://3352873770-rgb.github.io/le0n-portfolio/#about"


def register_fonts():
    pdfmetrics.registerFont(TTFont(FONT, str(FONT_PATH)))


def draw_wrapped_text(pdf, text, x, y, max_width, font_size=9.2, leading=16, color=BODY):
    pdf.setFont(FONT, font_size)
    pdf.setFillColor(color)
    current = ""
    lines = []

    for character in text:
        candidate = f"{current}{character}"
        if current and pdfmetrics.stringWidth(candidate, FONT, font_size) > max_width:
            lines.append(current.rstrip())
            current = character.lstrip()
        else:
            current = candidate

    if current:
        lines.append(current.rstrip())

    for line in lines:
        pdf.drawString(x, y, line)
        y -= leading

    return y


def draw_section_heading(pdf, english, chinese, x, y, width):
    pdf.setFillColor(INK)
    pdf.setFont(FONT, 20)
    pdf.drawString(x, y, english)
    english_width = pdfmetrics.stringWidth(english, FONT, 20)
    pdf.setFont(FONT, 10)
    pdf.drawString(x + english_width + 10, y + 2, f"/ {chinese}")
    pdf.setStrokeColor(BLUE)
    pdf.setLineWidth(1)
    pdf.line(x, y - 10, x + width, y - 10)
    return y - 34


def draw_info_row(pdf, label, value, x, y, font_size=9.2, url=None):
    pdf.setFillColor(BLUE)
    pdf.circle(x + 3, y + 3, 2.4, fill=1, stroke=0)
    pdf.setFillColor(BODY)
    if url:
        pdf.setFont(FONT, 9.2)
        pdf.drawString(x + 14, y, f"{label}：")
        url_y = y - 14
        pdf.setFillColor(BLUE)
        pdf.setFont(FONT, font_size)
        pdf.drawString(x + 14, url_y, value)
        text_width = pdfmetrics.stringWidth(value, FONT, font_size)
        pdf.linkURL(url, (x + 14, url_y - 2, x + 14 + text_width, url_y + font_size + 2), relative=0)
        return y - 36

    pdf.setFont(FONT, font_size)
    pdf.drawString(x + 14, y, f"{label}：{value}")
    return y - 22


def draw_experience_loader(pdf, x, y, width):
    card_height = 62
    card_y = y - card_height

    pdf.setStrokeColor(Color(31 / 255, 94 / 255, 1, alpha=0.36))
    pdf.setFillColor(Color(1, 1, 1, alpha=0.22))
    pdf.setLineWidth(0.8)
    pdf.roundRect(x, card_y, width, card_height, 11, fill=1, stroke=1)

    icon_x = x + 20
    icon_y = card_y + 38
    pdf.setStrokeColor(BLUE)
    pdf.setLineWidth(1.15)
    pdf.circle(icon_x, icon_y, 9, fill=0, stroke=1)
    pdf.setStrokeColor(PAPER)
    pdf.setLineWidth(3)
    pdf.line(icon_x + 3, icon_y + 7, icon_x + 8, icon_y + 3)

    pdf.setFillColor(INK)
    pdf.setFont(FONT, 9.5)
    pdf.drawString(x + 40, card_y + 39, "正在加载工作经历")
    pdf.setFillColor(MUTED)
    pdf.setFont(FONT, 7.4)
    pdf.drawString(x + 40, card_y + 25, "EXPERIENCE LOG · 持续更新中")

    track_x = x + 40
    track_y = card_y + 12
    track_width = width - 52
    pdf.setStrokeColor(Color(31 / 255, 94 / 255, 1, alpha=0.16))
    pdf.setLineWidth(2)
    pdf.line(track_x, track_y, track_x + track_width, track_y)
    pdf.setStrokeColor(BLUE)
    pdf.line(track_x, track_y, track_x + track_width * 0.24, track_y)

    return card_y


def build_resume():
    register_fonts()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    width, height = A4

    pdf.setFillColor(PAPER)
    pdf.rect(0, 0, width, height, fill=1, stroke=0)

    margin = 42
    left_width = 210
    gutter = 30
    right_x = margin + left_width + gutter
    right_width = width - right_x - margin

    pdf.setFillColor(INK)
    pdf.setFont("Helvetica-Bold", 29)
    pdf.drawString(margin, height - 68, "UI /")
    pdf.drawString(margin, height - 101, "VISUAL")
    pdf.drawString(margin, height - 134, "DESIGNER")

    pdf.setFillColor(BLUE)
    pdf.setFont(FONT, 15)
    pdf.drawString(margin, height - 177, "何臻亮 / He Zhenliang")
    pdf.setFillColor(BODY)
    pdf.setFont(FONT, 10)
    pdf.drawString(margin, height - 201, "UI设计师 / 视觉设计师")

    pdf.setStrokeColor(BLUE)
    pdf.setLineWidth(1)
    pdf.line(margin, height - 214, margin + left_width - 4, height - 214)

    info_y = height - 240
    info_y = draw_info_row(pdf, "学校", "中山大学南方学院", margin, info_y)
    info_y = draw_info_row(pdf, "专业", "数字媒体技术", margin, info_y)
    info_y = draw_info_row(pdf, "所在地", "Guangzhou, China", margin, info_y)
    info_y = draw_info_row(pdf, "微信", "-LiA_Ang", margin, info_y)
    info_y = draw_info_row(pdf, "电话", "17820304443", margin, info_y)
    draw_info_row(
        pdf,
        "作品集",
        "https://3352873770-rgb.github.io/le0n-portfolio/#about",
        margin,
        info_y,
        font_size=7.4,
        url=PORTFOLIO_URL,
    )

    avatar_width = left_width - 4
    avatar_height = 288
    pdf.drawImage(
        str(AVATAR),
        margin,
        52,
        width=avatar_width,
        height=avatar_height,
        preserveAspectRatio=True,
        anchor="c",
        mask="auto",
    )

    pdf.setStrokeColor(Color(31 / 255, 94 / 255, 1, alpha=0.3))
    pdf.setLineWidth(0.8)
    divider_x = margin + left_width + gutter / 2
    pdf.line(divider_x, 52, divider_x, height - 70)

    about_y = draw_section_heading(pdf, "About Me", "关于我", right_x, height - 92, right_width)
    about = (
        "你好，我是数字媒体技术专业准大四生，专注于 UI 设计、网页视觉与商业视觉。"
        "我尝试把设计表达、交互体验、前端实现与 AI 工具整合，让 AI 参与需求分析、"
        "方案探索、视觉设计和组件规范，并由我把控设计判断、用户体验与最终质量。"
    )
    about_y = draw_wrapped_text(pdf, about, right_x, about_y, right_width, font_size=9.3, leading=17)

    skills_y = min(about_y - 52, height - 380)
    skills_y = draw_section_heading(pdf, "Skills", "技能掌握", right_x, skills_y, right_width)

    skills = [
        ("UI / UX 设计", "信息架构、高保真界面、交互原型"),
        ("视觉设计", "海报、品牌视觉、商业视觉"),
        ("网页前端", "React、Vite、HTML / CSS、响应式页面"),
        ("AI 协作工作流", "需求分析、方案探索、视觉生成、组件规范、前端落地"),
        ("工具", "Figma、Photoshop、Codex、Stitch、HappyHorus、Vizcom"),
    ]

    for label, description in skills:
        pdf.setFillColor(BLUE)
        pdf.circle(right_x + 3, skills_y + 3, 2.4, fill=1, stroke=0)
        pdf.setFillColor(INK)
        pdf.setFont(FONT, 9.4)
        pdf.drawString(right_x + 15, skills_y, f"{label}：")
        skills_y = draw_wrapped_text(
            pdf,
            description,
            right_x + 15,
            skills_y - 14,
            right_width - 15,
            font_size=8.4,
            leading=12,
            color=MUTED,
        )
        skills_y -= 11

    experience_y = draw_section_heading(
        pdf,
        "Experience",
        "工作经历",
        right_x,
        skills_y - 2,
        right_width,
    )
    draw_experience_loader(pdf, right_x, experience_y + 4, right_width)

    pdf.setStrokeColor(LINE)
    pdf.line(right_x, 68, right_x + right_width, 68)
    pdf.setFillColor(MUTED)
    pdf.setFont(FONT, 7.8)
    pdf.drawString(right_x, 50, "LE0N PORTFOLIO / RESUME")
    pdf.drawRightString(right_x + right_width, 50, "2026")

    pdf.showPage()
    pdf.save()
    ASSET_COPY.parent.mkdir(parents=True, exist_ok=True)
    copy2(OUTPUT, ASSET_COPY)
    print(OUTPUT)


if __name__ == "__main__":
    build_resume()
