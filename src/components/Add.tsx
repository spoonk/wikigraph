import { FC, useRef } from "react";
import { addPerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";

const Add: FC = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Person Name:</label>
      <input onChange={(e) => (name.current = e.target.value)} />
      <button onClick={() => dispatch(addPerson({ name: name.current }))}>
        add
      </button>
    </form>
  );
};

export default Add;
