## regex.js

> Collection of the most used regular expressions in JavaScript.

[![Build Status](https://travis-ci.org/evandroeisinger/regex.js.svg?branch=master)](https://travis-ci.org/evandroeisinger/regex.js)

```shell
npm install regex.js --save
```

### basic usage
```javascript
// load regex.js
var regex = require('regex');

// validating

regex.email.validate('abc@abc.com'); // true
regex.email.validate('a b c@abc.com'); // false

// replacing

regex.email.replace('list: abc@abc.com, def@def.com', '<email>'); // 'list: <email> <email>'
regex.email.replace('list: no matches'); // 'list: no matches'

// searching
regex.email.search('list: abc@abc.com, def@def.com', '<email>'); // ['abc@abc.com', 'def@def.com']
regex.email.search('list: no matches'); // []

```

### regex methods
- regex.type.**validate(source)**;
- regex.type.**replace(source, value)**;
- regex.type.**search(source)**;

### regex list
- email;

### support
- chrome: **latest**;
- firefox: **latest**;
- safari: **latest**;
- internet explore: **9+**;

---
### contribute
Everyone can contribute! Finding bugs, creating issues, improving documentation, improving editor it self or creating components.
Every contribution will be welcomed! :santa:

**Fork it** -> **Branch it** -> **Test it** -> **Push it** -> **Pull Request it**
