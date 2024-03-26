export * from './dto';
export declare const tutorContract: {
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
        path: "";
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
        path: "/:tutorId";
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
        path: "/card";
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
        path: "/student-graph";
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
        path: "/upcoming-sessions";
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
    };
};
//# sourceMappingURL=index.d.ts.map