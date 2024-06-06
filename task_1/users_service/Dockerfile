FROM node:18-alpine
LABEL author="Egor Bogdanov"
WORKDIR /app/

ENV DB_DIALECT=mysql
ENV DB_HOST=localhost
ENV DB_NAME=mysql
ENV DB_PORT=3306
ENV DB_PWD=mysql
ENV DB_USER=mysql
ENV PORT=3000

COPY package-lock.json /app/
COPY package.json /app/
COPY src /app/src
COPY index.js /app/
COPY entrypoint.sh /app/

EXPOSE 3000

RUN npm install
ENTRYPOINT [ "sh", "entrypoint.sh" ]
