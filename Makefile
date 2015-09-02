MOCHA=node_modules/mocha/bin/mocha
JSHINT=node_modules/jshint/bin/jshint

.PHONY: test hint

hint:
	$(JSHINT) --config .jshint regex.js src/* test/helpers/*

test: hint
	$(MOCHA) --recursive --reporter spec
