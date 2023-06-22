FROM eclipse-temurin:11-jdk-alpine
VOLUME /tmp

RUN mkdir -p db
COPY db/database.mv.db db/database.mv.db
COPY yawl-dashboard-backend/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]