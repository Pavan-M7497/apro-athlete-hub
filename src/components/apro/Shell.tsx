import { Link } from "@tanstack/react-router";

export function Icon({ name, className = "", filled = false }: { name: string; className?: string; filled?: boolean }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}

export function TopNav({ active }: { active?: "athletes" | "recruiters" | "pricing" }) {
  const link = (key: typeof active, label: string, to: string) => {
    const isActive = active === key;
    return (
      <Link
        to={to}
        className={
          isActive
            ? "text-[16px] text-primary font-bold border-b-2 border-primary h-20 flex items-center px-2"
            : "text-[16px] text-on-surface-variant hover:text-primary transition-colors h-20 flex items-center px-2"
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-display text-headline-md font-extrabold tracking-tighter text-on-surface">
            APRO
          </Link>
          <div className="hidden md:flex gap-8 items-center h-full">
            {link("athletes", "Athletes", "/search")}
            {link("recruiters", "Recruiters", "/")}
            {link("pricing", "Pricing", "/")}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="hidden md:block text-[16px] text-primary font-semibold hover:text-primary-container transition-colors">
            Login
          </Link>
          <Link
            to="/dashboard"
            className="bg-primary-container text-on-primary px-6 py-2 rounded-full text-[16px] font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-20 bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2">
          <div className="font-display text-headline-md font-extrabold text-on-surface mb-4">APRO</div>
          <p className="text-body-md text-on-surface-variant max-w-xs mb-8">
            The professional network built exclusively for the modern athlete and elite recruiter.
          </p>
          <p className="text-body-md text-on-surface-variant">© 2024 APRO Performance. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-body-lg font-semibold text-on-surface mb-4">Platform</h4>
          <ul className="space-y-3 text-body-md text-on-surface-variant">
            <li><Link to="/search" className="hover:text-primary">Athletes</Link></li>
            <li><a href="#" className="hover:text-primary">Recruiters</a></li>
            <li><a href="#" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-body-lg font-semibold text-on-surface mb-4">Company</h4>
          <ul className="space-y-3 text-body-md text-on-surface-variant">
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
            <li><a href="#" className="hover:text-primary">Terms</a></li>
            <li><a href="#" className="hover:text-primary">Support</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
