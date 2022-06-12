export default function randomizeArray(array) {
  return array
    .map((value) => {
      return {
        value,
        sort: Math.random(),
      };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((element) => element.value);
}
