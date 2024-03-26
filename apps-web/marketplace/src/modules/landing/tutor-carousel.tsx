import { Children, PropsWithChildren, useState } from "react";

import { WheelControls } from "@app/utils/keen-wheel-controls";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { FontAwesomeIcon } from "@luminate/ui";

type TutorCard = {
  id: string;
  tutorId: string;
  imageUrl: string;
  altText: string | null | undefined;
};

interface TutorCarouselProps {
  tutorCards: TutorCard[] | null;
}

export const TutorCarousel = ({ tutorCards }: TutorCarouselProps) => {
  if (!tutorCards) return null;
  return (
    <Carousel>
      {tutorCards.map((tutorCard) => (
        <NextLink
          key={tutorCard.id}
          href={`/browse/?tutorIds=${tutorCard.tutorId}`}
        >
          <NextImage
            className="object-cover"
            width={250}
            height={150}
            src={tutorCard.imageUrl}
            alt={tutorCard.altText ?? "Tutor category"}
          />
        </NextLink>
      ))}
    </Carousel>
  );
};

const Carousel = ({ children }: PropsWithChildren) => {
  const [scrollable, setScrollable] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      drag: scrollable,
      slides: {
        origin: "center",
        perView: () => {
          const slidesPerView = (() => {
            if (window === undefined) return 1.5;
            if (window.innerWidth > 1024) {
              return 5;
            }
            if (window.innerWidth > 768) {
              return 4;
            }
            if (window.innerWidth > 520) {
              return 3.5;
            }
            if (window.innerWidth > 380) {
              return 2;
            }
            return 1.5;
          })();
          const childrenLength = Children.count(children);
          setScrollable(slidesPerView < childrenLength);
          return slidesPerView;
        },
        spacing: 16,
      },
    },
    [WheelControls]
  );
  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <section className="flex flex-col items-center gap-y-6 lg:py-14 py-8">
      <div className="flex flex-row lg:flex-col items-center gap-2">
        <h5 className="font-semibold text-xl lg:text-3xl">ติวเตอร์มาแรง</h5>
        <h6 className="font-semibold text-xl">แซงทางโค้ง</h6>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-x-4">
        {scrollable && (
          <button
            type="button"
            className="absolute left-0 lg:relative z-50"
            onClick={prev}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="w-8 h-8 bg-gray-950 lg:bg-transparent rounded-sm p-1 lg:ml-3"
            />
          </button>
        )}
        <div
          data-scrollable={scrollable}
          className="keen-slider max-w-[1314px] lg:data-[scrollable=false]:mx-4"
          ref={sliderRef}
        >
          {children &&
            Array.isArray(children) &&
            children.map((child) => (
              <div key={child.key} className="keen-slider__slide">
                {child}
              </div>
            ))}
        </div>
        {scrollable && (
          <button
            type="button"
            className="absolute right-0 lg:relative z-50"
            onClick={next}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-8 h-8 bg-gray-950 lg:bg-transparent rounded-sm p-1 lg:mr-3"
            />
          </button>
        )}
      </div>
    </section>
  );
};
