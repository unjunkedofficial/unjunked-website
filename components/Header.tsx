export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="font-semibold tracking-tight text-zinc-950">
          Unjunked
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a className="hover:text-zinc-950 transition" href="#shop">Shop</a>
          <a className="hover:text-zinc-950 transition" href="#transparency">Transparency</a>
          <a className="hover:text-zinc-950 transition" href="#founders">Founders</a>
        </nav>

        <a
          href="#shop"
          className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
        >
          Shop $40 Bundle
        </a>
      </div>
    </header>
  );
}
