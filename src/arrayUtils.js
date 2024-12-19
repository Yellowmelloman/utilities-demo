/**
 * Array utility functions for common operations
 */

/**
 * Chunks an array into smaller arrays of specified size
 * @param {Array} array - The array to chunk
 * @param {number} size - The size of each chunk
 * @returns {Array} Array of chunks
 */
export function chunk(array, size = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  
  if (!Number.isInteger(size) || size < 1) {
    throw new TypeError('Chunk size must be a positive integer');
  }

  return array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
}

/**
 * Finds unique elements in an array
 * @param {Array} array - The input array
 * @returns {Array} Array with unique elements
 */
export function unique(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }
  
  return [...new Set(array)];
}
