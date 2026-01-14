import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ovations.co.za/#business",
    name: "Ovations",
    alternateName: "Ovations Branding",
    description:
      "Premium branding and signage company in Mthatha, South Africa. Specializing in business branding, professional signage, visual identity, and custom print solutions.",
    url: "https://ovations.co.za",
    telephone: "+27637941194",
    email: "info@ovations.co.za",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LCM Ludidi Building, 3 Chatham St, CBD",
      addressLocality: "Mthatha",
      addressRegion: "Eastern Cape",
      postalCode: "5099",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.5889,
      longitude: 28.7844,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Mthatha",
      },
      {
        "@type": "State",
        name: "Eastern Cape",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "47",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Local Business Owner",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Best branding company in Mthatha. Professional service and quality work.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Retail Store Owner",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Trusted branding company. They transformed our store signage completely.",
      },
    ],
    sameAs: [],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, EFT",
    currenciesAccepted: "ZAR",
    image: "https://ovations.co.za/og-image.jpg",
    logo: "https://ovations.co.za/logo.png",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Branding & Signage Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Branding",
            description: "Complete brand identity solutions for businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Signage",
            description: "Custom signage design and installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visual Identity",
            description: "Logo design, brand guidelines, and visual systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Prints",
            description: "Business cards, banners, and marketing materials",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
