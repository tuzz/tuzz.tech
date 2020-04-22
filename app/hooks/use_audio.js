const epsilon = 0.001;

// Abstract away an iOS bug:
//
// When you set audio.currentTime, it actually sets the time to slightly before
// then, presumably because the audio slider is gradated in increments.
//
// This fixes the bug by returning the 'desiredTime' until 'actualTime' passes
// it. By subtracting epsilon, we ensure this condition isn't immediately met.

const useAudio = () => {
  const ref = useRef();
  const [desiredTime, setDesiredTime] = useState();

  const getTime = () => {
    const actualTime = ref.current.currentTime;

    if (actualTime >= desiredTime) {
      setDesiredTime(undefined);
    }

    return desiredTime || actualTime;
  };

  const setTime = (time) => {
    setDesiredTime(time);
    ref.current.currentTime = time - epsilon;
  };

  return [ref, getTime, setTime];
};

export default useAudio;
