import { BOOKINGS, BOOKING_STATUS_COLOR } from '@/lib/demo-data';

export default function BookingsPage() {
  const total = BOOKINGS.reduce((s, b) => s + b.amount, 0);

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#F0EDE8' }}>Bookings</h1>
        <p style={{ fontSize: '12px', color: '#4A4A4A', marginTop: '3px' }}>{BOOKINGS.length} recent reservations</p>
      </div>

      <div style={{ background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px', overflow: 'hidden' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '90px 1fr 130px 150px 88px 96px 76px',
            padding: '10px 20px', borderBottom: '1px solid #252525', gap: '12px',
          }}
        >
          {['Ref', 'Guest', 'Category', 'Stay', 'Status', 'Source', 'Amount'].map(h => (
            <span key={h} style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {BOOKINGS.map((b, i) => (
          <div
            key={b.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr 130px 150px 88px 96px 76px',
              padding: '13px 20px',
              borderBottom: i < BOOKINGS.length - 1 ? '1px solid #1E1E1E' : 'none',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '11px', color: '#C4A035', fontFamily: 'monospace' }}>#{b.id}</span>
            <div>
              <p style={{ fontSize: '13px', color: '#F0EDE8', fontWeight: 500 }}>{b.guest}</p>
              {b.roomNumber && (
                <p style={{ fontSize: '10px', color: '#4A4A4A', marginTop: '1px' }}>Room {b.roomNumber}</p>
              )}
            </div>
            <span style={{ fontSize: '12px', color: '#8A8A8A' }}>{b.roomType}</span>
            <div>
              <p style={{ fontSize: '12px', color: '#8A8A8A' }}>{b.checkIn} → {b.checkOut}</p>
              <p style={{ fontSize: '10px', color: '#4A4A4A' }}>{b.nights}n</p>
            </div>
            <span
              style={{
                display: 'inline-block', fontSize: '10px', padding: '3px 7px', borderRadius: '2px',
                background: `${BOOKING_STATUS_COLOR[b.status]}18`,
                color: BOOKING_STATUS_COLOR[b.status],
                border: `1px solid ${BOOKING_STATUS_COLOR[b.status]}35`,
                letterSpacing: '0.03em', whiteSpace: 'nowrap',
              }}
            >
              {b.status}
            </span>
            <span
              style={{
                fontSize: '11px', padding: '3px 7px', borderRadius: '2px',
                background: '#141414', color: '#6B6B6B', border: '1px solid #1E1E1E',
              }}
            >
              {b.source}
            </span>
            <span style={{ fontSize: '13px', color: '#F0EDE8', fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>
              €{b.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div
        style={{
          marginTop: '10px', padding: '12px 20px',
          background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px',
          display: 'flex', justifyContent: 'flex-end', gap: '16px', alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '11px', color: '#4A4A4A' }}>Total (shown)</span>
        <span style={{ fontSize: '20px', fontWeight: 600, color: '#F0EDE8', letterSpacing: '-0.02em' }}>
          €{total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
