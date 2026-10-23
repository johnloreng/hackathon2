/**
 * Mama Cloud & Bro Cloud: Original AZ-900 Exam Practice Questions Pool
 * 100% Original, Unofficial Practice Questions based on Microsoft Learn AZ-900 Skills Outline.
 * Unofficial Community Exam Prep for the #1MillionDevs Movement.
 */

const AZ900_QUESTIONS = [
  // ========================================================
  // DOMAIN 1: DESCRIBE CLOUD CONCEPTS (Questions 1 - 12)
  // ========================================================
  {
    id: 1,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "A fintech startup in Nairobi wants to deploy an online mobile payment processing application. They need the infrastructure to automatically scale up computing instances when transaction volume surges during lunch hour, and scale down when traffic subsides at night to avoid paying for idle capacity. Which cloud computing benefit directly describes this capability?",
    options: [
      "High Availability",
      "Elasticity",
      "Fault Tolerance",
      "Disaster Recovery"
    ],
    correctIndex: 1,
    explanation: "Elasticity is the ability of cloud systems to dynamically allocate and deallocate computing resources in response to changing demand. When lunch rush hits, new resources spin up automatically; when demand drops, they spin down so you stop paying.",
    whyOthersWrong: [
      "High Availability ensures services stay online with minimal downtime, but does not specifically refer to dynamic automatic scaling.",
      "Fault Tolerance enables a system to continue operating without interruption even when hardware fails.",
      "Disaster Recovery is a plan and set of procedures for restoring services after a catastrophic event."
    ],
    mamaCloudTip: "Mama Cloud says: 'Think of Elasticity like an elastic waistline on a traditional wrapper—it stretches when you eat big feast at lunch and snaps back when you rest!'"
  },
  {
    id: 2,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "An agricultural cooperative in Eldoret wants to move away from purchasing physical server hardware every 3 years. They prefer to pay on a monthly basis based strictly on the storage and compute time their members consume. Which financial model does this represent?",
    options: [
      "Capital Expenditure (CapEx)",
      "Operational Expenditure (OpEx)",
      "Depreciated Fixed Asset Model",
      "Upfront Committed Sinking Fund"
    ],
    correctIndex: 1,
    explanation: "Operational Expenditure (OpEx) is spending on ongoing services and operational needs without upfront capital commitments. Cloud computing shifts costs from CapEx (purchasing servers and building datacenters upfront) to OpEx (pay-as-you-go).",
    whyOthersWrong: [
      "CapEx involves large upfront financial investments in physical equipment that depreciate over time.",
      "Depreciated Fixed Asset Model is a traditional on-premises accounting concept tied to CapEx.",
      "Sinking funds are traditional financial reserves, not a cloud pricing model."
    ],
    mamaCloudTip: "Bro Cloud says: 'CapEx is buying a Matatu outright; OpEx is paying your daily commuter fare! Cloud is 100% OpEx friendly.'"
  },
  {
    id: 3,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "Under the Azure Shared Responsibility Model, which operational responsibility remains solely with the CUSTOMER regardless of whether they choose IaaS, PaaS, or SaaS?",
    options: [
      "Physical datacenter security and perimeter guards",
      "Operating system security patching",
      "Data classification, identity governance, and access credentials",
      "Server hardware cooling and power supplies"
    ],
    correctIndex: 2,
    explanation: "In all cloud deployment types (IaaS, PaaS, and SaaS), the customer is ALWAYS solely responsible for their own data, information classification, mobile/endpoint devices, and identity/access credentials.",
    whyOthersWrong: [
      "Physical datacenter security is always the sole responsibility of Microsoft Azure.",
      "Operating system patching is managed by the customer in IaaS, but managed by Azure in PaaS and SaaS.",
      "Server hardware cooling and power are always managed by Microsoft Azure."
    ],
    mamaCloudTip: "Mama Cloud says: 'Even if the landlord builds bulletproof compound walls, if you leave your padlock keys in the road, the blame is on you! Guard your data and credentials!'"
  },
  {
    id: 4,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "A hospital in Kumasi wants to host its non-sensitive public patient appointment website on Azure, but must legally retain all sensitive patient medical records inside their own private on-premises datacenter behind their local firewall. Which cloud deployment model should they implement?",
    options: [
      "Public Cloud only",
      "Private Cloud only",
      "Hybrid Cloud",
      "Sovereign Community Mesh"
    ],
    correctIndex: 2,
    explanation: "A Hybrid Cloud combines a public cloud (such as Microsoft Azure) with a private cloud or on-premises infrastructure, allowing data and applications to be shared securely between them.",
    whyOthersWrong: [
      "Public cloud alone would require placing the sensitive patient records on public cloud infrastructure.",
      "Private cloud alone would require running the public web servers on their local on-prem machines.",
      "Sovereign Community Mesh is not a recognized cloud deployment model."
    ],
    mamaCloudTip: "Mama Cloud says: 'Hybrid cloud is like having both a private compound borehole for confidential drinking water and city municipal pipes for the outer gardens!'"
  },
  {
    id: 5,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "A development team wants to deploy a web application without having to configure, maintain, patch, or update the underlying operating system or virtual machine hardware. They only want to deploy their application code and database. Which cloud service category should they choose?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Bare Metal Dedicated Hosting"
    ],
    correctIndex: 1,
    explanation: "Platform as a Service (PaaS) provides an environment for building, testing, and deploying software applications without the complexity of managing the underlying virtual machines, operating systems, or hardware.",
    whyOthersWrong: [
      "IaaS requires the customer to configure and patch the operating system and middleware.",
      "SaaS provides a finished software product (like Microsoft 365), not a developer platform for hosting custom code.",
      "Bare Metal Dedicated Hosting is traditional hardware leasing, offering no cloud abstraction."
    ],
    mamaCloudTip: "Bro Cloud says: 'PaaS is the commercial food truck: oven and gas provided, you just bring your spicy chicken recipe!'"
  },
  {
    id: 6,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "Which of the following metrics defines a cloud architecture's ability to quickly recover from component failures with zero or near-zero data loss and uninterrupted availability?",
    options: [
      "Fault Tolerance",
      "Vertical Scaling",
      "Agility",
      "Elasticity"
    ],
    correctIndex: 0,
    explanation: "Fault Tolerance enables an application to continue operating smoothly without interruption even if one or more hardware/software components fail, typically achieved through active redundancy.",
    whyOthersWrong: [
      "Vertical Scaling means adding more CPU or RAM to an existing virtual machine.",
      "Agility refers to the speed and flexibility of provisioning and deploying new resources.",
      "Elasticity relates to adapting computing capacity dynamically to traffic fluctuations."
    ],
    mamaCloudTip: "Mama Cloud says: 'Fault tolerance is cooking on a dual burner stove: when one burner gas finishes, the second flame stays bright!'"
  },
  {
    id: 7,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "A company migrates its file sharing to Microsoft 365 OneDrive. The company does not manage any servers, operating systems, or codebases, and simply provisions user accounts via a web browser. What cloud model is being utilized?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Network as a Service (NaaS)"
    ],
    correctIndex: 2,
    explanation: "Software as a Service (SaaS) delivers complete, centrally hosted end-user applications over the internet on a subscription basis. Microsoft 365, OneDrive, and Dynamics 365 are classic SaaS examples.",
    whyOthersWrong: [
      "IaaS gives you empty virtual machines that you must maintain.",
      "PaaS gives you a platform to run your own custom code.",
      "NaaS is a networking connectivity concept, not an end-user application suite."
    ],
    mamaCloudTip: "Mama Cloud says: 'SaaS is party jollof rice brought to your table: no pot scrubbing, no firewood, you just enjoy with spoon!'"
  },
  {
    id: 8,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "What term describes the cloud advantage that allows an organization to rapidly test new ideas and deploy applications globally in minutes, rather than waiting months for hardware procurement?",
    options: [
      "Agility",
      "Predictability",
      "Geo-redundancy",
      "Depreciation"
    ],
    correctIndex: 0,
    explanation: "Cloud Agility describes how quickly cloud resources can be provisioned and made available to test, develop, and launch software solutions compared to traditional procurement cycles.",
    whyOthersWrong: [
      "Predictability provides confidence in performance and cost forecasts.",
      "Geo-redundancy protects data against regional disasters by replicating across distant locations.",
      "Depreciation is an accounting method of allocating cost of a physical asset over its useful life."
    ],
    mamaCloudTip: "Bro Cloud says: 'Agility is launching your online fashion delivery business today with an Instagram page and WhatsApp, instead of waiting 2 years to build a shopping mall!'"
  },

  // ========================================================
  // DOMAIN 2: AZURE ARCHITECTURE & SERVICES (Questions 9 - 24)
  // ========================================================
  {
    id: 9,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "An e-commerce store in Johannesburg wants to deploy an application across multiple datacenters within the South Africa North region to protect against power outages and physical facility failures, while maintaining low-latency communication. What Azure feature should they use?",
    options: [
      "Availability Zones",
      "Region Pairs",
      "Azure ExpressRoute",
      "Management Groups"
    ],
    correctIndex: 0,
    explanation: "Availability Zones are physically distinct datacenters within an Azure region, each equipped with independent power, cooling, and networking. Deploying across zones protects workloads against datacenter-level failures while keeping network latency minimal.",
    whyOthersWrong: [
      "Region Pairs link two regions hundreds of miles apart (e.g. South Africa North and South Africa West), which introduces cross-regional latency.",
      "Azure ExpressRoute is a dedicated private network connection between on-premises and Azure.",
      "Management Groups are governance containers for managing multiple Azure subscriptions."
    ],
    mamaCloudTip: "Mama Cloud says: 'Availability Zones are 3 separate market sheds in the same town: each has its own diesel generator. If shed 1 suffers a power cut, sheds 2 and 3 stay running!'"
  },
  {
    id: 10,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "A bank in Lagos needs to connect its corporate on-premises headquarters to its Azure Virtual Network (VNet). The security policy strictly prohibits sensitive banking traffic from traveling over the public internet. Which connectivity service must the bank implement?",
    options: [
      "Point-to-Site VPN",
      "Azure ExpressRoute",
      "Site-to-Site VPN Gateway",
      "Azure Front Door"
    ],
    correctIndex: 1,
    explanation: "Azure ExpressRoute creates a private, dedicated connection between an organization's on-premises infrastructure and Microsoft cloud services that does NOT travel over the public internet, offering higher security and reliability.",
    whyOthersWrong: [
      "Point-to-Site VPN sends encrypted traffic over the public internet.",
      "Site-to-Site VPN Gateway also sends encrypted traffic over the public internet.",
      "Azure Front Door is a global web application delivery and load balancing service."
    ],
    mamaCloudTip: "Bro Cloud says: 'VPN is an armored truck on the busy public highway; ExpressRoute is your private VIP elevated rail track bypassing the public road entirely!'"
  },
  {
    id: 11,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "A healthcare startup in Kigali needs to archive 10 years of patient medical scans for compliance. The scans will rarely ever be accessed, but in the unlikely event they are needed, the organization can wait several hours for data retrieval. What is the most cost-effective Azure Blob Storage access tier?",
    options: [
      "Hot Tier",
      "Cool Tier",
      "Cold Tier",
      "Archive Tier"
    ],
    correctIndex: 3,
    explanation: "The Archive tier offers the lowest storage cost for data that is rarely accessed and can tolerate several hours of retrieval latency (rehydration time).",
    whyOthersWrong: [
      "Hot Tier has the highest storage cost, optimized for frequently accessed data.",
      "Cool Tier has lower storage costs than Hot but is designed for data accessed at least every 30 days.",
      "Cold Tier is designed for data accessed at least every 90 days, but is more expensive to store than Archive."
    ],
    mamaCloudTip: "Mama Cloud says: 'Archive tier is the deep underground seed silo. Cheapest storage on the continent, but you need patience to dig it out when needed!'"
  },
  {
    id: 12,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "What is the primary architectural boundary in Azure that serves as both a billing boundary and an identity/access management boundary?",
    options: [
      "Resource Group",
      "Azure Subscription",
      "Management Group",
      "Virtual Network"
    ],
    correctIndex: 1,
    explanation: "An Azure Subscription is a logical container that links user accounts to provisioned Azure resources. It acts as both a billing boundary (generating separate invoices and cost reports) and an access control boundary.",
    whyOthersWrong: [
      "Resource Groups organize resources within a single subscription, but do not generate independent separate billing accounts.",
      "Management Groups sit above subscriptions to govern policies across multiple subscriptions.",
      "Virtual Networks provide private network communication, not billing boundaries."
    ],
    mamaCloudTip: "Mama Cloud says: 'A Subscription is your official bank account ledger. Every basket (Resource Group) you buy is billed to that specific account!'"
  },
  {
    id: 13,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "A mobile game company wants to run lightweight containerized microservices without provisioning or managing virtual machines or setting up a full Kubernetes cluster. Which serverless container service should they use?",
    options: [
      "Azure Virtual Machines",
      "Azure Container Instances (ACI)",
      "Azure Kubernetes Service (AKS)",
      "Azure Dedicated Host"
    ],
    correctIndex: 1,
    explanation: "Azure Container Instances (ACI) is a serverless solution that lets you run Docker containers directly on Azure without having to manage VMs or adopt an orchestrator like Kubernetes.",
    whyOthersWrong: [
      "Azure Virtual Machines requires managing virtual hardware and operating systems.",
      "Azure Kubernetes Service (AKS) is a full-featured container orchestrator, requiring cluster setup and management.",
      "Azure Dedicated Host provides dedicated physical servers, which is the opposite of serverless containers."
    ],
    mamaCloudTip: "Bro Cloud says: 'ACI is loading your crate straight onto a quick dispatch rider—fast, simple, no need to buy the entire fleet depot!'"
  },
  {
    id: 14,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "An organization wants to authenticate users using their corporate email and ensure that remote workers must verify their identity using a mobile phone notification or biometric scan before accessing Azure resources. Which service provides this capability?",
    options: [
      "Azure Key Vault",
      "Microsoft Entra ID with Multi-Factor Authentication (MFA)",
      "Azure Bastion",
      "Network Security Groups (NSG)"
    ],
    correctIndex: 1,
    explanation: "Microsoft Entra ID (formerly Azure Active Directory) is Azure's identity and access management service. It supports Multi-Factor Authentication (MFA), requiring two or more verification methods (password + mobile app/biometric).",
    whyOthersWrong: [
      "Azure Key Vault securely stores cryptographic keys, secrets, and certificates.",
      "Azure Bastion provides secure RDP/SSH connectivity to VMs over SSL without public IP addresses.",
      "Network Security Groups filter network traffic at IP and port levels."
    ],
    mamaCloudTip: "Mama Cloud says: 'Entra ID + MFA is the estate gatekeeper who asks for both your house key AND your thumbprint before letting you inside!'"
  },
  {
    id: 15,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "Which Azure service allows administrators to grant specific granular permissions (e.g., Virtual Machine Contributor) to users based strictly on their job responsibilities, following the principle of least privilege?",
    options: [
      "Azure Role-Based Access Control (RBAC)",
      "Azure DDoS Protection",
      "Azure Policy",
      "Resource Locks"
    ],
    correctIndex: 0,
    explanation: "Azure Role-Based Access Control (RBAC) allows fine-grained access management by assigning built-in or custom roles to security principals (users, groups, service principals) at specific scopes.",
    whyOthersWrong: [
      "Azure DDoS Protection shields resources from distributed denial of service attacks.",
      "Azure Policy enforces resource standards and configuration rules, not user authorization permissions.",
      "Resource Locks prevent accidental deletion or modification regardless of user RBAC roles."
    ],
    mamaCloudTip: "Bro Cloud says: 'RBAC is giving the electrician a badge that only opens the fuse box, not your bedroom wardrobe!'"
  },
  {
    id: 16,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "A company wants to host an event-driven piece of Python code that triggers only when an image is uploaded to Azure Blob Storage, creates a thumbnail, and immediately terminates. Which Azure service is designed for this pattern?",
    options: [
      "Azure Virtual Desktop",
      "Azure Functions",
      "Azure Batch",
      "Azure App Service Web Apps"
    ],
    correctIndex: 1,
    explanation: "Azure Functions is an event-driven serverless computing service that executes code in response to events (triggers) and bills only for the execution duration and resources consumed.",
    whyOthersWrong: [
      "Azure Virtual Desktop provides virtualized Windows desktops to remote users.",
      "Azure Batch runs large-scale parallel and high-performance computing batch jobs.",
      "Azure App Service Web Apps is designed for hosting continuously running web applications."
    ],
    mamaCloudTip: "Mama Cloud says: 'Azure Functions is the village cobbler: you call him, he hits two nails to fix your strap, you pay 50 bob, and he rests. No ongoing salary!'"
  },

  // ========================================================
  // DOMAIN 3: MANAGEMENT & GOVERNANCE (Questions 17 - 30)
  // ========================================================
  {
    id: 17,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "An IT governance director wants to ensure that developers CANNOT deploy virtual machines in any region other than South Africa North to comply with national data sovereignty laws. Which Azure service should be used to enforce this restriction automatically?",
    options: [
      "Azure Policy",
      "Azure Advisor",
      "Resource Locks",
      "Azure Service Health"
    ],
    correctIndex: 0,
    explanation: "Azure Policy allows organizations to enforce rules and effects over resources to ensure compliance with corporate standards and SLAs. Built-in policies include restricting allowed deployment regions/locations.",
    whyOthersWrong: [
      "Azure Advisor provides proactive recommendations, but does not enforce or block non-compliant resource deployments.",
      "Resource Locks prevent accidental deletion or modification, but do not restrict geographic deployment regions.",
      "Azure Service Health provides status notifications regarding Microsoft platform health and outages."
    ],
    mamaCloudTip: "Mama Cloud says: 'Azure Policy is the village council decree: 'No building stores outside the designated market boundaries!''"
  },
  {
    id: 18,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "An administrator needs to prevent a critical production Azure SQL database from being accidentally deleted by anyone, including administrators with full Owner permissions. What should the administrator apply to the database?",
    options: [
      "A CanNotDelete (Delete) Resource Lock",
      "An Azure Policy with audit effect",
      "A Network Security Group inbound deny rule",
      "Microsoft Defender for Cloud alerts"
    ],
    correctIndex: 0,
    explanation: "A CanNotDelete resource lock prevents authorized users from deleting a resource while still allowing them to read and modify it. Resource locks apply to all users, even those with Owner RBAC permissions.",
    whyOthersWrong: [
      "An Azure Policy with audit effect only logs compliance warnings; it does not block immediate deletion.",
      "Network Security Groups filter IP traffic, not management API operations like resource deletion.",
      "Defender for Cloud provides threat detection, not deletion prevention."
    ],
    mamaCloudTip: "Bro Cloud says: 'Resource Lock is welding a brass padlock on the safe: even the house owner must first unlock the padlock before throwing the box away!'"
  },
  {
    id: 19,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "Which free Azure service analyzes your deployed cloud resources and provides actionable recommendations to optimize performance, enhance security, improve reliability, and reduce monthly costs?",
    options: [
      "Azure Advisor",
      "Azure Monitor",
      "Azure DevTest Labs",
      "Pricing Calculator"
    ],
    correctIndex: 0,
    explanation: "Azure Advisor is a personalized cloud consultant that analyzes resource configurations and usage telemetry to recommend best practices across five pillars: Reliability, Security, Performance, Cost, and Operational Excellence.",
    whyOthersWrong: [
      "Azure Monitor collects and analyzes log and metric telemetry to monitor application performance.",
      "Azure DevTest Labs helps developers quickly create test environments while managing costs.",
      "The Pricing Calculator estimates potential costs before resources are deployed."
    ],
    mamaCloudTip: "Mama Cloud says: 'Azure Advisor is the wise village elder: he whispers in your ear to switch off the generator when everyone goes to sleep to save fuel!'"
  },
  {
    id: 20,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "A company wants to receive an automated email notification whenever their monthly Azure spending reaches 80% of their designated $2,000 budget. Which tool should they configure?",
    options: [
      "Azure Cost Management Budgets and Alerts",
      "Total Cost of Ownership (TCO) Calculator",
      "Azure Pricing Calculator",
      "Azure Service Health"
    ],
    correctIndex: 0,
    explanation: "Azure Cost Management allows organizations to define spending budgets and configure automated alerts when actual spending or forecasted spending reaches designated thresholds (e.g., 80%).",
    whyOthersWrong: [
      "The TCO Calculator compares estimated costs of running on-premises workloads against Azure.",
      "The Pricing Calculator estimates upfront costs before purchasing or provisioning resources.",
      "Azure Service Health informs administrators of Azure service outages and planned maintenance."
    ],
    mamaCloudTip: "Mama Cloud says: 'Azure Cost Management is Mother's market envelope: once 80% of the food money is gone, she blows the whistle!' "
  },
  {
    id: 21,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "Which Azure service informs administrators when an official planned hardware maintenance window will occur in their specific Azure region, or when a major cloud outage is affecting Microsoft datacenters?",
    options: [
      "Azure Service Health",
      "Application Insights",
      "Log Analytics",
      "Azure Policy"
    ],
    correctIndex: 0,
    explanation: "Azure Service Health provides a personalized dashboard of the health of Azure services and regions you use, notifying you about service outages, planned maintenance, and health advisories.",
    whyOthersWrong: [
      "Application Insights monitors performance and errors in your custom web application code.",
      "Log Analytics queries and analyzes collected telemetry logs.",
      "Azure Policy enforces governance and compliance rules on resources."
    ],
    mamaCloudTip: "Bro Cloud says: 'Azure Service Health is the national radio station announcing that the main trade highway is closed for maintenance!'"
  },
  {
    id: 22,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "An organization wants to categorize its Azure resources by assigning key-value pairs (e.g., Environment: Production, Department: Marketing) to make it easier to track costs across departments. Which feature should they use?",
    options: [
      "Resource Tags",
      "Resource Locks",
      "Availability Sets",
      "Network Security Groups"
    ],
    correctIndex: 0,
    explanation: "Azure Resource Tags are metadata key-value pairs applied to resources, resource groups, and subscriptions to logically organize them for billing, cost tracking, and management reporting.",
    whyOthersWrong: [
      "Resource Locks prevent accidental resource deletion or modification.",
      "Availability Sets provide VM hardware redundancy within a datacenter.",
      "Network Security Groups filter network traffic."
    ],
    mamaCloudTip: "Mama Cloud says: 'Resource Tags are bright color-coded stickers on market sacks: Green sticker for Auntie's yams, Blue sticker for Uncle's beans!'"
  },
  {
    id: 23,
    domain: "concepts",
    domainName: "Cloud Concepts",
    question: "Which of the following describes a scenario where an organization deploys resources across two or more different public cloud providers (e.g., Microsoft Azure and AWS) to prevent vendor lock-in and increase redundancy?",
    options: [
      "Multi-cloud deployment",
      "Private cloud deployment",
      "Sovereign cloud mesh",
      "Single-tenant hybrid"
    ],
    correctIndex: 0,
    explanation: "A Multi-cloud strategy involves utilizing services from multiple distinct public cloud providers (e.g., Azure and AWS) to diversify risk, avoid vendor lock-in, and leverage best-of-breed services.",
    whyOthersWrong: [
      "Private cloud relies exclusively on dedicated infrastructure operated for one single organization.",
      "Sovereign cloud mesh is not a standard cloud deployment terminology.",
      "Single-tenant hybrid describes linking private on-prem to one cloud, not multiple public clouds."
    ],
    mamaCloudTip: "Bro Cloud says: 'Multi-cloud is doing business in two separate markets across town so if one market closes for renovation, your trade keeps flowing!'"
  },
  {
    id: 24,
    domain: "architecture",
    domainName: "Azure Architecture & Services",
    question: "What Azure storage service enables multiple on-premises machines and cloud virtual machines to mount and share a cloud-based file system simultaneously using the industry-standard SMB or NFS protocols?",
    options: [
      "Azure Files",
      "Azure Blob Storage",
      "Azure Table Storage",
      "Azure Queue Storage"
    ],
    correctIndex: 0,
    explanation: "Azure Files provides fully managed cloud file shares that are accessible via industry-standard Server Message Block (SMB) and Network File System (NFS) protocols, allowing simultaneous shared access.",
    whyOthersWrong: [
      "Azure Blob Storage is optimized for massive unstructured objects (media, logs, backups) via REST API, not file system mounting via SMB/NFS.",
      "Azure Table Storage is a NoSQL key-value store.",
      "Azure Queue Storage provides reliable message queuing between application components."
    ],
    mamaCloudTip: "Mama Cloud says: 'Azure Files is the shared family ledger book sitting on the parlor table that everyone can open and write into at the same time!'"
  },
  {
    id: 25,
    domain: "governance",
    domainName: "Azure Management & Governance",
    question: "What tool should a cloud architect use BEFORE deploying any services to estimate the expected monthly costs for a planned new Azure infrastructure deployment?",
    options: [
      "Azure Pricing Calculator",
      "Total Cost of Ownership (TCO) Calculator",
      "Azure Advisor",
      "Azure Monitor"
    ],
    correctIndex: 0,
    explanation: "The Azure Pricing Calculator is a web-based tool that allows users to configure and estimate expected monthly costs for Azure products and services BEFORE provisioning them.",
    whyOthersWrong: [
      "The TCO Calculator compares the cost of running on-premises infrastructure against migrating to Azure.",
      "Azure Advisor reviews ALREADY deployed resources to find optimization opportunities.",
      "Azure Monitor collects real-time telemetry from active resources."
    ],
    mamaCloudTip: "Mama Cloud says: 'Pricing Calculator is your shopping list and price check BEFORE you head out to the market!'"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AZ900_QUESTIONS };
}
