include .env

SHELL = /bin/bash
DC_RUN_ARGS = --rm --user "$(shell id -u):$(shell id -g)"
COMPOSE_TIMEOUT = 3000
export

backup:
	docker exec db_modx /usr/bin/mysqldump -u ${DB_ROOTUSER} --password=${DB_PASSWORD} ${DB_NAME} > backup.sql && clear && echo 'Backup successfully created'

git:
	git add . && git commit -m "makefile" && git push origin main

build:
	docker compose up -d --build

up:
	docker compose up -d

down:
	docker compose down

restart:
	make down && make up

docker-clear:
	docker-compose down --volumes --rmi all

modx-cache-clean:
	sudo chmod -R 777 ./modx/core/cache && \
	rm -r ./modx/core/cache && \
	mkdir ./modx/core/cache && \
	touch ./modx/core/cache/.gitkeep && \
	chmod -R 777 ./modx/core/cache

modx-chmod:
	sudo chmod -R 777 ./modx

docker-chmod:
	sudo chmod -R 777 ./docker