import { useState, useEffect, useRef, useCallback } from "react";

const songs = ["/1.mp3", "/2.mp3", "/3.mp3"];

const skills = [
  { name: "HTML & CSS",                    level: 95, icon: "🎨" },
  { name: "React / React Native",          level: 90, icon: "⚛️" },
  { name: "Flutter & Dart",                level: 88, icon: "🎯" },
  { name: "Java & Spring Boot",            level: 85, icon: "☕" },
  { name: "JavaScript",                    level: 83, icon: "🟨" },
  { name: "Python",                        level: 75, icon: "🐍" },
  { name: "PostgreSQL / MySQL / Firebase", level: 78, icon: "🗄️" },
  { name: "C# / .NET",                     level: 70, icon: "🔷" },
];

const projects = [
  {
    title: "PETHUB — Final Year Project",
    desc: "AI-powered personalised pet care platform: AI meal plans, AI chatbot, nearest vet/hospital finder, hostel recommendations, social media network & vaccination system.",
    tags: ["Java Spring Boot", "React Native", "PostgreSQL", "AI/ML"],
    emoji: "🐾", color: "#f472b6", github: "https://github.com/Anupa095", featured: true,
  },
  {
    title: "Vehicle Service Booking App",
    desc: "Full-stack cross-platform service booking platform with admin dashboard — Flutter mobile app and React web panel backed by Firebase.",
    tags: ["Flutter", "Dart", "Firebase", "React"],
    emoji: "🚗", color: "#d21111", github: "https://github.com/Anupa095", featured: true,
  },
  {
    title: "Employee Management System",
    desc: "Enterprise HR system built at Softlogic — manage employees, payroll, and performance via a modern React web interface and Spring Boot REST API.",
    tags: ["Java", "Spring Boot", "React"],
    emoji: "🏢", color: "#34d399", github: "https://github.com/Anupa095", featured: false,
  },
  {
    title: "School Transport Management",
    desc: "End-to-end school bus management web application — route planning, driver assignment, and parent notifications.",
    tags: ["C#", ".NET", "Web"],
    emoji: "🚌", color: "#227be9", github: "https://github.com/Anupa095", featured: false,
  },
  {
    title: "Python Firewall & Security Tools",
    desc: "Network-level firewall and packet inspection utilities in Python, plus a collection of automation and cybersecurity projects.",
    tags: ["Python", "Networking", "Security"],
    emoji: "🔥", color: "#fb923c", github: "https://github.com/Anupa095", featured: false,
  },
  {
    title: "BMI Calculator App",
    desc: "Clean Android mobile application for tracking BMI and body health metrics with history and charts.",
    tags: ["Java", "Android"],
    emoji: "📱", color: "#06d0f4", github: "https://github.com/Anupa095", featured: false,
  },
];

// ── Certificates Data ─────────────────────────────────────────────────────────
const certificates = [
  {
    title: "18th International Research Conference",
    issuer: "General Sir John Kotelawala Defence University (KDU)",
    date: "2025",
    image: "/cert1.jpg",
    color: "#a78bfa",
    emoji: "🏅",
    description: "Awarded for presenting research at the 18th International Research Conference held at General Sir John Kotelawala Defence University (KDU). This prestigious annual conference brings together researchers, academics, and industry professionals to share and advance knowledge across multiple disciplines.",
  },
  {
    title: "SLIIT CodeFest 2025 — Top 10",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2025",
    image: "/cert2.jpg",
    color: "#f472b6",
    emoji: "🏆",
    description: "Recognized among the Top 10 teams at SLIIT CodeFest 2025, one of Sri Lanka's most competitive university-level coding competitions. This achievement reflects strong problem-solving skills, teamwork, and the ability to deliver innovative solutions under pressure.",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    date: "2023",
    image: "/cert3.jpg",
    color: "#34d399",
    emoji: "🖥️",
    description: "Successfully completed the Computer Hardware Basics course through the Cisco Networking Academy program. This certification covers fundamental hardware components, troubleshooting techniques, and the essential skills needed to maintain and configure computing systems.",
  },
  {
    title: "Introduction to Networks — CCNAv7",
    issuer: "Cisco Networking Academy",
    date: "2023",
    image: "/cert4.jpg",
    color: "#60a5fa",
    emoji: "🌐",
    description: "Completed Introduction to Networks as part of the CCNAv7 curriculum through Cisco Networking Academy. This course builds foundational knowledge in network infrastructure, IP addressing, routing and switching concepts, and prepares students for the industry-standard CCNA certification.",
  },
];

