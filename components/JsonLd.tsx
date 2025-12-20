export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // -----------------------------------------------------------------------
      // 1. ORGANIZATION: RERA Registered Partner
      // -----------------------------------------------------------------------
      {
        "@type": "RealEstateAgent",
        "@id": "https://mantra-burgundy-best-deals.com/#organization",
        "name": "Mantra Burgundy - Best Deals",
        "legalName": "Authorized Channel Partner",
        "url": "https://mantra-burgundy-best-deals.com",
        "logo": "https://mantra-burgundy-best-deals.com/mantralogo.png",
        "telephone": "+918237311365",
        "email": "sales@mantra-burgundy-best-deals.com",
        "identifier": "A52100000378", // Agent RERA
        "priceRange": "₹2.20 Cr - ₹5.50 Cr",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mantra Luxury Line, Near Magarpatta City",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "areaServed": [
           // CORE MARKETS
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "PostalCode", "postalCode": "411036", "name": "Mundhwa" },
          { "@type": "PostalCode", "postalCode": "411001", "name": "Koregaon Park" },
          { "@type": "PostalCode", "postalCode": "411028", "name": "Magarpatta" }
        ],
        "sameAs": [
          "https://www.facebook.com/mantragrouppune/",
          "https://www.instagram.com/mantraproperties"
        ]
      },

      // -----------------------------------------------------------------------
      // 2. PROJECT: Mantra Marvilla (Villas)
      // -----------------------------------------------------------------------
      {
        "@type": "GatedResidenceCommunity",
        "@id": "https://mantra-burgundy-best-deals.com/#marvilla",
        "name": "Mantra Marvilla Villas",
        "alternateName": "Marvilla by Burgundy",
        "description": "Exclusive collection of 5 BHK luxury villas in Mundhwa with private amenities.",
        "url": "https://mantra-burgundy-best-deals.com/#marvilla",
        "image": "https://mantra-burgundy-best-deals.com/daycam.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mantra Marvilla, Near Kodre Nagar",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "geo": { 
          "@type": "GeoCoordinates", 
          "latitude": 18.5302, 
          "longitude": 73.9262 
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Private Mini Golf Area", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Exclusive Outdoor Cafeteria", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Private Mini Theatre", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Luxury Spa", "value": true }
        ],
        "containsPlace": [
          {
            "@type": "SingleFamilyResidence",
            "name": "Marvilla 5 BHK Villa",
            "numberOfRooms": 5,
            "floorSize": { "@type": "QuantitativeValue", "value": 5500, "unitCode": "FTK" },
            "offers": { 
              "@type": "Offer", 
              "price": "51000000", 
              "priceCurrency": "INR",
              "availability": "https://schema.org/PreOrder",
              "seller": { "@id": "https://mantra-burgundy-best-deals.com/#organization" }
            }
          }
        ]
      },

      // -----------------------------------------------------------------------
      // 3. PROJECT: Mantra Mayfair (Riverside)
      // -----------------------------------------------------------------------
      {
        "@type": "ApartmentComplex",
        "@id": "https://mantra-burgundy-best-deals.com/#mayfair",
        "name": "Mantra Mayfair Residences",
        "description": "Premium riverside apartments in Upper Koregaon Park with infinity pool and rooftop deck.",
        "identifier": "P52100049704", // Phase 1 RERA
        "url": "https://mantra-burgundy-best-deals.com/#mayfair",
        "image": "https://mantra-burgundy-best-deals.com/mayfair3bhk.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Ghorpadi Road, Upper Koregaon Park",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Infinity Swimming Pool", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Rooftop Deck", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Riverside View", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Zumba Track", "value": true }
        ],
        "containsPlace": [
          {
            "@type": "Apartment",
            "name": "Mayfair 3 BHK Premium",
            "numberOfRooms": 3,
            "floorSize": { "@type": "QuantitativeValue", "value": 1391, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "22000000", "priceCurrency": "INR" }
          },
          {
            "@type": "Apartment",
            "name": "Mayfair 4 BHK Luxury",
            "numberOfRooms": 4,
            "floorSize": { "@type": "QuantitativeValue", "value": 1747, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "27500000", "priceCurrency": "INR" }
          }
        ]
      },

      // -----------------------------------------------------------------------
      // 4. PROJECT: Mantra One Residences (Magarpatta)
      // -----------------------------------------------------------------------
      {
        "@type": "ApartmentComplex",
        "@id": "https://mantra-burgundy-best-deals.com/#one-residences",
        "name": "Mantra One Residences",
        "description": "Ultra-luxury 3 & 4 BHK homes in Magarpatta City with podium amenities.",
        "identifier": "P52100066482", // Phase 1 RERA
        "url": "https://mantra-burgundy-best-deals.com/#one-residences",
        "image": "https://mantra-burgundy-best-deals.com/oneresidences3bhk.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Magarpatta City, Solapur Highway",
          "addressLocality": "Hadapsar",
          "addressRegion": "Pune",
          "postalCode": "411028",
          "addressCountry": "IN"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Podium Swimming Pool", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Yoga & Meditation Zone", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Community Hall", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Kids Play Area", "value": true }
        ],
        "containsPlace": [
          {
            "@type": "Apartment",
            "name": "One Residences 3 BHK Ultima",
            "numberOfRooms": 3,
            "floorSize": { "@type": "QuantitativeValue", "value": 1696, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "29600000", "priceCurrency": "INR" }
          },
          {
            "@type": "Apartment",
            "name": "One Residences 4 BHK Ultima",
            "numberOfRooms": 4,
            "floorSize": { "@type": "QuantitativeValue", "value": 2087, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "35000000", "priceCurrency": "INR" }
          }
        ]
      },

      // -----------------------------------------------------------------------
      // 5. FAQ Section (Optimized for Voice Search)
      // -----------------------------------------------------------------------
      {
        "@type": "FAQPage",
        "@id": "https://mantra-burgundy-best-deals.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the RERA numbers for Mantra Burgundy projects?",
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Mantra One Residences is registered under P52100066482 (Phase 1) and P52100077014 (Phase 3). Mantra Mayfair is registered under P52100049704." 
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price for Mantra One Residences?",
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "The 3 BHK residences start from approximately ₹2.60 Cr*, while the 4 BHK luxury units start from ₹3.05 Cr* in Magarpatta." 
            }
          },
          {
            "@type": "Question",
            "name": "Where is Mantra Marvilla located?",
            "acceptedAnswer": { 
              "@type": "Answer", 
              "text": "Mantra Marvilla is located in Mundhwa, Pune (411036), near Kodre Nagar, offering exclusive 5 BHK villas with excellent connectivity to Koregaon Park." 
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}