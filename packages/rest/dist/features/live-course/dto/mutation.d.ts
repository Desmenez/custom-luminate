import { z } from 'zod';
export declare const LiveCourseChatRoomInput: z.ZodObject<Pick<{
    id: z.ZodString;
    platform: z.ZodNativeEnum<{
        FACEBOOK: "FACEBOOK";
        LINE: "LINE";
    }>;
    url: z.ZodString;
    liveCourseId: z.ZodString;
}, "url" | "platform">, "strip", z.ZodTypeAny, {
    url: string;
    platform: "FACEBOOK" | "LINE";
}, {
    url: string;
    platform: "FACEBOOK" | "LINE";
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
    hasShipping: z.ZodBoolean;
    hasPickUp: z.ZodBoolean;
    pickupAddress: z.ZodNullable<z.ZodString>;
    fundamentalCourseIds: z.ZodArray<z.ZodString, "many">;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    mockExamIds: z.ZodArray<z.ZodString, "many">;
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
    liveSessions: z.ZodArray<z.ZodObject<Pick<{
        description: z.ZodString;
        liveCourseId: z.ZodString;
        name: z.ZodString;
        isTrialSession: z.ZodBoolean;
        exerciseId: z.ZodNullable<z.ZodString>;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "description" | "name" | "startTime" | "endTime" | "isTrialSession" | "exerciseId">, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        exerciseId: string | null;
    }, {
        description: string;
        name: string;
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        exerciseId: string | null;
    }>, "many">;
    chatRooms: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
        liveCourseId: z.ZodString;
    }, "url" | "platform">, "strip", z.ZodTypeAny, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }>, "many">;
    startDate: z.ZodNullable<z.ZodString>;
    endDate: z.ZodNullable<z.ZodString>;
    lastEnrollmentDate: z.ZodNullable<z.ZodString>;
    suggestedNextCourseIds: z.ZodArray<z.ZodString, "many">;
    suggestedPrerequisiteCourseIds: z.ZodArray<z.ZodString, "many">;
    imagesDescriptionCount: z.ZodNumber;
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
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    fundamentalCourseIds: string[];
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    mockExamIds: string[];
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
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        exerciseId: string | null;
    }[];
    chatRooms: {
        url: string;
        platform: "FACEBOOK" | "LINE";
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
    hasShipping: boolean;
    hasPickUp: boolean;
    pickupAddress: string | null;
    fundamentalCourseIds: string[];
    exerciseIds: string[];
    examTutorialIds: string[];
    examIds: string[];
    mockExamIds: string[];
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
        startTime: string;
        endTime: string;
        isTrialSession: boolean;
        exerciseId: string | null;
    }[];
    chatRooms: {
        url: string;
        platform: "FACEBOOK" | "LINE";
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
export declare const CreateLiveCourseResponse: z.ZodObject<{
    id: z.ZodString;
    courseThumbnailUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
    courseCoverUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
    courseStickerUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
    courseHeroUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
    courseHeroMobileUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
    liveSessions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sheetUploadUrl: z.ZodObject<{
            url: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            token: string;
        }, {
            url: string;
            token: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        sheetUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        id: string;
        sheetUploadUrl: {
            url: string;
            token: string;
        };
    }>, "many">;
    liveCourseImageDescription: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        order: z.ZodNumber;
        imageUploadUrl: z.ZodObject<{
            url: z.ZodString;
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            token: string;
        }, {
            url: string;
            token: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        order: number;
        imageUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        id: string;
        order: number;
        imageUploadUrl: {
            url: string;
            token: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    liveSessions: {
        id: string;
        sheetUploadUrl: {
            url: string;
            token: string;
        };
    }[];
    liveCourseImageDescription: {
        id: string;
        order: number;
        imageUploadUrl: {
            url: string;
            token: string;
        };
    }[];
    courseThumbnailUploadUrl: {
        url: string;
        token: string;
    };
    courseCoverUploadUrl: {
        url: string;
        token: string;
    };
    courseStickerUploadUrl: {
        url: string;
        token: string;
    };
    courseHeroUploadUrl: {
        url: string;
        token: string;
    };
    courseHeroMobileUploadUrl: {
        url: string;
        token: string;
    };
}, {
    id: string;
    liveSessions: {
        id: string;
        sheetUploadUrl: {
            url: string;
            token: string;
        };
    }[];
    liveCourseImageDescription: {
        id: string;
        order: number;
        imageUploadUrl: {
            url: string;
            token: string;
        };
    }[];
    courseThumbnailUploadUrl: {
        url: string;
        token: string;
    };
    courseCoverUploadUrl: {
        url: string;
        token: string;
    };
    courseStickerUploadUrl: {
        url: string;
        token: string;
    };
    courseHeroUploadUrl: {
        url: string;
        token: string;
    };
    courseHeroMobileUploadUrl: {
        url: string;
        token: string;
    };
}>;
export type CreateLiveCourseResponse = z.infer<typeof CreateLiveCourseResponse>;
export declare const LiveCourseInformationUpdateArgs: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    aboutCourse: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subjectId: z.ZodOptional<z.ZodString>;
    isRecommended: z.ZodOptional<z.ZodBoolean>;
    tutorId: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
    endDate: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
    lastEnrollmentDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>>;
    grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    hasShipping: z.ZodOptional<z.ZodBoolean>;
    hasPickUp: z.ZodOptional<z.ZodBoolean>;
    pickupAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fundamentalCourseIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    examTutorialIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    examIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    mockExamIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    fundamentalCourseRequiresSubscription: z.ZodOptional<z.ZodBoolean>;
    examTutorialRequiresSubscription: z.ZodOptional<z.ZodBoolean>;
    examRequiresSubscription: z.ZodOptional<z.ZodBoolean>;
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
    enableRecordingPlayback: z.ZodOptional<z.ZodBoolean>;
    recordingRequiresSubscription: z.ZodOptional<z.ZodBoolean>;
    onlinePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    onsitePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    originalOnlinePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    originalOnsitePrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    onsiteMaxSeats: z.ZodOptional<z.ZodNumber>;
    onsiteAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shelfLifeDuration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    shelfLifeUnit: z.ZodOptional<z.ZodNullable<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
        YEAR: "YEAR";
        LIFETIME: "LIFETIME";
    }>>>;
    chatRooms: z.ZodOptional<z.ZodArray<z.ZodObject<{
        platform: z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }>, "many">>;
    suggestedNextCourseIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    suggestedPrerequisiteCourseIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description?: string | undefined;
    name?: string | undefined;
    aboutCourse?: string | null | undefined;
    subjectId?: string | undefined;
    isRecommended?: boolean | undefined;
    tutorId?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    lastEnrollmentDate?: string | null | undefined;
    grades?: number[] | undefined;
    hasShipping?: boolean | undefined;
    hasPickUp?: boolean | undefined;
    pickupAddress?: string | null | undefined;
    fundamentalCourseIds?: string[] | undefined;
    examTutorialIds?: string[] | undefined;
    examIds?: string[] | undefined;
    mockExamIds?: string[] | undefined;
    fundamentalCourseRequiresSubscription?: boolean | undefined;
    examTutorialRequiresSubscription?: boolean | undefined;
    examRequiresSubscription?: boolean | undefined;
    basePlanType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
    isActive?: boolean | undefined;
    playbackDurationLimit?: number | null | undefined;
    limitType?: "MINUTE" | "PERCENT" | "NONE" | undefined;
    enableRecordingPlayback?: boolean | undefined;
    recordingRequiresSubscription?: boolean | undefined;
    onlinePrice?: number | null | undefined;
    onsitePrice?: number | null | undefined;
    originalOnlinePrice?: number | null | undefined;
    originalOnsitePrice?: number | null | undefined;
    onsiteMaxSeats?: number | undefined;
    onsiteAddress?: string | null | undefined;
    shelfLifeDuration?: number | null | undefined;
    shelfLifeUnit?: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null | undefined;
    chatRooms?: {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }[] | undefined;
    suggestedNextCourseIds?: string[] | undefined;
    suggestedPrerequisiteCourseIds?: string[] | undefined;
}, {
    id: string;
    description?: string | undefined;
    name?: string | undefined;
    aboutCourse?: string | null | undefined;
    subjectId?: string | undefined;
    isRecommended?: boolean | undefined;
    tutorId?: string | undefined;
    startDate?: string | Date | undefined;
    endDate?: string | Date | undefined;
    lastEnrollmentDate?: string | Date | null | undefined;
    grades?: number[] | undefined;
    hasShipping?: boolean | undefined;
    hasPickUp?: boolean | undefined;
    pickupAddress?: string | null | undefined;
    fundamentalCourseIds?: string[] | undefined;
    examTutorialIds?: string[] | undefined;
    examIds?: string[] | undefined;
    mockExamIds?: string[] | undefined;
    fundamentalCourseRequiresSubscription?: boolean | undefined;
    examTutorialRequiresSubscription?: boolean | undefined;
    examRequiresSubscription?: boolean | undefined;
    basePlanType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
    isActive?: boolean | undefined;
    playbackDurationLimit?: number | null | undefined;
    limitType?: "MINUTE" | "PERCENT" | "NONE" | undefined;
    enableRecordingPlayback?: boolean | undefined;
    recordingRequiresSubscription?: boolean | undefined;
    onlinePrice?: number | null | undefined;
    onsitePrice?: number | null | undefined;
    originalOnlinePrice?: number | null | undefined;
    originalOnsitePrice?: number | null | undefined;
    onsiteMaxSeats?: number | undefined;
    onsiteAddress?: string | null | undefined;
    shelfLifeDuration?: number | null | undefined;
    shelfLifeUnit?: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null | undefined;
    chatRooms?: {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }[] | undefined;
    suggestedNextCourseIds?: string[] | undefined;
    suggestedPrerequisiteCourseIds?: string[] | undefined;
}>;
export type LiveCourseInformationUpdateArgs = z.infer<typeof LiveCourseInformationUpdateArgs>;
export declare const AddLiveCourseAddonBody: z.ZodObject<Pick<{
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
}>;
export type AddLiveCourseAddonBody = z.infer<typeof AddLiveCourseAddonBody>;
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
    startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
    endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
    enrolled: z.ZodNumber;
    lastEnrollmentDate: z.ZodNullable<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
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
    fundamentalCourseIds: z.ZodArray<z.ZodString, "many">;
    exerciseIds: z.ZodArray<z.ZodString, "many">;
    examTutorialIds: z.ZodArray<z.ZodString, "many">;
    examIds: z.ZodArray<z.ZodString, "many">;
    mockExamIds: z.ZodArray<z.ZodString, "many">;
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
    expiresAt: z.ZodNullable<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
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
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    fundamentalCourseId: string;
}, {
    liveCourseId: string;
    fundamentalCourseId: string;
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
    mockExamIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    mockExamIds: string[];
}, {
    liveCourseId: string;
    mockExamIds: string[];
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
    }, "url" | "platform">, "strip", z.ZodTypeAny, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }, {
        url: string;
        platform: "FACEBOOK" | "LINE";
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        url: string;
        platform: "FACEBOOK" | "LINE";
    };
    liveCourseId: string;
}, {
    data: {
        url: string;
        platform: "FACEBOOK" | "LINE";
    };
    liveCourseId: string;
}>;
export type CreateLiveCourseChatRoomBody = z.infer<typeof CreateLiveCourseChatRoomBody>;
export declare const UpdateLiveCourseChatRoomBody: z.ZodObject<{
    liveCourseId: z.ZodString;
    chatRoomId: z.ZodString;
    data: z.ZodObject<{
        url: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodNativeEnum<{
            FACEBOOK: "FACEBOOK";
            LINE: "LINE";
        }>>;
    }, "strip", z.ZodTypeAny, {
        url?: string | undefined;
        platform?: "FACEBOOK" | "LINE" | undefined;
    }, {
        url?: string | undefined;
        platform?: "FACEBOOK" | "LINE" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        url?: string | undefined;
        platform?: "FACEBOOK" | "LINE" | undefined;
    };
    liveCourseId: string;
    chatRoomId: string;
}, {
    data: {
        url?: string | undefined;
        platform?: "FACEBOOK" | "LINE" | undefined;
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
export declare const UpdateLiveCourseCommentResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        liveCourseId: z.ZodString;
        stars: z.ZodNumber;
        userId: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        userUpdatedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
    }, {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
    };
    ok: true;
}, {
    value: {
        description: string | null;
        userId: string;
        liveCourseId: string;
        createdAt: Date;
        updatedAt: Date;
        stars: number;
        userUpdatedAt: Date | null;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"ALREADY_UPDATED">;
    }, "strip", z.ZodTypeAny, {
        code: "ALREADY_UPDATED";
    }, {
        code: "ALREADY_UPDATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "ALREADY_UPDATED";
    };
    ok: false;
}, {
    error: {
        code: "ALREADY_UPDATED";
    };
    ok: false;
}>]>;
//# sourceMappingURL=mutation.d.ts.map