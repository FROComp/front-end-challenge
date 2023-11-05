import React from "react";
import { Helmet } from "react-helmet";

interface ISEOProps {
  title: string;
  metas: {
    name: string;
    content: string;
  }[];
}

const SEO: React.FC<ISEOProps> = ({ title, metas }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {metas.map((meta) => (
        <meta name={meta.name} content={meta.content} />
      ))}
    </Helmet>
  );
};

export default SEO;