const navItems = ["About", "Projects", "Skills", "Certificates", "Contact"];

// ── Social Links Data ─────────────────────────────────────────────────────────
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Anupa095",
    color: "#7d61d0",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anupa-perera-154a66270",
    color: "#0ea5e9",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:anupaperera95@gmail.com",
    color: "#fe1c1c",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://fb.com/anupa%20sandeepa",
    color: "#135bb3",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/anupa_03",
    color: "#f97316",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

// ── Music Engine (MP3 playlist) ───────────────────────────────────────────────
function usePeacefulMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Stable across renders — safe to depend on from any useEffect that needs it.
  const initAndPlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(songs[0]);
      audioRef.current.volume = 0.35;
      audioRef.current.addEventListener("ended", () => {
        setCurrentIdx(prev => {
          const next = (prev + 1) % songs.length;
          audioRef.current.src = songs[next];
          audioRef.current.play().catch(() => {});
          return next;
        });
      });
    }
    audioRef.current.play().catch(() => {});
    setPlaying(true);
  }, []);

  function toggle() {
    if (!audioRef.current) { initAndPlay(); return; }
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else         { audioRef.current.play().catch(() => {}); setPlaying(true); }
  }

  return { playing, toggle, initAndPlay, currentIdx, total: songs.length };
}

// ── Music Button ──────────────────────────────────────────────────────────────
function MusicBtn({ playing, toggle, currentIdx, total }) {
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 200, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      {playing && (
        <div style={{
          background: "rgba(8,8,18,0.9)", border: "1px solid rgba(167,139,250,0.3)",
          borderRadius: 100, padding: "4px 12px",
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)",
          whiteSpace: "nowrap",
        }}>
          🎵 Track {currentIdx + 1} / {total}
        </div>
      )}
      <button onClick={toggle} title={playing ? "Pause music" : "Play music"}
        style={{
          width: 52, height: 52, borderRadius: "50%",
          background: playing ? "linear-gradient(135deg, #a78bfa, #f472b6)" : "rgba(167,139,250,0.15)",
          border: "1px solid rgba(167,139,250,0.4)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.3rem", transition: "all 0.3s",
          boxShadow: playing ? "0 0 24px rgba(167,139,250,0.5)" : "none",
          animation: playing ? "pulse 2s ease-in-out infinite" : "none",
        }}>
        {playing ? "🎵" : "🎶"}
      </button>
    </div>
  );
}

// ── Music Hint (first-visit nudge, dismisses on any interaction) ─────────────
function MusicHint({ visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", bottom: 90, right: 28, zIndex: 199,
      display: "flex", alignItems: "center", gap: 8,
      padding: "8px 16px", borderRadius: 100,
      background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)",
      color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.78rem", whiteSpace: "nowrap", pointerEvents: "none",
      animation: "fadeUp 0.6s ease both",
    }}>
      🎵 Tap anywhere for music
    </div>
  );
}

// ── Scroll To Top Button ──────────────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", bottom: 28, left: 28, zIndex: 200,
        width: 44, height: 44, borderRadius: "50%",
        background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.4)",
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.1rem", transition: "all 0.3s", color: "#a78bfa",
        animation: "fadeUp 0.3s ease both",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(167,139,250,0.3)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(167,139,250,0.15)"}>
      ↑
    </button>
  );
}

