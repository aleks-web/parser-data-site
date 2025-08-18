include .env

SHELL = /bin/bash
DC_RUN_ARGS = --rm --user "$(shell id -u):$(shell id -g)"
COMPOSE_TIMEOUT = 3000
export

backup:
	docker exec db_modx /usr/bin/mysqldump -u ${DB_ROOTUSER} --password=${DB_PASSWORD} ${DB_NAME} > backup.sql && clear && echo 'Backup successfully created'

git:
	make modx-cache-clear && git add . && git commit -m "The commit is made from the makefile" && clear && git push origin main

# Start Local Docker
build:
	docker compose up -d --build

up:
	docker compose up -d && npm run tw

down:
	docker compose down

restart:
	make down && make up
# End Local Docker

# Start Prod Docker
prod-build:
	docker compose -f docker-compose-prod.yml up -d --build

prod-up:
	docker compose -f docker-compose-prod.yml up -d

prod-down:
	docker compose -f docker-compose-prod.yml down

prod-restart:
	make prod-down && make prod-up
# End Prod Docker

modx-cache-clear:
	sudo chmod -R 777 ./modx/core/cache && \
	rm -r ./modx/core/cache && \
	mkdir ./modx/core/cache && \
	touch ./modx/core/cache/.gitkeep && \
	chmod -R 777 ./modx/core/cache

modx-chmod:
	sudo chmod -R 777 ./modx

docker-chmod:
	sudo chmod -R 777 ./docker