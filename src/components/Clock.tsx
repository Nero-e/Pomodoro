interface ClockProps {
  time: number;
}
const Clock = ({ time }: ClockProps) => {
  const millisecondsToMinutes = (milliseconds: number) => {
    const minutes = Math.trunc(milliseconds / 60);
    const seconds = milliseconds % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <>
      <div className="text-8xl py-8 font-bold text-electric-violet-500 font-gotham">
        <h1>{millisecondsToMinutes(time)}</h1>
      </div>
    </>
  );
};

export default Clock;
