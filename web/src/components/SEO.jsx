import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import seoImage from 'images/seo.png';
import { urlFor } from 'services/sanity.service';

function SEO({ description, title, image, lang, keywords }) {
  const name = 'Kystleik';
  const imageSrc = image
    ? urlFor(image)
        .width(1200)
        .height(628)
        .url()
    : `https://www.kystleik.no${seoImage}`;
  const newTitle = title === name ? title : `${title} | ${name}`;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{newTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={newTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kystleik.no/" />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary" />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
    </Helmet>
  );
}

SEO.defaultProps = {
  description:
    'Kystleik tilbyr SUP kurs, teambuilding, guidedet tur, events, ulike aktiviter for enkeltpersoner, grupper og firma/bedrifter på Sotra (Øygarden) og i Bergen. Med havet som nærmeste nabo har vi verdens største og beste lekeplass.',
  title: 'Kystleik',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