// ── Typing hook ───────────────────────────────────────────────────────────────
function useTyping(words, speed = 80, pause = 1800) {
  const [display,  setDisplay]  = useState("");
  const [wIdx,     setWIdx]     = useState(0);
  const [cIdx,     setCIdx]     = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[wIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, cIdx + 1));
        if (cIdx + 1 === word.length) setTimeout(() => setDeleting(true), pause);
        else setCIdx(c => c + 1);
      } else {
        setDisplay(word.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDeleting(false); setWIdx(w => (w + 1) % words.length); setCIdx(0); }
        else setCIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [cIdx, deleting, wIdx, words, speed, pause]);

  return display;
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleNavClick(n) {
    setActive(n);
    setMenuOpen(false);
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 5vw", height: "64px",
      background: (scrolled || menuOpen) ? "rgba(8,8,18,0.92)" : "transparent",
      backdropFilter: (scrolled || menuOpen) ? "blur(16px)" : "none",
      borderBottom: (scrolled || menuOpen) ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
    }}>
      <span style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem",
        background: "linear-gradient(90deg, #a78bfa, #f472b6)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px",
      }}>anupa.dev</span>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {navItems.map(n => (
          <a key={n} href={`#${n.toLowerCase()}`} onClick={() => handleNavClick(n)} style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: active === n ? 600 : 400,
            fontSize: "0.9rem", color: active === n ? "#a78bfa" : "rgba(255,255,255,0.55)",
            textDecoration: "none", transition: "color 0.25s", letterSpacing: "0.02em",
          }}>{n}</a>
        ))}
      </div>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        style={{
          background: "transparent", border: "none", cursor: "pointer",
          width: 32, height: 32, color: "#fff", padding: 0,
        }}>
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {menuOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/>
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16"/>}
        </svg>
      </button>
    </nav>
  );
}

