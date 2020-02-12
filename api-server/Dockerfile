FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

# Building app
RUN npm run build

# Expose port
EXPOSE 5000

# Command to run the app
CMD [ "npm", "run", "dev" ]