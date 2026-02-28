import {
  Database, BarChart3, Cloud, Smartphone, BrainCircuit, Bot,
  Settings2, LineChart, Server, Globe, Layers, Lock, Search, Target, Code2, Rocket, TrendingUp,AlertTriangle, Eye, Cog, Unplug,Users, Clock,
} from "lucide-react";

export const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CTO, TechVista Solutions",
    content:
      "Doctor of Data ne humari poori data infrastructure ko transform kar diya. Ab hum 10x faster decisions le rahe hain real-time analytics ke saath.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "VP Engineering, CloudNine Systems",
    content:
      "Unki team ne humara legacy system modernize kiya aur cloud migration seamless tha. Downtime zero aur performance 3x better.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, DataDriven Corp",
    content:
      "Enterprise-grade solutions at startup speed. Doctor of Data ki consulting ne humari revenue growth 40% increase kiya within 6 months.",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    role: "Director of Operations, ScaleUp Inc",
    content:
      "Best data consulting firm we've worked with. Their BI dashboards gave us complete visibility into our operations for the first time.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Founder, NextGen Analytics",
    content:
      "Professional, reliable, and incredibly skilled. They delivered our entire data pipeline ahead of schedule with exceptional quality.",
    rating: 5,
  },
];



export const categories = [
  {
    title: "Enterprise Data Systems",
    description: "Centralized, scalable data architectures that become your operational backbone.",
    detail: "From legacy system migration to greenfield MIS platforms, we design data architectures that handle billions of records with sub-second query times.",
    services: [
      { icon: Database, name: "Advanced MIS Development", desc: "Custom management information systems with real-time reporting" },
      { icon: Settings2, name: "Custom Data Management", desc: "End-to-end data lifecycle management and governance" },
      { icon: Layers, name: "Complete MIS Outsourcing", desc: "Fully managed MIS operations with dedicated teams" },
    ],
  },
  {
    title: "Business Intelligence & Automation",
    description: "Transform raw data into actionable intelligence. Automate what slows you down.",
    detail: "Our BI solutions reduce reporting time by 80% and give leadership instant access to KPIs that actually drive growth.",
    services: [
      { icon: BarChart3, name: "Dashboard Automation", desc: "Live dashboards that update in real-time across all departments" },
      { icon: LineChart, name: "Process Automation Systems", desc: "RPA and workflow automation that eliminates manual bottlenecks" },
      { icon: BrainCircuit, name: "Data Analytics & Insights", desc: "Predictive analytics and ML-powered business intelligence" },
    ],
  },
  {
    title: "Digital Infrastructure",
    description: "Secure, cloud-native infrastructure engineered for enterprise performance.",
    detail: "We architect infrastructure that scales from 100 to 1M+ users without re-engineering, with 99.99% uptime guarantees.",
    services: [
      { icon: Cloud, name: "Cloud Integration", desc: "Multi-cloud strategy and migration with zero downtime" },
      { icon: Server, name: "ERP Automation", desc: "ERP modernization and intelligent process automation" },
      { icon: Lock, name: "Secure Infrastructure Setup", desc: "Zero-trust architecture with SOC 2 compliance" },
    ],
  },
  {
    title: "Smart Applications",
    description: "Intelligent applications that adapt, learn, and scale with your business.",
    detail: "We build applications that aren't just functional—they learn from usage patterns and optimize themselves over time.",
    services: [
      { icon: Globe, name: "Web & App Development", desc: "Enterprise-grade web and mobile applications" },
      { icon: Smartphone, name: "AI Integration Solutions", desc: "GPT, computer vision, and NLP integration into existing systems" },
      { icon: Bot, name: "Business Chatbot Systems", desc: "Intelligent chatbots that handle 70% of customer queries" },
    ],
  },
];

export const steps = [
  {
    icon: Search,
    phase: "01",
    title: "Discovery",
    description: "Deep-dive into your operations, data flows, pain points, and strategic objectives.",
    details: ["Stakeholder interviews", "Systems audit", "Pain point mapping", "Goals alignment"],
    duration: "1-2 weeks",
  },
  {
    icon: Target,
    phase: "02",
    title: "Strategy",
    description: "Architecture blueprint, technology selection, and roadmap aligned to business outcomes.",
    details: ["Technical architecture", "Technology selection", "Timeline & milestones", "ROI projection"],
    duration: "1-2 weeks",
  },
  {
    icon: Code2,
    phase: "03",
    title: "Development",
    description: "Agile development with continuous stakeholder alignment and quality assurance.",
    details: ["Sprint-based delivery", "Weekly demos", "Continuous testing", "Documentation"],
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    phase: "04",
    title: "Deployment",
    description: "Staged rollout with zero-downtime migration, training, and change management.",
    details: ["Staged rollout", "Data migration", "Team training", "Go-live support"],
    duration: "1-2 weeks",
  },
  {
    icon: TrendingUp,
    phase: "05",
    title: "Optimization",
    description: "Ongoing monitoring, performance tuning, and iterative improvements.",
    details: ["Performance monitoring", "Usage analytics", "Iterative improvements", "Quarterly reviews"],
    duration: "Ongoing",
  },
];


export const pains = [
  {
    icon: AlertTriangle,
    title: "Manual Reporting",
    stat: "23 hrs/week",
    statLabel: "wasted on manual data compilation",
    description: "Hours wasted compiling spreadsheets. Decisions delayed by outdated data. Your team operates on yesterday's numbers while competitors act on real-time insights.",
    color: "destructive",
  },
  {
    icon: Eye,
    title: "Lack of Data Visibility",
    stat: "67%",
    statLabel: "of leaders lack real-time data access",
    description: "Critical metrics buried across disconnected tools. No single source of truth. Leadership flies blind on performance, missing revenue opportunities daily.",
    color: "primary",
  },
  {
    icon: Cog,
    title: "Process Inefficiency",
    stat: "40%",
    statLabel: "of tasks are repetitive & automatable",
    description: "Repetitive tasks consuming skilled resources. Error-prone workflows draining productivity. Without automation, scaling becomes exponentially harder.",
    color: "accent",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    stat: "12+",
    statLabel: "average tools per enterprise team",
    description: "Siloed departments, fragmented data. Integration gaps create compliance risks, duplicate efforts, and operational bottlenecks that compound over time.",
    color: "primary",
  },
];


export const metrics = [
  { icon: Users, value: 150, suffix: "+", label: "Enterprise Clients", description: "Across manufacturing, education, finance, and logistics" },
  { icon: Clock, value: 99, suffix: ".9%", label: "System Uptime", description: "Mission-critical reliability backed by SLA" },
  { icon: TrendingUp, value: 40, suffix: "%", label: "Efficiency Gain", description: "Average operational cost reduction achieved" },
  { icon: Database, value: 3, suffix: ".2M+", label: "Data Points Daily", description: "Processed and analyzed in real-time" },
];

export const caseStudies = [
  {
    industry: "Manufacturing",
    title: "Automated production reporting across 12 facilities",
    result: "67% reduction in reporting time",
    tags: ["MIS", "Automation", "Dashboard"],
  },
  {
    industry: "Education",
    title: "Unified student data platform for 50K+ students",
    result: "3x faster administrative processing",
    tags: ["Data Systems", "Cloud", "Analytics"],
  },
  {
    industry: "Financial Services",
    title: "Real-time compliance monitoring dashboard",
    result: "Zero compliance violations in 18 months",
    tags: ["BI", "Security", "Real-time"],
  },
];