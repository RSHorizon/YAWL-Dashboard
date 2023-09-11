FROM eclipse-temurin:11-jdk-alpine
VOLUME /tmp

COPY yawl-dashboard-backend/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]