import React from "react"
import Head from "next/head"

const SEO = ({ title, image, description, link }) => {
  return (
    <Head>
      {/* Meta Title */}
      <title>{title}</title>
      <link rel="shortcut icon" href="/images/Navpic.png" />
        
      {/* Meta Description */}
      <meta name="description" content={description} />
      {/* Facebook Meta Property */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

    

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/Navpic.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/Navpic.png"
      />
    </Head>
  )
}

export default SEO