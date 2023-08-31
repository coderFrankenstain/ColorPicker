# 使用官方的Node.js Alpine镜像作为基础镜像
FROM node:alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建Next.js应用
RUN npm run build

# 使用官方的Node.js Alpine镜像作为运行时基础镜像
FROM node:alpine

# 设置工作目录
WORKDIR /app

# 从构建阶段复制构建的Next.js应用到运行时镜像
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public  

# 设置环境变量
ENV NODE_ENV=production

# 暴露3000端口
EXPOSE 3000

# 运行Next.js应用
CMD ["npm", "start"]
