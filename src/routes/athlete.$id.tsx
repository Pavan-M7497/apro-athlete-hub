import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Icon, TopNav } from "@/components/apro/Shell";

export const Route = createFileRoute("/athlete/$id")({
  head: () => ({ meta: [{ title: "Athlete Detail — APRO" }] }),
  component: AthleteDetail,
});

const PORTRAIT = "https://lh3.googleusercontent.com/aida-public/AB6AXuDzfpVD8yinb5JeZLM4j9iHr2DtODm4WX83_sJ7G3dWdws13g1UMfiuiiX16b4Dj7hSXibQjGKsZNO2n0vBaNcSTljn59mQigy_qP3VO7TRsmAE7Ats-_Tx99omGHLEugpI_IXbbcFnmIvVR9YqDtqmxS1juPJFBTwvzKC3cS0TAa4LWx68xUfrZ__rUWty31HR6uOTeK7Wn3z7DZ79fmQuPeDSZRAcWcqu-gyN_sDcS6kYIW7emGVZmJPM35iFwiVo4CVmU5n_TUxJ";
const FILM = "https://lh3.googleusercontent.com/aida-public/AB6AXuANGIuqju4v825_wn1QVPzlTC1k1GeMcuNuuEXQbvc2w9GjjuZtF5aeZ0h1EHpl2vw0kxjYK-Z4BGDkHXTWWzkDWxrGnh-J7KjiD74o9GsoSDBwGXB2fkGmLMigevWXjGWZc61trNnUNhwX4eZ2cmZsvpXyC9TPxvmOEUI1xq0NTpDwomxv7IiVQOnPopiPIDEpeL-j4mkN82HSRGp11EJR-9TXrXcZaxISoysQDtC591ri-9fKh9Kv6qtH2amRyHUMzd34D3YRiH8M";

