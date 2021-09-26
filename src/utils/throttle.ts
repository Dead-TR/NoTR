export function throttle(func: () => void, timeFrame: number) {
  var lastTime = 0;

  return function () {
    const now = Number(new Date());
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}
