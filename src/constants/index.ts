// ─── SITE INFO ───────────────────────────────────────────────
export const SITE_NAME = "KJA Digital Marketing Solutions";
export const SITE_TAGLINE = "Grow Smarter. Market Better. Scale Faster.";
export const SITE_LOCATION = "Cordova, Cebu, Philippines";
export const SITE_EMAIL = "alcantarakentjeced@gmail.com";
export const SITE_PHONE = "0970 **** 0040";

// ─── NAVIGATION ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
];

// ─── FOOTER ──────────────────────────────────────────────────
export const FOOTER_PAGES = ["Home", "About", "Services", "Projects"];
export const FOOTER_RESOURCES = [
  "Blog", "Best practices", "Colors",
  "Color wheel", "Support", "Developers", "Resource library",
];
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
};

// ─── HERO ────────────────────────────────────────────────────
export const HERO = {
  title: "KJA Digital Marketing Solutions",
  subtitle: "We help businesses grow online through strategic digital marketing, creative design, and data-driven campaigns that deliver real, measurable results.",
  description: "Based in Cordova, Cebu — serving clients across the Philippines and beyond.",
};

// ─── ABOUT ───────────────────────────────────────────────────
export const ABOUT = {
  name: "Kent Alcantara",
  role: "Founder & Digital Marketing Strategist",
  experience: "3+ Years Experience",
  bio: "Hi, I'm Kent — the founder of KJA Digital Marketing Solutions. I'm passionate about helping businesses establish a powerful online presence through creative strategy, compelling content, and performance-driven campaigns.",
  description: "With over 3 years of hands-on experience in digital marketing, web design, and brand development, I've helped startups and established businesses alike achieve their growth goals. My approach combines creativity with analytics to deliver strategies that actually work.",
  tags: ["FRONT END", "BACK END"],
  image: "/biosection.png",
};

// ─── SKILLS ──────────────────────────────────────────────────
export const SKILLS = [
  { name: "Figma & UI Design", level: 85 },
  { name: "WordPress Development", level: 60 },
  { name: "Graphic Designing", level: 75 },
  { name: "SEO & Analytics", level: 80 },
  { name: "Social Media Marketing", level: 90 },
];

// ─── SERVICES ────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "We craft stunning, mobile-responsive websites that not only look great but are built to convert visitors into loyal customers. From landing pages to full e-commerce platforms.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description: "Dominate search rankings with our proven SEO strategies...",
    // Use this specific ID which is verified to work with Next.js Image:
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Build a loyal community around your brand. We manage your social presence across all major platforms with engaging content, targeted ads, and data-driven growth strategies.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Content Creation",
    description: "Compelling content that tells your brand story. From blog articles and copywriting to video scripts and infographics — we produce content that educates, entertains, and converts.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Email Marketing",
    description: "Turn your email list into a revenue machine. We design automated campaigns, newsletters, and drip sequences that nurture leads and keep your audience engaged.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "PPC & Paid Advertising",
    description: "Maximize every peso of your ad budget. Our certified ad specialists create and manage high-converting campaigns on Google, Facebook, Instagram, and other major platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
  },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    slug: "e-commerce-redesign",
    title: "E-Commerce Platform Redesign",
    description: "Redesigned the complete UI/UX of a local fashion e-commerce store, improving page load speed by 60% and increasing conversion rate by 40% within the first month.",
    category: "Web Design",
    tag: "Recent Projects",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "brand-identity-system",
    title: "Brand Identity System",
    description: "Developed a full brand identity for a Cebu-based food startup including logo design, color palette, typography guidelines, and brand usage manual.",
    category: "Branding",
    tag: "Recent Projects",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "social-media-campaign",
    title: "Social Media Growth Campaign",
    description: "Executed a 3-month social media campaign for a local restaurant that grew their Instagram following from 500 to 12,000 and increased foot traffic by 35%.",
    category: "Social Media",
    tag: "Website",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "seo-audit-revamp",
    title: "SEO Audit & Full Revamp",
    description: "Conducted a comprehensive SEO audit for a real estate company and implemented fixes that tripled their organic traffic and landed them on the first page for 15+ keywords.",
    category: "SEO",
    tag: "Recent Projects",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "ppc-campaign-launch",
    title: "Google Ads Campaign",
    description: "Launched and managed a Google Ads campaign for a dental clinic that achieved a 5x return on ad spend and reduced cost-per-lead by 48% in 60 days.",
    category: "Paid Ads",
    tag: "Website",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "content-strategy",
    title: "Content Marketing Strategy",
    description: "Built a 6-month content strategy for a B2B software company that generated 200% more qualified leads through blog content, email sequences, and LinkedIn posts.",
    category: "Content",
    tag: "Recent Projects",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&auto=format&fit=crop",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "KJA completely transformed our online presence. Our website traffic tripled in just two months and sales followed. Best investment we've made for our business.",
    author: "Maria Santos",
    role: "CEO, TechStart Philippines",
    rating: 5,
  },
  {
    id: 2,
    quote: "The SEO work Kent and his team did for us was exceptional. We went from page 5 to page 1 on Google for our main keywords. Highly recommended!",
    author: "John Reyes",
    role: "Marketing Director, Cebu Realty Group",
    rating: 5,
  },
  {
    id: 3,
    quote: "Professional, creative, and always on time. KJA's social media strategy grew our Instagram from 800 to over 15K followers. Our brand is finally getting noticed.",
    author: "Ana Cruz",
    role: "Founder, ShopLocal PH",
    rating: 4,
  },
];

