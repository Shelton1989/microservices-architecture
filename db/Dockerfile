FROM postgres

ENV POSTGRES_PASSWORD postgres

ENV POSTGRES_DB microservices

COPY init.sql /docker-entrypoint-initdb.d/
