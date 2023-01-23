interface buttonProps {
  onClick: () => void;
  change: boolean;
}

const Button = (props: buttonProps) => {
  const {onClick, change} = props;
  return (
    <>
      <div className="flex justify-center items-center">
        <button onClick={onClick} className="bg-electric-violet-500 py-4 px-14 text-white font-bold uppercase space tracking-[.20em] font-gotham rounded-full shadow-xl hover:bg-electric-violet-900 hover:shadow-[0_15px_20px_rgba(131,96,236,0.4)] hover:-translate-y-1 ease-in duration-300">
          {!change ? 'start' : 'stop'}
        </button>
      </div>
    </>
  );
};

export default Button;
