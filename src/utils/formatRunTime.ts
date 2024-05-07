function formatRunTime(minutes: number) {
  var hours = Math.floor(minutes / 60);
  var mins = minutes % 60;
  return hours + 'h ' + mins + 'min';
}

export default formatRunTime;
