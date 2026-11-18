from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

BG_COLOR = (11, 15, 23)           # #0B0F17
SURFACE_COLOR = (17, 24, 39)      # #111827
ELEVATED_COLOR = (26, 35, 51)     # #1A2333
PILL_BG_DARK = (32, 33, 28)       # Subtle warm dark for gold-bordered badge
BORDER_COLOR = (30, 41, 59)       # #1E293B
GOLD = (245, 183, 49)             # #F5B731
EMERALD = (16, 185, 129)          # #10B981
BORDEAUX = (139, 30, 36)          # #8B1E24
WHITE = (248, 250, 252)           # #F8FAFC
SLATE = (148, 163, 184)           # #94A3B8
LIGHT_SLATE = (203, 213, 225)     # #CBD5E1
BLACK = (10, 14, 20)

HELVETICA = "/System/Library/Fonts/HelveticaNeue.ttc"
MENLO = "/System/Library/Fonts/Menlo.ttc"


def font_sans_bold(size):
    return ImageFont.truetype(HELVETICA, size, index=1)


def font_sans_medium(size):
    return ImageFont.truetype(HELVETICA, size, index=10)


def font_sans_regular(size):
    return ImageFont.truetype(HELVETICA, size, index=0)


def font_mono_bold(size):
    return ImageFont.truetype(MENLO, size, index=1)


def draw_vector_checkmark(draw, x, y, color=BLACK, width=3):
    # Draws a crisp vector checkmark inside a 24x24 box starting at (x, y)
    p1 = (x + 5, y + 12)
    p2 = (x + 10, y + 17)
    p3 = (x + 19, y + 7)
    draw.line([p1, p2, p3], fill=color, width=width, joint="curve")


def create_base_canvas():
    base = Image.new("RGBA", (W, H), BG_COLOR + (255,))

    # Ambient radial glows
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((-120, -140, 520, 420), fill=(245, 183, 49, 28))
    gdraw.ellipse((760, 180, 1320, 740), fill=(139, 30, 36, 40))
    glow = glow.filter(ImageFilter.GaussianBlur(85))
    base = Image.alpha_composite(base, glow)

    draw = ImageDraw.Draw(base)

    # Outer card container
    card_box = (32, 28, W - 32, H - 28)
    draw.rounded_rectangle(
        card_box,
        radius=26,
        fill=SURFACE_COLOR,
        outline=BORDER_COLOR,
        width=2,
    )

    # Top gold accent bar along the card
    draw.rounded_rectangle(
        (56, 28, 340, 34),
        radius=3,
        fill=GOLD,
    )

    return base, draw


