# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect usage of the `useEffect` hook. The component `MyComponent` attempts to increment a state variable `count` within the `useEffect` hook, which has `count` as a dependency.  This creates a continuous loop because updating `count` triggers another render, causing `useEffect` to run again.

## How to reproduce

Clone this repository and run `npm install`. Then run `npm start`.  You'll observe that the counter continuously increments, eventually crashing or freezing the browser.

## Solution

The solution involves correctly managing dependencies and preventing unnecessary re-renders. The provided solution shows how to fix this.

## Additional Notes

This issue is a good example of how crucial it is to correctly understand the dependencies array in `useEffect` and how unintended updates can quickly lead to infinite render loops.