// ── About / Hero ──────────────────────────────────────────────────────────────
function About() {
  const typed = useTyping([
    "Full-Stack Developer",
    "Web & Mobile Application Developer",
    "AI Integration Enthusiast",
    "Creative Problem Solver",
    "Team Player",
    "Strong Communicator",
    "Emerging Tech Leader",
    "BSc (Hons) in Information Technology Undergraduate",
  ]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 5vw", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
        top: "10%", left: "-5%", pointerEvents: "none", animation: "float 8s ease-in-out infinite" }}/>
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)",
        bottom: "15%", right: "5%", pointerEvents: "none", animation: "float 10s ease-in-out infinite reverse" }}/>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        width: "100%", maxWidth: 1100, margin: "0 auto", gap: "3rem", flexWrap: "wrap" }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 400px", animation: "fadeUp 0.9s ease both" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800, lineHeight: 1.05, margin: "0 0 1rem", color: "#fff", letterSpacing: "-1px" }}>
            Hello, I'm{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Anupa.</span>
          </h1>

          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem", minHeight: "2.5rem" }}>
            <span style={{ color: "#f472b6" }}>{typed}</span>
            <span style={{ animation: "blink 1s infinite", color: "#a78bfa" }}>|</span>
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
            color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 540, marginBottom: "2rem" }}>
            I am an enthusiastic and dedicated undergraduate currently pursuing a BSc (Hons) in Information Technology at General Sir John Kotelawala Defence University (KDU).
            I have a strong passion for Full-Stack Development and Mobile Application Development, with hands-on experience in building modern, scalable, and user-friendly applications.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
              background: "linear-gradient(135deg, #a78bfa, #f472b6)", color: "#fff", borderRadius: 100,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
              textDecoration: "none", boxShadow: "0 8px 30px rgba(167,139,250,0.35)", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(167,139,250,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 30px rgba(167,139,250,0.35)"; }}>
              View My Work →
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
              background: "transparent", color: "rgba(255,255,255,0.7)", borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.15)", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
              Hire Me ✉️
            </a>
            {/* ── CV Download Button ── */}
            <a href="/Anupa_CV.pdf" download style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px",
              background: "transparent", color: "rgba(255,255,255,0.7)", borderRadius: 100,
              border: "1px solid rgba(52,211,153,0.4)", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#34d399";
                e.currentTarget.style.color = "#34d399";
                e.currentTarget.style.background = "rgba(52,211,153,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(52,211,153,0.4)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "";
              }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Social Links Row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "8px 16px", borderRadius: 100,
                  border: `1px solid rgba(255,255,255,0.08)`,
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.borderColor = s.color + "55";
                  e.currentTarget.style.background = s.color + "12";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.transform = "";
                }}>
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — photo ring */}
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center",
          alignItems: "center", animation: "fadeUp 1.1s ease both" }}>
          <div style={{ position: "relative", width: 350, height: 350 }}>
            <div style={{ position: "absolute", inset: -4, borderRadius: "50%",
              background: "linear-gradient(135deg, #a78bfa, #f472b6, #a78bfa)",
              animation: "spin 6s linear infinite", zIndex: 0 }}/>
            <div style={{ position: "absolute", inset: 2, borderRadius: "50%",
              background: "#080812", zIndex: 1 }}/>
            <img
              src="/35.png"
              alt="Anupa"
              style={{
                position: "absolute", inset: 8, borderRadius: "50%", zIndex: 2,
                width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                objectFit: "cover", objectPosition: "center top",
              }}
            />
            <div style={{ position: "absolute", inset: -30, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
              zIndex: 0, pointerEvents: "none" }}/>
            <div style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
              zIndex: 3, background: "rgba(8,8,18,0.9)", border: "1px solid rgba(167,139,250,0.3)",
              borderRadius: 100, padding: "6px 16px", whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
              color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="12" height="12" fill="#a78bfa" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              @Anupa095
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionLabel>Featured Work</SectionLabel>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{ ...sectionTitle, margin: 0 }}>My Projects</h2>
          <a href="https://github.com/Anupa095" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 18px",
            border: "1px solid rgba(167,139,250,0.35)", borderRadius: 100, color: "#a78bfa",
            textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
            fontWeight: 600, transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(167,139,250,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "55" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 20, padding: "1.75rem", position: "relative", overflow: "hidden",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : "none",
        animation: `fadeUp 0.5s ease ${idx * 80}ms both`,
      }}>
      {project.featured && (
        <div style={{
          position: "absolute", top: 14, right: 14, padding: "3px 10px", borderRadius: 100,
          background: `${project.color}22`, color: project.color,
          border: `1px solid ${project.color}44`,
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700,
          letterSpacing: "0.05em", textTransform: "uppercase",
        }}>★ Featured</div>
      )}
      <div style={{ position: "absolute", top: 0, right: 0, width: 150, height: 150,
        background: `radial-gradient(circle at top right, ${project.color}15, transparent 70%)`,
        pointerEvents: "none", opacity: hovered ? 1 : 0.5, transition: "opacity 0.3s" }}/>
      <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{project.emoji}</div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem",
        color: "#fff", margin: "0 0 0.6rem", paddingRight: project.featured ? "70px" : 0 }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)",
        fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "1.25rem",
        display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {project.desc}
      </p>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: "3px 10px", borderRadius: 100,
            background: `${project.color}18`, color: project.color,
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.74rem", fontWeight: 600,
            border: `1px solid ${project.color}30`,
          }}>{tag}</span>
        ))}
      </div>
      <a href={project.github} target="_blank" rel="noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        View on GitHub →
      </a>
    </div>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimated(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ padding: "100px 5vw", background: "rgba(255,255,255,0.01)" }} ref={ref}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionLabel>What I Know</SectionLabel>
        <h2 style={sectionTitle}>My Skills</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {skills.map((s, i) => (
            <div key={s.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  color: "rgba(255,255,255,0.85)", fontSize: "0.95rem",
                  display: "flex", alignItems: "center", gap: 8 }}>{s.icon} {s.name}</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  color: "#a78bfa", fontSize: "0.9rem" }}>{s.level}%</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: animated ? `${s.level}%` : "0%",
                  background: "linear-gradient(90deg, #a78bfa, #f472b6)",
                  borderRadius: 100, transition: `width 1s ease ${i * 80}ms`,
                  boxShadow: "0 0 12px rgba(167,139,250,0.5)",
                }}/>
              </div>
            </div>
          ))}
        </div>

        {/* Stats cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "3rem" }}>
          {[
            { title: "GitHub Stats", src: "https://github-readme-stats.vercel.app/api?username=Anupa095&show_icons=true&theme=transparent&title_color=a78bfa&icon_color=f472b6&text_color=ffffff&border_color=ffffff20" },
            { title: "Top Languages", src: "https://github-readme-stats.vercel.app/api/top-langs/?username=Anupa095&layout=compact&theme=transparent&title_color=a78bfa&text_color=ffffff&border_color=ffffff20" },
          ].map(card => (
            <div key={card.title} style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
              <img src={card.src} alt={card.title} style={{ width: "100%", display: "block" }}
                onError={e => e.currentTarget.style.display = "none"}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Certificates ──────────────────────────────────────────────────────────────
function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" style={{ padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionLabel>Achievements</SectionLabel>
        <h2 style={sectionTitle}>My Certificates</h2>

        {/* ── Grid layout: certificates LEFT, preview RIGHT ── */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* LEFT — certificate list */}
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {certificates.map((cert, i) => (
              <CertCard
                key={i}
                cert={cert}
                idx={i}
                isSelected={selected === i}
                onClick={() => setSelected(selected === i ? null : i)}
              />
            ))}
          </div>

          {/* RIGHT — preview panel */}
          <div style={{
            flex: "1 1 400px", position: "sticky", top: "88px",
            borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
            minHeight: 320,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.4s ease",
          }}>
            {selected !== null ? (
              <div style={{ width: "100%", animation: "fadeUp 0.35s ease" }}>
                {/* Certificate image */}
                <div style={{ position: "relative" }}>
                  <img
                    src={certificates[selected].image}
                    alt={certificates[selected].title}
                    style={{ width: "100%", display: "block", borderRadius: "20px 20px 0 0" }}
                    onError={e => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div style={{
                    display: "none", width: "100%", height: 240,
                    background: `linear-gradient(135deg, ${certificates[selected].color}22, rgba(8,8,18,0.8))`,
                    alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12,
                    borderRadius: "20px 20px 0 0",
                  }}>
                    <div style={{ fontSize: "4rem" }}>{certificates[selected].emoji}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
                      Add image to /public/{certificates[selected].image.replace("/", "")}
                    </div>
                  </div>
                </div>
                {/* Info bar */}
                <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: 4 }}>
                    {certificates[selected].title}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginBottom: certificates[selected].description ? 10 : 0 }}>
                    {certificates[selected].issuer} · {certificates[selected].date}
                  </div>
                  {certificates[selected].description && (
                    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", lineHeight: 1.65, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 10 }}>
                      {certificates[selected].description}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}>🏆</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.2)", fontSize: "0.9rem" }}>
                  Click a certificate to preview
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, idx, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false);
  const active = isSelected || hovered;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "1rem",
        padding: "1.1rem 1.4rem", borderRadius: 16, cursor: "pointer",
        background: isSelected ? `${cert.color}12` : active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${isSelected ? cert.color + "55" : active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        transition: "all 0.25s ease",
        transform: active ? "translateX(4px)" : "none",
        animation: `fadeUp 0.45s ease ${idx * 80}ms both`,
        boxShadow: isSelected ? `0 8px 30px ${cert.color}18` : "none",
      }}>
      {/* Emoji badge */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: `${cert.color}20`,
        border: `1px solid ${cert.color}40`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", transition: "transform 0.2s",
        transform: active ? "scale(1.1)" : "none",
      }}>
        {cert.emoji}
      </div>
      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          color: isSelected ? "#fff" : "rgba(255,255,255,0.75)",
          fontSize: "0.92rem", marginBottom: 2,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{cert.title}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
          {cert.issuer} · {cert.date}
        </div>
      </div>
      {/* Arrow */}
      <div style={{
        color: isSelected ? cert.color : "rgba(255,255,255,0.2)",
        fontSize: "1rem", transition: "all 0.25s",
        transform: isSelected ? "rotate(90deg)" : "none",
      }}>›</div>
    </div>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");
  const [focused, setFocused] = useState(null);

  // ── EmailJS send ──────────────────────────────────────────────────────────
  // 1. Go to https://www.emailjs.com and create a free account
  // 2. Add an Email Service (Gmail recommended) → copy Service ID
  // 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
  //    → copy Template ID
  // 4. Go to Account → API Keys → copy Public Key
  // 5. Replace the three values below
  const EMAILJS_SERVICE_ID  = "service_hw1uhar";   // ✅ Service ID
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
  const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "aBcDeFgHiJkLmNoP"

  async function handleSend() {
    if (!form.name || !form.email || !form.message) { setError("Please fill in all fields."); return; }
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            name:       form.name,
            from_email: form.email,
            message:    form.message,
          },
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  }

  const inputStyle = (field) => ({
    width: "100%", padding: "14px 18px", boxSizing: "border-box",
    background: focused === field ? "rgba(167,139,250,0.07)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 12, color: "#fff", fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem", outline: "none", transition: "all 0.25s",
  });

  return (
    <section id="contact" style={{ padding: "100px 5vw 80px" }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <SectionLabel>Let's Talk</SectionLabel>
        <h2 style={sectionTitle}>Get In Touch</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)",
          marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        {sent ? (
          <div style={{ textAlign: "center", padding: "3rem",
            background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.25)",
            borderRadius: 20, animation: "fadeUp 0.5s ease" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: "#fff", margin: "0 0 0.5rem" }}>Message Sent!</h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
              Thanks {form.name}! I'll get back to you soon.
            </p>
            <button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); setError(""); }}
              style={{ marginTop: "1.5rem", padding: "10px 28px", background: "transparent",
                border: "1px solid rgba(167,139,250,0.35)", borderRadius: 100, color: "#a78bfa",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem",
                cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.1)"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.35)"; }}>
              ✉️ Send Another Message
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input placeholder="Your Name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              style={inputStyle("name")}/>
            <input placeholder="Your Email" type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              style={inputStyle("email")}/>
            <textarea placeholder="Your Message" rows={5} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
              style={{ ...inputStyle("message"), resize: "vertical" }}/>
            {error && (
              <div style={{ padding: "12px 16px", borderRadius: 10,
                background: "rgba(254,28,28,0.08)", border: "1px solid rgba(254,28,28,0.25)",
                color: "#fca5a5", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
                ⚠️ {error}
              </div>
            )}
            <button onClick={handleSend} disabled={sending}
              style={{ padding: "15px", background: sending ? "rgba(167,139,250,0.4)" : "linear-gradient(135deg, #a78bfa, #f472b6)",
                border: "none", borderRadius: 12, color: "#fff", fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: "1rem", cursor: sending ? "not-allowed" : "pointer",
                boxShadow: sending ? "none" : "0 8px 30px rgba(167,139,250,0.35)",
                transition: "all 0.2s", letterSpacing: "0.03em",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              onMouseEnter={e => { if (!sending) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(167,139,250,0.5)"; }}}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = sending ? "none" : "0 8px 30px rgba(167,139,250,0.35)"; }}>
              {sending ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Sending...
                </>
              ) : "Send Message ✉️"}
            </button>
          </div>
        )}

        {/* ── Social Links Grid ── */}
        <div style={{ marginTop: "3rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
            color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: "1.25rem",
            textTransform: "uppercase", letterSpacing: "0.1em" }}>Find me on</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 16px", borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", transition: "all 0.25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.color;
                  e.currentTarget.style.borderColor = s.color + "55";
                  e.currentTarget.style.background = s.color + "12";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.transform = "";
                }}>
                <span style={{ opacity: 0.8 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: "0.88rem" }}>{s.label}</div>
                  <div style={{ fontSize: "0.72rem", opacity: 0.45, marginTop: 1 }}>
                    {s.label === "GitHub"    && "@Anupa095"}
                    {s.label === "LinkedIn"  && "anupa-perera"}
                    {s.label === "Email"     && "anupaperera95@gmail.com"}
                    {s.label === "Facebook"  && "anupa sandeepa"}
                    {s.label === "Instagram" && "@anupa_03"}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Shared helpers ────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "0.75rem",
      fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600,
      color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.15em" }}>
      <span style={{ width: 20, height: 1, background: "#a78bfa", display: "inline-block" }}/>
      {children}
    </div>
  );
}

