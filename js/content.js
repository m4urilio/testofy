/* ============================================================
   TESTOFY — Content File
   Edit this file to add your chapters and content blocks.
   ============================================================

   BLOCK TYPES:
   ─────────────────────────────────────────────────────────
   { type: 'text',      content: '<p>...</p>' }
   { type: 'title',     content: 'Section title' }
   { type: 'callout',   content: '<strong>Label:</strong> text', variant: '' | 'red' }
   { type: 'tip',       icon: '💡', label: 'Tip', content: '...' }
   { type: 'quote',     text: '...', author: '...' }
   { type: 'checklist', title: '...', id: 'unique-id', items: ['item1','item2'] }
   { type: 'list',      title: '...', items: ['item1','item2'] }
   { type: 'divider' }
   ─────────────────────────────────────────────────────────
*/

const BOOK = {
  title:    'Testofy',
  subtitle: 'Reclaim Your Peak Performance',
  chapters: [

    // ── INTRODUCTION ───────────────────────────────────────
    {
      title: 'Introduction: The Silent Decline',
      description: 'There\'s a quiet crisis happening to men everywhere — and it\'s time to face it.',
      blocks: [
        {
          type: 'text',
          content: `<p>There's a quiet crisis happening to men everywhere. Not in the gym. Not in the office. In the bedroom.</p>
<p>Men who were once confident, energetic, and sexually capable are now struggling in silence. They're waking up exhausted. They're losing interest in sex. They're underperforming when it matters most — and they don't know why.</p>
<p>And the worst part? They think it's just them.</p>`
        },
        {
          type: 'callout',
          content: `<strong>The truth:</strong> It's not just you. This is a widespread, systemic problem driven by the modern world — and it has very real, fixable causes.`
        },
        {
          type: 'text',
          content: `<p>This book is not about gimmicks. It's not about pills that promise miracles. It's about understanding what's actually happening inside your body — and giving you the tools to fix it at the root.</p>
<p>By the time you finish reading, you'll understand exactly why your performance has declined, what systems in your body are responsible, and what you can do — starting today — to begin turning things around.</p>`
        },
        {
          type: 'quote',
          text: 'A man who understands what broke can fix it. A man who ignores it keeps losing.',
          author: 'Testofy'
        },
        {
          type: 'text',
          content: `<p>This is your reset. This is your blueprint. Welcome to Testofy.</p>`
        }
      ]
    },

    // ── CHAPTER 1 ──────────────────────────────────────────
    {
      title: 'Chapter 1: The Performance Crisis',
      description: 'Why men are losing their edge — and the six modern enemies working against you every day.',
      blocks: [
        {
          type: 'text',
          content: `<p>Something has shifted in the modern man. Men in their 30s, 40s, and even late 20s are experiencing what used to be considered problems of old age: low libido, erectile difficulties, reduced stamina, brain fog, irritability, and a general feeling that something is "off."</p>
<p>This is the silent decline. And it's not natural. It's manufactured.</p>`
        },
        {
          type: 'title',
          content: 'The Modern Enemies of Male Performance'
        },
        {
          type: 'text',
          content: `<p>Your body was built to perform. But the modern world has introduced a set of conditions your biology was never designed to handle. Here are the six biggest threats to your performance:</p>`
        },
        {
          type: 'tip',
          icon: '⚡',
          label: 'Enemy #1',
          content: '<strong>Chronic Stress.</strong> When you\'re constantly stressed, your body floods with cortisol. Cortisol is the enemy of testosterone. The two hormones compete — when one goes up, the other comes down. Modern men live in a permanent stress loop: work deadlines, financial pressure, relationship tension, digital overstimulation. The result is chronically elevated cortisol and chronically suppressed testosterone.'
        },
        {
          type: 'tip',
          icon: '😴',
          label: 'Enemy #2',
          content: '<strong>Sleep Deprivation.</strong> 70% of your daily testosterone is produced during deep sleep. If you\'re sleeping less than 7 hours — or your sleep is poor quality — your testosterone production is taking a direct hit. One week of 5-hour nights can reduce testosterone levels by up to 15%. That\'s not theory. That\'s documented science.'
        },
        {
          type: 'tip',
          icon: '🪑',
          label: 'Enemy #3',
          content: '<strong>Sedentary Living.</strong> Your body produces testosterone in response to physical demand. When you stop demanding things of your body — when you sit all day and move as little as possible — your body stops producing testosterone at full capacity. Movement is a hormonal signal. Stillness sends the opposite signal.'
        },
        {
          type: 'tip',
          icon: '🍔',
          label: 'Enemy #4',
          content: '<strong>Processed Food & Nutritional Deficiency.</strong> Testosterone production requires specific raw materials: zinc, magnesium, vitamin D, healthy fats, and cholesterol. The modern diet — ultra-processed, refined, additive-laden — is critically deficient in all of these. Worse, many processed foods contain endocrine disruptors (found in plastics, food packaging, and additives) that actively interfere with hormone production.'
        },
        {
          type: 'tip',
          icon: '📱',
          label: 'Enemy #5',
          content: '<strong>Porn & Dopamine Overload.</strong> Pornography desensitizes the brain\'s reward system through repeated dopamine flooding. Over time, real sexual stimulation produces less and less dopamine response — making it harder to get aroused, stay aroused, or feel genuine desire for a real partner. This is not a moral judgment. It\'s neuroscience.'
        },
        {
          type: 'tip',
          icon: '🧭',
          label: 'Enemy #6',
          content: '<strong>Lack of Purpose & Drive.</strong> Testosterone is not just a sex hormone — it\'s a drive hormone. Men who feel purposeless, directionless, or unmotivated have consistently lower testosterone levels. The brain and body are deeply connected. A man who has lost his "why" begins losing his biology with it.'
        },
        {
          type: 'callout',
          content: `<strong>The compound effect:</strong> Most men aren't dealing with one of these enemies — they're dealing with all six simultaneously. The combined impact is far worse than any single factor alone.`
        },
        {
          type: 'checklist',
          title: 'Self-Assessment: Identify Your Enemies',
          id: 'ch1-enemies',
          items: [
            'I experience chronic or daily stress',
            'I regularly sleep less than 7 hours or have poor sleep quality',
            'I have a largely sedentary lifestyle or desk job',
            'My diet is mostly processed or convenience food',
            'I watch porn regularly (more than once per week)',
            'I feel a lack of direction, purpose, or motivation in my life'
          ]
        },
        {
          type: 'text',
          content: `<p>The more boxes you checked, the more pressure is being placed on your hormonal system. But here's the critical thing to understand: every single one of these is fixable. None of them require medication. None of them require surgery. They require knowledge, strategy, and consistent action — which is exactly what the rest of this book provides.</p>`
        }
      ]
    },

    // ── CHAPTER 2 ──────────────────────────────────────────
    {
      title: 'Chapter 2: Testosterone Ignition',
      description: 'The hormonal foundation of male power — what testosterone really does and how to optimize it naturally.',
      blocks: [
        {
          type: 'text',
          content: `<p>Testosterone is the defining hormone of male biology. But it does far more than most men realize. Yes, it drives libido and sexual performance. But it also governs your energy levels, your muscle mass, your fat distribution, your mood, your confidence, your drive to compete, and your ability to think clearly.</p>
<p>When testosterone is low, everything suffers. When testosterone is optimized, everything improves.</p>`
        },
        {
          type: 'quote',
          text: 'Testosterone is not just about sex. It\'s the master molecule of male vitality.',
          author: 'Testofy'
        },
        {
          type: 'title',
          content: 'How Testosterone Is Made'
        },
        {
          type: 'text',
          content: `<p>Testosterone is produced primarily in the testes through a process triggered by the brain. The hypothalamus signals the pituitary gland, which signals the testes to produce testosterone. This is called the HPT axis (Hypothalamic-Pituitary-Testicular axis).</p>
<p>This axis is sensitive to disruption. Stress, poor sleep, nutritional deficiencies, excessive alcohol, and certain medications can all interrupt the signaling chain and reduce testosterone output.</p>`
        },
        {
          type: 'callout',
          content: `<strong>Key insight:</strong> You don't just "have" testosterone. Your body is either producing it optimally or it isn't — and dozens of daily inputs determine which one is happening.`
        },
        {
          type: 'title',
          content: 'The Testosterone Optimization Stack'
        },
        {
          type: 'list',
          title: 'Nutritional Foundations',
          items: [
            '<strong>Zinc:</strong> Essential for testosterone synthesis. Found in oysters, red meat, pumpkin seeds. Most men are deficient.',
            '<strong>Magnesium:</strong> Regulates over 300 enzymatic reactions, including hormone production. Found in leafy greens, nuts, dark chocolate.',
            '<strong>Vitamin D3:</strong> Acts as a steroid hormone precursor. Get sun exposure daily or supplement with 2,000–5,000 IU.',
            '<strong>Healthy Fats:</strong> Testosterone is made from cholesterol. Eat eggs, avocado, olive oil, fatty fish.',
            '<strong>Cruciferous Vegetables:</strong> Broccoli, cauliflower, and kale help clear excess estrogen from the body, allowing testosterone to dominate.'
          ]
        },
        {
          type: 'list',
          title: 'Training for Testosterone',
          items: [
            '<strong>Compound lifts:</strong> Squats, deadlifts, bench press, and rows produce the biggest testosterone spikes.',
            '<strong>Short, intense workouts:</strong> 45–60 minutes of heavy compound lifting is optimal. Longer sessions increase cortisol.',
            '<strong>Sprint intervals:</strong> High-intensity interval training (HIIT) boosts growth hormone and testosterone simultaneously.',
            '<strong>Avoid overtraining:</strong> Chronic overtraining suppresses testosterone. Rest is productive.'
          ]
        },
        {
          type: 'tip',
          icon: '🌙',
          label: 'The Sleep-Testosterone Link',
          content: 'Aim for 7–9 hours of deep, uninterrupted sleep. Keep your room cold (65–68°F / 18–20°C), completely dark, and screen-free. The testosterone surge during deep sleep is one of the most powerful natural boosts available to you — and it\'s completely free.'
        },
        {
          type: 'checklist',
          title: 'Testosterone Ignition Checklist',
          id: 'ch2-testo',
          items: [
            'Eating zinc-rich foods at least 4x per week',
            'Getting 20+ minutes of sun or taking vitamin D3 daily',
            'Including healthy fats (eggs, avocado, olive oil) in daily diet',
            'Doing compound weight training 3–4x per week',
            'Sleeping 7–9 hours in a cold, dark room',
            'Avoiding alcohol more than 2x per week',
            'Managing stress through a daily practice (breathing, walks, journaling)'
          ]
        }
      ]
    },

    // ── CHAPTER 3 ──────────────────────────────────────────
    {
      title: 'Chapter 3: Blood Flow Is King',
      description: 'The hidden science of stronger, harder, longer-lasting erections — and how to optimize it.',
      blocks: [
        {
          type: 'text',
          content: `<p>Here is a truth that most men have never been told: the quality of your erections is a direct measure of your cardiovascular health.</p>
<p>An erection is, fundamentally, a blood flow event. When you're aroused, your brain sends a signal that causes the blood vessels in the penis to dilate and fill with blood. If your blood vessels are constricted, inflamed, or unable to dilate properly — you don't get a full, strong erection.</p>`
        },
        {
          type: 'callout',
          content: `<strong>Important:</strong> Erectile difficulties are often the first visible sign of cardiovascular problems — appearing years before a heart attack or stroke. Fixing blood flow doesn't just improve your sex life. It could save your life.`
        },
        {
          type: 'title',
          content: 'The Role of Nitric Oxide'
        },
        {
          type: 'text',
          content: `<p>The key molecule in erection quality is <strong>nitric oxide (NO)</strong>. Nitric oxide signals blood vessels to relax and dilate, allowing blood to rush in. Without sufficient nitric oxide production, full erections are impossible — regardless of how aroused you are or how high your testosterone is.</p>
<p>The good news: nitric oxide production can be dramatically enhanced through diet, exercise, and specific lifestyle practices.</p>`
        },
        {
          type: 'list',
          title: 'Foods That Boost Nitric Oxide',
          items: [
            '<strong>Beets & beet juice:</strong> Among the highest dietary sources of nitrates that convert to NO.',
            '<strong>Leafy greens:</strong> Spinach, arugula, kale — high in nitrates and antioxidants.',
            '<strong>Pomegranate:</strong> Shown in studies to significantly increase NO levels and improve erectile function.',
            '<strong>Watermelon:</strong> Contains citrulline, which the body converts to arginine and then to nitric oxide.',
            '<strong>Dark chocolate (85%+):</strong> Flavonoids protect NO from being broken down.',
            '<strong>Garlic:</strong> Activates the enzyme that produces nitric oxide directly.'
          ]
        },
        {
          type: 'title',
          content: 'The Blood Flow Killers'
        },
        {
          type: 'list',
          title: 'What Destroys Your Blood Flow',
          items: [
            '<strong>Smoking:</strong> Directly damages blood vessel lining and reduces NO production.',
            '<strong>Excessive alcohol:</strong> Acts as a vasodepressant and reduces arousal signaling.',
            '<strong>Chronic sitting:</strong> Compresses pelvic blood vessels and reduces circulation to the genitals.',
            '<strong>Sugar & refined carbs:</strong> Cause inflammation and damage the endothelium (blood vessel lining).',
            '<strong>Stress:</strong> Triggers vasoconstriction — the opposite of what you need for an erection.'
          ]
        },
        {
          type: 'tip',
          icon: '🏃',
          label: 'Cardio for Performance',
          content: 'Zone 2 cardio (brisk walking, light jogging, cycling) for 30+ minutes, 4–5x per week is one of the most powerful tools for improving blood flow and erectile quality. It trains your cardiovascular system to deliver blood efficiently under demand.'
        },
        {
          type: 'tip',
          icon: '💪',
          label: 'Kegel Exercises',
          content: 'Strengthening the pelvic floor muscles (the same muscles you use to stop urination) directly improves erection hardness, duration, and ejaculatory control. Perform 3 sets of 10–15 kegel contractions daily. Hold each contraction for 3–5 seconds.'
        },
        {
          type: 'checklist',
          title: 'Blood Flow Optimization Checklist',
          id: 'ch3-bloodflow',
          items: [
            'Eating at least one NO-boosting food daily (beets, greens, pomegranate)',
            'Doing 30+ min of Zone 2 cardio 4–5x per week',
            'Practicing kegel exercises daily',
            'Avoiding smoking and limiting alcohol to 1–2 drinks max',
            'Reducing sugar and processed carbs in diet',
            'Taking regular breaks from sitting every 60 minutes',
            'Staying hydrated (minimum 2–3L water daily)'
          ]
        }
      ]
    },

    // ── CHAPTER 4 ──────────────────────────────────────────
    {
      title: 'Chapter 4: The Mental Switch',
      description: 'Eliminating performance anxiety and rebuilding the sexual confidence that stress has stolen from you.',
      blocks: [
        {
          type: 'text',
          content: `<p>You can have perfect testosterone levels. You can have excellent cardiovascular health. And you can still fail in bed — because of what's happening between your ears.</p>
<p>Performance anxiety is one of the most common and least talked about causes of erectile dysfunction and sexual underperformance in men under 50. And unlike hormonal or vascular causes, it operates through a completely different mechanism: the nervous system.</p>`
        },
        {
          type: 'title',
          content: 'The Anxiety-Erection Paradox'
        },
        {
          type: 'text',
          content: `<p>An erection requires your parasympathetic nervous system to be dominant — the "rest and digest" state. Anxiety activates the sympathetic nervous system — "fight or flight." These two states are mutually exclusive. You cannot be truly anxious and truly aroused at the same time.</p>
<p>This is why performance anxiety is self-fulfilling: you worry about not performing, which activates the sympathetic system, which blocks the erection, which confirms your fear, which increases your anxiety next time.</p>`
        },
        {
          type: 'callout',
          variant: 'red',
          content: `<strong>Breaking the cycle</strong> requires interrupting the anxiety loop at multiple points — before sex, during arousal, and after performance — through specific mental and physical techniques.`
        },
        {
          type: 'title',
          content: 'Techniques to Activate the Parasympathetic State'
        },
        {
          type: 'tip',
          icon: '🫁',
          label: 'Box Breathing',
          content: 'Inhale for 4 counts. Hold for 4 counts. Exhale for 4 counts. Hold for 4 counts. Repeat 4–6 cycles. This directly activates the vagus nerve and shifts your nervous system into parasympathetic dominance within minutes. Practice this before sexual situations and during moments of tension.'
        },
        {
          type: 'tip',
          icon: '🧠',
          label: 'Cognitive Reframing',
          content: 'Replace "I have to perform" with "I get to connect." Replace "What if I fail?" with "I\'m here and present." Your brain responds to the story you tell it. The goal is not to eliminate all nervous energy — it\'s to redirect it from threat-mode into presence-mode.'
        },
        {
          type: 'tip',
          icon: '🔇',
          label: 'Sensate Focus',
          content: 'Remove the goal of penetration entirely for a period of time. Focus on touch, intimacy, and pleasure without outcome pressure. This is a clinically proven method to break performance anxiety cycles. When the brain stops treating sex as a "test," the anxiety response gradually dissolves.'
        },
        {
          type: 'title',
          content: 'Rebuilding Sexual Confidence'
        },
        {
          type: 'list',
          title: 'Daily Confidence Practices',
          items: [
            '<strong>Cold showers:</strong> Daily cold exposure builds mental resilience and reduces anxiety over time.',
            '<strong>Physical training:</strong> Men who exercise consistently report significantly higher sexual confidence and body image.',
            '<strong>Reduce porn consumption:</strong> Real-world arousal increases when digital stimulation is reduced.',
            '<strong>Communication with partner:</strong> Honest conversations about anxiety reduce pressure dramatically.',
            '<strong>Journaling:</strong> Writing down anxious thoughts externalizes them and reduces their neurological power.'
          ]
        },
        {
          type: 'checklist',
          title: 'Mental Performance Checklist',
          id: 'ch4-mental',
          items: [
            'Practicing box breathing for 5 minutes daily',
            'Replacing performance-focused self-talk with presence-focused self-talk',
            'Reducing or eliminating porn consumption',
            'Having honest conversations with my partner about pressure I feel',
            'Taking cold showers at least 3x per week',
            'Journaling or processing anxiety outside of sexual situations',
            'Redefining sexual success as connection, not just performance'
          ]
        }
      ]
    },

    // ── CHAPTER 5 ──────────────────────────────────────────
    {
      title: 'Chapter 5: The Performance Reset',
      description: 'How men rebuild their edge — the four pillars and the complete 30-day Testofy Protocol.',
      blocks: [
        {
          type: 'text',
          content: `<p>You now understand the four systems that govern male sexual performance: hormones, blood flow, nervous system control, and lifestyle inputs. Each one is a lever. Pull all four levers in the right direction — consistently — and the results compound rapidly.</p>
<p>This chapter gives you the complete 30-day protocol. Not a vague suggestion. A specific, actionable blueprint.</p>`
        },
        {
          type: 'callout',
          content: `<strong>The Testofy Promise:</strong> Follow this protocol for 30 days and you will experience measurable improvements in energy, libido, erection quality, and sexual confidence. Most men see noticeable changes within 10–14 days.`
        },
        {
          type: 'title',
          content: 'The Four Pillars'
        },
        {
          type: 'tip',
          icon: '🔥',
          label: 'Pillar 1: Hormones',
          content: 'Optimize testosterone production through sleep, training, nutrition, and stress reduction. This is the foundation. Without hormonal support, the other pillars are weaker.'
        },
        {
          type: 'tip',
          icon: '❤️',
          label: 'Pillar 2: Blood Flow',
          content: 'Improve cardiovascular function, nitric oxide production, and pelvic circulation through cardio, diet, and targeted exercises. Blood flow is the physical mechanism of performance.'
        },
        {
          type: 'tip',
          icon: '🧠',
          label: 'Pillar 3: Nervous System Control',
          content: 'Shift from chronic sympathetic dominance to parasympathetic availability through breathing practices, reduced stimulation, and mental reframing. Your nervous system state determines whether arousal is possible.'
        },
        {
          type: 'tip',
          icon: '🌿',
          label: 'Pillar 4: Lifestyle Inputs',
          content: 'Remove the inputs that are suppressing your performance: excess alcohol, poor sleep, processed food, excessive porn, and chronic inactivity. Clean inputs produce clean output.'
        },
        {
          type: 'divider'
        },
        {
          type: 'title',
          content: 'The 30-Day Blueprint'
        },
        {
          type: 'list',
          title: 'Week 1: Foundation',
          items: [
            'Commit to 7–8 hours of sleep every night this week',
            'Begin compound weight training 3x this week',
            'Cut alcohol to zero for the first 7 days',
            'Add one NO-boosting food to every meal',
            'Begin box breathing for 5 minutes each morning',
            'Delete or block porn for the 30-day period'
          ]
        },
        {
          type: 'list',
          title: 'Week 2: Build',
          items: [
            'Add 30-minute Zone 2 cardio sessions 4x this week',
            'Begin daily kegel practice (3 sets of 15 reps)',
            'Add zinc and vitamin D3 supplementation',
            'Replace processed snacks with whole foods',
            'Begin daily cold shower exposure (30–60 seconds cold at end)',
            'Start journaling: 5 minutes of brain dump each evening'
          ]
        },
        {
          type: 'list',
          title: 'Week 3: Optimize',
          items: [
            'Increase training intensity (heavier weights or more challenging cardio)',
            'Extend cold shower exposure to 2–3 minutes',
            'Practice sensate focus with partner or solo to rebuild arousal response',
            'Review and eliminate remaining dietary blind spots',
            'Assess sleep quality — address any issues (room temperature, darkness, phone use)',
            'Add magnesium glycinate supplement before bed for deeper sleep'
          ]
        },
        {
          type: 'list',
          title: 'Week 4: Consolidate',
          items: [
            'Maintain all practices from previous weeks',
            'Assess your energy, libido, and performance improvements',
            'Identify the 2–3 practices that made the biggest difference for you',
            'Create a sustainable long-term version of this protocol',
            'Share your progress with your partner or accountability person',
            'Plan your next 30-day cycle with upgraded targets'
          ]
        },
        {
          type: 'checklist',
          title: 'Week 1 Daily Actions',
          id: 'ch5-week1',
          items: [
            'Slept 7–8 hours last night',
            'Did compound training or cardio today',
            'Ate at least one NO-boosting food',
            'Practiced box breathing this morning',
            'Drank 2–3L of water',
            'Avoided alcohol and porn today'
          ]
        },
        {
          type: 'checklist',
          title: 'Week 2–4 Daily Actions',
          id: 'ch5-week2',
          items: [
            'Zone 2 cardio or strength training completed',
            'Kegel exercises done (3 sets)',
            'Cold shower completed',
            'Evening journal/brain dump done',
            'Supplements taken (zinc, D3, magnesium)',
            'Whole food meals — no processed food today',
            'Box breathing or mindfulness practiced'
          ]
        },
        {
          type: 'divider'
        },
        {
          type: 'callout',
          content: `<strong>Remember:</strong> You are not broken. You have been operating under conditions that suppress male performance. Change the conditions, and the performance returns. Your body wants to thrive — it just needs the right inputs.`
        },
        {
          type: 'quote',
          text: 'You don\'t need to become a different man. You need to remove what\'s suppressing the man you already are.',
          author: 'Testofy'
        }
      ]
    },

    // ── CONCLUSION ─────────────────────────────────────────
    {
      title: 'Conclusion: Your New Standard',
      description: 'This is not the end. This is the beginning of the man you\'re capable of being.',
      blocks: [
        {
          type: 'text',
          content: `<p>You've now walked through the complete Testofy framework. You understand the forces that have been working against you. You understand the biology that governs your performance. And you have a concrete, 30-day protocol to begin reversing years of decline in a matter of weeks.</p>
<p>But more important than any single technique is the mindset shift that should now be taking place: you are not a passive recipient of your biology. You are an active architect of it.</p>`
        },
        {
          type: 'callout',
          content: `<strong>The highest performers</strong> — in the bedroom, in the gym, in life — are not genetically gifted. They are systemically disciplined. They've built environments, habits, and inputs that consistently signal their biology to produce its best output.`
        },
        {
          type: 'text',
          content: `<p>This is not about achieving some peak once and then fading again. It's about establishing a new standard — a baseline of energy, vitality, confidence, and capability that you maintain for life.</p>
<p>The work you do on these four pillars doesn't just improve your sexual performance. It improves every area of your life. Men who are hormonally healthy, cardiovascularly strong, mentally calm, and lifestyle-disciplined are better leaders, better partners, better fathers, and better versions of themselves in every context.</p>`
        },
        {
          type: 'quote',
          text: 'Peak performance is not a destination. It\'s a practice. And it starts with a single decision to stop accepting less than you\'re capable of.',
          author: 'Testofy'
        },
        {
          type: 'checklist',
          title: 'Your Long-Term Commitment',
          id: 'conclusion-commit',
          items: [
            'I will prioritize 7–9 hours of quality sleep every night',
            'I will train with weights and cardio consistently each week',
            'I will eat foods that fuel my hormones and blood flow',
            'I will manage stress through daily practices — not avoidance',
            'I will protect my nervous system from overstimulation',
            'I will keep my sexual confidence rooted in presence, not performance',
            'I will complete at least one full 30-day Testofy Protocol cycle'
          ]
        },
        {
          type: 'text',
          content: `<p>You came here because something wasn't right. That awareness — that refusal to accept the decline as inevitable — is the most important thing. It means you're already ahead of the men who looked away.</p>
<p>Now it's time to do the work.</p>
<p><strong>Welcome to your new standard.</strong></p>`
        }
      ]
    }

  ]
};
