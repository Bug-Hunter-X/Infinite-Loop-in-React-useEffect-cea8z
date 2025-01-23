```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set an interval to only increment periodically, outside the dependency array 
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);  // Increments every 1 second

    // Cleanup function to stop the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```