/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";

export const protobufPackage = "live_stream";

export enum OmiseStatus {
  FAILED = 0,
  SUCCESS = 1,
  PENDING = 2,
  UNRECOGNIZED = -1,
}

export function omiseStatusFromJSON(object: any): OmiseStatus {
  switch (object) {
    case 0:
    case "FAILED":
      return OmiseStatus.FAILED;
    case 1:
    case "SUCCESS":
      return OmiseStatus.SUCCESS;
    case 2:
    case "PENDING":
      return OmiseStatus.PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OmiseStatus.UNRECOGNIZED;
  }
}

export function omiseStatusToJSON(object: OmiseStatus): string {
  switch (object) {
    case OmiseStatus.FAILED:
      return "FAILED";
    case OmiseStatus.SUCCESS:
      return "SUCCESS";
    case OmiseStatus.PENDING:
      return "PENDING";
    case OmiseStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetTutorsRequest {
  tutorIds: string[];
}

export interface TutorResponse {
  name: string;
  displayName?: string | undefined;
  tutorIconUrl?: string | undefined;
  experience?: string | undefined;
  organizationName?: string | undefined;
  tutorId: string;
  tutorFileUrl?: string | undefined;
}

export interface OptionalTutorResponse {
  tutor?: TutorResponse | undefined;
}

export interface GetTutorsResponse {
  tutors: OptionalTutorResponse[];
}

export interface GetUsersRequest {
  userIds: string[];
}

export interface UserResponse {
  displayName: string;
  profileUrl?: string | undefined;
}

export interface OptionalUserResponse {
  user?: UserResponse | undefined;
}

export interface GetUsersResponse {
  users: OptionalUserResponse[];
}

export interface CreateOmisePaymentHistoryRequest {
  chargeId: string;
  status: OmiseStatus;
  amount: number;
  discount?: number | undefined;
  netAmount: number;
  userId: string;
  topupDays?: number | undefined;
  metadata?: string | undefined;
}

export interface CreateOmisePaymentHistoryResponse {
  paymentHistoryId: string;
}

export interface UpdateOmisePaymentHistoryRequest {
  paymentHistoryId: string;
  status: OmiseStatus;
}

export interface GetSubjectsRequest {
  subjectIds: string[];
}

export interface SubjectResponse {
  subjectId: string;
  code: string;
  name: string;
  mainColor?: string | undefined;
}

export interface OptionalSubjectResponse {
  subject?: SubjectResponse | undefined;
}

export interface GetSubjectsResponse {
  subjects: OptionalSubjectResponse[];
}

export interface GetOmiseCustomerIdRequest {
  userId: string;
}

export interface GetOmiseCustomerIdResponse {
  customerId: string;
}

export interface GetUserIdentityRequest {
  userId: string;
}

export interface GetUserIdentityResponse {
  id: string;
  isActive: boolean;
  identity: string;
}

export interface GetTutorIdentityRequest {
  tutorId: string;
}

export interface GetTutorIdentityResponse {
  id: string;
  isActive: boolean;
}

export interface LoginTutorWithPasswordRequest {
  username: string;
  password: string;
}

export interface LoginTutorWithPasswordResponse {
  token: string;
  refreshToken: string;
}

export interface GetBasePlansRequest {
  basePlanIds: string[];
}

export interface SubjectForBasePlan {
  id: string;
  name: string;
  code: string;
}

export interface BasePlanResponse {
  id: string;
  name: string;
  subject: SubjectForBasePlan | undefined;
}

export interface OptionalBasePlanResponse {
  basePlan?: BasePlanResponse | undefined;
}

export interface GetBasePlansResponse {
  basePlans: OptionalBasePlanResponse[];
}

export interface GetExamsRequest {
  examIds: string[];
}

export interface ExamSubject {
  id: string;
  name: string;
}

export interface ExamResponse {
  id: string;
  name: string;
  code: string;
  examSubject: ExamSubject | undefined;
}

export interface OptionalExamResponse {
  exam?: ExamResponse | undefined;
}

export interface GetExamsResponse {
  exams: OptionalExamResponse[];
}

export interface GetMockExamsRequest {
  mockExamIds: string[];
}

export interface MockExamResponse {
  id: string;
  name: string;
  mockExamGroupType: string;
}

export interface OptionalMockExamResponse {
  mockExam?: MockExamResponse | undefined;
}

export interface GetMockExamsResponse {
  mockExams: OptionalMockExamResponse[];
}

function createBaseGetTutorsRequest(): GetTutorsRequest {
  return { tutorIds: [] };
}

export const GetTutorsRequest = {
  encode(message: GetTutorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tutorIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTutorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTutorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tutorIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTutorsRequest {
    return { tutorIds: Array.isArray(object?.tutorIds) ? object.tutorIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetTutorsRequest): unknown {
    const obj: any = {};
    if (message.tutorIds?.length) {
      obj.tutorIds = message.tutorIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTutorsRequest>): GetTutorsRequest {
    return GetTutorsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTutorsRequest>): GetTutorsRequest {
    const message = createBaseGetTutorsRequest();
    message.tutorIds = object.tutorIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseTutorResponse(): TutorResponse {
  return {
    name: "",
    displayName: undefined,
    tutorIconUrl: undefined,
    experience: undefined,
    organizationName: undefined,
    tutorId: "",
    tutorFileUrl: undefined,
  };
}

export const TutorResponse = {
  encode(message: TutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== undefined) {
      writer.uint32(18).string(message.displayName);
    }
    if (message.tutorIconUrl !== undefined) {
      writer.uint32(26).string(message.tutorIconUrl);
    }
    if (message.experience !== undefined) {
      writer.uint32(34).string(message.experience);
    }
    if (message.organizationName !== undefined) {
      writer.uint32(42).string(message.organizationName);
    }
    if (message.tutorId !== "") {
      writer.uint32(50).string(message.tutorId);
    }
    if (message.tutorFileUrl !== undefined) {
      writer.uint32(58).string(message.tutorFileUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TutorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tutorIconUrl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.experience = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.organizationName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tutorId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tutorFileUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TutorResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : undefined,
      tutorIconUrl: isSet(object.tutorIconUrl) ? String(object.tutorIconUrl) : undefined,
      experience: isSet(object.experience) ? String(object.experience) : undefined,
      organizationName: isSet(object.organizationName) ? String(object.organizationName) : undefined,
      tutorId: isSet(object.tutorId) ? String(object.tutorId) : "",
      tutorFileUrl: isSet(object.tutorFileUrl) ? String(object.tutorFileUrl) : undefined,
    };
  },

  toJSON(message: TutorResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.displayName !== undefined) {
      obj.displayName = message.displayName;
    }
    if (message.tutorIconUrl !== undefined) {
      obj.tutorIconUrl = message.tutorIconUrl;
    }
    if (message.experience !== undefined) {
      obj.experience = message.experience;
    }
    if (message.organizationName !== undefined) {
      obj.organizationName = message.organizationName;
    }
    if (message.tutorId !== "") {
      obj.tutorId = message.tutorId;
    }
    if (message.tutorFileUrl !== undefined) {
      obj.tutorFileUrl = message.tutorFileUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<TutorResponse>): TutorResponse {
    return TutorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TutorResponse>): TutorResponse {
    const message = createBaseTutorResponse();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? undefined;
    message.tutorIconUrl = object.tutorIconUrl ?? undefined;
    message.experience = object.experience ?? undefined;
    message.organizationName = object.organizationName ?? undefined;
    message.tutorId = object.tutorId ?? "";
    message.tutorFileUrl = object.tutorFileUrl ?? undefined;
    return message;
  },
};

function createBaseOptionalTutorResponse(): OptionalTutorResponse {
  return { tutor: undefined };
}

export const OptionalTutorResponse = {
  encode(message: OptionalTutorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tutor !== undefined) {
      TutorResponse.encode(message.tutor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalTutorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalTutorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tutor = TutorResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalTutorResponse {
    return { tutor: isSet(object.tutor) ? TutorResponse.fromJSON(object.tutor) : undefined };
  },

  toJSON(message: OptionalTutorResponse): unknown {
    const obj: any = {};
    if (message.tutor !== undefined) {
      obj.tutor = TutorResponse.toJSON(message.tutor);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalTutorResponse>): OptionalTutorResponse {
    return OptionalTutorResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalTutorResponse>): OptionalTutorResponse {
    const message = createBaseOptionalTutorResponse();
    message.tutor = (object.tutor !== undefined && object.tutor !== null)
      ? TutorResponse.fromPartial(object.tutor)
      : undefined;
    return message;
  },
};

function createBaseGetTutorsResponse(): GetTutorsResponse {
  return { tutors: [] };
}

export const GetTutorsResponse = {
  encode(message: GetTutorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tutors) {
      OptionalTutorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTutorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTutorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tutors.push(OptionalTutorResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTutorsResponse {
    return {
      tutors: Array.isArray(object?.tutors) ? object.tutors.map((e: any) => OptionalTutorResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetTutorsResponse): unknown {
    const obj: any = {};
    if (message.tutors?.length) {
      obj.tutors = message.tutors.map((e) => OptionalTutorResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetTutorsResponse>): GetTutorsResponse {
    return GetTutorsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTutorsResponse>): GetTutorsResponse {
    const message = createBaseGetTutorsResponse();
    message.tutors = object.tutors?.map((e) => OptionalTutorResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUsersRequest(): GetUsersRequest {
  return { userIds: [] };
}

export const GetUsersRequest = {
  encode(message: GetUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersRequest {
    return { userIds: Array.isArray(object?.userIds) ? object.userIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetUsersRequest): unknown {
    const obj: any = {};
    if (message.userIds?.length) {
      obj.userIds = message.userIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUsersRequest>): GetUsersRequest {
    return GetUsersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUsersRequest>): GetUsersRequest {
    const message = createBaseGetUsersRequest();
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserResponse(): UserResponse {
  return { displayName: "", profileUrl: undefined };
}

export const UserResponse = {
  encode(message: UserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.profileUrl !== undefined) {
      writer.uint32(18).string(message.profileUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.profileUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserResponse {
    return {
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      profileUrl: isSet(object.profileUrl) ? String(object.profileUrl) : undefined,
    };
  },

  toJSON(message: UserResponse): unknown {
    const obj: any = {};
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.profileUrl !== undefined) {
      obj.profileUrl = message.profileUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<UserResponse>): UserResponse {
    return UserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserResponse>): UserResponse {
    const message = createBaseUserResponse();
    message.displayName = object.displayName ?? "";
    message.profileUrl = object.profileUrl ?? undefined;
    return message;
  },
};

function createBaseOptionalUserResponse(): OptionalUserResponse {
  return { user: undefined };
}

export const OptionalUserResponse = {
  encode(message: OptionalUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserResponse.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = UserResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalUserResponse {
    return { user: isSet(object.user) ? UserResponse.fromJSON(object.user) : undefined };
  },

  toJSON(message: OptionalUserResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = UserResponse.toJSON(message.user);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalUserResponse>): OptionalUserResponse {
    return OptionalUserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalUserResponse>): OptionalUserResponse {
    const message = createBaseOptionalUserResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserResponse.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseGetUsersResponse(): GetUsersResponse {
  return { users: [] };
}

export const GetUsersResponse = {
  encode(message: GetUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      OptionalUserResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(OptionalUserResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersResponse {
    return {
      users: Array.isArray(object?.users) ? object.users.map((e: any) => OptionalUserResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => OptionalUserResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetUsersResponse>): GetUsersResponse {
    return GetUsersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUsersResponse>): GetUsersResponse {
    const message = createBaseGetUsersResponse();
    message.users = object.users?.map((e) => OptionalUserResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateOmisePaymentHistoryRequest(): CreateOmisePaymentHistoryRequest {
  return {
    chargeId: "",
    status: 0,
    amount: 0,
    discount: undefined,
    netAmount: 0,
    userId: "",
    topupDays: undefined,
    metadata: undefined,
  };
}

export const CreateOmisePaymentHistoryRequest = {
  encode(message: CreateOmisePaymentHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chargeId !== "") {
      writer.uint32(10).string(message.chargeId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint32(message.amount);
    }
    if (message.discount !== undefined) {
      writer.uint32(32).uint32(message.discount);
    }
    if (message.netAmount !== 0) {
      writer.uint32(40).uint32(message.netAmount);
    }
    if (message.userId !== "") {
      writer.uint32(50).string(message.userId);
    }
    if (message.topupDays !== undefined) {
      writer.uint32(64).uint32(message.topupDays);
    }
    if (message.metadata !== undefined) {
      writer.uint32(58).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOmisePaymentHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOmisePaymentHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chargeId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.discount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.netAmount = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.topupDays = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOmisePaymentHistoryRequest {
    return {
      chargeId: isSet(object.chargeId) ? String(object.chargeId) : "",
      status: isSet(object.status) ? omiseStatusFromJSON(object.status) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      discount: isSet(object.discount) ? Number(object.discount) : undefined,
      netAmount: isSet(object.netAmount) ? Number(object.netAmount) : 0,
      userId: isSet(object.userId) ? String(object.userId) : "",
      topupDays: isSet(object.topupDays) ? Number(object.topupDays) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : undefined,
    };
  },

  toJSON(message: CreateOmisePaymentHistoryRequest): unknown {
    const obj: any = {};
    if (message.chargeId !== "") {
      obj.chargeId = message.chargeId;
    }
    if (message.status !== 0) {
      obj.status = omiseStatusToJSON(message.status);
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.discount !== undefined) {
      obj.discount = Math.round(message.discount);
    }
    if (message.netAmount !== 0) {
      obj.netAmount = Math.round(message.netAmount);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.topupDays !== undefined) {
      obj.topupDays = Math.round(message.topupDays);
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateOmisePaymentHistoryRequest>): CreateOmisePaymentHistoryRequest {
    return CreateOmisePaymentHistoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateOmisePaymentHistoryRequest>): CreateOmisePaymentHistoryRequest {
    const message = createBaseCreateOmisePaymentHistoryRequest();
    message.chargeId = object.chargeId ?? "";
    message.status = object.status ?? 0;
    message.amount = object.amount ?? 0;
    message.discount = object.discount ?? undefined;
    message.netAmount = object.netAmount ?? 0;
    message.userId = object.userId ?? "";
    message.topupDays = object.topupDays ?? undefined;
    message.metadata = object.metadata ?? undefined;
    return message;
  },
};

function createBaseCreateOmisePaymentHistoryResponse(): CreateOmisePaymentHistoryResponse {
  return { paymentHistoryId: "" };
}

export const CreateOmisePaymentHistoryResponse = {
  encode(message: CreateOmisePaymentHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentHistoryId !== "") {
      writer.uint32(10).string(message.paymentHistoryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOmisePaymentHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOmisePaymentHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paymentHistoryId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOmisePaymentHistoryResponse {
    return { paymentHistoryId: isSet(object.paymentHistoryId) ? String(object.paymentHistoryId) : "" };
  },

  toJSON(message: CreateOmisePaymentHistoryResponse): unknown {
    const obj: any = {};
    if (message.paymentHistoryId !== "") {
      obj.paymentHistoryId = message.paymentHistoryId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateOmisePaymentHistoryResponse>): CreateOmisePaymentHistoryResponse {
    return CreateOmisePaymentHistoryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateOmisePaymentHistoryResponse>): CreateOmisePaymentHistoryResponse {
    const message = createBaseCreateOmisePaymentHistoryResponse();
    message.paymentHistoryId = object.paymentHistoryId ?? "";
    return message;
  },
};

function createBaseUpdateOmisePaymentHistoryRequest(): UpdateOmisePaymentHistoryRequest {
  return { paymentHistoryId: "", status: 0 };
}

export const UpdateOmisePaymentHistoryRequest = {
  encode(message: UpdateOmisePaymentHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentHistoryId !== "") {
      writer.uint32(10).string(message.paymentHistoryId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOmisePaymentHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOmisePaymentHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paymentHistoryId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOmisePaymentHistoryRequest {
    return {
      paymentHistoryId: isSet(object.paymentHistoryId) ? String(object.paymentHistoryId) : "",
      status: isSet(object.status) ? omiseStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateOmisePaymentHistoryRequest): unknown {
    const obj: any = {};
    if (message.paymentHistoryId !== "") {
      obj.paymentHistoryId = message.paymentHistoryId;
    }
    if (message.status !== 0) {
      obj.status = omiseStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateOmisePaymentHistoryRequest>): UpdateOmisePaymentHistoryRequest {
    return UpdateOmisePaymentHistoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateOmisePaymentHistoryRequest>): UpdateOmisePaymentHistoryRequest {
    const message = createBaseUpdateOmisePaymentHistoryRequest();
    message.paymentHistoryId = object.paymentHistoryId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseGetSubjectsRequest(): GetSubjectsRequest {
  return { subjectIds: [] };
}

export const GetSubjectsRequest = {
  encode(message: GetSubjectsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subjectIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubjectsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubjectsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSubjectsRequest {
    return { subjectIds: Array.isArray(object?.subjectIds) ? object.subjectIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetSubjectsRequest): unknown {
    const obj: any = {};
    if (message.subjectIds?.length) {
      obj.subjectIds = message.subjectIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetSubjectsRequest>): GetSubjectsRequest {
    return GetSubjectsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSubjectsRequest>): GetSubjectsRequest {
    const message = createBaseGetSubjectsRequest();
    message.subjectIds = object.subjectIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubjectResponse(): SubjectResponse {
  return { subjectId: "", code: "", name: "", mainColor: undefined };
}

export const SubjectResponse = {
  encode(message: SubjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.mainColor !== undefined) {
      writer.uint32(34).string(message.mainColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mainColor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubjectResponse {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      mainColor: isSet(object.mainColor) ? String(object.mainColor) : undefined,
    };
  },

  toJSON(message: SubjectResponse): unknown {
    const obj: any = {};
    if (message.subjectId !== "") {
      obj.subjectId = message.subjectId;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.mainColor !== undefined) {
      obj.mainColor = message.mainColor;
    }
    return obj;
  },

  create(base?: DeepPartial<SubjectResponse>): SubjectResponse {
    return SubjectResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubjectResponse>): SubjectResponse {
    const message = createBaseSubjectResponse();
    message.subjectId = object.subjectId ?? "";
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.mainColor = object.mainColor ?? undefined;
    return message;
  },
};

function createBaseOptionalSubjectResponse(): OptionalSubjectResponse {
  return { subject: undefined };
}

export const OptionalSubjectResponse = {
  encode(message: OptionalSubjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== undefined) {
      SubjectResponse.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalSubjectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalSubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = SubjectResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalSubjectResponse {
    return { subject: isSet(object.subject) ? SubjectResponse.fromJSON(object.subject) : undefined };
  },

  toJSON(message: OptionalSubjectResponse): unknown {
    const obj: any = {};
    if (message.subject !== undefined) {
      obj.subject = SubjectResponse.toJSON(message.subject);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalSubjectResponse>): OptionalSubjectResponse {
    return OptionalSubjectResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalSubjectResponse>): OptionalSubjectResponse {
    const message = createBaseOptionalSubjectResponse();
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? SubjectResponse.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseGetSubjectsResponse(): GetSubjectsResponse {
  return { subjects: [] };
}

export const GetSubjectsResponse = {
  encode(message: GetSubjectsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subjects) {
      OptionalSubjectResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubjectsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubjectsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjects.push(OptionalSubjectResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSubjectsResponse {
    return {
      subjects: Array.isArray(object?.subjects)
        ? object.subjects.map((e: any) => OptionalSubjectResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetSubjectsResponse): unknown {
    const obj: any = {};
    if (message.subjects?.length) {
      obj.subjects = message.subjects.map((e) => OptionalSubjectResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetSubjectsResponse>): GetSubjectsResponse {
    return GetSubjectsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSubjectsResponse>): GetSubjectsResponse {
    const message = createBaseGetSubjectsResponse();
    message.subjects = object.subjects?.map((e) => OptionalSubjectResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetOmiseCustomerIdRequest(): GetOmiseCustomerIdRequest {
  return { userId: "" };
}

export const GetOmiseCustomerIdRequest = {
  encode(message: GetOmiseCustomerIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOmiseCustomerIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOmiseCustomerIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOmiseCustomerIdRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetOmiseCustomerIdRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOmiseCustomerIdRequest>): GetOmiseCustomerIdRequest {
    return GetOmiseCustomerIdRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOmiseCustomerIdRequest>): GetOmiseCustomerIdRequest {
    const message = createBaseGetOmiseCustomerIdRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetOmiseCustomerIdResponse(): GetOmiseCustomerIdResponse {
  return { customerId: "" };
}

export const GetOmiseCustomerIdResponse = {
  encode(message: GetOmiseCustomerIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerId !== "") {
      writer.uint32(10).string(message.customerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOmiseCustomerIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOmiseCustomerIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOmiseCustomerIdResponse {
    return { customerId: isSet(object.customerId) ? String(object.customerId) : "" };
  },

  toJSON(message: GetOmiseCustomerIdResponse): unknown {
    const obj: any = {};
    if (message.customerId !== "") {
      obj.customerId = message.customerId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetOmiseCustomerIdResponse>): GetOmiseCustomerIdResponse {
    return GetOmiseCustomerIdResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetOmiseCustomerIdResponse>): GetOmiseCustomerIdResponse {
    const message = createBaseGetOmiseCustomerIdResponse();
    message.customerId = object.customerId ?? "";
    return message;
  },
};

function createBaseGetUserIdentityRequest(): GetUserIdentityRequest {
  return { userId: "" };
}

export const GetUserIdentityRequest = {
  encode(message: GetUserIdentityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserIdentityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserIdentityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserIdentityRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetUserIdentityRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserIdentityRequest>): GetUserIdentityRequest {
    return GetUserIdentityRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserIdentityRequest>): GetUserIdentityRequest {
    const message = createBaseGetUserIdentityRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetUserIdentityResponse(): GetUserIdentityResponse {
  return { id: "", isActive: false, identity: "" };
}

export const GetUserIdentityResponse = {
  encode(message: GetUserIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isActive = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserIdentityResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: GetUserIdentityResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserIdentityResponse>): GetUserIdentityResponse {
    return GetUserIdentityResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserIdentityResponse>): GetUserIdentityResponse {
    const message = createBaseGetUserIdentityResponse();
    message.id = object.id ?? "";
    message.isActive = object.isActive ?? false;
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseGetTutorIdentityRequest(): GetTutorIdentityRequest {
  return { tutorId: "" };
}

export const GetTutorIdentityRequest = {
  encode(message: GetTutorIdentityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tutorId !== "") {
      writer.uint32(10).string(message.tutorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTutorIdentityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTutorIdentityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tutorId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTutorIdentityRequest {
    return { tutorId: isSet(object.tutorId) ? String(object.tutorId) : "" };
  },

  toJSON(message: GetTutorIdentityRequest): unknown {
    const obj: any = {};
    if (message.tutorId !== "") {
      obj.tutorId = message.tutorId;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTutorIdentityRequest>): GetTutorIdentityRequest {
    return GetTutorIdentityRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTutorIdentityRequest>): GetTutorIdentityRequest {
    const message = createBaseGetTutorIdentityRequest();
    message.tutorId = object.tutorId ?? "";
    return message;
  },
};

function createBaseGetTutorIdentityResponse(): GetTutorIdentityResponse {
  return { id: "", isActive: false };
}

export const GetTutorIdentityResponse = {
  encode(message: GetTutorIdentityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTutorIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTutorIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTutorIdentityResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
    };
  },

  toJSON(message: GetTutorIdentityResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    return obj;
  },

  create(base?: DeepPartial<GetTutorIdentityResponse>): GetTutorIdentityResponse {
    return GetTutorIdentityResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetTutorIdentityResponse>): GetTutorIdentityResponse {
    const message = createBaseGetTutorIdentityResponse();
    message.id = object.id ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
};

function createBaseLoginTutorWithPasswordRequest(): LoginTutorWithPasswordRequest {
  return { username: "", password: "" };
}

export const LoginTutorWithPasswordRequest = {
  encode(message: LoginTutorWithPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginTutorWithPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginTutorWithPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginTutorWithPasswordRequest {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginTutorWithPasswordRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginTutorWithPasswordRequest>): LoginTutorWithPasswordRequest {
    return LoginTutorWithPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginTutorWithPasswordRequest>): LoginTutorWithPasswordRequest {
    const message = createBaseLoginTutorWithPasswordRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginTutorWithPasswordResponse(): LoginTutorWithPasswordResponse {
  return { token: "", refreshToken: "" };
}

export const LoginTutorWithPasswordResponse = {
  encode(message: LoginTutorWithPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginTutorWithPasswordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginTutorWithPasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginTutorWithPasswordResponse {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: LoginTutorWithPasswordResponse): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginTutorWithPasswordResponse>): LoginTutorWithPasswordResponse {
    return LoginTutorWithPasswordResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginTutorWithPasswordResponse>): LoginTutorWithPasswordResponse {
    const message = createBaseLoginTutorWithPasswordResponse();
    message.token = object.token ?? "";
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseGetBasePlansRequest(): GetBasePlansRequest {
  return { basePlanIds: [] };
}

export const GetBasePlansRequest = {
  encode(message: GetBasePlansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.basePlanIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBasePlansRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBasePlansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.basePlanIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBasePlansRequest {
    return { basePlanIds: Array.isArray(object?.basePlanIds) ? object.basePlanIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetBasePlansRequest): unknown {
    const obj: any = {};
    if (message.basePlanIds?.length) {
      obj.basePlanIds = message.basePlanIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetBasePlansRequest>): GetBasePlansRequest {
    return GetBasePlansRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBasePlansRequest>): GetBasePlansRequest {
    const message = createBaseGetBasePlansRequest();
    message.basePlanIds = object.basePlanIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubjectForBasePlan(): SubjectForBasePlan {
  return { id: "", name: "", code: "" };
}

export const SubjectForBasePlan = {
  encode(message: SubjectForBasePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubjectForBasePlan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjectForBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubjectForBasePlan {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      code: isSet(object.code) ? String(object.code) : "",
    };
  },

  toJSON(message: SubjectForBasePlan): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create(base?: DeepPartial<SubjectForBasePlan>): SubjectForBasePlan {
    return SubjectForBasePlan.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubjectForBasePlan>): SubjectForBasePlan {
    const message = createBaseSubjectForBasePlan();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseBasePlanResponse(): BasePlanResponse {
  return { id: "", name: "", subject: undefined };
}

export const BasePlanResponse = {
  encode(message: BasePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.subject !== undefined) {
      SubjectForBasePlan.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasePlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = SubjectForBasePlan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BasePlanResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      subject: isSet(object.subject) ? SubjectForBasePlan.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: BasePlanResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.subject !== undefined) {
      obj.subject = SubjectForBasePlan.toJSON(message.subject);
    }
    return obj;
  },

  create(base?: DeepPartial<BasePlanResponse>): BasePlanResponse {
    return BasePlanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BasePlanResponse>): BasePlanResponse {
    const message = createBaseBasePlanResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? SubjectForBasePlan.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseOptionalBasePlanResponse(): OptionalBasePlanResponse {
  return { basePlan: undefined };
}

export const OptionalBasePlanResponse = {
  encode(message: OptionalBasePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basePlan !== undefined) {
      BasePlanResponse.encode(message.basePlan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalBasePlanResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalBasePlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.basePlan = BasePlanResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalBasePlanResponse {
    return { basePlan: isSet(object.basePlan) ? BasePlanResponse.fromJSON(object.basePlan) : undefined };
  },

  toJSON(message: OptionalBasePlanResponse): unknown {
    const obj: any = {};
    if (message.basePlan !== undefined) {
      obj.basePlan = BasePlanResponse.toJSON(message.basePlan);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalBasePlanResponse>): OptionalBasePlanResponse {
    return OptionalBasePlanResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalBasePlanResponse>): OptionalBasePlanResponse {
    const message = createBaseOptionalBasePlanResponse();
    message.basePlan = (object.basePlan !== undefined && object.basePlan !== null)
      ? BasePlanResponse.fromPartial(object.basePlan)
      : undefined;
    return message;
  },
};

function createBaseGetBasePlansResponse(): GetBasePlansResponse {
  return { basePlans: [] };
}

export const GetBasePlansResponse = {
  encode(message: GetBasePlansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.basePlans) {
      OptionalBasePlanResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBasePlansResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBasePlansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.basePlans.push(OptionalBasePlanResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBasePlansResponse {
    return {
      basePlans: Array.isArray(object?.basePlans)
        ? object.basePlans.map((e: any) => OptionalBasePlanResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetBasePlansResponse): unknown {
    const obj: any = {};
    if (message.basePlans?.length) {
      obj.basePlans = message.basePlans.map((e) => OptionalBasePlanResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetBasePlansResponse>): GetBasePlansResponse {
    return GetBasePlansResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetBasePlansResponse>): GetBasePlansResponse {
    const message = createBaseGetBasePlansResponse();
    message.basePlans = object.basePlans?.map((e) => OptionalBasePlanResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetExamsRequest(): GetExamsRequest {
  return { examIds: [] };
}

export const GetExamsRequest = {
  encode(message: GetExamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.examIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.examIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExamsRequest {
    return { examIds: Array.isArray(object?.examIds) ? object.examIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetExamsRequest): unknown {
    const obj: any = {};
    if (message.examIds?.length) {
      obj.examIds = message.examIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetExamsRequest>): GetExamsRequest {
    return GetExamsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetExamsRequest>): GetExamsRequest {
    const message = createBaseGetExamsRequest();
    message.examIds = object.examIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseExamSubject(): ExamSubject {
  return { id: "", name: "" };
}

export const ExamSubject = {
  encode(message: ExamSubject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamSubject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamSubject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExamSubject {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ExamSubject): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ExamSubject>): ExamSubject {
    return ExamSubject.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExamSubject>): ExamSubject {
    const message = createBaseExamSubject();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseExamResponse(): ExamResponse {
  return { id: "", name: "", code: "", examSubject: undefined };
}

export const ExamResponse = {
  encode(message: ExamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.examSubject !== undefined) {
      ExamSubject.encode(message.examSubject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.code = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.examSubject = ExamSubject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExamResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      code: isSet(object.code) ? String(object.code) : "",
      examSubject: isSet(object.examSubject) ? ExamSubject.fromJSON(object.examSubject) : undefined,
    };
  },

  toJSON(message: ExamResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.examSubject !== undefined) {
      obj.examSubject = ExamSubject.toJSON(message.examSubject);
    }
    return obj;
  },

  create(base?: DeepPartial<ExamResponse>): ExamResponse {
    return ExamResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExamResponse>): ExamResponse {
    const message = createBaseExamResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.code = object.code ?? "";
    message.examSubject = (object.examSubject !== undefined && object.examSubject !== null)
      ? ExamSubject.fromPartial(object.examSubject)
      : undefined;
    return message;
  },
};

function createBaseOptionalExamResponse(): OptionalExamResponse {
  return { exam: undefined };
}

export const OptionalExamResponse = {
  encode(message: OptionalExamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exam !== undefined) {
      ExamResponse.encode(message.exam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalExamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalExamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exam = ExamResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalExamResponse {
    return { exam: isSet(object.exam) ? ExamResponse.fromJSON(object.exam) : undefined };
  },

  toJSON(message: OptionalExamResponse): unknown {
    const obj: any = {};
    if (message.exam !== undefined) {
      obj.exam = ExamResponse.toJSON(message.exam);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalExamResponse>): OptionalExamResponse {
    return OptionalExamResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalExamResponse>): OptionalExamResponse {
    const message = createBaseOptionalExamResponse();
    message.exam = (object.exam !== undefined && object.exam !== null)
      ? ExamResponse.fromPartial(object.exam)
      : undefined;
    return message;
  },
};

function createBaseGetExamsResponse(): GetExamsResponse {
  return { exams: [] };
}

export const GetExamsResponse = {
  encode(message: GetExamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exams) {
      OptionalExamResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exams.push(OptionalExamResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExamsResponse {
    return {
      exams: Array.isArray(object?.exams) ? object.exams.map((e: any) => OptionalExamResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetExamsResponse): unknown {
    const obj: any = {};
    if (message.exams?.length) {
      obj.exams = message.exams.map((e) => OptionalExamResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetExamsResponse>): GetExamsResponse {
    return GetExamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetExamsResponse>): GetExamsResponse {
    const message = createBaseGetExamsResponse();
    message.exams = object.exams?.map((e) => OptionalExamResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMockExamsRequest(): GetMockExamsRequest {
  return { mockExamIds: [] };
}

export const GetMockExamsRequest = {
  encode(message: GetMockExamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mockExamIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMockExamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMockExamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mockExamIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMockExamsRequest {
    return { mockExamIds: Array.isArray(object?.mockExamIds) ? object.mockExamIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetMockExamsRequest): unknown {
    const obj: any = {};
    if (message.mockExamIds?.length) {
      obj.mockExamIds = message.mockExamIds;
    }
    return obj;
  },

  create(base?: DeepPartial<GetMockExamsRequest>): GetMockExamsRequest {
    return GetMockExamsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMockExamsRequest>): GetMockExamsRequest {
    const message = createBaseGetMockExamsRequest();
    message.mockExamIds = object.mockExamIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMockExamResponse(): MockExamResponse {
  return { id: "", name: "", mockExamGroupType: "" };
}

export const MockExamResponse = {
  encode(message: MockExamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.mockExamGroupType !== "") {
      writer.uint32(26).string(message.mockExamGroupType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockExamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockExamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mockExamGroupType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MockExamResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      mockExamGroupType: isSet(object.mockExamGroupType) ? String(object.mockExamGroupType) : "",
    };
  },

  toJSON(message: MockExamResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.mockExamGroupType !== "") {
      obj.mockExamGroupType = message.mockExamGroupType;
    }
    return obj;
  },

  create(base?: DeepPartial<MockExamResponse>): MockExamResponse {
    return MockExamResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MockExamResponse>): MockExamResponse {
    const message = createBaseMockExamResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.mockExamGroupType = object.mockExamGroupType ?? "";
    return message;
  },
};

function createBaseOptionalMockExamResponse(): OptionalMockExamResponse {
  return { mockExam: undefined };
}

export const OptionalMockExamResponse = {
  encode(message: OptionalMockExamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mockExam !== undefined) {
      MockExamResponse.encode(message.mockExam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalMockExamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalMockExamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mockExam = MockExamResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalMockExamResponse {
    return { mockExam: isSet(object.mockExam) ? MockExamResponse.fromJSON(object.mockExam) : undefined };
  },

  toJSON(message: OptionalMockExamResponse): unknown {
    const obj: any = {};
    if (message.mockExam !== undefined) {
      obj.mockExam = MockExamResponse.toJSON(message.mockExam);
    }
    return obj;
  },

  create(base?: DeepPartial<OptionalMockExamResponse>): OptionalMockExamResponse {
    return OptionalMockExamResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OptionalMockExamResponse>): OptionalMockExamResponse {
    const message = createBaseOptionalMockExamResponse();
    message.mockExam = (object.mockExam !== undefined && object.mockExam !== null)
      ? MockExamResponse.fromPartial(object.mockExam)
      : undefined;
    return message;
  },
};

function createBaseGetMockExamsResponse(): GetMockExamsResponse {
  return { mockExams: [] };
}

export const GetMockExamsResponse = {
  encode(message: GetMockExamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mockExams) {
      OptionalMockExamResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMockExamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMockExamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mockExams.push(OptionalMockExamResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMockExamsResponse {
    return {
      mockExams: Array.isArray(object?.mockExams)
        ? object.mockExams.map((e: any) => OptionalMockExamResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMockExamsResponse): unknown {
    const obj: any = {};
    if (message.mockExams?.length) {
      obj.mockExams = message.mockExams.map((e) => OptionalMockExamResponse.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetMockExamsResponse>): GetMockExamsResponse {
    return GetMockExamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMockExamsResponse>): GetMockExamsResponse {
    const message = createBaseGetMockExamsResponse();
    message.mockExams = object.mockExams?.map((e) => OptionalMockExamResponse.fromPartial(e)) || [];
    return message;
  },
};

export type LuminateGatewayServiceDefinition = typeof LuminateGatewayServiceDefinition;
export const LuminateGatewayServiceDefinition = {
  name: "LuminateGatewayService",
  fullName: "live_stream.LuminateGatewayService",
  methods: {
    getTutors: {
      name: "GetTutors",
      requestType: GetTutorsRequest,
      requestStream: false,
      responseType: GetTutorsResponse,
      responseStream: false,
      options: {},
    },
    getUsers: {
      name: "GetUsers",
      requestType: GetUsersRequest,
      requestStream: false,
      responseType: GetUsersResponse,
      responseStream: false,
      options: {},
    },
    getSubjects: {
      name: "GetSubjects",
      requestType: GetSubjectsRequest,
      requestStream: false,
      responseType: GetSubjectsResponse,
      responseStream: false,
      options: {},
    },
    createOmisePaymentHistory: {
      name: "CreateOmisePaymentHistory",
      requestType: CreateOmisePaymentHistoryRequest,
      requestStream: false,
      responseType: CreateOmisePaymentHistoryResponse,
      responseStream: false,
      options: {},
    },
    updateOmisePaymentHistory: {
      name: "UpdateOmisePaymentHistory",
      requestType: UpdateOmisePaymentHistoryRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    getOmiseCustomerId: {
      name: "GetOmiseCustomerId",
      requestType: GetOmiseCustomerIdRequest,
      requestStream: false,
      responseType: GetOmiseCustomerIdResponse,
      responseStream: false,
      options: {},
    },
    getUserIdentity: {
      name: "GetUserIdentity",
      requestType: GetUserIdentityRequest,
      requestStream: false,
      responseType: GetUserIdentityResponse,
      responseStream: false,
      options: {},
    },
    getTutorIdentity: {
      name: "GetTutorIdentity",
      requestType: GetTutorIdentityRequest,
      requestStream: false,
      responseType: GetTutorIdentityResponse,
      responseStream: false,
      options: {},
    },
    loginTutorWithPassword: {
      name: "LoginTutorWithPassword",
      requestType: LoginTutorWithPasswordRequest,
      requestStream: false,
      responseType: LoginTutorWithPasswordResponse,
      responseStream: false,
      options: {},
    },
    getBasePlans: {
      name: "GetBasePlans",
      requestType: GetBasePlansRequest,
      requestStream: false,
      responseType: GetBasePlansResponse,
      responseStream: false,
      options: {},
    },
    getExams: {
      name: "GetExams",
      requestType: GetExamsRequest,
      requestStream: false,
      responseType: GetExamsResponse,
      responseStream: false,
      options: {},
    },
    getMockExams: {
      name: "GetMockExams",
      requestType: GetMockExamsRequest,
      requestStream: false,
      responseType: GetMockExamsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface LuminateGatewayServiceImplementation<CallContextExt = {}> {
  getTutors(request: GetTutorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetTutorsResponse>>;
  getUsers(request: GetUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUsersResponse>>;
  getSubjects(
    request: GetSubjectsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetSubjectsResponse>>;
  createOmisePaymentHistory(
    request: CreateOmisePaymentHistoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateOmisePaymentHistoryResponse>>;
  updateOmisePaymentHistory(
    request: UpdateOmisePaymentHistoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  getOmiseCustomerId(
    request: GetOmiseCustomerIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetOmiseCustomerIdResponse>>;
  getUserIdentity(
    request: GetUserIdentityRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserIdentityResponse>>;
  getTutorIdentity(
    request: GetTutorIdentityRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetTutorIdentityResponse>>;
  loginTutorWithPassword(
    request: LoginTutorWithPasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LoginTutorWithPasswordResponse>>;
  getBasePlans(
    request: GetBasePlansRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetBasePlansResponse>>;
  getExams(request: GetExamsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetExamsResponse>>;
  getMockExams(
    request: GetMockExamsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetMockExamsResponse>>;
}

export interface LuminateGatewayServiceClient<CallOptionsExt = {}> {
  getTutors(request: DeepPartial<GetTutorsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetTutorsResponse>;
  getUsers(request: DeepPartial<GetUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUsersResponse>;
  getSubjects(
    request: DeepPartial<GetSubjectsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetSubjectsResponse>;
  createOmisePaymentHistory(
    request: DeepPartial<CreateOmisePaymentHistoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateOmisePaymentHistoryResponse>;
  updateOmisePaymentHistory(
    request: DeepPartial<UpdateOmisePaymentHistoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  getOmiseCustomerId(
    request: DeepPartial<GetOmiseCustomerIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOmiseCustomerIdResponse>;
  getUserIdentity(
    request: DeepPartial<GetUserIdentityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserIdentityResponse>;
  getTutorIdentity(
    request: DeepPartial<GetTutorIdentityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetTutorIdentityResponse>;
  loginTutorWithPassword(
    request: DeepPartial<LoginTutorWithPasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LoginTutorWithPasswordResponse>;
  getBasePlans(
    request: DeepPartial<GetBasePlansRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBasePlansResponse>;
  getExams(request: DeepPartial<GetExamsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetExamsResponse>;
  getMockExams(
    request: DeepPartial<GetMockExamsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMockExamsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
