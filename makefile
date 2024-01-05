

all: add commit push

add:
	@echo "+----------------------------+"
	@echo "|         ADDING ALL         |"
	@echo "+----------------------------+"
	@git add .
	@echo "+----------------------------+"

commit:
	@echo "+----------------------------+"
	@echo "|         COMMITING          |"
	@echo "+----------------------------+"
	@git commit -F message.txt
	@echo "+----------------------------+"

push:
	@echo "+----------------------------+"
	@echo "|     PUSHING TO MASTER      |"
	@echo "+----------------------------+"
	git push origin master
	@echo "+----------------------------+"


