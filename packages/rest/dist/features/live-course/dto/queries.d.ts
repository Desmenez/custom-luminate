import { z } from 'zod';
export declare const LiveCourseForPreview: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    isMyCourse: z.ZodLiteral<false>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}>;
export type LiveCourseForPreview = z.infer<typeof LiveCourseForPreview>;
export declare const UserStatus: z.ZodObject<{
    isAuthenticated: z.ZodBoolean;
    isEnrolled: z.ZodBoolean;
    isSubscribed: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isAuthenticated: boolean;
    isEnrolled: boolean;
    isSubscribed: boolean;
}, {
    isAuthenticated: boolean;
    isEnrolled: boolean;
    isSubscribed: boolean;
}>;
export type UserStatus = z.infer<typeof UserStatus>;
export declare const UpcomingSession: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    startTime: z.ZodDate;
    isLiving: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    startTime: Date;
    isLiving: boolean;
}, {
    id: string;
    name: string;
    startTime: Date;
    isLiving: boolean;
}>>;
export type UpcomingSession = z.infer<typeof UpcomingSession>;
export declare const LivingSession: z.ZodNullable<z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    startTime: z.ZodDate;
    endTime: z.ZodDate;
    streamInputId: z.ZodString;
    streamKey: z.ZodString;
    videoId: z.ZodNullable<z.ZodString>;
    liveCourseId: z.ZodString;
    isQuizClosed: z.ZodBoolean;
    isTrialSession: z.ZodBoolean;
    sheetUrl: z.ZodNullable<z.ZodString>;
    exerciseId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "id" | "name" | "startTime">, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    startTime: Date;
}, {
    id: string;
    name: string;
    startTime: Date;
}>>;
export type LivingSession = z.infer<typeof LivingSession>;
export declare const LiveCourseResponse: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    aboutCourse: z.ZodNullable<z.ZodString>;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    courseHeroUrl: z.ZodNullable<z.ZodString>;
    courseHeroMobileUrl: z.ZodNullable<z.ZodString>;
    enrolled: z.ZodNumber;
    paymentRemark: z.ZodNullable<z.ZodString>;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    hasShipping: z.ZodBoolean;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourseRequiresSubscription: z.ZodBoolean;
    exerciseRequiresSubscription: z.ZodBoolean;
    examTutorialRequiresSubscription: z.ZodBoolean;
    examRequiresSubscription: z.ZodBoolean;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    enableRecordingPlayback: z.ZodBoolean;
    recordingRequiresSubscription: z.ZodBoolean;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    originalOnlinePrice: z.ZodNullable<z.ZodNumber>;
    originalOnsitePrice: z.ZodNullable<z.ZodNumber>;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    shelfLifeDuration: z.ZodNullable<z.ZodNumber>;
    shelfLifeUnit: z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>;
    chatRooms: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
        liveCourseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }, {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }>, "many">;
    upcomingSession: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        startTime: z.ZodDate;
        isLiving: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }>>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        experience: z.ZodNullable<z.ZodString>;
        organizationName: z.ZodNullable<z.ZodString>;
        id: z.ZodString;
        tutorFileUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        displayName: string | null;
        tutorIconUrl: string | null;
        experience: string | null;
        organizationName: string | null;
        tutorFileUrl: string | null;
    }, {
        id: string;
        name: string;
        displayName: string | null;
        tutorIconUrl: string | null;
        experience: string | null;
        organizationName: string | null;
        tutorFileUrl: string | null;
    }>>;
    subject: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodString;
        mainColor: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string;
        mainColor: string | null;
    }, {
        code: string;
        id: string;
        name: string;
        mainColor: string | null;
    }>>;
    liveCourseOnUser: z.ZodNullable<z.ZodObject<{
        userId: z.ZodString;
        liveCourseId: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        expiresAt: z.ZodNullable<z.ZodDate>;
        learningType: z.ZodNativeEnum<{
            ONLINE: "ONLINE";
            ONSITE: "ONSITE";
        }>;
        receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
            SHIPPING: "SHIPPING";
            PICKUP: "PICKUP";
        }>>;
        shippingAddressId: z.ZodNullable<z.ZodString>;
        chargeId: z.ZodNullable<z.ZodString>;
        recentLiveSessionId: z.ZodNullable<z.ZodString>;
        recentLiveSessionTimestampSeconds: z.ZodNullable<z.ZodNumber>;
        recentLiveSessionVideoLengthSeconds: z.ZodNullable<z.ZodNumber>;
        shippingAddress: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            userId: z.ZodString;
            name: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
            province: z.ZodString;
            district: z.ZodString;
            subdistrict: z.ZodString;
            postalCode: z.ZodString;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        }, {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        shippingAddressId: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        chargeId: string | null;
        recentLiveSessionId: string | null;
        recentLiveSessionTimestampSeconds: number | null;
        recentLiveSessionVideoLengthSeconds: number | null;
    }, {
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        shippingAddressId: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        chargeId: string | null;
        recentLiveSessionId: string | null;
        recentLiveSessionTimestampSeconds: number | null;
        recentLiveSessionVideoLengthSeconds: number | null;
    }>>;
    features: z.ZodArray<z.ZodNativeEnum<{
        readonly LIVE: "LIVE";
        readonly ONSITE: "ONSITE";
        readonly ONLINE: "ONLINE";
        readonly FUNDAMENTAL: "FUNDAMENTAL";
        readonly RECORDING: "RECORDING";
        readonly EXERCISE: "EXERCISE";
        readonly EXAM: "EXAM";
        readonly QUIZ: "QUIZ";
        readonly SUBSCRIPTION: "SUBSCRIPTION";
    }>, "many">;
    userStatus: z.ZodObject<{
        isAuthenticated: z.ZodBoolean;
        isEnrolled: z.ZodBoolean;
        isSubscribed: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        isAuthenticated: boolean;
        isEnrolled: boolean;
        isSubscribed: boolean;
    }, {
        isAuthenticated: boolean;
        isEnrolled: boolean;
        isSubscribed: boolean;
    }>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    lastEnrollmentDate: z.ZodNullable<z.ZodString>;
    expiresAt: z.ZodNullable<z.ZodString>;
    suggestedNextCourses: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        id: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
        subjectId: z.ZodString;
        isRecommended: z.ZodBoolean;
        courseThumbnailUrl: z.ZodNullable<z.ZodString>;
        courseCoverUrl: z.ZodNullable<z.ZodString>;
        courseStickerUrl: z.ZodNullable<z.ZodString>;
        startDate: z.ZodDate;
        endDate: z.ZodDate;
        liveSessionsDescription: z.ZodNullable<z.ZodString>;
        basePlanType: z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>;
        onlinePrice: z.ZodNullable<z.ZodNumber>;
        onsitePrice: z.ZodNullable<z.ZodNumber>;
        isMyCourse: z.ZodLiteral<false>;
        tutor: z.ZodNullable<z.ZodObject<{
            tutorIconUrl: z.ZodNullable<z.ZodString>;
            displayName: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }>>;
        subject: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            name: string;
        }, {
            code: string;
            name: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }>, "many">;
    suggestedPrerequisiteCourses: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        id: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
        subjectId: z.ZodString;
        isRecommended: z.ZodBoolean;
        courseThumbnailUrl: z.ZodNullable<z.ZodString>;
        courseCoverUrl: z.ZodNullable<z.ZodString>;
        courseStickerUrl: z.ZodNullable<z.ZodString>;
        startDate: z.ZodDate;
        endDate: z.ZodDate;
        liveSessionsDescription: z.ZodNullable<z.ZodString>;
        basePlanType: z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>;
        onlinePrice: z.ZodNullable<z.ZodNumber>;
        onsitePrice: z.ZodNullable<z.ZodNumber>;
        isMyCourse: z.ZodLiteral<false>;
        tutor: z.ZodNullable<z.ZodObject<{
            tutorIconUrl: z.ZodNullable<z.ZodString>;
            displayName: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }>>;
        subject: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            name: string;
        }, {
            code: string;
            name: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }>, "many">;
    fundamentalCourses: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        subject: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
        }, {
            code: string;
        }>>;
        sheetUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        sheetUrl: string | null;
        subject: {
            code: string;
        } | null;
    }, {
        id: string;
        name: string;
        sheetUrl: string | null;
        subject: {
            code: string;
        } | null;
    }>, "many">;
    exams: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>, "many">;
    examTutorials: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        subject: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
        }, {
            code: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        subject: {
            code: string;
        } | null;
    }, {
        id: string;
        name: string;
        subject: {
            code: string;
        } | null;
    }>, "many">;
    mockExams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        name: string;
    }, {
        id: string;
        url: string;
        name: string;
    }>, "many">;
    liveSessions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
        sheetUrl: z.ZodNullable<z.ZodString>;
        isTrialSession: z.ZodBoolean;
        startTime: z.ZodString;
        endTime: z.ZodString;
        exercise: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            subject: z.ZodNullable<z.ZodObject<{
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
            }, {
                code: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }, {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }>>;
        timestampSeconds: z.ZodNullable<z.ZodNumber>;
        videoLengthSeconds: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        name: string;
        sheetUrl: string | null;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        timestampSeconds: number | null;
        videoLengthSeconds: number | null;
        exercise: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        } | null;
    }, {
        id: string;
        description: string;
        name: string;
        sheetUrl: string | null;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        timestampSeconds: number | null;
        videoLengthSeconds: number | null;
        exercise: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        } | null;
    }>, "many">;
    liveTrialSessionId: z.ZodNullable<z.ZodString>;
    liveCourseImageDescription: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        liveCourseId: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNumber;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
    }, {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    startDate: string;
    endDate: string;
    enrolled: number;
    lastEnrollmentDate: string | null;
    paymentRemark: string | null;
    liveSessionsDescription: string | null;
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    exerciseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    enableRecordingPlayback: boolean;
    recordingRequiresSubscription: boolean;
    onlinePrice: number | null;
    onsitePrice: number | null;
    originalOnlinePrice: number | null;
    originalOnsitePrice: number | null;
    onsiteAddress: string | null;
    expiresAt: string | null;
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        id: string;
        description: string;
        name: string;
        sheetUrl: string | null;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        timestampSeconds: number | null;
        videoLengthSeconds: number | null;
        exercise: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        } | null;
    }[];
    fundamentalCourses: {
        id: string;
        name: string;
        sheetUrl: string | null;
        subject: {
            code: string;
        } | null;
    }[];
    mockExams: {
        id: string;
        url: string;
        name: string;
    }[];
    chatRooms: {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }[];
    suggestedNextCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }[];
    suggestedPrerequisiteCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }[];
    liveCourseImageDescription: {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
    }[];
    subject: {
        code: string;
        id: string;
        name: string;
        mainColor: string | null;
    } | null;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    tutor: {
        id: string;
        name: string;
        displayName: string | null;
        tutorIconUrl: string | null;
        experience: string | null;
        organizationName: string | null;
        tutorFileUrl: string | null;
    } | null;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    liveCourseOnUser: {
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        shippingAddressId: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        chargeId: string | null;
        recentLiveSessionId: string | null;
        recentLiveSessionTimestampSeconds: number | null;
        recentLiveSessionVideoLengthSeconds: number | null;
    } | null;
    userStatus: {
        isAuthenticated: boolean;
        isEnrolled: boolean;
        isSubscribed: boolean;
    };
    exams: {
        code: string;
        name: string;
    }[];
    examTutorials: {
        id: string;
        name: string;
        subject: {
            code: string;
        } | null;
    }[];
    liveTrialSessionId: string | null;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    startDate: string;
    endDate: string;
    enrolled: number;
    lastEnrollmentDate: string | null;
    paymentRemark: string | null;
    liveSessionsDescription: string | null;
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    exerciseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    enableRecordingPlayback: boolean;
    recordingRequiresSubscription: boolean;
    onlinePrice: number | null;
    onsitePrice: number | null;
    originalOnlinePrice: number | null;
    originalOnsitePrice: number | null;
    onsiteAddress: string | null;
    expiresAt: string | null;
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        id: string;
        description: string;
        name: string;
        sheetUrl: string | null;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        timestampSeconds: number | null;
        videoLengthSeconds: number | null;
        exercise: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        } | null;
    }[];
    fundamentalCourses: {
        id: string;
        name: string;
        sheetUrl: string | null;
        subject: {
            code: string;
        } | null;
    }[];
    mockExams: {
        id: string;
        url: string;
        name: string;
    }[];
    chatRooms: {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }[];
    suggestedNextCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }[];
    suggestedPrerequisiteCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        description: string;
        name: string;
        subjectId: string;
        isRecommended: boolean;
        courseThumbnailUrl: string | null;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: Date;
        endDate: Date;
        liveSessionsDescription: string | null;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        onlinePrice: number | null;
        onsitePrice: number | null;
        subject: {
            code: string;
            name: string;
        } | null;
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
        isMyCourse: false;
    }[];
    liveCourseImageDescription: {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
    }[];
    subject: {
        code: string;
        id: string;
        name: string;
        mainColor: string | null;
    } | null;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    tutor: {
        id: string;
        name: string;
        displayName: string | null;
        tutorIconUrl: string | null;
        experience: string | null;
        organizationName: string | null;
        tutorFileUrl: string | null;
    } | null;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    liveCourseOnUser: {
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        shippingAddressId: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        chargeId: string | null;
        recentLiveSessionId: string | null;
        recentLiveSessionTimestampSeconds: number | null;
        recentLiveSessionVideoLengthSeconds: number | null;
    } | null;
    userStatus: {
        isAuthenticated: boolean;
        isEnrolled: boolean;
        isSubscribed: boolean;
    };
    exams: {
        code: string;
        name: string;
    }[];
    examTutorials: {
        id: string;
        name: string;
        subject: {
            code: string;
        } | null;
    }[];
    liveTrialSessionId: string | null;
}>;
export type LiveCourseResponse = z.infer<typeof LiveCourseResponse>;
export declare const AdminLiveCourseResponse: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    aboutCourse: z.ZodNullable<z.ZodString>;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    courseHeroUrl: z.ZodNullable<z.ZodString>;
    courseHeroMobileUrl: z.ZodNullable<z.ZodString>;
    tutorId: z.ZodString;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    enrolled: z.ZodNumber;
    lastEnrollmentDate: z.ZodNullable<z.ZodDate>;
    grades: z.ZodArray<z.ZodNumber, "many">;
    paymentRemark: z.ZodNullable<z.ZodString>;
    fundamentalCoursesDescription: z.ZodNullable<z.ZodString>;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    examsDescription: z.ZodNullable<z.ZodString>;
    mockExamsDescription: z.ZodNullable<z.ZodString>;
    isCourseMaterialUploaded: z.ZodBoolean;
    hasShipping: z.ZodBoolean;
    shippingPrice: z.ZodNumber;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourseRequiresSubscription: z.ZodBoolean;
    exerciseRequiresSubscription: z.ZodBoolean;
    examTutorialRequiresSubscription: z.ZodBoolean;
    examRequiresSubscription: z.ZodBoolean;
    mockExamRequiresSubscription: z.ZodBoolean;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    isActive: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    playbackDurationLimit: z.ZodNullable<z.ZodNumber>;
    limitType: z.ZodNativeEnum<{
        MINUTE: "MINUTE";
        PERCENT: "PERCENT";
        NONE: "NONE";
    }>;
    enableRecordingPlayback: z.ZodBoolean;
    recordingRequiresSubscription: z.ZodBoolean;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    originalOnlinePrice: z.ZodNullable<z.ZodNumber>;
    originalOnsitePrice: z.ZodNullable<z.ZodNumber>;
    onsiteMaxSeats: z.ZodNumber;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    hasQuiz: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodDate>;
    shelfLifeDuration: z.ZodNullable<z.ZodNumber>;
    shelfLifeUnit: z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>;
    courseThumbnailUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        url: string;
    }, {
        token: string;
        url: string;
    }>;
    courseCoverUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        url: string;
    }, {
        token: string;
        url: string;
    }>;
    courseStickerUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        url: string;
    }, {
        token: string;
        url: string;
    }>;
    courseHeroUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        url: string;
    }, {
        token: string;
        url: string;
    }>;
    courseHeroMobileUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        token: string;
        url: string;
    }, {
        token: string;
        url: string;
    }>;
    tutor: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>;
    subject: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>;
    chatRooms: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
        liveCourseId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }, {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }>, "many">;
    addons: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        liveCourseId: z.ZodString;
        name: z.ZodString;
        price: z.ZodNumber;
        durationDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        liveCourseId: string;
        name: string;
        price: number;
        durationDays: number;
    }, {
        id: string;
        liveCourseId: string;
        name: string;
        price: number;
        durationDays: number;
    }>, "many">;
    fundamentalCourses: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        liveCourseId: z.ZodString;
        fundamentalCourseId: z.ZodString;
        sheetUrl: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        liveCourseId: string;
        name: string;
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }, {
        id: string;
        liveCourseId: string;
        name: string;
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }>, "many">;
    liveSessions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        liveCourseId: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        sheetUrl: z.ZodNullable<z.ZodString>;
        startTime: z.ZodDate;
        endTime: z.ZodDate;
        streamInputId: z.ZodString;
        streamKey: z.ZodString;
        videoId: z.ZodNullable<z.ZodString>;
        isQuizClosed: z.ZodBoolean;
        isTrialSession: z.ZodBoolean;
        exerciseId: z.ZodNullable<z.ZodString>;
        sheetUploadUrl: z.ZodObject<{
            url: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            url: string;
        }, {
            token: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        liveCourseId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sheetUrl: string | null;
        startTime: Date;
        endTime: Date;
        streamInputId: string;
        streamKey: string;
        videoId: string | null;
        isQuizClosed: boolean;
        isTrialSession: boolean;
        exerciseId: string | null;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }, {
        id: string;
        description: string;
        liveCourseId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sheetUrl: string | null;
        startTime: Date;
        endTime: Date;
        streamInputId: string;
        streamKey: string;
        videoId: string | null;
        isQuizClosed: boolean;
        isTrialSession: boolean;
        exerciseId: string | null;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }>, "many">;
    exams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    examTutorials: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    mockExams: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    suggestedNextCourses: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    suggestedPrerequisiteCourses: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    imageDescriptions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        liveCourseId: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNumber;
        imageUploadUrl: z.ZodObject<{
            url: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
            url: string;
        }, {
            token: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }, {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    tutorId: string;
    startDate: Date;
    endDate: Date;
    enrolled: number;
    lastEnrollmentDate: Date | null;
    grades: number[];
    paymentRemark: string | null;
    fundamentalCoursesDescription: string | null;
    liveSessionsDescription: string | null;
    examsDescription: string | null;
    mockExamsDescription: string | null;
    isCourseMaterialUploaded: boolean;
    hasShipping: boolean;
    shippingPrice: number;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    exerciseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    mockExamRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    playbackDurationLimit: number | null;
    limitType: "MINUTE" | "PERCENT" | "NONE";
    enableRecordingPlayback: boolean;
    recordingRequiresSubscription: boolean;
    onlinePrice: number | null;
    onsitePrice: number | null;
    originalOnlinePrice: number | null;
    originalOnsitePrice: number | null;
    onsiteMaxSeats: number;
    onsiteAddress: string | null;
    hasQuiz: boolean;
    expiresAt: Date | null;
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        id: string;
        description: string;
        liveCourseId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sheetUrl: string | null;
        startTime: Date;
        endTime: Date;
        streamInputId: string;
        streamKey: string;
        videoId: string | null;
        isQuizClosed: boolean;
        isTrialSession: boolean;
        exerciseId: string | null;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    fundamentalCourses: {
        id: string;
        liveCourseId: string;
        name: string;
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }[];
    mockExams: {
        id: string;
        name: string;
    }[];
    chatRooms: {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }[];
    addons: {
        id: string;
        liveCourseId: string;
        name: string;
        price: number;
        durationDays: number;
    }[];
    suggestedNextCourses: {
        id: string;
        name: string;
    }[];
    suggestedPrerequisiteCourses: {
        id: string;
        name: string;
    }[];
    subject: {
        id: string;
        name: string;
    };
    tutor: {
        id: string;
        name: string;
    };
    courseThumbnailUploadUrl: {
        token: string;
        url: string;
    };
    courseCoverUploadUrl: {
        token: string;
        url: string;
    };
    courseHeroUploadUrl: {
        token: string;
        url: string;
    };
    courseHeroMobileUploadUrl: {
        token: string;
        url: string;
    };
    exams: {
        id: string;
        name: string;
    }[];
    examTutorials: {
        id: string;
        name: string;
    }[];
    courseStickerUploadUrl: {
        token: string;
        url: string;
    };
    imageDescriptions: {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }[];
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    tutorId: string;
    startDate: Date;
    endDate: Date;
    enrolled: number;
    lastEnrollmentDate: Date | null;
    grades: number[];
    paymentRemark: string | null;
    fundamentalCoursesDescription: string | null;
    liveSessionsDescription: string | null;
    examsDescription: string | null;
    mockExamsDescription: string | null;
    isCourseMaterialUploaded: boolean;
    hasShipping: boolean;
    shippingPrice: number;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    exerciseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    mockExamRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    playbackDurationLimit: number | null;
    limitType: "MINUTE" | "PERCENT" | "NONE";
    enableRecordingPlayback: boolean;
    recordingRequiresSubscription: boolean;
    onlinePrice: number | null;
    onsitePrice: number | null;
    originalOnlinePrice: number | null;
    originalOnsitePrice: number | null;
    onsiteMaxSeats: number;
    onsiteAddress: string | null;
    hasQuiz: boolean;
    expiresAt: Date | null;
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        id: string;
        description: string;
        liveCourseId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sheetUrl: string | null;
        startTime: Date;
        endTime: Date;
        streamInputId: string;
        streamKey: string;
        videoId: string | null;
        isQuizClosed: boolean;
        isTrialSession: boolean;
        exerciseId: string | null;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    fundamentalCourses: {
        id: string;
        liveCourseId: string;
        name: string;
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }[];
    mockExams: {
        id: string;
        name: string;
    }[];
    chatRooms: {
        id: string;
        platform: "FACEBOOK" | "LINE";
        url: string;
        liveCourseId: string;
    }[];
    addons: {
        id: string;
        liveCourseId: string;
        name: string;
        price: number;
        durationDays: number;
    }[];
    suggestedNextCourses: {
        id: string;
        name: string;
    }[];
    suggestedPrerequisiteCourses: {
        id: string;
        name: string;
    }[];
    subject: {
        id: string;
        name: string;
    };
    tutor: {
        id: string;
        name: string;
    };
    courseThumbnailUploadUrl: {
        token: string;
        url: string;
    };
    courseCoverUploadUrl: {
        token: string;
        url: string;
    };
    courseHeroUploadUrl: {
        token: string;
        url: string;
    };
    courseHeroMobileUploadUrl: {
        token: string;
        url: string;
    };
    exams: {
        id: string;
        name: string;
    }[];
    examTutorials: {
        id: string;
        name: string;
    }[];
    courseStickerUploadUrl: {
        token: string;
        url: string;
    };
    imageDescriptions: {
        id: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        altText: string | null;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }[];
}>;
export type AdminLiveCourseResponse = z.infer<typeof AdminLiveCourseResponse>;
export declare const FindUniqueLiveCoursePathParams: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type FindUniqueLiveCoursePathParams = z.infer<typeof FindUniqueLiveCoursePathParams>;
export declare const FindManyLiveCourseWhereArgs: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    liveCourseType: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>, "many">>;
    tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    basePlanTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>, "many">>;
    subjectIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isRecommended: z.ZodOptional<z.ZodBoolean>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    startDate: z.ZodOptional<z.ZodDate>;
    endDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
    tutorIds?: string[] | undefined;
    grades?: number[] | undefined;
    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
    subjectIds?: string[] | undefined;
    isRecommended?: boolean | undefined;
    isActive?: boolean | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}, {
    name?: string | undefined;
    liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
    tutorIds?: string[] | undefined;
    grades?: number[] | undefined;
    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
    subjectIds?: string[] | undefined;
    isRecommended?: boolean | undefined;
    isActive?: boolean | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
}>;
export type FindManyLiveCourseWhereArgs = z.infer<typeof FindManyLiveCourseWhereArgs>;
export declare const FindManyLiveCourseOrderByArgs: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    deletedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    startDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    popularity: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    price: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    deletedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    isActive?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    popularity?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
}, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    deletedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    isActive?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    popularity?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
}>;
export type FindManyLiveCourseOrderByArgs = z.infer<typeof FindManyLiveCourseOrderByArgs>;
export declare const FindManyLiveCourseQueryParams: z.ZodOptional<z.ZodObject<{
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        liveCourseType: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>, "many">>;
        tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        basePlanTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>, "many">>;
        subjectIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        isRecommended: z.ZodOptional<z.ZodBoolean>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        startDate: z.ZodOptional<z.ZodDate>;
        endDate: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
        tutorIds?: string[] | undefined;
        grades?: number[] | undefined;
        basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
        subjectIds?: string[] | undefined;
        isRecommended?: boolean | undefined;
        isActive?: boolean | undefined;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }, {
        name?: string | undefined;
        liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
        tutorIds?: string[] | undefined;
        grades?: number[] | undefined;
        basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
        subjectIds?: string[] | undefined;
        isRecommended?: boolean | undefined;
        isActive?: boolean | undefined;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    }>>;
    orderBy: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        deletedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        startDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        popularity: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        price: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        deletedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        popularity?: "asc" | "desc" | undefined;
        price?: "asc" | "desc" | undefined;
    }, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        deletedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        popularity?: "asc" | "desc" | undefined;
        price?: "asc" | "desc" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    where?: {
        name?: string | undefined;
        liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
        tutorIds?: string[] | undefined;
        grades?: number[] | undefined;
        basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
        subjectIds?: string[] | undefined;
        isRecommended?: boolean | undefined;
        isActive?: boolean | undefined;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    } | undefined;
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        deletedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        popularity?: "asc" | "desc" | undefined;
        price?: "asc" | "desc" | undefined;
    } | undefined;
}, {
    where?: {
        name?: string | undefined;
        liveCourseType?: ("LIVE" | "FUSION" | "TAPE" | "ONSITE")[] | undefined;
        tutorIds?: string[] | undefined;
        grades?: number[] | undefined;
        basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
        subjectIds?: string[] | undefined;
        isRecommended?: boolean | undefined;
        isActive?: boolean | undefined;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
    } | undefined;
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        deletedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        popularity?: "asc" | "desc" | undefined;
        price?: "asc" | "desc" | undefined;
    } | undefined;
}>>;
export type FindManyLiveCourseQueryParams = z.infer<typeof FindManyLiveCourseQueryParams>;
export declare const IsLiveCourseUserCommentedInput: z.ZodObject<{
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
}, {
    liveCourseId: string;
}>;
export type IsLiveCourseUserCommentedInput = z.infer<typeof IsLiveCourseUserCommentedInput>;
export declare const IsLiveCourseUserCommentedResponse: z.ZodObject<{
    isCommented: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isCommented: boolean;
}, {
    isCommented: boolean;
}>;
export type IsLiveCourseUserCommentedResponse = z.infer<typeof IsLiveCourseUserCommentedResponse>;
export declare const GetLiveCourseCommentsArgs: z.ZodObject<{
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    take?: number | undefined;
    skip?: number | undefined;
}, {
    liveCourseId: string;
    take?: number | undefined;
    skip?: number | undefined;
}>;
export type GetLiveCourseCommentsArgs = z.infer<typeof GetLiveCourseCommentsArgs>;
export declare const GetLiveCourseCommentsResponse: z.ZodObject<{
    comments: z.ZodArray<z.ZodObject<{
        description: z.ZodNullable<z.ZodString>;
        userId: z.ZodString;
        liveCourseId: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        stars: z.ZodNumber;
        userUpdatedAt: z.ZodNullable<z.ZodDate>;
        isMyComment: z.ZodBoolean;
        user: z.ZodNullable<z.ZodObject<{
            displayName: z.ZodString;
            profileUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            profileUrl: string | null;
            displayName: string;
        }, {
            profileUrl: string | null;
            displayName: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
        user: {
            profileUrl: string | null;
            displayName: string;
        } | null;
        isMyComment: boolean;
    }, {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
        user: {
            profileUrl: string | null;
            displayName: string;
        } | null;
        isMyComment: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    comments: {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
        user: {
            profileUrl: string | null;
            displayName: string;
        } | null;
        isMyComment: boolean;
    }[];
}, {
    comments: {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
        user: {
            profileUrl: string | null;
            displayName: string;
        } | null;
        isMyComment: boolean;
    }[];
}>;
export type GetLiveCourseCommentsResponse = z.infer<typeof GetLiveCourseCommentsResponse>;
export declare const GetLiveCourseCommentsTotalAndRatingResponse: z.ZodObject<{
    total: z.ZodNumber;
    rating: z.ZodNumber;
    isUserCommented: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    total: number;
    rating: number;
    isUserCommented: boolean;
}, {
    total: number;
    rating: number;
    isUserCommented: boolean;
}>;
export type GetLiveCourseCommentsTotalAndRatingResponse = z.infer<typeof GetLiveCourseCommentsTotalAndRatingResponse>;
export declare const GetLiveCoursePackagesPathParams: z.ZodObject<{
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
}, {
    liveCourseId: string;
}>;
export type GetLiveCoursePackagesPathParams = z.infer<typeof GetLiveCoursePackagesPathParams>;
export declare const GetLiveCoursePackagesResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    liveCourseId: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    price: z.ZodNumber;
    duration: z.ZodNumber;
    packageType: z.ZodNativeEnum<{
        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
    }>;
    durationUnit: z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
    }>;
    isActive: z.ZodBoolean;
    hasShipping: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string | null;
    liveCourseId: string;
    hasShipping: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}, {
    id: string;
    description: string | null;
    liveCourseId: string;
    hasShipping: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}>, "many">;
