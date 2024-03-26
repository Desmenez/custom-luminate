import React, { Children, useEffect, useState } from "react";

import { WheelControls } from "@app/utils/keen-wheel-controls";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { useIsClient } from "@luminate/react-hooks";
import { cn } from "@luminate/ui";

type Banner = {
  id: string;
  altText: string | undefined | null;
  imageUrl: string | undefined | null;
  linkUrl: string | undefined | null;
};

interface BannerCarouselProps {
  banners: Banner[] | null;
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  if (!banners) {
    return null;
  }
  return (
    <Carousel>
      {banners
        .filter((banner) => !!banner.imageUrl)
        .map((banner) => (
          <NextLink
            href={banner.linkUrl!}
            key={banner.id}
            className="block relative min-w-full aspect-[12/5]"
          >
            <NextImage
              src={banner.imageUrl!}
              alt={banner.altText ?? ""}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
          </NextLink>
        ))}
    </Carousel>
  );
}

function Carousel({ children }: { children: React.JSX.Element[] }) {
  const count = Children.count(children);
  const hasSlides = count > 1;
  const [isHovering, setIsHovering] = useState(false);
  const autoSlide = !isHovering && hasSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isClient = useIsClient();

  const slides = isClient ? children : children.slice(0, 1);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      drag: hasSlides,
      slides: {
        origin: "center",
        perView: 1,
      },
      loop: true,
      slideChanged: (instance) => {
        setCurrentIndex(instance.track.details.rel);
      },
    },
    [WheelControls]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoSlide, instanceRef]);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="keen-slider aspect-[12/5]"
        ref={sliderRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {slides.map((child) => (
          <div key={child.key} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>
      {hasSlides && (
        <div className="py-6 lg:py-0 lg:absolute lg:bottom-4 flex justify-center">
          {Array.from({ length: count }).map((_, index) => (
            <button
              type="button"
              key={index}
              className="p-1.5 -my-1.5 transition-opacity hover:opacity-80 active:opacity-100"
              onClick={() => instanceRef.current?.moveToIdx(index)}
            >
              <div
                className={cn(
                  "rounded h-2 w-10 transition-colors",
                  currentIndex === index
                    ? "bg-yellow-400"
                    : "bg-gray-600 lg:bg-gray-200"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
