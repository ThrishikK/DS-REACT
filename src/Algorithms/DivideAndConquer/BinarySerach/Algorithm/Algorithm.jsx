import productsArray from "../Data/products";

function binarySearchProductAlgorithm(targetId, rightBoundary) {
  let left = 0;
  let right = rightBoundary;
  let found = false;
  let newLeftIndexes = [];
  let newRightIndexes = [];
  while (left <= right) {
    newLeftIndexes.push(left);
    newRightIndexes.push(right);
    let mid = Math.floor((left + right) / 2);
    let midId = productsArray[mid].id;

    if (midId === targetId) {
      newLeftIndexes.push(mid);
      newRightIndexes.push(mid);
      found = true;
      return { newLeftIndexes, newRightIndexes, found };
    } else if (midId < targetId) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  console.log(newLeftIndexes, newRightIndexes);

  newLeftIndexes.push(-1);
  newRightIndexes.push(-1);
  return { newLeftIndexes, newRightIndexes, found };
}

export default binarySearchProductAlgorithm;
