import {Fragment} from "react";
//@ts-ignore
const Timer = ({timerHours, timerMinutes, timerSeconds}) => {
  return (
  <Fragment>
    <section className="timer-container">
        <section className="timer">
            <div className="clock">
                <section>
                    <p>{timerHours}</p>
                    <small>H</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <small>M</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <small>S</small>
                </section>
            </div>
        </section>
    </section>
    </Fragment>
    );
};

Timer.defaultProps={
    timerHours: 10,
    timerMinutes: 24,
    timerSeconds: 45,
}
export default Timer;
