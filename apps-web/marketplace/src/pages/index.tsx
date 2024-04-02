// import { withApi } from "@app/core/services";
import { BannerCarousel } from "@app/modules/landing/banner-carousel";
// import { MyCourseCards } from "@app/modules/landing/my-course-cards";
// import { SuggestedCourseCards } from "@app/modules/landing/suggested-course-cards";
import { TutorCarousel } from "@app/modules/landing/tutor-carousel";
import "keen-slider/keen-slider.min.css";

// import { withSSRError } from "@luminate/nextjs";
// import { mockMyCourses, mockSuggestedCourses } from "@app/utils/mock-data";
import { useQuery } from "@tanstack/react-query";
import { Banner } from "./api/mock-api";

// Function to fetch banners from the banner API
const fetchBanners = async () => {
  const response = await fetch(
    "https://6603c2582393662c31cf914a.mockapi.io/api/v1/banner"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Function to fetch tutor cards from the tutor API
const fetchTutorCards = async () => {
  const response = await fetch(
    "https://6603c2582393662c31cf914a.mockapi.io/api/v1/tutor"
  ); // Adjust the endpoint accordingly
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const LandingPage = () => {
  const {
    data: bannersData,
    isLoading: isLoadingBanners,
    error: errorBanners,
  } = useQuery<Banner[]>(["banners"], fetchBanners);

  const {
    data: tutorCardsData,
    isLoading: isLoadingTutorCards,
    error: errorTutorCards,
  } = useQuery(["tutorCards"], fetchTutorCards);

  // Assuming the fetched data is in the format the BannerCarousel expects
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <BannerCarousel banners={bannersData ?? null} />
        <TutorCarousel tutorCards={tutorCardsData} />
      </div>
      {/* <MyCourseCards myCourses={mockMyCourses.myCourses} />
      <SuggestedCourseCards
        suggestedCourses={mockSuggestedCourses.suggestedCourses}
      /> */}
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
