import React from 'react'


export const Consecutive = (nums) => {
  if (nums.length === 0) {
    return { valid: false, message: 'Enter some array!' };
  }
  return { valid: true, message: '' };
};

// The time complexity is O(n), where n is the number of elements in the array, because we loop through the array once and perform set operations in constant time.
// The space complexity is O(n), since we store the array elements in a set.
// This approach is efficient as it avoids sorting, achieving linear time complexity.


  
