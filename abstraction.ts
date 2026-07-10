interface MediaPlayer {
    play() : void;
    pause() : void;
    stop() : void;
}


class MusicPlayer implements MediaPlayer {
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



abstract class Media {
    abstract play() : void;
    abstract pause() : void;
    abstract stop() : void;
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