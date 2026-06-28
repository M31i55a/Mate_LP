export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mate-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-mate-500/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative">
              Local-first.
              <br />
              <span className="text-gradient">Privacy-first.</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Mate is a floating AI secretary for Windows — fully local with
              Ollama. No API keys, no subscriptions, no cloud, no telemetry.
              Free forever.
            </p>
            <p className="mt-4 text-white/40 text-base leading-relaxed">
              Your conversations stay on your machine in a local SQLite database.
              Once your model is pulled, Mate runs completely offline. Optionally
              connect OpenRouter if you need cloud models — you stay in control
              of what leaves your device.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: "Platform", value: "Windows 10 / 11" },
                { label: "Engine", value: "Ollama (Local)" },
                { label: "License", value: "Apache 2.0" },
                { label: "Status", value: "In Development" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-mate-500" />
                  <span className="text-white/40 text-sm w-28">{item.label}</span>
                  <span className="text-white/80 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="relative glow-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50k+", label: "Lines of Code" },
                  { value: "100%", label: "Local & Offline" },
                  { value: "30+", label: "Slash Commands" },
                  { value: "Beta", label: "Public Release" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
