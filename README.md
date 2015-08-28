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

regex.email.validate('abc@abc.com');
// return true
regex.email.validate('a b c@abc.com');
// return false

// replacing

regex.email.replace('list: abc@abc.d, def@def.g', '<email>');
// return 'list: <email>, <email>'
regex.email.replace('list: no matches');
// return 'list: no matches'

// searching

regex.email.search('list: abc@abc.d, def@def.g', '<email>');
// return ['abc@abc.d', 'def@def.g']
regex.email.search('list: no matches');
// return []

```

### regex methods
- regex.name.**validate(source)**;
- regex.name.**replace(source, value)**;
- regex.name.**search(source)**;

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