export type GetLiveCoursePackagesResponse = z.infer<typeof GetLiveCoursePackagesResponse>;
export declare const GetSuggestedLiveCoursesResponse: z.ZodArray<z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    isMyCourse: z.ZodLiteral<false>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}>, "many">;
export type GetSuggestedLiveCoursesResponse = z.infer<typeof GetSuggestedLiveCoursesResponse>;
export declare const MyLiveCourseForPreview: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    isMyCourse: z.ZodLiteral<true>;
    updatedAt: z.ZodDate;
    upcomingSession: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        startTime: z.ZodDate;
        isLiving: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }>>;
    recentLiveSessionId: z.ZodNullable<z.ZodString>;
    recentLiveSessionTimestampSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionVideoLengthSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionName: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}>;
export type MyLiveCourseForPreview = z.infer<typeof MyLiveCourseForPreview>;
export declare const GetMyCoursesQueryParams: z.ZodObject<{
    take: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    take?: number | undefined;
}, {
    take?: number | undefined;
}>;
export declare const GetMyCoursesResponse: z.ZodArray<z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    isMyCourse: z.ZodLiteral<true>;
    updatedAt: z.ZodDate;
    upcomingSession: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        startTime: z.ZodDate;
        isLiving: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }>>;
    recentLiveSessionId: z.ZodNullable<z.ZodString>;
    recentLiveSessionTimestampSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionVideoLengthSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionName: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}>, "many">;
