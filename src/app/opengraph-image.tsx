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
          background: "#0A1628",
          color: "#F7F5F0",
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
          İK Danışmanlığı · Kariyer Koçluğu · Yapay Zeka Araçları
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
            color: "rgba(247,245,240,0.7)",
            maxWidth: 900,
          }}
        >
          Kariyer danışmanlığı, İK kaynakları ve yapay zekâ destekli araçlar
        </div>
      </div>
    ),
    { ...size }
  );
}
