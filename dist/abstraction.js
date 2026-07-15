"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicPlayer {
    play() {
        console.log("Playing music...");
    }
    pause() {
        console.log("Music paused.");
    }
    stop() {
        console.log("Music stopped.");
    }
}
const myPlayer = new MusicPlayer();
myPlayer.play();
myPlayer.pause();
myPlayer.stop();
class Media {
}
class VideoPlayer extends Media {
    play() {
        console.log("Playing video...");
    }
    pause() {
        console.log("Video paused.");
    }
    stop() {
        console.log("Video stopped.");
    }
}
const myVideoPlayer = new VideoPlayer();
myVideoPlayer.play();
myVideoPlayer.pause();
myVideoPlayer.stop();
//# sourceMappingURL=abstraction.js.map