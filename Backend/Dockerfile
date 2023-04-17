FROM openjdk:11-jre
COPY target/spring-boot-docker-maven.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]