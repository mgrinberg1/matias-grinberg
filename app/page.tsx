import Image from "next/image";
import VideoGrid from "@/components/VideoGrid";
import FadeIn from "@/components/FadeIn";
import TwitterTimeline from "@/components/TwitterTimeline";

// ─── Shared classes ───────────────────────────────────────────────────────────
const LABEL =
  "font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500";
const MONO = "font-[family-name:var(--font-geist-mono)]";
const HR = "border-zinc-100 dark:border-zinc-800";
const DIVIDE = "divide-y divide-zinc-100 dark:divide-zinc-800";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkEvent {
  type: string;
  name: string;
  desc: string;
  url?: string;
  videoId?: string;
}

interface WorkItem {
  company: string;
  companyUrl?: string;
  role: string;
  sub: string;
  period: string;
  tag: string;
  description: string;
  events?: WorkEvent[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WORK: WorkItem[] = [
  {
    company: "Queiros",
    companyUrl: "https://queiros.com.ar/es",
    role: "CEO & Co-Founder",
    sub: "Buenos Aires",
    period: "2024 – Present",
    tag: "Startup · AI",
    description:
      "Building AI-powered field data capture via WhatsApp for distributed operations teams in logistics, agriculture, and construction.",
  },
  {
    company: "Complif",
    companyUrl: "https://complif.com",
    role: "Business Development Representative",
    sub: "US & Puerto Rico",
    period: "2025 – 2026",
    tag: "YC W22 · Fintech",
    description:
      "Led US and Puerto Rico expansion for a compliance automation platform serving 120+ financial institutions — from fintechs like Buenbit to public companies like Schroders and Stonex.",
  },
  {
    company: "B9 Holdings",
    role: "Business Development",
    sub: "Buenos Aires",
    period: "Oct 2023 – May 2024",
    tag: "Holding · Startup",
    description:
      "Cross-functional BD across the holding's portfolio — commercial strategy, product feedback, and go-to-market groundwork.",
  },
  {
    company: "Trama ITBA",
    role: "Co-Director → Head of Workshops",
    sub: "Entrepreneurship Club · Buenos Aires",
    period: "Sep 2021 – Sep 2023",
    tag: "Student Club",
    description:
      "Led a 30-person team, secured major corporate sponsorships, and turned the club into ITBA's central hub for entrepreneurship and tech. Mission: connect students from all around Argentina to the tech and entrepreneurial ecosystem.",
    events: [
      {
        type: "Co-founded",
        name: "AgroConnect",
        desc: "Built the largest agtech event for university students in Argentina from scratch — founders, investors, and agri-industry leaders under one roof.",
        url: "https://www.youtube.com/watch?v=l6OzX1H1VnQ",
        videoId: "l6OzX1H1VnQ",
      },
      {
        type: "Organized",
        name: "Cryptopall",
        desc: "Flagship crypto & blockchain event — panels, workshops, and deep dives with key players from the Argentine crypto ecosystem.",
        videoId: "1NjBmJ-qEDo",
      },
      {
        type: "Organized",
        name: "Entrepreneurship Bootcamp",
        desc: "Annual multi-day startup bootcamp at ITBA. Teams built, pitched, and competed — a cornerstone of Argentina's entrepreneurial ecosystem.",
        videoId: "7igV99qwMk8",
      },
    ],
  },
];

const EDUCATION = [
  {
    institution: "ITBA — Instituto Tecnológico de Buenos Aires",
    degree: "Bachelor of Business Administration",
    period: "2021 – 2025",
    note: "Buenos Aires",
  },
  {
    institution: "Louvain School of Management",
    degree: "Exchange Program",
    period: "Sep 2024 – Jan 2025",
    note: "Louvain-la-Neuve, Belgium",
  },
];

// ─── Icon components ──────────────────────────────────────────────────────────

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const iconLink = `inline-flex items-center gap-2 ${MONO} text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors`;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-14 sm:space-y-20">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="flex items-start justify-between gap-8 scroll-mt-20">
        <div className="space-y-5 flex-1">
          <div className="space-y-1.5">
            <h1 className="hero-line hero-line-1 text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-3">
              Matias Grinberg
              <span className="rocket-float text-2xl" aria-hidden="true">🚀</span>
            </h1>
            <p className={`hero-line hero-line-2 ${LABEL}`}>
              Buenos Aires, Argentina — CEO &amp; Co-Founder @ Queiros
            </p>
          </div>
          <p className="hero-line hero-line-3 text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
            24 y/o. Building{" "}
            <a href="https://queiros.com.ar/es" target="_blank" rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-700 dark:hover:decoration-zinc-300 transition-colors">
              Queiros
            </a>
            , the most frictionless way to turn real-world operations into structured data using AI + WhatsApp. Connecting the physical world with structured data.{" "}
            <span className="italic text-zinc-600 dark:text-zinc-300">Culo inquieto.</span>{" "}
            <span className="text-zinc-700 dark:text-zinc-200 font-medium">Go big or go home.</span>
          </p>
          <div className="hero-line hero-line-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="https://www.linkedin.com/in/matias-grinberg7/" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
              <IconLinkedIn /><span>LinkedIn</span>
            </a>
            <a href="https://x.com/matt1_g" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="X / Twitter">
              <IconX /><span>@matt1_g</span>
            </a>
            <a href="mailto:matigrinberg@gmail.com" className={iconLink} aria-label="Email">
              <IconMail /><span>matigrinberg@gmail.com</span>
            </a>
            <a href="https://queiros.com.ar/es" target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Queiros website">
              <IconGlobe /><span>queiros.com.ar</span>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
            <Image
              src="/avatar-2.jpg"
              alt="Matias Grinberg"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <hr className={HR} />

      {/* ── Career ───────────────────────────────────────────────────────── */}
      <FadeIn>
        <section id="career" className="scroll-mt-20 space-y-8">
          <p className={LABEL}>Career</p>

          <ul className={DIVIDE}>
            {WORK.map((item) => (
              <li key={item.company} className="py-5 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-3">
                  <div>
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="font-semibold hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">
                        {item.company}
                      </a>
                    ) : (
                      <span className="font-semibold">{item.company}</span>
                    )}
                    <span className={`ml-2 ${MONO} text-[10px] text-zinc-400 dark:text-zinc-500`}>
                      {item.tag}
                    </span>
                  </div>
                  <span className={`${MONO} text-[11px] text-zinc-400 dark:text-zinc-500 sm:flex-shrink-0`}>
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.role} · {item.sub}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
                  {item.description}
                </p>

                {/* Event cards (Trama ITBA) — each event followed by its video */}
                {item.events && (
                  <div className="pt-4 space-y-5">
                    {item.events.map((ev) => (
                      <div key={ev.name} className="space-y-2">
                        <div className="border border-zinc-100 dark:border-zinc-800 rounded-sm p-3 space-y-1.5 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors">
                          <p className={`${MONO} text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500`}>
                            {ev.type}
                          </p>
                          {ev.url ? (
                            <a href={ev.url} target="_blank" rel="noopener noreferrer"
                              className="block text-sm font-semibold hover:text-zinc-500 transition-colors">
                              {ev.name} ↗
                            </a>
                          ) : (
                            <p className="text-sm font-semibold">{ev.name}</p>
                          )}
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {ev.desc}
                          </p>
                        </div>
                        {ev.videoId && (
                          <VideoGrid videos={[{ id: ev.videoId, title: ev.name }]} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Education */}
          <div className="space-y-4 pt-2">
            <p className={LABEL}>Education</p>
            <ul className={DIVIDE}>
              {EDUCATION.map((item) => (
                <li key={item.institution} className="py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-3">
                    <div>
                      <span className="text-sm font-medium">{item.institution}</span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400"> — {item.degree}</span>
                    </div>
                    <span className={`${MONO} text-[11px] text-zinc-400 dark:text-zinc-500 sm:flex-shrink-0`}>
                      {item.period}
                    </span>
                  </div>
                  <p className={`${MONO} text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5`}>
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      <hr className={HR} />

      {/* ── Me ───────────────────────────────────────────────────────────── */}
      <FadeIn>
        <section id="me" className="scroll-mt-20 space-y-10">
          <p className={LABEL}>Me</p>

          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-2">
            {["avatar-2.jpg", "avatar.jpg", "avatar-3.jpg"].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <Image
                  src={`/${src}`}
                  alt="Matias Grinberg"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bio */}
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Born in Chicago, raised in Buenos Aires. I build things at the intersection of
            operations, AI, and Latin America. Studied business administration at ITBA after
            switching from engineering, did an exchange in Belgium, and co-founded a startup
            with my best university friends. When I&apos;m not at a laptop: I&apos;m at a
            barbecue with family and friends or somewhere exploring.
          </p>

          {/* Belgium */}
          <div className="space-y-3">
            <p className={LABEL}>✈️ Belgium</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Spent a semester in Louvain-la-Neuve at the Louvain School of Management. A small
              university city in Belgium that packs an entire world inside it — students from
              every country, a ridiculous amount of intercultural exchange, and somehow the best
              pasta I&apos;ve had in my life (Italians, obviously). I made lifelong friends there,
              picked up basic French, and even learned some Italian along the way. Italian and
              French — two languages I didn&apos;t have going in.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              One memory stands out above everything else: Mauro and I met Pope Francis during
              the trip. One of those moments where you can&apos;t quite believe it&apos;s actually
              happening — and then it does.
            </p>
            <div className="pt-1 max-w-sm mx-auto sm:mx-0">
              <a
                href="https://www.youtube.com/watch?v=80vXElWIEnE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch the video — proof it really happened"
                className="group block aspect-[3/4] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative"
              >
                <Image
                  src="/pope-francis.jpg"
                  alt="Meeting Pope Francis in Belgium"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-end justify-start p-3 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`${MONO} text-[11px] text-white tracking-wider`}>
                    ▶ watch the proof
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Asados */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className={LABEL}>🔥 Asados</p>
              <a
                href="https://www.instagram.com/matata_asador"
                target="_blank"
                rel="noopener noreferrer"
                className={`${MONO} text-[11px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors`}
              >
                @matata_asador ↗
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Asado is not a meal — it&apos;s a ritual. Sunday afternoons, the whole family,
              the fire going for hours. I document every one of them.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
                >
                  <Image
                    src={`/asado-${n}.jpg`}
                    alt={`Asado ${n}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Basketball */}
          <div className="space-y-4">
            <p className={LABEL}>🏀 Basketball</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Grew up playing basketball at Club Ciudad de Buenos Aires at a high level. That
              was where I first learned what discipline and teamwork really mean — not as
              concepts, but as something you feel when the game is on the line. I don&apos;t
              play as much anymore, but sport never left — now I run, hit the gym, and squeeze
              in basketball or football whenever I can.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "basquet-1.jpg", alt: "Basketball at Club Ciudad de Buenos Aires" },
                { src: "basquet-2.jpg", alt: "Basketball at Club Ciudad de Buenos Aires" },
              ].map((img) => (
                <div key={img.src} className="aspect-[4/3] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                  <Image
                    src={`/${img.src}`}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* River Plate */}
          <div className="space-y-4">
            <p className={LABEL}>⚽ River Plate</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In Argentina, football isn&apos;t something you choose — it&apos;s something you
              inherit. River Plate is the thread connecting my childhood to my family, my friends,
              and Buenos Aires itself. Sundays at the Monumental with my dad. 80,000 people
              singing in unison. I was lucky enough to meet some of the players as a kid — one
              of those memories that never leaves you. River has a history like few clubs in
              the world: titles, legends, and moments that transcend the sport.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Started a YouTube channel as a kid:{" "}
              <a
                href="https://www.youtube.com/@elcanaldelhinchaderiver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 dark:text-zinc-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-700 dark:hover:decoration-zinc-300 transition-colors"
              >
                @elcanaldelhinchaderiver
              </a>
              . 400 subscribers. Still alive.
            </p>
            <div className="pt-1">
              <VideoGrid videos={[{ id: "Igzyv7e2yB0", title: "The day I went out with the players" }]} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n}
                  className="aspect-[4/3] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                  <Image
                    src={`/river-${n}.jpg`}
                    alt={`River Plate memory ${n}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <hr className={HR} />

      {/* ── Park City ────────────────────────────────────────────────────── */}
      <FadeIn>
        <section className="scroll-mt-20 space-y-6">
          <p className={LABEL}>🎿 Park City, Utah</p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Work and travel in Park City, Utah — working at{" "}
            <span className="text-zinc-800 dark:text-zinc-200 font-medium">Pendry Canyons</span>,
            a luxury resort hotel in the mountains. I managed customer inquiries across hotel
            departments, focusing on luxury hospitality for international guests. Gained real
            insight into hospitality management and customer success within a US corporation.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            But above everything else — I skied and snowboarded every chance I got. The mountain
            got me. Now I chase winters wherever I can find them. Anything that involves speed
            and cold air is a good idea.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "ski-1.jpg", alt: "Skiing in Park City" },
              { src: "ski-2.jpg", alt: "Skiing in Park City" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] overflow-hidden rounded-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <Image
                  src={`/${img.src}`}
                  alt={img.alt}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <hr className={HR} />

      {/* ── Latest tweets ────────────────────────────────────────────────── */}
      <FadeIn>
        <section className="scroll-mt-20 space-y-6">
          <div className="flex items-center justify-between">
            <p className={LABEL}>Latest from X</p>
            <a
              href="https://x.com/matt1_g"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${MONO} text-[11px] text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors`}
            >
              <IconX />
              <span>@matt1_g ↗</span>
            </a>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Not blogging right now — writing happens on X. Live feed below:
          </p>
          <div className="border border-zinc-100 dark:border-zinc-800 rounded-sm overflow-hidden bg-black/30 backdrop-blur-sm">
            <TwitterTimeline />
          </div>
        </section>
      </FadeIn>

    </div>
  );
}
