const select = elem => document.querySelector(elem);

const countdown = function(config) {
  // Creează o dată țintă cu 5 secunde în viitor (poți schimba în 20000 pentru 20 sec)
  const now = new Date();
  const countDownDate = new Date(now.getTime() + 5000).getTime(); // +5 secunde

  // Afișează etichetele
  select(config.target + ' .day .label').innerHTML = config.dayLabel;
  select(config.target + ' .hour .label').innerHTML = config.hourLabel;
  select(config.target + ' .min .label').innerHTML = config.minLabel;
  select(config.target + ' .sec .label').innerHTML = config.secLabel;

  const updateTime = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      select(config.target + ' .day .num').innerHTML = '00';
      select(config.target + ' .hour .num').innerHTML = '00';
      select(config.target + ' .min .num').innerHTML = '00';
      select(config.target + ' .sec .num').innerHTML = '00';

      config.callback();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    select(config.target + ' .day .num').innerHTML = addZero(days);
    select(config.target + ' .hour .num').innerHTML = addZero(hours);
    select(config.target + ' .min .num').innerHTML = addZero(minutes);
    select(config.target + ' .sec .num').innerHTML = addZero(seconds);

    requestAnimationFrame(updateTime);
  }

  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0" + x : x;
