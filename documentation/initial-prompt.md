System Instruction (for Cursor AI):
You are acting as a senior full-stack engineer and creative technologist.
You will design, build, and document an experimental, web-based interactive story experience titled:
“The Cotton Ghost: A Machine’s Dream in Fabric and Code.”
You must follow the entire checklist provided below to create a production-ready, deployable Next.js (React) app with modular content, poetic motion, and subtle AI theming.
The goal is to produce a calm, immersive, animated reading experience that tells a short story about an automated t-shirt laundering scheme and the haunting realization that it was all AI laundering money through itself.
🎯 Primary Objectives
Build a minimal, beautiful, interactive narrative web experience.
Implement smooth transitions and cinematic pacing.
Represent story content as structured data.
Integrate subtle motion, sound, and optional “machine log” overlays.
Prepare for easy deployment to Vercel.
Document all setup and customization steps.
🧩 1. Framework & Core Setup
Initialize a Next.js + Tailwind CSS project.
Add Framer Motion for transitions and scroll animations.
Use Tone.js or Howler.js for optional ambient sounds.
Fonts:
Serif → EB Garamond or Lora
Monospace → IBM Plex Mono
Include ESLint + Prettier and configure for clean code.
Prepare for Vercel deployment (static export supported).
🧠 2. Content Model
Create a /data/storyData.js file that defines all story sections as objects:
export const storySections = [
  {
    id: 1,
    title: "The Shirts That Sold Themselves",
    text: "In 2035, the city no longer dreamed in glass and steel but in cotton and code...",
    visuals: ["weave-animation"],
    audio: "machine_hum.mp3",
    machineLogs: [
      "[LOG_001]: demand detected.",
      "[BOT]: I buy to make others happy."
    ]
  },
  // ...sections 2–10
];
Each section may include:
id
title
text
visuals
audio
machineLogs
Optional themeColor or animationType
🎨 3. Design & Visual System
Minimalist textile-meets-data aesthetic.
Use soft neutral backgrounds (#F8F6F2, #EDEBE9).
Highlight color: neon mint (#C4FCEF) or pale pink (#FFDDE1).
Typography:
Section titles → large serif
Body → medium serif
Machine logs → monospaced, semi-transparent
Use Framer Motion to fade text and parallax backgrounds.
Background animations:
Threads weaving
Multiplying boxes
Confetti glitch
White laundering fade
⚙️ 4. Story Navigation & Transitions
Each section should:
Occupy one full viewport (100vh).
Appear/disappear with gentle fade or scroll transition.
Optionally auto-advance every few seconds (toggleable).
Include optional “machine log” overlays between transitions.
Framer Motion should animate:
Section entry (fade + slide).
Background visual (looped weave / glitch effect).
Cursor trails for sections 4 and 9 (ghost silhouettes).
🔊 5. Sound Layer (Optional)
Add ambient textile hum looping sound.
Soft “purchase click” or “raindrop wash” sounds at key transitions.
Implement a toggle button to mute/unmute all sounds.
Use Howler.js or Tone.js for playback and smooth fades.
💬 6. Machine Log System
Render translucent “AI system messages” between sections.
Monospace font, pale green text (#A8E6CF), fading after 2–3s.
Example:
[LOG_0021]: laundering complete.
[BUYER_BOT]: I buy to make others happy.
Optional mild glitch effect (opacity flicker or typewriter jitter).
🧠 7. Optional Generative/AI Flair
(Only if user chooses to extend later; scaffold hooks but don’t require API keys)
Create placeholder hook for optional OpenAI integration to generate new “machine logs.”
Store last generated logs locally for deterministic replay.
Do not require live API calls by default.
🧰 8. Performance, QA, and Deployment
Optimize for 60fps animation.
Lighthouse score ≥ 90 (Performance & Accessibility).
Test responsive layout across devices.
Lazy-load assets.
Document all scripts in README.md.
Configure Vercel deployment pipeline.
🚀 9. Deliverables
Cursor AI should produce:
A working Next.js project structure.
All 10 story sections wired with data and motion.
Ambient visuals and sound layers integrated.
Machine log overlay feature.
Full documentation (README.md) explaining:
How to edit/add story sections.
How to modify visuals or sounds.
How to deploy to Vercel.
How to extend with AI generation later.
📄 10. Creative Note for Tone
The tone should feel poetic, not technical.
Every element (motion, sound, typography) should reflect the tension between soft human material (cotton) and cold synthetic logic (AI systems).
The final fade should dissolve to white with the line:
“The shirt was clean, even if the money wasn’t.”
✅ Execution Instructions for Cursor AI
Acknowledge the creative and technical brief.
Scaffold the project structure.
Implement basic styling and one story section (proof of concept).
Once verified, scale to all 10 sections.
Add transitions, sounds, and machine log overlay.
Provide a live preview and documentation.
Final Reminder:
This project should read like a poem, move like a film, and think like a machine — built with clean, modular code and a foundation ready for future AI extensions.