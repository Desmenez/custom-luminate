export * from './dto';
export declare const bannerContract: {
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
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
        path: string;
    };
};
//# sourceMappingURL=index.d.ts.map