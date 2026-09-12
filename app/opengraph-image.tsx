import { ImageResponse } from "next/og";

export const alt = "SNEHA.DEV — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "60px 80px",
          background: "linear-gradient(160deg, #070d24 0%, #0b1747 40%, #1a1040 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gradient accent orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 500,
            height: 500,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(220,77,155,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 400,
            height: 400,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(112,73,233,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: "linear-gradient(135deg, #dc4d9b 0%, #7049e9 100%)",
              fontSize: 26,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            S
          </div>
          <span style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
            SNEHA.DEV
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Full-Stack Developer
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Building modern, scalable, and high-performance web applications.
          </span>
        </div>

        {/* Tech pills */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 28,
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 16,
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
