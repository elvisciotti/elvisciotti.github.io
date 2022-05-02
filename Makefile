.PHONY: start

start:
	mkdir -p build
	docker-compose up -d
	open http://localhost:8080
	docker-compose logs -f

restart:
	docker-compose stop jeykyll_serve
	docker-compose up -d
	docker-compose logs -f
