FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production

# Copying source files
COPY . .

# Building app
RUN npm run build

# Expose port
EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]