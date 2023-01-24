interface ClockProps {
  time: number;
}
const Clock = (props: ClockProps) => {
  const {time} = props;
  const millisecondsToMinutes = (milliseconds: number) => {
    const minutes = Math.trunc(milliseconds / 60);
    const seconds = milliseconds % 60;

    return `${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <>
      <div className={`text-8xl py-8 font-bold font-gotham text-amber`} >
        <h1>{millisecondsToMinutes(time)}</h1>
      </div>
    </>
  );
};

export default Clock;
