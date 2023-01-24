interface buttonProps {
  children: React.ReactNode;
  onClick: () => void;
  change: boolean;
}

const Button = (props: buttonProps) => {
  const { children, onClick, change} = props;
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={onClick}
          className={`bg-amber py-4 px-14 text-white font-bold uppercase space tracking-[.20em] font-gotham rounded-full shadow-xl hover:bg-amber-900 hover:shadow-[0_15px_20px_rgba(255,190,11,0.4)] hover:-translate-y-1 ease-in duration-300`}
        >
          {!change ? "start" : "stop"}
        </button>
        {children}
      </div>
    </>
  );
};

export default Button;
