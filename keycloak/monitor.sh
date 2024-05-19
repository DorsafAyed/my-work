#!/bin/bash

while true; do
  keycloak_status=$(docker inspect --format='{{.State.Health.Status}}' keycloak)
  postgres_status=$(docker inspect --format='{{.State.Health.Status}}' postgres)

  if [ "$keycloak_status" != "healthy" ]; then
    echo "Keycloak container is not healthy. Creating a backup..."
    docker run -d --name keycloak_backup quay.io/keycloak/keycloak:24.0.4 start-dev
  fi

  if [ "$postgres_status" != "healthy" ]; then
    echo "Postgres container is not healthy. Creating a backup..."
    docker run -d --name postgres_backup -e POSTGRES_DB=keycloak -e POSTGRES_USER=keycloak -e POSTGRES_PASSWORD=admin postgres:13
  fi

  sleep 60
done