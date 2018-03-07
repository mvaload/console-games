install:
	sudo npm install

start:
	sudo npm run babel-node -- src/bin/brain-games.js

publish:
	sudo npm publish

lint:
	sudo npm run eslint ".js" "/src"