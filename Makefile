image_tag=adzfaulkner/arjf-react_local:latest
react_scripts_version=5.0.0

build-image:
	docker build --build-arg react_scripts_version=${react_scripts_version} -t ${image_tag} .

run-tests:
	IMAGE=${image_tag} docker-compose run tests

build-app:
	IMAGE=${image_tag} docker-compose run build-app