# Dockerfile for React client

# Build react client
FROM node:17-alpine

# Working directory be app
WORKDIR /app/frontend

COPY . .

###  Installing dependencies

RUN npm install

# copy local files to app folder

EXPOSE 3000

CMD ["npm","start"]