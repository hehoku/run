function dateStringFormat(dateString: string) {
  const dateInfo = new Date(dateString);

  const formattedDateTime = dateInfo.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  });

  return formattedDateTime;
}

function secondsToMs(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  return formattedTime;
}

function secondsPerMeterToMsPerKM(secondsPerMeter: number) {
  const metersPerKilometer = 1000;
  const secondsPerMinute = 60;

  const secondsPerKilometer = secondsPerMeter * metersPerKilometer;
  const totalSeconds = Math.round(secondsPerKilometer);

  const minutes = Math.floor(totalSeconds / secondsPerMinute);
  const seconds = totalSeconds % secondsPerMinute;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}/km`;

  return formattedTime;
}

export { dateStringFormat, secondsToMs, secondsPerMeterToMsPerKM };
