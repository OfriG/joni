export default function Footer() {
  return (
    <footer dir="rtl" className="border-t border-white/10 bg-[#090512] px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3b9fd9] to-[#4a2d8a] shadow-lg shadow-[#3b9fd9]/20">
            <span className="text-base font-black text-white">Y</span>
          </div>
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              יהונתן כחלון
            </p>
            <p className="text-xs text-white/50">שיווק דיגיטלי מתקדם</p>
          </div>
        </div>

        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} כל הזכויות שמורות.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-white/80">
          <a
            href="https://www.instagram.com/yonatankahlon1?igsh=MXhxOGFpbmdlNTVpZw=="
            target="_blank"
            rel="noreferrer"
            aria-label="אינסטגרם"
            className="transition hover:opacity-80"
          >
            <img src="/instagram.svg" alt="Instagram" className="h-8 w-8 brightness-0 invert" />
          </a>
          <a
            href="https://www.facebook.com/share/1BLFAUX15B/"
            target="_blank"
            rel="noreferrer"
            aria-label="פייסבוק"
            className="transition hover:opacity-80"
          >
            <img src="/facebook.svg" alt="Facebook" className="h-8 w-8 brightness-0 invert" />
          </a>
          <a
            href="https://vt.tiktok.com/ZSCAA6hkT/"
            target="_blank"
            rel="noreferrer"
            aria-label="טיקטוק"
            className="transition hover:opacity-80"
          >
            <img src="/tiktok.svg" alt="TikTok" className="h-8 w-8 brightness-0 invert" />
          </a>
        </div>
      </div>
    </footer>
  );
}