const sectionTitle = {
  fontFamily: "'Syne', sans-serif", fontWeight: 800,
  fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff",
  margin: "0 0 2.5rem", letterSpacing: "-0.5px",
};

// ── Root ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive]     = useState("About");
  const [showHint, setShowHint] = useState(true);
  const { playing, toggle, initAndPlay, currentIdx, total } = usePeacefulMusic();

  useEffect(() => {
    function handleFirstInteraction() {
      initAndPlay();
      setShowHint(false);
      window.removeEventListener("click",      handleFirstInteraction);
      window.removeEventListener("keydown",    handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    }
    window.addEventListener("click",      handleFirstInteraction);
    window.addEventListener("keydown",    handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    return () => {
      window.removeEventListener("click",      handleFirstInteraction);
      window.removeEventListener("keydown",    handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [initAndPlay]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: #080812; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #080812; }
      ::-webkit-scrollbar-thumb { background: #a78bfa44; border-radius: 2px; }
      @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-24px)} }
      @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes pulse  { 0%,100%{box-shadow:0 0 24px rgba(167,139,250,0.5)} 50%{box-shadow:0 0 40px rgba(167,139,250,0.85)} }

      .nav-links { display: flex; gap: 2rem; align-items: center; }
      .nav-hamburger { display: none; }
      @media (max-width: 760px) {
        .nav-links {
          position: fixed; top: 64px; left: 0; right: 0;
          flex-direction: column; align-items: flex-start; gap: 0;
          background: rgba(8,8,18,0.97); backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          max-height: 0; overflow: hidden; padding: 0 5vw;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
        .nav-links a { padding: 14px 0; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-links.open { max-height: 320px; padding: 12px 5vw 20px; }
        .nav-hamburger { display: flex; align-items: center; justify-content: center; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ background: "#080812", minHeight: "100vh", color: "#fff" }}>
      <Navbar active={active} setActive={setActive} />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />

      {/* ── Footer ── */}
      <footer style={{ padding: "2.5rem 5vw", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex",
          justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem",
            background: "linear-gradient(90deg, #a78bfa, #f472b6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>anupa.dev</span>

          <div style={{ display: "flex", gap: "1rem" }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                title={s.label}
                style={{ color: "rgba(255,255,255,0.25)", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={e => e.currentTarget.style.color = s.color}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}>
                {s.icon}
              </a>
            ))}
          </div>

          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
            color: "rgba(255,255,255,0.2)" }}>
            Made with 💜 by Anupa · {new Date().getFullYear()}
          </span>
        </div>
      </footer>

      <MusicHint visible={showHint} />
      <MusicBtn playing={playing} toggle={toggle} currentIdx={currentIdx} total={total} />
      <ScrollToTop />
    </div>
  );
}