FROM node:latest
LABEL authors="angelica"

RUN mkdir -p /apps/groceryStore
WORKDIR /apps/groceryStore

COPY package.json /apps/groceryStore/

RUN npm i cors helmet jsonwebtoken class-validator bcryptjs mysql2
RUN npm i -D @types/cors @types/jsonwebtoken @types/express @types/node @types/bcryptjs typescript ts-node-dev
COPY . /apps/groceryStore/

EXPOSE 3000
CMD ["npm", "run", "dev"]