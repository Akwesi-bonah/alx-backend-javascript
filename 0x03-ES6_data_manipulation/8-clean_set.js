export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return "";
  }
  const result = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  return result.join("-");
}
