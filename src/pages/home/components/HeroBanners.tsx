import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameImage from "@/components/base/GameImage";
import { heroBanners } from "@/mocks/games";

export default function HeroBanners() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      setPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(heroBanners.length - perView, 0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [index, maxIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {heroBanners.map((banner) => (
            <div key={banner.id} className="w-full shrink-0 px-1 md:w-1/3">
              <Link
                to={banner.href}
                className="group block relative overflow-hidden rounded-xl ring-1 ring-foreground-50/10 cursor-pointer"
              >
                <GameImage
                  src={banner.image}
                  alt={banner.title}
                  className="aspect-[16/9] w-full md:aspect-[16/9]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Go to slide ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              dotIndex === index ? "w-6 bg-gradient-brand" : "w-1.5 bg-foreground-50/25 hover:bg-foreground-50/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}