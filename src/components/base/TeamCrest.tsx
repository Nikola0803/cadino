import { teamCrests } from "@/mocks/sportMedia";

type CrestSize = "sm" | "md" | "lg";

interface TeamCrestProps {
  team: string;
  size?: CrestSize;
  className?: string;
}

const sizeClasses: Record<CrestSize, string> = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-14 w-14",
};

const textSizes: Record<CrestSize, string> = {
  sm: "text-[8px]",
  md: "text-[10px]",
  lg: "text-base",
};

const initialsOf = (team: string) =>
  team
    .split(/\s+/)
    .filter((word) => /[A-Za-z]/.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TeamCrest({ team, size = "md", className = "" }: TeamCrestProps) {
  const image = teamCrests[team];

  if (!image) {
    return (
      <span
        className={`flex ${sizeClasses[size]} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 font-bold text-foreground-50 ring-1 ring-inset ring-foreground-50/10 ${textSizes[size]} ${className}`}
      >
        {initialsOf(team) || "?"}
      </span>
    );
  }

  return (
    <span
      className={`flex ${sizeClasses[size]} shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-800 ring-1 ring-inset ring-foreground-50/10 ${className}`}
    >
      <img
        src={image}
        alt={`${team} crest`}
        title={`${team} crest`}
        className="h-full w-full object-cover"
      />
    </span>
  );
}