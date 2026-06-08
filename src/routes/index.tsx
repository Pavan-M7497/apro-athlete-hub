import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Icon, TopNav } from "@/components/apro/Shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APRO — Your Professional Identity as an Athlete Starts Here" },
      { name: "description", content: "Build your digital resume, showcase verified stats, and control your narrative on APRO." },
    ],
  }),
  component: Landing,
});

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDAR54wd6DQXNufMOdToXIzElRXrR2CVU20Bx_XB73CZNaYMSZY3FQZ-SQ_ofWeh-pu4TehLSOI31dUWpcgfXzJpq_vm_v-XdgX0kXi6kRGJzSxrOKJFE6ePjiyw8d9XWLHbAMAa_YMKoydnWuq3UWUTQTGtDSjL_sHk04-r8H6oThzxzhQb7BbxE-S1l4cueGW4xWz2a76gPVLPua2dbObEndtfI8t366X2eZ8tiuY94bpcHm0YApwe8v-DfempjdY-qpu5UGAETQ1";
const AVATAR_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBiOB9nw1XUWMW5DIC0IKeYO99oGLERVTEHlCOIWNN-qWwNbY7GabP9Qkhvp0oPdO06FY7HVP9eicdZSDFMayW1VAJlGUPFWTNphBog2Ms630OmYqwsDTk5yGfa91fR3ZWLWMN-Sg99a1vUgccVTiuersTMwggDzPf7DIZWlLqkuzrBGlC5hPV60Hk0YbNEQ8cDtnKWgLKwjjeykpA9F5oTUJV5I_RV5RyAtD9GEvVIkRK1BwTJ00E2oqJjdUBOf3TmiE128Q3zs3ZQ";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col pt-20 overflow-x-hidden">
      <TopNav active="athletes" />
      <section className="relative max-w-[1280px] mx-auto px-4 md:px-10 pt-24 pb-32 overflow-hidden flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="w-full md:w-1/2 flex flex-col z-10">
          <span className="text-label-caps text-primary uppercase tracking-[0.1em] mb-4">The New Standard</span>
          <h1 className="font-display text-headline-lg-mobile md:text-display-xl text-on-surface mb-6">
            Your Professional Identity as an Athlete Starts Here.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">
            APRO is the elite digital platform bridging the gap between high-performance athletes and world-class recruiters. Build your digital resume, showcase verified stats, and control your narrative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/dashboard"
              className="bg-primary-container text-on-primary px-8 py-4 rounded-full text-body-md font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Building
              <Icon name="arrow_forward" />
            </Link>
            <button className="glass-card text-primary-container px-8 py-4 rounded-full text-body-md font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
              For Recruiters
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] rounded-[32px] overflow-hidden shadow-2xl">
          <img src={HERO_IMG} alt="Athlete training" className="absolute inset-0 w-full h-full object-cover object-top z-0" />
          <div className="absolute bottom-8 left-8 right-8 z-10 glass-card rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden border-2 border-primary-container relative">
                <img src={AVATAR_IMG} alt="Marcus Johnson" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-tertiary rounded-full border-2 border-white flex items-center justify-center">
                  <Icon name="check" filled className="text-[12px] text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-body-lg text-on-surface font-bold">Marcus Johnson</h3>
                <p className="text-label-caps text-on-surface-variant">Verified Pro Athlete</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-stats text-[32px] text-primary-container leading-none">9.8</p>
              <p className="text-label-caps text-on-surface-variant">Performance Score</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
