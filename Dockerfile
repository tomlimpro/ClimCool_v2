FROM node:16.13.1-alpine as build 
WORKDIR /app
COPY package.json ./
RUN npm install --force 
COPY . . 
RUN npm run build

# Etape 2 
FROM nginx:1.20-alpine as prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