def paste_rounded_portrait(base, draw, img_path, box, caption_top, caption_sub):
    x1, y1, x2, y2 = box
    pw = x2 - x1
    ph = y2 - y1

    # Card container for portrait
    draw.rounded_rectangle(
        (x1 - 10, y1 - 10, x2 + 10, y2 + 68),
        radius=22,
        fill=ELEVATED_COLOR,
        outline=GOLD,
        width=2,
    )

    portrait = Image.open(img_path).convert("RGBA")
    iw, ih = portrait.size
    target_ratio = pw / ph
    src_ratio = iw / ih
    if src_ratio > target_ratio:
        new_w = int(ih * target_ratio)
        offset = (iw - new_w) // 2
        portrait = portrait.crop((offset, 0, offset + new_w, ih))
    else:
        new_h = int(iw / target_ratio)
        offset = (ih - new_h) // 2
        portrait = portrait.crop((0, offset, iw, offset + new_h))

    portrait = portrait.resize((pw, ph), Image.LANCZOS)

    mask = Image.new("L", (pw, ph), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle((0, 0, pw, ph), radius=16, fill=255)

    base.paste(portrait, (x1, y1), mask)

    # Caption strip under photo
    f_cap_top = font_mono_bold(14)
    f_cap_sub = font_sans_medium(13)
    draw.text((x1 + 6, y2 + 12), caption_top, font=f_cap_top, fill=GOLD)
    draw.text((x1 + 6, y2 + 34), caption_sub, font=f_cap_sub, fill=LIGHT_SLATE)


def build_og_clases():
    base, draw = create_base_canvas()

    left_x = 68

    # Top credential pill
    pill_box = (left_x, 60, left_x + 690, 100)
    draw.rounded_rectangle(
        pill_box,
        radius=20,
        fill=PILL_BG_DARK,
        outline=GOLD,
        width=2,
    )
    draw.text(
        (left_x + 18, 70),
        "> EX-PREPARADOR GRUPO ESCALERA · ING. USB · M.SC. FRANCIA",
        font=font_mono_bold(16),
        fill=GOLD,
    )

    # Main Title
    draw.text(
        (left_x, 118),
        "Clases de Matemática",
        font=font_sans_bold(50),
        fill=WHITE,
    )
    draw.text(
        (left_x, 176),
        "y Programación",
        font=font_sans_bold(50),
        fill=WHITE,
    )

    # Modality subtitle
    draw.text(
        (left_x, 244),
        "Presencial en Isla de Margarita y Online en Vivo (1-a-1 o Grupal)",
        font=font_sans_bold(22),
        fill=GOLD,
    )

    # 2x2 Grid of Courses
    courses = [
        ("Matemática Bachillerato", "1er a 5to Año · Ciencias y Humanidades"),
        ("Matemática Preuniversitaria", "Curso Modular Completo o por Clases"),
        ("Habilidad Cuantitativa", "Admisión USB, UCV, UCAB, UNIMET, UDO"),
        ("Intro a la Programación", "Lógica, Algoritmos y Código desde Cero"),
    ]

    gx_start = left_x
    gy_start = 294
    box_w = 342
    box_h = 90
    gap_x = 16
    gap_y = 14

    f_course_title = font_sans_bold(18)
    f_course_sub = font_sans_regular(14)

    for idx, (ctitle, csub) in enumerate(courses):
        col = idx % 2
        row = idx // 2
        bx1 = gx_start + col * (box_w + gap_x)
        by1 = gy_start + row * (box_h + gap_y)
        bx2 = bx1 + box_w
        by2 = by1 + box_h

        draw.rounded_rectangle(
            (bx1, by1, bx2, by2),
            radius=14,
            fill=ELEVATED_COLOR,
            outline=BORDER_COLOR,
            width=2,
        )
        # Gold check badge with vector checkmark
        chk_x, chk_y = bx1 + 14, by1 + 15
        draw.rounded_rectangle(
            (chk_x, chk_y, chk_x + 24, chk_y + 24),
            radius=6,
            fill=GOLD,
        )
        draw_vector_checkmark(draw, chk_x, chk_y, color=BLACK, width=3)

        draw.text((bx1 + 48, by1 + 16), ctitle, font=f_course_title, fill=WHITE)
        draw.text((bx1 + 16, by1 + 52), csub, font=f_course_sub, fill=LIGHT_SLATE)

    # Bottom CTA Bar
    cta_y = 516
    draw.rounded_rectangle(
        (left_x, cta_y, left_x + 360, cta_y + 54),
        radius=14,
        fill=EMERALD,
    )
    draw.text(
        (left_x + 20, cta_y + 15),
        "WhatsApp: +58 412-7077579",
        font=font_mono_bold(20),
        fill=BLACK,
    )

    draw.text(
        (left_x + 382, cta_y + 17),
        "rafaelblanco25.github.io/clases",
        font=font_mono_bold(16),
        fill=GOLD,
    )

    # Right side portrait (Grupo Escalera + USB shirt photo)
    paste_rounded_portrait(
        base,
        draw,
        "src/assets/profile-2.webp",
        (825, 76, 1125, 488),
        "RAFAEL BLANCO",
        "Ex-Preparador Grupo Escalera · Ing. USB",
    )

    out = base.convert("RGB")
    out.save("public/og-clases.png", "PNG", optimize=True)
    print("Saved public/og-clases.png")


def build_og_portfolio():
    base, draw = create_base_canvas()

    left_x = 68

    # Top role pill
    pill_box = (left_x, 60, left_x + 650, 100)
    draw.rounded_rectangle(
        pill_box,
        radius=20,
        fill=PILL_BG_DARK,
        outline=GOLD,
        width=2,
    )
    draw.text(
        (left_x + 18, 70),
        "> DATA SCIENCE · FULL-STACK ENGINEERING · R&D",
        font=font_mono_bold(16),
        fill=GOLD,
    )

    # Name & Headline
    draw.text(
        (left_x, 118),
        "Rafael Blanco",
        font=font_sans_bold(56),
        fill=WHITE,
    )
    draw.text(
        (left_x, 188),
        "Científico de Datos, Ingeniero en Computación & Full-Stack",
        font=font_sans_bold(23),
        fill=GOLD,
    )
    draw.text(
        (left_x, 224),
        "Doble Titulación USB + Télécom SudParis (IP Paris) · I+D en Inria, UPC y Ubisoft",
        font=font_sans_medium(17),
        fill=LIGHT_SLATE,
    )

    # 2x2 Grid of Pillars
    pillars = [
        ("Ciencia de Datos & IA", "Python, Pandas, Scikit-learn, TensorFlow"),
        ("Desarrollo Web Full-Stack", "React, Django, Flask, PostgreSQL, Docker"),
        ("Investigación & Simulación", "4 Papers: Nature, IEEE TVCG, CGF, VIS"),
        ("Academia & Mentorías", "Clases en Isla de Margarita y Online"),
    ]

    gx_start = left_x
    gy_start = 278
    box_w = 342
    box_h = 96
    gap_x = 16
    gap_y = 14

    f_title = font_sans_bold(18)
    f_sub = font_sans_regular(14)

    for idx, (ptitle, psub) in enumerate(pillars):
        col = idx % 2
        row = idx // 2
        bx1 = gx_start + col * (box_w + gap_x)
        by1 = gy_start + row * (box_h + gap_y)
        bx2 = bx1 + box_w
        by2 = by1 + box_h

        draw.rounded_rectangle(
            (bx1, by1, bx2, by2),
            radius=14,
            fill=ELEVATED_COLOR,
            outline=BORDER_COLOR,
            width=2,
        )
        draw.text((bx1 + 16, by1 + 18), f"> {ptitle}", font=f_title, fill=GOLD)
        draw.text((bx1 + 16, by1 + 52), psub, font=f_sub, fill=WHITE)

    # Bottom Footer CTA
    cta_y = 516
    draw.rounded_rectangle(
        (left_x, cta_y, left_x + 335, cta_y + 54),
        radius=14,
        fill=GOLD,
    )
    draw.text(
        (left_x + 20, cta_y + 16),
        "rafaelblanco25.github.io",
        font=font_mono_bold(19),
        fill=BLACK,
    )

    draw.text(
        (left_x + 355, cta_y + 17),
        "WhatsApp: +58 412-7077579",
        font=font_mono_bold(18),
        fill=LIGHT_SLATE,
    )

    paste_rounded_portrait(
        base,
        draw,
        "src/assets/profile.webp",
        (825, 76, 1125, 488),
        "M.SC. & ING. COMPUTACIÓN",
        "USB · IP Paris · UPC · Inria · Ubisoft",
    )

    out = base.convert("RGB")
    out.save("public/og-portfolio.png", "PNG", optimize=True)
    print("Saved public/og-portfolio.png")


if __name__ == "__main__":
    build_og_clases()
    build_og_portfolio()
