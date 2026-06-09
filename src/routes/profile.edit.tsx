import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Footer, Icon } from "@/components/apro/Shell";
import { useAuth } from "@/lib/auth/context";
import { getProfile, updateProfile, uploadAvatar } from "@/lib/db/profiles";
import type { Profile } from "@/lib/supabase/schema";
import { toast } from "sonner";

export const Route = createFileRoute("/profile/edit")({
  head: () => ({ meta: [{ title: "Edit Profile — APRO" }] }),
  component: EditProfile,
});

const profileSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  sport: z.string(),
  position_event: z.string(),
  location: z.string(),
  bio: z.string(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

function EditProfile() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    values: {
      full_name: profile?.full_name || "",
      sport: profile?.sport || "",
      position_event: profile?.position_event || "",
      location: profile?.location || "",
      bio: profile?.bio || "",
    },
  });

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      navigate({ to: "/login" });
      return;
    }

    const loadProfile = async () => {
      try {
        const data = await getProfile(user.id);
        setProfile(data);
        if (data?.avatar_url) {
          setAvatarPreview(data.avatar_url);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user, authLoading, navigate]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    if (!user) return;

    setIsSaving(true);
    try {
      let avatarUrl = profile?.avatar_url;

      if (selectedFile) {
        const url = await uploadAvatar(user.id, selectedFile);
        if (!url) throw new Error("Failed to upload avatar");
        avatarUrl = url;
        setSelectedFile(null);
      }

      const updated = await updateProfile(user.id, {
        ...data,
        avatar_url: avatarUrl,
      } as Partial<Profile>);

      setProfile(updated);
      reset();
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error(error instanceof Error ? error.message : "Failed to save profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-on-surface-variant">Loading...</p>
      </div>
    );
  }

  const sections = [
    { id: "basic", label: "Basic Info", icon: "person", active: true },
    { id: "media", label: "Media & Highlights", icon: "perm_media" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm fixed top-0 w-full z-50 h-20 flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
              <Icon name="arrow_back" />
            </Link>
            <span className="font-display text-headline-md font-extrabold tracking-tighter text-on-surface">APRO</span>
          </div>
          <div className="flex items-center gap-4">
            {isDirty && <span className="text-on-surface-variant text-body-md hidden md:block">Unsaved changes</span>}
            <button
              type="submit"
              form="profile-form"
              disabled={!isDirty || isSaving}
              className="bg-primary-container text-on-primary text-body-md font-medium px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? "Saving..." : "Save Profile"}
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

        <form id="profile-form" onSubmit={handleSubmit(onSubmit)} className="flex-grow max-w-3xl space-y-12">
          <section className="space-y-8" id="basic">
            <div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Basic Info</h2>
              <p className="text-on-surface-variant">Update your personal details and public identity.</p>
            </div>
            <div className="glass-panel p-6 md:p-8 rounded-xl space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full bg-surface-container-high border-2 border-surface-container overflow-hidden flex-shrink-0 group cursor-pointer">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-container-high">
                      <Icon name="person" className="text-[40px] text-on-surface-variant" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="photo_camera" className="text-on-primary" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
                <div>
                  <h3 className="font-headline text-headline-md text-on-surface mb-1">Profile Photo</h3>
                  <p className="text-on-surface-variant text-sm mb-3">Recommended size: 500x500px (JPG, PNG)</p>
                  <label className="border border-primary/20 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer">
                    Change Photo
                    <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="md:col-span-2">
                    <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      {...register("full_name")}
                      className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2"
                    />
                    {errors.full_name && <p className="text-sm text-red-500 mt-1">{errors.full_name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Sport</label>
                    <input type="text" {...register("sport")} className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2" />
                  </div>
                  <div>
                    <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Position / Event</label>
                    <input type="text" {...register("position_event")} className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Location</label>
                    <input type="text" {...register("location")} className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Bio</label>
                    <textarea
                      {...register("bio")}
                      rows={3}
                      className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface focus:outline-none focus:border-primary focus:border-b-2 transition-all pb-2 resize-none"
                    />
                  </div>
                </div>
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
                <p className="text-body-md text-on-surface-variant mt-1">MP4, MOV, JPG, PNG up to 10MB</p>
                <input type="file" className="hidden" multiple />
              </label>
            </div>
          </section>
        </form>
      </main>

      <Footer />
    </div>
  );
}
