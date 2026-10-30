// English dictionary (served at "/en"). Must match the shape of id.ts.
// Product names and taglines stay in Indonesian: the products themselves are Indonesian-language.
import { id } from "./id";
import { site } from "./site";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Sissi — Software, apps & IoT for businesses | Sissi Kreatif Teknologi",
    description:
      "Sissi Kreatif Teknologi builds Sissi Kasir, Sissi Booth, and Sissi Accounting, and takes on custom websites, apps, business systems, and IoT projects. Free consultation.",
    keywords: [
      "software development company Indonesia",
      "web development",
      "mobile app development",
      "IoT development",
      "point of sale app",
      "Sissi Kasir",
      "Sissi Booth",
      "Sissi Accounting",
    ],
    ogAlt: "Sissi Kreatif Teknologi: software, apps, and IoT for businesses",
  },

  nav: {
    links: [
      { label: "Services", href: "#layanan" },
      { label: "Products", href: "#produk" },
      { label: "Portfolio", href: "#portofolio" },
      { label: "About", href: "#tentang" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Free consultation", href: "#kontak" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
  },

  hero: {
    ...id.hero,
    eyebrow: `${site.company} · ${site.city}, Indonesia`,
    title: "We build software for your business.",
    lead: "Businesses run on our products every day, and we can build yours too: websites, apps, business systems, and IoT.",
    primary: { label: "Free consultation", href: "#kontak" },
    secondary: { label: "See our services", href: "#layanan" },
    note: "Free consultation · Pricing based on your needs",
    person: { ...id.hero.person, alt: "Smiling woman in an orange sweater holding notebooks" },
    ui: {
      chart: { ...id.hero.ui.chart, alt: "Hourly transactions chart in Sissi Kasir" },
      order: { ...id.hero.ui.order, alt: "New order panel in Sissi Kasir" },
      menu: id.hero.ui.menu,
    },
    badge: { name: "Sissi", line: "Software, apps & IoT" },
    worksLabel: "What we have built",
    works: [
      { ...id.hero.works[0], kind: "Our product", line: "Android point of sale that keeps working offline" },
      { ...id.hero.works[1], kind: "Our product", line: "Photo booth app with automatic QRIS payments" },
      { ...id.hero.works[2], kind: "Our product", line: "Online accounting for businesses" },
      { ...id.hero.works[3], kind: "Client project", line: "Online booking and photo selection for photographers" },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "Tell us the problem. We will design the system.",
    body: "The team behind Sissi Kasir, Sissi Booth, and Sissi Accounting also builds for clients. You talk directly to the people who write the code.",
    problemLabel: "The problem",
    solutionLabel: "What we build",
    exampleLabel: "Example",
    items: [
      {
        name: "Websites",
        problem: "Your business does not show up on Google, or your site is slow and hard to update.",
        solution: "A fast, mobile-friendly site whose content you can update yourself.",
        example: { label: "kasir.sissi.id and booth.sissi.id", href: "https://booth.sissi.id/" },
      },
      {
        name: "Mobile & web apps",
        problem: "Orders, stock, or schedules are still tracked on paper and in WhatsApp groups.",
        solution: "Android, iOS, or web apps that follow how you work, and keep running when the signal drops.",
        example: { label: "Sissi Kasir, an offline point of sale for phones and tablets", href: "https://kasir.sissi.id/" },
      },
      {
        name: "Systems & integrations",
        problem: "Your cashier, payments, and bookkeeping live in separate places and data is copied by hand.",
        solution: "One system that connects QRIS, payment gateways, WhatsApp notifications, printers, and bookkeeping.",
        example: { label: "Sissi Booth, with QRIS payments confirmed automatically", href: "https://booth.sissi.id/" },
      },
      {
        name: "IoT & devices",
        problem: "Machines, rooms, or equipment still need someone to check them in person.",
        solution: "Sensors, device control, and dashboards that alert you when something is wrong. From prototype to installation.",
        example: { label: "Sissi Booth, an app that controls the camera and photo printer", href: "https://booth.sissi.id/" },
      },
      {
        name: "UI/UX design",
        problem: "You already have developers, but users find the app confusing.",
        solution: "Quick research, user flows, and interface designs ready for your team to build.",
        example: null,
      },
      {
        name: "Maintenance & hosting",
        problem: "The site or app is live, but nobody looks after it.",
        solution: "Servers, domains, backups, security updates, and fixes, the same way we run our own products.",
        example: null,
      },
    ],
    bundle: {
      text: "A small business that wants something ready to use? Combine Sissi Kasir, Sissi Booth, or Sissi Accounting with a website for your business.",
      cta: "Ask about the small business package",
    },
  },

  products: {
    eyebrow: "Products",
    title: "Products we build and maintain ourselves.",
    body: "Each product started from a real problem we saw in local businesses. We use them, improve them, and keep adding features based on user feedback.",
    languageNote: "Our products are currently available in Indonesian, for businesses in Indonesia.",
    items: [
      {
        ...id.products.items[0],
        body: "A point of sale app for Android phones and tablets. Transactions are saved on the device and sync automatically once the signal is back.",
        points: [
          "Cash, QRIS, cards, transfers, and store credit",
          "Table orders and a kitchen display",
          "Stock, cost per variant, and sales reports",
          "Cash closing, shifts, and staff attendance",
        ],
        audience: "Food & beverage · Retail · Services · Rentals",
        badge: "Free plan available",
        cta: "Visit Sissi Kasir",
      },
      {
        ...id.products.items[1],
        body: "A photo booth app that accepts QRIS payments automatically and keeps working without internet. Guests scan a QR code to download their photos.",
        points: [
          "Automatic QRIS, payment detected on its own",
          "Digital copies and boomerang GIFs via QR",
          "4 layouts, 9 filters, and stickers",
          "Kiosk and Event modes, custom frames per client",
        ],
        audience: "Photo booth businesses · Weddings & events · Cafés & malls",
        badge: "Daily, monthly, and yearly plans",
        cta: "Visit Sissi Booth",
      },
      {
        ...id.products.items[2],
        body: "Online accounting software for Indonesian businesses. From the first transaction to closing the books: cash, stock, and financial reports in one clear flow.",
        points: [
          "Connected sales and purchases",
          "Cash & bank with reconciliation",
          "Multi-warehouse inventory and fixed assets",
          "Profit & loss, balance sheet, and cash flow",
        ],
        audience: "Indonesian businesses · Finance teams · Connects with Sissi Kasir",
        badge: "30-day free trial",
        cta: "Visit Sissi Accounting",
        visual: {
          ...id.products.items[2].visual,
          alt: "Sissi Accounting owner dashboard: revenue, net profit, assets, and liabilities at a glance",
        },
      },
    ],
  },

  workflow: {
    eyebrow: "How we work",
    title: "Clear from the start, no surprises at the end.",
    steps: [
      { title: "Consult", body: "Free. We listen to the problem first instead of pitching features." },
      { title: "Plan", body: "Scope, early designs, timeline, and a written quote." },
      { title: "Build", body: "Regular progress you can try yourself from the early stages." },
      { title: "Launch", body: "Testing together, installation, and training for your team." },
      { title: "Maintain", body: "Fixes, updates, and further development when you need them." },
    ],
  },

  portfolio: {
    eyebrow: "Portfolio",
    title: "Work you can try for yourself.",
    body: "Everything below is live. Open it, click around, and judge for yourself.",
    items: [
      {
        ...id.portfolio.items[0],
        kind: "Client project",
        summary:
          "A platform for photographers: booking pages, schedule and payment tracking, online photo selection for clients, and an in-browser photo editor.",
      },
      {
        ...id.portfolio.items[1],
        kind: "Client project",
        summary:
          "Website for a video and photo production house in Pekanbaru and Greater Jakarta: showreel, event portfolio, services, and process, with content managed through a CMS.",
      },
      {
        ...id.portfolio.items[2],
        kind: "Sissi product",
        summary:
          "Product site, illustrated guides, an owner dashboard, and self-ordering via table QR codes. The app itself runs offline on Android.",
      },
      {
        ...id.portfolio.items[3],
        kind: "Sissi product",
        summary: "Product site, guest photo galleries via QR, and a dashboard for booth owners.",
      },
    ],
    visit: "Visit",
    imageAlt: "Screenshot of",
  },

  about: {
    eyebrow: "About us",
    title: "A technology company from Pekanbaru, Indonesia.",
    paragraphs: [
      `${site.company} started from things we kept seeing in local businesses: cashiers stuck when the signal dropped, photo booths still paid by hand, and bookkeeping scattered across notebooks.`,
      "We chose to solve them by building our own products. That taught us what business owners really need, and we bring those lessons to every client project.",
    ],
    principles: [
      { title: "Used first, sold later", body: "Our products are tested in real businesses before we offer them to anyone else." },
      { title: "Works on a bad connection", body: "We design systems that do not stop just because the internet goes down." },
      { title: "Plain language", body: "Quotes, progress reports, and guides are written without confusing jargon." },
    ],
    facts: [
      { label: "Location", value: `${site.city}, ${site.region}, Indonesia` },
      { label: "Live products", value: "Sissi Kasir, Sissi Booth, Sissi Accounting" },
      { label: "Consultation", value: "In person or online" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions we often get.",
    items: [
      {
        q: "How much does a website or app cost?",
        a: "It depends on what you need. After a free consultation, we send a written quote with the scope, timeline, and price. You decide once everything is clear.",
      },
      {
        q: "Is the consultation really free?",
        a: "Yes. Tell us what you need via WhatsApp, email, or the form on this page. There is no obligation to continue.",
      },
      {
        q: "How long does a project take?",
        a: "It depends on the scope. We put the estimated timeline in the quote, including the stages and when you can start trying the results.",
      },
      {
        q: "Do you offer maintenance after launch?",
        a: "Yes. We can take care of servers, domains, backups, security updates, and fixes once the system is running. The terms and cost are covered in the quote.",
      },
      {
        q: "Who owns the code and the data?",
        a: "Ownership of the code, server access, and data is discussed at the start and written clearly in the quote, so there are no misunderstandings later.",
      },
      {
        q: "Do you take on IoT projects?",
        a: "Yes. For example sensors and remote monitoring, device control, or kiosk machines. We can start with a prototype before installing on site.",
      },
      {
        q: "Can Sissi products be customized for my business?",
        a: "We can discuss it, for example integrating with systems you already use or adding specific features. Contact us and tell us what you need.",
      },
      {
        q: "Do you work with clients outside Indonesia?",
        a: "Yes. Consultations, progress updates, and handover can all be done online, in English or Indonesian.",
      },
    ],
  },

  contact: {
    eyebrow: "Start a project",
    title: "Tell us what you need.",
    body: "Keep it short. Your message opens in WhatsApp or your email app, ready to send. We reply as soon as we can during working hours.",
    labels: { whatsapp: "WhatsApp", email: "Email", location: "Location" },
    note: "Free consultation. Pricing is based on your needs and written in the quote.",
    form: {
      name: { label: "Name", placeholder: "Your name" },
      business: { label: "Business name", optional: "optional", placeholder: "e.g. Sunset Coffee" },
      services: {
        label: "What you need",
        hint: "Pick as many as you like",
        options: [
          "Website",
          "Mobile/web app",
          "Custom system",
          "IoT & devices",
          "UI/UX design",
          "Maintenance & hosting",
          "Sissi products",
          "Other",
        ],
      },
      budget: {
        label: "Estimated budget",
        optional: "optional",
        options: ["Under IDR 10M", "IDR 10–30M", "IDR 30–100M", "Over IDR 100M", "Not sure yet"],
      },
      message: {
        label: "Tell us about it",
        placeholder:
          "e.g. We run 3 laundry branches and want an app to track orders and send WhatsApp notifications to customers.",
      },
      errors: {
        name: "Please enter your name.",
        services: "Pick at least one option.",
        message: "Tell us what you need, at least one sentence.",
      },
      sendWhatsapp: "Send via WhatsApp",
      sendEmail: "Send via email",
      sentNote: "Your message is ready in the app that just opened. Just press send.",
      emailSubject: "Project request from sissi.id",
      template: {
        greeting: "Hi Sissi, I would like to discuss a project.",
        name: "Name",
        business: "Business",
        services: "Needs",
        budget: "Budget",
        message: "Details",
      },
    },
  },

  footer: {
    tagline: "Software, apps, and IoT for businesses.",
    columns: [
      { title: "Products", links: id.footer.columns[0].links },
      {
        title: "Company",
        links: [
          { label: "Services", href: "#layanan" },
          { label: "Portfolio", href: "#portofolio" },
          { label: "About", href: "#tentang" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    contactTitle: "Contact",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};
