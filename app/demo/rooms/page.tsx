import { ROOMS, STATUS_COLOR, STATUS_LABEL, countByStatus } from '@/lib/demo-data';
import type { RoomStatus } from '@/lib/demo-data';

export default function RoomsPage() {
  const counts = countByStatus();
  const floors = [1, 2, 3, 4];

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#F0EDE8' }}>Room Status Board</h1>
        <p style={{ fontSize: '12px', color: '#4A4A4A', marginTop: '3px' }}>48 rooms · Real-time</p>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', gap: '14px',
          marginBottom: '24px', padding: '12px 16px',
          background: '#1A1A1A', border: '1px solid #252525', borderRadius: '4px',
        }}
      >
        {(Object.entries(STATUS_COLOR) as [RoomStatus, string][]).map(([status, color]) => (
          <div key={status} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '2px', background: color, flexShrink: 0 }} />
            <span style={{ fontSize: '11px', color: '#707070' }}>
              {STATUS_LABEL[status]} ({counts[status] ?? 0})
            </span>
          </div>
        ))}
      </div>

      {/* Grid by floor */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {floors.map(floor => (
          <div key={floor}>
            <p style={{ fontSize: '10px', color: '#4A4A4A', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Floor {floor}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(108px, 1fr))',
                gap: '7px',
              }}
            >
              {ROOMS.filter(r => r.floor === floor).map(room => (
                <div
                  key={room.id}
                  style={{
                    background: `${STATUS_COLOR[room.status]}12`,
                    border: `1px solid ${STATUS_COLOR[room.status]}35`,
                    borderLeft: `3px solid ${STATUS_COLOR[room.status]}`,
                    borderRadius: '3px',
                    padding: '10px 11px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: STATUS_COLOR[room.status], letterSpacing: '-0.01em' }}>
                      {room.number}
                    </span>
                  </div>
                  <p style={{ fontSize: '10px', color: '#4A4A4A' }}>{room.type}</p>
                  {room.guest && (
                    <p style={{ fontSize: '11px', color: '#9A9A9A', fontWeight: 500, marginTop: '5px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                      {room.guest}
                    </p>
                  )}
                  {room.checkOut && (
                    <p style={{ fontSize: '10px', color: '#4A4A4A' }}>out {room.checkOut}</p>
                  )}
                  {room.note && (
                    <p style={{ fontSize: '10px', color: '#ea580c', marginTop: '3px' }}>{room.note}</p>
                  )}
                  <p style={{ fontSize: '9px', color: STATUS_COLOR[room.status], marginTop: '5px', opacity: 0.85, letterSpacing: '0.03em' }}>
                    {STATUS_LABEL[room.status]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
