import { z } from 'zod';
export declare const LiveCourseChatRoomInput: z.ZodObject<Pick<{
    id: z.ZodString;
    platform: z.ZodNativeEnum<{
        FACEBOOK: "FACEBOOK";
        LINE: "LINE";
    }>;
    url: z.ZodString;
    liveCourseId: z.ZodString;
}, "platform" | "url">, "strip", z.ZodTypeAny, {
    platform: "FACEBOOK" | "LINE";
    url: string;
}, {
    platform: "FACEBOOK" | "LINE";
    url: string;
}>;
export type LiveCourseChatRoomInput = z.infer<typeof LiveCourseChatRoomInput>;
export declare const LiveCoursePackageCreateInput: z.ZodObject<Pick<{
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
}, "description" | "hasShipping" | "price" | "title" | "duration" | "packageType" | "durationUnit">, "strip", z.ZodTypeAny, {
    description: string | null;
    hasShipping: boolean;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}, {
    description: string | null;
    hasShipping: boolean;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}>;
export type LiveCoursePackageCreateInput = z.infer<typeof LiveCoursePackageCreateInput>;
export declare const MockExamCreateInput: z.ZodObject<{
    mockExamGroupId: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    mockExamGroupId: string;
}, {
    url: string;
    mockExamGroupId: string;
}>;
export declare const LiveCourseCreateArgs: z.ZodObject<{
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    description: z.ZodString;
    name: z.ZodString;
    aboutCourse: z.ZodNullable<z.ZodString>;
    subjectId: z.ZodString;
    isRecommended: z.ZodBoolean;
    tutorId: z.ZodString;
    grades: z.ZodArray<z.ZodNumber, "many">;
    paymentRemark: z.ZodNullable<z.ZodString>;
    fundamentalCoursesDescription: z.ZodNullable<z.ZodString>;
    examsDescription: z.ZodNullable<z.ZodString>;
    mockExamsDescription: z.ZodNullable<z.ZodString>;
    hasShipping: z.ZodBoolean;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourseRequiresSubscription: z.ZodBoolean;
    examTutorialRequiresSubscription: z.ZodBoolean;
    examRequiresSubscription: z.ZodBoolean;
    basePlanType: z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>;
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
    shelfLifeDuration: z.ZodNullable<z.ZodNumber>;
    shelfLifeUnit: z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>;
    liveSessions: z.ZodArray<z.ZodObject<Pick<Pick<{
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
    }, "description" | "liveCourseId" | "name" | "startTime" | "endTime" | "isTrialSession">, "description" | "name" | "startTime" | "endTime" | "isTrialSession">, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        startTime: Date;
        endTime: Date;
        isTrialSession: boolean;
    }, {
        description: string;
        name: string;
        startTime: Date;
        endTime: Date;
        isTrialSession: boolean;
    }>, "many">;
    chatRooms: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
        liveCourseId: z.ZodString;
    }, "platform" | "url">, "strip", z.ZodTypeAny, {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }, {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }>, "many">;
    startDate: z.ZodNullable<z.ZodString>;
    endDate: z.ZodNullable<z.ZodString>;
    lastEnrollmentDate: z.ZodNullable<z.ZodString>;
    suggestedNextCourseIds: z.ZodArray<z.ZodString, "many">;
    suggestedPrerequisiteCourseIds: z.ZodArray<z.ZodString, "many">;
    fundamentalCourses: z.ZodArray<z.ZodObject<{
        fundamentalCourseId: z.ZodString;
        sheetUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }, {
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }>, "many">;
    imagesDescriptionCount: z.ZodNumber;
    mockExams: z.ZodArray<z.ZodObject<{
        mockExamGroupId: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        mockExamGroupId: string;
    }, {
        url: string;
        mockExamGroupId: string;
    }>, "many">;
    addons: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        liveCourseId: z.ZodString;
        name: z.ZodString;
        price: z.ZodNumber;
        durationDays: z.ZodNumber;
    }, "name" | "price" | "durationDays">, "strip", z.ZodTypeAny, {
        name: string;
        price: number;
        durationDays: number;
    }, {
        name: string;
        price: number;
        durationDays: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    tutorId: string;
    startDate: string | null;
    endDate: string | null;
    lastEnrollmentDate: string | null;
    grades: number[];
    paymentRemark: string | null;
    fundamentalCoursesDescription: string | null;
    examsDescription: string | null;
    mockExamsDescription: string | null;
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
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
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        description: string;
        name: string;
        startTime: Date;
        endTime: Date;
        isTrialSession: boolean;
    }[];
    fundamentalCourses: {
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }[];
    mockExams: {
        url: string;
        mockExamGroupId: string;
    }[];
    chatRooms: {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }[];
    addons: {
        name: string;
        price: number;
        durationDays: number;
    }[];
    suggestedNextCourseIds: string[];
    suggestedPrerequisiteCourseIds: string[];
    imagesDescriptionCount: number;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    description: string;
    name: string;
    aboutCourse: string | null;
    subjectId: string;
    isRecommended: boolean;
    tutorId: string;
    startDate: string | null;
    endDate: string | null;
    lastEnrollmentDate: string | null;
    grades: number[];
    paymentRemark: string | null;
    fundamentalCoursesDescription: string | null;
    examsDescription: string | null;
    mockExamsDescription: string | null;
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    fundamentalCourseRequiresSubscription: boolean;
    examTutorialRequiresSubscription: boolean;
    examRequiresSubscription: boolean;
    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
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
    shelfLifeDuration: number | null;
    shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
    liveSessions: {
        description: string;
        name: string;
        startTime: Date;
        endTime: Date;
        isTrialSession: boolean;
    }[];
    fundamentalCourses: {
        fundamentalCourseId: string;
        sheetUrl: string | null;
    }[];
    mockExams: {
        url: string;
        mockExamGroupId: string;
    }[];
    chatRooms: {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }[];
    addons: {
        name: string;
        price: number;
        durationDays: number;
    }[];
    suggestedNextCourseIds: string[];
    suggestedPrerequisiteCourseIds: string[];
    imagesDescriptionCount: number;
}>;
export type LiveCourseCreateArgs = z.infer<typeof LiveCourseCreateArgs>;
export declare const FileUploadDetails: z.ZodObject<{
    url: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    url: string;
}, {
    token: string;
    url: string;
}>;
export type FileUploadDetails = z.infer<typeof FileUploadDetails>;
export declare const CreateLiveCourseResponse: z.ZodObject<{
    id: z.ZodString;
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
    courseSticketUploadUrl: z.ZodObject<{
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
    liveSessions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
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
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }, {
        id: string;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }>, "many">;
    liveCourseImageDescription: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
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
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }, {
        id: string;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    liveSessions: {
        id: string;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    liveCourseImageDescription: {
        id: string;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    courseThumbnailUploadUrl: {
        token: string;
        url: string;
    };
    courseCoverUploadUrl: {
        token: string;
        url: string;
    };
    courseSticketUploadUrl: {
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
}, {
    id: string;
    liveSessions: {
        id: string;
        sheetUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    liveCourseImageDescription: {
        id: string;
        order: number;
        imageUploadUrl: {
            token: string;
            url: string;
        };
    }[];
    courseThumbnailUploadUrl: {
        token: string;
        url: string;
    };
    courseCoverUploadUrl: {
        token: string;
        url: string;
    };
    courseSticketUploadUrl: {
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
}>;
export type CreateLiveCourseResponse = z.infer<typeof CreateLiveCourseResponse>;
export declare const LiveCourseInformationUpdateArgs: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    subjectId: z.ZodOptional<z.ZodString>;
    isRecommended: z.ZodOptional<z.ZodBoolean>;
    tutorId: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodDate>;
    endDate: z.ZodOptional<z.ZodDate>;
    lastEnrollmentDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    paymentRemark: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fundamentalCoursesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    liveSessionsDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examsDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mockExamsDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hasShipping: z.ZodOptional<z.ZodBoolean>;
    hasPickUp: z.ZodOptional<z.ZodBoolean>;
    pickupAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    basePlanType: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    playbackDurationLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    limitType: z.ZodOptional<z.ZodNativeEnum<{
        MINUTE: "MINUTE";
        PERCENT: "PERCENT";
        NONE: "NONE";
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description?: string | undefined;
    name?: string | undefined;
    subjectId?: string | undefined;
    isRecommended?: boolean | undefined;
    tutorId?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    lastEnrollmentDate?: Date | null | undefined;
    grades?: number[] | undefined;
    paymentRemark?: string | null | undefined;
    fundamentalCoursesDescription?: string | null | undefined;
    liveSessionsDescription?: string | null | undefined;
    examsDescription?: string | null | undefined;
    mockExamsDescription?: string | null | undefined;
    hasShipping?: boolean | undefined;
    hasPickUp?: boolean | undefined;
    pickupAddress?: string | null | undefined;
    basePlanType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
    isActive?: boolean | undefined;
    playbackDurationLimit?: number | null | undefined;
    limitType?: "MINUTE" | "PERCENT" | "NONE" | undefined;
}, {
    id: string;
    description?: string | undefined;
    name?: string | undefined;
    subjectId?: string | undefined;
    isRecommended?: boolean | undefined;
    tutorId?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    lastEnrollmentDate?: Date | null | undefined;
    grades?: number[] | undefined;
    paymentRemark?: string | null | undefined;
    fundamentalCoursesDescription?: string | null | undefined;
    liveSessionsDescription?: string | null | undefined;
    examsDescription?: string | null | undefined;
    mockExamsDescription?: string | null | undefined;
    hasShipping?: boolean | undefined;
    hasPickUp?: boolean | undefined;
    pickupAddress?: string | null | undefined;
    basePlanType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
    isActive?: boolean | undefined;
    playbackDurationLimit?: number | null | undefined;
    limitType?: "MINUTE" | "PERCENT" | "NONE" | undefined;
}>;
export type LiveCourseInformationUpdateArgs = z.infer<typeof LiveCourseInformationUpdateArgs>;
export declare const LiveCourseDeleteArgs: z.ZodObject<Pick<{
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
}, "id">, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type LiveCourseDeleteArgs = z.infer<typeof LiveCourseDeleteArgs>;
export declare const LiveCourseCommentCreateInput: z.ZodObject<{
    description: z.ZodNullable<z.ZodString>;
    stars: z.ZodNumber;
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string | null;
    liveCourseId: string;
    stars: number;
}, {
    description: string | null;
    liveCourseId: string;
    stars: number;
}>;
export type LiveCourseCommentCreateInput = z.infer<typeof LiveCourseCommentCreateInput>;
export declare const LiveCourseCommentUpdateInput: z.ZodObject<Omit<{
    description: z.ZodNullable<z.ZodString>;
    stars: z.ZodNumber;
    liveCourseId: z.ZodString;
}, "stars">, "strip", z.ZodTypeAny, {
    description: string | null;
    liveCourseId: string;
}, {
    description: string | null;
    liveCourseId: string;
}>;
export type LiveCourseCommentUpdateInput = z.infer<typeof LiveCourseCommentUpdateInput>;
export declare const LiveCourseCommentDeleteInput: z.ZodObject<{
    userId: z.ZodString;
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    liveCourseId: string;
}, {
    userId: string;
    liveCourseId: string;
}>;
export type LiveCourseCommentDeleteInput = z.infer<typeof LiveCourseCommentDeleteInput>;
export declare const RedeemTrialLiveCourseBody: z.ZodObject<{
    liveSessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveSessionId: string;
}, {
    liveSessionId: string;
}>;
export type RedeemTrialLiveCourseBody = z.infer<typeof RedeemTrialLiveCourseBody>;
export declare const AddLiveCourseFundamentalCourseBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    fundamentalCourseId: z.ZodString;
    sheetUrl: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    fundamentalCourseId: string;
    sheetUrl: string | null;
}, {
    liveCourseId: string;
    fundamentalCourseId: string;
    sheetUrl: string | null;
}>;
export type AddLiveCourseFundamentalCourseBody = z.infer<typeof AddLiveCourseFundamentalCourseBody>;
export declare const RemoveLiveCourseFundamentalCourseBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    fundamentalCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    fundamentalCourseId: string;
}, {
    liveCourseId: string;
    fundamentalCourseId: string;
}>;
export type RemoveLiveCourseFundamentalCourseBody = z.infer<typeof RemoveLiveCourseFundamentalCourseBody>;
export declare const AddLiveCourseExerciseBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    exerciseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    exerciseId: string;
}, {
    liveCourseId: string;
    exerciseId: string;
}>;
export type AddLiveCourseExerciseBody = z.infer<typeof AddLiveCourseExerciseBody>;
export declare const RemoveLiveCourseExerciseBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    exerciseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    exerciseId: string;
}, {
    liveCourseId: string;
    exerciseId: string;
}>;
export type RemoveLiveCourseExerciseBody = z.infer<typeof RemoveLiveCourseExerciseBody>;
export declare const AddLiveCourseExamBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    examId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    examId: string;
}, {
    liveCourseId: string;
    examId: string;
}>;
export type AddLiveCourseExamBody = z.infer<typeof AddLiveCourseExamBody>;
export declare const RemoveLiveCourseExamBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    examId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    examId: string;
}, {
    liveCourseId: string;
    examId: string;
}>;
export type RemoveLiveCourseExamBody = z.infer<typeof RemoveLiveCourseExamBody>;
export declare const AddLiveCourseExamTutorialBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    examTutorialId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    examTutorialId: string;
}, {
    liveCourseId: string;
    examTutorialId: string;
}>;
export type AddLiveCourseExamTutorialBody = z.infer<typeof AddLiveCourseExamTutorialBody>;
export declare const RemoveLiveCourseExamTutorialBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    examTutorialId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    examTutorialId: string;
}, {
    liveCourseId: string;
    examTutorialId: string;
}>;
export type RemoveLiveCourseExamTutorialBody = z.infer<typeof RemoveLiveCourseExamTutorialBody>;
export declare const AddLiveCourseMockExamBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    mockExam: z.ZodObject<{
        mockExamGroupId: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        mockExamGroupId: string;
    }, {
        url: string;
        mockExamGroupId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    mockExam: {
        url: string;
        mockExamGroupId: string;
    };
}, {
    liveCourseId: string;
    mockExam: {
        url: string;
        mockExamGroupId: string;
    };
}>;
export type AddLiveCourseMockExamBody = z.infer<typeof AddLiveCourseMockExamBody>;
export declare const RemoveLiveCourseMockExamBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    mockExamId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    mockExamId: string;
}, {
    liveCourseId: string;
    mockExamId: string;
}>;
export type RemoveLiveCourseMockExamBody = z.infer<typeof RemoveLiveCourseMockExamBody>;
export declare const CreateLiveCourseChatRoomBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    data: z.ZodObject<Pick<{
        id: z.ZodString;
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
        liveCourseId: z.ZodString;
    }, "platform" | "url">, "strip", z.ZodTypeAny, {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }, {
        platform: "FACEBOOK" | "LINE";
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        platform: "FACEBOOK" | "LINE";
        url: string;
    };
    liveCourseId: string;
}, {
    data: {
        platform: "FACEBOOK" | "LINE";
        url: string;
    };
    liveCourseId: string;
}>;
export type CreateLiveCourseChatRoomBody = z.infer<typeof CreateLiveCourseChatRoomBody>;
export declare const UpdateLiveCourseChatRoomBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    chatRoomId: z.ZodString;
    data: z.ZodObject<{
        platform: z.ZodOptional<z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        platform?: "FACEBOOK" | "LINE" | undefined;
        url?: string | undefined;
    }, {
        platform?: "FACEBOOK" | "LINE" | undefined;
        url?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        platform?: "FACEBOOK" | "LINE" | undefined;
        url?: string | undefined;
    };
    liveCourseId: string;
    chatRoomId: string;
}, {
    data: {
        platform?: "FACEBOOK" | "LINE" | undefined;
        url?: string | undefined;
    };
    liveCourseId: string;
    chatRoomId: string;
}>;
export type UpdateLiveCourseChatRoomBody = z.infer<typeof UpdateLiveCourseChatRoomBody>;
export declare const DeleteLiveCourseChatRoomBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    chatRoomId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    chatRoomId: string;
}, {
    liveCourseId: string;
    chatRoomId: string;
}>;
export type DeleteLiveCourseChatRoomBody = z.infer<typeof DeleteLiveCourseChatRoomBody>;
//# sourceMappingURL=mutation.d.ts.map