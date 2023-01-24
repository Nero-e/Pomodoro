import { url } from "inspector";

const List = () => {
  const Option = [
    { id: 1, text: "Pomodoro", url: "/home" },
    { id: 2, text: "Short Break", url: "/shortBreak" },
    { id: 3, text: "Long Break", url: "/" },
  ];
  return (
    <>
      <ul className="flex justify-between w-full p-4 font-gotham">
          {Option.map(({ text, id, url }) => (
            <li
              key={id}
              className={`font-bold text-amber hover:text-amber-700 cursor-pointer`}
            >
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
    </>
  );
};

export default List;
