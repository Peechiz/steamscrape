// const fs = require('fs');
const Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true
});

function getSteamGames(user) {

  return new Promise(function(resolve, reject){

    nightmare
    .viewport(1200, 3000)
    .goto(`http://steamcommunity.com/id/${user}/games/?tab=all&sort=playtime`)
    .wait(5000)
    .scrollTo(99999,0)
    .inject('js', './jquery.min.js')
    .evaluate(() => {

      var list = [];
      $('.gameListRow').each(function(){
        var game = {};
        var id = $(this).attr('id').slice(5);
        game.img = $(this).find('img').attr('src');
        game.url = `http://store.steampowered.com/app/${id}`;
        game.title = $(this).find('.gameListRowItemName').text();
        game.hours = $(this).find('h5').text().split(' ')[0] || 0;
        list.push(game)
      })
      return list
    })
    .end()
    .then(games => {
      // HOW TO PRINT TO JSON:
      // var stream = fs.createWriteStream(`./${user}Games.json`)
      // stream.write(JSON.stringify(games, null, 2));
      // stream.end();
      // resolve(games)

    })
    .catch(err => {
      reject(err);
    })
  })
}
// uncomment me to run from the comand line
//
// getSteamGames('peechiz').then(games => {
//   console.log(games[0]);
// }).catch(err => console.log(err))

module.exports = getSteamGames;
