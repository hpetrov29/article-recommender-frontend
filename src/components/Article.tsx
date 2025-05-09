import React from "react";

// Define types for the article block
interface ArticleBlock {
  type: string;
  styling: string | string[];
  content: string;
}

interface ArticleProps {
  body: {
    blocks: ArticleBlock[];
  };
}

const renderStyling = (styling: string | string[]) => {
  const classNames = Array.isArray(styling) ? styling.join(" ") : styling;
  return classNames;
};

const Article: React.FC<ArticleProps> = ({ body }) => {
  return (
    <>
      {body.blocks.map((block, index) => {
        const { type, styling, content } = block;
        const classNames = renderStyling(styling);

        if (type === "heading1") {
          return (
            <h1 key={index} className={classNames}>
              {content}
            </h1>
          );
        }

        if (type === "paragraph") {
          return (
            <p key={index} className={"mx-auto w-[37.5rem] " + classNames}>
              {content}
            </p>
          );
        }

        return null; // Return nothing for unsupported block types
      })}
    </>
  );
};

export default Article;
