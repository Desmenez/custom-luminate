export * from './dto';
export declare const examContract: {
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
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map