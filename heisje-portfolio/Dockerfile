# 베이스 이미지 설정
FROM node:18-alpine AS base

# 필요한 경우에만 종속성 설치
FROM base AS deps
# "libc6-compat"가 필요한 이유는 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 를 참조하세요.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 우선적으로 사용하려는 패키지 매니저에 따라 종속성 설치
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "잠금 파일을 찾을 수 없습니다." && exit 1; \
  fi

# 필요한 경우에만 소스 코드 재빌드
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js는 일반적인 사용에 대한 완전히 익명의 텔레메트리 데이터를 수집합니다.
# 자세한 내용은 여기에서 확인하세요: https://nextjs.org/telemetry
# 빌드 중에 텔레메트리를 비활성화하려면 아래 줄의 주석을 해제하세요.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# npm을 사용하는 경우 위의 줄을 주석 처리하고 아래 줄을 사용하세요.
# RUN npm run build

# 프로덕션 이미지, 모든 파일을 복사하고 Next.js 실행
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# 런타임 중에 텔레메트리를 비활성화하려면 아래 줄의 주석을 해제하세요.
# ENV NEXT_TELEMETRY_DISABLED 1

# "nodejs" 그룹 및 "nextjs" 사용자 추가
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

# 빌더로부터 정적 파일을 복사
COPY --from=builder /app/public ./public

# 자동으로 출력 추적을 활용하여 이미지 크기 축소
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]