# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

# Run stage
FROM node:20

WORKDIR /app

COPY --from=build /app /app

CMD ["npm", "run", "dev"]