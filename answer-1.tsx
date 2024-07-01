class Meditation {
  private duration: number;

  constructor(duration: number) {
    this.duration = duration;
  }

  start() {
    console.log("Start meditation");
    this.countDown(this.duration);
  }

  private countDown(seconds: number) {
    if (seconds > 0) {
      console.log(seconds);
      setTimeout(() => this.countDown(seconds - 1), 1000);
    } else {
      console.log("Jay Guru Dev");
    }
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
