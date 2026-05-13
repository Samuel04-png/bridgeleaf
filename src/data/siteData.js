export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Governance", href: "#governance" },
  { label: "Investment Strategy", href: "#strategy" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  "Zambia-Based",
  "Multi-Sector Portfolio",
  "Acquisition-Led Growth",
  "Group-Level Oversight",
];

export const whatWeDo = [
  {
    title: "Strategic Acquisitions",
    body: "Identifying and acquiring businesses with strong growth or turnaround potential.",
  },
  {
    title: "Business Rescue & Recapitalization",
    body: "Providing capital and management support to restructure underperforming businesses.",
  },
  {
    title: "Equity Investments",
    body: "Taking strategic equity positions in ventures aligned with the Group's growth mandate.",
  },
  {
    title: "Capital Allocation & Financial Structuring",
    body: "Deploying capital with discipline and structuring opportunities for long-term sustainability.",
  },
  {
    title: "Portfolio Management",
    body: "Providing oversight, performance monitoring, and strategic direction across portfolio companies.",
  },
  {
    title: "Operational Oversight",
    body: "Supporting subsidiaries with governance, reporting, and execution discipline.",
  },
];

export const sectors = [
  "Energy & Petroleum",
  "Commodity Trading",
  "Logistics & Infrastructure",
  "Transportation",
  "Finance & Lending",
  "Currency Exchange",
  "Manufacturing",
  "Security Services",
  "Mining & Mineral Trading",
  "Emerging Opportunities",
];

const asset = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

export const imageSources = {
  hero: asset("hero-logistics.jpg"),
  energy: asset("energy-storage.jpg"),
  logistics: asset("logistics-warehouse.jpg"),
  commodities: asset("copper-commodities.jpg"),
  lusaka: asset("lusaka-institutional.jpg"),
};

export const portfolio = [
  {
    name: "Duval Energies Ltd",
    sector: "Downstream Petroleum Retail",
    description: "A portfolio company focused on downstream petroleum retail and energy distribution.",
    image: imageSources.energy,
    alt: "Industrial oil storage tank representing downstream petroleum operations",
    href: "#contact",
  },
  {
    name: "Urban Wave Haulage Ltd",
    sector: "Logistics & Haulage Services",
    description: "A portfolio company providing logistics, transport, and haulage services.",
    image: imageSources.logistics,
    alt: "Warehouse aisle and forklift representing logistics and haulage operations",
    href: "https://urbanwavelogistics.com/",
  },
  {
    name: "Afrotrade Corporation Ltd",
    sector: "Commodity & Energy Trading",
    description: "A portfolio company focused on commodity and energy trading across key markets.",
    image: imageSources.commodities,
    alt: "Stacks of copper sheets representing commodity trading and mineral markets",
    href: "http://www.afrotradecorp.com",
  },
];

export const valueSteps = ["Identify", "Invest", "Stabilize", "Optimize", "Scale"];

export const valueDrivers = [
  "Strategic capital deployment",
  "Strong governance frameworks",
  "Operational improvement",
  "Market expansion",
  "Financial discipline",
];

export const pillars = [
  {
    title: "Investor",
    body: "Deploying capital into high-potential opportunities.",
  },
  {
    title: "Operator",
    body: "Supporting businesses with strategic and operational oversight.",
  },
  {
    title: "Builder",
    body: "Developing sustainable companies that create long-term value.",
  },
];

export const boardRoles = [
  {
    title: "Chairman",
    body: "Provides overall leadership and strategic direction.",
  },
  {
    title: "Two Non-Executive Directors",
    body: "Offer independent oversight and advice to ensure best practices in governance.",
  },
  {
    title: "Chief Executive Officer",
    body: "Oversees execution of corporate strategy and daily operations.",
  },
  {
    title: "Chief Financial Officer",
    body: "Manages financial strategy, reporting, and risk management.",
  },
];

export const approaches = [
  {
    title: "Deal Origination",
    body: "Sourcing and evaluating businesses that fit the Group's long-term mandate.",
  },
  {
    title: "Turnaround Mandates",
    body: "Stabilizing stressed businesses through recapitalization, governance, and operating discipline.",
  },
  {
    title: "Growth Equity Positions",
    body: "Backing ventures where strategic ownership can accelerate durable enterprise value.",
  },
  {
    title: "Capital Markets Participation",
    body: "Investing in financial instruments and structured opportunities.",
  },
  {
    title: "Active Portfolio Management",
    body: "Providing oversight and strategic direction to portfolio companies.",
  },
];

export const partnerGroups = [
  "Business owners seeking capital or restructuring",
  "Investors looking for exposure to diversified sectors",
  "Strategic partners across energy, logistics, and trading",
  "Businesses suitable for acquisition, recapitalization, or turnaround",
];

export const partnershipOpportunities = [
  "Equity participation",
  "Joint ventures",
  "Strategic partnerships",
  "Business acquisitions",
  "Business rescue and restructuring",
];
