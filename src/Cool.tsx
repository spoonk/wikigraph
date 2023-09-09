import { FC } from "react";
import { useState } from "react";

interface CoolProps {
  foo: number;
  bar: string;
}

const Cool: FC<CoolProps> = ({ foo, bar }) => {
  const [data, setData] = useState("ha");
  return <div>{data}</div>;
};

export default Cool;
