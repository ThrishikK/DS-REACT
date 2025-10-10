let image = null;
let ctx = null;

function rebuild(x, y, size, depth, maxDepth, delay = 200) {
  if (depth >= maxDepth || size < 4) {
    // Draw final block
    ctx.drawImage(image, x, y, size, size, x, y, size, size);
    return;
  }

  // Divide into 4 quadrants
  const half = size / 2;

  // Recursive calls with delay for animation
  setTimeout(() => {
    rebuild(x, y, half, depth + 1, maxDepth, delay);
  }, delay * depth);

  setTimeout(() => {
    rebuild(x + half, y, half, depth + 1, maxDepth, delay);
  }, delay * (depth + 1));

  setTimeout(() => {
    rebuild(x, y + half, half, depth + 1, maxDepth, delay);
  }, delay * (depth + 2));

  setTimeout(() => {
    rebuild(x + half, y + half, half, depth + 1, maxDepth, delay);
  }, delay * (depth + 3));
}

function rebuildWrapper(x, y, size, depth, maxDepth, canvasContext, img) {
  ctx = canvasContext;
  image = img;
  rebuild(x, y, size, depth, maxDepth);
}

export default rebuildWrapper;
