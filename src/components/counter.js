import { useEffect, useState } from 'react';

export default function counter() {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(1);
  let min, sec;
  min = Math.floor(count / 60);
  sec = count - min * 60;
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + stop);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return [min, sec, setStop];
}
