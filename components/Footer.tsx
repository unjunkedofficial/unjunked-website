export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-lg font-semibold tracking-tight text-zinc-950">
              Unjunked
            </div>
            <div className="mt-2 text-sm text-zinc-700">
              Instagram:{" "}
              <a
                className="underline underline-offset-4 hover:text-zinc-950"
                href="https://instagram.com/unjunked.official"
                target="_blank"
                rel="noreferrer"
              >
                @unjunked.official
              </a>
            </div>
            <div className="mt-1 text-sm text-zinc-700">
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-zinc-950"
                href="mailto:info@ghalleyholdings.com"
              >
                info@ghalleyholdings.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-zinc-700 md:justify-self-end md:text-right">
            <a className="hover:text-zinc-950 transition" href="#shop">Shop</a>
            <a className="hover:text-zinc-950 transition" href="#transparency">Transparency</a>
            <a className="hover:text-zinc-950 transition" href="#founders">Founders</a>
            <a className="hover:text-zinc-950 transition" href="#wholesale">Wholesale</a>
            <a className="hover:text-zinc-950 transition" href="#terms">Terms</a>
            <a className="hover:text-zinc-950 transition" href="#refund">Refund Policy</a>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Unjunked. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
