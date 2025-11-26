---
title: "Docker 最佳实践与技巧"
pubDate: 2024-10-15
description: "从 Dockerfile 优化到容器编排，全面掌握 Docker 的最佳实践。"
author: "San Zhang"
tags: ["Inference Acceleration", "Pre-training", "Post-training", "Transformer"]
category: "LLM Engineering"
---

# Docker 最佳实践与技巧

Docker 已经成为现代应用部署的标准工具。让我们探讨如何更好地使用它。

## Dockerfile 优化

### 1. 使用多阶段构建

```dockerfile
# 构建阶段
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 生产阶段
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
```

### 2. 优化层缓存

将不常变化的指令放在前面：

```dockerfile
# 好的做法
COPY package*.json ./
RUN npm install
COPY . .

# 不好的做法
COPY . .
RUN npm install
```

### 3. 减小镜像体积

- 使用 Alpine 基础镜像
- 清理不必要的文件
- 使用 .dockerignore

## 容器编排

### Docker Compose 示例

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:14
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

volumes:
  postgres_data:
```

## 安全最佳实践

1. **不要以 root 运行**

```dockerfile
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
```

2. **扫描漏洞**

```bash
docker scan myimage:latest
```

3. **使用官方镜像**

## 性能优化

### 资源限制

```bash
docker run -m 512m --cpus=1 myapp
```

### 健康检查

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```

## 日志管理

配置日志驱动：

```bash
docker run --log-driver=json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  myapp
```

## 总结

Docker 是强大的工具，但需要正确使用。遵循这些最佳实践，可以让你的容器化应用更加安全、高效和可维护。

持续学习和实践是掌握 Docker 的关键！
