import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Meta from "../components/meta";

export const Head: HeadFC = () => (
  <Meta
    page="Not Found (404)"
    description="Whoops, whelp. There isn't a note at this URL. Bummer."
  />
);

export default function NotFoundPage() {
  return (
    <Layout>
      <p>
        <strong>Not Found</strong>: No notes match this URL.
      </p>
    </Layout>
  );
}
