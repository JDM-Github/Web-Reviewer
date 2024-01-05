

all: add commit push

add:
	git add .

commit:
	git commit -F message.txt

push:
	git push origin master

