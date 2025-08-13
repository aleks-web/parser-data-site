#!/usr/bin/make
# Makefile readme (ru): <http://linux.yaroslavl.ru/docs/prog/gnu_make_3-79_russian_manual.html>
# Makefile readme (en): <https://www.gnu.org/software/make/manual/html_node/index.html#SEC_Contents>

SHELL = /bin/bash
DC_RUN_ARGS = --rm --user "$(shell id -u):$(shell id -g)"
COMPOSE_TIMEOUT = 3000
FILE_NAME='test_file'
.DEFAULT_GOAL : help
export

git:
	git add . && git commit -m "test" && git push origin main

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
	sudo chmod -R 777 ./modx/core/cache && rm -r ./modx/core/cache && mkdir ./modx/core/cache && chmod -R 777 ./modx/core/cache

modx-chmod:
	sudo chmod -R 777 ./modx

docker-chmod:
	sudo chmod -R 777 ./docker

composer-cp:
	docker exec -it site composer create-project modx/revolution .

composer:
	docker exec -it site composer $(arg)