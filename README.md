# JavaScript Utility Functions

A collection of useful JavaScript utility functions for common programming tasks.

## Array Utilities

### chunk(array, size)

Splits an array into smaller chunks of specified size.

```javascript
import { chunk } from './src/arrayUtils';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunks = chunk(numbers, 3);
// Result: [[1, 2, 3], [4, 5, 6], [7, 8]]
```

### unique(array)

Returns an array with only unique elements.

```javascript
import { unique } from './src/arrayUtils';

const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = unique(numbers);
// Result: [1, 2, 3, 4, 5]
```

## Contributing

Feel free to submit pull requests or create issues for bugs and feature requests.

## License

MIT
