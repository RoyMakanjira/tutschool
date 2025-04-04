"use client"; // Required for Next.js 13+ (App Router)

import { useEffect } from "react";

export default function ChatfuelWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.dataset.bot = "67efaafc940761ea8a2d0fba";
    script.dataset.zindex = "99999";
    script.src = "https://panel.chatfuel.com/widgets/chat-widget/chat-widget.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup (optional)
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component renders nothing
}