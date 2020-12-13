FROM node:current-alpine3.12

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm i @angular/cli --no-progress --loglevel=error 

# Bundle app source
COPY . ./

#Build SSR 
RUN ./node_modules/@angular/cli/bin/ng build --prod
RUN ./node_modules/@angular/cli/bin/ng run client:server:production

EXPOSE 4000
CMD [ "npm", "run serve:ssr" ]