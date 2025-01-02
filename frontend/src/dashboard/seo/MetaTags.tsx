
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function MetaTags({ 
  title, 
  description, 
  keywords = [], 
  image,
  url 
}: MetaTagsProps) {
  const siteTitle = `${title} | NursingStudentsHelp.us`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}