import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Icon, TopNav } from "@/components/apro/Shell";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [{ title: "Athlete Search — APRO" }] }),
  component: Search,
});

const athletes = [
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "WR • Collegiate • Junior",
    pro: true,
    header: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPmyD4mO08qcpIQaX37yLNjOHy-WZQQz5XlwoKVHxb1VWlKOKV352JIjFc8eCyqUxFS0CYbzPTbz0h4d8DepIPNKBTyDTce9sEExKtK0B-1cRtpMZyQYCDvjbnOISCGrIv9mMROnUSeXoogE3IYroO5L8cFoMi9vBxz5S01il-OHWG2JJM83ZW-nAVc3ePtpd2Mnl1mIL51pssiH_8dtgUHSiyjytmok1AJrFgZ54BvkuH7USYfWDFeiKFX2E8kr1jfJ6P-cj870d0",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKw3_i2CX8ICSM4aBNOaMRJgw__YxeB-1Vl1iYQxlKaTdx_Im8t4hmUb2kJjEppCnk1MVbphwHRqrJJtqTY488ptB920A0cYGMB8d2GgKpO_z5kJovv-LppnZBlUOpQOAq1jDfYunqP0Al9YoXWXbmkEXXjRoin3odU8xZHOmV4dryTS-EozRkSdL2wR-kG6ZF0_djr27I84kmgN__Tlo_B_Kc5q-WnHChj7bSpmqy9ebixIhqiZRpWmEZ7vx7cyeVm3vix8E9NY53",
    stats: [["40-YARD", "4.38", "text-primary"], ["VERT", "39\"", "text-secondary"], ["BROAD", "10'8\"", "text-on-surface"]],
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "PG • Collegiate • Senior",
    verified: true,
    header: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKmimAQyeuN4Dt0t8Ai1jeebEQNiRX3TH0LH2DHqWL4pcvbPrdf3dJDK2WfikjolJ8mnu6MlG6RFoau1OB-EoCUuqQW6fi5b7B0vHqKQQ3iqsfLn6qmw8h95Q_hPR1BoX4JiaAwgbJ6VeI0SI4P9n1t49sElW61rPxjA288IA36Mlhll2sr3ASPKPi3pfDgBynmqxp2lT8TTZd56UFsLjoalLg05de8JqxoBnW1UA5UZ-NYWN7mmeilNXxnmwzB6FugVAiCinY_pJc",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-zRx3cO_SR3CPE_YgsVy-2Em6sxYoQslKoZcYA2--b4GJ3ZWZeqWxSLuVNdALogFt6qAMTciLTqfedtyNg3gSJ3XXfAptGl8xF0dg2fe6uroBFfm9zjo2UHake-4iCPl0kNhwz2LCDskdUNI0gZDS9o71GYi3NFWbCf5-izLdsxto_pu1qLqsrYZnQi_g6lnVZwvWdcfY-F70SCQiXPxMdmq1VNP3HgnFU5Poibt_XoEW6z6EoeWcOoVpd7oglIaw0ymkC1K1p1p",
    stats: [["AGILITY", "10.5", "text-primary"], ["VERT", "32\"", "text-secondary"], ["WING", "6'4\"", "text-on-surface"]],
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "CB • Collegiate • Sophomore",
    header: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWkqpqVA7g6kwBR-XEJB4H5qoMVq3g6RxzddmlQHq3AuprHofMUSKnXBwnGn9NWQ7L2R1S1KhBnrWa4zoF_A5RAb7VmfC0uMQAWp4lsZkf0s6GGHGOEqPCJ2lNXeTKJU_B3EdUWmB2u7NjK8iGb14-gB8RycBYB728uUOW_LZ2KL8bRwkZwbXoAOT1s3lGpE8kus_B_awgs7ro44ghFotgDNRCjpDEv5uGgmzfO14Eiemn6fvV2O4iqPFYhbfLKckitmQUQz7BH1OP",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA-JioUivJE4hOtvnLSLxf3JM1Dv0DvxC5p7Y7O86KYINNbyCwcVZkDqJ99PxwuwJlOsE3zSg4EkHlKeX1l7f8Q4fXzlRQ8RY1MS5Ak1r_HcLY8oCbRVLYb6uGgZf-ouc6hPD8pfqNXBxjbPt3cgE24y3jgury51b44Y_UlSamFJc3SgLS81t25P5vB-YiZ9Gl3LZ3uI74_X-J-ANjLRiSo00cAXuKMJVSm4MiXi9NOsSbLxHBNMrzOgYqnEJ20hY64DOYE9jC2UpP",
    stats: [["40-YARD", "4.42", "text-primary"], ["VERT", "37\"", "text-secondary"], ["BENCH", "18", "text-on-surface"]],
  },
];

