// import { withApi } from "@app/core/services";
import { BannerCarousel } from "@app/modules/landing/banner-carousel";
import { MyCourseCards } from "@app/modules/landing/my-course-cards";
import { SuggestedCourseCards } from "@app/modules/landing/suggested-course-cards";
import { TutorCarousel } from "@app/modules/landing/tutor-carousel";
import "keen-slider/keen-slider.min.css";

// import { withSSRError } from "@luminate/nextjs";
import {
  mockBanners,
  mockMyCourses,
  mockSuggestedCourses,
  mockTutorCards,
} from "@app/utils/mock-data";

export const LandingPage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <BannerCarousel banners={mockBanners} />
        <TutorCarousel tutorCards={mockTutorCards} />
      </div>
      <MyCourseCards myCourses={mockMyCourses.myCourses} />
      <SuggestedCourseCards
        suggestedCourses={mockSuggestedCourses.suggestedCourses}
      />
    </div>
  );
};

// export const getServerSideProps = withApi(async (_context, api) => {
//   try {
//     const [banners, tutorCardsResult, myCoursesResult, suggestedCourses] =
//       await Promise.all([
//         api.banner.getBanners(),
//         api.tutor.getTutorCards(),
//         api.liveCourse.getMyCourses(),
//         api.liveCourse.getSuggestedLiveCourses(),
//       ]);
//     return {
//       props: {
//         banners: banners.status === 200 ? banners.body : null,
//         tutorCards:
//           tutorCardsResult.status === 200 ? tutorCardsResult.body : null,
//         myCourses: myCoursesResult.status === 200 ? myCoursesResult.body : null,
//         suggestedCourses:
//           suggestedCourses.status === 200 ? suggestedCourses.body : null,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         banners: null,
//         tutorCards: null,
//         myCourses: null,
//         suggestedCourses: null,
//       },
//     };
//   }
// });

export default LandingPage;
