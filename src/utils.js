export default function getProgress(now, max) {
  let progress = ((100 * now) / max.toFixed(0));

  if (progress < max && progress < 30) {
    progress += 10;
  }
  return progress;
}
