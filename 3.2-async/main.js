class AlarmClock {
  constructor() {
    this.clocks = [];
    this.clockId;
  }

  addClock(id, time, callback = (f) => f) {
    if (!id) {
      throw new Error('Не задан идентификатор звонка');
    }
    this.clocks.forEach((elem) => {
      if (elem.id === id) {
        throw new Error('Будильник с таким идентификатором уже существует');
      }
    });
    this.clocks.push({ id: id, time: time, callback: callback });
  }

  removeClock(id) {
    this.clocks = this.clocks.filter((elem) => {
      return elem.id != id;
    });
    return this.clocks.find((elem) => {
      elem.id === id;
    })
      ? false
      : true;
  }

  getCurrentFormattedTime() {
    const currentTime = new Date();
    return currentTime.toTimeString().slice(0, 5);
  }

  start() {
    if (!this.clockId) {
      this.clockId = setInterval(() => {
        this.clocks.forEach((clock) => {
          if (clock.time === this.getCurrentFormattedTime()) {
            clock.callback();
          }
        });
      }, 10000);
    }
  }

  stop() {
    if (this.clockId) {
      clearInterval(this.clockId);
      this.clockId = null;
    }
  }

  printAlarms() {
    this.clocks.forEach((clock) => console.log('Alarm №' + clock.id + ' is set at ' + clock.time));
  }

  clearAlarms() {
    clearInterval(this.clockId);
    this.clocks = [];
  }
}

function testCase() {
  const getUp = new AlarmClock();
  getUp.addClock(1, '00:43', () => {
    const currentTime = new Date();
    console.log(`Get Up! its ${currentTime.toTimeString().slice(0, 8)} now!`);
  });
  getUp.addClock(2, '00:44', () => {
    console.log(`I'm one-time bell =)`);
    getUp.removeClock(2);
  });
  getUp.addClock(3, '00:45', () => {
    console.log(`Last stand Alarm`);
    getUp.stop();
    getUp.clearAlarms();
    getUp.printAlarms();
  });
  getUp.printAlarms();
  getUp.start();
}

testCase();
