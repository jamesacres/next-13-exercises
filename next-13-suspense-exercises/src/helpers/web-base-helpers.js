import React from 'react';

let linksCache;
export const getNavLinks =  React.cache(async () => {
  if (linksCache) {
    return linksCache;
  }
  
  console.info(
    'Requesting navigation links from CMS'
  );
  await delay(1800);

  linksCache = LINKS;

  return linksCache;
  });

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const LINKS = [
  {
    slug: 'platform',
    label: 'Platform',
    href: '/platform',
    type: 'primary',
  },
  {
    slug: 'solutions',
    label: 'Solutions',
    href: '/solutions',
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    href: '/integrations',
  },
  {
    slug: 'docs',
    label: 'Docs',
    href: '/documentation/start-here',
  },
  {
    slug: 'pricing',
    label: 'Pricing',
    href: '/pricing',
  },
];
