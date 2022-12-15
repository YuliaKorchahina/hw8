import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const setDataToLocalStorage = throttle((storageName, data) => {
  localStorage.setItem(storageName, data);
}, 1000);

const getDataToLocalStorage = storageName => {
  return localStorage.getItem(storageName) ?? 0;
};

player.setCurrentTime(getDataToLocalStorage(VIDEOPLAYER_CURRENT_TIME));

player.on('timeupdate', data => {
  setDataToLocalStorage(VIDEOPLAYER_CURRENT_TIME, data.seconds);
});
