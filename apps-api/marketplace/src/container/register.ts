// IMPORT MODULE
import { environments } from "@app/common/env";
import "@app/grpc/client";
import "@app/modules/banner";
import "@app/modules/base-plan";
import "@app/modules/comment";
import "@app/modules/development";
import "@app/modules/exam";
import "@app/modules/exam-tutorial";
import "@app/modules/exercise";
import "@app/modules/file-storage";
import "@app/modules/fundamental-course";
import "@app/modules/health";
import "@app/modules/live-course";
import "@app/modules/live-course-package";
import "@app/modules/live-session";
import "@app/modules/mock-exam";
import "@app/modules/omise";
import "@app/modules/payment";
import "@app/modules/quiz";
import "@app/modules/stream";
import "@app/modules/student";
import "@app/modules/subject";
import "@app/modules/tutor";
import "@app/modules/user";
import "@app/modules/webhook";
import { FileService } from "@softnetics/gcp-storage";
import { RedisService } from "@softnetics/redis";
import { RedisClientType, createClient as createRedisClient } from "redis";

import { container } from ".";

container.registerSingleton<RedisService>(() => {
  const redisUrl = `redis://${environments.REDIS_HOST}:${environments.REDIS_PORT}`;
  const client: RedisClientType = createRedisClient({ url: redisUrl });
  // TODO: how do we await this?
  client.connect();
  const subscribeClient: RedisClientType = createRedisClient({ url: redisUrl });
  subscribeClient.connect();
  return new RedisService(client, subscribeClient);
});

container.registerSingleton<FileService>(() => {
  const redisService = container.get<RedisService>();
  return new FileService(
    {
      publicStorageOption: {
        bucketName: environments.GCS_BUCKET_PUBLIC_NAME ?? "",
        credentials:
          environments.GCS_BUCKET_PUBLIC_CREDENTIALS &&
          JSON.parse(environments.GCS_BUCKET_PUBLIC_CREDENTIALS),
        cdnBaseUrl: environments.CDN_BASE_URL,
      },
      privateStorageOption: {
        bucketName: environments.GCS_BUCKET_PRIVATE_NAME ?? "",
        credentials:
          environments.GCS_BUCKET_PRIVATE_CREDENTIALS &&
          JSON.parse(environments.GCS_BUCKET_PRIVATE_CREDENTIALS),
      },
    },
    redisService
  );
});
