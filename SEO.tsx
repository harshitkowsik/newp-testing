import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  name?: string;
  type?: string;
  imageUrl?: string;
  jsonLd?: object;
  pathname: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  name = "Dr. Ashutosh Mishra",
  type = "website",
  imageUrl,
  jsonLd,
  pathname
}) => {
  const siteUrl = "https://www.dramishra.in"; // Replace with your actual domain
  const fullTitle = `${title} | Dr. Ashutosh Mishra`;
  const displayImage = imageUrl || `${siteUrl}/fab-icon.png`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={siteUrl + pathname} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:image" content={displayImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={displayImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
