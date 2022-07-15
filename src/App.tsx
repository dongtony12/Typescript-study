import { useEffect, useRef, useState } from "react";

const App = () => {
  const [test, setTest] = useState("qr");
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (targetRef.current) console.log(targetRef.current.offsetHeight);
  }, [targetRef]);

  return <div ref={targetRef}>hello</div>;
};

export default App;
