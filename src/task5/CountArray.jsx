import React from 'react'

export const CountArray = (nums) => {
    if (nums.length === 0) return { valid: false, message: 'Enter some array!' };
  
    return { valid: true, message: '' };
  };
  

  