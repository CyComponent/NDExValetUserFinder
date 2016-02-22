FROM node

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm","run"]
CMD ["serve"]
