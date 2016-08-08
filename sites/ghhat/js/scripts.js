var spotJoyogistic = "<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:0h6ThT6IIsLBZS3q2xgqHk' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"

var spotPrimal = "<iframe src='https://embed.spotify.com/?uri=spotify:track:5chJzL7y04dG1tCrG9Bbes' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"

var spotPianoJam = "<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:6sLi07oCNv1IZsnz3o1eTs' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"

var spotNo11 = "<iframe src='https://embed.spotify.com/?uri=spotify:track:2sDEvu1S4q4ExhbJVygBz2' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"

var spotNo15 = "<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:6WNL5LE1w2JmhGES04KhRQ' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"

/*var spotSongs = {
	"title": [
		"Joyogistic",
		"Primal",
		"Piano Jam",
		"Act II, No. 11",
		"Act II, No. 15"
	],
	"intro": [
		"This is a little blurb about the song",
		"This is a little blurb about the song",
		"This is a little blurb about the song",
		"This is a little blurb about the song",
		"This is a little blurb about the song"
	],
	"embed": [
		"<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:0h6ThT6IIsLBZS3q2xgqHk' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>",
		"<iframe src='https://embed.spotify.com/?uri=spotify:track:5chJzL7y04dG1tCrG9Bbes' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>",
		"<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:6sLi07oCNv1IZsnz3o1eTs' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>",
		"<iframe src='https://embed.spotify.com/?uri=spotify:track:2sDEvu1S4q4ExhbJVygBz2' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>",
		"<iframe class='right' src='https://embed.spotify.com/?uri=spotify:track:6WNL5LE1w2JmhGES04KhRQ' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"
	]
}*/





function insertNeededHTML(x, y) {
/*	$('#' + x).empty(y);*/
	$('#' + x).append(y);
}

function insertSpotify() {
	insertNeededHTML('song1', spotJoyogistic);
	insertNeededHTML('song2', spotPrimal);
	insertNeededHTML('song3', spotPianoJam);
	insertNeededHTML('song4', spotNo11);
	insertNeededHTML('song5', spotNo15);
}


$( document ).ready(insertSpotify())