import {useState, useEffect, useRef} from "react";
import "./App.css";
import Timer from './components/Timer';

function App() {

  const [timerHours, setTimerHours] = useState(1);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [isVisible,setVisible] = useState(true);

  let interval = useRef<number | null>(null);

  const startTimer=()=>{
    const endTime = Date.now() + 1 * 60 * 60 * 1000;

    interval.current = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

      if (distance <= 0) {
        if (interval.current !== null){
          clearInterval(interval.current);
        }
      setTimerHours(0);
      setTimerMinutes(0);
      setTimerSeconds(0);
      return;
    }
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (interval.current !== null){
          clearInterval(interval.current);
        }
      }
  }, []);

  function sendGuy() {
    setVisible(false);
  }
  return (
      <div className="w-180 h-120"> 
        <img src = '/assets/lil_guy_art.png' width={100} height={50} className={`${isVisible ? 'visible' : 'invisible'}`} />
        <h1>
          Hello LilGuys!
        </h1>
        <Timer 
        timerHours={timerHours} 
        timerMinutes={timerMinutes} 
        timerSeconds={timerSeconds}
        />
          <button type="button" onClick={sendGuy} className={`bg-blue-300 active:bg-blue-200`}>
            Send out the lil guys!
          </button>
        </div>

  );
}

export default App
