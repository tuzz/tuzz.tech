const usePrint = (onChange) => {
  const [isPrinting, setPrinting] = useState(false);

  const handleChange = (printing) => {
    if (printing === isPrinting) return;

    setPrinting(printing);
    onChange(printing);
  };

  useEffect(() => {
    const beforeListener = window.addEventListener("beforeprint", () => handleChange(true));
    const afterListener = window.addEventListener("afterprint", () => handleChange(false));

    const printMedia = window.matchMedia("print");
    const printListener = printMedia.addListener((e) => handleChange(e.matches));

    return () => {
      window.removeEventListener("beforeprint", beforeListener);
      window.removeEventListener("afterprint", afterListener);

      printMedia.removeListener(printListener);
    };
  });

  return isPrinting;
};

export default usePrint;
