// Full credit to Tom Stuart and Paul Mucur for this masterpiece:
// https://gist.github.com/mudge/eb9178a4b6d595ffde8f9cb31744afcf

const useDebounce = (callback, delay) => {
  const latestCallback = useRef();
  const [lastCalledAt, setLastCalledAt] = useState(null);

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (lastCalledAt) {
      const fire = () => {
        setLastCalledAt(null);
        latestCallback.current();
      };

      const fireAt = lastCalledAt + delay;
      const id = setTimeout(fire, fireAt - Date.now());
      return () => clearTimeout(id);
    }
  }, [lastCalledAt, delay]);

  return () => setLastCalledAt(Date.now());
};

export default useDebounce;
