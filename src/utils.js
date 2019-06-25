export default (fromIntNumIncluded, toIntNumIncluded) => {
  const min = Math.ceil(fromIntNumIncluded);
  const max = Math.floor(toIntNumIncluded);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
