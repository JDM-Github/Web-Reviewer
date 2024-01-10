

all: add commit push

add:
	@echo "+----------------------------+"
	@echo "|         ADDING ALL         |"
	@echo "+----------------------------+"
	@git add .

commit:
	@echo "+----------------------------+"
	@echo "|         COMMITING          |"
	@echo "+----------------------------+"
	@git commit -F message.txt

push:
	@echo "+----------------------------+"
	@echo "|     PUSHING TO MASTER      |"
	@echo "+----------------------------+"
	git push origin master
	@echo "+----------------------------+"


