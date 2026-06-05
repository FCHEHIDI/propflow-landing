import { LAST_AUDIT, AUDIT_HISTORY, HOTEL } from '@/lib/demo-data';

export default function NightAuditPage() {
  return (
    <div style={{ padding: '32px 40px', maxWidth: '840px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#F0EDE8' }}>Night Audit</h1>
        <p style={{ fontSize: '12px', color: '#4A4A4A', marginTop: '3px' }}>Automated · runs daily at 00:01 UTC</p>
      </div>

      {/* Last audit card */}
      <div
        style={{
          background: '#1A1A1A',
          border: '1px solid rgba(196,160,53,0.2)',
          borderRadius: '4px',
          padding: '24px',
          marginBottom: '12px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>Last audit</p>
            <h2 style={{ fontSize: '18px', fontWeight: 500, color: '#F0EDE8' }}>{LAST_AUDIT.date}</h2>
            <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '2px' }}>Run at {LAST_AUDIT.ranAt}</p>
          </div>
          <span
            style={{
              padding: '4px 12px', borderRadius: '2px', fontSize: '11px', letterSpacing: '0.06em',
              background: 'rgba(22,163,74,0.08)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.25)',
            }}
          >
            ✓ {LAST_AUDIT.status}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { label: 'Rooms Audited',    value: LAST_AUDIT.roomsAudited,                      warn: false },
            { label: 'No-Shows Marked',  value: LAST_AUDIT.noShowsMarked,                     warn: LAST_AUDIT.noShowsMarked > 0 },
            { label: 'Occupancy',        value: `${LAST_AUDIT.occupancyAtAudit}%`,             warn: false },
            { label: 'Revenue Posted',   value: `€${LAST_AUDIT.revenuePosted.toLocaleString()}`, warn: false },
          ].map(s => (
            <div
              key={s.label}
              style={{
                padding: '14px',
                background: '#141414',
                borderRadius: '3px',
                border: s.warn ? '1px solid rgba(249,115,22,0.3)' : '1px solid #1E1E1E',
              }}
            >
              <p style={{ fontSize: '10px', color: '#4A4A4A', marginBottom: '6px' }}>{s.label}</p>
              <p style={{ fontSize: '20px', fontWeight: 600, color: s.warn ? '#f97316' : '#F0EDE8', letterSpacing: '-0.01em' }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {LAST_AUDIT.noShowsMarked > 0 && (
          <div
            style={{
              marginTop: '14px', padding: '10px 14px',
              background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '3px',
            }}
          >
            <p style={{ fontSize: '12px', color: '#f97316' }}>
              ⚠ No-show marked: <strong>{LAST_AUDIT.noShowGuest}</strong> · {LAST_AUDIT.noShowRoom} · Inventory released
            </p>
          </div>
        )}
      </div>

      {/* Next audit + actions */}
      <div
        style={{
          background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px',
          padding: '18px 22px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: '12px',
        }}
      >
        <div>
          <p style={{ fontSize: '13px', color: '#A0A0A0', fontWeight: 500 }}>Next audit</p>
          <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '2px' }}>June 5, 2026 · 00:01 UTC (tonight)</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              padding: '7px 14px', background: 'transparent',
              border: '1px solid #252525', borderRadius: '3px',
              color: '#6B6B6B', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Download Report
          </button>
          <button
            style={{
              padding: '7px 14px',
              background: 'rgba(196,160,53,0.08)', border: '1px solid rgba(196,160,53,0.3)',
              borderRadius: '3px', color: '#C4A035', fontSize: '12px', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Run Now
          </button>
        </div>
      </div>

      {/* History */}
      <div style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', padding: '20px' }}>
        <p style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>
          Audit History
        </p>
        <div
          style={{
            display: 'grid', gridTemplateColumns: '100px 60px 1fr 80px 80px',
            padding: '0 0 8px', borderBottom: '1px solid #252525',
            gap: '12px', marginBottom: '4px',
          }}
        >
          {['Date', 'Occ.', 'Revenue', 'No-Shows', 'Status'].map(h => (
            <span key={h} style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</span>
          ))}
        </div>
        {AUDIT_HISTORY.map((log, i) => (
          <div
            key={i}
            style={{
              display: 'grid', gridTemplateColumns: '100px 60px 1fr 80px 80px',
              padding: '10px 0', borderBottom: i < AUDIT_HISTORY.length - 1 ? '1px solid #1E1E1E' : 'none',
              gap: '12px', alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#8A8A8A' }}>{log.date}</span>
            <span style={{ fontSize: '12px', color: '#F0EDE8', fontVariantNumeric: 'tabular-nums' }}>{log.occ}</span>
            <span style={{ fontSize: '12px', color: '#F0EDE8', fontVariantNumeric: 'tabular-nums' }}>{log.revenue}</span>
            <span style={{ fontSize: '12px', color: log.noShows > 0 ? '#f97316' : '#4A4A4A' }}>
              {log.noShows} no-show{log.noShows !== 1 ? 's' : ''}
            </span>
            <span style={{ fontSize: '11px', color: '#16a34a' }}>✓ Done</span>
          </div>
        ))}
      </div>
    </div>
  );
}
