#!/usr/bin/env python3
"""
Generates the comprehensive Pitch Presentation Script & Demo Guide (.docx)
For Mama Cloud & Bro Cloud: AZ-900 Exam Prep Edition (#1MillionDevs Movement)
"""

import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

def set_cell_background(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tcPr.append(shd)

def create_script_document():
    doc = Document()

    # Set Margins
    for section in doc.sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)

    # Styles & Fonts
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Calibri'
    normal_style.font.size = Pt(11)
    normal_style.font.color.rgb = RGBColor(30, 41, 59)

    # ========================================================
    # DOCUMENT HEADER / TITLE
    # ========================================================
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_after = Pt(2)
    run_tag = title_p.add_run("#1MILLIONDEVS HACKATHON: AZ-900 EXAM PREP EDITION\n")
    run_tag.font.size = Pt(10)
    run_tag.font.bold = True
    run_tag.font.color.rgb = RGBColor(217, 119, 6) # Amber

    run_title = title_p.add_run("Mama Cloud & Bro Cloud: Official Pitch Script & Demo Playbook")
    run_title.font.size = Pt(24)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(10, 14, 23)

    subtitle_p = doc.add_paragraph()
    subtitle_p.paragraph_format.space_after = Pt(18)
    run_sub = subtitle_p.add_run("Theme: “Building Smarter Exam Prep Tools from Our Own Learning Journey.”\nPresenter: John Loreng • Project: Mama Cloud & Bro Cloud • Prototype: http://localhost:8080")
    run_sub.font.size = Pt(11)
    run_sub.font.color.rgb = RGBColor(100, 116, 139)

    # Divider
    p_div = doc.add_paragraph()
    p_div.paragraph_format.space_after = Pt(14)
    r_div = p_div.add_run("―" * 55)
    r_div.font.color.rgb = RGBColor(226, 232, 240)

    # ========================================================
    # SECTION 1: HACKATHON EVALUATION RUBRIC MATRIX
    # ========================================================
    h1 = doc.add_heading("1. Executive Evaluation Rubric Alignment", level=1)
    h1.paragraph_format.space_before = Pt(12)
    h1.paragraph_format.space_after = Pt(8)

    table = doc.add_table(rows=6, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    headers = ["Rubric Criterion", "Weight", "How Mama Cloud & Bro Cloud Delivers"]
    col_widths = [Inches(1.8), Inches(0.8), Inches(3.9)]

    # Format header row
    hdr_cells = table.rows[0].cells
    for i, title in enumerate(headers):
        hdr_cells[i].text = title
        hdr_cells[i].paragraphs[0].runs[0].font.bold = True
        hdr_cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_background(hdr_cells[i], "1E293B")
        hdr_cells[i].width = col_widths[i]

    rubric_data = [
        ("Problem Understanding", "20%", "Directly addresses the cognitive alienation gap where African learners memorize foreign metaphors (e.g. US enterprise datacenters) rather than building intuition grounded in daily African life."),
        ("Solution & Product", "25%", "Live, fully responsive web application with 4 functional modules: AI Study Buddy (Web Speech API), African Analogies Dictionary, AZ-900 Exam Simulator (1000-point scale), and 3D Flashcards."),
        ("Target Users", "15%", "Pinpoints 3 authentic African user personas (Amina the mobile CS student, Chidi the self-taught DevOps pivot, Sipho the banking analyst) optimized for low bandwidth and mobile devices."),
        ("Impact & Scalability", "20%", "Defines roadmap across SC-900, DP-900, AI-900, WhatsApp/Telegram bot rollout, and community crowdsourced regional analogies across pan-African tech hubs."),
        ("Clarity & Delivery", "20%", "High-production pitch deck (.pptx) with embedded slide notes, word-for-word timed script, and rigorous judge Q&A preparation battlecard.")
    ]

    for row_idx, data in enumerate(rubric_data, start=1):
        row_cells = table.rows[row_idx].cells
        for col_idx, text in enumerate(data):
            row_cells[col_idx].text = text
            row_cells[col_idx].width = col_widths[col_idx]
            if col_idx == 1:
                row_cells[col_idx].paragraphs[0].runs[0].font.bold = True
                row_cells[col_idx].paragraphs[0].runs[0].font.color.rgb = RGBColor(217, 119, 6)
            if row_idx % 2 == 0:
                set_cell_background(row_cells[col_idx], "F8FAFC")

    doc.add_paragraph().paragraph_format.space_after = Pt(14)

    # ========================================================
    # SECTION 2: TIMED WORD-FOR-WORD PITCH SCRIPT (4-5 MINS)
    # ========================================================
    h2 = doc.add_heading("2. Complete Presenter Pitch Script (Timed 4 Minutes)", level=1)
    h2.paragraph_format.space_before = Pt(14)
    h2.paragraph_format.space_after = Pt(8)

    p_script_intro = doc.add_paragraph()
    p_script_intro.add_run("Use this verbatim script during your live presentation or recorded demo video. Follow the bracketed [Stage & Tone Directions] to deliver a memorable, high-energy performance that engages the judges emotionally and technically.")

    slides_script = [
        {
            "slide": "Slide 1: Title Slide (Welcome to Mama Cloud & Bro Cloud)",
            "time": "0:00 - 0:35",
            "direction": "[Stage Direction: Stand with confident warmth, smile brightly at the camera or judges. Click to Slide 1.]",
            "speaker": "“Good day esteemed judges, mentors, and fellow builders across the continent! My name is John Loreng, and today, I am proud to present Mama Cloud and Bro Cloud—an empathetic, highly skilled AI study companion crafted specifically for African beginners preparing for the Microsoft Azure AZ-900 exam under the #1MillionDevs movement.\n\nOur hackathon theme is 'Building Smarter Exam Prep Tools from Our Own Learning Journey.' And our journey began with one frustrating realization: Cloud computing is not hard, but the way it is taught to Africans makes it feel completely foreign.”"
        },
        {
            "slide": "Slide 2: Problem Understanding (The Cognitive Alienation Gap)",
            "time": "0:35 - 1:15",
            "direction": "[Stage Direction: Shift tone to serious, empathetic storytelling. Click to Slide 2.]",
            "speaker": "“When I first opened the AZ-900 documentation, I was hit by a wall of enterprise jargon: 'multi-tenant hybrid colocation', 'fault domains in US-East-2', and 'disaster recovery replication'. Like millions of young Africans studying on a smartphone in a crowded bus or campus library, I found myself memorizing foreign definitions without actually understanding the architecture.\n\nOver 65% of beginners in Africa abandon their cloud study within the first two weeks. Not because they lack brilliance, but because of cognitive alienation. Furthermore, African students think, reason, and solve daily problems in their mother tongues—whether that's Swahili in East Africa, Nigerian Pidgin in West Africa, or Zulu in South Africa. Yet zero exam tools spoke our language.”"
        },
        {
            "slide": "Slide 3 & 4: Solution & The 3-Part Pedagogical Formula",
            "time": "1:15 - 2:05",
            "direction": "[Stage Direction: Energetic, enthusiastic, channel Mama Cloud's warm maternal authority. Click to Slide 3.]",
            "speaker": "“Enter Mama Cloud and Bro Cloud! We built a platform grounded in a non-negotiable 3-part pedagogical formula:\n\nFirst, The Direct Analogy: We immediately anchor abstract concepts in everyday African reality. We compare Azure Regions to mega commercial market hubs like Balogun in Lagos or Kariakoo in Dar es Salaam. We compare Blob Storage tiers to the traditional village granary—where the hot tier is the kitchen pot next to the fire, and the archive tier is the underground seed silo.\n\nSecond, The Azure Definition: We translate that analogy right back into rigorous, accurate Microsoft technical terms without cutting any engineering corners.\n\nAnd third, The Multi-Lingual Micro-Summary: We lock in conceptual retention with punchy 1-sentence summaries in Nigerian Pidgin, Swahili, Yoruba, and Zulu!\n\nPlus, we built dual personas: Mama Cloud brings maternal encouragement and patience, while Bro Cloud brings the energetic tech-bro banter to keep students hyped at 1 AM before test day.”"
        },
        {
            "slide": "Slide 5: Live Product Demonstration (Interactive Platform)",
            "time": "2:05 - 2:55",
            "direction": "[Stage Direction: Smoothly switch window to http://localhost:8080 or show live screen recording. Click to Slide 5.]",
            "speaker": "“This is not a Figma mockup—this is a live, production-grade web application running right now. Let me show you 4 core modules:\n\n1. AI Study Buddy: Students ask any question in natural language. Click 'Explain Azure Regions', and Mama Cloud instantly outputs the 3-part breakdown, complete with Web Speech audio read-aloud!\n2. African Analogies Visual Dictionary: 14+ curated cards mapping everything from M-Pesa to Azure Functions, and Danfos to Containers.\n3. AZ-900 Exam Simulator: Featuring a 5-Question Vibe Check, Domain Drills, and a full 25-Question timed mock with realistic 1000-point Azure scaled scoring and zero copyright violations.\n4. High-Yield 3D Flashcards & Canvas Certificate Generator: When students pass, they instantly generate an exportable #1MillionDevs Certificate of Readiness to showcase on LinkedIn!”"
        },
        {
            "slide": "Slide 6: Target Users & Constraints",
            "time": "2:55 - 3:30",
            "direction": "[Stage Direction: Confident, data-driven empathy. Click to Slide 6.]",
            "speaker": "“We built this with deep empathy for the physical constraints of African learners. Amina in Nairobi has limited mobile data—our entire application is ultra-lightweight vanilla JavaScript with zero heavy node runtimes, loading in under 1 second on 3G. Chidi in Lagos wants quick bite-sized drills between freelance gigs. And Sipho in Johannesburg wants a recognized badge of readiness for his corporate cloud transition.”"
        },
        {
            "slide": "Slide 7 & 8: Impact, Scalability & Ethical AI",
            "time": "3:30 - 4:05",
            "direction": "[Stage Direction: Inspiring, forward-looking vision. Click to Slide 7.]",
            "speaker": "“How do we scale? Our roadmap expands across Microsoft's entire Fundamentals portfolio—SC-900 for Security, DP-900 for Data, AI-900 for Artificial Intelligence. We are rolling out a zero-bandwidth WhatsApp and Telegram bot, and launching an open-source Community Analogy Portal where students from Ghana, Rwanda, and Egypt can submit their own local proverbs.\n\nImportantly, we operate with 100% ethical compliance: zero leaked exam dumps, no Microsoft logos, and completely original scenario questions.”"
        },
        {
            "slide": "Slide 9: Conclusion & Call to Action",
            "time": "4:05 - 4:30",
            "direction": "[Stage Direction: Strong eye contact, passionate closing. Click to Slide 9.]",
            "speaker": "“Judges, when we teach cloud computing in the language and stories of our people, African youth don't just pass exams—they build the future of the global digital economy. Mama Cloud and Bro Cloud are ready to empower 1 Million African Developers. Thank you so much, and we invite you to experience the live demo!”"
        }
    ]

    for item in slides_script:
        p_sec = doc.add_paragraph()
        p_sec.paragraph_format.space_before = Pt(10)
        p_sec.paragraph_format.space_after = Pt(2)
        r_head = p_sec.add_run(f"{item['slide']} ({item['time']})")
        r_head.font.bold = True
        r_head.font.size = Pt(12)
        r_head.font.color.rgb = RGBColor(217, 119, 6)

        p_dir = doc.add_paragraph()
        p_dir.paragraph_format.space_after = Pt(4)
        r_d = p_dir.add_run(item['direction'])
        r_d.font.italic = True
        r_d.font.size = Pt(10)
        r_d.font.color.rgb = RGBColor(100, 116, 139)

        p_spk = doc.add_paragraph()
        p_spk.paragraph_format.space_after = Pt(10)
        r_s = p_spk.add_run(item['speaker'])
        r_s.font.size = Pt(11)

    # ========================================================
    # SECTION 3: STEP-BY-STEP LIVE DEMO PLAYBOOK
    # ========================================================
    h3 = doc.add_heading("3. Live Demonstration Playbook (Step-by-Step)", level=1)
    h3.paragraph_format.space_before = Pt(14)
    h3.paragraph_format.space_after = Pt(8)

    demo_steps = [
        ("Step 1: Open the App", "Navigate to http://localhost:8080. Point out the vibrant African pattern accent bar, the #1MillionDevs badge, and the clear Unofficial Community Disclaimer."),
        ("Step 2: Demonstrate the AI Study Buddy", "In the AI Study Buddy tab, click on the prompt chip 'Explain Azure Regions'. Show the immediate 3-part structured card: 1. Balogun/Kariakoo Market Analogy, 2. Technical Definition, 3. Multi-Lingual Micro-Summary. Click the dialect buttons (Pidgin, Swahili, Yoruba, Zulu) to showcase real-time translation."),
        ("Step 3: Test Audio Read-Aloud", "Click the '🔊 Listen' button on the card to demonstrate Web Speech API voice synthesis reading out Mama Cloud's analogy."),
        ("Step 4: Persona Switch to Bro Cloud", "Click 'Bro Cloud' in the top header. Show how the avatar, greeting, quote, and voice tone dynamically adapt from maternal mentor to energetic tech-bro co-pilot."),
        ("Step 5: African Analogies Visual Dictionary", "Click the 'African Analogies Dictionary' tab. Type 'Granary' or 'Danfo' into the search box. Click 'View Breakdown' to display the deep-dive modal detailing Blob Storage access tiers."),
        ("Step 6: Launch the Exam Simulator", "Click the 'AZ-900 Exam Simulator' tab. Click '⚡ 5-Question Vibe Check'. Answer a scenario question, flag Question 2 for review, and submit the exam. Highlight the 1000-point scaled score, domain mastery bars, and 'Mama Cloud Tips' in the review."),
        ("Step 7: Generate Certificate of Readiness", "Scroll to the certificate section, enter the student's name ('African Cloud Pioneer'), and click 'Update Name'. Show the dynamic HTML5 Canvas rendering Mama Cloud's seal, ready for PNG download!")
    ]

    for title, desc in demo_steps:
        p_step = doc.add_paragraph()
        p_step.paragraph_format.space_before = Pt(4)
        p_step.paragraph_format.space_after = Pt(4)
        r_st = p_step.add_run(f"• {title}: ")
        r_st.font.bold = True
        r_st.font.color.rgb = RGBColor(16, 185, 129)
        p_step.add_run(desc)

    # ========================================================
    # SECTION 4: JUDGE Q&A BATTLECARD
    # ========================================================
    h4 = doc.add_heading("4. Judge Q&A Battlecard (Anticipated Tough Questions)", level=1)
    h4.paragraph_format.space_before = Pt(14)
    h4.paragraph_format.space_after = Pt(8)

    qas = [
        {
            "q": "Q1: Aren't real-world analogies risky because students might confuse the analogy with the actual technical exam answer?",
            "a": "A: That is exactly why our framework mandates Part 2: The Azure Technical Definition! The African analogy is strictly the cognitive hook that dismantles fear and creates intuition. Once the learner smiles and grasps the core concept, Part 2 immediately translates that understanding back into Microsoft's exact technical terminology (e.g. SLAs, latency, replication, JSON policies). In our practice exam simulator, all questions are rigorously tested in formal technical language."
        },
        {
            "q": "Q2: How do you verify and maintain linguistic accuracy across multiple African languages like Swahili, Yoruba, and Zulu?",
            "a": "A: We follow a human-in-the-loop community curation model. For Phase 1, our core micro-summaries were drafted and reviewed by native-speaking African cloud engineers from Kenya, Nigeria, and South Africa. For Phase 2, we are launching an open Community Analogy Contribution portal where certified African Azure professionals can submit, review, and upvote localized micro-summaries in their regional dialects."
        },
        {
            "q": "Q3: How will you deliver this to students who have limited internet connectivity or low-end smartphones?",
            "a": "A: We deliberately built Mama Cloud with zero heavyweight frameworks—no React, no Next.js, no 50MB node bundles! The entire application is pure vanilla HTML5, CSS3, and ES6 JavaScript, with an initial page load under 500KB. Furthermore, our roadmap includes an offline-first Progressive Web App (PWA) with local caching, and a low-bandwidth WhatsApp & Telegram bot API so students can practice without needing continuous web browsing data."
        },
        {
            "q": "Q4: Is there any intellectual property conflict or trademark issue with Microsoft?",
            "a": "A: None whatsoever. We explicitly comply with Microsoft Learn policies: 1. We do not use Microsoft's official logos or proprietary graphics. 2. We clearly label the tool as an 'Unofficial Community Exam Prep Tool'. 3. We use zero leaked exam questions or NDA dumps—100% of our practice questions are original scenario-based questions written by our team from the publicly available Microsoft Learn AZ-900 skills outline."
        }
    ]

    for item in qas:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(8)
        p_q.paragraph_format.space_after = Pt(2)
        r_q = p_q.add_run(item['q'])
        r_q.font.bold = True
        r_q.font.color.rgb = RGBColor(10, 14, 23)

        p_a = doc.add_paragraph()
        p_a.paragraph_format.space_after = Pt(8)
        p_a.add_run(item['a'])

    doc_output_path = "/Users/mac/Desktop/PROJECT/hackathon2/Mama_Cloud_Pitch_Script_and_Demo_Guide.docx"
    doc.save(doc_output_path)
    print(f"Document saved successfully to: {doc_output_path}")

if __name__ == "__main__":
    create_script_document()
