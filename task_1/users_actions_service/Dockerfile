FROM node:18-alpine
LABEL author="Egor Bogdanov"
WORKDIR /app/

# can be DEV or PROD
ENV MODE=DEV
ENV PORT=3000
ENV HOST=0.0.0.0

COPY package-lock.json /app/
COPY package.json /app/
COPY tsconfig.json /app/
COPY src /app/src
COPY entrypoint.sh /app/

EXPOSE 3000

RUN npm install
RUN npm run build

ENTRYPOINT [ "sh", "entrypoint.sh" ]