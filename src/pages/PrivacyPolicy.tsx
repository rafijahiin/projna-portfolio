export default function PrivacyPolicy() {
  return (
    <div className="py-20 container-centered space-y-12 min-h-screen">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-zinc-700" />
          <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Transparency</span>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Privacy Protocol<span className="text-accent">.</span></h1>
      </section>

      <div className="bento-card max-w-4xl space-y-10">
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Version 1.0 — May 2024</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This protocol outlines the handling of digital data and personal identifiers within this professional ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">Data Collection</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Interaction through secure communication channels (Contact Forms) results in the archival of names and electronic addresses only for the purpose of professional dialogue.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">Distribution</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No private identifiers are traded or exported to third-party entities. All transmissions are strictly focused on strategic collaboration between specified parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
