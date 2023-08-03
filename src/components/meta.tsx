import React from "react";

const siteName = "Dave's Notes";
const baseUrl = "https://davidhartsough.com/";
const url = `${baseUrl}notes/`;

export default function Meta({
  page = "",
  description,
  path = "",
}: {
  page?: string;
  description: string;
  path?: string;
}) {
  const title = page ? `${page} • ${siteName}` : siteName;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Dave, David, Hartsough, notes, thoughts, thinking, document, writing, note"
      />
      <meta name="author" content="David Hartsough" />
      <link rel="canonical" href={`${url}${path}`} />
      <meta name="application-name" content={siteName} />
      <meta property="og:type" content={path ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${baseUrl}icon.png`} />
      <meta property="og:image:alt" content="Dave's logo icon" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}icon.png`} />
      <meta name="twitter:image:alt" content="Dave's logo icon" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <link
        rel="icon"
        href={`${baseUrl}favicon.ico`}
        type="image/x-icon"
        sizes="any"
      />
      <link
        rel="icon"
        href={`${baseUrl}favicon-16x16.png`}
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="icon"
        href={`${baseUrl}favicon-32x32.png`}
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href={`${baseUrl}icon192.png`}
        type="image/png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon"
        href={`${baseUrl}apple-touch-icon.png`}
        type="image/png"
        sizes="180x180"
      />
    </>
  );
}
