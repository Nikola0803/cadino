import { useState } from "react";

interface GameImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function GameImage({ src, alt, className = "" }: GameImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-800 via-background-900 to-accent-950 ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-center px-3 text-center font-heading text-[11px] font-semibold leading-tight text-foreground-400">
        {alt}
      </span>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.04]"
        />
      ) : null}
    </div>
  );
}