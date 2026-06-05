'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { HOTEL } from '@/lib/demo-data';

const NAV = [
  {
    href: '/demo',
    label: 'Dashboard',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="1" width="5.5" height="5.5" rx="1" fill="currentColor"/>
        <rect x="8.5" y="1" width="5.5" height="5.5" rx="1" fill="currentColor"/>
        <rect x="1" y="8.5" width="5.5" height="5.5" rx="1" fill="currentColor"/>
        <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '/demo/rooms',
    label: 'Rooms',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="7" width="13" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 7V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="1" y1="10.5" x2="14" y2="10.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    href: '/demo/bookings',
    label: 'Bookings',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="3" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="5" y1="1" x2="5" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="10" y1="1" x2="10" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="1" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    href: '/demo/channels',
    label: 'Channels',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="4" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="11" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="7" y1="6" x2="8" y2="6" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="7" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    href: '/demo/night-audit',
    label: 'Night Audit',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M12.5 10A5.5 5.5 0 0 1 5.5 3a5.5 5.5 0 1 0 7 7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function DemoSidebar() {
  const path = usePathname();

  return (
    <aside
      style={{
        width: '220px',
        minHeight: '100vh',
        background: '#0A0A0A',
        borderRight: '1px solid #1E1E1E',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '22px 20px', borderBottom: '1px solid #1E1E1E' }}>
        <Logo size={24} withWordmark />
        <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '8px', letterSpacing: '0.02em' }}>
          {HOTEL.name} · Demo
        </p>
      </div>

      {/* Nav */}
      <nav style={{ padding: '10px 0', flex: 1 }}>
        {NAV.map(item => {
          const active = path === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                color: active ? '#C4A035' : '#707070',
                background: active ? 'rgba(196,160,53,0.07)' : 'transparent',
                borderLeft: active ? '2px solid #C4A035' : '2px solid transparent',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: active ? 500 : 400,
                letterSpacing: '0.01em',
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid #1E1E1E' }}>
        <div
          style={{
            fontSize: '10px',
            color: '#3A3A3A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          Demo mode
        </div>
        <Link
          href="/"
          style={{ fontSize: '12px', color: '#4A4A4A', textDecoration: 'none' }}
        >
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}