function Search() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav active="athletes" />
      <main className="pt-28 pb-20 max-w-[1280px] mx-auto px-4 md:px-10 w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Filters */}
        <aside className="lg:col-span-3">
          <div className="glass-panel rounded-xl p-6 sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-headline-md text-on-surface">Filters</h2>
              <button className="text-label-caps text-primary uppercase">Clear</button>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Search</label>
                <div className="relative">
                  <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" />
                  <input type="text" placeholder="Name, team..." className="w-full bg-surface border border-outline-variant/30 rounded-lg py-2 pl-10 pr-3 text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Sport</label>
                <select className="w-full bg-surface border border-outline-variant/30 rounded-lg p-2.5 text-body-md text-on-surface focus:border-primary outline-none">
                  <option>Football</option><option>Basketball</option><option>Soccer</option><option>Track & Field</option>
                </select>
              </div>
              <div>
                <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Position</label>
                <select className="w-full bg-surface border border-outline-variant/30 rounded-lg p-2.5 text-body-md text-on-surface focus:border-primary outline-none">
                  <option>Quarterback</option><option>Wide Receiver</option><option>Running Back</option><option>Linebacker</option>
                </select>
              </div>
              <div>
                <label className="block text-label-caps text-on-surface-variant mb-3 uppercase tracking-widest">Experience Level</label>
                <div className="space-y-2">
                  {[["High School", false], ["Collegiate", true], ["Pro/Elite", false]].map(([l, c]) => (
                    <label key={String(l)} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked={c as boolean} className="rounded border-outline-variant text-primary focus:ring-primary bg-surface" />
                      <span className="text-body-md text-on-surface">{l}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-outline-variant/20 my-2" />
              <div>
                <h3 className="text-label-caps text-on-surface-variant mb-4 uppercase tracking-widest">Performance Metrics</h3>
                <div className="space-y-5">
                  {[
                    ["40-Yard Dash", "≤ 4.5s", 4, 6, 4.5, 0.1],
                    ["Vertical Jump", "≥ 36\"", 20, 50, 36, 1],
                    ["Bench Press (225lbs)", "≥ 15 reps", 0, 40, 15, 1],
                  ].map(([label, badge, min, max, val, step]) => (
                    <div key={String(label)}>
                      <div className="flex justify-between mb-1">
                        <label className="text-body-md text-on-surface text-sm">{label}</label>
                        <span className="font-stats text-[14px] text-primary">{badge}</span>
                      </div>
                      <input type="range" min={min as number} max={max as number} step={step as number} defaultValue={val as number} className="w-full h-1 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" />
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" className="w-full bg-primary-container text-on-primary py-3 rounded-full text-body-md font-semibold hover:scale-[1.02] transition-all mt-2">Apply Filters</button>
            </form>
          </div>
        </aside>

        {/* Results */}
        <section className="lg:col-span-9">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Discovery</h1>
              <p className="text-body-md text-on-surface-variant">Showing 24 elite athletes matching your criteria.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-label-caps text-on-surface-variant uppercase">Sort by:</span>
              <select className="bg-transparent border-0 border-b border-outline-variant/30 py-1 pr-6 text-body-md text-on-surface focus:ring-0 focus:border-primary outline-none">
                <option>Top Rated</option><option>Newest</option><option>Speed (Fastest)</option>
              </select>
              <div className="flex bg-surface-container rounded-lg p-1 ml-2">
                <button className="p-1.5 bg-white shadow-sm rounded-md text-primary"><Icon name="grid_view" className="text-[20px]" /></button>
                <button className="p-1.5 text-on-surface-variant hover:text-on-surface rounded-md"><Icon name="view_list" className="text-[20px]" /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {athletes.map((a) => (
              <Link to="/athlete/$id" params={{ id: a.id }} key={a.id} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block">
                <div className="h-32 bg-surface-container relative">
                  <img src={a.header} alt="" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                  {a.pro && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary text-label-caps px-2 py-1 rounded-sm tracking-wider">PRO</span>
                  )}
                </div>
                <div className="p-5 -mt-10 relative">
                  <div className="w-16 h-16 rounded-full border-4 border-white shadow-sm overflow-hidden bg-surface mb-3 relative">
                    <img src={a.portrait} alt={a.name} className="w-full h-full object-cover" />
                    {a.verified && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                        <Icon name="verified" filled className="text-[10px] text-white" />
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <h3 className="font-headline text-[20px] leading-tight text-on-surface mb-1 group-hover:text-primary transition-colors">{a.name}</h3>
                    <p className="text-[14px] text-on-surface-variant">{a.role}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                    {a.stats.map(([k, v, c], i) => (
                      <div key={k} className={`text-center ${i === 1 ? "border-l border-r border-outline-variant/20" : ""}`}>
                        <p className="text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">{k}</p>
                        <p className={`font-stats text-[20px] ${c}`}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary"><Icon name="chevron_left" /></button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-semibold">1</button>
            {["2", "3"].map((n) => (
              <button key={n} className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary">{n}</button>
            ))}
            <span className="text-on-surface-variant mx-1">...</span>
            <button className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-primary">8</button>
            <button className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary"><Icon name="chevron_right" /></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
