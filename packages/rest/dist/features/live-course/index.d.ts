import { z } from 'zod';
export * from './dto';
export declare const liveCourseContract: {
    getLiveCourseById: {
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        summary: "Find unique live course";
        responses: {
            200: z.ZodObject<{
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
                mockExamIds: z.ZodArray<z.ZodString, "many">;
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
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
                    liveCourseId: string;
                }, {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
                    liveCourseId: string;
                }>, "many">;
                upcomingSession: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    startTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    isLiving: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    startTime: string;
                    isLiving: boolean;
                }, {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
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
                    displayName: string | null;
                    name: string;
                    tutorIconUrl: string | null;
                    experience: string | null;
                    organizationName: string | null;
                    tutorFileUrl: string | null;
                }, {
                    id: string;
                    displayName: string | null;
                    name: string;
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
                    startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                    startDate: string;
                    endDate: string;
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                    startDate: string;
                    endDate: string;
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
                }>, "many">;
                fundamentalCourses: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    subject: z.ZodObject<{
                        code: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        code: string;
                    }, {
                        code: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }, {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
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
                    subject: z.ZodObject<{
                        code: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        code: string;
                    }, {
                        code: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }, {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }>, "many">;
                mockExams: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    mockExamGroupType: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
                }, {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
                }>, "many">;
                liveSessions: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    description: z.ZodString;
                    name: z.ZodString;
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
                    sheetUrl: z.ZodNullable<z.ZodString>;
                    timestampSeconds: z.ZodNullable<z.ZodNumber>;
                    videoLengthSeconds: z.ZodNullable<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    description: string;
                    name: string;
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
                    sheetUrl: string | null;
                }, {
                    id: string;
                    description: string;
                    name: string;
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
                    sheetUrl: string | null;
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
                mockExamIds: string[];
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
                    sheetUrl: string | null;
                }[];
                chatRooms: {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
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
                    startDate: string;
                    endDate: string;
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    startDate: string;
                    endDate: string;
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    displayName: string | null;
                    name: string;
                    tutorIconUrl: string | null;
                    experience: string | null;
                    organizationName: string | null;
                    tutorFileUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: string;
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
                fundamentalCourses: {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }[];
                exams: {
                    code: string;
                    name: string;
                }[];
                examTutorials: {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }[];
                mockExams: {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
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
                mockExamIds: string[];
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
                    sheetUrl: string | null;
                }[];
                chatRooms: {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
                    liveSessionsDescription: string | null;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    onlinePrice: number | null;
                    onsitePrice: number | null;
                    subject: {
                        code: string;
                        name: string;
                    } | null;
                    isMyCourse: false;
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
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
                    displayName: string | null;
                    name: string;
                    tutorIconUrl: string | null;
                    experience: string | null;
                    organizationName: string | null;
                    tutorFileUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
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
                fundamentalCourses: {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }[];
                exams: {
                    code: string;
                    name: string;
                }[];
                examTutorials: {
                    id: string;
                    name: string;
                    subject: {
                        code: string;
                    };
                }[];
                mockExams: {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
                }[];
                liveTrialSessionId: string | null;
            }>;
            404: null;
        };
        method: "GET";
        path: "/:id";
    };
    getLiveCourses: {
        query: z.ZodOptional<z.ZodObject<{
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
        summary: "Find live courses";
        responses: {
            200: z.ZodArray<z.ZodDiscriminatedUnion<"isMyCourse", [z.ZodObject<{
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
                startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                startDate: string;
                endDate: string;
                liveSessionsDescription: string | null;
                basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                onlinePrice: number | null;
                onsitePrice: number | null;
                subject: {
                    code: string;
                    name: string;
                } | null;
                isMyCourse: false;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                liveSessionsDescription: string | null;
                basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                onlinePrice: number | null;
                onsitePrice: number | null;
                subject: {
                    code: string;
                    name: string;
                } | null;
                isMyCourse: false;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
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
                startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                    startTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    isLiving: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    startTime: string;
                    isLiving: boolean;
                }, {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
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
                startDate: string;
                endDate: string;
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
                isMyCourse: true;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: string;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
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
                isMyCourse: true;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
                    isLiving: boolean;
                } | null;
                recentLiveSessionName: string | null;
            }>]>, "many">;
        };
        method: "GET";
        path: "";
    };
    createLiveCourse: {
        summary: "Create live course";
        responses: {
            200: z.ZodObject<{
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
        };
        method: "POST";
        body: z.ZodObject<{
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
        path: "";
    };
    updateLiveCourse: {
        summary: "Update Live Course Information";
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "PATCH";
        body: z.ZodObject<{
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
        path: "";
    };
    deleteLiveCourse: {
        summary: "Delete Live Course";
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "DELETE";
        body: z.ZodObject<Pick<{
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
        path: "";
    };
    createLiveCourseComment: {
        responses: {
            200: z.ZodObject<{
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
        };
        method: "POST";
        body: z.ZodObject<{
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
        path: "/comment";
    };
    updateLiveCourseComment: {
        responses: {
            200: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        };
        method: "PATCH";
        body: z.ZodObject<Omit<{
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
        path: "/comment";
    };
    deleteLiveCourseComment: {
        responses: {
            200: z.ZodObject<{
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
        };
        method: "DELETE";
        body: z.ZodObject<{
            userId: z.ZodString;
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            liveCourseId: string;
        }, {
            userId: string;
            liveCourseId: string;
        }>;
        path: "/comment";
    };
    isLiveCourseUserCommented: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: z.ZodObject<{
                isCommented: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                isCommented: boolean;
            }, {
                isCommented: boolean;
            }>;
        };
        method: "GET";
        path: "/comment/:liveCourseId/is-commented";
    };
    getLiveCourseComments: {
        query: z.ZodObject<{
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
        responses: {
            200: z.ZodObject<{
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
                    isMyComment: boolean;
                    user: {
                        profileUrl: string | null;
                        displayName: string;
                    } | null;
                }, {
                    description: string | null;
                    userId: string;
                    liveCourseId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    stars: number;
                    userUpdatedAt: Date | null;
                    isMyComment: boolean;
                    user: {
                        profileUrl: string | null;
                        displayName: string;
                    } | null;
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
                    isMyComment: boolean;
                    user: {
                        profileUrl: string | null;
                        displayName: string;
                    } | null;
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
                    isMyComment: boolean;
                    user: {
                        profileUrl: string | null;
                        displayName: string;
                    } | null;
                }[];
            }>;
        };
        method: "GET";
        path: "/comment";
    };
    getLiveCourseCommentsTotalAndRating: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: z.ZodObject<{
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
        };
        method: "GET";
        path: "/comment/:liveCourseId/total-and-rating";
    };
    getLiveCoursePackages: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
        };
        method: "GET";
        path: "/:liveCourseId/package";
    };
    redeemTrialLiveCourse: {
        responses: {
            200: z.ZodObject<Pick<{
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
            }, "id">, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        path: "/redeem-trial";
    };
    addLiveCourseFundamentalCourse: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            fundamentalCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            fundamentalCourseId: string;
        }, {
            liveCourseId: string;
            fundamentalCourseId: string;
        }>;
        path: "/fundamental-course";
    };
    removeLiveCourseFundamentalCourse: {
        responses: {
            200: null;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            fundamentalCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            fundamentalCourseId: string;
        }, {
            liveCourseId: string;
            fundamentalCourseId: string;
        }>;
        path: "/fundamental-course";
    };
    addLiveCourseExercise: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            exerciseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            exerciseId: string;
        }, {
            liveCourseId: string;
            exerciseId: string;
        }>;
        path: "/exercise";
    };
    removeLiveCourseExercise: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            exerciseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            exerciseId: string;
        }, {
            liveCourseId: string;
            exerciseId: string;
        }>;
        path: "/exercise";
    };
    addLiveCourseExam: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            examId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            examId: string;
        }, {
            liveCourseId: string;
            examId: string;
        }>;
        path: "/exam";
    };
    removeLiveCourseExam: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            examId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            examId: string;
        }, {
            liveCourseId: string;
            examId: string;
        }>;
        path: "/exam";
    };
    addLiveCourseExamTutorial: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            examTutorialId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            examTutorialId: string;
        }, {
            liveCourseId: string;
            examTutorialId: string;
        }>;
        path: "/exam-tutorial";
    };
    removeLiveCourseExamTutorial: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            examTutorialId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            examTutorialId: string;
        }, {
            liveCourseId: string;
            examTutorialId: string;
        }>;
        path: "/exam-tutorial";
    };
    addLiveCourseMockExam: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            mockExamIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            mockExamIds: string[];
        }, {
            liveCourseId: string;
            mockExamIds: string[];
        }>;
        path: "/mock-exam";
    };
    removeLiveCourseMockExam: {
        responses: {
            200: null;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            mockExamId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            mockExamId: string;
        }, {
            liveCourseId: string;
            mockExamId: string;
        }>;
        path: "/mock-exam";
    };
    createLiveCourseChatRoom: {
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                platform: z.ZodNativeEnum<{
                    FACEBOOK: "FACEBOOK";
                    LINE: "LINE";
                }>;
                url: z.ZodString;
                liveCourseId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }>, "many">;
        };
        method: "POST";
        body: z.ZodObject<{
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
        path: "/chat-room";
    };
    updateLiveCourseChatRoom: {
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                platform: z.ZodNativeEnum<{
                    FACEBOOK: "FACEBOOK";
                    LINE: "LINE";
                }>;
                url: z.ZodString;
                liveCourseId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }>, "many">;
        };
        method: "PATCH";
        body: z.ZodObject<{
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
        path: "/chat-room";
    };
    deleteLiveCourseChatRoom: {
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                platform: z.ZodNativeEnum<{
                    FACEBOOK: "FACEBOOK";
                    LINE: "LINE";
                }>;
                url: z.ZodString;
                liveCourseId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }, {
                url: string;
                id: string;
                platform: "FACEBOOK" | "LINE";
                liveCourseId: string;
            }>, "many">;
        };
        method: "DELETE";
        body: z.ZodObject<{
            liveCourseId: z.ZodString;
            chatRoomId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            chatRoomId: string;
        }, {
            liveCourseId: string;
            chatRoomId: string;
        }>;
        path: "/chat-room";
    };
    getSuggestedLiveCourses: {
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
                startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                startDate: string;
                endDate: string;
                liveSessionsDescription: string | null;
                basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                onlinePrice: number | null;
                onsitePrice: number | null;
                subject: {
                    code: string;
                    name: string;
                } | null;
                isMyCourse: false;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                liveSessionsDescription: string | null;
                basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                onlinePrice: number | null;
                onsitePrice: number | null;
                subject: {
                    code: string;
                    name: string;
                } | null;
                isMyCourse: false;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
            }>, "many">;
        };
        method: "GET";
        path: "/suggested";
    };
    getMyCourses: {
        query: z.ZodObject<{
            take: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            take?: number | undefined;
        }, {
            take?: number | undefined;
        }>;
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
                startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                    startTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    isLiving: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                    startTime: string;
                    isLiving: boolean;
                }, {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
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
                startDate: string;
                endDate: string;
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
                isMyCourse: true;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: string;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
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
                isMyCourse: true;
                tutor: {
                    displayName: string | null;
                    tutorIconUrl: string | null;
                } | null;
                upcomingSession: {
                    id: string;
                    name: string;
                    startTime: (string | Date) & (string | Date | undefined);
                    isLiving: boolean;
                } | null;
                recentLiveSessionName: string | null;
            }>, "many">;
        };
        method: "GET";
        path: "/my-course";
    };
    getMyExpiredCourses: {
        responses: {
            200: z.ZodArray<z.ZodObject<Pick<{
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
            }, "id" | "name" | "courseThumbnailUrl">, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                courseThumbnailUrl: string | null;
            }, {
                id: string;
                name: string;
                courseThumbnailUrl: string | null;
            }>, "many">;
        };
        method: "GET";
        path: "/my-expired-course";
    };
    getAdminLiveCourses: {
        query: z.ZodOptional<z.ZodObject<{
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
        summary: "Find all live courses for admin";
        responses: {
            200: z.ZodObject<{
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
                    startDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    endDate: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
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
                    startDate: string;
                    endDate: string;
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
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
                    startDate: string;
                    endDate: string;
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
                    startDate: (string | Date) & (string | Date | undefined);
                    endDate: (string | Date) & (string | Date | undefined);
                    enrolled: number;
                    basePlanType: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN";
                    tutor: {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    } | null;
                }[];
                count: number;
            }>;
        };
        method: "GET";
        path: "/all";
    };
    getTutorCourses: {
        query: z.ZodObject<{
            take: z.ZodNumber;
            skip: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            take: number;
            skip: number;
        }, {
            take: number;
            skip: number;
        }>;
        responses: {
            200: z.ZodObject<{
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
        };
        method: "GET";
        path: "/tutor";
    };
    getTutorCourseDetail: {
        responses: {
            200: z.ZodNullable<z.ZodObject<{
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
            }>>;
        };
        method: "GET";
        path: "/:id/detail-tutor";
    };
    getAdminLiveCourseDetail: {
        responses: {
            200: z.ZodObject<{
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
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
                    liveCourseId: string;
                }, {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
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
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                }, {
                    id: string;
                    name: string;
                }>, "many">;
                liveSessions: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    description: z.ZodString;
                    liveCourseId: z.ZodString;
                    name: z.ZodString;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    startTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    endTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>;
                    streamInputId: z.ZodString;
                    streamKey: z.ZodString;
                    videoId: z.ZodNullable<z.ZodString>;
                    isQuizClosed: z.ZodBoolean;
                    isTrialSession: z.ZodBoolean;
                    isSheetUploaded: z.ZodBoolean;
                    exerciseId: z.ZodNullable<z.ZodString>;
                    sheetUrl: z.ZodNullable<z.ZodString>;
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
                    exercise: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        subject: z.ZodObject<{
                            code: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            code: string;
                        }, {
                            code: string;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    }, {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    }>>;
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
                    exercise: {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    } | null;
                    sheetUrl: string | null;
                    sheetUploadUrl: {
                        url: string;
                        token: string;
                    };
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
                    exercise: {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    } | null;
                    sheetUrl: string | null;
                    sheetUploadUrl: {
                        url: string;
                        token: string;
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
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
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
                        url: string;
                        token: string;
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
                        url: string;
                        token: string;
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
                liveSessions: {
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
                    exercise: {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    } | null;
                    sheetUrl: string | null;
                    sheetUploadUrl: {
                        url: string;
                        token: string;
                    };
                }[];
                chatRooms: {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
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
                fundamentalCourses: {
                    id: string;
                    name: string;
                }[];
                exams: {
                    id: string;
                    name: string;
                }[];
                examTutorials: {
                    id: string;
                    name: string;
                }[];
                mockExams: {
                    id: string;
                    name: string;
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
                imageDescriptions: {
                    id: string;
                    liveCourseId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    imageUrl: string | null;
                    altText: string | null;
                    order: number;
                    imageUploadUrl: {
                        url: string;
                        token: string;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
                liveSessions: {
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
                    exercise: {
                        id: string;
                        name: string;
                        subject: {
                            code: string;
                        };
                    } | null;
                    sheetUrl: string | null;
                    sheetUploadUrl: {
                        url: string;
                        token: string;
                    };
                }[];
                chatRooms: {
                    url: string;
                    id: string;
                    platform: "FACEBOOK" | "LINE";
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
                fundamentalCourses: {
                    id: string;
                    name: string;
                }[];
                exams: {
                    id: string;
                    name: string;
                }[];
                examTutorials: {
                    id: string;
                    name: string;
                }[];
                mockExams: {
                    id: string;
                    name: string;
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
                imageDescriptions: {
                    id: string;
                    liveCourseId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    imageUrl: string | null;
                    altText: string | null;
                    order: number;
                    imageUploadUrl: {
                        url: string;
                        token: string;
                    };
                }[];
            }>;
        };
        method: "GET";
        path: "/:id/admin";
    };
    getLiveCourseEnrolled: {
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        query: z.ZodObject<{
            take: z.ZodNumber;
            skip: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            take: number;
            skip: number;
        }, {
            take: number;
            skip: number;
        }>;
        responses: {
            200: z.ZodObject<{
                enrolledUsers: z.ZodArray<z.ZodObject<{
                    userId: z.ZodString;
                    receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
                        SHIPPING: "SHIPPING";
                        PICKUP: "PICKUP";
                    }>>;
                    addonName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
                    displayName: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
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
                    addonName?: string | null | undefined;
                    displayName?: string | undefined;
                }, {
                    userId: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
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
                    addonName?: string | null | undefined;
                    displayName?: string | undefined;
                }>, "many">;
                count: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                count: number;
                enrolledUsers: {
                    userId: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
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
                    addonName?: string | null | undefined;
                    displayName?: string | undefined;
                }[];
            }, {
                count: number;
                enrolledUsers: {
                    userId: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
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
                    addonName?: string | null | undefined;
                    displayName?: string | undefined;
                }[];
            }>;
        };
        method: "GET";
        path: "/:id/enrolled";
    };
    addLiveCourseAddon: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "POST";
        body: z.ZodObject<Pick<{
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
        path: "/:liveCourseId/addon";
    };
    removeLiveCourseAddon: {
        responses: {
            200: z.ZodObject<{
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
                startDate: string;
                endDate: string;
                enrolled: number;
                lastEnrollmentDate: string | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: string | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
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
                startDate: (string | Date) & (string | Date | undefined);
                endDate: (string | Date) & (string | Date | undefined);
                enrolled: number;
                lastEnrollmentDate: ((string | Date) & (string | Date | undefined)) | null;
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
                fundamentalCourseIds: string[];
                exerciseIds: string[];
                examTutorialIds: string[];
                examIds: string[];
                mockExamIds: string[];
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
                expiresAt: ((string | Date) & (string | Date | undefined)) | null;
                shelfLifeDuration: number | null;
                shelfLifeUnit: "DAY" | "MONTH" | "YEAR" | "LIFETIME" | null;
            }>;
        };
        method: "DELETE";
        body: z.ZodObject<{
            addonId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            addonId: string;
        }, {
            addonId: string;
        }>;
        path: "/:liveCourseId/addon";
    };
    addLiveCourseImageDescription: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: z.ZodObject<{
                url: z.ZodString;
                token: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
                token: string;
            }, {
                url: string;
                token: string;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            order: number;
        }, {
            order: number;
        }>;
        path: "/:liveCourseId/image-description";
    };
    removeLiveCourseImageDescription: {
        pathParams: z.ZodObject<{
            liveCourseId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: null;
        };
        method: "DELETE";
        body: z.ZodObject<{
            imageDescriptionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            imageDescriptionId: string;
        }, {
            imageDescriptionId: string;
        }>;
        path: "/:liveCourseId/image-description";
    };
};
//# sourceMappingURL=index.d.ts.map