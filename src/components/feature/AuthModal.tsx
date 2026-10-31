import { useEffect, useState } from "react";

export type AuthMode = "login" | "register";

interface AuthModalProps {
  mode: AuthMode | null;
  onClose: () => void;
  onChangeMode: (mode: AuthMode) => void;
}

export default function AuthModal({ mode, onClose, onChangeMode }: AuthModalProps) {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setNotice("");
  }, [mode]);

  useEffect(() => {
    if (!mode) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, onClose]);

  if (!mode) return null;

  const isLogin = mode === "login";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-3 py-6 sm:px-4 sm:py-8">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-background-950/85 backdrop-blur-sm cursor-default"
      ></button>
      <div className="float-in relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-foreground-50/10 bg-background-900 shadow-2xl no-scrollbar">
        <div className="relative overflow-hidden bg-gradient-brand px-6 pb-6 pt-5">
          <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-xl"></div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40 cursor-pointer"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Welcome back
          </p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold text-white">
            {isLogin ? "Log in to Rolabets" : "Create your account"}
          </h2>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5 flex rounded-xl bg-background-950/70 p-1">
            <button
              type="button"
              onClick={() => onChangeMode("login")}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors cursor-pointer ${
                isLogin ? "bg-foreground-50/10 text-foreground-50" : "text-foreground-400"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => onChangeMode("register")}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors cursor-pointer ${
                !isLogin ? "bg-foreground-50/10 text-foreground-50" : "text-foreground-400"
              }`}
            >
              Registration
            </button>
          </div>

          <div className="space-y-3">
            {!isLogin ? (
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-foreground-400">Username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="LuckyPlayer"
                  className="w-full rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3 text-base text-foreground-50 outline-none transition-colors placeholder:text-foreground-600 focus:border-primary-500 sm:py-2.5 sm:text-sm"
                />
              </label>
            ) : null}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-foreground-400">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3 text-base text-foreground-50 outline-none transition-colors placeholder:text-foreground-600 focus:border-primary-500 sm:py-2.5 sm:text-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-foreground-400">Password</span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-foreground-50/10 bg-background-950/60 px-3 py-3 text-base text-foreground-50 outline-none transition-colors placeholder:text-foreground-600 focus:border-primary-500 sm:py-2.5 sm:text-sm"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={() =>
              setNotice(
                "Player accounts are not connected yet. Connect a backend to enable real sign-in and wallets."
              )
            }
            className="mt-5 w-full rounded-xl bg-gradient-brand py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            {isLogin ? "Log in" : "Create account"}
          </button>

          {notice ? (
            <p className="mt-3 rounded-xl border border-primary-500/30 bg-primary-500/10 px-3 py-2 text-xs leading-relaxed text-primary-200">
              {notice}
            </p>
          ) : null}

          <p className="mt-4 text-center text-[11px] leading-relaxed text-foreground-500">
            18+ only. Play responsibly. By continuing you agree to the Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}