import Logo from '@/components/Logo';
import WaitlistForm from '@/components/WaitlistForm';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Multi-Property Management',
    description:
      'One account. Multiple properties. Full isolation per hotel with schema-level data separation — no cross-tenant risk.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Built-in Channel Manager',
    description:
      'Direct ARI sync to Booking.com and Expedia — no SiteMinder, no extra fees. Availability, rates, and restrictions in real time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 L10 13 L16 17 L24 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="13" r="2" fill="currentColor" />
        <circle cx="16" cy="17" r="2" fill="currentColor" />
        <circle cx="24" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
    title: 'Real-Time Operations Console',
    description:
      'Room status board, housekeeping flows, night audit — all live. Your front desk sees what\'s happening, always.',
  },
];

export default function Home() {
  return (
    <main
      style={{ position: 'relative', zIndex: 1 }}
      className="min-h-screen flex flex-col"
    >
      {/* ─── Nav ──────────────────────────────────────────────────────── */}
      <nav
        className="animate-fade-up"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 48px',
          borderBottom: '1px solid var(--ink-border)',
        }}
      >
        <Logo size={32} withWordmark />
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            fontWeight: 500,
            border: '1px solid var(--gold-dim)',
            padding: '5px 14px',
            borderRadius: '2px',
          }}
        >
          Q4 2026
        </span>
      </nav>

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px 64px',
          gap: '0',
        }}
      >
        {/* Symbol large */}
        <div
          className="animate-fade-up animate-glow"
          style={{ marginBottom: '40px' }}
        >
          <Logo size={88} />
        </div>

        {/* Overline */}
        <p
          className="animate-fade-up delay-100"
          style={{
            fontSize: '11px',
            letterSpacing: '0.22em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '20px',
          }}
        >
          Property Management · Reinvented
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: '\'Playfair Display\', serif',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
            maxWidth: '800px',
            marginBottom: '20px',
          }}
        >
          Your property.{' '}
          <span style={{ color: 'var(--gold)' }}>In flow.</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'var(--text-soft)',
            maxWidth: '520px',
            marginBottom: '52px',
            fontWeight: 300,
          }}
        >
          The PMS that combines real-time operations, revenue management,
          and OTA channel sync — built exclusively for 4 and 5-star hotels.
        </p>

        {/* Waitlist form */}
        <div className="animate-fade-up delay-400" style={{ width: '100%', maxWidth: '440px' }}>
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <p
          className="animate-fade-up delay-500"
          style={{
            marginTop: '20px',
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '0.04em',
          }}
        >
          Join 200+ hoteliers on the waitlist
        </p>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────────── */}
      <div
        className="animate-fade-up delay-500"
        style={{ padding: '0 48px' }}
      >
        <div className="gold-line" />
      </div>

      {/* ─── Features ────────────────────────────────────────────────── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '0',
          padding: '0',
        }}
      >
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`animate-fade-up delay-${(i + 4) * 100}`}
            style={{
              padding: '52px 48px',
              borderRight: i < features.length - 1
                ? '1px solid var(--ink-border)'
                : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div style={{ color: 'var(--gold)' }}>{f.icon}</div>
            <h3
              style={{
                fontFamily: '\'Playfair Display\', serif',
                fontSize: '20px',
                fontWeight: 400,
                color: 'var(--text-main)',
                letterSpacing: '-0.01em',
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'var(--text-soft)',
                fontWeight: 300,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--ink-border)',
          padding: '28px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Logo size={20} withWordmark />
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} PropFlow. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
