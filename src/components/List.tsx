import { useAppSelector } from "../store/store";

const List = () => {
  const people = useAppSelector((state) => state.person.people);
  return (
    <div>
      {people.map((person) => (
        <h2>{person.name}</h2>
      ))}
    </div>
  );
};

export default List;
