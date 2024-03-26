FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


FROM base AS builder
# RUN apk add --no-cache libc6-compat
# RUN apk update
# Set working directory
WORKDIR /app
RUN pnpm -g add turbo
COPY . .
RUN turbo prune --scope=@api/marketplace --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app
# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile
# Build the project
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/tsconfig.paths.json .
RUN pnpm turbo run build --filter=@api/marketplace
RUN pnpm prune --production


FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 backend
USER backend

COPY --from=installer /app ./

CMD pnpm --filter @api/marketplace start