export type GetMyCoursesResponse = z.infer<typeof GetMyCoursesResponse>;
export declare const FindManyLiveCourseResponse: z.ZodArray<z.ZodDiscriminatedUnion<"isMyCourse", [z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    isMyCourse: z.ZodLiteral<false>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    onlinePrice: number | null;
    onsitePrice: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: false;
}>, z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    subject: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>>;
    tutor: z.ZodNullable<z.ZodObject<{
        tutorIconUrl: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }, {
        displayName: string | null;
        tutorIconUrl: string | null;
    }>>;
    isMyCourse: z.ZodLiteral<true>;
    updatedAt: z.ZodDate;
    upcomingSession: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        startTime: z.ZodDate;
        isLiving: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }, {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    }>>;
    recentLiveSessionId: z.ZodNullable<z.ZodString>;
    recentLiveSessionTimestampSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionVideoLengthSeconds: z.ZodNullable<z.ZodNumber>;
    recentLiveSessionName: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    subjectId: string;
    isRecommended: boolean;
    courseThumbnailUrl: string | null;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: Date;
    endDate: Date;
    liveSessionsDescription: string | null;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
    updatedAt: Date;
    onlinePrice: number | null;
    onsitePrice: number | null;
    recentLiveSessionId: string | null;
    recentLiveSessionTimestampSeconds: number | null;
    recentLiveSessionVideoLengthSeconds: number | null;
    subject: {
        code: string;
        name: string;
    } | null;
    tutor: {
        displayName: string | null;
        tutorIconUrl: string | null;
    } | null;
    isMyCourse: true;
    upcomingSession: {
        id: string;
        name: string;
        startTime: Date;
        isLiving: boolean;
    } | null;
    recentLiveSessionName: string | null;
}>]>, "many">;
export type FindManyLiveCourseResponse = z.infer<typeof FindManyLiveCourseResponse>;
export declare const ExpiredCoursePreview: z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    aboutCourse: z.ZodNullable<z.ZodString>;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    courseHeroUrl: z.ZodNullable<z.ZodString>;
    courseHeroMobileUrl: z.ZodNullable<z.ZodString>;
    tutorId: z.ZodString;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    enrolled: z.ZodNumber;
    lastEnrollmentDate: z.ZodNullable<z.ZodDate>;
    grades: z.ZodArray<z.ZodNumber, "many">;
    paymentRemark: z.ZodNullable<z.ZodString>;
    fundamentalCoursesDescription: z.ZodNullable<z.ZodString>;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    examsDescription: z.ZodNullable<z.ZodString>;
    mockExamsDescription: z.ZodNullable<z.ZodString>;
    isCourseMaterialUploaded: z.ZodBoolean;
    hasShipping: z.ZodBoolean;
    shippingPrice: z.ZodNumber;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourseRequiresSubscription: z.ZodBoolean;
    exerciseRequiresSubscription: z.ZodBoolean;
    examTutorialRequiresSubscription: z.ZodBoolean;
    examRequiresSubscription: z.ZodBoolean;
    mockExamRequiresSubscription: z.ZodBoolean;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    isActive: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    playbackDurationLimit: z.ZodNullable<z.ZodNumber>;
    limitType: z.ZodNativeEnum<{
        MINUTE: "MINUTE";
        PERCENT: "PERCENT";
        NONE: "NONE";
    }>;
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    enableRecordingPlayback: z.ZodBoolean;
    recordingRequiresSubscription: z.ZodBoolean;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    originalOnlinePrice: z.ZodNullable<z.ZodNumber>;
    originalOnsitePrice: z.ZodNullable<z.ZodNumber>;
    onsiteMaxSeats: z.ZodNumber;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    hasQuiz: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodDate>;
    shelfLifeDuration: z.ZodNullable<z.ZodNumber>;
    shelfLifeUnit: z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>;
}, "id" | "name" | "courseThumbnailUrl">, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    courseThumbnailUrl: string | null;
}, {
    id: string;
    name: string;
    courseThumbnailUrl: string | null;
}>;
export type ExpiredCoursePreview = z.infer<typeof ExpiredCoursePreview>;
export declare const GetMyExpiredCoursesResponse: z.ZodArray<z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    aboutCourse: z.ZodNullable<z.ZodString>;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    courseThumbnailUrl: z.ZodNullable<z.ZodString>;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    courseHeroUrl: z.ZodNullable<z.ZodString>;
    courseHeroMobileUrl: z.ZodNullable<z.ZodString>;
    tutorId: z.ZodString;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    enrolled: z.ZodNumber;
    lastEnrollmentDate: z.ZodNullable<z.ZodDate>;
    grades: z.ZodArray<z.ZodNumber, "many">;
    paymentRemark: z.ZodNullable<z.ZodString>;
    fundamentalCoursesDescription: z.ZodNullable<z.ZodString>;
    liveSessionsDescription: z.ZodNullable<z.ZodString>;
    examsDescription: z.ZodNullable<z.ZodString>;
    mockExamsDescription: z.ZodNullable<z.ZodString>;
    isCourseMaterialUploaded: z.ZodBoolean;
    hasShipping: z.ZodBoolean;
    shippingPrice: z.ZodNumber;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourseRequiresSubscription: z.ZodBoolean;
    exerciseRequiresSubscription: z.ZodBoolean;
    examTutorialRequiresSubscription: z.ZodBoolean;
    examRequiresSubscription: z.ZodBoolean;
    mockExamRequiresSubscription: z.ZodBoolean;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
    isActive: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    playbackDurationLimit: z.ZodNullable<z.ZodNumber>;
    limitType: z.ZodNativeEnum<{
        MINUTE: "MINUTE";
        PERCENT: "PERCENT";
        NONE: "NONE";
    }>;
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    enableRecordingPlayback: z.ZodBoolean;
    recordingRequiresSubscription: z.ZodBoolean;
    onlinePrice: z.ZodNullable<z.ZodNumber>;
    onsitePrice: z.ZodNullable<z.ZodNumber>;
    originalOnlinePrice: z.ZodNullable<z.ZodNumber>;
    originalOnsitePrice: z.ZodNullable<z.ZodNumber>;
    onsiteMaxSeats: z.ZodNumber;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    hasQuiz: z.ZodBoolean;
    expiresAt: z.ZodNullable<z.ZodDate>;
    shelfLifeDuration: z.ZodNullable<z.ZodNumber>;
    shelfLifeUnit: z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>;
}, "id" | "name" | "courseThumbnailUrl">, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    courseThumbnailUrl: string | null;
}, {
    id: string;
    name: string;
    courseThumbnailUrl: string | null;
}>, "many">;
export type GetMyExpiredCoursesResponse = z.infer<typeof GetMyExpiredCoursesResponse>;
export declare const FindManyLiveCourseAdminWhereArgs: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    liveCourseType: z.ZodOptional<z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>>;
    isRecommended: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
    isRecommended?: boolean | undefined;
}, {
    name?: string | undefined;
    liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
    isRecommended?: boolean | undefined;
}>;
export type FindManyLiveCourseAdminWhereArgs = z.infer<typeof FindManyLiveCourseWhereArgs>;
export declare const FindManyLiveCourseAdminOrderByArgs: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    startDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    endDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    enrolled: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    enrolled?: "asc" | "desc" | undefined;
}, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    enrolled?: "asc" | "desc" | undefined;
}>;
export type FindManyLiveCourseAdminOrderByArgs = z.infer<typeof FindManyLiveCourseAdminOrderByArgs>;
export declare const FindManyLiveCourseAdminQueryParams: z.ZodOptional<z.ZodObject<{
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        liveCourseType: z.ZodOptional<z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>>;
        isRecommended: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
        isRecommended?: boolean | undefined;
    }, {
        name?: string | undefined;
        liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
        isRecommended?: boolean | undefined;
    }>>;
    orderBy: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        startDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        endDate: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        enrolled: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        endDate?: "asc" | "desc" | undefined;
        enrolled?: "asc" | "desc" | undefined;
    }, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        endDate?: "asc" | "desc" | undefined;
        enrolled?: "asc" | "desc" | undefined;
    }>>;
    skip: z.ZodOptional<z.ZodNumber>;
    take: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    where?: {
        name?: string | undefined;
        liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
        isRecommended?: boolean | undefined;
    } | undefined;
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        endDate?: "asc" | "desc" | undefined;
        enrolled?: "asc" | "desc" | undefined;
    } | undefined;
    skip?: number | undefined;
    take?: number | undefined;
}, {
    where?: {
        name?: string | undefined;
        liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
        isRecommended?: boolean | undefined;
    } | undefined;
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        startDate?: "asc" | "desc" | undefined;
        endDate?: "asc" | "desc" | undefined;
        enrolled?: "asc" | "desc" | undefined;
    } | undefined;
    skip?: number | undefined;
    take?: number | undefined;
}>>;
export type FindManyLiveCourseAdminQueryParams = z.infer<typeof FindManyLiveCourseAdminQueryParams>;
export declare const FindManyLiveCourseAdminResponse: z.ZodObject<{
    count: z.ZodNumber;
    liveCourses: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        id: z.ZodString;
        name: z.ZodString;
        isRecommended: z.ZodBoolean;
        startDate: z.ZodDate;
        endDate: z.ZodDate;
        enrolled: z.ZodNumber;
        basePlanType: z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>;
        tutor: z.ZodNullable<z.ZodObject<{
            tutorIconUrl: z.ZodNullable<z.ZodString>;
            displayName: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }, {
            displayName: string | null;
            tutorIconUrl: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        isRecommended: boolean;
        startDate: Date;
        endDate: Date;
        enrolled: number;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        isRecommended: boolean;
        startDate: Date;
        endDate: Date;
        enrolled: number;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    liveCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        isRecommended: boolean;
        startDate: Date;
        endDate: Date;
        enrolled: number;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
    }[];
    count: number;
}, {
    liveCourses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        isRecommended: boolean;
        startDate: Date;
        endDate: Date;
        enrolled: number;
        basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
        tutor: {
            displayName: string | null;
            tutorIconUrl: string | null;
        } | null;
    }[];
    count: number;
}>;
export type FindManyLiveCourseAdminResponse = z.infer<typeof FindManyLiveCourseAdminResponse>;
export declare const GetTutorCoursesQueryParams: z.ZodObject<{
    take: z.ZodNumber;
    skip: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    take: number;
    skip: number;
}, {
    take: number;
    skip: number;
}>;
export type GetTutorCoursesQueryParams = z.infer<typeof GetTutorCoursesQueryParams>;
export declare const TutorCourseForTable: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    isActive: z.ZodBoolean;
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    createdAt: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    enrolled: z.ZodNumber;
    dailyChangePercent: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    enrolled: number;
    isActive: boolean;
    createdAt: string;
    dailyChangePercent: number;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    enrolled: number;
    isActive: boolean;
    createdAt: string;
    dailyChangePercent: number;
}>;
export type TutorCourseForTable = z.infer<typeof TutorCourseForTable>;
export declare const GetTutorCoursesResponse: z.ZodObject<{
    total: z.ZodNumber;
    courses: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        isActive: z.ZodBoolean;
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        createdAt: z.ZodString;
        startDate: z.ZodString;
        endDate: z.ZodString;
        enrolled: z.ZodNumber;
        dailyChangePercent: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        enrolled: number;
        isActive: boolean;
        createdAt: string;
        dailyChangePercent: number;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        enrolled: number;
        isActive: boolean;
        createdAt: string;
        dailyChangePercent: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    total: number;
    courses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        enrolled: number;
        isActive: boolean;
        createdAt: string;
        dailyChangePercent: number;
    }[];
}, {
    total: number;
    courses: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        enrolled: number;
        isActive: boolean;
        createdAt: string;
        dailyChangePercent: number;
    }[];
}>;
export type GetTutorCoursesResponse = z.infer<typeof GetTutorCoursesResponse>;
export declare const TutorCourseDetailLiveSession: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    videoDuration: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    name: string;
    startTime: string;
    endTime: string;
    videoDuration: number | null;
}, {
    id: string;
    description: string;
    name: string;
    startTime: string;
    endTime: string;
    videoDuration: number | null;
}>;
export declare const TutorCourseDetail: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    id: z.ZodString;
    description: z.ZodString;
    name: z.ZodString;
    courseHeroUrl: z.ZodNullable<z.ZodString>;
    courseHeroMobileUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    liveSessions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        name: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
        videoDuration: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        videoDuration: number | null;
    }, {
        id: string;
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        videoDuration: number | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    startDate: string;
    endDate: string;
    liveSessions: {
        id: string;
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        videoDuration: number | null;
    }[];
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    description: string;
    name: string;
    courseHeroUrl: string | null;
    courseHeroMobileUrl: string | null;
    startDate: string;
    endDate: string;
    liveSessions: {
        id: string;
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        videoDuration: number | null;
    }[];
}>;
export type TutorCourseDetail = z.infer<typeof TutorCourseDetail>;
//# sourceMappingURL=queries.d.ts.map