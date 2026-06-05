// ─── Hotel ────────────────────────────────────────────────────────────────────
export const HOTEL = {
  name: "Hôtel Lumière",
  address: "12 Avenue Montaigne, Paris 8ème",
  stars: 5,
  totalRooms: 48,
  currency: "EUR",
};

export const TODAY = "Thursday, June 5, 2026";

// ─── KPIs ─────────────────────────────────────────────────────────────────────
export const KPIS = {
  occupancy:  79.2,
  adr:        312.90,
  revpar:     247.61,
  arrivals:   8,
  departures: 6,
  revenueMtd: 312_450,
  inHouse:    38,
};

// ─── Room status ──────────────────────────────────────────────────────────────
export type RoomStatus =
  | 'Available' | 'Occupied' | 'VacantDirty'
  | 'OnChange'  | 'Inspected' | 'OutOfOrder' | 'OutOfService';

export const STATUS_COLOR: Record<RoomStatus, string> = {
  Available:    '#16a34a',
  Occupied:     '#C4A035',
  VacantDirty:  '#ea580c',
  OnChange:     '#3b82f6',
  Inspected:    '#0d9488',
  OutOfOrder:   '#dc2626',
  OutOfService: '#6b7280',
};

export const STATUS_LABEL: Record<RoomStatus, string> = {
  Available:    'Available',
  Occupied:     'Occupied',
  VacantDirty:  'Vacant / Dirty',
  OnChange:     'On Change',
  Inspected:    'Inspected',
  OutOfOrder:   'Out of Order',
  OutOfService: 'Out of Service',
};

export interface DemoRoom {
  id: string;
  number: string;
  floor: number;
  type: string;
  sqm: number;
  status: RoomStatus;
  guest?: string;
  checkOut?: string;
  note?: string;
}

