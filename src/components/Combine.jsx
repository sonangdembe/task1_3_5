import React, { useState } from 'react';
import { Consecutive } from '../task3/Consecutive'; 
import { CountArray } from '../task5/CountArray'; 

export const Combine = () => {
  const [inputValue, setInputValue] = useState('');
  const [countsResult, setCountsResult] = useState([]);
  const [longestChainResult, setLongestChainResult] = useState(null);
  const [error, setError] = useState('');
  const [selectedTask, setSelectedTask] = useState('task3'); 

  const countSmallerElements = (nums) => {
    const counts = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      counts[i] = count;
    }
    return counts;
  };




  // Function to find the length of the longest chain of consecutive numbers
  const longestConsecutiveChain = (nums) => {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestChain = 0;

    for (const num of numSet) {
      if (!numSet.has(num - 1)) { 
        let currentNum = num;
        let currentChainLength = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentChainLength++;
        }

        longestChain = Math.max(longestChain, currentChainLength);
      }
    }
    return longestChain;
  };

  const handleCalculate = () => {
    if (!inputValue.trim()) {
      setError('Please enter a list of numbers!');
      setCountsResult([]);
      setLongestChainResult(null);
      return;
    }

    const nums = inputValue
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    if (nums.length === 0) {
      setError('Invalid input. Please enter valid numbers.');
      setCountsResult([]);
      setLongestChainResult(null);
      return;
    }

    let validation;
    if (selectedTask === 'task3') {
      validation = validateLongestConsecutiveChain(nums);
    } else if (selectedTask === 'task5') {
      validation = validateSmallerElementsCount(nums);
    }

    if (!validation.valid) {
      setError(validation.message);
      setCountsResult([]);
      setLongestChainResult(null);
      return;
    }

    // Calculate results based on selected task
    if (selectedTask === 'task3') {
      setCountsResult([]);
      setLongestChainResult(longestConsecutiveChain(nums));
    } else if (selectedTask === 'task5') {
      setLongestChainResult(null);
      setCountsResult(countSmallerElements(nums));
    }
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E7FBE6]">
      <div className="bg-[#CBE2B5] p-8 rounded-lg shadow-lg max-w-2xl h-custom-lg flex flex-col justify-between min-h-[100px]">
        <div>
          <h1 className="text-3xl my-3 font-bold text-center mb-6 font-garamond">Array Analysis</h1>

          <div className="mb-4 flex justify-center space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="task"
                value="task3"
                checked={selectedTask === 'task3'}
                onChange={() => setSelectedTask('task3')}
                className="form-radio"
              />
              <span className="ml-2 font-serif">Longest Consecutive Chain (Task 3)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="task"
                value="task5"
                checked={selectedTask === 'task5'}
                onChange={() => setSelectedTask('task5')}
                className="form-radio"
              />
              <span className="ml-2 font-serif">Smaller Elements Count (Task 5)</span>
            </label>
          </div>

          <label className="block text-lg mb-2 font-serif">
            Enter an array of numbers (comma-separated):
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., 1, 2, 3, 6, 7, 2, 3"
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="mx-auto mt-7 p-5 bg-[#0d843d] hover:bg-[#6C946F] text-black font-bold py-3 rounded-lg transition-all duration-110"
        >
          Calculate
        </button>

        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}

        {selectedTask === 'task5' && countsResult.length > 0 && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Counts Array</h2>
            <p className="mt-2 text-lg text-green-800">
              {`Counts array: [${countsResult.join(', ')}]`}
            </p>
          </div>
        )}

        {selectedTask === 'task3' && longestChainResult !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">Longest Consecutive Chain</h2>
            <p className="mt-2 text-lg text-green-800">
              {`Longest consecutive chain length: ${longestChainResult}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
