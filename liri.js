var keys = require("./keys.js")

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);

var getArtistNames = function(artist) {
  return artist.name;
}


var getMeSpotify = function(songName){
 
  spotify.search({ type: 'track', query: songName }, function(err, data) {
   if (err) {
      console.log('Error occurred: ' + err);
      return;
    } 
 
    var songs = data.tracks.items;
    for(var i=0; i<songs.length; i++) {
      console.log(i);
      console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
      console.log('song name: ' + songs[i].name)
      console.log('preview song: ' + songs[i].preview_url);
      console.log('album name: ' + songs[i].album.name);
      console.log('-----------------------------------------------------');
    } 
  });

}

var pick = function(caseData, functionData) {
  switch(caseData) {
    case 'spotify-this-song':
     getMeSpotify(functionData);     
     break;
    default:
    console.log('LIRI does not know that') 
  }
}

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo)
}

runThis(process.argv[2], process.argv[3]);