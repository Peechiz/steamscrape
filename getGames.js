//const fs = require('fs');
const Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: false
});

function getSteamGames(user) {

  return new Promise(function(resolve, reject){

    nightmare
    .goto(`http://steamcommunity.com/id/${user}/games/?tab=all&sort=playtime`)
    .evaluate(() => {
      var gameList = Array.from(document.querySelectorAll('.gameListRowItem'))
      return gameList.map(game => {
        var obj = {};
        for (var i = 0; i < game.childNodes.length; i++) {
          if (/gameListRowItemName/.test(game.childNodes[i].className)){
            obj.game = game.childNodes[i].innerHTML
          }
          if (/hours_played/.test(game.childNodes[i].className)){
            var hours = game.childNodes[i].innerText.split(' ')[0]
            obj.hours = parseInt(hours)
          }
        }
        return obj
      })
    })
    .end()
    .then(games => {

      resolve(games)

      // HOW TO PRINT TO JSON:
      // var stream = fs.createWriteStream(`./games_data/${user}Games.json`)
      // stream.write(JSON.stringify(games, null, 2));
      // stream.end();

    })
    .catch(err => {
      reject(err);
    })
  })

}

module.exports = getSteamGames;
