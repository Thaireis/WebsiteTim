FROM openjdk:11-jre
ADD target/spring-boot-docker-maven.jar /Folder/spring-boot-docker-maven.jar
WORKDIR /Folder
ENTRYPOINT ["java", "-jar", "spring-boot-docker-maven.jar"]
EXPOSE 8080