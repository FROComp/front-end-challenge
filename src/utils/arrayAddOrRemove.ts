export default (item: number, array: number[]) => {
  const index = array.indexOf(item);

  if (index === -1) array.push(item);
  else array.splice(index, 1);

  return array;
};
