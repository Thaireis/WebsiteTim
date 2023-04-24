FROM maven:3.6.3 AS maven
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mvn clean
RUN mvn package
RUN mvn install

# For Java 11,
FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /Folder
ADD target/spring-boot-docker-maven.jar /Folder/spring-boot-docker-maven.jar
ENTRYPOINT ["java","-jar","spring-boot-docker-maven.jar"]