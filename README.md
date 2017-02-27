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

Sample output:

```
[
  {
    "hours": "411",
    "img": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
    "title": "Team Fortress 2",
    "url": "http://store.steampowered.com/app/440"
  }
]```
