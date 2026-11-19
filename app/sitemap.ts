import { MetadataRoute } from 'next';

const baseUrl = 'https://www.vedichindipanditinkerala.com';

const locations = [
  'thiruvananthapuram',
  'kochi',
  'kowdiar',
  'technopark',
  'pattom',
  'vellayambalam',
  'statue',
  'nanthancode',
  'kazhakkoottam',
  'edappally',
  'kadavanthra',
  'panampilly-nagar',
  'vytilla',
  'mg-road',
  'fort-kochi',
  'kakkanad',
];

const services = [
  'griha-pravesh-puja',
  'satyanarayan-pooja',
  'rudrabhishek-pooja',
  'marriage-pooja',
  'vastu-shanti',
  'bhoomi-pooja',
  'navchandi-hawan',
  'kaalsarp-dosh-pooja',
  'manglik-dosh-shanti',
  'mundan-sanskar',
  'namkaran-sanskar',
  'annaprasan-sanskar',
  'godbharai-pooja',
  'pitri-shanti',
  'sundarkand-path',
  'vishnu-lakshmi-puja',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/${loc}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const locationServiceRoutes: MetadataRoute.Sitemap = locations.flatMap((loc) =>
    services.map((srv) => ({
      url: `${baseUrl}/${loc}/${srv}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...locationRoutes, ...locationServiceRoutes];
}