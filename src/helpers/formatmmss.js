const fillZeros = (number) =>
  String(number).length === 1 ? `0${number}` : number;

export const formatmmss = (secondsNumber) => {
  // Convert seconds into minutes and take the whole part
  const minutes = Math.floor(secondsNumber / 60);

  // Get the seconds left after converting minutes
  const seconds = secondsNumber % 60;

  // Return combined values as string in format mm:ss
  return `00:${fillZeros(minutes)}:${fillZeros(seconds)}`;
};
