import React, { useMemo, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(203);

  useMemo(() => {
    // useRef value stored in .current property
    const timer = setInterval(
      () => setCount(Math.round(Math.random() * (352 - 156) + 156)),
      10000
    );

    // clear on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span>{count}</span>;
}
