/**
 * Mama Cloud & Bro Cloud: AZ-900 High-Yield Flashcard Deck
 * Unofficial Community Exam Prep for the #1MillionDevs Movement.
 */

const AZ900_FLASHCARDS = [
  {
    id: "fc-1",
    domain: "Cloud Concepts",
    front: "What is the difference between Vertical Scaling and Horizontal Scaling?",
    back: "• Vertical (Scale UP): Adding more CPU/RAM to a SINGLE machine (feeding your horse vitamins).\n• Horizontal (Scale OUT): Adding MORE machine instances (buying 3 more horses to pull the cart).",
    mnemonic: "UP = Upgraded single engine | OUT = Outnumbering with more engines."
  },
  {
    id: "fc-2",
    domain: "Cloud Concepts",
    front: "What is CapEx vs OpEx?",
    back: "• CapEx: Upfront capital expenditure on physical assets, depreciated over time.\n• OpEx: Ongoing day-to-day operational expenses with no upfront cost; pay-as-you-go consumption model.",
    mnemonic: "CapEx = Buying the Danfo | OpEx = Paying the daily bus fare."
  },
  {
    id: "fc-3",
    domain: "Cloud Concepts",
    front: "Who is responsible for Data and Identity under the Shared Responsibility Model?",
    back: "The CUSTOMER! In ALL cloud models (IaaS, PaaS, SaaS), you are always 100% responsible for your data, devices, and access credentials.",
    mnemonic: "No matter who built the compound gate, you lock your bedroom safe."
  },
  {
    id: "fc-4",
    domain: "Architecture & Services",
    front: "What is an Azure Availability Zone?",
    back: "Physically separate datacenter facilities within the same Azure region, each equipped with independent power, cooling, and networking (minimum 3 zones in supported regions).",
    mnemonic: "3 separate market stalls in town with their own diesel generators."
  },
  {
    id: "fc-5",
    domain: "Architecture & Services",
    front: "What is the distance requirement between Azure Region Pairs?",
    back: "Region pairs are located in the same geography and separated by at least 300 miles (480 km) to ensure resilience against regional disasters. Maintenance is sequenced.",
    mnemonic: "Sister cities 300+ miles apart (like Lagos & Abuja)."
  },
  {
    id: "fc-6",
    domain: "Architecture & Services",
    front: "What is the hierarchy of Azure resource organization?",
    back: "1. Management Groups (top governance across subscriptions)\n2. Subscriptions (billing and access boundary)\n3. Resource Groups (logical project folders)\n4. Resources (VMs, DBs, VNets).",
    mnemonic: "My Sister Rakes Rice (Management Group -> Subscription -> Resource Group -> Resource)."
  },
  {
    id: "fc-7",
    domain: "Architecture & Services",
    front: "What are the 4 Blob Storage Access Tiers?",
    back: "• Hot: Frequently accessed, highest storage cost, lowest access cost.\n• Cool: Infrequent access (min 30 days).\n• Cold: Infrequent access (min 90 days).\n• Archive: Rare offline storage, lowest cost, takes hours to rehydrate.",
    mnemonic: "Hot (Kitchen pot) -> Cool (Storeroom) -> Cold (Farm silo) -> Archive (Underground pit)."
  },
  {
    id: "fc-8",
    domain: "Architecture & Services",
    front: "Does Azure ExpressRoute travel over the public internet?",
    back: "NO! ExpressRoute provides a private, dedicated physical connection from your on-premises datacenter straight to Microsoft cloud services, bypassing the public internet entirely.",
    mnemonic: "ExpressRoute = Private VIP train track; VPN = Encrypted car on public road."
  },
  {
    id: "fc-9",
    domain: "Architecture & Services",
    front: "What are the 3 pillars of the Zero Trust Security Model?",
    back: "1. Verify explicitly (always authenticate).\n2. Use least privileged access (just-in-time / just-enough-access).\n3. Assume breach (treat network as if attacker is already inside).",
    mnemonic: "Verify, Restrict, Assume breach ('Trust nobody, verify cousin from village')."
  },
  {
    id: "fc-10",
    domain: "Management & Governance",
    front: "What are the two types of Azure Resource Locks and what do they block?",
    back: "• CanNotDelete: Users can read and modify, but CANNOT delete.\n• ReadOnly: Users can only read; they CANNOT modify and CANNOT delete.",
    mnemonic: "Locks override RBAC permissions. Inherited downwards to child resources."
  },
  {
    id: "fc-11",
    domain: "Management & Governance",
    front: "What are the 5 pillars of Azure Advisor recommendations?",
    back: "1. Cost (save money)\n2. Security (harden defenses)\n3. Reliability (ensure uptime)\n4. Performance (speed up)\n5. Operational Excellence (best practices)",
    mnemonic: "C-S-R-P-O (Can Smart Roadblocks Protect Operations?)."
  },
  {
    id: "fc-12",
    domain: "Management & Governance",
    front: "Pricing Calculator vs TCO Calculator: What is the key difference?",
    back: "• Pricing Calculator: Estimates future monthly bill for specific Azure services.\n• TCO (Total Cost of Ownership) Calculator: Compares running workloads on-premises (hardware, cooling, staff) vs migrating to Azure.",
    mnemonic: "Pricing = Grocery estimate | TCO = Renting vs buying a house comparison."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AZ900_FLASHCARDS };
}