// ─── BLOG POSTS ──────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "seo-tips-2025",
    title: "Top 10 SEO Tips to Dominate Google in 2025",
    category: "seo",
    date: "2025-03-01",
    description: "Search engine optimization is constantly evolving. Discover the most effective strategies to climb search rankings and drive organic traffic to your business this year.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&auto=format&fit=crop",
    content: "With Google's algorithm updates becoming more frequent, staying ahead of SEO trends is crucial for any business with an online presence. Here are the top 10 strategies our team at KJA uses to help clients dominate search results.",
  },
  {
    id: 2,
    slug: "social-media-trends-2025",
    title: "Social Media Trends Every Marketer Must Know in 2025",
    category: "social",
    date: "2025-02-15",
    description: "From short-form video to AI-generated content, social media is changing fast. Stay ahead of the curve with these emerging trends that are reshaping digital marketing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop",
    content: "Social media platforms are constantly evolving, and what worked last year may not work today. Here are the trends our team is leveraging to drive massive results for our clients.",
  },
  {
    id: 3,
    slug: "email-marketing-guide",
    title: "The Complete Email Marketing Guide for Small Businesses",
    category: "email",
    date: "2025-01-20",
    description: "Email marketing still delivers the highest ROI of any digital marketing channel. Learn how to build, grow, and monetize your email list with strategies that actually work.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
    content: "Despite the rise of social media, email marketing remains one of the most powerful tools in a digital marketer's arsenal. Here's everything you need to know to get started.",
  },
  {
    id: 4,
    slug: "web-design-principles",
    title: "7 Web Design Principles That Turn Visitors Into Customers",
    category: "design",
    date: "2024-12-10",
    description: "A beautiful website means nothing if it doesn't convert. Learn the core design principles our team uses to build websites that attract, engage, and convert.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop",
    content: "Great web design is about more than just aesthetics. It's about creating an experience that guides visitors toward taking action. Here are the principles we follow at KJA.",
  },
  {
    id: 5,
    slug: "ppc-mistakes",
    title: "5 Costly PPC Mistakes That Are Burning Your Ad Budget",
    category: "ads",
    date: "2024-11-05",
    description: "Pay-per-click advertising can be incredibly profitable — or incredibly wasteful. Learn the most common mistakes businesses make with Google and Facebook Ads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    content: "We've audited hundreds of ad accounts and see the same mistakes over and over. Avoid these costly errors to make your PPC campaigns profitable from day one.",
  },
  {
    id: 6,
    slug: "content-strategy-guide",
    title: "How to Build a Content Strategy That Drives Real Growth",
    category: "content",
    date: "2024-10-20",
    description: "Content marketing without a strategy is just noise. Learn how to create a data-driven content plan that builds authority, drives traffic, and generates leads consistently.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop",
    content: "A winning content strategy starts with understanding your audience and your goals. Here's the exact framework we use to build content plans for our clients at KJA.",
  },
];

export const CONTACT_INFO = {
  email: "alcantarakentjeced@gmail.com",
  phone: "0970 **** 0040",
  address: "Cordova, Cebu, Philippines",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31406.45239103099!2d123.92383561962391!3d10.277189196395353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a990ec38510f2d%3A0x7d018721c43555!2sCordova%2C%20Cebu!5e0!3m2!1sen!2sph!4v1712152643210!5m2!1sen!2sph",
};