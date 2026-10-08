import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { currentRole } from "@/data/profile";

export const alt = `${siteConfig.name} — ${currentRole.title} in ${siteConfig.location}`;
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
                    background: "#0a0a0a",
                    color: "#ffffff",
                }}
            >
                <div style={{ fontSize: 84, fontWeight: 700 }}>{siteConfig.name}</div>
                <div style={{ fontSize: 40, marginTop: 24, color: "#a855f7" }}>
                    {currentRole.title}
                </div>
                <div style={{ fontSize: 28, marginTop: 24, color: "#a3a3a3" }}>
                    {`React · Next.js · Node.js · Express · MongoDB · ${siteConfig.location}`}
                </div>
            </div>
        ),
        { ...size }
    );
}