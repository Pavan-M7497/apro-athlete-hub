import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/apro/Shell";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Athlete Dashboard — APRO" }] }),
  component: Dashboard,
});

const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBXpkchC08VfLY0LjqxmSTjDrBekvS4VHHIOU9QzBu1SdZNjgGQPvvPrtdjsAjXf3-SwcbzbDUUsMs83AqaT8k11Awv5DAYrLBy2XZDQdevb9-xYPZZdp9I_Kt6bMoLo4cyCKDQJVK_Id4gtFbP25hvQUJX2lB_FClFgsL5vzovsTBkluonDmW8wzeSDv4m9g6sWKBaaUKKRMyaG6oJ0QHGlxPtLjNFq2HfDdSkv7NOVWE5YmT0n3HUwpCfPhCyghJl_rnBsC2ioVT_";

const navItems = [
  { icon: "dashboard", label: "Overview", active: true, to: "/dashboard" },
  { icon: "monitoring", label: "Stats", to: "/dashboard" },
  { icon: "folder_special", label: "Portfolio", to: "/dashboard" },
  { icon: "timeline", label: "Career", to: "/dashboard" },
  { icon: "mail", label: "Messages", to: "/dashboard" },
] as const;

function Dashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row">
      {/* Mobile nav */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm flex items-center justify-between h-20 px-4">
        <Link to="/" className="font-display text-headline-md font-extrabold tracking-tighter text-on-surface">APRO</Link>
        <button><Icon name="menu" /></button>
      </nav>

      {/* Sidenav */}
      <aside className="hidden md:flex flex-col w-64 fixed h-full bg-surface-container-lowest border-r border-outline-variant/20 z-40">
        <div className="h-20 flex items-center px-8 border-b border-outline-variant/20">
          <Link to="/" className="font-display text-headline-md font-extrabold tracking-tighter text-on-surface">APRO</Link>
        </div>
        <div className="p-8 flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container">
              <img src={USER_AVATAR} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-body-lg font-bold">M. Johnson</div>
              <div className="text-label-caps text-primary flex items-center gap-1">
                PRO <Icon name="verified" filled className="text-[14px]" />
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={
                  item.active
                    ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container/10 text-primary-container font-bold"
                    : "flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                }
              >
                <Icon name={item.icon} filled={item.active} />
                <span className="text-body-md">{item.label}</span>
              </Link>
            ))}
            <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all">
              <Icon name="person" />
              <span className="text-body-md">Profile</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 pt-24 md:pt-12 px-4 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <header className="mb-10 flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface">Command Center</h1>
            <p className="text-body-lg text-on-surface-variant mt-2">Your performance ecosystem is synchronized.</p>
          </div>
          <Link to="/profile/edit" className="bg-primary-container text-on-primary px-6 py-3 rounded-full text-body-md font-semibold hover:scale-[1.02] transition-all flex items-center gap-2">
            <Icon name="edit" /> Edit Profile
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Stats row */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Performance Index", value: "94.2", delta: "+2.4 this month", icon: "trending_up", iconColor: "text-primary", gradient: true, deltaColor: "text-secondary" },
              { label: "Global Reach", value: "1.2M", delta: "+15k this week", icon: "public", iconColor: "text-secondary", deltaColor: "text-secondary" },
              { label: "Profile Views", value: "8,405", delta: "Steady trajectory", icon: "visibility", iconColor: "text-outline", deltaColor: "text-outline", deltaIcon: "remove" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-caps text-on-surface-variant uppercase tracking-widest">{s.label}</span>
                  <Icon name={s.icon} className={s.iconColor} />
                </div>
                <div>
                  <div className={`font-stats text-stats ${s.gradient ? "text-gradient" : "text-on-surface"}`}>{s.value}</div>
                  <div className={`text-sm flex items-center gap-1 mt-2 ${s.deltaColor}`}>
                    <Icon name={s.deltaIcon ?? "arrow_upward"} className="text-[16px]" /> {s.delta}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="md:col-span-8">
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline text-headline-md text-on-surface">Recent Milestones</h2>
                <button className="text-primary text-label-caps hover:underline">VIEW ALL</button>
              </div>
              <div className="space-y-6">
                {[
                  { icon: "military_tech", color: "text-primary", title: "Regional Championship MVP", desc: "Awarded highest performance metric across 12 participating teams.", date: "Oct 14, 2024", filled: true },
                  { icon: "speed", color: "text-secondary", title: "Personal Best: Sprint Metrics", desc: "Achieved peak acceleration of 8.4m/s² during advanced combine testing.", date: "Sep 28, 2024" },
                  { icon: "contract", color: "text-tertiary", title: "Sponsorship Renewal", desc: "Extended partnership with Apex Sports Gear for another 24 months.", date: "Sep 15, 2024" },
                ].map((a, i, arr) => (
                  <div key={a.title} className={`flex items-start gap-4 ${i < arr.length - 1 ? "pb-6 border-b border-outline-variant/20" : ""}`}>
                    <div className={`w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center ${a.color}`}>
                      <Icon name={a.icon} filled={a.filled} />
                    </div>
                    <div>
                      <h3 className="text-body-lg font-semibold text-on-surface">{a.title}</h3>
                      <p className="text-body-md text-on-surface-variant mt-1">{a.desc}</p>
                      <span className="text-label-caps text-outline block mt-2">{a.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-card rounded-xl p-8 bg-surface-container-low border border-primary-container/20">
              <h2 className="font-headline text-headline-md text-on-surface mb-2">Next Steps</h2>
              <p className="text-body-md text-on-surface-variant mb-6">Optimize your profile to increase recruiter visibility.</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-on-surface font-semibold">Profile Strength</span>
                  <span className="text-primary font-bold">85%</span>
                </div>
                <div className="w-full bg-surface-variant rounded-full h-2">
                  <div className="bg-primary-container h-2 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Icon name="radio_button_unchecked" className="text-primary text-[20px]" />
                  <span className="text-body-md text-on-surface">Upload recent match film</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="radio_button_unchecked" className="text-primary text-[20px]" />
                  <span className="text-body-md text-on-surface">Update physical metrics</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <Icon name="check_circle" filled className="text-primary text-[20px]" />
                  <span className="text-body-md text-on-surface line-through">Verify medical history</span>
                </li>
              </ul>
              <Link to="/profile/edit" className="block w-full text-center bg-primary-container text-on-primary py-3 rounded-lg text-body-md font-semibold hover:scale-[1.02] transition-all">
                Complete Profile
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">RECENT INQUIRIES</h3>
              {[
                { name: "Elevate Athletics", icon: "domain", time: "2h ago" },
                { name: "State University", icon: "school", time: "1d ago" },
              ].map((r, i) => (
                <div key={r.name} className={`flex items-center justify-between py-2 ${i > 0 ? "border-t border-outline-variant/20 mt-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
                      <Icon name={r.icon} className="text-[16px]" />
                    </div>
                    <span className="text-body-md text-on-surface font-medium">{r.name}</span>
                  </div>
                  <span className="text-label-caps text-outline">{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 px-4 py-3 flex justify-around items-center">
        {navItems.slice(0, 4).map((item) => (
          <Link key={item.label} to={item.to} className={`flex flex-col items-center ${item.active ? "text-primary" : "text-on-surface-variant"}`}>
            <Icon name={item.icon} filled={item.active} />
            <span className="text-[10px] mt-1 tracking-widest">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
