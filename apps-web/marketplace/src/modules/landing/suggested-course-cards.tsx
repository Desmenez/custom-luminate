import BgGradient from "@app/assets/bg-gradients.svg?url";
import {
  DefaultHoverCard,
  DefaultHoverCardProps,
} from "@app/components/course-card";
import { faSmile } from "@fortawesome/pro-regular-svg-icons";
import NextImage from "next/image";
import NextLink from "next/link";

import { LiveCourseType } from "@luminate/database";
import { LiveCourseForPreview } from "@luminate/rest";
import { FontAwesomeIcon } from "@luminate/ui";

import { CourseCardSlider } from "../../components/course-card/course-card-slider";

interface SuggestedCourseCardsProps {
  suggestedCourses: LiveCourseForPreview[] | null;
}

export const SuggestedCourseCards = ({
  suggestedCourses,
}: SuggestedCourseCardsProps) => {
  const liveCourses = suggestedCourses?.filter(
    (course) =>
      course.type === LiveCourseType.LIVE ||
      course.type === LiveCourseType.FUSION
  );
  const onlineCourses = suggestedCourses?.filter(
    (course) => course.type === LiveCourseType.TAPE
  );
  const onsiteCourses = suggestedCourses?.filter(
    (course) => course.type === LiveCourseType.ONSITE
  );
  if (!suggestedCourses) {
    return null;
  }
  return (
    <div className="relative">
      <NextImage src={BgGradient} alt="" fill className="object-cover -z-10" />
      <CourseCardSection
        title="LIVE COURSE"
        description="เรียนได้ทุกที่ ทั้งห้องเรียนสดและระบบถ่ายทอดสด"
        courses={liveCourses}
        href={`/browse?liveCourseType=${LiveCourseType.LIVE}`}
      />
      <CourseCardSection
        title="ONLINE COURSE"
        description="คอร์สออนไลน์ เรียนเมื่อไรก็ได้"
        courses={onlineCourses}
        href={`/browse?liveCourseType=${LiveCourseType.TAPE}`}
      />
      <CourseCardSection
        title="ON-SITE COURSE"
        description="เรียนกับ Tutor ตัวจริง ณ ห้องเรียนสด"
        courses={onsiteCourses}
        href={`/browse?liveCourseType=${LiveCourseType.ONSITE}`}
      />
    </div>
  );
};

interface CourseCardSectionProps {
  title: string;
  description: string;
  courses: LiveCourseForPreview[] | undefined;
  href: string;
}

function CourseCardSection({
  title,
  description,
  courses,
  href,
}: CourseCardSectionProps) {
  if (!courses || courses.length === 0) {
    return null;
  }
  return (
    <section className="py-8 laptop:py-14 border-t border-gray-700">
      <section className="px-4 laptop:px-14 mb-8 laptop:mb-4">
        <div className="flex items-center gap-2 laptop:gap-4 mb-2 laptop:mb-4">
          <FontAwesomeIcon
            icon={faSmile}
            className="h-5 w-5 laptop:h-10 laptop:w-10"
          />
          <h3 className="text-lg laptop:text-3xl font-semibold">{title}</h3>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="laptop:text-2xl text-gray-300">{description}</p>
          <NextLink className="text-gray-400 hidden laptop:inline" href={href}>
            ดูทั้งหมด
          </NextLink>
        </div>
      </section>
      <CourseCardSlider padded>
        {courses.map((courseData) => (
          <ResponsiveHoverCard key={courseData.id} courseData={courseData} />
        ))}
      </CourseCardSlider>
    </section>
  );
}

export function ResponsiveHoverCard(props: DefaultHoverCardProps) {
  return (
    <DefaultHoverCard
      className="min-w-[130px] max-w-[130px] h-[175px] laptop:min-w-[220px] laptop:max-w-[220px] laptop:h-[296px]"
      {...props}
    />
  );
}
