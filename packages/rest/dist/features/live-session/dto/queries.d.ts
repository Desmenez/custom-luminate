import { z } from 'zod';
export declare const LiveSessionStatus: z.ZodEnum<["LIVE", "ENDED", "UPCOMING"]>;
export type LiveSessionStatus = z.infer<typeof LiveSessionStatus>;
export declare const CmsQuizScoreQuiz: z.ZodObject<Pick<{
    id: z.ZodString;
    liveSessionId: z.ZodString;
    type: z.ZodNativeEnum<{
        CHOICE: "CHOICE";
        TEXT: "TEXT";
    }>;
    config: z.ZodUnknown;
    solution: z.ZodUnknown;
    isAcceptingAnswers: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "id">, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type CmsQuizScoreQuiz = z.infer<typeof CmsQuizScoreQuiz>;
export declare const CmsQuizScoreUserScore: z.ZodObject<{
    score: z.ZodNumber;
    user: z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodString;
        profileUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        profileUrl: string;
        displayName: string;
    }, {
        id: string;
        profileUrl: string;
        displayName: string;
    }>;
}, "strip", z.ZodTypeAny, {
    score: number;
    user: {
        id: string;
        profileUrl: string;
        displayName: string;
    };
}, {
    score: number;
    user: {
        id: string;
        profileUrl: string;
        displayName: string;
    };
}>;
export type CmsQuizScoreUserScore = z.infer<typeof CmsQuizScoreUserScore>;
export declare const CmsQuizScoreResponse: z.ZodObject<{
    quizzes: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        liveSessionId: z.ZodString;
        type: z.ZodNativeEnum<{
            CHOICE: "CHOICE";
            TEXT: "TEXT";
        }>;
        config: z.ZodUnknown;
        solution: z.ZodUnknown;
        isAcceptingAnswers: z.ZodBoolean;
        createdAt: z.ZodDate;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">;
    userScores: z.ZodArray<z.ZodObject<{
        score: z.ZodNumber;
        user: z.ZodObject<{
            id: z.ZodString;
            displayName: z.ZodString;
            profileUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            profileUrl: string;
            displayName: string;
        }, {
            id: string;
            profileUrl: string;
            displayName: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        score: number;
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
    }, {
        score: number;
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    quizzes: {
        id: string;
    }[];
    userScores: {
        score: number;
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
    }[];
}, {
    quizzes: {
        id: string;
    }[];
    userScores: {
        score: number;
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
    }[];
}>;
export type CmsQuizScoreResponse = z.infer<typeof CmsQuizScoreResponse>;
export declare const LiveSessionFindManyWhereInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>;
export declare const LiveSessionOrderByInput: z.ZodObject<{
    startTime: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    liveCourseName: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    tutorName: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    startTime?: "asc" | "desc" | undefined;
    liveCourseName?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tutorName?: "asc" | "desc" | undefined;
}, {
    startTime?: "asc" | "desc" | undefined;
    liveCourseName?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tutorName?: "asc" | "desc" | undefined;
}>;
export declare const LiveSessionFindManyArgs: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodObject<{
        startTime: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        liveCourseName: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        tutorName: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: "asc" | "desc" | undefined;
        liveCourseName?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        tutorName?: "asc" | "desc" | undefined;
    }, {
        startTime?: "asc" | "desc" | undefined;
        liveCourseName?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        tutorName?: "asc" | "desc" | undefined;
    }>>;
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>>;
    take: z.ZodDefault<z.ZodNumber>;
    skip: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    take: number;
    skip: number;
    orderBy?: {
        startTime?: "asc" | "desc" | undefined;
        liveCourseName?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        tutorName?: "asc" | "desc" | undefined;
    } | undefined;
    where?: {
        name?: string | undefined;
    } | undefined;
}, {
    orderBy?: {
        startTime?: "asc" | "desc" | undefined;
        liveCourseName?: "asc" | "desc" | undefined;
        name?: "asc" | "desc" | undefined;
        tutorName?: "asc" | "desc" | undefined;
    } | undefined;
    where?: {
        name?: string | undefined;
    } | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}>;
export type LiveSessionFindManyArgs = z.infer<typeof LiveSessionFindManyArgs>;
export declare const LiveSessionForTutor: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    endTime: z.ZodString;
    streamInfo: z.ZodNullable<z.ZodObject<{
        streamKey: z.ZodString;
        streamUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        streamKey: string;
        streamUrl: string;
    }, {
        streamKey: string;
        streamUrl: string;
    }>>;
    liveCourse: z.ZodObject<Pick<{
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
    }, "type" | "name">, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        name: string;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        name: string;
    };
    name: string;
    endTime: string;
    streamInfo: {
        streamKey: string;
        streamUrl: string;
    } | null;
}, {
    id: string;
    description: string;
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        name: string;
    };
    name: string;
    endTime: string;
    streamInfo: {
        streamKey: string;
        streamUrl: string;
    } | null;
}>;
export type LiveSessionForTutor = z.infer<typeof LiveSessionForTutor>;
export declare const LiveSessionForSchedule: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    status: z.ZodEnum<["LIVE", "ENDED", "UPCOMING"]>;
    startTime: z.ZodDate;
    liveCourse: z.ZodObject<{
        name: z.ZodString;
        tutor: z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tutor: {
            name: string;
        };
    }, {
        name: string;
        tutor: {
            name: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    status: "LIVE" | "ENDED" | "UPCOMING";
    id: string;
    liveCourse: {
        name: string;
        tutor: {
            name: string;
        };
    };
    name: string;
    startTime: Date;
}, {
    status: "LIVE" | "ENDED" | "UPCOMING";
    id: string;
    liveCourse: {
        name: string;
        tutor: {
            name: string;
        };
    };
    name: string;
    startTime: Date;
}>;
export type LiveSessionForSchedule = z.infer<typeof LiveSessionForSchedule>;
export declare const LiveSessionsForScheduleResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    status: z.ZodEnum<["LIVE", "ENDED", "UPCOMING"]>;
    startTime: z.ZodDate;
    liveCourse: z.ZodObject<{
        name: z.ZodString;
        tutor: z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tutor: {
            name: string;
        };
    }, {
        name: string;
        tutor: {
            name: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    status: "LIVE" | "ENDED" | "UPCOMING";
    id: string;
    liveCourse: {
        name: string;
        tutor: {
            name: string;
        };
    };
    name: string;
    startTime: Date;
}, {
    status: "LIVE" | "ENDED" | "UPCOMING";
    id: string;
    liveCourse: {
        name: string;
        tutor: {
            name: string;
        };
    };
    name: string;
    startTime: Date;
}>, "many">;
export declare const CloudflareLiveStreamLifeCycle: z.ZodObject<{
    isInput: z.ZodBoolean;
    videoUID: z.ZodNullable<z.ZodString>;
    live: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isInput: boolean;
    videoUID: string | null;
    live: boolean;
}, {
    isInput: boolean;
    videoUID: string | null;
    live: boolean;
}>;
export type CloudflareLiveStreamLifeCycle = z.infer<typeof CloudflareLiveStreamLifeCycle>;
export declare const LiveSessionVideoResource: z.ZodObject<{
    name: z.ZodString;
    currentLiveVideoId: z.ZodNullable<z.ZodObject<{
        isInput: z.ZodBoolean;
        videoUID: z.ZodNullable<z.ZodString>;
        live: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        isInput: boolean;
        videoUID: string | null;
        live: boolean;
    }, {
        isInput: boolean;
        videoUID: string | null;
        live: boolean;
    }>>;
    remainingPlaybackTime: z.ZodNullable<z.ZodNumber>;
    index: z.ZodNumber;
    description: z.ZodString;
    liveCourse: z.ZodObject<{
        name: z.ZodString;
        exercisesCourses: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodString;
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
        tutorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        tutorId: string;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    }, {
        name: string;
        tutorId: string;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    description: string;
    liveCourse: {
        name: string;
        tutorId: string;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    currentLiveVideoId: {
        isInput: boolean;
        videoUID: string | null;
        live: boolean;
    } | null;
    remainingPlaybackTime: number | null;
    index: number;
}, {
    description: string;
    liveCourse: {
        name: string;
        tutorId: string;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    currentLiveVideoId: {
        isInput: boolean;
        videoUID: string | null;
        live: boolean;
    } | null;
    remainingPlaybackTime: number | null;
    index: number;
}>;
export type LiveSessionVideoResource = z.infer<typeof LiveSessionVideoResource>;
export declare const GetLiveSessionIndexQueryParam: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetLiveSessionIndexQueryParam = z.infer<typeof GetLiveSessionIndexQueryParam>;
export declare const GetLiveSessionIndexResponse: z.ZodObject<{
    index: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
}, {
    index: number;
}>;
export type GetLiveSessionIndexResponse = z.infer<typeof GetLiveSessionIndexResponse>;
//# sourceMappingURL=queries.d.ts.map