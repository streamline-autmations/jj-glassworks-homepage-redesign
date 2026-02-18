"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    playerjs?: {
      Player: new (element: string | HTMLIFrameElement) => {
        on: (event: string, callback: (data?: unknown) => void) => void;
        off: (event: string) => void;
        supports: (type: "method" | "event", name: string) => boolean;
        play: () => void;
        pause: () => void;
        mute: () => void;
        unmute: () => void;
        setVolume: (value: number) => void;
      };
    };
  }
}

function loadPlayerJs() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.playerjs?.Player) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-playerjs="true"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("playerjs load failed")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js";
    script.async = true;
    script.defer = true;
    script.dataset.playerjs = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("playerjs load failed")), {
      once: true,
    });
    document.head.appendChild(script);
  });
}

export default function AboutSnapshotVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  const src = useMemo(() => {
    const base =
      "https://iframe.mediadelivery.net/embed/601665/61052645-268e-4d7a-932e-5d3874d6515e";
    const params = new URLSearchParams({
      responsive: "true",
      loop: "true",
      muted: "true",
      autoplay: "false",
      preload: "true",
      playsinline: "true",
    });
    return `${base}?${params.toString()}`;
  }, []);

  useEffect(() => {
    let didCancel = false;
    let player: InstanceType<NonNullable<Window["playerjs"]>["Player"]> | null = null;

    const setup = async () => {
      try {
        await loadPlayerJs();
        if (didCancel) return;
        if (!iframeRef.current) return;
        if (!window.playerjs?.Player) return;

        player = new window.playerjs.Player(iframeRef.current);
        player.on("ready", () => {
          if (didCancel) return;
          setIsReady(true);
          if (player?.supports("method", "setVolume")) player.setVolume(50);
          if (player?.supports("method", "unmute")) player.unmute();
        });
      } catch {
        if (didCancel) return;
      }
    };

    setup();

    return () => {
      didCancel = true;
      try {
        player?.off("ready");
      } catch {}
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const container = containerRef.current;
    const iframe = iframeRef.current;
    if (!container || !iframe) return;
    if (!window.playerjs?.Player) return;

    const player = new window.playerjs.Player(iframe);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          if (player.supports("method", "play")) player.play();
        } else {
          if (player.supports("method", "pause")) player.pause();
        }
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/11] md:aspect-video w-full overflow-hidden rounded-3xl bg-background shadow-sm ring-1 ring-border/60"
    >
      <iframe
        ref={iframeRef}
        src={src}
        title="JJ Glassworks video"
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

