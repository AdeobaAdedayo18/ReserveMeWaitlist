interface PatternOverlayProps {
  isDarkMode: boolean;
}

export function PatternOverlay({ isDarkMode }: PatternOverlayProps) {
  return (
    <div
      className="absolute inset-0 z-0 transition-opacity duration-300"
      style={{
        opacity: isDarkMode ? 0.2 : 0.1,
        backgroundImage: `radial-gradient(circle at 2px 2px, ${
          isDarkMode ? "rgba(244, 63, 94, 0.15)" : "rgba(225, 29, 72, 0.15)"
        } 2px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
