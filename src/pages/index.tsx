import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import Meta from "../components/meta";

export const Head: HeadFC = () => (
  <Meta
    page="Index"
    description="This is where I openly document the progress of my thoughts/thinking, one note at a time."
  />
);

export const query = graphql`
  query AllNotes {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMM YYYY")
        }
      }
    }
  }
`;

export default function IndexPage({ data }: PageProps<Queries.AllNotesQuery>) {
  const notes = data.allMdx.nodes.map(({ id, frontmatter }) => ({
    id,
    title: frontmatter?.title,
    slug: frontmatter?.slug,
    date: frontmatter?.date,
  }));
  return (
    <Layout>
      <p>
        Welcome to the place where I openly document the progress of my
        thoughts.
      </p>
      <h1>All Notes</h1>
      <ul>
        {notes.map(({ id, title, slug, date }) => (
          <li key={id}>
            <Link to={`/${slug}`}>
              {title} <small>({date})</small>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
