import React, { useState } from "react";

export type TDefaultContextData = {};

export interface TDefaultContext {
  data: TDefaultContextData;
  setData: React.Dispatch<React.SetStateAction<TDefaultContextData>>;
}

export const DefaultContext = React.createContext<TDefaultContext>({
  data: {},
  setData: () => console.log("set data"),
});

export const DefaultContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<TDefaultContextData>({});

  return (
    <DefaultContext.Provider value={{ data, setData }}>
      {children}
    </DefaultContext.Provider>
  );
};
