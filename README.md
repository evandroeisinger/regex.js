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

```

### regex helpers list
regex.**validateEmail(source)**:
```javascript
regex.validateEmail('abc@abc.com');
// return true
regex.email.validate('a b c@abc.com');
// return false

```

regex.**replaceEmails(source, value)**:
```javascript
regex.replaceEmails('list: abc@abc.d, def@def.g', '<email>');
// return 'list: <email>, <email>'
regex.replaceEmails('list: no matches');
// return 'list: no matches'

```

regex.**searchEmails(source)**:

```javascript
regex.searchEmails('list: abc@abc.d, def@def.g', '<email>');
// return ['abc@abc.d', 'def@def.g']
regex.searchEmails('list: no matches');
// return []

```

---
### contribute
Everyone can contribute! Every contribution will be welcomed!

**Fork it** -> **Branch it** -> **Test it** -> **Push it** -> **Pull Request it**
