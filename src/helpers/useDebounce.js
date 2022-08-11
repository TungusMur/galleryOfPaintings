import { useEffect, useRef } from "react";

const useDebounce = (value, func, delay, stateFirstTime = false) => {
  const firstTime = useRef(stateFirstTime);

  useEffect(() => {
    if (firstTime.current) {
      console.log("bee");
      const handler = setTimeout(() => {
        func(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    } else {
      firstTime.current = true;
    }
  }, [value]);
};

export default useDebounce;
