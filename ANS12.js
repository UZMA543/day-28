function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

// Example usage:
timer(2000, function(result) {
  console.log(result);
});
