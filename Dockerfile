# Step 1: Use official Node.js LTS image
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Step 2: Runtime image
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000
ENV SITE_URL=https://your-domain.com
ENV NEXT_PUBLIC_SITE_URL=https://your-domain.com
ENV NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

EXPOSE 3000

CMD ["npm", "start"]
