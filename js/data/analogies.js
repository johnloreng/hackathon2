/**
 * Mama Cloud & Bro Cloud: AZ-900 African Analogies Knowledge Base
 * Unofficial Community Exam Prep for the #1MillionDevs Movement.
 */

const AZ900_ANALOGIES = [
  // ==========================================
  // DOMAIN 1: CLOUD CONCEPTS (25-30%)
  // ==========================================
  {
    id: "cloud-computing",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "Cloud Computing",
    tagline: "Electricity Grid vs Personal Generator",
    analogy: "Think of Cloud Computing like national electricity tokens or buying water from a municipal tap versus buying your own expensive diesel generator and digging a private borehole. With a generator, you must buy the machine, service the engine, buy fuel every morning, and fix the exhaust when it coughs. With public power tokens, you simply top up your meter and plug in your phone. Cloud computing means renting servers, storage, and databases over the internet from a provider like Microsoft Azure instead of buying racks of noisy computers in your bedroom or office.",
    azureDefinition: "Cloud computing is the on-demand delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet ('the cloud') with pay-as-you-go pricing.",
    examTip: "AZ-900 tests whether you know that cloud computing eliminates upfront capital costs and offers consumption-based billing.",
    summaries: {
      pidgin: "Cloud computing na like to buy NEPA/electric token: you dey pay for only wetin you consume, no need to buy diesel or fix generator yourself.",
      swahili: "Kompyuta ya wingu ni kama kununua umeme wa Luku/tokens: unalipia tu kile unachotumia, huhitaji kununua au kutengeneza jenereta lako mwenyewe.",
      yoruba: "Cloud computing dabi rira kaadi ina (nepa units): o n sanwo fun eyi ti o lo nikan, ko si wahala rira generator tabi epo.",
      zulu: "I-Cloud computing ifana nokuthenga ugesi we-prepaid: ukhokhela lokho okusebenzisayo kuphela, asikho isidingo sokuthenga ijeneretha yakho."
    }
  },
  {
    id: "shared-responsibility",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "Shared Responsibility Model",
    tagline: "The Landlord & Tenant Agreement",
    analogy: "Imagine renting a flat in a gated compound in Nairobi or Lagos. The landlord is responsible for fixing the main roof, the borehole pump, the perimeter gate, and the external walls. But YOU the tenant are responsible for locking your own room door, not giving your house keys to strangers, and keeping your personal gold and cash safe inside your cupboard. The Shared Responsibility Model defines who handles what: Azure protects the physical building, power, and hardware, while you are always responsible for your own data, passwords, and user access.",
    azureDefinition: "The Shared Responsibility Model divides security and operational responsibilities between Microsoft Azure and the customer. The customer ALWAYS retains responsibility for information and data, devices (mobile/PCs), and credential/identity management.",
    examTip: "Exam trap: No matter if it is IaaS, PaaS, or SaaS, the CUSTOMER is always responsible for the data and identities/access!",
    summaries: {
      pidgin: "Na tenant and landlord deal: Azure go guard gate and roof, but na your duty to lock your room door and protect your money and data.",
      swahili: "Ni makubaliano ya mpangaji na mwenye nyumba: Azure inalinda paa na geti kuu, lakini kufunga mlango wa chumba chako na kulinda data yako ni jukumu lako.",
      yoruba: "Adehun laarin onile ati ayalegbe ni: Azure n bo orule ati ode, sugbon iwo lo gbodo ti ilekun re ki o si daabobo data re.",
      zulu: "Kufana nesivumelwano sikamaspala nomqashisi: i-Azure ivikela isakhiwo nendawo, kodwa ukuvikela idatha yakho nezihluthulelo kungumsebenzi wakho."
    }
  },
  {
    id: "iaas-paas-saas",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "IaaS vs PaaS vs SaaS",
    tagline: "Bare Plot of Land vs Food Truck vs Ready Restaurant",
    analogy: "• IaaS (Infrastructure as a Service): Renting an empty plot of land. You must bring your own cement, bricks, roof, and plumbing (OS, software, updates). You have maximum control and maximum work.\n• PaaS (Platform as a Service): Renting a fully equipped bakery or food truck. The oven, gas, and electricity are supplied and maintained. You just bring your flour, sugar, and secret recipe (your code & data).\n• SaaS (Software as a Service): Walking into a restaurant and eating hot jollof rice or ordering food on Chowdeck. You don't cook, wash pots, or buy firewood. You just eat (like Microsoft 365, Gmail, or OneDrive).",
    azureDefinition: "• IaaS: Basic compute, storage, and networking hardware rented as VMs (e.g., Azure VMs).\n• PaaS: Development and deployment environment in the cloud without managing VMs or OS patching (e.g., Azure App Service, Azure SQL Database).\n• SaaS: Complete ready-to-use application accessed via web browser or app (e.g., Microsoft 365).",
    examTip: "Remember: IaaS gives the most control and requires the most management. SaaS requires the least management but offers the least customization.",
    summaries: {
      pidgin: "IaaS na empty land wey you go build yourself; PaaS na furnished kitchen wey you just cook your code; SaaS na already-cooked party jollof wey you just chop.",
      swahili: "IaaS ni kiwanja kitupu unajenga mwenyewe; PaaS ni jiko lililokamilika unaleta tu unga na kupika; SaaS ni chakula tayari mezani unakula tu.",
      yoruba: "IaaS dabi ile ti ko tii pari ti o ma ko funra re; PaaS dabi ibi idana ti a ti seto, iwo kan da eja ati epo sinu re; SaaS dabi ounje ajeye.",
      zulu: "I-IaaS yisiza esingenalutho ozakhela kuso; i-PaaS yikhishi eliphelele oletha kulo ukudla kuphela; i-SaaS wukudla osekuphekiwe olindele ukukudla."
    }
  },
  {
    id: "capex-vs-opex",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "CapEx vs OpEx",
    tagline: "Buying a Matatu vs Paying Daily Bus Fare",
    analogy: "CapEx (Capital Expenditure) is buying a brand new 14-seater Toyota HiAce Matatu with your entire savings upfront before you even carry one passenger. It ties down huge capital and depreciates over time. OpEx (Operational Expenditure) is paying small bus fare every morning as you commute to work or university. Cloud computing shifts spending from CapEx (buying physical server racks upfront) to OpEx (paying monthly or hourly only for the computing power your startup actually uses).",
    azureDefinition: "CapEx is upfront spending on physical infrastructure that is deducted over time as depreciation. OpEx is ongoing spending on services and products as they are consumed, with no upfront cost.",
    examTip: "AZ-900 loves to ask: 'Which expenditure model allows pay-as-you-go with no upfront cost?' The answer is always OpEx!",
    summaries: {
      pidgin: "CapEx na to buy whole Danfo bus down (big money once); OpEx na to pay bus-fare per trip as you dey go your way.",
      swahili: "CapEx ni kununua gari zima la Matatu kwa pesa nyingi; OpEx ni kulipa nauli ndogo ya kila siku unaposafiri.",
      yoruba: "CapEx ni rira oko ayokele pelu gbogbo owo re leekan; OpEx ni sisan owo oko lojojumo bi o se n rinrin ajo.",
      zulu: "I-CapEx wukuthenga itekisi ngayo yonke imali yakho ngaphambili; i-OpEx wukukhokha imali yokugibela usuku nosuku njengoba uhamba."
    }
  },
  {
    id: "scalability-elasticity",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "Scalability vs Elasticity",
    tagline: "Hiring More Market Porters vs Automatic Extra Hands",
    analogy: "Scalability is the ability of your business to grow: e.g., planning for the Christmas market rush by adding 10 more folding tables to your stall. Vertical scaling (Scale Up) means feeding your donkey extra vitamins so it carries a heavier sack (adding more RAM/CPU to one VM). Horizontal scaling (Scale Out) means getting 3 extra donkeys to pull more carts (adding more VMs). Elasticity is the automatic magic: when the crowd storms your shop at 2 PM, 5 extra helpers automatically appear; at 6 PM when the market is empty, they disappear so you stop paying them!",
    azureDefinition: "Scalability is the ability to handle increased workload by adding resources (up or out). Elasticity is the ability to automatically dynamically allocate and deallocate resources as demand spikes and drops.",
    examTip: "Vertical = Scale UP (bigger machine). Horizontal = Scale OUT (more machines). Elasticity = Automatic scaling based on metrics.",
    summaries: {
      pidgin: "Scale Up na to buy bigger engine; Scale Out na to add more buses; Elasticity na to auto-hire boys when market full and dismiss dem when market cold.",
      swahili: "Scale Up ni kuongeza nguvu ya mashine moja; Scale Out ni kuongeza mashine nyingi zaidi; Elasticity ni kujiongeza na kujipunguza kiotomatiki.",
      yoruba: "Scale Up ni fifi agbara kun ero kan soso; Scale Out ni fifi ero pupo si; Elasticity ni bi eto se n fe si funra re nigba ti ero po.",
      zulu: "I-Scale Up wukukhulisa umshini owodwa; i-Scale Out wukungeza eminye imishini; i-Elasticity wukuzenzakalela kokwengeza nokunciphisa izinsiza."
    }
  },
  {
    id: "high-availability-fault-tolerance",
    domain: "concepts",
    domainName: "1. Cloud Concepts",
    title: "High Availability & Fault Tolerance",
    tagline: "Dual Fuel Stoves & Market Backup Plans",
    analogy: "If you operate a famous street food joint selling Suya or Rolex, you never rely on just one gas cylinder. You have a backup cylinder hooked up with an automatic valve. If cylinder A runs empty mid-fry, cylinder B kicks in seamlessly without the oil getting cold. That is High Availability and Fault Tolerance: designing your cloud system with redundant components so that when one server burns out or a cable gets cut, your customers never notice any interruption.",
    azureDefinition: "High Availability (HA) ensures systems remain accessible and operational with minimal downtime (measured in 99.9% to 99.999% SLA). Fault Tolerance is the ability of a system to continue operating without interruption even when a component fails.",
    examTip: "Look for questions mentioning SLA percentages (e.g. 99.95%) or zero downtime during hardware failure.",
    summaries: {
      pidgin: "No put all your eggs for one basket: if one generator fail, the second one go start sharp-sharp without lights going off.",
      swahili: "Kuwa na mpango wa pili thabiti: jenereta moja ikizimika, ya pili inawaka mara moja bila wateja kugundua giza.",
      yoruba: "Ma fi gbogbo eyin re si inu agbon kan: ti ero kan ba ku, ekeji yoo gba ise laisi fifi oju fo.",
      zulu: "Ungafaki wonke amaqanda kubhasikidi owodwa: uma into eyodwa iphuka, enye ingena khona manjalo kungabi khona ukuphazamiseka."
    }
  },

  // ==========================================
  // DOMAIN 2: AZURE ARCHITECTURE & SERVICES (35-40%)
  // ==========================================
  {
    id: "azure-regions",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Azure Regions",
    tagline: "The Mega Trading Hubs (Balogun, Kariakoo, Merkato)",
    analogy: "Think of an Azure Region like a major commercial trade city—such as Balogun in Lagos, Kariakoo in Dar es Salaam, or Merkato in Addis Ababa. Inside that city, there is a dense cluster of physical market halls, power lines, and roads linked with super-fast communication cables. Azure has 60+ regions globally (including South Africa North in Johannesburg and South Africa West in Cape Town). You always choose the region closest to your users in Africa so their mobile apps load at lightning speed with lowest latency!",
    azureDefinition: "An Azure Region is a geographical area on the planet containing at least one, but potentially multiple datacenters that are nearby and networked together through a dedicated regional low-latency network.",
    examTip: "Data residency and latency are the two top reasons to pick a specific region. Azure has regions across all continents.",
    summaries: {
      pidgin: "Azure Region na like main market hub for town: datacenters dey inside wey connect with high-speed fiber cables so people near am go get fast speed.",
      swahili: "Azure Region ni kama soko kuu la mji (kama Kariakoo): mkusanyiko wa datacenters zilizounganishwa kwa mtandao wa kasi ya juu kwa watumiaji wa eneo hilo.",
      yoruba: "Azure Region dabi oja nla ilu: akojopo awon ile-ise kọmputa to ni asopo ti o yara lati rii daju pe awon to sunmo n ri iṣẹ to yara.",
      zulu: "I-Azure Region ifana nendawo enkulu yezohwebo: iqukethe izikhungo zedatha eziningi ezixhumene ngenethiwekhi esheshayo."
    }
  },
  {
    id: "availability-zones",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Availability Zones (AZs)",
    tagline: "Three Separate Warehouses with Different Generators",
    analogy: "Imagine an entrepreneur running a grain business in Kano. Instead of putting all their maize into one single warehouse, they split it across 3 distinct warehouses across town, several kilometers apart. Warehouse 1 has solar power; Warehouse 2 is on the main city grid; Warehouse 3 has a dedicated diesel plant. If a flood or fire destroys Warehouse 1, Warehouses 2 and 3 are completely untouched and your business continues smoothly! In Azure, each Availability Zone is a physically separate datacenter within the same region with independent power, cooling, and networking.",
    azureDefinition: "Availability Zones are physically separate datacenter locations within an Azure region. Each zone is made up of one or more datacenters equipped with independent power, cooling, and networking. Minimum of 3 zones per supported region.",
    examTip: "AZ-900 key fact: Not all regions have Availability Zones, but regions that do typically have at least THREE independent zones.",
    summaries: {
      pidgin: "AZs na 3 separate warehouses for different corners of town: each get its own generator, light, and water so if one catch fire, the other 2 still dey run.",
      swahili: "Availability Zones ni maghala 3 yaliyotengana ndani ya mji mmoja: kila moja lina jenereta na maji yake, moja likipata hitilafu mengine yanaendelea.",
      yoruba: "Ile ifipamo meta ti o ya sọtọ ninu ilu kan: olukuluku ni ina ati omi tire, ti ina ba ku ni ibikan, awon to ku yoo ma sise.",
      zulu: "Izindawo ezi-3 ezihlukene zedatha edolobheni linye: ngayinye inamandla noxhumano lwayo, uma eyodwa ifa ezinye ziyaqhubeka."
    }
  },
  {
    id: "region-pairs",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Region Pairs",
    tagline: "Sister Cities on Mutual Standby",
    analogy: "Think of Region Pairs like two sister commercial cities (e.g., Lagos and Abuja, or Johannesburg and Cape Town) that sign a mutual pact: 'If an earthquake or national flood hits my city, your city will immediately take over my customers' orders.' Azure pairs regions within the same geography at least 300 miles apart. During massive platform updates, Azure updates only ONE region of the pair at a time so your service never goes offline worldwide.",
    azureDefinition: "Each Azure region is paired with another region within the same geography (except Brazil South), at least 300 miles apart. Azure ensures only one region in each pair is updated at any one time during planned maintenance.",
    examTip: "Remember: Updates are sequenced across region pairs; if a regional outage occurs, one region from each pair is prioritized for restoration.",
    summaries: {
      pidgin: "Region Pairs na two sister cities at least 300 miles away: Azure dey update one by one so your service no go ever shut down together.",
      swahili: "Region Pairs ni miji miwili iliyoungana: ikitokea janga kwa mji mmoja, wa pili unachukua majukumu, na Azure inafanya maboresho kwa zamu.",
      yoruba: "Ilu meji ti a so po fun aabo: ti iṣoro ba de ba ilu kan, ekeji yoo gba ipo re, ko si igba ti eto mejeeji yoo ku leekan na.",
      zulu: "Amadolobha amabili abambisene aqhelelene: uma kwenzeka inhlekelele kwelinye, elinye liyasiza ngokushesha."
    }
  },
  {
    id: "resource-groups-management-groups",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Resource Groups & Management Groups",
    tagline: "Chama Money Bags & Council of Elders",
    analogy: "• Resource Group: Picture a colorful labelled woven basket for a specific project in your community Chama (merry-go-round savings group). In the 'Clean Water Project' basket, you put the shovel, the pipes, the invoices, and the keys. When the project finishes, you can toss the whole basket away in one click!\n• Subscriptions: The official bank account that receives the bill for all the baskets.\n• Management Groups: The overarching Council of Elders governing multiple community Chamas across 5 states, enforcing policies and budgets across all accounts uniformly.",
    azureDefinition: "• Resource Group: A container that holds related Azure resources for a solution.\n• Subscription: An agreement with Microsoft to provision services, also serving as an identity and billing boundary.\n• Management Group: Containers for managing access, policies, and compliance across multiple subscriptions in a hierarchy.",
    examTip: "Hierarchy to memorize: Management Groups -> Subscriptions -> Resource Groups -> Resources! A resource can only exist in ONE resource group at a time.",
    summaries: {
      pidgin: "Resource Group na project basket; Subscription na the bank account wey dey pay bills; Management Group na the big Council of Elders wey dey set rules for all.",
      swahili: "Resource Group ni kikapu cha mradi mmoja; Subscription ni akaunti ya kulipa bili; Management Group ni baraza kuu la wazee linaloongoza vyote.",
      yoruba: "Resource Group dabi agbon ise akanse; Subscription ni akanti ifowopamo; Management Group ni igbimo agba to n dari gbogbo re.",
      zulu: "I-Resource Group yisikhwama somsebenzi othile; i-Subscription yi-akhawunti yokukhokha; i-Management Group ngumkhandlu okhulu obusa konke."
    }
  },
  {
    id: "azure-vms-containers",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Virtual Machines (VMs) vs Containers",
    tagline: "Chartering a Private Bus vs Packing Standard Cartons on a Pickup",
    analogy: "• Azure VM: You charter a whole private 18-seater bus just for yourself. You get your own engine, driver, steering wheel, and petrol tank (full operating system, kernel, virtual hardware). It is powerful, isolated, but takes minutes to start and uses lots of fuel.\n• Container (Docker / Azure Container Instances): Standardized banana cartons loaded neatly into the back of a shared pickup truck. Each carton has its own lid and contents, but they all share the truck's engine and wheels (shared host OS kernel). They start in 2 seconds and use tiny memory!",
    azureDefinition: "• Virtual Machines: Virtualized hardware running a complete guest OS (Windows or Linux). IaaS computing.\n• Containers: Lightweight, isolated user spaces sharing the host OS kernel, packaging app code and its exact dependencies together.",
    examTip: "VMs virtualize hardware; Containers virtualize the operating system. Containers are faster to boot and much more lightweight.",
    summaries: {
      pidgin: "VM na to charter whole private bus with driver and engine; Container na to pack clean cartons inside one shared pickup truck: quick and cheap.",
      swahili: "VM ni kama kukodisha basi zima na dereva wake; Container ni kama kufungasha masanduku madogo kwenye lori moja linaloshirikiwa: haraka na nafuu.",
      yoruba: "VM dabi gbigba gbogbo oko ayokele funra re pelu iwakọ; Container dabi gbigbe apoti eru sinu oko gbogbonise ti o yara ti ko si gbowo.",
      zulu: "I-VM ifana nokuthenga lonke ibhasi elinomshayeli walo; i-Container ifana nokubeka amabhokisi ambalwa elorini elilodwa elihlanganyelwe."
    }
  },
  {
    id: "azure-functions-serverless",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Azure Functions (Serverless)",
    tagline: "The Village Cobbler & M-Pesa Transaction Agent",
    analogy: "Imagine a street cobbler who sits under the shade of a mango tree. You don't pay him a monthly salary to sit there 24 hours a day. When your sandal strap snaps, you give him 50 shillings, he hammers 3 nails for 45 seconds, returns your shoe, and goes back to resting. You only pay for the exact 45 seconds of work! That is Serverless / Azure Functions: your code only wakes up when triggered (e.g., an M-Pesa webhook or photo upload), runs for 300 milliseconds, and you only pay for those milliseconds. No idle server costs!",
    azureDefinition: "Azure Functions is an event-driven serverless compute service that enables you to run small pieces of code (functions) without explicitly provisioning or managing any infrastructure.",
    examTip: "Serverless does NOT mean there are no servers; it means Microsoft completely abstracts, provisions, and scales the servers for you, and you pay only per execution.",
    summaries: {
      pidgin: "Serverless na cobbler under tree: you no dey pay am salary, you only pay am 50 Naira for the 2 minutes wey e use mend your shoe.",
      swahili: "Serverless ni kama fundi viatu: humlipi mshahara wa mwezi mzima, unamlipa shilingi 50 kwa dakika 2 alizotumia kushona kiatu chako.",
      yoruba: "Serverless dabi oni bata labe igi: o kii san owo osu fun un, owo ise iseju kan ti o se lo n san fun.",
      zulu: "I-Serverless ifana nomlungisi wezicathulo: awumkhokheli njalo ngenyanga, ukhokhela imizuzu embalwa ayisebenzisile kuphela."
    }
  },
  {
    id: "azure-blob-storage",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Azure Blob Storage & Access Tiers",
    tagline: "The Traditional Granary & Yam Barn",
    analogy: "Blob Storage is the vast communal granary where you can store anything unstructured: sacks of grain, dried fish, family photos, or video recordings. It has 4 Access Tiers:\n• Hot Tier: The kitchen basket right next to the stove. High storage cost, but free and fast to scoop out daily.\n• Cool Tier: The storeroom in the backyard. Lower storage price, but best for food you only fetch once a month (minimum 30 days retention).\n• Cold Tier: The farm shed down the road. Even cheaper storage, accessed once a year (minimum 90 days retention).\n• Archive Tier: The sealed underground seed silo. Cheapest storage on earth, but retrieval takes several hours to thaw out (rehydrate)!",
    azureDefinition: "Azure Blob Storage stores massive amounts of unstructured data (text, binary, media). Tiers include Hot (frequent access), Cool (infrequent, min 30 days), Cold (rare access, min 90 days), and Archive (offline backup, lowest cost, hours to rehydrate).",
    examTip: "Archive tier is the only tier that is OFFLINE. Data must be rehydrated (moved back to Hot or Cool) before it can be read!",
    summaries: {
      pidgin: "Blob storage na yam barn: Hot tier na pot beside fire, Cool tier na store, Cold tier na farm shed, Archive tier na underground pit wey cheap but take hours to dig out.",
      swahili: "Blob storage ni ghala kubwa la mazao: Hot ni jikoni unatumia kila siku; Cool ni stoo; Cold ni shamba; Archive ni handaki la chini la bei rahisi lakini linachukua saa kadhaa kufukuliwa.",
      yoruba: "Blob storage dabi aka agbado: Hot tier wa legbee aaro, Cool tier wa ninu yara ifipamo, Archive tier wa labe ile ti o gba wakati lati fa yo.",
      zulu: "I-Blob storage yisiphala sokudla: i-Hot iseduze nekhishi; i-Cool isendlini yesitolo; i-Archive ingaphansi komhlaba eshibhile kodwa ethatha amahora ukulungiswa."
    }
  },
  {
    id: "azure-vnet-vpn-expressroute",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Azure Virtual Network (VNet) & ExpressRoute",
    tagline: "Fenced Family Compound vs Dedicated VIP Helicopter Lane",
    analogy: "• Virtual Network (VNet): A secure perimeter fence built around your family compound with intercoms connecting the houses. Neighbors outside cannot walk in or eavesdrop without permission.\n• VPN Gateway: An armored bus with encrypted windows driving your staff over the public highway between your village branch and city headquarters.\n• ExpressRoute: A completely private, dedicated rail track or VIP express road that bypasses the public highway completely, connecting your on-premises datacenter straight into Azure with zero public internet traffic!",
    azureDefinition: "• Azure VNet: Private network in Azure allowing secure communication between Azure resources, internet, and on-premises networks.\n• VPN Gateway: Sends encrypted traffic across the public internet between an Azure VNet and an on-premises location.\n• ExpressRoute: Direct private connection to Microsoft cloud services that does NOT travel over the public internet.",
    examTip: "Remember: ExpressRoute does NOT go over the public internet; VPN Gateway DOES go over the public internet with encryption.",
    summaries: {
      pidgin: "VNet na compound fence; VPN na encrypted security bus for public road; ExpressRoute na private VIP flyover wey no pass public internet at all.",
      swahili: "VNet ni uzio wa ua wa nyumba; VPN ni gari lililofungwa na ulinzi kwenye barabara ya umma; ExpressRoute ni njia ya binafsi ya reli isiyopita mtandao wa kawaida.",
      yoruba: "VNet dabi ogba ile to ni aabo; VPN dabi oko to ni aabo lori titi gbangba; ExpressRoute dabi oju irin ikoko ti ko kan intanẹẹti gbogbogbo rara.",
      zulu: "I-VNet ifana nothango lwekhaya; i-VPN yibhasi evikelekile emgwaqweni womphakathi; i-ExpressRoute yindlela yangasese engafiki ku-inthanethi yomphakathi."
    }
  },
  {
    id: "entra-id-rbac-mfa",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Microsoft Entra ID, RBAC & MFA",
    tagline: "Estate Gatekeeper, Visitor Badge & Mother's Secret Password",
    analogy: "• Microsoft Entra ID (formerly Azure AD): The Chief Security Gatekeeper at the estate barrier who verifies everyone's digital national ID card.\n• RBAC (Role-Based Access Control): The security badge policy. The Landlord can enter any room; the Plumber gets a badge that only opens the pipe cupboard; the Visitor can only sit in the reception lounge.\n• Multi-Factor Authentication (MFA): To enter the estate vault, you must show something you KNOW (password), something you HAVE (phone with SMS/authenticator app), or something you ARE (fingerprint/face scan).",
    azureDefinition: "• Microsoft Entra ID: Cloud-based identity and access management service.\n• RBAC: Fine-grained access management enabling you to grant only the amount of access that users need to perform their jobs (Least Privilege).\n• MFA: Authentication process requiring 2 or more distinct verification factors.",
    examTip: "Always follow the Principle of Least Privilege: give users ONLY the minimum permissions needed to do their specific job.",
    summaries: {
      pidgin: "Entra ID na security officer for gate; RBAC na pass wey dey decide which room you fit enter; MFA na key plus fingerprint before door go open.",
      swahili: "Entra ID ni mlinzi mkuu wa getini; RBAC ni kadi inayoamua vyumba unavyoruhusiwa kuingia; MFA ni nenosiri pamoja na alama ya kidole kabla ya kufungua mlango.",
      yoruba: "Entra ID dabi oluso ẹnu-bode; RBAC dabi iwe aṣẹ ti o sọ ibi ti o le wọ; MFA dabi kọkọrọ pẹlu ika ọwọ ki ilẹkun to ṣi.",
      zulu: "I-Entra ID ngunogada wesango; i-RBAC yiphepha elinquma ukuthi ungangena kuliphi ikamelo; i-MFA yiphasiwedi nozwane ngaphambi kokuvula."
    }
  },
  {
    id: "zero-trust",
    domain: "architecture",
    domainName: "2. Architecture & Services",
    title: "Zero Trust Security Model",
    tagline: "'Even if You Are My Cousin from the Village, Show Your ID Card'",
    analogy: "In the traditional security model, once a person sneaked past the outer compound gate, everyone assumed they were family and let them walk into the bedroom. Zero Trust laughs and says: 'Trust nobody; always verify everybody.' Even if someone is inside the parlor, before they touch the safe box, they must show ID again. The 3 core pillars of Zero Trust are: 1. Verify explicitly, 2. Use least privileged access, 3. Assume breach (act as if a thief is already inside the house).",
    azureDefinition: "Zero Trust is a security model based on the principle of 'Never trust, always verify.' It requires all requests to be fully authenticated, authorized, and encrypted before granting access.",
    examTip: "Remember the 3 principles of Zero Trust: Verify explicitly, Use least privileged access, and Assume breach.",
    summaries: {
      pidgin: "Zero Trust na 'no trust anyone, verify everybody': even if you be uncle from village, you must still show your ID card before you touch the fridge.",
      swahili: "Zero Trust ni 'Usiamini yeyote, thibitisha kila mara': hata kama ni mjomba kutoka kijijini, lazima aonyeshe kitambulisho kabla ya kugusa kabati.",
      yoruba: "Zero Trust dabi 'Ma gbẹkẹle enikankan, rii daju nigbagbogbo': bi o ba je ibatan gidi, o gbodo fi idanimo re han ki o to fowo kan apoti.",
      zulu: "I-Zero Trust ithi 'Ungathembi muntu, qinisekisa njalo': ngisho ungumzala ovela emakhaya, kumele ukhombise umazisi wakho."
    }
  },

  // ==========================================
  // DOMAIN 3: MANAGEMENT & GOVERNANCE (30-35%)
  // ==========================================
  {
    id: "azure-policy-resource-locks",
    domain: "governance",
    domainName: "3. Management & Governance",
    title: "Azure Policy & Resource Locks",
    tagline: "Village Council Bye-Laws & Heavy Padlocks on the Safe",
    analogy: "• Azure Policy: The village council's strict building rules (e.g., 'Nobody is allowed to build a store higher than 2 storeys' or 'All shops must have fire extinguishers'). In Azure, you enforce rules like: 'No employee is allowed to create VMs outside South Africa' or 'Every resource must have a Project tag'.\n• Resource Locks: Putting a heavy brass padlock on the ancestral chest. Two types:\n  1. CanNotDelete: Authorized users can read and modify the file, but CANNOT delete it.\n  2. ReadOnly: Authorized users can only LOOK at it, cannot edit and cannot delete!",
    azureDefinition: "• Azure Policy: Service that creates, assigns, and manages policies to enforce rules and effects over your resources for compliance.\n• Resource Locks: Prevent accidental deletion or modification of resources. Types: CanNotDelete (Delete lock) and ReadOnly (Read-only lock).",
    examTip: "Locks inherit down the hierarchy! A lock on a Resource Group automatically locks all resources inside it. Resource Locks override RBAC permissions!",
    summaries: {
      pidgin: "Azure Policy na community rules wey ban nonsense; Resource Lock na brass padlock on top safe: CanNotDelete stop deletion, ReadOnly stop even edit.",
      swahili: "Azure Policy ni sheria za serikali ya mtaa zinazozuia makosa; Resource Lock ni kufuli nzito: CanNotDelete inazuia kufuta, ReadOnly inazuia hata kubadilisha.",
      yoruba: "Azure Policy dabi ofin awon agba ti o fi idi mule; Resource Lock dabi agogo titi: CanNotDelete n ko idana nu, ReadOnly n ko atunṣe.",
      zulu: "I-Azure Policy yimithetho yomkhandlu evikela amaphutha; i-Resource Lock yikhiya eliqinile: i-CanNotDelete ivikela ukucinywa, i-ReadOnly ivikela nokushintsha."
    }
  },
  {
    id: "azure-cost-management-pricing-calculator",
    domain: "governance",
    domainName: "3. Management & Governance",
    title: "Pricing Calculator vs Cost Management",
    tagline: "Shopping Estimate List vs Mother's Weekly Budget Envelope",
    analogy: "• Pricing Calculator: The handwritten budget list you make on Saturday morning BEFORE heading to the market ('Yam = 5k, Tomatoes = 3k, Palm Oil = 2k'). It estimates what future cloud services WILL cost before you deploy them.\n• Azure Cost Management: Mother's budget envelope and expense ledger during the month. It tracks what you have ACTUALLY spent, spots sudden budget overruns, and sends SMS alerts when you reach 80% of your allowance.",
    azureDefinition: "• Pricing Calculator: Estimates expected costs for new Azure products before purchase.\n• Azure Cost Management: Monitors, allocates, and optimizes existing Azure spend, generating budgets, alerts, and cost analysis reports.",
    examTip: "TCO (Total Cost of Ownership) Calculator compares on-premises datacenter costs to Azure. Pricing Calculator estimates Azure service costs.",
    summaries: {
      pidgin: "Pricing Calculator na estimate list before you go market; Cost Management na Mother's purse and SMS alert wey shout when money dey finish.",
      swahili: "Pricing Calculator ni makadirio ya ununuzi kabla ya kwenda sokoni; Cost Management ni ufuatiliaji wa pesa halisi unazotumia na kutoa tahadhari.",
      yoruba: "Pricing Calculator dabi iwe isiro ki o to lo si oja; Cost Management dabi akanti iyawo ti n kiyesi owo ti o ti na ti o si n ke gbajue.",
      zulu: "I-Pricing Calculator yisilinganiso sezindleko ngaphambi kokuthenga; i-Cost Management ilandelela imali esetshenzisiwe yangempela."
    }
  },
  {
    id: "azure-advisor",
    domain: "governance",
    domainName: "3. Management & Governance",
    title: "Azure Advisor",
    tagline: "The Wise Village Elder Whispering Good Advice",
    analogy: "Picture a wise, experienced elder who walks through your workshop every evening. He taps your shoulder and whispers: 'My child, you left that big generator running in the empty storehouse—shut it down and save 20,000 Naira!' Azure Advisor is a free built-in personalized cloud consultant that inspects your configurations and gives recommendations across 5 pillars: Cost, Security, Reliability, Performance, and Operational Excellence.",
    azureDefinition: "Azure Advisor is a personalized cloud consultant that helps you follow best practices to optimize your Azure deployments across Reliability, Security, Performance, Cost, and Operational Excellence.",
    examTip: "Remember the 5 pillars of Azure Advisor recommendations: Cost, Security, Reliability, Performance, and Operational Excellence.",
    summaries: {
      pidgin: "Azure Advisor na wise uncle wey dey whisper for your ear: 'Oga, shut down that idle VM make you save money and protect your gate!'",
      swahili: "Azure Advisor ni mzee mwenye hekima anayekunong'oneza ushauri wa bure wa kuokoa pesa, kuimarisha ulinzi na kuboresha utendaji.",
      yoruba: "Azure Advisor dabi agba to gbon to n so asiri fun e lẹnu: 'Ọmọ mi, pa ẹrọ ti o ko lo lati fi owo pamọ ki o si mu aabo lagbara!'",
      zulu: "I-Azure Advisor yikhehla elihlakaniphile elikunika izeluleko zokonga imali, ukuqinisa ezokuphepha nokwenza umsebenzi uhambe kahle."
    }
  },
  {
    id: "azure-monitor-service-health",
    domain: "governance",
    domainName: "3. Management & Governance",
    title: "Azure Monitor & Service Health",
    tagline: "The Market Watchman & National Radio Announcement",
    analogy: "• Azure Monitor: The watchman perched atop the roof of your own private shop with a pair of binoculars and a diary. He records how many customers walk in, how hot the kitchen stove gets, and rings a bell (Alert) if smoke starts billowing.\n• Azure Service Health: The nationwide radio broadcast station. It informs you if the main highway to the market is closed, or if a power grid failure has affected the entire district (Azure service outages, planned platform maintenance, health advisories).",
    azureDefinition: "• Azure Monitor: Maximizes availability and performance of your applications by collecting, analyzing, and acting on telemetry from your cloud and on-premises environments (Metrics & Logs via Log Analytics & App Insights).\n• Azure Service Health: Provides personalized guidance and support when issues in Azure services affect your specific environment (Service issues, Planned maintenance, Health advisories).",
    examTip: "Azure Monitor monitors YOUR resources. Azure Service Health informs you about issues with MICROSOFT'S infrastructure.",
    summaries: {
      pidgin: "Azure Monitor dey watch your personal shop; Azure Service Health na national radio news wey dey tell you if whole city light or highway shut down.",
      swahili: "Azure Monitor inalinda na kupima duka lako binafsi; Azure Service Health ni tangazo la redio ya taifa inayoeleza hitilafu za jiji zima.",
      yoruba: "Azure Monitor n ṣọ ile itaja tiẹ; Azure Service Health dabi iroyin redio ti n kede ti gbogbo ilu ba ni iṣoro ina tabi titi.",
      zulu: "I-Azure Monitor iqaphe isitolo sakho; i-Azure Service Health yisiteshi somsakazo esikutshela uma kukhona inkinga kulo lonke idolobha."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AZ900_ANALOGIES };
}
