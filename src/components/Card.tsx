import React, { createContext, useContext, ReactNode } from "react";

type CardType = "post" | "comment";

interface CardContextType {
  type: CardType;
}

const CardContext = createContext<CardContextType>({ type: "post" });

interface CardProps {
  type?: CardType;
  children: ReactNode;
  style?: React.CSSProperties;
}

export const Card = ({ type = "post", children, style }: CardProps) => {
  return (
    <CardContext.Provider value={{ type }}>
      <div
        className="flex gap-3 border-t border-[rgb(0,0,0,.1)] py-[1.5rem] cursor-pointer"
        style={style}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

Card.Avatar = () => (
  <div className="flex-1 w-full max-w-[2.25rem] h-full bg-gray-100">
    <div className="w-[2.25rem] h-[2.25rem] bg-blue-500 rounded-full"></div>
  </div>
);

interface ContentProps {
  children: ReactNode;
}

Card.Content = ({ children }: ContentProps) => (
  <div className="flex-1 flex flex-col gap-2">{children}</div>
);

interface HeaderProps {
  author: string;
  time: string;
}

Card.Header = ({ author, time }: HeaderProps) => {
  const { type } = useContext(CardContext);
  return (
    <div className="w-full h-[1.25rem] flex gap-2 items-center">
      <div className="flex-1 gap-[0.375rem] leading-5 flex items-center">
        <span className="font-medium text-[0.9375rem] leading-5 cursor-pointer hover:underline">
          <a>{author}</a>
        </span>
        <div className="w-[0.75rem] h-[0.75rem] bg-gray-50"></div>
        <span className="h-full">
          <a className="leading-none font-normal text-[0.8125rem] text-[rgb(119,119,119)] cursor-pointer hover:underline">
            {time}
          </a>
        </span>
      </div>
      {type === "post" && (
        <button className="h-[1.75rem] px-[0.75rem] rounded-full text-[0.8125rem] font-semibold text-[rgb(255,103,25)] select-none hover:bg-[rgb(255,103,25,0.1)] transition duration-250">
          Follow
        </button>
      )}
      <div className="w-[1.25rem] h-[1.25rem] bg-gray-50"></div>
    </div>
  );
};

interface BodyProps {
  children: ReactNode;
}

Card.Body = ({ children }: BodyProps) => (
  <div className="w-full h-full">
    <p className="text-[0.9375rem] leading-[1.3125rem] text-[rgb(54,55,55)]">
      {children}
    </p>
  </div>
);

interface ActionsProps {
  children: ReactNode;
}

Card.Actions = ({ children }: ActionsProps) => (
  <div className="h-[2rem] flex justify-start gap-2">{children}</div>
);
