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
        className="flex cursor-pointer gap-3 border-t border-[rgb(0,0,0,.1)] py-[1.5rem]"
        style={style}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

Card.Avatar = () => (
  <div className="h-full w-full max-w-[2.25rem] flex-1 bg-gray-100">
    <div className="h-[2.25rem] w-[2.25rem] rounded-full bg-blue-500"></div>
  </div>
);

interface ContentProps {
  children: ReactNode;
}

Card.Content = ({ children }: ContentProps) => (
  <div className="flex flex-1 flex-col gap-2">{children}</div>
);

interface HeaderProps {
  author: string;
  time: string;
}

Card.Header = ({ author, time }: HeaderProps) => {
  const { type } = useContext(CardContext);
  return (
    <div className="flex h-[1.25rem] w-full items-center gap-2">
      <div className="flex flex-1 items-center gap-[0.375rem] leading-5">
        <span className="cursor-pointer text-[0.9375rem] font-medium leading-5 hover:underline">
          <a>{author}</a>
        </span>
        <div className="h-[0.75rem] w-[0.75rem] bg-gray-50"></div>
        <span className="h-full">
          <a className="cursor-pointer text-[0.8125rem] font-normal leading-none text-[rgb(119,119,119)] hover:underline">
            {time}
          </a>
        </span>
      </div>
      {type === "post" && (
        <button className="duration-250 h-[1.75rem] select-none rounded-full px-[0.75rem] text-[0.8125rem] font-semibold text-[rgb(255,103,25)] transition hover:bg-[rgb(255,103,25,0.1)]">
          Follow
        </button>
      )}
      <div className="h-[1.25rem] w-[1.25rem] bg-gray-50"></div>
    </div>
  );
};

interface BodyProps {
  children: ReactNode;
}

Card.Body = ({ children }: BodyProps) => (
  <div className="h-full w-full">
    <p className="text-[0.9375rem] leading-[1.3125rem] text-[rgb(54,55,55)]">
      {children}
    </p>
  </div>
);

interface ActionsProps {
  children: ReactNode;
}

Card.Actions = ({ children }: ActionsProps) => (
  <div className="flex h-[2rem] justify-start gap-2">{children}</div>
);
