import { useEffect, useState, useRef } from "react";

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [opacity, setOpacity] = useState(1);
  const pathRef = useRef<SVGPathElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    const updateTrail = (e: MouseEvent) => {
      setTrail((prev) => {
        if (prev.length > 0) {
          const last = prev[0];
          const dx = e.clientX - last.x;
          const dy = e.clientY - last.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 3) return prev; // More sensitive movement
        }

        return [
          { x: e.clientX, y: e.clientY },
          ...prev.slice(0, 20), // Longer trail for smoother taper
        ];
      });

      setOpacity(1);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setOpacity(0), 300);
    };

    window.addEventListener("mousemove", updateTrail);
    return () => {
      window.removeEventListener("mousemove", updateTrail);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const generateBezierPath = () => {
    if (trail.length < 2) return "";

    let path = `M${trail[0].x},${trail[0].y}`;

    // Create smooth curve with cubic Bézier
    for (let i = 1; i < trail.length - 1; i++) {
      const prev = trail[i - 1];
      const curr = trail[i];
      const next = trail[i + 1];

      // Control points for tighter curves
      const cp1x = curr.x - (curr.x - prev.x) * 0.2;
      const cp1y = curr.y - (curr.y - prev.y) * 0.2;
      const cp2x = curr.x + (next.x - curr.x) * 0.2;
      const cp2y = curr.y + (next.y - curr.y) * 0.2;

      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
    }

    return path;
  };

  return (
    <svg className="cursor-trail">
      <path
        ref={pathRef}
        d={generateBezierPath()}
        stroke="url(#trail-gradient)" // Gradient for taper effect
        strokeWidth="1.2" // Thin line
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity,
          transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      
      {/* Gradient definition for tapered stroke */}
      <defs>
        <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="70%" stopColor="white" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CursorTrail;