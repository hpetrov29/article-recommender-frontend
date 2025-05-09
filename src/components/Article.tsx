import React from "react";

// Define types for the article block
interface ArticleBlock {
  type: string;
  styling: string | string[];
  src?: string | undefined;
  alt?: string | undefined;
  content?: string | null;
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
            <p
              key={index}
              className={
                "mx-auto w-[37.5rem] " + classNames + " text-sm font-light"
              }
            >
              {content}
            </p>
          );
        }

        if (type === "image") {
          return (
            <div key={index} className="image-container">
              <img
                src={block.src}
                alt={block.alt || "Image"}
                className={`max-w[37.5rem] mx-auto my-[2rem] ${classNames}`}
              />
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

export default Article;
