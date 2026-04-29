# 1. base image (nodejs)
FROM node:20

#2.create app directory inside container
WORKDIR /app

#3.copy package files 
COPY package*.json ./

#4.install dependencies
RUN npm install

#5. copy all project files
COPY . .

#expose port
EXPOSE 3000

#run app
CMD ["node", "server.js"]