
## POC 

### Directory layout

    .
    ├── backend                 # dotnet core backend api
    ├── client                  # Angular Universal 11 client app 
    ├── docker-compose          # Helm chart
    └── middleware              # Middleware nodeJs Express API
    
### Usage
Run command to start the env
```
docker-compose up -d
```
on local ENV for having SSR on all pages need to set middleware url in host file also change client service 

client/src/app/services/courses.service.ts

For development env need to chnage the client/Docker file
```
#Change Build To Dev 
RUN ./node_modules/@angular/cli/bin/ng build --prod
RUN ./node_modules/@angular/cli/bin/ng run client:server:production
```

Backend port need to be disable 
```
    ports:
      - "8080:80"
```