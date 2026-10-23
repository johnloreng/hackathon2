/**
 * Mama Cloud & Bro Cloud: AI Study Buddy Engine
 * Implements the mandatory 3-part African Analogy Structure:
 * 1. The Direct Analogy (African markets, farming, transport, mobile money)
 * 2. The Azure Definition (Simple, accurate technical terms)
 * 3. The Multi-Lingual Micro-Summary (Swahili, Nigerian Pidgin, Yoruba, Zulu)
 */

class AIBuddyEngine {
  constructor() {
    this.currentPersona = 'mama'; // 'mama' or 'bro'
    this.selectedLanguage = 'pidgin'; // 'pidgin', 'swahili', 'yoruba', 'zulu', 'all'
    this.synth = window.speechSynthesis || null;
    this.isSpeaking = false;
  }

  setPersona(persona) {
    this.currentPersona = persona;
  }

  setLanguage(lang) {
    this.selectedLanguage = lang;
  }

  getGreeting() {
    if (this.currentPersona === 'mama') {
      return {
        name: "Mama Cloud",
        role: "African Cloud Mentor & AZ-900 Study Buddy",
        intro: "E kaabo! Karibu sana mwanangu! I am **Mama Cloud**, your warm, caring AI study buddy. You don't need to fear this AZ-900 exam at all—cloud is simply common sense dressed in tech coats! Ask me any Azure concept, and I'll break it down using our real African everyday life.",
        starterChips: [
          "Explain Azure Regions",
          "What is Blob Storage?",
          "IaaS vs PaaS vs SaaS",
          "CapEx vs OpEx",
          "What is Zero Trust?",
          "How do Resource Locks work?"
        ]
      };
    } else {
      return {
        name: "Bro Cloud",
        role: "Lead Cloud Engineer & Hype Buddy",
        intro: "What's good my tech chief! I am **Bro Cloud**, your co-pilot for the #1MillionDevs movement. No shaking, no dulling fam! Azure looks scary only when people use textbook jargon. Drop any topic right here and let's vibe code your way to that official Microsoft badge!",
        starterChips: [
          "Azure Functions & M-Pesa",
          "Availability Zones in plain English",
          "Shared Responsibility Model",
          "Vertical vs Horizontal Scaling",
          "Microsoft Entra ID & RBAC",
          "Azure Cost Management alerts"
        ]
      };
    }
  }

