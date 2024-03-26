import { z } from 'zod';
export * from './dto';
export declare const liveSessionContract: {
    getQuizScoreForCms: {
        responses: {
            200: z.ZodObject<{
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
        };
        method: "GET";
        path: "/:liveSessionId/cms/quiz-score";
    };
    getLiveSessionForTutor: {
        responses: {
            200: z.ZodObject<{
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
        };
        method: "GET";
        path: "/:liveSessionId/for-tutor";
    };
    getLiveSessionsForSchedule: {
        query: z.ZodObject<{
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
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
        };
        method: "GET";
        path: "/for-schedule";
    };
    getLiveSessionsCount: {
        query: z.ZodObject<{
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
        responses: {
            200: z.ZodNumber;
        };
        method: "GET";
        path: "/count";
    };
    getAdminVideoResource: {
        responses: {
            200: z.ZodObject<{
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
            400: null;
        };
        method: "GET";
        path: "/:liveSessionId/admin-video-resource";
    };
    getVideoResource: {
        responses: {
            200: z.ZodObject<{
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
            400: null;
        };
        method: "GET";
        path: "/:liveSessionId/video-resource";
    };
    getSessionViewerCount: {
        responses: {
            200: z.ZodNullable<z.ZodNumber>;
        };
        method: "GET";
        path: "/:liveSessionId/viewer-count";
    };
    getRemainingPlaybackTime: {
        responses: {
            200: z.ZodNullable<z.ZodNumber>;
            400: null;
        };
        method: "GET";
        path: "/:liveSessionId/remaining-playback-time";
    };
    updatePlaybackTime: {
        responses: {
            200: z.ZodNullable<z.ZodNumber>;
            400: null;
        };
        method: "POST";
        body: z.ZodLiteral<"">;
        path: "/:liveSessionId/update-playback-time";
    };
    createLiveSession: {
        responses: {
            200: z.ZodObject<{
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
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            description: z.ZodString;
            liveCourseId: z.ZodString;
            name: z.ZodString;
            isTrialSession: z.ZodBoolean;
            exerciseId: z.ZodNullable<z.ZodString>;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            liveCourseId: string;
            name: string;
            startTime: string;
            endTime: string;
            isTrialSession: boolean;
            exerciseId: string | null;
        }, {
            description: string;
            liveCourseId: string;
            name: string;
            startTime: string;
            endTime: string;
            isTrialSession: boolean;
            exerciseId: string | null;
        }>;
        path: "/";
    };
    updateLiveSession: {
        responses: {
            200: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                startTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                endTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                streamInputId: z.ZodString;
                streamKey: z.ZodString;
                videoId: z.ZodNullable<z.ZodString>;
                liveCourseId: z.ZodString;
                isQuizClosed: z.ZodBoolean;
                isTrialSession: z.ZodBoolean;
                isSheetUploaded: z.ZodBoolean;
                exerciseId: z.ZodNullable<z.ZodString>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: string;
                description: string;
                liveCourseId: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                startTime: string;
                endTime: string;
                streamInputId: string;
                streamKey: string;
                videoId: string | null;
                isQuizClosed: boolean;
                isTrialSession: boolean;
                isSheetUploaded: boolean;
                exerciseId: string | null;
            }, {
                id: string;
                description: string;
                liveCourseId: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                startTime: (string | Date) & (string | Date | undefined);
                endTime: (string | Date) & (string | Date | undefined);
                streamInputId: string;
                streamKey: string;
                videoId: string | null;
                isQuizClosed: boolean;
                isTrialSession: boolean;
                isSheetUploaded: boolean;
                exerciseId: string | null;
            }>;
        };
        method: "PATCH";
        body: z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            startTime: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
            endTime: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
            isTrialSession: z.ZodOptional<z.ZodBoolean>;
            isSheetUploaded: z.ZodOptional<z.ZodBoolean>;
            exerciseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            name?: string | undefined;
            startTime?: string | undefined;
            endTime?: string | undefined;
            isTrialSession?: boolean | undefined;
            isSheetUploaded?: boolean | undefined;
            exerciseId?: string | null | undefined;
        }, {
            description?: string | undefined;
            name?: string | undefined;
            startTime?: string | Date | undefined;
            endTime?: string | Date | undefined;
            isTrialSession?: boolean | undefined;
            isSheetUploaded?: boolean | undefined;
            exerciseId?: string | null | undefined;
        }>;
        path: "/:liveSessionId";
    };
    deleteLiveSession: {
        responses: {
            200: null;
        };
        method: "DELETE";
        body: null;
        path: "/:liveSessionId";
    };
    getLiveSessionIndex: {
        query: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        responses: {
            200: z.ZodObject<{
                index: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                index: number;
            }, {
                index: number;
            }>;
        };
        method: "GET";
        path: "/index";
    };
    updateRecentLiveSessionTimestamp: {
        responses: {
            200: null;
        };
        method: "POST";
        body: z.ZodObject<{
            liveSessionId: z.ZodString;
            seconds: z.ZodNumber;
            videoLengthSeconds: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
            videoLengthSeconds: number;
            seconds: number;
        }, {
            liveSessionId: string;
            videoLengthSeconds: number;
            seconds: number;
        }>;
        path: "/update-recent";
    };
    uploadCloudflareVideo: {
        responses: {
            200: null;
        };
        method: "POST";
        body: null;
        path: "/:liveSessionId/upload-cloudflare-video";
        headers: z.ZodObject<{
            'upload-length': z.ZodString;
            'upload-metadata': z.ZodString;
        }, "strip", z.ZodTypeAny, {
            'upload-length': string;
            'upload-metadata': string;
        }, {
            'upload-length': string;
            'upload-metadata': string;
        }>;
    };
};
//# sourceMappingURL=index.d.ts.map