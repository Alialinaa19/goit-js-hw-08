
import Player from "@vimeo/player";
import { throttle } from 'lodash';
const iframe = document.querySelector('.vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate',  throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
    );