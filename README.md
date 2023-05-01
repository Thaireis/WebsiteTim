# WebsiteTim

I've tried to create a RESTFUL API where you can list all your friends, additionally add new Friends, update and delete them.

So far tho I've only managed to GET and DELETE Friends

Tools used:
Angular
SpringBoot
MySQL

## Frontend

There is a Dockerfile available but it hasn't worked (for me) yet.
So you should just run the **ng serve --open** command on the MyAngularApp Path in a terminal.

link: http://localhost:4200/

## Backend

There is a Dockerfile for the backend to build and then there is also a docker compose file that truly builds the backend with it's database.
(Adminer and Debug Testing Ground is also included)

Normally run **docker build -t backend .** or **docker-compose up --build** to create containers.
However it may not always work due to the .jar file. If the project was changed, the .jar file may not update itself and it won't take the newest changes

link: http://localhost:8080/friends
