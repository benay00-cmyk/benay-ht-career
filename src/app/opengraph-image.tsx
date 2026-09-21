import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F3324",
          color: "#FAF5E9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#B08D3E",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          İşe Alım Masasının Diğer Tarafından
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          Benay HR &amp; Career
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "rgba(250,245,233,0.7)",
            maxWidth: 900,
          }}
        >
          İş hayatına gerçek deneyimle bak: kariyer, iş arama ve işe alım
        </div>
      </div>
    ),
    { ...size }
  );
}
