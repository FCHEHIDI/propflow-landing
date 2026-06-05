interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

export default function Logo({ size = 40, withWordmark = false, className }: LogoProps) {
  const s = size;
  // The symbol: 3 diamond shapes (top, left, right) + center dot
  // ViewBox 60x55 to match proportions from the generated logo
  const symbolW = s;
  const symbolH = s * (55 / 60);

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.3,
      }}
    >
      {/* Symbol */}
      <svg
        width={symbolW}
        height={symbolH}
        viewBox="0 0 60 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top diamond */}
        <polygon
          points="30,2 37,18 30,26 23,18"
          fill="#C4A035"
        />
        {/* Left diamond */}
        <polygon
          points="2,27 17,21 24,28 17,35"
          fill="#C4A035"
        />
        {/* Right diamond */}
        <polygon
          points="58,27 43,21 36,28 43,35"
          fill="#C4A035"
        />
        {/* Center dot */}
        <circle cx="30" cy="28" r="3" fill="#C4A035" />
      </svg>

      {/* Wordmark */}
      {withWordmark && (
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: size * 0.55,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          <span style={{ color: '#F0EDE8' }}>Prop</span>
          <span style={{ color: '#C4A035' }}>Flow</span>
        </span>
      )}
    </div>
  );
}
