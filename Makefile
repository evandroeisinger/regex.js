MOCHA=node_modules/mocha/bin/mocha
JSHINT=node_modules/jshint/bin/jshint

.PHONY: test hint

hint:
	$(JSHINT) --config .jshint regex.js collection.js helpers/* test/helpers/*

test: hint
	$(MOCHA) --recursive --reporter spec
