import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Sidebar, { SidebarContent } from "@/components/feature/Sidebar";
import TopBar, { Logo } from "@/components/feature/TopBar";
import SiteFooter from "@/components/feature/SiteFooter";
import AuthModal, { type AuthMode } from "@/components/feature/AuthModal";
import SearchOverlay from "@/components/feature/SearchOverlay";
import MobileTabBar from "@/components/feature/MobileTabBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen || authMode ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen, authMode]);

  return (
    <div
      className="min-h-screen bg-background-950 text-foreground-100"
      style={{
        backgroundImage:
          "radial-gradient(820px 420px at 10% -8%, oklch(var(--accent-500) / 0.18), transparent 70%), radial-gradient(720px 380px at 92% -4%, oklch(var(--primary-500) / 0.13), transparent 70%)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-start gap-3 p-0 md:p-3">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <TopBar
            onMenu={() => setDrawerOpen(true)}
            onLogin={() => setAuthMode("login")}
            onRegister={() => setAuthMode("register")}
            onSearch={() => setSearchOpen(true)}
          />
          <div className="mx-auto w-full max-w-[1440px] px-3 pb-[100px] pt-4 md:px-0 md:pt-2 lg:pb-0">
            {children}
            <SiteFooter />
          </div>
        </main>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[65] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-background-950/80 backdrop-blur-sm cursor-default"
          ></button>
          <div
            className="relative h-full w-[286px] max-w-[82vw] overflow-y-auto border-r border-foreground-50/10 bg-background-900 p-3 no-scrollbar"
            style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <Logo compact />
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground-50/10 text-foreground-100 cursor-pointer"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
            <div className="h-[calc(100%_-_56px)]">
              <SidebarContent
                currentPath={location.pathname}
                onNavigate={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onChangeMode={setAuthMode} />
      <MobileTabBar />
    </div>
  );
}