  /**
   * Search knowledge base or synthesize structured response
   */
  processQuery(userInput) {
    const cleanInput = userInput.trim().toLowerCase();
    
    // Look for best match in AZ900_ANALOGIES
    let matchedConcept = null;
    let highestScore = 0;

    for (const item of AZ900_ANALOGIES) {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const idLower = item.id.toLowerCase();
      const taglineLower = item.tagline.toLowerCase();
      
      if (cleanInput.includes(idLower) || cleanInput.includes(titleLower)) {
        score += 10;
      }
      
      const keywords = {
        'region': ['region', 'location', 'datacenter', 'kariakoo', 'balogun', 'merkato'],
        'zone': ['zone', 'availability zone', 'az', 'fault domain'],
        'blob': ['blob', 'storage', 'granary', 'silo', 'tier', 'archive', 'cool', 'hot'],
        'iaas': ['iaas', 'paas', 'saas', 'shared responsibility', 'bare plot'],
        'capex': ['capex', 'opex', 'expenditure', 'capital', 'cost model', 'bus fare'],
        'scale': ['scale', 'scalability', 'elasticity', 'horizontal', 'vertical', 'scale up'],
        'serverless': ['serverless', 'function', 'azure function', 'event-driven', 'cobbler', 'm-pesa'],
        'entra': ['entra', 'active directory', 'azure ad', 'identity', 'mfa', 'rbac', 'security'],
        'zero': ['zero trust', 'verify', 'least privilege'],
        'policy': ['policy', 'compliance', 'governance', 'resource lock', 'lock', 'padlock'],
        'cost': ['cost', 'pricing calculator', 'tco', 'budget', 'billing'],
        'monitor': ['monitor', 'service health', 'application insights', 'advisor', 'watchman'],
        'vnet': ['vnet', 'network', 'expressroute', 'vpn']
      };

      for (const [key, words] of Object.entries(keywords)) {
        if (item.id.includes(key)) {
          for (const word of words) {
            if (cleanInput.includes(word)) {
              score += 3;
            }
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        matchedConcept = item;
      }
    }

    if (matchedConcept && highestScore >= 3) {
      return this.formatStructuredResponse(matchedConcept);
    }

    // Synthesize fallback response based on keywords if no exact match
    return this.synthesizeCustomResponse(cleanInput);
  }

  formatStructuredResponse(concept) {
    const isMama = this.currentPersona === 'mama';
    const personaIntro = isMama 
      ? `**Mama Cloud's Heart-to-Heart:** Let me break down **${concept.title}** for you like a sweet plate of seasoned plantains!`
      : `**Bro Cloud's Quick Breakdown:** Let's unlock **${concept.title}** real quick, no textbook fluff!`;

    const summaryBlock = this.renderLanguageSummaries(concept.summaries);

    return {
      conceptId: concept.id,
      title: concept.title,
      domain: concept.domainName,
      persona: this.currentPersona,
      intro: personaIntro,
      // Mandatory Part 1: Direct Analogy
      analogyTitle: `1. The Direct Analogy (${concept.tagline})`,
      analogyText: concept.analogy,
      // Mandatory Part 2: Azure Definition
      definitionTitle: "2. The Azure Definition",
      definitionText: concept.azureDefinition,
      // Mandatory Part 3: Multi-Lingual Micro-Summary
      summaryTitle: "3. The Multi-Lingual Micro-Summary",
      summaries: concept.summaries,
      formattedSummary: summaryBlock,
      examTip: concept.examTip
    };
  }

  renderLanguageSummaries(summaries) {
    if (this.selectedLanguage === 'pidgin') {
      return `🇳🇬 **Nigerian Pidgin:** ${summaries.pidgin}`;
    } else if (this.selectedLanguage === 'swahili') {
      return `🇰🇪🇹🇿 **Kiswahili:** ${summaries.swahili}`;
    } else if (this.selectedLanguage === 'yoruba') {
      return `🇳🇬 **Yorùbá:** ${summaries.yoruba}`;
    } else if (this.selectedLanguage === 'zulu') {
      return `🇿🇦 **isiZulu:** ${summaries.zulu}`;
    } else {
      // Return all 4 languages
      return `• 🇳🇬 **Nigerian Pidgin:** ${summaries.pidgin}\n• 🇰🇪🇹🇿 **Kiswahili:** ${summaries.swahili}\n• 🇳🇬 **Yorùbá:** ${summaries.yoruba}\n• 🇿🇦 **isiZulu:** ${summaries.zulu}`;
    }
  }

  synthesizeCustomResponse(rawQuery) {
    const isMama = this.currentPersona === 'mama';
    const title = rawQuery.length > 25 ? rawQuery.substring(0, 25) + "..." : rawQuery;

    return {
      conceptId: "custom",
      title: `Azure Learning: "${rawQuery}"`,
      domain: "AZ-900 Core Cloud Foundation",
      persona: this.currentPersona,
      intro: isMama
        ? `Ah my dear! That's a sharp exam question about **${rawQuery}**. Let's examine it with our African thinking cap!`
        : `Yo fam! Solid question on **${rawQuery}**. Let's map it straight to local ground reality!`,
      analogyTitle: "1. The Direct Analogy (African Real-World Mirror)",
      analogyText: `Think of this like managing a community enterprise or busy open-air market. In cloud computing, every resource—whether compute, database, networking, or identity—is designed to replace the heavy burden of physical ownership. Instead of buying physical equipment that gathers dust or burns in power surges, Azure gives you on-demand access managed by automated digital contracts. Just like using mobile money (M-Pesa / MoMo) instead of walking with sacks of paper currency, Azure turns complex IT into instant, secure digital taps!`,
      definitionTitle: "2. The Azure Definition",
      definitionText: `In Microsoft Azure, this relates to core cloud operational efficiency: provisioning verified, automated cloud resources that deliver high availability, fine-grained access control (RBAC), and automated governance through the Azure Resource Manager (ARM) hierarchy.`,
      summaryTitle: "3. The Multi-Lingual Micro-Summary",
      summaries: {
        pidgin: "Cloud dey help you run fast without carrying heavy burden: pay for only wetin you touch, and let Azure protect your business.",
        swahili: "Wingu linakusaidia kuendesha biashara haraka bila mzigo wa kununua mashine nzito: lipia tu kile unachotumia.",
        yoruba: "Cloud n fun o ni agbara lati se ise pelu iyara lai fi owo ra ero nla: o n sanwo fun eyi to n lo nikan.",
        zulu: "I-Cloud ikusiza ukuba usebenze ngokushesha ngaphandle kokuthenga imishini ebizayo: khokhela lokho okusebenzisayo kuphela."
      },
      formattedSummary: this.renderLanguageSummaries({
        pidgin: "Cloud dey help you run fast without carrying heavy burden: pay for only wetin you touch, and let Azure protect your business.",
        swahili: "Wingu linakusaidia kuendesha biashara haraka bila mzigo wa kununua mashine nzito: lipia tu kile unachotumia.",
        yoruba: "Cloud n fun o ni agbara lati se ise pelu iyara lai fi owo ra ero nla: o n sanwo fun eyi to n lo nikan.",
        zulu: "I-Cloud ikusiza ukuba usebenze ngokushesha ngaphandle kokuthenga imishini ebizayo: khokhela lokho okusebenzisayo kuphela."
      }),
      examTip: "Exam rule: Always look for whether the scenario asks about Cost (OpEx vs CapEx), Resilience (HA/Disaster Recovery), or Security (Least Privilege/RBAC)."
    };
  }

  speak(text) {
    if (!('speechSynthesis' in window)) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = this.currentPersona === 'mama' ? 1.1 : 0.95;

    // Pick warm voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Female')));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => { this.isSpeaking = true; };
    utterance.onend = () => { this.isSpeaking = false; };
    utterance.onerror = () => { this.isSpeaking = false; };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }
}

window.AIBuddyEngine = AIBuddyEngine;
