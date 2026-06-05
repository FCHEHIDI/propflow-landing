import { CHANNELS, SYNC_LOG } from '@/lib/demo-data';

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" fill="rgba(22,163,74,0.1)" stroke="rgba(22,163,74,0.35)"/>
      <path d="M3.5 6.5l2 2 4-4" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" fill="rgba(234,88,12,0.1)" stroke="rgba(234,88,12,0.35)"/>
      <path d="M4.5 4.5l4 4M8.5 4.5l-4 4" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

export default function ChannelsPage() {
  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#F0EDE8' }}>Channel Manager</h1>
        <p style={{ fontSize: '12px', color: '#4A4A4A', marginTop: '3px' }}>ARI sync — Availability, Rates, Restrictions</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '12px', marginBottom: '20px' }}>
        {CHANNELS.map(ch => (
          <div key={ch.id} style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', padding: '22px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#F0EDE8' }}>{ch.name}</h2>
                <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '2px' }}>Last sync: {ch.lastSync}</p>
              </div>
              <span
                style={{
                  fontSize: '10px', padding: '3px 9px', borderRadius: '2px', letterSpacing: '0.08em',
                  background: 'rgba(22,163,74,0.08)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.25)',
                }}
              >
                ● ACTIVE
              </span>
            </div>

            {/* ARI Status */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '18px' }}>
              {[
                { label: 'Availability (ARI)', ok: ch.availabilityPushed },
                { label: 'Rates (ARI)',        ok: ch.ratesPushed },
                { label: 'Restrictions',       ok: ch.restrictionsPushed },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#8A8A8A' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Check ok={item.ok} />
                    <span style={{ fontSize: '11px', color: item.ok ? '#16a34a' : '#ea580c' }}>
                      {item.ok ? 'Synced' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: '1px', background: '#252525', marginBottom: '14px' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'Room Types Mapped',  value: ch.mappedRoomTypes },
                { label: 'Rate Plans Mapped',  value: ch.mappedRatePlans },
                { label: 'Reservations Today', value: ch.reservationsToday },
                { label: 'Sync Status',        value: ch.lastSyncStatus },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontSize: '10px', color: '#4A4A4A', marginBottom: '2px' }}>{s.label}</p>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: '#F0EDE8' }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sync log */}
      <div style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', padding: '20px' }}>
        <p style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>
          Recent Sync Log
        </p>
        {SYNC_LOG.map((log, i) => (
          <div
            key={i}
            style={{
              display: 'flex', gap: '12px', alignItems: 'center',
              padding: '8px 0',
              borderBottom: i < SYNC_LOG.length - 1 ? '1px solid #1E1E1E' : 'none',
            }}
          >
            <span style={{ fontSize: '11px', color: '#4A4A4A', minWidth: '34px', fontVariantNumeric: 'tabular-nums' }}>{log.time}</span>
            <span
              style={{
                fontSize: '10px', padding: '2px 7px', letterSpacing: '0.04em',
                background: '#141414', border: '1px solid #252525', borderRadius: '2px',
                color: '#C4A035', minWidth: '90px', textAlign: 'center', whiteSpace: 'nowrap',
              }}
            >
              {log.channel}
            </span>
            <span style={{ fontSize: '12px', color: '#8A8A8A', flex: 1 }}>{log.msg}</span>
            <span style={{ fontSize: '12px', color: '#16a34a' }}>✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
