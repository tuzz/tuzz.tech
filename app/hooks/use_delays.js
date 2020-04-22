const useDelays = (callback, delays, dependencies = []) => {
  useEffect(() => {
    const timeouts = delays.map(d => window.setTimeout(callback, d));

    return () => timeouts.forEach(t => window.clearTimeout(t));
  }, dependencies);
};

export default useDelays;
