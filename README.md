# Async for loop

```javascript
var asyncLoop = require('async-for-loop');
asyncLoop(10, function(index, next) {
  console.log(index);
  setTimeout(next, 1000);
}, function() {
  console.log('Done!');
});
```
