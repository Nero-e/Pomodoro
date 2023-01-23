const List = () => {
    const Option = [{id: 1, text: 'Pomodoro'},{id: 2, text: 'Short Break'},{id:3, text: 'Long Break'}]
  return (
    <>
      <ul className="flex justify-between w-full p-4 font-gotham">
        {Option.map(({text, id}) => (
          <li key={id} className="font-bold text-electric-violet-500 hover:text-electric-violet-800 cursor-pointer hover:italic">
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
