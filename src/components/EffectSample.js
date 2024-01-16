import { useEffect, useState} from "react";

function EffectSample(){
const [count, setCount] = useState(0);

  useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },
  [count]);

console.log('to test use Effect for render');
  return (<>
            <h1>Use Effect Sample</h1>
            <p>I have rendered {count} times</p>
        </>);
}

export default EffectSample;