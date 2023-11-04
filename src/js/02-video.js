
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VCT_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onPlay(evt) {
    localStorage.setItem(VCT_KEY, evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VCT_KEY)) || 0);