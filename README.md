# WebsiteTim

I have created a RESTFUL API where you can list all your friends, additionally add new Friends, update and delete them.

Tools used:
Angular: Typescript / HTML / CSS
SpringBoot: JAVA
Docker
MySQL

## Frontend

There is a Dockerfile available but it hasn't worked (for me) yet.
So you should just run the **ng serve --open** command on the MyAngularApp Path in a terminal.

link: http://localhost:4200/

## Backend

There is a Dockerfile for the backend to build and then there is also 2 docker compose files.
The first one is supposed to make sure the Database is started, it must be started, if not the backend won't build itself.
The second one is the exact same but with the backend included.
And here are the steps you're going to do:

### 1. Build and Start Database
**docker-compose -f docker-compose.yml up -d**

### 2. Make sure that the project has the newest JAR File
**mvn clean**

**mvn package** or **mvn install**

(If you have this project open in Intellij, then there is a simple Maven Tab where you can click, else you have to use this as a command in a terminal)

### 3. Override with Spring Boot Backend
docker-compose -f docker-compose.override.yml up -d

The Backend is now available here:
http://localhost:8080/friends


If you want to see the Adminer, it's available on http://localhost:9000/
but you need to login first:

| Server   | User | Password | Database |
|----------|------|----------|----------|
| database | root | password | frienddb |

