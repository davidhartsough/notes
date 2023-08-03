import React from "react";
import { HeadProps, graphql } from "gatsby";
import Layout from "../components/layout";
import Meta from "../components/meta";

export const query = graphql`
  query Note($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<Queries.NoteQuery>) => (
  <Meta
    page={data.mdx?.frontmatter?.title || ""}
    path={data.mdx?.frontmatter?.slug || ""}
    description={data.mdx?.frontmatter?.description || ""}
  />
);

export default function NotePage({
  data,
  children,
}: {
  data: Queries.NoteQuery;
  children: React.ReactElement;
}) {
  const note = data.mdx?.frontmatter;
  return (
    <Layout title={note?.title || ""} path={note?.slug || ""}>
      <h1>{note?.title}</h1>
      <p>
        <em>
          <small>{note?.date}</small>
        </em>
      </p>
      {children}
    </Layout>
  );
}
