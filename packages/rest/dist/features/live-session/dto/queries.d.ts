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
    user: {
        id: string;
        profileUrl: string;
        displayName: string;
    };
    score: number;
}, {
    user: {
        id: string;
        profileUrl: string;
        displayName: string;
    };
    score: number;
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
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
        score: number;
    }, {
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
        score: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    quizzes: {
        id: string;
    }[];
    userScores: {
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
        score: number;
    }[];
}, {
    quizzes: {
        id: string;
    }[];
    userScores: {
        user: {
            id: string;
            profileUrl: string;
            displayName: string;
        };
        score: number;
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
    excludeEndLiveSession: z.ZodOptional<z.ZodBoolean>;
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
    excludeEndLiveSession?: boolean | undefined;
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
    excludeEndLiveSession?: boolean | undefined;
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
    startTime: z.ZodString;
    endTime: z.ZodString;
    videoLifecycle: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
        ok: z.ZodLiteral<true>;
        value: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    }, {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    }>, z.ZodObject<{
        ok: z.ZodLiteral<false>;
        error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
            code: z.ZodLiteral<"NO_REMAINING_PLAYBACK_TIME">;
        }, "strip", z.ZodTypeAny, {
            code: "NO_REMAINING_PLAYBACK_TIME";
        }, {
            code: "NO_REMAINING_PLAYBACK_TIME";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"COURSE_EXPIRED">;
        }, "strip", z.ZodTypeAny, {
            code: "COURSE_EXPIRED";
        }, {
            code: "COURSE_EXPIRED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"ONSITE_LIVE_NOT_ALLOWED">;
        }, "strip", z.ZodTypeAny, {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        }, {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"RECORDING_DISABLED">;
        }, "strip", z.ZodTypeAny, {
            code: "RECORDING_DISABLED";
        }, {
            code: "RECORDING_DISABLED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"RECORDING_REQUIRES_SUBSCRIPTION">;
        }, "strip", z.ZodTypeAny, {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        }, {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    }, {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    }>]>;
    remainingPlaybackTime: z.ZodNullable<z.ZodNumber>;
    timestampSeconds: z.ZodNullable<z.ZodNumber>;
    index: z.ZodNumber;
    description: z.ZodString;
    liveCourse: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        enableRecordingPlayback: z.ZodBoolean;
        recordingRequiresSubscription: z.ZodBoolean;
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
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    }>;
    learningType: z.ZodNullable<z.ZodNativeEnum<{
        ONLINE: "ONLINE";
        ONSITE: "ONSITE";
    }>>;
}, "strip", z.ZodTypeAny, {
    description: string;
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    learningType: "ONSITE" | "ONLINE" | null;
    startTime: string;
    endTime: string;
    timestampSeconds: number | null;
    videoLifecycle: {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    } | {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    };
    remainingPlaybackTime: number | null;
    index: number;
}, {
    description: string;
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    learningType: "ONSITE" | "ONLINE" | null;
    startTime: string;
    endTime: string;
    timestampSeconds: number | null;
    videoLifecycle: {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    } | {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    };
    remainingPlaybackTime: number | null;
    index: number;
}>;
export type LiveSessionVideoResource = z.infer<typeof LiveSessionVideoResource>;
export declare const LiveSessionAdminVideoResource: z.ZodObject<{
    name: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    videoLifecycle: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
        ok: z.ZodLiteral<true>;
        value: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    }, {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    }>, z.ZodObject<{
        ok: z.ZodLiteral<false>;
        error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
            code: z.ZodLiteral<"NO_REMAINING_PLAYBACK_TIME">;
        }, "strip", z.ZodTypeAny, {
            code: "NO_REMAINING_PLAYBACK_TIME";
        }, {
            code: "NO_REMAINING_PLAYBACK_TIME";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"COURSE_EXPIRED">;
        }, "strip", z.ZodTypeAny, {
            code: "COURSE_EXPIRED";
        }, {
            code: "COURSE_EXPIRED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"ONSITE_LIVE_NOT_ALLOWED">;
        }, "strip", z.ZodTypeAny, {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        }, {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"RECORDING_DISABLED">;
        }, "strip", z.ZodTypeAny, {
            code: "RECORDING_DISABLED";
        }, {
            code: "RECORDING_DISABLED";
        }>, z.ZodObject<{
            code: z.ZodLiteral<"RECORDING_REQUIRES_SUBSCRIPTION">;
        }, "strip", z.ZodTypeAny, {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        }, {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    }, {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    }>]>;
    description: z.ZodString;
    liveCourse: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        enableRecordingPlayback: z.ZodBoolean;
        recordingRequiresSubscription: z.ZodBoolean;
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
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
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
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    startTime: string;
    endTime: string;
    videoLifecycle: {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    } | {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    };
}, {
    description: string;
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        tutorId: string;
        enableRecordingPlayback: boolean;
        recordingRequiresSubscription: boolean;
        exercisesCourses: {
            id: string;
            name: string;
            subject: {
                code: string;
            } | null;
        }[];
    };
    name: string;
    startTime: string;
    endTime: string;
    videoLifecycle: {
        value: {
            isInput: boolean;
            videoUID: string | null;
            live: boolean;
        };
        ok: true;
    } | {
        error: {
            code: "NO_REMAINING_PLAYBACK_TIME";
        } | {
            code: "COURSE_EXPIRED";
        } | {
            code: "ONSITE_LIVE_NOT_ALLOWED";
        } | {
            code: "RECORDING_DISABLED";
        } | {
            code: "RECORDING_REQUIRES_SUBSCRIPTION";
        };
        ok: false;
    };
}>;
export type LiveSessionAdminVideoResource = z.infer<typeof LiveSessionAdminVideoResource>;
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