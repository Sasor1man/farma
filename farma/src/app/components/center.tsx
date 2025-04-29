import React, { ReactNode } from "react";

type CenterProps = {
  children: ReactNode;
};

const Center: FC<CenterProps> = ({ children }) => {
  return <div className="w-[1296px] m-auto">{children}</div>;
};

export default Center;
