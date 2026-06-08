import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Icon, TopNav } from "@/components/apro/Shell";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Athlete Profile — APRO" }] }),
  component: Profile,
});

const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD0U2mfS36I8KqN5VZiGorYgATrAhrIJ6pHp8m-rHsthLJ1VwCLOm291qukRmRG2zvNJFSjGs2DrkQD5-CQR9lrhLQ0jq0bOWYSdy7yuw6c_RFQzKurK8N1sogGWbEJsnqpMsjK-QEZluSSHUyUE3utU_Isjo933QK17WGTknVvBTQqWgoB0HlS6GAxnDnczQ5F45zOCBJEMpzMOY7XzS_g2AvTH0wjcqC1ChkFVuBXv-QtUF91H1r57bWJam1ZMUFR852MxtiqIdY7";

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav active="athletes" />
      <main className="flex-grow pt-24 pb-20 max-w-[1280px] mx-auto px-4 md:px-10 w-full">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-center">
          <div className="lg:col-span-4 relative">
            <div className="aspect-[3/4] w-full rounded-xl overflow-hidden relative shadow-sm">
              <img src={PROFILE_IMG} alt="Marcus Sterling" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center py-8">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-label-caps text-primary uppercase tracking-widest">Track & Field • Sprinter</span>
              <span className="flex items-center gap-1 text-secondary-container bg-secondary-container/10 px-2 py-1 rounded-full text-xs font-semibold">
                <Icon name="verified" filled className="text-sm" /> Pro Verified
              </span>
            </div>
            <h1 className="font-display text-headline-lg-mobile md:text-display-xl text-on-background mb-4">
              Marcus <br className="hidden md:block" />Sterling
            </h1>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                ["Current Team", "National Select"],
                ["Location", "Eugene, OR"],
                ["Class", "2024"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <span className="text-label-caps text-on-surface-variant">{k}</span>
                  <span className="text-body-lg text-on-surface font-semibold">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary text-body-md px-8 py-3 rounded-full hover:scale-[1.02] transition-all font-semibold shadow-sm">
                Contact Agent
              </button>
              <button className="glass-panel text-on-surface text-body-md px-8 py-3 rounded-full hover:bg-surface-variant/50 transition-all font-semibold flex items-center gap-2">
                <Icon name="download" className="text-primary" /> Resume
              </button>
              <Link to="/profile/edit" className="glass-panel text-on-surface text-body-md px-8 py-3 rounded-full hover:bg-surface-variant/50 transition-all font-semibold flex items-center gap-2">
                <Icon name="edit" className="text-primary" /> Edit
              </Link>
            </div>
          </div>
        </section>

        <div className="border-b border-outline-variant/30 mb-10 flex gap-8 overflow-x-auto no-scrollbar">
          {["Overview", "Statistics", "Career History", "Media"].map((t, i) => (
            <button key={t} className={i === 0 ? "text-body-md text-primary font-bold border-b-2 border-primary pb-4 whitespace-nowrap" : "text-body-md text-on-surface-variant hover:text-primary transition-colors pb-4 whitespace-nowrap"}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-6 lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-headline text-headline-md text-on-surface">Combine Metrics</h3>
              <Icon name="tune" className="text-outline" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                ["100M Dash", "10.12", "s", "text-primary"],
                ["Vertical", "42", "in", "text-secondary"],
                ["Broad Jump", "11'4\"", "", "text-on-surface"],
                ["Power Clean", "315", "lb", "text-on-surface"],
              ].map(([label, val, unit, color]) => (
                <div key={label}>
                  <div className="text-label-caps text-on-surface-variant mb-1 uppercase">{label}</div>
                  <div className={`font-stats text-stats ${color}`}>
                    {val}{unit && <span className="text-sm font-normal text-on-surface-variant ml-1">{unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 flex flex-col">
            <h3 className="font-headline text-headline-md text-on-surface mb-4">About</h3>
            <p className="text-body-md text-on-surface-variant flex-grow">
              Explosive sprinter with elite top-end speed and exceptional starting mechanics. Demonstrated leadership as team captain. Dedicated to technical precision and continuous performance optimization.
            </p>
            <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-sm text-on-surface-variant">
              <span>Height: 6'1"</span>
              <span>Weight: 185 lbs</span>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 lg:col-span-3">
            <h3 className="font-headline text-headline-md text-on-surface mb-6">Career Milestones</h3>
            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/50">
              {[
                ["primary", "State Championship — Gold Medalist", "100m & 200m Sprint • May 2023"],
                ["variant", "National Junior Olympics Qualifier", "Top 5 finish in regional trials • August 2022"],
                ["variant", "Varsity Team Captain", "Elected by peers and coaching staff • 2022-2023 Season"],
              ].map(([color, title, sub]) => (
                <div key={title} className="flex gap-4 relative z-10">
                  <div className={`w-6 h-6 rounded-full ${color === "primary" ? "bg-primary" : "bg-surface-variant"} flex-shrink-0 border-4 border-surface`} />
                  <div>
                    <div className="text-body-lg font-semibold text-on-surface">{title}</div>
                    <div className="text-body-md text-on-surface-variant">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