function AthleteDetail() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <TopNav active="athletes" />
      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 pb-32 w-full flex-grow">
        {/* Breadcrumbs + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-2 text-on-surface-variant text-body-md flex-wrap">
            <Link to="/search" className="hover:text-primary">Athletes</Link>
            <Icon name="chevron_right" className="text-sm" />
            <span className="text-on-surface font-semibold">Basketball</span>
            <Icon name="chevron_right" className="text-sm" />
            <span className="text-primary font-semibold">Marcus Johnson</span>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-surface-container text-primary text-body-md hover:bg-surface-container-high transition-all">
              <Icon name="bookmark" /> Save Profile
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary text-body-md font-bold hover:opacity-90 hover:scale-[1.02] transition-all">
              <Icon name="mail" filled /> Contact Agent
            </button>
          </div>
        </div>

        {/* Hero bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-8 glass-panel rounded-xl p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="shrink-0 relative">
              <img src={PORTRAIT} alt="Marcus Johnson" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-surface shadow-sm z-10 relative" />
              <div className="absolute bottom-2 right-2 bg-secondary text-on-secondary rounded-full w-10 h-10 flex items-center justify-center border-4 border-surface z-20 shadow-md">
                <Icon name="verified" filled />
              </div>
            </div>
            <div className="flex-1 z-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="px-3 py-1 bg-surface-container rounded-full text-primary text-label-caps uppercase tracking-widest">Class of 2025</span>
                <span className="flex items-center gap-1 text-on-surface-variant text-sm">
                  <Icon name="location_on" className="text-sm" /> Chicago, IL
                </span>
              </div>
              <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Marcus Johnson</h1>
              <p className="font-headline text-headline-md text-on-surface-variant mb-6 font-normal">Point Guard • 6'3" • 185 lbs</p>
              <div className="flex flex-wrap gap-4">
                {[
                  ["Current Team", "Elite Prep Academy", "text-on-surface"],
                  ["Commitment", "Undeclared", "text-secondary"],
                  ["National Rank", "#12 Overall", "text-on-surface"],
                ].map(([k, v, c], i) => (
                  <div key={k} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-10 bg-outline-variant/30 hidden md:block" />}
                    <div className="flex flex-col">
                      <span className="text-label-caps text-on-surface-variant uppercase mb-1">{k}</span>
                      <span className={`text-body-md font-semibold ${c}`}>{v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-label-caps text-on-surface-variant uppercase">Scoring Avg</span>
                <Icon name="trending_up" filled className="text-primary" />
              </div>
              <div>
                <div className="font-stats text-stats text-gradient">24.5</div>
                <p className="text-sm text-on-surface-variant mt-1">Points Per Game (2024 Season)</p>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-label-caps text-on-surface-variant uppercase">Athleticism</span>
                <Icon name="bolt" filled className="text-secondary" />
              </div>
              <div>
                <div className="font-stats text-stats text-on-surface">42"</div>
                <p className="text-sm text-on-surface-variant mt-1">Max Vertical Leap</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline text-headline-md text-on-surface">Performance Analysis</h2>
                <button className="text-primary text-sm font-semibold hover:underline">Download Report</button>
              </div>
              <div className="h-80 w-full relative rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 flex items-center justify-center overflow-hidden">
                <div className="absolute w-64 h-64 border border-outline-variant/30 rounded-full" />
                <div className="absolute w-48 h-48 border border-outline-variant/30 rounded-full" />
                <div className="absolute w-32 h-32 border border-outline-variant/30 rounded-full" />
                <div className="absolute w-full h-px bg-outline-variant/30" />
                <div className="absolute w-full h-px bg-outline-variant/30 rotate-45" />
                <div className="absolute w-full h-px bg-outline-variant/30 rotate-90" />
                <div className="absolute w-full h-px bg-outline-variant/30 rotate-[135deg]" />
                <svg className="absolute w-64 h-64 z-10" viewBox="0 0 100 100">
                  <polygon fill="rgba(109, 40, 217, 0.2)" points="50,10 85,35 70,85 20,80 15,40" stroke="#6d28d9" strokeWidth="2" />
                  {[[50,10],[85,35],[70,85],[20,80],[15,40]].map(([cx,cy], i) => (
                    <circle key={i} cx={cx} cy={cy} fill="#5300b7" r="2" />
                  ))}
                </svg>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-8 overflow-hidden">
              <h2 className="font-headline text-headline-md text-on-surface mb-6">Career Stats Progression</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/30">
                      {["Season", "Team", "GP", "PTS", "AST", "REB", "FG%"].map((h, i) => (
                        <th key={h} className={`py-4 ${i === 0 ? "pr-4" : i === 6 ? "pl-4 text-right" : "px-4"} ${i > 1 ? "text-right" : ""} text-label-caps text-on-surface-variant uppercase tracking-wider`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-body-md">
                    {[
                      ["2023-24", "Elite Prep Acad", "28", "24.5", "6.2", "5.1", "48.2%", true],
                      ["2022-23", "Elite Prep Acad", "26", "18.2", "5.4", "4.3", "45.5%", false],
                      ["2021-22", "City High", "22", "14.1", "4.1", "3.8", "43.0%", false],
                    ].map((row) => (
                      <tr key={String(row[0])} className="border-b border-outline-variant/10 last:border-0 hover:bg-surface-container-low transition-colors">
                        <td className="py-4 pr-4 text-on-surface font-semibold">{row[0]}</td>
                        <td className="py-4 px-4 text-on-surface-variant">{row[1]}</td>
                        <td className="py-4 px-4 text-right">{row[2]}</td>
                        <td className={`py-4 px-4 text-right font-semibold ${row[7] ? "text-primary" : ""}`}>{row[3]}</td>
                        <td className="py-4 px-4 text-right">{row[4]}</td>
                        <td className="py-4 px-4 text-right">{row[5]}</td>
                        <td className="py-4 pl-4 text-right">{row[6]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="school" filled className="text-primary" />
                <h2 className="font-headline text-lg font-semibold text-on-surface">Academic Profile</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">Core GPA</span>
                  <span className="font-stats text-2xl text-on-surface">3.8</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant">SAT Score</span>
                  <span className="font-stats text-2xl text-on-surface">1250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Clearinghouse</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold uppercase tracking-wide">Eligible</span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6 bg-gradient-to-br from-surface to-surface-container-high border-l-4 border-l-primary">
              <Icon name="format_quote" className="text-outline-variant/50 text-[40px] mb-2" />
              <p className="text-body-lg text-on-surface italic mb-4">
                "Marcus possesses a rare blend of court vision and explosive athleticism. His work ethic in the film room matches his intensity on the floor."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant">DW</div>
                <div>
                  <p className="font-semibold text-on-surface text-sm">David Williams</p>
                  <p className="text-xs text-on-surface-variant">Head Coach, Elite Prep</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6">
              <h2 className="font-headline text-lg font-semibold text-on-surface mb-4">Latest Film</h2>
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src={FILM} alt="Latest film" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="play_arrow" filled />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-white text-xs font-bold">3:45</div>
              </div>
              <a className="block text-center mt-4 text-primary text-sm font-semibold hover:underline" href="#">View All Reels (4)</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
