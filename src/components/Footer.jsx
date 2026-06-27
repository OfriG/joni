export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#e85d75] to-[#7b3fa0]">
            <span className="text-xs font-bold text-white">N</span>
          </div>
          <span className="text-sm font-bold tracking-widest text-white/80">
            NEXUS
          </span>
        </div>

        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} NEXUS Digital Marketing. All rights
          reserved.
        </p>

        <div className="flex gap-6">
          {["LinkedIn", "Instagram", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
