
import Vimeo from "@vimeo/player";
const iframe = document.querySelector('.vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});