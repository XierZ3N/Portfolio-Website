// src/components/HoloBadge.tsx
import Image from "next/image";

type HoloBadgeProps = {
  logo?: string; // path under /public (e.g. "/logos/react.svg")
  color?: string; // glow color e.g. "#7c3af5"
};

export default function HoloBadge({ logo = "/logos/react.svg", color = "#7c3af5" }: HoloBadgeProps) {
  // ring style uses CSS gradient & drop shadow to create neon glow
  const ringStyle: React.CSSProperties = {
    background:
      `conic-gradient(from 180deg at 50% 50%, ${color}22, transparent 40%, ${color}11, transparent 65%)`,
    boxShadow: `0 8px 30px ${color}22, 0 2px 6px ${color}18 inset`,
  };

  const outerStyle: React.CSSProperties = {
    boxShadow: `0 8px 28px ${color}1c`,
    border: `1px solid ${color}11`,
  };

  return (
    <div className="holo-badge" style={outerStyle}>
      <span className="holo-ring" style={ringStyle} aria-hidden />
      <div className="holo-core" aria-hidden>
        {/* central logo */}
        <Image src={logo} alt="logo" width={56} height={56} priority={false} />
      </div>
      {/* tiny orbiting accent (pure decoration) */}
      <div
        className="holo-orbit"
        style={{ top: -6, left: "50%", transform: "translateX(-50%) translateZ(0) scale(.9)" }}
        aria-hidden
      />
    </div>
  );
}