export const ROOMS: DemoRoom[] = [
  // ── Floor 1 — Classique + Supérieure (14)
  { id: 'r101', number: '101', floor: 1, type: 'Classique',   sqm: 22, status: 'Available' },
  { id: 'r102', number: '102', floor: 1, type: 'Classique',   sqm: 22, status: 'Occupied',    guest: 'Chen W.',       checkOut: 'Jun 7' },
  { id: 'r103', number: '103', floor: 1, type: 'Classique',   sqm: 22, status: 'Occupied',    guest: 'Dupont A.',     checkOut: 'Jun 6' },
  { id: 'r104', number: '104', floor: 1, type: 'Classique',   sqm: 22, status: 'VacantDirty', checkOut: 'Jun 5' },
  { id: 'r105', number: '105', floor: 1, type: 'Classique',   sqm: 22, status: 'Occupied',    guest: 'Müller T.',     checkOut: 'Jun 6' },
  { id: 'r106', number: '106', floor: 1, type: 'Classique',   sqm: 22, status: 'OnChange' },
  { id: 'r107', number: '107', floor: 1, type: 'Classique',   sqm: 22, status: 'Occupied',    guest: 'Nakamura Y.',   checkOut: 'Jun 8' },
  { id: 'r108', number: '108', floor: 1, type: 'Classique',   sqm: 22, status: 'Occupied',    guest: 'Silva R.',      checkOut: 'Jun 7' },
  { id: 'r109', number: '109', floor: 1, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Martin B.',     checkOut: 'Jun 9' },
  { id: 'r110', number: '110', floor: 1, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Ferreira C.',   checkOut: 'Jun 6' },
  { id: 'r111', number: '111', floor: 1, type: 'Supérieure',  sqm: 28, status: 'Available' },
  { id: 'r112', number: '112', floor: 1, type: 'Supérieure',  sqm: 28, status: 'OutOfOrder',  note: 'Plomberie' },
  { id: 'r113', number: '113', floor: 1, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Johnson K.',    checkOut: 'Jun 7' },
  { id: 'r114', number: '114', floor: 1, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Bernard L.',    checkOut: 'Jun 10' },
  // ── Floor 2 — Supérieure + Deluxe (14)
  { id: 'r201', number: '201', floor: 2, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Russo M.',      checkOut: 'Jun 6' },
  { id: 'r202', number: '202', floor: 2, type: 'Supérieure',  sqm: 28, status: 'VacantDirty', checkOut: 'Jun 5' },
  { id: 'r203', number: '203', floor: 2, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Hassan A.',     checkOut: 'Jun 8' },
  { id: 'r204', number: '204', floor: 2, type: 'Supérieure',  sqm: 28, status: 'Occupied',    guest: 'Larsson E.',    checkOut: 'Jun 7' },
  { id: 'r205', number: '205', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Moreau I.',     checkOut: 'Jun 7' },
  { id: 'r206', number: '206', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Tanaka Y.',     checkOut: 'Jun 9' },
  { id: 'r207', number: '207', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Available' },
  { id: 'r208', number: '208', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Petit S.',      checkOut: 'Jun 6' },
  { id: 'r209', number: '209', floor: 2, type: 'Deluxe',      sqm: 35, status: 'OnChange' },
  { id: 'r210', number: '210', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Andersson S.',  checkOut: 'Jun 12' },
  { id: 'r211', number: '211', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Diallo A.',     checkOut: 'Jun 6' },
  { id: 'r212', number: '212', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Inspected' },
  { id: 'r213', number: '213', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Fletcher J.',   checkOut: 'Jun 6' },
  { id: 'r214', number: '214', floor: 2, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Okafor N.',     checkOut: 'Jun 8' },
  // ── Floor 3 — Deluxe + Junior Suite (12)
  { id: 'r301', number: '301', floor: 3, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Girard P.',     checkOut: 'Jun 7' },
  { id: 'r302', number: '302', floor: 3, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Ivanova N.',    checkOut: 'Jun 10' },
  { id: 'r303', number: '303', floor: 3, type: 'Deluxe',      sqm: 35, status: 'VacantDirty', checkOut: 'Jun 5' },
  { id: 'r304', number: '304', floor: 3, type: 'Deluxe',      sqm: 35, status: 'Occupied',    guest: 'Weber H.',      checkOut: 'Jun 9' },
  { id: 'r305', number: '305', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Leroy F.',      checkOut: 'Jun 8' },
  { id: 'r306', number: '306', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Kim J.',        checkOut: 'Jun 7' },
  { id: 'r307', number: '307', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Nwosu E.',      checkOut: 'Jun 11' },
  { id: 'r308', number: '308', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Available' },
  { id: 'r309', number: '309', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Bonnet C.',     checkOut: 'Jun 8' },
  { id: 'r310', number: '310', floor: 3, type: 'Junior Suite', sqm: 48, status: 'OutOfService', note: 'Rénovation' },
  { id: 'r311', number: '311', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Rossi M.',      checkOut: 'Jun 6' },
  { id: 'r312', number: '312', floor: 3, type: 'Junior Suite', sqm: 48, status: 'Occupied',   guest: 'Dubois H.',     checkOut: 'Jun 9' },
  // ── Floor 4 — Junior Suite + Suite Lumière (8)
  { id: 'r401', number: '401', floor: 4, type: 'Junior Suite',  sqm: 52, status: 'Occupied',  guest: 'Tanaka H.',     checkOut: 'Jun 7' },
  { id: 'r402', number: '402', floor: 4, type: 'Junior Suite',  sqm: 52, status: 'Occupied',  guest: 'Kowalski A.',   checkOut: 'Jun 8' },
  { id: 'r403', number: '403', floor: 4, type: 'Junior Suite',  sqm: 52, status: 'Occupied',  guest: 'Leclerc D.',    checkOut: 'Jun 6' },
  { id: 'r404', number: '404', floor: 4, type: 'Junior Suite',  sqm: 52, status: 'Occupied',  guest: 'Ramos C.',      checkOut: 'Jun 10' },
  { id: 'r405', number: '405', floor: 4, type: 'Suite Lumière', sqm: 85, status: 'Occupied',  guest: 'Fontaine R.',   checkOut: 'Jun 9' },
  { id: 'r406', number: '406', floor: 4, type: 'Suite Lumière', sqm: 85, status: 'Occupied',  guest: 'Zhang L.',      checkOut: 'Jun 12' },
  { id: 'r407', number: '407', floor: 4, type: 'Suite Lumière', sqm: 92, status: 'Available' },
  { id: 'r408', number: '408', floor: 4, type: 'Suite Lumière', sqm: 92, status: 'Occupied',  guest: 'Al-Rashid K.',  checkOut: 'Jun 8' },
];

export function countByStatus(): Partial<Record<RoomStatus, number>> {
  return ROOMS.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] ?? 0) + 1;
    return acc;
  }, {} as Partial<Record<RoomStatus, number>>);
}

// ─── Bookings ─────────────────────────────────────────────────────────────────
export type BookingStatus =
  | 'Tentative' | 'Confirmed' | 'Guaranteed'
  | 'CheckedIn' | 'CheckedOut' | 'Cancelled' | 'NoShow';

export const BOOKING_STATUS_COLOR: Record<BookingStatus, string> = {
  Tentative:  '#6b7280',
  Confirmed:  '#3b82f6',
  Guaranteed: '#8b5cf6',
  CheckedIn:  '#C4A035',
  CheckedOut: '#16a34a',
  Cancelled:  '#dc2626',
  NoShow:     '#f97316',
};

export interface DemoBooking {
  id: string;
  guest: string;
  roomType: string;
  roomNumber?: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  status: BookingStatus;
  source: 'Direct' | 'Booking.com' | 'Expedia';
  amount: number;
}

export const BOOKINGS: DemoBooking[] = [
  { id: 'BK-2401', guest: 'Chen Wei',         roomType: 'Deluxe',        roomNumber: '206', checkIn: 'Jun 4',  checkOut: 'Jun 8',  nights: 4, status: 'CheckedIn',  source: 'Booking.com', amount: 1400  },
  { id: 'BK-2402', guest: 'Sophie Andersson', roomType: 'Suite Lumière', roomNumber: '406', checkIn: 'Jun 3',  checkOut: 'Jun 12', nights: 9, status: 'CheckedIn',  source: 'Direct',      amount: 7650  },
  { id: 'BK-2403', guest: 'Marco Rossi',      roomType: 'Junior Suite',  roomNumber: '311', checkIn: 'Jun 4',  checkOut: 'Jun 6',  nights: 2, status: 'CheckedIn',  source: 'Expedia',     amount: 960   },
  { id: 'BK-2404', guest: 'Aïsha Diallo',     roomType: 'Supérieure',                       checkIn: 'Jun 5',  checkOut: 'Jun 7',  nights: 2, status: 'Confirmed',  source: 'Booking.com', amount: 560   },
  { id: 'BK-2405', guest: 'James Fletcher',   roomType: 'Deluxe',        roomNumber: '213', checkIn: 'Jun 5',  checkOut: 'Jun 6',  nights: 1, status: 'CheckedIn',  source: 'Direct',      amount: 350   },
  { id: 'BK-2406', guest: 'Yuki Tanaka',      roomType: 'Junior Suite',                     checkIn: 'Jun 6',  checkOut: 'Jun 9',  nights: 3, status: 'Confirmed',  source: 'Booking.com', amount: 1440  },
  { id: 'BK-2407', guest: 'Isabelle Moreau',  roomType: 'Deluxe',        roomNumber: '205', checkIn: 'Jun 5',  checkOut: 'Jun 7',  nights: 2, status: 'CheckedIn',  source: 'Direct',      amount: 700   },
  { id: 'BK-2408', guest: 'Thomas Müller',    roomType: 'Classique',     roomNumber: '105', checkIn: 'Jun 5',  checkOut: 'Jun 6',  nights: 1, status: 'CheckedIn',  source: 'Expedia',     amount: 280   },
  { id: 'BK-2409', guest: 'Natasha Ivanova',  roomType: 'Deluxe',        roomNumber: '302', checkIn: 'Jun 2',  checkOut: 'Jun 10', nights: 8, status: 'CheckedIn',  source: 'Direct',      amount: 2800  },
  { id: 'BK-2410', guest: 'Ahmed Hassan',     roomType: 'Suite Lumière',                    checkIn: 'Jun 5',  checkOut: 'Jun 8',  nights: 3, status: 'Tentative',  source: 'Direct',      amount: 2550  },
];

// ─── Channels ─────────────────────────────────────────────────────────────────
export const CHANNELS = [
  {
    id: 'ch-bcm',
    name: 'Booking.com',
    status: 'Active' as const,
    lastSync: '3 min ago',
    lastSyncStatus: 'Success' as const,
    availabilityPushed: true,
    ratesPushed: true,
    restrictionsPushed: true,
    mappedRoomTypes: 5,
    mappedRatePlans: 3,
    reservationsToday: 2,
  },
  {
    id: 'ch-exp',
    name: 'Expedia',
    status: 'Active' as const,
    lastSync: '8 min ago',
    lastSyncStatus: 'Success' as const,
    availabilityPushed: true,
    ratesPushed: true,
    restrictionsPushed: false,
    mappedRoomTypes: 4,
    mappedRatePlans: 2,
    reservationsToday: 1,
  },
];

// ─── Night Audit ──────────────────────────────────────────────────────────────
export const LAST_AUDIT = {
  date: 'June 4, 2026',
  ranAt: '00:01 UTC',
  noShowsMarked: 1,
  noShowGuest: 'Ahmad Al-Khatib',
  noShowRoom: 'Junior Suite',
  occupancyAtAudit: 77.1,
  revenuePosted: 8_940,
  roomsAudited: 48,
  status: 'Completed' as const,
};

export const AUDIT_HISTORY = [
  { date: 'Jun 4, 2026', occ: '77.1%', revenue: '€8,940',  noShows: 1 },
  { date: 'Jun 3, 2026', occ: '81.3%', revenue: '€10,240', noShows: 0 },
  { date: 'Jun 2, 2026', occ: '75.0%', revenue: '€8,100',  noShows: 0 },
  { date: 'Jun 1, 2026', occ: '68.8%', revenue: '€7,200',  noShows: 2 },
];

// ─── Activity feed ────────────────────────────────────────────────────────────
export const ACTIVITY = [
  { time: '09:42', type: 'checkin',  text: 'James Fletcher checked in — Room 213 (Deluxe)' },
  { time: '09:31', type: 'sync',     text: 'ARI pushed to Booking.com — 48 dates updated' },
  { time: '09:15', type: 'checkin',  text: 'Thomas Müller checked in — Room 105 (Classique)' },
  { time: '08:57', type: 'clean',    text: 'Room 106 cleaning started — Sophie L.' },
  { time: '08:44', type: 'checkout', text: 'Aïsha Diallo checked out — Room 211' },
  { time: '08:30', type: 'booking',  text: 'New reservation BK-2410 — Ahmed Hassan · Suite Lumière · Jun 5–8' },
  { time: '08:01', type: 'sync',     text: 'ARI pushed to Expedia — rates updated' },
];

export const SYNC_LOG = [
  { time: '09:31', channel: 'Booking.com', msg: 'Availability pushed — 48 dates × 5 room types', ok: true },
  { time: '09:31', channel: 'Booking.com', msg: 'Rates pushed — BAR plan updated',               ok: true },
  { time: '09:01', channel: 'Expedia',     msg: 'Rates pushed — BAR plan updated',               ok: true },
  { time: '08:30', channel: 'Booking.com', msg: 'New reservation pulled — BK-2410',              ok: true },
  { time: '08:01', channel: 'Expedia',     msg: 'Availability pushed — 48 dates',                ok: true },
];
