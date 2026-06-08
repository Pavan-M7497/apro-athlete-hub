import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer, Icon } from "@/components/apro/Shell";

export const Route = createFileRoute("/profile/edit")({
  head: () => ({ meta: [{ title: "Edit Profile — APRO" }] }),
  component: EditProfile,
});

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCBXW6ihtULnLf6vEIxBOo6cK0xWU55CBBK5cKllSa-9yThuUvVxei6NTOIqB1N3udIDSLwRROjx7qE5Aa61OQAvGXuaws8Qa42UIUmJamLw4uNORYRmdqVlfxBxjxYW0LKD5TRCwnuqluIA5z8lNJ0UagRXIA_VXUsEB1WgcpMMaFfcYWqupcLeyM7zYt6jY-KTiOpAV_gYNgfqJV0MDohJjC3utm3I93njYGcQOosfxqc3XRipg1wKTkkAXofvERRe5vSuRrpwdRX";

const sections = [
  { id: "basic", label: "Basic Info", icon: "person", active: true },
  { id: "performance", label: "Performance Stats", icon: "monitoring" },
  { id: "achievements", label: "Achievements", icon: "workspace_premium" },
  { id: "history", label: "Career History", icon: "history" },
  { id: "media", label: "Media & Highlights", icon: "perm_media" },
];

function Field({ label, defaultValue, full = false, textarea = false }: { label: string; defaultValue?: string; full?: boolean; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2";
  return (
    <div className={full ? "col-span-1 md:col-span-2" : ""}>
      <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">{label}</label>
      {textarea ? (
        <textarea className={cls + " resize-none"} rows={3} defaultValue={defaultValue} />
      ) : (
        <input type="text" className={cls} defaultValue={defaultValue} />
      )}
    </div>
  );
}

function EditProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm fixed top-0 w-full z-50 h-20 flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
              <Icon name="arrow_back" />
            </Link>
            <span className="font-display text-headline-md font-extrabold tracking-tighter text-on-surface">APRO</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant text-body-md hidden md:block">Unsaved changes</span>
            <button className="bg-primary-container text-on-primary text-body-md font-medium px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all">
              Save Profile
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-28 pb-20 px-4 md:px-10 max-w-[1280px] mx-auto w-full flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <nav className="flex md:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 md:pb-0 border-b border-outline-variant/30 md:border-b-0">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={
                    s.active
                      ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-low text-primary font-bold whitespace-nowrap"
                      : "flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all whitespace-nowrap"
                  }
                >
                  <Icon name={s.icon} filled={s.active} /> {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl space-y-12">
          <section className="space-y-8" id="basic">
            <div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Basic Info</h2>
              <p className="text-on-surface-variant">Update your personal details and public identity.</p>
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-xl space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full bg-surface-container-high border-2 border-surface-container overflow-hidden flex-shrink-0 group cursor-pointer">
                  <img src={AVATAR} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="photo_camera" className="text-on-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-headline-md text-on-surface mb-1">Profile Photo</h3>
                  <p className="text-on-surface-variant text-sm mb-3">Recommended size: 500x500px (JPG, PNG)</p>
                  <button className="border border-primary/20 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                    Change Photo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <Field label="Full Name" defaultValue="Sarah Jenkins" full />
                <Field label="Sport" defaultValue="Track & Field" />
                <Field label="Position / Event" defaultValue="100m Sprint" />
                <Field label="Current Team / Club" defaultValue="Velocity Elite" />
                <Field label="Location" defaultValue="Eugene, OR" />
                <Field label="Bio" full textarea defaultValue="Professional sprinter specializing in the 100m and 200m dash. Dedicated to pushing the limits of human speed and performance." />
              </div>
            </div>
          </section>

          <section className="space-y-8" id="media">
            <div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Media & Highlights</h2>
              <p className="text-on-surface-variant">Upload reels, photos and supporting documents.</p>
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-xl">
              <label className="block border-2 border-dashed border-outline-variant/60 rounded-xl p-12 text-center cursor-pointer hover:border-primary transition-colors">
                <Icon name="cloud_upload" className="text-primary text-[40px]" />
                <p className="font-headline text-headline-md text-on-surface mt-4">Drop files to upload</p>
                <p className="text-body-md text-on-surface-variant mt-1">MP4, MOV, JPG, PNG up to 500MB</p>
                <input type="file" className="hidden" multiple />
              </label>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
