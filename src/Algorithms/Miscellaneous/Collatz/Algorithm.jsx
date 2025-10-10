function collatzSequence(n) {
  let iterationCount = 1;
  const seq = [{ iteration: iterationCount, value: n }];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    iterationCount++;

    seq.push({ iteration: iterationCount, value: n });
  }
  return seq;
}

export default collatzSequence;
