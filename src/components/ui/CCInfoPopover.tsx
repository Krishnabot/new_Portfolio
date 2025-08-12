import { useEffect, useRef, useState } from "react";

type CCInfoPopoverProps = {
  logoSrc: string;
  alt?: string;
  size?: number;
  className?: string;
};

export default function CCInfoPopover({
  logoSrc,
  alt = "Creative Commons",
  size = 20,
  className,
}: CCInfoPopoverProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center justify-center rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className ?? ""}`}
        title="What is Creative Commons?"
      >
        <img
          src={logoSrc}
          alt={alt}
          style={{ width: size, height: size }}
          className="object-contain"
          loading="lazy"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="About Creative Commons"
          className={[
            "absolute left-full top-1/2 -translate-y-1/2 ml-2",
            "md:bottom-full md:right-0 md:left-auto md:top-auto md:mb-2 md:translate-y-0 md:ml-0",
            "z-50 w-64 max-w-[75vw] rounded-md border border-zinc-200 bg-white p-3 text-xs shadow-lg",
            "dark:border-zinc-700 dark:bg-zinc-900",
          ].join(" ")}
        >
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            This license is <strong>free to use</strong> for personal projects,
            as long as you follow the license terms.
          </p>
          <a
            href="https://creativecommons.org/licenses/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-teal-600 underline hover:text-teal-700 dark:text-teal-400"
          >
            Learn about CC licenses →
          </a>

          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 border-t border-l border-zinc-200 bg-white md:hidden dark:border-zinc-700 dark:bg-zinc-900" />

          <div className="absolute -bottom-1 right-3 hidden h-2 w-2 rotate-45 border-r border-b border-zinc-200 bg-white md:block dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
      )}
    </div>
  );
}
