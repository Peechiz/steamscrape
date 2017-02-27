# Steam Scraper

A simple node application for scraping games and playtime from a steam user account.

### Usage

```javascript
// some_other_file.js

const getGames = require('./getGames');

getGames('yourSteamName').then(games => {
  console.log(games);
}).catch(err => {
  console.log('whoops');
})
```
