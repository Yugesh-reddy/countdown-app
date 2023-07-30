let countdownInterval = null;

function updateCountdown() {
  const days = parseInt(document.getElementById("days").value);
  const hours = parseInt(document.getElementById("hours").value);
  const minutes = parseInt(document.getElementById("minutes").value);
  const seconds = parseInt(document.getElementById("seconds").value);

  let totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    clearInterval(countdownInterval);
    return;
  }

  totalSeconds--;
  const newDays = Math.floor(totalSeconds / (24 * 60 * 60));
  totalSeconds -= newDays * 24 * 60 * 60;
  const newHours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds -= newHours * 60 * 60;
  const newMinutes = Math.floor(totalSeconds / 60);
  const newSeconds = totalSeconds % 60;

  document.getElementById("days").value = newDays;
  document.getElementById("hours").value = newHours;
  document.getElementById("minutes").value = newMinutes;
  document.getElementById("seconds").value = newSeconds;
}

function startCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  countdownInterval = setInterval(updateCountdown, 1000);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("days").value = 0;
  document.getElementById("hours").value = 0;
  document.getElementById("minutes").value = 0;
  document.getElementById("seconds").value = 0;
}
