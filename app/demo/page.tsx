import {
  HOTEL, TODAY, KPIS, ACTIVITY, BOOKINGS, BOOKING_STATUS_COLOR, ROOMS
} from '@/lib/demo-data';

function KpiCard({
  label, value, sub, highlight,
}: {
  label: string; value: string; sub?: string; highlight?: boolean;
}) {
  return (
    <div
      style={{
        background: '#1A1A1A',
        border: `1px solid ${highlight ? 'rgba(196,160,53,0.3)' : '#252525'}`,
        borderRadius: '4px',
        padding: '20px 24px',
      }}
    >
      <p style={{ fontSize: '10px', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </p>
      <p style={{ fontSize: '26px', fontWeight: 600, color: highlight ? '#C4A035' : '#F0EDE8', letterSpacing: '-0.02em' }}>
        {value}
      </p>
      {sub && <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '3px' }}>{sub}</p>}
    </div>
  );
}

export default function DemoPage() {
  const todayArrivals = BOOKINGS.filter(b => b.checkIn === 'Jun 5');
  const occupied  = ROOMS.filter(r => r.status === 'Occupied').length;
  const toClean   = ROOMS.filter(r => r.status === 'VacantDirty' || r.status === 'OnChange').length;
  const available = ROOMS.filter(r => r.status === 'Available').length;

  return (
    <div style={{ padding: '32px 40px', maxWidth: '1200px' }}>
      {/* Topbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 500, color: '#F0EDE8', letterSpacing: '-0.02em' }}>
            {HOTEL.name}
          </h1>
          <p style={{ fontSize: '12px', color: '#4A4A4A', marginTop: '3px' }}>
            {HOTEL.address} · 5★ · {TODAY}
          </p>
        </div>
        <div
          style={{
            padding: '5px 12px',
            background: 'rgba(22,163,74,0.08)',
            border: '1px solid rgba(22,163,74,0.25)',
            borderRadius: '3px',
            fontSize: '11px',
            color: '#16a34a',
            letterSpacing: '0.08em',
          }}
        >
          ● LIVE
        </div>
      </div>

      {/* KPI grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '10px',
          marginBottom: '28px',
        }}
      >
        <KpiCard label="Occupancy"     value={`${KPIS.occupancy}%`}           sub={`${occupied} / ${HOTEL.totalRooms} rooms`} highlight />
        <KpiCard label="ADR"           value={`€${KPIS.adr}`}                 sub="Average Daily Rate" />
        <KpiCard label="RevPAR"        value={`€${KPIS.revpar}`}              sub="Revenue per Avail. Room" />
        <KpiCard label="Arrivals Today" value={`${KPIS.arrivals}`}            sub="guests expected" />
        <KpiCard label="Departures"    value={`${KPIS.departures}`}           sub="check-outs today" />
        <KpiCard label="Revenue MTD"   value={`€${(KPIS.revenueMtd / 1000).toFixed(1)}k`} sub="June 2026" />
      </div>

      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {/* Activity */}
        <div style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', padding: '20px' }}>
          <p style={{ fontSize: '10px', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
            Activity
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ACTIVITY.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', color: '#4A4A4A', minWidth: '34px', marginTop: '1px', fontVariantNumeric: 'tabular-nums' }}>
                  {a.time}
                </span>
                <div
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%', marginTop: '5px', flexShrink: 0,
                    background:
                      a.type === 'checkin'  ? '#C4A035' :
                      a.type === 'checkout' ? '#16a34a' :
                      a.type === 'sync'     ? '#3b82f6' :
                      a.type === 'booking'  ? '#8b5cf6' : '#6b7280',
                  }}
                />
                <span style={{ fontSize: '12px', color: '#8A8A8A', lineHeight: 1.45 }}>{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrivals + Housekeeping */}
        <div style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', padding: '20px' }}>
          <p style={{ fontSize: '10px', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>
            Arrivals · Jun 5
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {todayArrivals.map(b => (
              <div
                key={b.id}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 12px', background: '#141414',
                  borderRadius: '3px', border: '1px solid #1E1E1E',
                }}
              >
                <div>
                  <p style={{ fontSize: '13px', color: '#F0EDE8', fontWeight: 500 }}>{b.guest}</p>
                  <p style={{ fontSize: '11px', color: '#4A4A4A', marginTop: '1px' }}>
                    {b.roomType}{b.roomNumber ? ` · Rm ${b.roomNumber}` : ' · Unassigned'} · {b.nights}n
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '10px', padding: '3px 7px', borderRadius: '2px', whiteSpace: 'nowrap',
                    background: `${BOOKING_STATUS_COLOR[b.status]}18`,
                    color: BOOKING_STATUS_COLOR[b.status],
                    border: `1px solid ${BOOKING_STATUS_COLOR[b.status]}35`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>

          {/* Housekeeping summary */}
          <div style={{ paddingTop: '14px', borderTop: '1px solid #1E1E1E' }}>
            <p style={{ fontSize: '10px', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 500 }}>
              Housekeeping
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { label: 'Occupied', count: occupied,  color: '#C4A035' },
                { label: 'To Clean', count: toClean,   color: '#ea580c' },
                { label: 'Available', count: available, color: '#16a34a' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#8A8A8A' }}>{s.count} {s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
