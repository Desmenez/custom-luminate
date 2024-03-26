import { GetMyCoursesResponse, LiveCourseForPreview } from "@luminate/rest";

interface MyCourseCardsProps {
  myCourses: GetMyCoursesResponse | null;
}

interface SuggestedCourseCardsProps {
  suggestedCourses: LiveCourseForPreview[] | null;
}

export const mockBanners = [
  {
    id: "1",
    altText: "banner1",
    imageUrl: `https://picsum.photos/id/80/1320/500`,
    linkUrl:
      "https://www.nbcnews.com/tech/tech-news/news-rickroll-meme-death-greatly-exaggerated-flna791074",
  },
  {
    id: "2",
    altText: "banner2",
    imageUrl: `https://picsum.photos/id/81/1320/500`,
    linkUrl:
      "https://www.nbcnews.com/tech/tech-news/news-rickroll-meme-death-greatly-exaggerated-flna791074",
  },
  {
    id: "3",
    altText: "banner3",
    imageUrl: `https://picsum.photos/id/82/1320/500`,
    linkUrl:
      "https://www.nbcnews.com/tech/tech-news/news-rickroll-meme-death-greatly-exaggerated-flna791074",
  },
];

export const mockTutorCards = [
  {
    id: "id-1-tutor",
    tutorId: "1-tutor",
    imageUrl: `https://picsum.photos/id/103/224/134`,
    altText: "tutor1",
  },
  {
    id: "id-2-tutor",
    tutorId: "2-tutor",
    imageUrl: `https://picsum.photos/id/104/224/134`,
    altText: "tutor2",
  },
  {
    id: "id-3-tutor",
    tutorId: "3-tutor",
    imageUrl: `https://picsum.photos/id/99/224/134`,
    altText: "tutor3",
  },
  {
    id: "id-4-tutor",
    tutorId: "4-tutor",
    imageUrl: `https://picsum.photos/id/106/224/134`,
    altText: "tutor4",
  },
  {
    id: "id-5-tutor",
    tutorId: "5-tutor",
    imageUrl: `https://picsum.photos/id/107/224/134`,
    altText: "tutor5",
  },
  {
    id: "id-6-tutor",
    tutorId: "6-tutor",
    imageUrl: `https://picsum.photos/id/98/224/134`,
    altText: "tutor6",
  },
];

export const mockMyCourses: MyCourseCardsProps = {
  myCourses: [
    {
      id: "1",
      type: "ONSITE",
      description: "description",
      name: "course-1",
      subjectId: "subjectId",
      isRecommended: true,
      courseThumbnailUrl: "https://picsum.photos/id/114/220/296",
      courseCoverUrl: "https://picsum.photos/id/116/350/194",
      courseStickerUrl: "https://picsum.photos/id/10/200/90",
      startDate: "2021-09-01T00:00:00Z",
      endDate: "2021-09-01T00:00:00Z",
      liveSessionsDescription: "liveSessionsDescription",
      basePlanType: "FOUNDATION",
      isMyCourse: true,
      onlinePrice: 100,
      onsitePrice: 100,
      subject: {
        code: "code",
        name: "name",
      },
      tutor: {
        displayName: "tutor1",
        tutorIconUrl: "https://picsum.photos/id/117/50",
      },
    },
  ],
};

export const mockSuggestedCourses: SuggestedCourseCardsProps = {
  suggestedCourses: [
    {
      id: "1",
      type: "ONSITE",
      description: "description",
      name: "suggest-course-1",
      subjectId: "subjectId",
      isRecommended: true,
      courseThumbnailUrl: "https://picsum.photos/id/114/220/296",
      courseCoverUrl: "https://picsum.photos/id/116/350/194",
      courseStickerUrl: "https://picsum.photos/id/10/200/90",
      startDate: "2021-09-01T00:00:00Z",
      endDate: "2021-09-01T00:00:00Z",
      liveSessionsDescription: "liveSessionsDescription",
      basePlanType: "FOUNDATION",
      isMyCourse: false,
      onlinePrice: 100,
      onsitePrice: 100,
      subject: {
        code: "code",
        name: "name",
      },
      tutor: {
        displayName: "tutor1",
        tutorIconUrl: "https://picsum.photos/id/117/50",
      },
    },
  ],
};
