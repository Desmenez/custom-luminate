export * from './base-plan';
export * from './live-chat';
export * from './live-course';
export * from './live-course-package';
export * from './live-session';
export * from './tutor';
export * from './quiz';
export * from './subject';
export * from './mock-exam';
export * from './exam';
export * from './student';
export * from './banner';
export * from './payment';
export * from './webhook';
export * from './file-storage';
export declare const mainContract: {
    auth: {
        me: {
            summary: "Get current user";
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    identity: import("zod").ZodString;
                    profileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    identity: string;
                    profileUrl: string | null;
                    displayName: string | null;
                }, {
                    id: string;
                    identity: string;
                    profileUrl: string | null;
                    displayName: string | null;
                }>>;
            };
            method: "GET";
            path: "/auth/me";
        };
        loginAsStudent: {
            responses: {
                200: import("@ts-rest/core").ContractPlainType<{
                    token: string;
                    success: true;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                userId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            path: "/auth/login-as-student";
        };
        loginAsTutor: {
            responses: {
                200: import("@ts-rest/core").ContractPlainType<{
                    token: string;
                    success: true;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                userId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            path: "/auth/login-as-tutor";
        };
        loginTutorWithPassword: {
            responses: {
                200: import("zod").ZodObject<{
                    token: import("zod").ZodString;
                    refreshToken: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    token: string;
                    refreshToken: string;
                }, {
                    token: string;
                    refreshToken: string;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                username: import("zod").ZodString;
                password: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                username: string;
                password: string;
            }, {
                username: string;
                password: string;
            }>;
            path: "/auth/login-tutor-with-password";
        };
    };
    liveChat: {
        getLiveChat: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
                startIndex: import("zod").ZodNumber;
                endIndex: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
                startIndex: number;
                endIndex: number;
            }, {
                liveSessionId: string;
                startIndex: number;
                endIndex: number;
            }>;
            summary: "Get Chats of live session";
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        data: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            message: import("zod").ZodString;
                            avatar: import("zod").ZodNullable<import("zod").ZodString>;
                            timestamp: import("zod").ZodDate;
                        }, "strip", import("zod").ZodTypeAny, {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }, {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }>, "many">;
                        startIndex: import("zod").ZodNumber;
                        endIndex: import("zod").ZodNumber;
                        count: import("zod").ZodNumber;
                        messageTotal: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        data: {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }[];
                        startIndex: number;
                        endIndex: number;
                        count: number;
                        messageTotal: number;
                    }, {
                        data: {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }[];
                        startIndex: number;
                        endIndex: number;
                        count: number;
                        messageTotal: number;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        data: {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }[];
                        startIndex: number;
                        endIndex: number;
                        count: number;
                        messageTotal: number;
                    };
                    ok: true;
                }, {
                    value: {
                        data: {
                            message: string;
                            id: string;
                            name: string;
                            avatar: string | null;
                            timestamp: Date;
                        }[];
                        startIndex: number;
                        endIndex: number;
                        count: number;
                        messageTotal: number;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"CHAT_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "CHAT_NOT_FOUND";
                    }, {
                        code: "CHAT_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "CHAT_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "CHAT_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: "/live-chat";
        };
        sendLiveChat: {
            summary: "Chat to live session";
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        isSuccess: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        isSuccess: boolean;
                    }, {
                        isSuccess: boolean;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        isSuccess: boolean;
                    };
                    ok: true;
                }, {
                    value: {
                        isSuccess: boolean;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"COULD_NOT_SENT_A_CHAT">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "COULD_NOT_SENT_A_CHAT";
                    }, {
                        code: "COULD_NOT_SENT_A_CHAT";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"USER_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "USER_NOT_FOUND";
                    }, {
                        code: "USER_NOT_FOUND";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"LIVE_SESSION_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "LIVE_SESSION_NOT_FOUND";
                    }, {
                        code: "LIVE_SESSION_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "COULD_NOT_SENT_A_CHAT";
                    } | {
                        code: "USER_NOT_FOUND";
                    } | {
                        code: "LIVE_SESSION_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "COULD_NOT_SENT_A_CHAT";
                    } | {
                        code: "USER_NOT_FOUND";
                    } | {
                        code: "LIVE_SESSION_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodIntersection<import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>, import("zod").ZodObject<{
                message: import("zod").ZodString;
                timestamp: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                timestamp: string;
            }, {
                message: string;
                timestamp: string;
            }>>;
            path: "/live-chat";
        };
    };
    liveCourse: {
        getLiveCourseById: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            summary: "Find unique live course";
            responses: {
                200: import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    enrolled: import("zod").ZodNumber;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    hasShipping: import("zod").ZodBoolean;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                    chatRooms: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        platform: import("zod").ZodNativeEnum<{
                            FACEBOOK: "FACEBOOK";
                            LINE: "LINE";
                        }>;
                        url: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    upcomingSession: import("zod").ZodNullable<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        isLiving: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                        tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        displayName: import("zod").ZodNullable<import("zod").ZodString>;
                        name: import("zod").ZodString;
                        experience: import("zod").ZodNullable<import("zod").ZodString>;
                        organizationName: import("zod").ZodNullable<import("zod").ZodString>;
                        id: import("zod").ZodString;
                        tutorFileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    subject: import("zod").ZodNullable<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                        mainColor: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    liveCourseOnUser: import("zod").ZodNullable<import("zod").ZodObject<{
                        userId: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        expiresAt: import("zod").ZodNullable<import("zod").ZodDate>;
                        learningType: import("zod").ZodNativeEnum<{
                            ONLINE: "ONLINE";
                            ONSITE: "ONSITE";
                        }>;
                        receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                            SHIPPING: "SHIPPING";
                            PICKUP: "PICKUP";
                        }>>;
                        shippingAddressId: import("zod").ZodNullable<import("zod").ZodString>;
                        chargeId: import("zod").ZodNullable<import("zod").ZodString>;
                        recentLiveSessionId: import("zod").ZodNullable<import("zod").ZodString>;
                        recentLiveSessionTimestampSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                        recentLiveSessionVideoLengthSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                        shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            userId: import("zod").ZodString;
                            name: import("zod").ZodString;
                            phone: import("zod").ZodString;
                            address: import("zod").ZodString;
                            province: import("zod").ZodString;
                            district: import("zod").ZodString;
                            subdistrict: import("zod").ZodString;
                            postalCode: import("zod").ZodString;
                            createdAt: import("zod").ZodDate;
                            updatedAt: import("zod").ZodDate;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
                    features: import("zod").ZodArray<import("zod").ZodNativeEnum<{
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
                    userStatus: import("zod").ZodObject<{
                        isAuthenticated: import("zod").ZodBoolean;
                        isEnrolled: import("zod").ZodBoolean;
                        isSubscribed: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        isAuthenticated: boolean;
                        isEnrolled: boolean;
                        isSubscribed: boolean;
                    }, {
                        isAuthenticated: boolean;
                        isEnrolled: boolean;
                        isSubscribed: boolean;
                    }>;
                    startDate: import("zod").ZodString;
                    endDate: import("zod").ZodString;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodString>;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodString>;
                    suggestedNextCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        id: import("zod").ZodString;
                        description: import("zod").ZodString;
                        name: import("zod").ZodString;
                        subjectId: import("zod").ZodString;
                        isRecommended: import("zod").ZodBoolean;
                        courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        basePlanType: import("zod").ZodNativeEnum<{
                            FOUNDATION: "FOUNDATION";
                            CORE: "CORE";
                            ENTRANCE: "ENTRANCE";
                            ONET: "ONET";
                            POSN: "POSN";
                        }>;
                        onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        isMyCourse: import("zod").ZodLiteral<false>;
                        tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                            tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            displayName: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }>>;
                        subject: import("zod").ZodNullable<import("zod").ZodObject<{
                            code: import("zod").ZodString;
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: string;
                            name: string;
                        }, {
                            code: string;
                            name: string;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    suggestedPrerequisiteCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        id: import("zod").ZodString;
                        description: import("zod").ZodString;
                        name: import("zod").ZodString;
                        subjectId: import("zod").ZodString;
                        isRecommended: import("zod").ZodBoolean;
                        courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        basePlanType: import("zod").ZodNativeEnum<{
                            FOUNDATION: "FOUNDATION";
                            CORE: "CORE";
                            ENTRANCE: "ENTRANCE";
                            ONET: "ONET";
                            POSN: "POSN";
                        }>;
                        onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        isMyCourse: import("zod").ZodLiteral<false>;
                        tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                            tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            displayName: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }>>;
                        subject: import("zod").ZodNullable<import("zod").ZodObject<{
                            code: import("zod").ZodString;
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: string;
                            name: string;
                        }, {
                            code: string;
                            name: string;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    fundamentalCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        subject: import("zod").ZodObject<{
                            code: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: string;
                        }, {
                            code: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    exams: import("zod").ZodArray<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        name: string;
                    }, {
                        code: string;
                        name: string;
                    }>, "many">;
                    examTutorials: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        subject: import("zod").ZodObject<{
                            code: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: string;
                        }, {
                            code: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    mockExams: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        mockExamGroupType: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        mockExamGroupType: string;
                    }, {
                        id: string;
                        name: string;
                        mockExamGroupType: string;
                    }>, "many">;
                    liveSessions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        description: import("zod").ZodString;
                        name: import("zod").ZodString;
                        isTrialSession: import("zod").ZodBoolean;
                        startTime: import("zod").ZodString;
                        endTime: import("zod").ZodString;
                        exercise: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            subject: import("zod").ZodNullable<import("zod").ZodObject<{
                                code: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                code: string;
                            }, {
                                code: string;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        sheetUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        timestampSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                        videoLengthSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    liveTrialSessionId: import("zod").ZodNullable<import("zod").ZodString>;
                    liveCourseImageDescription: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNumber;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/:id";
        };
        getLiveCourses: {
            query: import("zod").ZodOptional<import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    liveCourseType: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>, "many">>;
                    tutorIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    grades: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    basePlanTypes: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>, "many">>;
                    subjectIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    isRecommended: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    startDate: import("zod").ZodOptional<import("zod").ZodDate>;
                    endDate: import("zod").ZodOptional<import("zod").ZodDate>;
                }, "strip", import("zod").ZodTypeAny, {
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
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    deletedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    startDate: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    popularity: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    price: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodArray<import("zod").ZodDiscriminatedUnion<"isMyCourse", [import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    isMyCourse: import("zod").ZodLiteral<false>;
                    tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                        tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }>>;
                    subject: import("zod").ZodNullable<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        name: string;
                    }, {
                        code: string;
                        name: string;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                }>, import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    subject: import("zod").ZodNullable<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        name: string;
                    }, {
                        code: string;
                        name: string;
                    }>>;
                    tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                        tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }>>;
                    isMyCourse: import("zod").ZodLiteral<true>;
                    updatedAt: import("zod").ZodDate;
                    upcomingSession: import("zod").ZodNullable<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        isLiving: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    recentLiveSessionId: import("zod").ZodNullable<import("zod").ZodString>;
                    recentLiveSessionTimestampSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    recentLiveSessionVideoLengthSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    recentLiveSessionName: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course";
        };
        createLiveCourse: {
            summary: "Create live course";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    courseThumbnailUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseCoverUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseStickerUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseHeroUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseHeroMobileUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    liveSessions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        sheetUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    liveCourseImageDescription: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        order: import("zod").ZodNumber;
                        imageUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                type: import("zod").ZodNativeEnum<{
                    LIVE: "LIVE";
                    FUSION: "FUSION";
                    TAPE: "TAPE";
                    ONSITE: "ONSITE";
                }>;
                description: import("zod").ZodString;
                name: import("zod").ZodString;
                aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                subjectId: import("zod").ZodString;
                isRecommended: import("zod").ZodBoolean;
                tutorId: import("zod").ZodString;
                grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                hasShipping: import("zod").ZodBoolean;
                hasPickUp: import("zod").ZodBoolean;
                pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                examTutorialRequiresSubscription: import("zod").ZodBoolean;
                examRequiresSubscription: import("zod").ZodBoolean;
                basePlanType: import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>;
                playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                limitType: import("zod").ZodNativeEnum<{
                    MINUTE: "MINUTE";
                    PERCENT: "PERCENT";
                    NONE: "NONE";
                }>;
                enableRecordingPlayback: import("zod").ZodBoolean;
                recordingRequiresSubscription: import("zod").ZodBoolean;
                onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                onsiteMaxSeats: import("zod").ZodNumber;
                onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                    YEAR: "YEAR";
                    LIFETIME: "LIFETIME";
                }>>;
                liveSessions: import("zod").ZodArray<import("zod").ZodObject<Pick<{
                    description: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                    name: import("zod").ZodString;
                    isTrialSession: import("zod").ZodBoolean;
                    exerciseId: import("zod").ZodNullable<import("zod").ZodString>;
                    startTime: import("zod").ZodString;
                    endTime: import("zod").ZodString;
                }, "description" | "name" | "startTime" | "endTime" | "isTrialSession" | "exerciseId">, "strip", import("zod").ZodTypeAny, {
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
                chatRooms: import("zod").ZodArray<import("zod").ZodObject<Pick<{
                    id: import("zod").ZodString;
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                }, "url" | "platform">, "strip", import("zod").ZodTypeAny, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }>, "many">;
                startDate: import("zod").ZodNullable<import("zod").ZodString>;
                endDate: import("zod").ZodNullable<import("zod").ZodString>;
                lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodString>;
                suggestedNextCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                suggestedPrerequisiteCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                imagesDescriptionCount: import("zod").ZodNumber;
                addons: import("zod").ZodArray<import("zod").ZodObject<Pick<{
                    id: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                    name: import("zod").ZodString;
                    price: import("zod").ZodNumber;
                    durationDays: import("zod").ZodNumber;
                }, "name" | "price" | "durationDays">, "strip", import("zod").ZodTypeAny, {
                    name: string;
                    price: number;
                    durationDays: number;
                }, {
                    name: string;
                    price: number;
                    durationDays: number;
                }>, "many">;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course";
        };
        updateLiveCourse: {
            summary: "Update Live Course Information";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                aboutCourse: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                subjectId: import("zod").ZodOptional<import("zod").ZodString>;
                isRecommended: import("zod").ZodOptional<import("zod").ZodBoolean>;
                tutorId: import("zod").ZodOptional<import("zod").ZodString>;
                startDate: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                endDate: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                lastEnrollmentDate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>>;
                grades: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                hasShipping: import("zod").ZodOptional<import("zod").ZodBoolean>;
                hasPickUp: import("zod").ZodOptional<import("zod").ZodBoolean>;
                pickupAddress: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                fundamentalCourseIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                examTutorialIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                examIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                mockExamIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                fundamentalCourseRequiresSubscription: import("zod").ZodOptional<import("zod").ZodBoolean>;
                examTutorialRequiresSubscription: import("zod").ZodOptional<import("zod").ZodBoolean>;
                examRequiresSubscription: import("zod").ZodOptional<import("zod").ZodBoolean>;
                basePlanType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                playbackDurationLimit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                limitType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    MINUTE: "MINUTE";
                    PERCENT: "PERCENT";
                    NONE: "NONE";
                }>>;
                enableRecordingPlayback: import("zod").ZodOptional<import("zod").ZodBoolean>;
                recordingRequiresSubscription: import("zod").ZodOptional<import("zod").ZodBoolean>;
                onlinePrice: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                onsitePrice: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                originalOnlinePrice: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                originalOnsitePrice: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                onsiteMaxSeats: import("zod").ZodOptional<import("zod").ZodNumber>;
                onsiteAddress: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                shelfLifeDuration: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                shelfLifeUnit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                    YEAR: "YEAR";
                    LIFETIME: "LIFETIME";
                }>>>;
                chatRooms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }>, "many">>;
                suggestedNextCourseIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                suggestedPrerequisiteCourseIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course";
        };
        deleteLiveCourse: {
            summary: "Delete Live Course";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<Pick<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                subjectId: import("zod").ZodString;
                isRecommended: import("zod").ZodBoolean;
                courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                tutorId: import("zod").ZodString;
                startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                enrolled: import("zod").ZodNumber;
                lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                isCourseMaterialUploaded: import("zod").ZodBoolean;
                hasShipping: import("zod").ZodBoolean;
                shippingPrice: import("zod").ZodNumber;
                hasPickUp: import("zod").ZodBoolean;
                pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                exerciseRequiresSubscription: import("zod").ZodBoolean;
                examTutorialRequiresSubscription: import("zod").ZodBoolean;
                examRequiresSubscription: import("zod").ZodBoolean;
                mockExamRequiresSubscription: import("zod").ZodBoolean;
                basePlanType: import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>;
                isActive: import("zod").ZodBoolean;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                limitType: import("zod").ZodNativeEnum<{
                    MINUTE: "MINUTE";
                    PERCENT: "PERCENT";
                    NONE: "NONE";
                }>;
                type: import("zod").ZodNativeEnum<{
                    LIVE: "LIVE";
                    FUSION: "FUSION";
                    TAPE: "TAPE";
                    ONSITE: "ONSITE";
                }>;
                enableRecordingPlayback: import("zod").ZodBoolean;
                recordingRequiresSubscription: import("zod").ZodBoolean;
                onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                onsiteMaxSeats: import("zod").ZodNumber;
                onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                hasQuiz: import("zod").ZodBoolean;
                expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                    YEAR: "YEAR";
                    LIFETIME: "LIFETIME";
                }>>;
            }, "id">, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/live-course";
        };
        createLiveCourseComment: {
            responses: {
                200: import("zod").ZodObject<{
                    liveCourseId: import("zod").ZodString;
                    stars: import("zod").ZodNumber;
                    userId: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    userUpdatedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                description: import("zod").ZodNullable<import("zod").ZodString>;
                stars: import("zod").ZodNumber;
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                description: string | null;
                liveCourseId: string;
                stars: number;
            }, {
                description: string | null;
                liveCourseId: string;
                stars: number;
            }>;
            path: "/live-course/comment";
        };
        updateLiveCourseComment: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        liveCourseId: import("zod").ZodString;
                        stars: import("zod").ZodNumber;
                        userId: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        userUpdatedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ALREADY_UPDATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ALREADY_UPDATED";
                    }, {
                        code: "ALREADY_UPDATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<Omit<{
                description: import("zod").ZodNullable<import("zod").ZodString>;
                stars: import("zod").ZodNumber;
                liveCourseId: import("zod").ZodString;
            }, "stars">, "strip", import("zod").ZodTypeAny, {
                description: string | null;
                liveCourseId: string;
            }, {
                description: string | null;
                liveCourseId: string;
            }>;
            path: "/live-course/comment";
        };
        deleteLiveCourseComment: {
            responses: {
                200: import("zod").ZodObject<{
                    liveCourseId: import("zod").ZodString;
                    stars: import("zod").ZodNumber;
                    userId: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    userUpdatedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                userId: import("zod").ZodString;
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                userId: string;
                liveCourseId: string;
            }, {
                userId: string;
                liveCourseId: string;
            }>;
            path: "/live-course/comment";
        };
        isLiveCourseUserCommented: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    isCommented: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
                    isCommented: boolean;
                }, {
                    isCommented: boolean;
                }>;
            };
            method: "GET";
            path: "/live-course/comment/:liveCourseId/is-commented";
        };
        getLiveCourseComments: {
            query: import("zod").ZodObject<{
                take: import("zod").ZodOptional<import("zod").ZodNumber>;
                skip: import("zod").ZodOptional<import("zod").ZodNumber>;
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                take?: number | undefined;
                skip?: number | undefined;
            }, {
                liveCourseId: string;
                take?: number | undefined;
                skip?: number | undefined;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    comments: import("zod").ZodArray<import("zod").ZodObject<{
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        userId: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        stars: import("zod").ZodNumber;
                        userUpdatedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                        isMyComment: import("zod").ZodBoolean;
                        user: import("zod").ZodNullable<import("zod").ZodObject<{
                            displayName: import("zod").ZodString;
                            profileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            profileUrl: string | null;
                            displayName: string;
                        }, {
                            profileUrl: string | null;
                            displayName: string;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/comment";
        };
        getLiveCourseCommentsTotalAndRating: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    total: import("zod").ZodNumber;
                    rating: import("zod").ZodNumber;
                    isUserCommented: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/comment/:liveCourseId/total-and-rating";
        };
        getLiveCoursePackages: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    liveCourseId: import("zod").ZodString;
                    title: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNumber;
                    duration: import("zod").ZodNumber;
                    packageType: import("zod").ZodNativeEnum<{
                        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                    }>;
                    durationUnit: import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/:liveCourseId/package";
        };
        redeemTrialLiveCourse: {
            responses: {
                200: import("zod").ZodObject<Pick<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    streamInputId: import("zod").ZodString;
                    streamKey: import("zod").ZodString;
                    videoId: import("zod").ZodNullable<import("zod").ZodString>;
                    liveCourseId: import("zod").ZodString;
                    isQuizClosed: import("zod").ZodBoolean;
                    isTrialSession: import("zod").ZodBoolean;
                    isSheetUploaded: import("zod").ZodBoolean;
                    exerciseId: import("zod").ZodNullable<import("zod").ZodString>;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                }, "id">, "strip", import("zod").ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            path: "/live-course/redeem-trial";
        };
        addLiveCourseFundamentalCourse: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                fundamentalCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                fundamentalCourseId: string;
            }, {
                liveCourseId: string;
                fundamentalCourseId: string;
            }>;
            path: "/live-course/fundamental-course";
        };
        removeLiveCourseFundamentalCourse: {
            responses: {
                200: null;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                fundamentalCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                fundamentalCourseId: string;
            }, {
                liveCourseId: string;
                fundamentalCourseId: string;
            }>;
            path: "/live-course/fundamental-course";
        };
        addLiveCourseExercise: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                exerciseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                exerciseId: string;
            }, {
                liveCourseId: string;
                exerciseId: string;
            }>;
            path: "/live-course/exercise";
        };
        removeLiveCourseExercise: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                exerciseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                exerciseId: string;
            }, {
                liveCourseId: string;
                exerciseId: string;
            }>;
            path: "/live-course/exercise";
        };
        addLiveCourseExam: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                examId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                examId: string;
            }, {
                liveCourseId: string;
                examId: string;
            }>;
            path: "/live-course/exam";
        };
        removeLiveCourseExam: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                examId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                examId: string;
            }, {
                liveCourseId: string;
                examId: string;
            }>;
            path: "/live-course/exam";
        };
        addLiveCourseExamTutorial: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                examTutorialId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                examTutorialId: string;
            }, {
                liveCourseId: string;
                examTutorialId: string;
            }>;
            path: "/live-course/exam-tutorial";
        };
        removeLiveCourseExamTutorial: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                examTutorialId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                examTutorialId: string;
            }, {
                liveCourseId: string;
                examTutorialId: string;
            }>;
            path: "/live-course/exam-tutorial";
        };
        addLiveCourseMockExam: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                mockExamIds: string[];
            }, {
                liveCourseId: string;
                mockExamIds: string[];
            }>;
            path: "/live-course/mock-exam";
        };
        removeLiveCourseMockExam: {
            responses: {
                200: null;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                mockExamId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                mockExamId: string;
            }, {
                liveCourseId: string;
                mockExamId: string;
            }>;
            path: "/live-course/mock-exam";
        };
        createLiveCourseChatRoom: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                data: import("zod").ZodObject<Pick<{
                    id: import("zod").ZodString;
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                }, "url" | "platform">, "strip", import("zod").ZodTypeAny, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }, {
                    url: string;
                    platform: "FACEBOOK" | "LINE";
                }>;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/chat-room";
        };
        updateLiveCourseChatRoom: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                chatRoomId: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    url: import("zod").ZodOptional<import("zod").ZodString>;
                    platform: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    url?: string | undefined;
                    platform?: "FACEBOOK" | "LINE" | undefined;
                }, {
                    url?: string | undefined;
                    platform?: "FACEBOOK" | "LINE" | undefined;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/chat-room";
        };
        deleteLiveCourseChatRoom: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    platform: import("zod").ZodNativeEnum<{
                        FACEBOOK: "FACEBOOK";
                        LINE: "LINE";
                    }>;
                    url: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                chatRoomId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                chatRoomId: string;
            }, {
                liveCourseId: string;
                chatRoomId: string;
            }>;
            path: "/live-course/chat-room";
        };
        getSuggestedLiveCourses: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    isMyCourse: import("zod").ZodLiteral<false>;
                    tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                        tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }>>;
                    subject: import("zod").ZodNullable<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        name: string;
                    }, {
                        code: string;
                        name: string;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/suggested";
        };
        getMyCourses: {
            query: import("zod").ZodObject<{
                take: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                take?: number | undefined;
            }, {
                take?: number | undefined;
            }>;
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    subject: import("zod").ZodNullable<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        name: string;
                    }, {
                        code: string;
                        name: string;
                    }>>;
                    tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                        tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }, {
                        displayName: string | null;
                        tutorIconUrl: string | null;
                    }>>;
                    isMyCourse: import("zod").ZodLiteral<true>;
                    updatedAt: import("zod").ZodDate;
                    upcomingSession: import("zod").ZodNullable<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        isLiving: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    recentLiveSessionId: import("zod").ZodNullable<import("zod").ZodString>;
                    recentLiveSessionTimestampSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    recentLiveSessionVideoLengthSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    recentLiveSessionName: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/my-course";
        };
        getMyExpiredCourses: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<Pick<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "id" | "name" | "courseThumbnailUrl">, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/my-expired-course";
        };
        getAdminLiveCourses: {
            query: import("zod").ZodOptional<import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    liveCourseType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>>;
                    isRecommended: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
                    isRecommended?: boolean | undefined;
                }, {
                    name?: string | undefined;
                    liveCourseType?: "LIVE" | "FUSION" | "TAPE" | "ONSITE" | undefined;
                    isRecommended?: boolean | undefined;
                }>>;
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    startDate: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    endDate: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    enrolled: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                skip: import("zod").ZodOptional<import("zod").ZodNumber>;
                take: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodObject<{
                    count: import("zod").ZodNumber;
                    liveCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        isRecommended: import("zod").ZodBoolean;
                        startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        enrolled: import("zod").ZodNumber;
                        basePlanType: import("zod").ZodNativeEnum<{
                            FOUNDATION: "FOUNDATION";
                            CORE: "CORE";
                            ENTRANCE: "ENTRANCE";
                            ONET: "ONET";
                            POSN: "POSN";
                        }>;
                        tutor: import("zod").ZodNullable<import("zod").ZodObject<{
                            tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            displayName: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }, {
                            displayName: string | null;
                            tutorIconUrl: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/all";
        };
        getTutorCourses: {
            query: import("zod").ZodObject<{
                take: import("zod").ZodNumber;
                skip: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                take: number;
                skip: number;
            }, {
                take: number;
                skip: number;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    total: import("zod").ZodNumber;
                    courses: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        createdAt: import("zod").ZodString;
                        startDate: import("zod").ZodString;
                        endDate: import("zod").ZodString;
                        enrolled: import("zod").ZodNumber;
                        dailyChangePercent: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/tutor";
        };
        getTutorCourseDetail: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodString;
                    endDate: import("zod").ZodString;
                    liveSessions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        description: import("zod").ZodString;
                        name: import("zod").ZodString;
                        startTime: import("zod").ZodString;
                        endTime: import("zod").ZodString;
                        videoDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/:id/detail-tutor";
        };
        getAdminLiveCourseDetail: {
            responses: {
                200: import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    id: import("zod").ZodString;
                    description: import("zod").ZodString;
                    name: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                    courseThumbnailUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseCoverUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseStickerUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseHeroUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    courseHeroMobileUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                    tutor: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>;
                    subject: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>;
                    chatRooms: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        platform: import("zod").ZodNativeEnum<{
                            FACEBOOK: "FACEBOOK";
                            LINE: "LINE";
                        }>;
                        url: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    addons: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        price: import("zod").ZodNumber;
                        durationDays: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    fundamentalCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    liveSessions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        description: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        endTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        streamInputId: import("zod").ZodString;
                        streamKey: import("zod").ZodString;
                        videoId: import("zod").ZodNullable<import("zod").ZodString>;
                        isQuizClosed: import("zod").ZodBoolean;
                        isTrialSession: import("zod").ZodBoolean;
                        isSheetUploaded: import("zod").ZodBoolean;
                        exerciseId: import("zod").ZodNullable<import("zod").ZodString>;
                        sheetUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        sheetUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                        exercise: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            subject: import("zod").ZodObject<{
                                code: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                code: string;
                            }, {
                                code: string;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
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
                    exams: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    examTutorials: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    mockExams: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    suggestedNextCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    suggestedPrerequisiteCourses: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>, "many">;
                    imageDescriptions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        liveCourseId: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNumber;
                        imageUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/:id/admin";
        };
        getLiveCourseEnrolled: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            query: import("zod").ZodObject<{
                take: import("zod").ZodNumber;
                skip: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                take: number;
                skip: number;
            }, {
                take: number;
                skip: number;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    enrolledUsers: import("zod").ZodArray<import("zod").ZodObject<{
                        userId: import("zod").ZodString;
                        receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                            SHIPPING: "SHIPPING";
                            PICKUP: "PICKUP";
                        }>>;
                        addonName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            userId: import("zod").ZodString;
                            name: import("zod").ZodString;
                            phone: import("zod").ZodString;
                            address: import("zod").ZodString;
                            province: import("zod").ZodString;
                            district: import("zod").ZodString;
                            subdistrict: import("zod").ZodString;
                            postalCode: import("zod").ZodString;
                            createdAt: import("zod").ZodDate;
                            updatedAt: import("zod").ZodDate;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        displayName: import("zod").ZodOptional<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    count: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-course/:id/enrolled";
        };
        addLiveCourseAddon: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<Pick<{
                id: import("zod").ZodString;
                liveCourseId: import("zod").ZodString;
                name: import("zod").ZodString;
                price: import("zod").ZodNumber;
                durationDays: import("zod").ZodNumber;
            }, "name" | "price" | "durationDays">, "strip", import("zod").ZodTypeAny, {
                name: string;
                price: number;
                durationDays: number;
            }, {
                name: string;
                price: number;
                durationDays: number;
            }>;
            path: "/live-course/:liveCourseId/addon";
        };
        removeLiveCourseAddon: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                    subjectId: import("zod").ZodString;
                    isRecommended: import("zod").ZodBoolean;
                    courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    tutorId: import("zod").ZodString;
                    startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    enrolled: import("zod").ZodNumber;
                    lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                    paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                    isCourseMaterialUploaded: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                    shippingPrice: import("zod").ZodNumber;
                    hasPickUp: import("zod").ZodBoolean;
                    pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                    fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                    exerciseRequiresSubscription: import("zod").ZodBoolean;
                    examTutorialRequiresSubscription: import("zod").ZodBoolean;
                    examRequiresSubscription: import("zod").ZodBoolean;
                    mockExamRequiresSubscription: import("zod").ZodBoolean;
                    basePlanType: import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                    limitType: import("zod").ZodNativeEnum<{
                        MINUTE: "MINUTE";
                        PERCENT: "PERCENT";
                        NONE: "NONE";
                    }>;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    enableRecordingPlayback: import("zod").ZodBoolean;
                    recordingRequiresSubscription: import("zod").ZodBoolean;
                    onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                    onsiteMaxSeats: import("zod").ZodNumber;
                    onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                    hasQuiz: import("zod").ZodBoolean;
                    expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                    shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                    shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                        YEAR: "YEAR";
                        LIFETIME: "LIFETIME";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                addonId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                addonId: string;
            }, {
                addonId: string;
            }>;
            path: "/live-course/:liveCourseId/addon";
        };
        addLiveCourseImageDescription: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    url: import("zod").ZodString;
                    token: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    url: string;
                    token: string;
                }, {
                    url: string;
                    token: string;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                order: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                order: number;
            }, {
                order: number;
            }>;
            path: "/live-course/:liveCourseId/image-description";
        };
        removeLiveCourseImageDescription: {
            pathParams: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: null;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                imageDescriptionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                imageDescriptionId: string;
            }, {
                imageDescriptionId: string;
            }>;
            path: "/live-course/:liveCourseId/image-description";
        };
    };
    liveSession: {
        getQuizScoreForCms: {
            responses: {
                200: import("zod").ZodObject<{
                    quizzes: import("zod").ZodArray<import("zod").ZodObject<Pick<{
                        id: import("zod").ZodString;
                        liveSessionId: import("zod").ZodString;
                        type: import("zod").ZodNativeEnum<{
                            CHOICE: "CHOICE";
                            TEXT: "TEXT";
                        }>;
                        config: import("zod").ZodUnknown;
                        solution: import("zod").ZodUnknown;
                        isAcceptingAnswers: import("zod").ZodBoolean;
                        createdAt: import("zod").ZodDate;
                    }, "id">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                    }, {
                        id: string;
                    }>, "many">;
                    userScores: import("zod").ZodArray<import("zod").ZodObject<{
                        score: import("zod").ZodNumber;
                        user: import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            displayName: import("zod").ZodString;
                            profileUrl: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: string;
                            profileUrl: string;
                            displayName: string;
                        }, {
                            id: string;
                            profileUrl: string;
                            displayName: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/:liveSessionId/cms/quiz-score";
        };
        getLiveSessionForTutor: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    endTime: import("zod").ZodString;
                    streamInfo: import("zod").ZodNullable<import("zod").ZodObject<{
                        streamKey: import("zod").ZodString;
                        streamUrl: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        streamKey: string;
                        streamUrl: string;
                    }, {
                        streamKey: string;
                        streamUrl: string;
                    }>>;
                    liveCourse: import("zod").ZodObject<Pick<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodString;
                        aboutCourse: import("zod").ZodNullable<import("zod").ZodString>;
                        subjectId: import("zod").ZodString;
                        isRecommended: import("zod").ZodBoolean;
                        courseThumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseHeroUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseHeroMobileUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        tutorId: import("zod").ZodString;
                        startDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        endDate: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                        enrolled: import("zod").ZodNumber;
                        lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                        grades: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                        paymentRemark: import("zod").ZodNullable<import("zod").ZodString>;
                        fundamentalCoursesDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        liveSessionsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        examsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        mockExamsDescription: import("zod").ZodNullable<import("zod").ZodString>;
                        isCourseMaterialUploaded: import("zod").ZodBoolean;
                        hasShipping: import("zod").ZodBoolean;
                        shippingPrice: import("zod").ZodNumber;
                        hasPickUp: import("zod").ZodBoolean;
                        pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                        fundamentalCourseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                        exerciseIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                        examTutorialIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                        examIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                        mockExamIds: import("zod").ZodArray<import("zod").ZodString, "many">;
                        fundamentalCourseRequiresSubscription: import("zod").ZodBoolean;
                        exerciseRequiresSubscription: import("zod").ZodBoolean;
                        examTutorialRequiresSubscription: import("zod").ZodBoolean;
                        examRequiresSubscription: import("zod").ZodBoolean;
                        mockExamRequiresSubscription: import("zod").ZodBoolean;
                        basePlanType: import("zod").ZodNativeEnum<{
                            FOUNDATION: "FOUNDATION";
                            CORE: "CORE";
                            ENTRANCE: "ENTRANCE";
                            ONET: "ONET";
                            POSN: "POSN";
                        }>;
                        isActive: import("zod").ZodBoolean;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        playbackDurationLimit: import("zod").ZodNullable<import("zod").ZodNumber>;
                        limitType: import("zod").ZodNativeEnum<{
                            MINUTE: "MINUTE";
                            PERCENT: "PERCENT";
                            NONE: "NONE";
                        }>;
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        enableRecordingPlayback: import("zod").ZodBoolean;
                        recordingRequiresSubscription: import("zod").ZodBoolean;
                        onlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        onsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        originalOnlinePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        originalOnsitePrice: import("zod").ZodNullable<import("zod").ZodNumber>;
                        onsiteMaxSeats: import("zod").ZodNumber;
                        onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                        hasQuiz: import("zod").ZodBoolean;
                        expiresAt: import("zod").ZodNullable<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                        shelfLifeDuration: import("zod").ZodNullable<import("zod").ZodNumber>;
                        shelfLifeUnit: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                            DAY: "DAY";
                            MONTH: "MONTH";
                            YEAR: "YEAR";
                            LIFETIME: "LIFETIME";
                        }>>;
                    }, "type" | "name">, "strip", import("zod").ZodTypeAny, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        name: string;
                    }, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        name: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/:liveSessionId/for-tutor";
        };
        getLiveSessionsForSchedule: {
            query: import("zod").ZodObject<{
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    startTime: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    liveCourseName: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    tutorName: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                }, {
                    name?: string | undefined;
                }>>;
                excludeEndLiveSession: import("zod").ZodOptional<import("zod").ZodBoolean>;
                take: import("zod").ZodDefault<import("zod").ZodNumber>;
                skip: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    status: import("zod").ZodEnum<["LIVE", "ENDED", "UPCOMING"]>;
                    startTime: import("zod").ZodDate;
                    liveCourse: import("zod").ZodObject<{
                        name: import("zod").ZodString;
                        tutor: import("zod").ZodObject<{
                            name: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            name: string;
                        }, {
                            name: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/for-schedule";
        };
        getLiveSessionsCount: {
            query: import("zod").ZodObject<{
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    startTime: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    liveCourseName: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    tutorName: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                }, {
                    name?: string | undefined;
                }>>;
                excludeEndLiveSession: import("zod").ZodOptional<import("zod").ZodBoolean>;
                take: import("zod").ZodDefault<import("zod").ZodNumber>;
                skip: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
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
                200: import("zod").ZodNumber;
            };
            method: "GET";
            path: "/live-session/count";
        };
        getAdminVideoResource: {
            responses: {
                200: import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    startTime: import("zod").ZodString;
                    endTime: import("zod").ZodString;
                    videoLifecycle: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                        ok: import("zod").ZodLiteral<true>;
                        value: import("zod").ZodObject<{
                            isInput: import("zod").ZodBoolean;
                            videoUID: import("zod").ZodNullable<import("zod").ZodString>;
                            live: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            isInput: boolean;
                            videoUID: string | null;
                            live: boolean;
                        }, {
                            isInput: boolean;
                            videoUID: string | null;
                            live: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    }>, import("zod").ZodObject<{
                        ok: import("zod").ZodLiteral<false>;
                        error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"NO_REMAINING_PLAYBACK_TIME">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "NO_REMAINING_PLAYBACK_TIME";
                        }, {
                            code: "NO_REMAINING_PLAYBACK_TIME";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"COURSE_EXPIRED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "COURSE_EXPIRED";
                        }, {
                            code: "COURSE_EXPIRED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"ONSITE_LIVE_NOT_ALLOWED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "ONSITE_LIVE_NOT_ALLOWED";
                        }, {
                            code: "ONSITE_LIVE_NOT_ALLOWED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"RECORDING_DISABLED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "RECORDING_DISABLED";
                        }, {
                            code: "RECORDING_DISABLED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"RECORDING_REQUIRES_SUBSCRIPTION">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "RECORDING_REQUIRES_SUBSCRIPTION";
                        }, {
                            code: "RECORDING_REQUIRES_SUBSCRIPTION";
                        }>]>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    description: import("zod").ZodString;
                    liveCourse: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        enableRecordingPlayback: import("zod").ZodBoolean;
                        recordingRequiresSubscription: import("zod").ZodBoolean;
                        exercisesCourses: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            id: import("zod").ZodString;
                            subject: import("zod").ZodNullable<import("zod").ZodObject<{
                                code: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                code: string;
                            }, {
                                code: string;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        tutorId: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/:liveSessionId/admin-video-resource";
        };
        getVideoResource: {
            responses: {
                200: import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    startTime: import("zod").ZodString;
                    endTime: import("zod").ZodString;
                    videoLifecycle: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                        ok: import("zod").ZodLiteral<true>;
                        value: import("zod").ZodObject<{
                            isInput: import("zod").ZodBoolean;
                            videoUID: import("zod").ZodNullable<import("zod").ZodString>;
                            live: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            isInput: boolean;
                            videoUID: string | null;
                            live: boolean;
                        }, {
                            isInput: boolean;
                            videoUID: string | null;
                            live: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    }>, import("zod").ZodObject<{
                        ok: import("zod").ZodLiteral<false>;
                        error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"NO_REMAINING_PLAYBACK_TIME">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "NO_REMAINING_PLAYBACK_TIME";
                        }, {
                            code: "NO_REMAINING_PLAYBACK_TIME";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"COURSE_EXPIRED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "COURSE_EXPIRED";
                        }, {
                            code: "COURSE_EXPIRED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"ONSITE_LIVE_NOT_ALLOWED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "ONSITE_LIVE_NOT_ALLOWED";
                        }, {
                            code: "ONSITE_LIVE_NOT_ALLOWED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"RECORDING_DISABLED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "RECORDING_DISABLED";
                        }, {
                            code: "RECORDING_DISABLED";
                        }>, import("zod").ZodObject<{
                            code: import("zod").ZodLiteral<"RECORDING_REQUIRES_SUBSCRIPTION">;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: "RECORDING_REQUIRES_SUBSCRIPTION";
                        }, {
                            code: "RECORDING_REQUIRES_SUBSCRIPTION";
                        }>]>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    remainingPlaybackTime: import("zod").ZodNullable<import("zod").ZodNumber>;
                    timestampSeconds: import("zod").ZodNullable<import("zod").ZodNumber>;
                    index: import("zod").ZodNumber;
                    description: import("zod").ZodString;
                    liveCourse: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        enableRecordingPlayback: import("zod").ZodBoolean;
                        recordingRequiresSubscription: import("zod").ZodBoolean;
                        exercisesCourses: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            id: import("zod").ZodString;
                            subject: import("zod").ZodNullable<import("zod").ZodObject<{
                                code: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                code: string;
                            }, {
                                code: string;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        tutorId: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    learningType: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        ONLINE: "ONLINE";
                        ONSITE: "ONSITE";
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/:liveSessionId/video-resource";
        };
        getSessionViewerCount: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodNumber>;
            };
            method: "GET";
            path: "/live-session/:liveSessionId/viewer-count";
        };
        getRemainingPlaybackTime: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodNumber>;
                400: null;
            };
            method: "GET";
            path: "/live-session/:liveSessionId/remaining-playback-time";
        };
        updatePlaybackTime: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodNumber>;
                400: null;
            };
            method: "POST";
            body: import("zod").ZodLiteral<"">;
            path: "/live-session/:liveSessionId/update-playback-time";
        };
        createLiveSession: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    sheetUploadUrl: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                description: import("zod").ZodString;
                liveCourseId: import("zod").ZodString;
                name: import("zod").ZodString;
                isTrialSession: import("zod").ZodBoolean;
                exerciseId: import("zod").ZodNullable<import("zod").ZodString>;
                startTime: import("zod").ZodString;
                endTime: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/";
        };
        updateLiveSession: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    description: import("zod").ZodString;
                    startTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    endTime: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>;
                    streamInputId: import("zod").ZodString;
                    streamKey: import("zod").ZodString;
                    videoId: import("zod").ZodNullable<import("zod").ZodString>;
                    liveCourseId: import("zod").ZodString;
                    isQuizClosed: import("zod").ZodBoolean;
                    isTrialSession: import("zod").ZodBoolean;
                    isSheetUploaded: import("zod").ZodBoolean;
                    exerciseId: import("zod").ZodNullable<import("zod").ZodString>;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
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
            body: import("zod").ZodObject<{
                description: import("zod").ZodOptional<import("zod").ZodString>;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                startTime: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                endTime: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>, string, string | Date>>;
                isTrialSession: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isSheetUploaded: import("zod").ZodOptional<import("zod").ZodBoolean>;
                exerciseId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
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
            path: "/live-session/:liveSessionId";
        };
        deleteLiveSession: {
            responses: {
                200: null;
            };
            method: "DELETE";
            body: null;
            path: "/live-session/:liveSessionId";
        };
        getLiveSessionIndex: {
            query: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    index: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    index: number;
                }, {
                    index: number;
                }>;
            };
            method: "GET";
            path: "/live-session/index";
        };
        updateRecentLiveSessionTimestamp: {
            responses: {
                200: null;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
                seconds: import("zod").ZodNumber;
                videoLengthSeconds: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
                videoLengthSeconds: number;
                seconds: number;
            }, {
                liveSessionId: string;
                videoLengthSeconds: number;
                seconds: number;
            }>;
            path: "/live-session/update-recent";
        };
        uploadCloudflareVideo: {
            responses: {
                200: null;
            };
            method: "POST";
            body: null;
            path: "/live-session/:liveSessionId/upload-cloudflare-video";
            headers: import("zod").ZodObject<{
                'upload-length': import("zod").ZodString;
                'upload-metadata': import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                'upload-length': string;
                'upload-metadata': string;
            }, {
                'upload-length': string;
                'upload-metadata': string;
            }>;
        };
    };
    quiz: {
        getQuizzes: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            summary: "Get quizzes by live session id";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    liveSessionId: import("zod").ZodString;
                    type: import("zod").ZodNativeEnum<{
                        CHOICE: "CHOICE";
                        TEXT: "TEXT";
                    }>;
                    config: import("zod").ZodUnknown;
                    solution: import("zod").ZodUnknown;
                    isAcceptingAnswers: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }>, "many">;
            };
            method: "GET";
            path: "/quiz";
        };
        getQuizzesForStudent: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            summary: "Get quizzes for student";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    liveSessionId: import("zod").ZodString;
                    type: import("zod").ZodNativeEnum<{
                        CHOICE: "CHOICE";
                        TEXT: "TEXT";
                    }>;
                    config: import("zod").ZodUnknown;
                    solution: import("zod").ZodNullable<import("zod").ZodUnknown>;
                    myAnswer: import("zod").ZodNullable<import("zod").ZodUnknown>;
                    isAcceptingAnswers: import("zod").ZodBoolean;
                    isMyAnswerCorrect: import("zod").ZodNullable<import("zod").ZodBoolean>;
                    createdAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    isMyAnswerCorrect: boolean | null;
                    config?: unknown;
                    solution?: unknown;
                    myAnswer?: unknown;
                }, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    isMyAnswerCorrect: boolean | null;
                    config?: unknown;
                    solution?: unknown;
                    myAnswer?: unknown;
                }>, "many">;
            };
            method: "GET";
            path: "/quiz/for-student";
        };
        createQuiz: {
            summary: "Create live session quiz";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    liveSessionId: import("zod").ZodString;
                    type: import("zod").ZodNativeEnum<{
                        CHOICE: "CHOICE";
                        TEXT: "TEXT";
                    }>;
                    config: import("zod").ZodUnknown;
                    solution: import("zod").ZodUnknown;
                    isAcceptingAnswers: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<Pick<{
                id: import("zod").ZodString;
                liveSessionId: import("zod").ZodString;
                type: import("zod").ZodNativeEnum<{
                    CHOICE: "CHOICE";
                    TEXT: "TEXT";
                }>;
                config: import("zod").ZodUnknown;
                solution: import("zod").ZodUnknown;
                isAcceptingAnswers: import("zod").ZodBoolean;
                createdAt: import("zod").ZodDate;
            }, "type" | "liveSessionId" | "config" | "solution" | "isAcceptingAnswers">, "strip", import("zod").ZodTypeAny, {
                type: "CHOICE" | "TEXT";
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }, {
                type: "CHOICE" | "TEXT";
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }>;
            path: "/quiz";
        };
        updateQuiz: {
            summary: "Update quiz";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    liveSessionId: import("zod").ZodString;
                    type: import("zod").ZodNativeEnum<{
                        CHOICE: "CHOICE";
                        TEXT: "TEXT";
                    }>;
                    config: import("zod").ZodUnknown;
                    solution: import("zod").ZodUnknown;
                    isAcceptingAnswers: import("zod").ZodBoolean;
                    createdAt: import("zod").ZodDate;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }, {
                    type: "CHOICE" | "TEXT";
                    id: string;
                    createdAt: Date;
                    liveSessionId: string;
                    isAcceptingAnswers: boolean;
                    config?: unknown;
                    solution?: unknown;
                }>;
                404: null;
            };
            method: "PATCH";
            body: import("zod").ZodObject<Pick<{
                id: import("zod").ZodString;
                liveSessionId: import("zod").ZodString;
                type: import("zod").ZodNativeEnum<{
                    CHOICE: "CHOICE";
                    TEXT: "TEXT";
                }>;
                config: import("zod").ZodUnknown;
                solution: import("zod").ZodUnknown;
                isAcceptingAnswers: import("zod").ZodBoolean;
                createdAt: import("zod").ZodDate;
            }, "isAcceptingAnswers">, "strip", import("zod").ZodTypeAny, {
                isAcceptingAnswers: boolean;
            }, {
                isAcceptingAnswers: boolean;
            }>;
            path: "/quiz/:quizId";
        };
        deleteQuiz: {
            summary: "Delete quiz";
            responses: {
                200: null;
            };
            method: "DELETE";
            body: import("zod").ZodLiteral<"">;
            path: "/quiz/:quizId";
        };
        respondQuiz: {
            summary: "Respond to quiz";
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        liveSessionId: import("zod").ZodString;
                        type: import("zod").ZodNativeEnum<{
                            CHOICE: "CHOICE";
                            TEXT: "TEXT";
                        }>;
                        config: import("zod").ZodUnknown;
                        solution: import("zod").ZodNullable<import("zod").ZodUnknown>;
                        myAnswer: import("zod").ZodNullable<import("zod").ZodUnknown>;
                        isAcceptingAnswers: import("zod").ZodBoolean;
                        isMyAnswerCorrect: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        createdAt: import("zod").ZodDate;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "CHOICE" | "TEXT";
                        id: string;
                        createdAt: Date;
                        liveSessionId: string;
                        isAcceptingAnswers: boolean;
                        isMyAnswerCorrect: boolean | null;
                        config?: unknown;
                        solution?: unknown;
                        myAnswer?: unknown;
                    }, {
                        type: "CHOICE" | "TEXT";
                        id: string;
                        createdAt: Date;
                        liveSessionId: string;
                        isAcceptingAnswers: boolean;
                        isMyAnswerCorrect: boolean | null;
                        config?: unknown;
                        solution?: unknown;
                        myAnswer?: unknown;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        type: "CHOICE" | "TEXT";
                        id: string;
                        createdAt: Date;
                        liveSessionId: string;
                        isAcceptingAnswers: boolean;
                        isMyAnswerCorrect: boolean | null;
                        config?: unknown;
                        solution?: unknown;
                        myAnswer?: unknown;
                    };
                    ok: true;
                }, {
                    value: {
                        type: "CHOICE" | "TEXT";
                        id: string;
                        createdAt: Date;
                        liveSessionId: string;
                        isAcceptingAnswers: boolean;
                        isMyAnswerCorrect: boolean | null;
                        config?: unknown;
                        solution?: unknown;
                        myAnswer?: unknown;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"QUIZ_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "QUIZ_NOT_FOUND";
                    }, {
                        code: "QUIZ_NOT_FOUND";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NOT_ACCEPTING_ANSWERS">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NOT_ACCEPTING_ANSWERS";
                    }, {
                        code: "NOT_ACCEPTING_ANSWERS";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ALREADY_RESPONSED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ALREADY_RESPONSED";
                    }, {
                        code: "ALREADY_RESPONSED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "QUIZ_NOT_FOUND";
                    } | {
                        code: "NOT_ACCEPTING_ANSWERS";
                    } | {
                        code: "ALREADY_RESPONSED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "QUIZ_NOT_FOUND";
                    } | {
                        code: "NOT_ACCEPTING_ANSWERS";
                    } | {
                        code: "ALREADY_RESPONSED";
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                answer: import("zod").ZodUnknown;
            }, "strip", import("zod").ZodTypeAny, {
                answer?: unknown;
            }, {
                answer?: unknown;
            }>;
            path: "/quiz/:quizId/respond";
        };
        subscribeStudentEvents: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            responses: {
                200: import("zod").ZodNever;
            };
            method: "GET";
            path: "/quiz/subscribe-student-events";
        };
        subscribeTutorEvents: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            responses: {
                200: import("zod").ZodNever;
            };
            method: "GET";
            path: "/quiz/subscribe-tutor-events";
        };
        showStudentRank: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            responses: {
                200: null;
            };
            method: "POST";
            body: import("zod").ZodLiteral<"">;
            path: "/quiz/show-student-rank";
        };
        endAllQuiz: {
            query: import("zod").ZodObject<{
                liveSessionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveSessionId: string;
            }, {
                liveSessionId: string;
            }>;
            responses: {
                200: null;
            };
            method: "POST";
            body: import("zod").ZodLiteral<"">;
            path: "/quiz/end-all-quiz";
        };
    };
    health: {
        health: {
            summary: "Health check";
            description: "This is a health check endpoint. It returns a message to indicate that the API is up and running.";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
            method: "GET";
            path: "/health";
        };
    };
    liveCoursePackage: {
        createLiveCoursePackage: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    liveCourseId: import("zod").ZodString;
                    title: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNumber;
                    duration: import("zod").ZodNumber;
                    packageType: import("zod").ZodNativeEnum<{
                        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                    }>;
                    durationUnit: import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<Pick<{
                id: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                liveCourseId: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNumber;
                duration: import("zod").ZodNumber;
                packageType: import("zod").ZodNativeEnum<{
                    LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                    WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                }>;
                durationUnit: import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                }>;
                isActive: import("zod").ZodBoolean;
                hasShipping: import("zod").ZodBoolean;
            }, "description" | "liveCourseId" | "price" | "title" | "duration" | "packageType" | "durationUnit">, "strip", import("zod").ZodTypeAny, {
                description: string | null;
                liveCourseId: string;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }, {
                description: string | null;
                liveCourseId: string;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }>;
            path: "/live-course-package";
        };
        updateLiveCoursePackage: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    liveCourseId: import("zod").ZodString;
                    title: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNumber;
                    duration: import("zod").ZodNumber;
                    packageType: import("zod").ZodNativeEnum<{
                        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                    }>;
                    durationUnit: import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
                }>;
            };
            method: "PATCH";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                price: import("zod").ZodOptional<import("zod").ZodNumber>;
                title: import("zod").ZodOptional<import("zod").ZodString>;
                duration: import("zod").ZodOptional<import("zod").ZodNumber>;
                packageType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                    WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                }>>;
                durationUnit: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                description?: string | null | undefined;
                price?: number | undefined;
                title?: string | undefined;
                duration?: number | undefined;
                packageType?: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION" | undefined;
                durationUnit?: "DAY" | "MONTH" | undefined;
            }, {
                id: string;
                description?: string | null | undefined;
                price?: number | undefined;
                title?: string | undefined;
                duration?: number | undefined;
                packageType?: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION" | undefined;
                durationUnit?: "DAY" | "MONTH" | undefined;
            }>;
            path: "/live-course-package";
        };
        deleteLiveCoursePackage: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    createdAt: import("zod").ZodDate;
                    updatedAt: import("zod").ZodDate;
                    liveCourseId: import("zod").ZodString;
                    title: import("zod").ZodString;
                    description: import("zod").ZodNullable<import("zod").ZodString>;
                    price: import("zod").ZodNumber;
                    duration: import("zod").ZodNumber;
                    packageType: import("zod").ZodNativeEnum<{
                        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                    }>;
                    durationUnit: import("zod").ZodNativeEnum<{
                        DAY: "DAY";
                        MONTH: "MONTH";
                    }>;
                    isActive: import("zod").ZodBoolean;
                    hasShipping: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
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
                }>;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: "/live-course-package";
        };
    };
    basePlan: {
        getIsCanAccessViaLiveCourse: {
            query: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    canAccess: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
                    canAccess: boolean;
                }, {
                    canAccess: boolean;
                }>;
            };
            method: "GET";
            path: "/base-plan/is-can-access-via-live-course";
        };
        getBasePlans: {
            query: import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    ids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    description: import("zod").ZodOptional<import("zod").ZodString>;
                    isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    subjectId: import("zod").ZodOptional<import("zod").ZodString>;
                    basePlanTypes: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>, "many">>;
                    basePlanStyle: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>>;
                    basePlanClassType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>>;
                    basePlanStudyMajor: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>>;
                    basePlanStudyYear: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>>;
                    basePlanStudySemester: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                        FOUNDATION: "FOUNDATION";
                        CORE: "CORE";
                        ENTRANCE: "ENTRANCE";
                        ONET: "ONET";
                        POSN: "POSN";
                    }>>;
                    school: import("zod").ZodOptional<import("zod").ZodString>;
                    basePlanTcasExamSubjects: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    tutorIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    grades: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    semester: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    subjectIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    isSuggested: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    ids?: string[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    isActive?: boolean | undefined;
                    subjectId?: string | undefined;
                    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                    basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    school?: string | undefined;
                    basePlanTcasExamSubjects?: string[] | undefined;
                    tutorIds?: string[] | undefined;
                    grades?: number[] | undefined;
                    semester?: number[] | undefined;
                    subjectIds?: string[] | undefined;
                    isSuggested?: boolean | undefined;
                }, {
                    ids?: string[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    isActive?: boolean | undefined;
                    subjectId?: string | undefined;
                    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                    basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    school?: string | undefined;
                    basePlanTcasExamSubjects?: string[] | undefined;
                    tutorIds?: string[] | undefined;
                    grades?: number[] | undefined;
                    semester?: number[] | undefined;
                    subjectIds?: string[] | undefined;
                    isSuggested?: boolean | undefined;
                }>>;
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    description: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    deletedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: "asc" | "desc" | undefined;
                    description?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                }, {
                    name?: "asc" | "desc" | undefined;
                    description?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                where?: {
                    ids?: string[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    isActive?: boolean | undefined;
                    subjectId?: string | undefined;
                    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                    basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    school?: string | undefined;
                    basePlanTcasExamSubjects?: string[] | undefined;
                    tutorIds?: string[] | undefined;
                    grades?: number[] | undefined;
                    semester?: number[] | undefined;
                    subjectIds?: string[] | undefined;
                    isSuggested?: boolean | undefined;
                } | undefined;
                orderBy?: {
                    name?: "asc" | "desc" | undefined;
                    description?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                } | undefined;
            }, {
                where?: {
                    ids?: string[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    isActive?: boolean | undefined;
                    subjectId?: string | undefined;
                    basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                    basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                    school?: string | undefined;
                    basePlanTcasExamSubjects?: string[] | undefined;
                    tutorIds?: string[] | undefined;
                    grades?: number[] | undefined;
                    semester?: number[] | undefined;
                    subjectIds?: string[] | undefined;
                    isSuggested?: boolean | undefined;
                } | undefined;
                orderBy?: {
                    name?: "asc" | "desc" | undefined;
                    description?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                } | undefined;
            }>;
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    subject: import("zod").ZodObject<{
                        code: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                    }, {
                        code: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
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
            };
            method: "GET";
            path: "/base-plan";
        };
    };
    tutor: {
        getTutors: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    id: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    name: string;
                }, {
                    id: string;
                    name: string;
                }>, "many">;
            };
            method: "GET";
            path: "/tutor";
        };
        getTutorInfo: {
            pathParams: import("zod").ZodObject<{
                tutorId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                tutorId: string;
            }, {
                tutorId: string;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    displayName: import("zod").ZodNullable<import("zod").ZodString>;
                    experience: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    displayName: string | null;
                    name: string;
                    tutorIconUrl: string | null;
                    experience: string | null;
                }, {
                    id: string;
                    displayName: string | null;
                    name: string;
                    tutorIconUrl: string | null;
                    experience: string | null;
                }>;
            };
            method: "GET";
            path: "/tutor/:tutorId";
        };
        getTutorCards: {
            query: import("zod").ZodObject<{
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    order: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                }, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                }>>;
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    tutorIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                }, {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                }>>;
                skip: import("zod").ZodOptional<import("zod").ZodNumber>;
                take: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                } | undefined;
                where?: {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                } | undefined;
                skip?: number | undefined;
                take?: number | undefined;
            }, {
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                } | undefined;
                where?: {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                } | undefined;
                skip?: number | undefined;
                take?: number | undefined;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<{
                        result: import("zod").ZodArray<import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                            id: import("zod").ZodString;
                            isActive: import("zod").ZodBoolean;
                            tutorId: import("zod").ZodString;
                            imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            altText: import("zod").ZodNullable<import("zod").ZodString>;
                            order: import("zod").ZodNullable<import("zod").ZodNumber>;
                            createdAt: import("zod").ZodDate;
                            updatedAt: import("zod").ZodDate;
                        }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        }, {
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        }>, import("zod").ZodObject<{
                            tutorName: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            tutorName: string;
                        }, {
                            tutorName: string;
                        }>>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
                        result: ({
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        } & {
                            tutorName: string;
                        })[];
                    }, {
                        result: ({
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        } & {
                            tutorName: string;
                        })[];
                    }>, import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        total: number;
                    }, {
                        total: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        result: ({
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        } & {
                            tutorName: string;
                        })[];
                    } & {
                        total: number;
                    };
                    ok: true;
                }, {
                    value: {
                        result: ({
                            id: string;
                            tutorId: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                        } & {
                            tutorName: string;
                        })[];
                    } & {
                        total: number;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: "/tutor/card";
        };
        getStudentGraph: {
            query: import("zod").ZodObject<{
                days: import("zod").ZodUnion<[import("zod").ZodLiteral<1>, import("zod").ZodLiteral<7>, import("zod").ZodLiteral<30>]>;
                endDate: import("zod").ZodDate;
            }, "strip", import("zod").ZodTypeAny, {
                endDate: Date;
                days: 30 | 1 | 7;
            }, {
                endDate: Date;
                days: 30 | 1 | 7;
            }>;
            responses: {
                200: import("zod").ZodObject<{
                    startDate: import("zod").ZodString;
                    endDate: import("zod").ZodString;
                    newStudents: import("zod").ZodNumber;
                    newStudentsIncreasePercent: import("zod").ZodNumber;
                    totalStudents: import("zod").ZodNumber;
                    points: import("zod").ZodArray<import("zod").ZodObject<{
                        date: import("zod").ZodString;
                        newStudents: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        date: string;
                        newStudents: number;
                    }, {
                        date: string;
                        newStudents: number;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    startDate: string;
                    endDate: string;
                    newStudents: number;
                    newStudentsIncreasePercent: number;
                    totalStudents: number;
                    points: {
                        date: string;
                        newStudents: number;
                    }[];
                }, {
                    startDate: string;
                    endDate: string;
                    newStudents: number;
                    newStudentsIncreasePercent: number;
                    totalStudents: number;
                    points: {
                        date: string;
                        newStudents: number;
                    }[];
                }>;
            };
            method: "GET";
            path: "/tutor/student-graph";
        };
        getUpcomingSessions: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    courseId: import("zod").ZodString;
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    startTime: import("zod").ZodString;
                    endTime: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    name: string;
                    startTime: string;
                    endTime: string;
                    courseId: string;
                }, {
                    id: string;
                    name: string;
                    startTime: string;
                    endTime: string;
                    courseId: string;
                }>, "many">;
            };
            method: "GET";
            path: "/tutor/upcoming-sessions";
        };
        getTutorCard: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        tutorId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }>, import("zod").ZodObject<{
                        tutorName: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        tutorName: string;
                    }, {
                        tutorName: string;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        tutorName: string;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        tutorName: string;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/tutor${string}`;
        };
        countTutorCard: {
            query: import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    tutorIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                    isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                    isActive?: boolean | undefined;
                }, {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                    isActive?: boolean | undefined;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                where?: {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                    isActive?: boolean | undefined;
                } | undefined;
            }, {
                where?: {
                    name?: string | undefined;
                    tutorIds?: string[] | undefined;
                    isActive?: boolean | undefined;
                } | undefined;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    value: number;
                    ok: true;
                }, {
                    value: number;
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/tutor${string}`;
        };
        createTutorCard: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        tutorId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }>, import("zod").ZodObject<{
                        getTutorCardUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }, {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_TUTOR_CARD_CREATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_TUTOR_CARD_CREATED";
                    }, {
                        code: "NO_TUTOR_CARD_CREATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_TUTOR_CARD_CREATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_TUTOR_CARD_CREATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                tutorId: import("zod").ZodString;
                isActive: import("zod").ZodBoolean;
                order: import("zod").ZodOptional<import("zod").ZodNumber>;
                altText: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                tutorId: string;
                isActive: boolean;
                order?: number | undefined;
                altText?: string | undefined;
            }, {
                tutorId: string;
                isActive: boolean;
                order?: number | undefined;
                altText?: string | undefined;
            }>;
            path: `/tutor${string}`;
        };
        updateTutorCard: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        tutorId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }>, import("zod").ZodObject<{
                        getTutorCardUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }, {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    } & {
                        getTutorCardUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_TUTOR_CARD_UPDATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_TUTOR_CARD_UPDATED";
                    }, {
                        code: "NO_TUTOR_CARD_UPDATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_TUTOR_CARD_UPDATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_TUTOR_CARD_UPDATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "PUT";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
                tutorId: import("zod").ZodOptional<import("zod").ZodString>;
                isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                order: import("zod").ZodOptional<import("zod").ZodNumber>;
                altText: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                tutorId?: string | undefined;
                isActive?: boolean | undefined;
                order?: number | undefined;
                altText?: string | undefined;
            }, {
                id: string;
                tutorId?: string | undefined;
                isActive?: boolean | undefined;
                order?: number | undefined;
                altText?: string | undefined;
            }>;
            path: `/tutor${string}`;
        };
        deleteTutorCard: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        tutorId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_TUTOR_CARD_DELETED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_TUTOR_CARD_DELETED";
                    }, {
                        code: "NO_TUTOR_CARD_DELETED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_TUTOR_CARD_DELETED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_TUTOR_CARD_DELETED";
                    };
                    ok: false;
                }>]>;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: `/tutor${string}`;
        };
        getTutorCardUploadUrl: {
            query: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        url: string;
                        token: string;
                    };
                    ok: true;
                }, {
                    value: {
                        url: string;
                        token: string;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }, {
                        code: "TUTOR_CARD_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "TUTOR_CARD_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/tutor${string}`;
        };
        onUploadTutorCardComplete: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        isActive: import("zod").ZodBoolean;
                        tutorId: import("zod").ZodString;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }, {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        tutorId: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_BANNER_UPDATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_BANNER_UPDATED";
                    }, {
                        code: "NO_BANNER_UPDATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "PUT";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: `/tutor${string}`;
        };
    };
    subject: {
        getSubjects: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    code: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    code: string;
                    id: string;
                    name: string;
                }, {
                    code: string;
                    id: string;
                    name: string;
                }>>, "many">;
            };
            method: "GET";
            path: "/subject";
        };
    };
    mockExam: {
        getMockExams: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    mockExamGroupType: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
                }, {
                    id: string;
                    name: string;
                    mockExamGroupType: string;
                }>, "many">;
            };
            method: "GET";
            path: "/mock-exam";
        };
    };
    exam: {
        getExams: {
            query: import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    code: import("zod").ZodOptional<import("zod").ZodString>;
                    isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isMockExam: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isPremium: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isComingSoon: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    examSubjectId: import("zod").ZodOptional<import("zod").ZodString>;
                    examGroupId: import("zod").ZodOptional<import("zod").ZodString>;
                    examEducationLevelId: import("zod").ZodOptional<import("zod").ZodString>;
                    subjectName: import("zod").ZodOptional<import("zod").ZodString>;
                    mode: import("zod").ZodEnum<["PAPER_BASED", "COMPUTER_BASED"]>;
                    lowerSublevelBound: import("zod").ZodOptional<import("zod").ZodNumber>;
                    upperSublevelBound: import("zod").ZodOptional<import("zod").ZodNumber>;
                    lowerExamineeDifficulty: import("zod").ZodOptional<import("zod").ZodNumber>;
                    upperExamineeDifficulty: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    mode: "PAPER_BASED" | "COMPUTER_BASED";
                    name?: string | undefined;
                    code?: string | undefined;
                    isActive?: boolean | undefined;
                    isMockExam?: boolean | undefined;
                    isPremium?: boolean | undefined;
                    isComingSoon?: boolean | undefined;
                    examSubjectId?: string | undefined;
                    examGroupId?: string | undefined;
                    examEducationLevelId?: string | undefined;
                    subjectName?: string | undefined;
                    lowerSublevelBound?: number | undefined;
                    upperSublevelBound?: number | undefined;
                    lowerExamineeDifficulty?: number | undefined;
                    upperExamineeDifficulty?: number | undefined;
                }, {
                    mode: "PAPER_BASED" | "COMPUTER_BASED";
                    name?: string | undefined;
                    code?: string | undefined;
                    isActive?: boolean | undefined;
                    isMockExam?: boolean | undefined;
                    isPremium?: boolean | undefined;
                    isComingSoon?: boolean | undefined;
                    examSubjectId?: string | undefined;
                    examGroupId?: string | undefined;
                    examEducationLevelId?: string | undefined;
                    subjectName?: string | undefined;
                    lowerSublevelBound?: number | undefined;
                    upperSublevelBound?: number | undefined;
                    lowerExamineeDifficulty?: number | undefined;
                    upperExamineeDifficulty?: number | undefined;
                }>>;
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    deletedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    code: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    order: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isMockExam: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    timeLimit: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    issueDate: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    announcementDate: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isExamFileUploaded: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isAnswerSheetUploaded: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isDocumentUploaded: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isPremium: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isComingSoon: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    attemptLimit: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    lowerSublevelBound: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    upperSublevelBound: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    lowerExamineeDifficulty: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    upperExamineeDifficulty: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                    name?: "asc" | "desc" | undefined;
                    code?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    isMockExam?: "asc" | "desc" | undefined;
                    timeLimit?: "asc" | "desc" | undefined;
                    issueDate?: "asc" | "desc" | undefined;
                    announcementDate?: "asc" | "desc" | undefined;
                    isExamFileUploaded?: "asc" | "desc" | undefined;
                    isAnswerSheetUploaded?: "asc" | "desc" | undefined;
                    isDocumentUploaded?: "asc" | "desc" | undefined;
                    isPremium?: "asc" | "desc" | undefined;
                    isComingSoon?: "asc" | "desc" | undefined;
                    attemptLimit?: "asc" | "desc" | undefined;
                    lowerSublevelBound?: "asc" | "desc" | undefined;
                    upperSublevelBound?: "asc" | "desc" | undefined;
                    lowerExamineeDifficulty?: "asc" | "desc" | undefined;
                    upperExamineeDifficulty?: "asc" | "desc" | undefined;
                }, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                    name?: "asc" | "desc" | undefined;
                    code?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    isMockExam?: "asc" | "desc" | undefined;
                    timeLimit?: "asc" | "desc" | undefined;
                    issueDate?: "asc" | "desc" | undefined;
                    announcementDate?: "asc" | "desc" | undefined;
                    isExamFileUploaded?: "asc" | "desc" | undefined;
                    isAnswerSheetUploaded?: "asc" | "desc" | undefined;
                    isDocumentUploaded?: "asc" | "desc" | undefined;
                    isPremium?: "asc" | "desc" | undefined;
                    isComingSoon?: "asc" | "desc" | undefined;
                    attemptLimit?: "asc" | "desc" | undefined;
                    lowerSublevelBound?: "asc" | "desc" | undefined;
                    upperSublevelBound?: "asc" | "desc" | undefined;
                    lowerExamineeDifficulty?: "asc" | "desc" | undefined;
                    upperExamineeDifficulty?: "asc" | "desc" | undefined;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                where?: {
                    mode: "PAPER_BASED" | "COMPUTER_BASED";
                    name?: string | undefined;
                    code?: string | undefined;
                    isActive?: boolean | undefined;
                    isMockExam?: boolean | undefined;
                    isPremium?: boolean | undefined;
                    isComingSoon?: boolean | undefined;
                    examSubjectId?: string | undefined;
                    examGroupId?: string | undefined;
                    examEducationLevelId?: string | undefined;
                    subjectName?: string | undefined;
                    lowerSublevelBound?: number | undefined;
                    upperSublevelBound?: number | undefined;
                    lowerExamineeDifficulty?: number | undefined;
                    upperExamineeDifficulty?: number | undefined;
                } | undefined;
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                    name?: "asc" | "desc" | undefined;
                    code?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    isMockExam?: "asc" | "desc" | undefined;
                    timeLimit?: "asc" | "desc" | undefined;
                    issueDate?: "asc" | "desc" | undefined;
                    announcementDate?: "asc" | "desc" | undefined;
                    isExamFileUploaded?: "asc" | "desc" | undefined;
                    isAnswerSheetUploaded?: "asc" | "desc" | undefined;
                    isDocumentUploaded?: "asc" | "desc" | undefined;
                    isPremium?: "asc" | "desc" | undefined;
                    isComingSoon?: "asc" | "desc" | undefined;
                    attemptLimit?: "asc" | "desc" | undefined;
                    lowerSublevelBound?: "asc" | "desc" | undefined;
                    upperSublevelBound?: "asc" | "desc" | undefined;
                    lowerExamineeDifficulty?: "asc" | "desc" | undefined;
                    upperExamineeDifficulty?: "asc" | "desc" | undefined;
                } | undefined;
            }, {
                where?: {
                    mode: "PAPER_BASED" | "COMPUTER_BASED";
                    name?: string | undefined;
                    code?: string | undefined;
                    isActive?: boolean | undefined;
                    isMockExam?: boolean | undefined;
                    isPremium?: boolean | undefined;
                    isComingSoon?: boolean | undefined;
                    examSubjectId?: string | undefined;
                    examGroupId?: string | undefined;
                    examEducationLevelId?: string | undefined;
                    subjectName?: string | undefined;
                    lowerSublevelBound?: number | undefined;
                    upperSublevelBound?: number | undefined;
                    lowerExamineeDifficulty?: number | undefined;
                    upperExamineeDifficulty?: number | undefined;
                } | undefined;
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    deletedAt?: "asc" | "desc" | undefined;
                    name?: "asc" | "desc" | undefined;
                    code?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    isMockExam?: "asc" | "desc" | undefined;
                    timeLimit?: "asc" | "desc" | undefined;
                    issueDate?: "asc" | "desc" | undefined;
                    announcementDate?: "asc" | "desc" | undefined;
                    isExamFileUploaded?: "asc" | "desc" | undefined;
                    isAnswerSheetUploaded?: "asc" | "desc" | undefined;
                    isDocumentUploaded?: "asc" | "desc" | undefined;
                    isPremium?: "asc" | "desc" | undefined;
                    isComingSoon?: "asc" | "desc" | undefined;
                    attemptLimit?: "asc" | "desc" | undefined;
                    lowerSublevelBound?: "asc" | "desc" | undefined;
                    upperSublevelBound?: "asc" | "desc" | undefined;
                    lowerExamineeDifficulty?: "asc" | "desc" | undefined;
                    upperExamineeDifficulty?: "asc" | "desc" | undefined;
                } | undefined;
            }>;
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    examSubject: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                    }, {
                        id: string;
                        name: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    name: string;
                    examSubject: {
                        id: string;
                        name: string;
                    };
                }, {
                    id: string;
                    name: string;
                    examSubject: {
                        id: string;
                        name: string;
                    };
                }>, "many">;
            };
            method: "GET";
            path: "/exam";
        };
    };
    student: {
        getStudentsByLiveCourseId: {
            query: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    user: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        firstName: import("zod").ZodString;
                        lastName: import("zod").ZodString;
                        username: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        username: string;
                        firstName: string;
                        lastName: string;
                    }, {
                        id: string;
                        username: string;
                        firstName: string;
                        lastName: string;
                    }>;
                    package: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        packageType: import("zod").ZodNativeEnum<{
                            LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                            WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                        }>;
                        duration: import("zod").ZodNumber;
                        durationUnit: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        duration: number;
                        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                        durationUnit: string;
                    }, {
                        id: string;
                        duration: number;
                        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                        durationUnit: string;
                    }>;
                    receiveMethod: import("zod").ZodString;
                    shippingAddress: import("zod").ZodObject<{
                        address: import("zod").ZodString;
                        postalCode: import("zod").ZodString;
                        province: import("zod").ZodString;
                        phone: import("zod").ZodString;
                        subdistrict: import("zod").ZodString;
                        district: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        phone: string;
                        address: string;
                        province: string;
                        district: string;
                        subdistrict: string;
                        postalCode: string;
                    }, {
                        phone: string;
                        address: string;
                        province: string;
                        district: string;
                        subdistrict: string;
                        postalCode: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    receiveMethod: string;
                    shippingAddress: {
                        phone: string;
                        address: string;
                        province: string;
                        district: string;
                        subdistrict: string;
                        postalCode: string;
                    };
                    user: {
                        id: string;
                        username: string;
                        firstName: string;
                        lastName: string;
                    };
                    package: {
                        id: string;
                        duration: number;
                        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                        durationUnit: string;
                    };
                }, {
                    receiveMethod: string;
                    shippingAddress: {
                        phone: string;
                        address: string;
                        province: string;
                        district: string;
                        subdistrict: string;
                        postalCode: string;
                    };
                    user: {
                        id: string;
                        username: string;
                        firstName: string;
                        lastName: string;
                    };
                    package: {
                        id: string;
                        duration: number;
                        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                        durationUnit: string;
                    };
                }>, "many">;
            };
            method: "GET";
            path: "/student";
        };
    };
    banner: {
        getBanners: {
            query: import("zod").ZodObject<{
                orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                    createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                    order: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                }, "strip", import("zod").ZodTypeAny, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                }, {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                }>>;
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                }, {
                    name?: string | undefined;
                }>>;
                skip: import("zod").ZodOptional<import("zod").ZodNumber>;
                take: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                } | undefined;
                where?: {
                    name?: string | undefined;
                } | undefined;
                skip?: number | undefined;
                take?: number | undefined;
            }, {
                orderBy?: {
                    createdAt?: "asc" | "desc" | undefined;
                    updatedAt?: "asc" | "desc" | undefined;
                    isActive?: "asc" | "desc" | undefined;
                    order?: "asc" | "desc" | undefined;
                } | undefined;
                where?: {
                    name?: string | undefined;
                } | undefined;
                skip?: number | undefined;
                take?: number | undefined;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<{
                        result: import("zod").ZodArray<import("zod").ZodObject<Omit<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            createdAt: import("zod").ZodDate;
                            updatedAt: import("zod").ZodDate;
                            isActive: import("zod").ZodBoolean;
                            linkType: import("zod").ZodNativeEnum<{
                                NO_LINK: "NO_LINK";
                                WEB_LINK: "WEB_LINK";
                                COURSE_LINK: "COURSE_LINK";
                            }>;
                            webLink: import("zod").ZodNullable<import("zod").ZodString>;
                            courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                            imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            altText: import("zod").ZodNullable<import("zod").ZodString>;
                            order: import("zod").ZodNullable<import("zod").ZodNumber>;
                        }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }, {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
                        result: {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }[];
                    }, {
                        result: {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }[];
                    }>, import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        total: number;
                    }, {
                        total: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        result: {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }[];
                    } & {
                        total: number;
                    };
                    ok: true;
                }, {
                    value: {
                        result: {
                            id: string;
                            name: string;
                            isActive: boolean;
                            imageUrl: string | null;
                            altText: string | null;
                            order: number | null;
                            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                            webLink: string | null;
                            courseLink: string | null;
                        }[];
                    } & {
                        total: number;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BANNER_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BANNER_NOT_FOUND";
                    }, {
                        code: "BANNER_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/banner${string}`;
        };
        getBanner: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        isActive: import("zod").ZodBoolean;
                        linkType: import("zod").ZodNativeEnum<{
                            NO_LINK: "NO_LINK";
                            WEB_LINK: "WEB_LINK";
                            COURSE_LINK: "COURSE_LINK";
                        }>;
                        webLink: import("zod").ZodNullable<import("zod").ZodString>;
                        courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BANNER_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BANNER_NOT_FOUND";
                    }, {
                        code: "BANNER_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/banner${string}`;
        };
        countBanner: {
            query: import("zod").ZodObject<{
                where: import("zod").ZodOptional<import("zod").ZodObject<{
                    name: import("zod").ZodOptional<import("zod").ZodString>;
                    isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
                    name?: string | undefined;
                    isActive?: boolean | undefined;
                }, {
                    name?: string | undefined;
                    isActive?: boolean | undefined;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                where?: {
                    name?: string | undefined;
                    isActive?: boolean | undefined;
                } | undefined;
            }, {
                where?: {
                    name?: string | undefined;
                    isActive?: boolean | undefined;
                } | undefined;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    value: number;
                    ok: true;
                }, {
                    value: number;
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BANNER_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BANNER_NOT_FOUND";
                    }, {
                        code: "BANNER_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/banner${string}`;
        };
        createBanner: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        isActive: import("zod").ZodBoolean;
                        linkType: import("zod").ZodNativeEnum<{
                            NO_LINK: "NO_LINK";
                            WEB_LINK: "WEB_LINK";
                            COURSE_LINK: "COURSE_LINK";
                        }>;
                        webLink: import("zod").ZodNullable<import("zod").ZodString>;
                        courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }>, import("zod").ZodObject<{
                        getBannerUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }, {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    } & {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    } & {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_BANNER_CREATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_BANNER_CREATED";
                    }, {
                        code: "NO_BANNER_CREATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_BANNER_CREATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_BANNER_CREATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                isActive: import("zod").ZodBoolean;
                order: import("zod").ZodOptional<import("zod").ZodNumber>;
                webLink: import("zod").ZodOptional<import("zod").ZodString>;
                courseLink: import("zod").ZodOptional<import("zod").ZodString>;
                linkType: import("zod").ZodOptional<import("zod").ZodEnum<["NO_LINK", "WEB_LINK", "COURSE_LINK"]>>;
                altText: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                isActive: boolean;
                order?: number | undefined;
                webLink?: string | undefined;
                courseLink?: string | undefined;
                linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
                altText?: string | undefined;
            }, {
                name: string;
                isActive: boolean;
                order?: number | undefined;
                webLink?: string | undefined;
                courseLink?: string | undefined;
                linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
                altText?: string | undefined;
            }>;
            path: `/banner${string}`;
        };
        updateBanner: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodIntersection<import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        isActive: import("zod").ZodBoolean;
                        linkType: import("zod").ZodNativeEnum<{
                            NO_LINK: "NO_LINK";
                            WEB_LINK: "WEB_LINK";
                            COURSE_LINK: "COURSE_LINK";
                        }>;
                        webLink: import("zod").ZodNullable<import("zod").ZodString>;
                        courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }>, import("zod").ZodObject<{
                        getBannerUploadUrl: import("zod").ZodObject<{
                            url: import("zod").ZodString;
                            token: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            url: string;
                            token: string;
                        }, {
                            url: string;
                            token: string;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }, {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    } & {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    } & {
                        getBannerUploadUrl: {
                            url: string;
                            token: string;
                        };
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_BANNER_UPDATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_BANNER_UPDATED";
                    }, {
                        code: "NO_BANNER_UPDATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "PUT";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                order: import("zod").ZodOptional<import("zod").ZodNumber>;
                webLink: import("zod").ZodOptional<import("zod").ZodString>;
                courseLink: import("zod").ZodOptional<import("zod").ZodString>;
                linkType: import("zod").ZodOptional<import("zod").ZodEnum<["NO_LINK", "WEB_LINK", "COURSE_LINK"]>>;
                altText: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                name?: string | undefined;
                isActive?: boolean | undefined;
                order?: number | undefined;
                webLink?: string | undefined;
                courseLink?: string | undefined;
                linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
                altText?: string | undefined;
            }, {
                id: string;
                name?: string | undefined;
                isActive?: boolean | undefined;
                order?: number | undefined;
                webLink?: string | undefined;
                courseLink?: string | undefined;
                linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
                altText?: string | undefined;
            }>;
            path: `/banner${string}`;
        };
        deleteBanner: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        isActive: import("zod").ZodBoolean;
                        linkType: import("zod").ZodNativeEnum<{
                            NO_LINK: "NO_LINK";
                            WEB_LINK: "WEB_LINK";
                            COURSE_LINK: "COURSE_LINK";
                        }>;
                        webLink: import("zod").ZodNullable<import("zod").ZodString>;
                        courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_BANNER_DELETED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_BANNER_DELETED";
                    }, {
                        code: "NO_BANNER_DELETED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_BANNER_DELETED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_BANNER_DELETED";
                    };
                    ok: false;
                }>]>;
            };
            method: "DELETE";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: `/banner${string}`;
        };
        getBannerUploadUrl: {
            query: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        url: import("zod").ZodString;
                        token: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        url: string;
                        token: string;
                    }, {
                        url: string;
                        token: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        url: string;
                        token: string;
                    };
                    ok: true;
                }, {
                    value: {
                        url: string;
                        token: string;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BANNER_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BANNER_NOT_FOUND";
                    }, {
                        code: "BANNER_NOT_FOUND";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "BANNER_NOT_FOUND";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: `/banner${string}`;
        };
        onUploadBannerComplete: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<Omit<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        createdAt: import("zod").ZodDate;
                        updatedAt: import("zod").ZodDate;
                        isActive: import("zod").ZodBoolean;
                        linkType: import("zod").ZodNativeEnum<{
                            NO_LINK: "NO_LINK";
                            WEB_LINK: "WEB_LINK";
                            COURSE_LINK: "COURSE_LINK";
                        }>;
                        webLink: import("zod").ZodNullable<import("zod").ZodString>;
                        courseLink: import("zod").ZodNullable<import("zod").ZodString>;
                        imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        altText: import("zod").ZodNullable<import("zod").ZodString>;
                        order: import("zod").ZodNullable<import("zod").ZodNumber>;
                    }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }, {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }, {
                    value: {
                        id: string;
                        name: string;
                        isActive: boolean;
                        imageUrl: string | null;
                        altText: string | null;
                        order: number | null;
                        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
                        webLink: string | null;
                        courseLink: string | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_BANNER_UPDATED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_BANNER_UPDATED";
                    }, {
                        code: "NO_BANNER_UPDATED";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "NO_BANNER_UPDATED";
                    };
                    ok: false;
                }>]>;
            };
            method: "PUT";
            body: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            path: `/banner${string}`;
        };
    };
    payment: {
        getPackageInfo: {
            query: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
            }, {
                liveCourseId: string;
            }>;
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodNullable<import("zod").ZodObject<{
                        liveCourseId: import("zod").ZodString;
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        name: import("zod").ZodString;
                        courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        startDate: import("zod").ZodString;
                        endDate: import("zod").ZodString;
                        registrationDeadline: import("zod").ZodNullable<import("zod").ZodString>;
                        startingPrice: import("zod").ZodNumber;
                        learningTypeOptions: import("zod").ZodObject<{
                            online: import("zod").ZodNullable<import("zod").ZodObject<{
                                price: import("zod").ZodNumber;
                                features: import("zod").ZodArray<import("zod").ZodNativeEnum<{
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
                            }, "strip", import("zod").ZodTypeAny, {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            }, {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            }>>;
                            onsite: import("zod").ZodNullable<import("zod").ZodObject<{
                                price: import("zod").ZodNumber;
                                features: import("zod").ZodArray<import("zod").ZodNativeEnum<{
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
                                availableSeats: import("zod").ZodNumber;
                                onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                            }, "strip", import("zod").ZodTypeAny, {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            }, {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        }, {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        }>;
                        addonOptions: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            price: import("zod").ZodNumber;
                            durationDays: import("zod").ZodNumber;
                            features: import("zod").ZodArray<import("zod").ZodNativeEnum<{
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
                        }, "strip", import("zod").ZodTypeAny, {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }, {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }>, "many">;
                        receiveMaterialOptions: import("zod").ZodObject<{
                            shipping: import("zod").ZodNullable<import("zod").ZodObject<{
                                price: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                price: number;
                            }, {
                                price: number;
                            }>>;
                            pickup: import("zod").ZodNullable<import("zod").ZodObject<{
                                pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                            }, "strip", import("zod").ZodTypeAny, {
                                pickupAddress: string | null;
                            }, {
                                pickupAddress: string | null;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        }, {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        liveCourseId: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        registrationDeadline: string | null;
                        startingPrice: number;
                        learningTypeOptions: {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        };
                        addonOptions: {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }[];
                        receiveMaterialOptions: {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        };
                    }, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        liveCourseId: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        registrationDeadline: string | null;
                        startingPrice: number;
                        learningTypeOptions: {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        };
                        addonOptions: {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }[];
                        receiveMaterialOptions: {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        };
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        liveCourseId: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        registrationDeadline: string | null;
                        startingPrice: number;
                        learningTypeOptions: {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        };
                        addonOptions: {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }[];
                        receiveMaterialOptions: {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        };
                    } | null;
                    ok: true;
                }, {
                    value: {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        liveCourseId: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        registrationDeadline: string | null;
                        startingPrice: number;
                        learningTypeOptions: {
                            online: {
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                            } | null;
                            onsite: {
                                onsiteAddress: string | null;
                                price: number;
                                features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                                availableSeats: number;
                            } | null;
                        };
                        addonOptions: {
                            id: string;
                            name: string;
                            price: number;
                            durationDays: number;
                            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
                        }[];
                        receiveMaterialOptions: {
                            shipping: {
                                price: number;
                            } | null;
                            pickup: {
                                pickupAddress: string | null;
                            } | null;
                        };
                    } | null;
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ALREADY_HAS_COURSE">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ALREADY_HAS_COURSE";
                    }, {
                        code: "ALREADY_HAS_COURSE";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    };
                    ok: false;
                }>]>;
            };
            method: "GET";
            path: "/payment/package-info";
        };
        createBooking: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        bookingId: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        bookingId: string;
                    }, {
                        bookingId: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        bookingId: string;
                    };
                    ok: true;
                }, {
                    value: {
                        bookingId: string;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"LIVE_COURSE_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "LIVE_COURSE_NOT_FOUND";
                    }, {
                        code: "LIVE_COURSE_NOT_FOUND";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"REGISTRATION_DEADLINE_PASSED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "REGISTRATION_DEADLINE_PASSED";
                    }, {
                        code: "REGISTRATION_DEADLINE_PASSED";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ALREADY_HAS_COURSE">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ALREADY_HAS_COURSE";
                    }, {
                        code: "ALREADY_HAS_COURSE";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ADDON_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ADDON_NOT_FOUND";
                    }, {
                        code: "ADDON_NOT_FOUND";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"INVALID_LEARNING_TYPE">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "INVALID_LEARNING_TYPE";
                    }, {
                        code: "INVALID_LEARNING_TYPE";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"NO_AVAILABLE_SEATS">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "NO_AVAILABLE_SEATS";
                    }, {
                        code: "NO_AVAILABLE_SEATS";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"INVALID_RECEIVE_METHOD">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "INVALID_RECEIVE_METHOD";
                    }, {
                        code: "INVALID_RECEIVE_METHOD";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"MISSING_SHIPPING_ADDRESS">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "MISSING_SHIPPING_ADDRESS";
                    }, {
                        code: "MISSING_SHIPPING_ADDRESS";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"PENDING_EXISTING_BOOKING">;
                        input: import("zod").ZodObject<{
                            liveCourseId: import("zod").ZodString;
                            learningType: import("zod").ZodNativeEnum<{
                                ONLINE: "ONLINE";
                                ONSITE: "ONSITE";
                            }>;
                            addonId: import("zod").ZodNullable<import("zod").ZodString>;
                            receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                                SHIPPING: "SHIPPING";
                                PICKUP: "PICKUP";
                            }>>;
                            shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                                name: import("zod").ZodString;
                                telephone: import("zod").ZodString;
                                address: import("zod").ZodString;
                                province: import("zod").ZodString;
                                district: import("zod").ZodString;
                                subDistrict: import("zod").ZodString;
                                postalCode: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            }, {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            }>>;
                            removeExistingBooking: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        }, "strip", import("zod").ZodTypeAny, {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        }, {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "PENDING_EXISTING_BOOKING";
                        input: {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        };
                    }, {
                        code: "PENDING_EXISTING_BOOKING";
                        input: {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        };
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    } | {
                        code: "LIVE_COURSE_NOT_FOUND";
                    } | {
                        code: "REGISTRATION_DEADLINE_PASSED";
                    } | {
                        code: "ADDON_NOT_FOUND";
                    } | {
                        code: "INVALID_LEARNING_TYPE";
                    } | {
                        code: "NO_AVAILABLE_SEATS";
                    } | {
                        code: "INVALID_RECEIVE_METHOD";
                    } | {
                        code: "MISSING_SHIPPING_ADDRESS";
                    } | {
                        code: "PENDING_EXISTING_BOOKING";
                        input: {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        };
                    };
                    ok: false;
                }, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    } | {
                        code: "LIVE_COURSE_NOT_FOUND";
                    } | {
                        code: "REGISTRATION_DEADLINE_PASSED";
                    } | {
                        code: "ADDON_NOT_FOUND";
                    } | {
                        code: "INVALID_LEARNING_TYPE";
                    } | {
                        code: "NO_AVAILABLE_SEATS";
                    } | {
                        code: "INVALID_RECEIVE_METHOD";
                    } | {
                        code: "MISSING_SHIPPING_ADDRESS";
                    } | {
                        code: "PENDING_EXISTING_BOOKING";
                        input: {
                            liveCourseId: string;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            shippingAddress: {
                                name: string;
                                address: string;
                                province: string;
                                district: string;
                                postalCode: string;
                                telephone: string;
                                subDistrict: string;
                            } | null;
                            addonId: string | null;
                            removeExistingBooking?: boolean | undefined;
                        };
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                liveCourseId: import("zod").ZodString;
                learningType: import("zod").ZodNativeEnum<{
                    ONLINE: "ONLINE";
                    ONSITE: "ONSITE";
                }>;
                addonId: import("zod").ZodNullable<import("zod").ZodString>;
                receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                    SHIPPING: "SHIPPING";
                    PICKUP: "PICKUP";
                }>>;
                shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                    name: import("zod").ZodString;
                    telephone: import("zod").ZodString;
                    address: import("zod").ZodString;
                    province: import("zod").ZodString;
                    district: import("zod").ZodString;
                    subDistrict: import("zod").ZodString;
                    postalCode: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    name: string;
                    address: string;
                    province: string;
                    district: string;
                    postalCode: string;
                    telephone: string;
                    subDistrict: string;
                }, {
                    name: string;
                    address: string;
                    province: string;
                    district: string;
                    postalCode: string;
                    telephone: string;
                    subDistrict: string;
                }>>;
                removeExistingBooking: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
                liveCourseId: string;
                learningType: "ONSITE" | "ONLINE";
                receiveMethod: "SHIPPING" | "PICKUP" | null;
                shippingAddress: {
                    name: string;
                    address: string;
                    province: string;
                    district: string;
                    postalCode: string;
                    telephone: string;
                    subDistrict: string;
                } | null;
                addonId: string | null;
                removeExistingBooking?: boolean | undefined;
            }, {
                liveCourseId: string;
                learningType: "ONSITE" | "ONLINE";
                receiveMethod: "SHIPPING" | "PICKUP" | null;
                shippingAddress: {
                    name: string;
                    address: string;
                    province: string;
                    district: string;
                    postalCode: string;
                    telephone: string;
                    subDistrict: string;
                } | null;
                addonId: string | null;
                removeExistingBooking?: boolean | undefined;
            }>;
            path: "/payment/booking";
        };
        getBooking: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    liveCourseId: import("zod").ZodString;
                    type: import("zod").ZodNativeEnum<{
                        LIVE: "LIVE";
                        FUSION: "FUSION";
                        TAPE: "TAPE";
                        ONSITE: "ONSITE";
                    }>;
                    name: import("zod").ZodString;
                    courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                    startDate: import("zod").ZodString;
                    endDate: import("zod").ZodString;
                    registrationDeadline: import("zod").ZodNullable<import("zod").ZodString>;
                    serverTime: import("zod").ZodString;
                    expiresAt: import("zod").ZodString;
                    basePrice: import("zod").ZodNumber;
                    addon: import("zod").ZodNullable<import("zod").ZodObject<{
                        name: import("zod").ZodString;
                        price: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        name: string;
                        price: number;
                    }, {
                        name: string;
                        price: number;
                    }>>;
                    receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                        SHIPPING: "SHIPPING";
                        PICKUP: "PICKUP";
                    }>>;
                    shippingPrice: import("zod").ZodNumber;
                    subtotal: import("zod").ZodNumber;
                    charges: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        status: import("zod").ZodNativeEnum<{
                            PENDING: "PENDING";
                            SUCCESS: "SUCCESS";
                            FAILED: "FAILED";
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "PENDING" | "SUCCESS" | "FAILED";
                        id: string;
                    }, {
                        status: "PENDING" | "SUCCESS" | "FAILED";
                        id: string;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                    id: string;
                    liveCourseId: string;
                    name: string;
                    courseCoverUrl: string | null;
                    courseStickerUrl: string | null;
                    startDate: string;
                    endDate: string;
                    shippingPrice: number;
                    expiresAt: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
                    basePrice: number;
                    subtotal: number;
                    charges: {
                        status: "PENDING" | "SUCCESS" | "FAILED";
                        id: string;
                    }[];
                    registrationDeadline: string | null;
                    serverTime: string;
                    addon: {
                        name: string;
                        price: number;
                    } | null;
                }, {
                    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                    id: string;
                    liveCourseId: string;
                    name: string;
                    courseCoverUrl: string | null;
                    courseStickerUrl: string | null;
                    startDate: string;
                    endDate: string;
                    shippingPrice: number;
                    expiresAt: string;
                    receiveMethod: "SHIPPING" | "PICKUP" | null;
                    basePrice: number;
                    subtotal: number;
                    charges: {
                        status: "PENDING" | "SUCCESS" | "FAILED";
                        id: string;
                    }[];
                    registrationDeadline: string | null;
                    serverTime: string;
                    addon: {
                        name: string;
                        price: number;
                    } | null;
                }>>;
            };
            method: "GET";
            path: "/payment/booking/:bookingId";
        };
        checkDiscountCode: {
            responses: {
                200: import("zod").ZodNullable<import("zod").ZodObject<{
                    code: import("zod").ZodString;
                    discount: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    code: string;
                    discount: number;
                }, {
                    code: string;
                    discount: number;
                }>>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                code: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                code: string;
            }, {
                code: string;
            }>;
            path: "/payment/booking/:bookingId/check-discount-code";
        };
        createCharge: {
            responses: {
                200: import("zod").ZodDiscriminatedUnion<"ok", [import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<true>;
                    value: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        bookingId: import("zod").ZodString;
                        summary: import("zod").ZodObject<{
                            basePrice: import("zod").ZodNumber;
                            addon: import("zod").ZodNullable<import("zod").ZodObject<{
                                name: import("zod").ZodString;
                                price: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                name: string;
                                price: number;
                            }, {
                                name: string;
                                price: number;
                            }>>;
                            shippingPrice: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        }, {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        }>;
                        status: import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"PENDING">;
                            additionalSteps: import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<{
                                type: import("zod").ZodLiteral<"CREDIT_CARD">;
                                authorizeUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            }, "strip", import("zod").ZodTypeAny, {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            }, {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            }>, import("zod").ZodObject<{
                                type: import("zod").ZodLiteral<"PROMPTPAY">;
                                qrCodeUrl: import("zod").ZodString;
                                expiresAt: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            }, {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            }>, import("zod").ZodObject<{
                                type: import("zod").ZodLiteral<"TRUEMONEY">;
                                authorizeUrl: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            }, {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            }>, import("zod").ZodObject<{
                                type: import("zod").ZodLiteral<"MOBILE_BANKING">;
                                authorizeUrl: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            }, {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            }>]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        }, {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        }>, import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"FAILED">;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "FAILED";
                        }, {
                            type: "FAILED";
                        }>, import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"SUCCESS">;
                            learningType: import("zod").ZodNativeEnum<{
                                ONLINE: "ONLINE";
                                ONSITE: "ONSITE";
                            }>;
                            onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                            addonName: import("zod").ZodNullable<import("zod").ZodString>;
                            receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                                SHIPPING: "SHIPPING";
                                PICKUP: "PICKUP";
                            }>>;
                            shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                                id: import("zod").ZodString;
                                userId: import("zod").ZodString;
                                name: import("zod").ZodString;
                                phone: import("zod").ZodString;
                                address: import("zod").ZodString;
                                province: import("zod").ZodString;
                                district: import("zod").ZodString;
                                subdistrict: import("zod").ZodString;
                                postalCode: import("zod").ZodString;
                                createdAt: import("zod").ZodDate;
                                updatedAt: import("zod").ZodDate;
                            }, "strip", import("zod").ZodTypeAny, {
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
                            pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                            paymentMethod: import("zod").ZodNativeEnum<{
                                CREDIT_CARD: "CREDIT_CARD";
                                PROMPTPAY: "PROMPTPAY";
                                TRUEMONEY: "TRUEMONEY";
                                MOBILE_BANKING: "MOBILE_BANKING";
                                NONE: "NONE";
                            }>;
                            chargedCard: import("zod").ZodNullable<import("zod").ZodObject<{
                                id: import("zod").ZodString;
                                lastDigits: import("zod").ZodString;
                                brand: import("zod").ZodString;
                                expirationMonth: import("zod").ZodNumber;
                                expirationYear: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            }, {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            }>>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        }, {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        }>]>;
                        liveCourse: import("zod").ZodObject<{
                            type: import("zod").ZodNativeEnum<{
                                LIVE: "LIVE";
                                FUSION: "FUSION";
                                TAPE: "TAPE";
                                ONSITE: "ONSITE";
                            }>;
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                            startDate: import("zod").ZodString;
                            endDate: import("zod").ZodString;
                            lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        }, {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        }>;
                        discountCode: import("zod").ZodNullable<import("zod").ZodObject<{
                            code: import("zod").ZodString;
                            discount: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            code: string;
                            discount: number;
                        }, {
                            code: string;
                            discount: number;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        } | {
                            type: "FAILED";
                        } | {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        };
                        id: string;
                        summary: {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        };
                        liveCourse: {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        };
                        bookingId: string;
                        discountCode: {
                            code: string;
                            discount: number;
                        } | null;
                    }, {
                        status: {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        } | {
                            type: "FAILED";
                        } | {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        };
                        id: string;
                        summary: {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        };
                        liveCourse: {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        };
                        bookingId: string;
                        discountCode: {
                            code: string;
                            discount: number;
                        } | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    value: {
                        status: {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        } | {
                            type: "FAILED";
                        } | {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        };
                        id: string;
                        summary: {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        };
                        liveCourse: {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        };
                        bookingId: string;
                        discountCode: {
                            code: string;
                            discount: number;
                        } | null;
                    };
                    ok: true;
                }, {
                    value: {
                        status: {
                            type: "PENDING";
                            additionalSteps: {
                                type: "CREDIT_CARD";
                                authorizeUrl: string | null;
                            } | {
                                type: "PROMPTPAY";
                                expiresAt: string;
                                qrCodeUrl: string;
                            } | {
                                type: "TRUEMONEY";
                                authorizeUrl: string;
                            } | {
                                type: "MOBILE_BANKING";
                                authorizeUrl: string;
                            };
                        } | {
                            type: "FAILED";
                        } | {
                            type: "SUCCESS";
                            pickupAddress: string | null;
                            onsiteAddress: string | null;
                            learningType: "ONSITE" | "ONLINE";
                            receiveMethod: "SHIPPING" | "PICKUP" | null;
                            addonName: string | null;
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
                            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                            chargedCard: {
                                id: string;
                                brand: string;
                                lastDigits: string;
                                expirationMonth: number;
                                expirationYear: number;
                            } | null;
                        };
                        id: string;
                        summary: {
                            shippingPrice: number;
                            basePrice: number;
                            amount: number;
                            addon: {
                                name: string;
                                price: number;
                            } | null;
                        };
                        liveCourse: {
                            type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                            id: string;
                            name: string;
                            courseCoverUrl: string | null;
                            courseStickerUrl: string | null;
                            startDate: string;
                            endDate: string;
                            lastEnrollmentDate: string | null;
                        };
                        bookingId: string;
                        discountCode: {
                            code: string;
                            discount: number;
                        } | null;
                    };
                    ok: true;
                }>, import("zod").ZodObject<{
                    ok: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodDiscriminatedUnion<"code", [import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BOOKING_NOT_FOUND">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BOOKING_NOT_FOUND";
                    }, {
                        code: "BOOKING_NOT_FOUND";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"INVALID_BOOKING_STATUS">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "INVALID_BOOKING_STATUS";
                    }, {
                        code: "INVALID_BOOKING_STATUS";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"BOOKING_EXPIRED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "BOOKING_EXPIRED";
                    }, {
                        code: "BOOKING_EXPIRED";
                    }>, import("zod").ZodObject<{
                        code: import("zod").ZodLiteral<"ALREADY_HAS_COURSE">;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: "ALREADY_HAS_COURSE";
                    }, {
                        code: "ALREADY_HAS_COURSE";
                    }>]>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    } | {
                        code: "BOOKING_NOT_FOUND";
                    } | {
                        code: "INVALID_BOOKING_STATUS";
                    } | {
                        code: "BOOKING_EXPIRED";
                    };
                    ok: false;
                }, {
                    error: {
                        code: "ALREADY_HAS_COURSE";
                    } | {
                        code: "BOOKING_NOT_FOUND";
                    } | {
                        code: "INVALID_BOOKING_STATUS";
                    } | {
                        code: "BOOKING_EXPIRED";
                    };
                    ok: false;
                }>]>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                bookingId: import("zod").ZodString;
                discountCode: import("zod").ZodNullable<import("zod").ZodString>;
                source: import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"CREDIT_CARD">;
                    cardId: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "CREDIT_CARD";
                    cardId: string;
                }, {
                    type: "CREDIT_CARD";
                    cardId: string;
                }>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"PROMPTPAY">;
                    sourceId: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "PROMPTPAY";
                    sourceId: string;
                }, {
                    type: "PROMPTPAY";
                    sourceId: string;
                }>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"TRUEMONEY">;
                    sourceId: import("zod").ZodString;
                    returnUrl: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "TRUEMONEY";
                    sourceId: string;
                    returnUrl: string;
                }, {
                    type: "TRUEMONEY";
                    sourceId: string;
                    returnUrl: string;
                }>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"MOBILE_BANKING">;
                    sourceId: import("zod").ZodString;
                    returnUrl: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "MOBILE_BANKING";
                    sourceId: string;
                    returnUrl: string;
                }, {
                    type: "MOBILE_BANKING";
                    sourceId: string;
                    returnUrl: string;
                }>, import("zod").ZodObject<{
                    type: import("zod").ZodLiteral<"NONE">;
                }, "strip", import("zod").ZodTypeAny, {
                    type: "NONE";
                }, {
                    type: "NONE";
                }>]>;
            }, "strip", import("zod").ZodTypeAny, {
                bookingId: string;
                discountCode: string | null;
                source: {
                    type: "CREDIT_CARD";
                    cardId: string;
                } | {
                    type: "PROMPTPAY";
                    sourceId: string;
                } | {
                    type: "TRUEMONEY";
                    sourceId: string;
                    returnUrl: string;
                } | {
                    type: "MOBILE_BANKING";
                    sourceId: string;
                    returnUrl: string;
                } | {
                    type: "NONE";
                };
            }, {
                bookingId: string;
                discountCode: string | null;
                source: {
                    type: "CREDIT_CARD";
                    cardId: string;
                } | {
                    type: "PROMPTPAY";
                    sourceId: string;
                } | {
                    type: "TRUEMONEY";
                    sourceId: string;
                    returnUrl: string;
                } | {
                    type: "MOBILE_BANKING";
                    sourceId: string;
                    returnUrl: string;
                } | {
                    type: "NONE";
                };
            }>;
            path: "/payment/charge";
        };
        getCharge: {
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    bookingId: import("zod").ZodString;
                    summary: import("zod").ZodObject<{
                        basePrice: import("zod").ZodNumber;
                        addon: import("zod").ZodNullable<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            price: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            name: string;
                            price: number;
                        }, {
                            name: string;
                            price: number;
                        }>>;
                        shippingPrice: import("zod").ZodNumber;
                        amount: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        shippingPrice: number;
                        basePrice: number;
                        amount: number;
                        addon: {
                            name: string;
                            price: number;
                        } | null;
                    }, {
                        shippingPrice: number;
                        basePrice: number;
                        amount: number;
                        addon: {
                            name: string;
                            price: number;
                        } | null;
                    }>;
                    status: import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"PENDING">;
                        additionalSteps: import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"CREDIT_CARD">;
                            authorizeUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        }, {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        }>, import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"PROMPTPAY">;
                            qrCodeUrl: import("zod").ZodString;
                            expiresAt: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        }, {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        }>, import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"TRUEMONEY">;
                            authorizeUrl: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        }, {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        }>, import("zod").ZodObject<{
                            type: import("zod").ZodLiteral<"MOBILE_BANKING">;
                            authorizeUrl: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        }, {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        }>]>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "PENDING";
                        additionalSteps: {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        } | {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        } | {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        } | {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        };
                    }, {
                        type: "PENDING";
                        additionalSteps: {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        } | {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        } | {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        } | {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        };
                    }>, import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"FAILED">;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "FAILED";
                    }, {
                        type: "FAILED";
                    }>, import("zod").ZodObject<{
                        type: import("zod").ZodLiteral<"SUCCESS">;
                        learningType: import("zod").ZodNativeEnum<{
                            ONLINE: "ONLINE";
                            ONSITE: "ONSITE";
                        }>;
                        onsiteAddress: import("zod").ZodNullable<import("zod").ZodString>;
                        addonName: import("zod").ZodNullable<import("zod").ZodString>;
                        receiveMethod: import("zod").ZodNullable<import("zod").ZodNativeEnum<{
                            SHIPPING: "SHIPPING";
                            PICKUP: "PICKUP";
                        }>>;
                        shippingAddress: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            userId: import("zod").ZodString;
                            name: import("zod").ZodString;
                            phone: import("zod").ZodString;
                            address: import("zod").ZodString;
                            province: import("zod").ZodString;
                            district: import("zod").ZodString;
                            subdistrict: import("zod").ZodString;
                            postalCode: import("zod").ZodString;
                            createdAt: import("zod").ZodDate;
                            updatedAt: import("zod").ZodDate;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        pickupAddress: import("zod").ZodNullable<import("zod").ZodString>;
                        paymentMethod: import("zod").ZodNativeEnum<{
                            CREDIT_CARD: "CREDIT_CARD";
                            PROMPTPAY: "PROMPTPAY";
                            TRUEMONEY: "TRUEMONEY";
                            MOBILE_BANKING: "MOBILE_BANKING";
                            NONE: "NONE";
                        }>;
                        chargedCard: import("zod").ZodNullable<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            lastDigits: import("zod").ZodString;
                            brand: import("zod").ZodString;
                            expirationMonth: import("zod").ZodNumber;
                            expirationYear: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        }, {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "SUCCESS";
                        pickupAddress: string | null;
                        onsiteAddress: string | null;
                        learningType: "ONSITE" | "ONLINE";
                        receiveMethod: "SHIPPING" | "PICKUP" | null;
                        addonName: string | null;
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
                        paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                        chargedCard: {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        } | null;
                    }, {
                        type: "SUCCESS";
                        pickupAddress: string | null;
                        onsiteAddress: string | null;
                        learningType: "ONSITE" | "ONLINE";
                        receiveMethod: "SHIPPING" | "PICKUP" | null;
                        addonName: string | null;
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
                        paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                        chargedCard: {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        } | null;
                    }>]>;
                    liveCourse: import("zod").ZodObject<{
                        type: import("zod").ZodNativeEnum<{
                            LIVE: "LIVE";
                            FUSION: "FUSION";
                            TAPE: "TAPE";
                            ONSITE: "ONSITE";
                        }>;
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        courseCoverUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        courseStickerUrl: import("zod").ZodNullable<import("zod").ZodString>;
                        startDate: import("zod").ZodString;
                        endDate: import("zod").ZodString;
                        lastEnrollmentDate: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        id: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        lastEnrollmentDate: string | null;
                    }, {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        id: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        lastEnrollmentDate: string | null;
                    }>;
                    discountCode: import("zod").ZodNullable<import("zod").ZodObject<{
                        code: import("zod").ZodString;
                        discount: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        code: string;
                        discount: number;
                    }, {
                        code: string;
                        discount: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    status: {
                        type: "PENDING";
                        additionalSteps: {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        } | {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        } | {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        } | {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        };
                    } | {
                        type: "FAILED";
                    } | {
                        type: "SUCCESS";
                        pickupAddress: string | null;
                        onsiteAddress: string | null;
                        learningType: "ONSITE" | "ONLINE";
                        receiveMethod: "SHIPPING" | "PICKUP" | null;
                        addonName: string | null;
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
                        paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                        chargedCard: {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        } | null;
                    };
                    id: string;
                    summary: {
                        shippingPrice: number;
                        basePrice: number;
                        amount: number;
                        addon: {
                            name: string;
                            price: number;
                        } | null;
                    };
                    liveCourse: {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        id: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        lastEnrollmentDate: string | null;
                    };
                    bookingId: string;
                    discountCode: {
                        code: string;
                        discount: number;
                    } | null;
                }, {
                    status: {
                        type: "PENDING";
                        additionalSteps: {
                            type: "CREDIT_CARD";
                            authorizeUrl: string | null;
                        } | {
                            type: "PROMPTPAY";
                            expiresAt: string;
                            qrCodeUrl: string;
                        } | {
                            type: "TRUEMONEY";
                            authorizeUrl: string;
                        } | {
                            type: "MOBILE_BANKING";
                            authorizeUrl: string;
                        };
                    } | {
                        type: "FAILED";
                    } | {
                        type: "SUCCESS";
                        pickupAddress: string | null;
                        onsiteAddress: string | null;
                        learningType: "ONSITE" | "ONLINE";
                        receiveMethod: "SHIPPING" | "PICKUP" | null;
                        addonName: string | null;
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
                        paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                        chargedCard: {
                            id: string;
                            brand: string;
                            lastDigits: string;
                            expirationMonth: number;
                            expirationYear: number;
                        } | null;
                    };
                    id: string;
                    summary: {
                        shippingPrice: number;
                        basePrice: number;
                        amount: number;
                        addon: {
                            name: string;
                            price: number;
                        } | null;
                    };
                    liveCourse: {
                        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
                        id: string;
                        name: string;
                        courseCoverUrl: string | null;
                        courseStickerUrl: string | null;
                        startDate: string;
                        endDate: string;
                        lastEnrollmentDate: string | null;
                    };
                    bookingId: string;
                    discountCode: {
                        code: string;
                        discount: number;
                    } | null;
                }>;
            };
            method: "GET";
            path: "/payment/charge/:chargeId";
        };
        getCreditCards: {
            responses: {
                200: import("zod").ZodObject<{
                    defaultCard: import("zod").ZodNullable<import("zod").ZodString>;
                    cards: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        bank: import("zod").ZodString;
                        lastDigits: import("zod").ZodString;
                        brand: import("zod").ZodString;
                        expirationMonth: import("zod").ZodNumber;
                        expirationYear: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                        securityCodeCheck: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }, {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    defaultCard: string | null;
                    cards: {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }[];
                }, {
                    defaultCard: string | null;
                    cards: {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }[];
                }>;
            };
            method: "GET";
            path: "/payment/credit-cards";
        };
        addCreditCard: {
            responses: {
                200: import("zod").ZodObject<{
                    defaultCard: import("zod").ZodNullable<import("zod").ZodString>;
                    cards: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        bank: import("zod").ZodString;
                        lastDigits: import("zod").ZodString;
                        brand: import("zod").ZodString;
                        expirationMonth: import("zod").ZodNumber;
                        expirationYear: import("zod").ZodNumber;
                        name: import("zod").ZodString;
                        securityCodeCheck: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }, {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    defaultCard: string | null;
                    cards: {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }[];
                }, {
                    defaultCard: string | null;
                    cards: {
                        id: string;
                        brand: string;
                        name: string;
                        lastDigits: string;
                        expirationMonth: number;
                        expirationYear: number;
                        bank: string;
                        securityCodeCheck: boolean;
                    }[];
                }>;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                cardToken: import("zod").ZodString;
                useAsDefault: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                cardToken: string;
                useAsDefault: boolean;
            }, {
                cardToken: string;
                useAsDefault: boolean;
            }>;
            path: "/payment/credit-cards";
        };
        history: {
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    date: import("zod").ZodString;
                    id: import("zod").ZodString;
                    packageName: import("zod").ZodString;
                    paymentMethod: import("zod").ZodNativeEnum<{
                        CREDIT_CARD: "CREDIT_CARD";
                        PROMPTPAY: "PROMPTPAY";
                        TRUEMONEY: "TRUEMONEY";
                        MOBILE_BANKING: "MOBILE_BANKING";
                        NONE: "NONE";
                    }>;
                    price: import("zod").ZodNumber;
                    promotionTitle: import("zod").ZodString;
                    promotionDiscountValue: import("zod").ZodNumber;
                    packagePrice: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    date: string;
                    paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                    price: number;
                    packageName: string;
                    promotionTitle: string;
                    promotionDiscountValue: number;
                    packagePrice: number;
                }, {
                    id: string;
                    date: string;
                    paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
                    price: number;
                    packageName: string;
                    promotionTitle: string;
                    promotionDiscountValue: number;
                    packagePrice: number;
                }>, "many">;
            };
            method: "GET";
            path: "/payment/history";
        };
    };
    webhook: {
        omise: {
            responses: {
                200: null;
            };
            method: "POST";
            body: import("zod").ZodUnknown;
            path: "/webhook/omise";
        };
    };
    fileStorage: {
        onFileUploadComplete: {
            responses: {
                200: import("zod").ZodLiteral<"ok">;
            };
            method: "POST";
            body: import("zod").ZodObject<{
                token: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                token: string;
            }, {
                token: string;
            }>;
            path: "/file-storage/on-complete";
        };
    };
};
//# sourceMappingURL=index.d.ts.map