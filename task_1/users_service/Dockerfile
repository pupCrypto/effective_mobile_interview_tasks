FROM node:18-alpine
LABEL author="Egor Bogdanov"
WORKDIR /app/

ENV DB_DIALECT=postgres
ENV DB_HOST=localhost
ENV DB_NAME=postgres
ENV DB_PORT=5432
ENV DB_PWD=postgres
ENV DB_USER=postgres
ENV PORT=3001
ENV MODE=DEV

COPY package-lock.json /app/
COPY package.json /app/
COPY src /app/src
COPY index.js /app/
COPY entrypoint.sh /app/

EXPOSE 3001

RUN npm install
ENTRYPOINT [ "sh", "entrypoint.sh" ]
