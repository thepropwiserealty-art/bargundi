export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. The Main Organization (You/The Website)
      {
        "@type": "RealEstateAgent",
        "@id": "https://mantra-burgundy-best-deals.com/#organization",
        "name": "Mantra Burgundy Luxury Properties",
        "url": "https://mantra-burgundy-best-deals.com",
        "logo": "https://mantra-burgundy-best-deals.com/mantralogo.png",
        "image": "https://mantra-burgundy-best-deals.com/images/hero-render-og.jpg",
        "telephone": "+918237311365",
        "priceRange": "₹2.20 Cr - ₹5.10 Cr",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "addressCountry": "IN"
        },
        "description": "Exclusive channel partner for Mantra Burgundy series: Marvilla Villas, 1 Residences, and Mayfair in Mundhwa & Magarpatta.",
        "sameAs": [
          "https://www.facebook.com/mantragrouppune/", // Add your actual socials if available
          "https://www.instagram.com/mantraproperties" 
        ]
      },

      // 2. Project: Mantra Marvilla (Villas)
      {
        "@type": "SingleFamilyResidence", // Best schema for Villas
        "@id": "https://mantra-burgundy-best-deals.com/#marvilla",
        "name": "Mantra Marvilla Villas",
        "description": "Luxury 5 BHK Villas in Mundhwa, Pune. 5,500 sqft exclusive row houses with masterful engineering.",
        "url": "https://mantra-burgundy-best-deals.com/#Marvilla-Villas",
        "image": "https://mantra-burgundy-best-deals.com/daycam.jpg", // REPLACE with real image path
        "numberOfRooms": 5,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 5500,
          "unitCode": "FTK"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mantra Marvilla, Mundhwa",
          "addressLocality": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.5302, // Approx Mundhwa Lat
          "longitude": 73.9262
        },
        "offers": {
          "@type": "Offer",
          "price": "51000000", // ₹5.10 Cr
          "priceCurrency": "INR",
          "availability": "https://schema.org/PreOrder",
          "seller": { "@id": "https://mantra-burgundy-best-deals.com/#organization" }
        }
      },

      // 3. Project: Mantra Mayfair (Apartments)
      {
        "@type": "ApartmentComplex",
        "@id": "https://mantra-burgundy-best-deals.com/#mayfair",
        "name": "Mantra Mayfair Residences",
        "description": "Premium 3 & 4 BHK riverside homes in Upper Koregaon Park, Mundhwa.",
        "url": "https://mantra-burgundy-best-deals.com/#Mayfair-Residences",
        "image": "https://mantra-burgundy-best-deals.com/mayfair3bhk.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Upper Koregaon Park, Mundhwa",
          "addressRegion": "Pune",
          "addressCountry": "IN"
        },
        "containsPlace": [
          {
            "@type": "Apartment",
            "name": "Mayfair 3 BHK",
            "numberOfRooms": 3,
            "floorSize": { "@type": "QuantitativeValue", "value": 1500, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "22000000", "priceCurrency": "INR" }
          },
          {
            "@type": "Apartment",
            "name": "Mayfair 4 BHK",
            "numberOfRooms": 4,
            "floorSize": { "@type": "QuantitativeValue", "value": 1743, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "26000000", "priceCurrency": "INR" }
          }
        ]
      },

      // 4. Project: Mantra 1 Residences (Apartments)
      {
        "@type": "ApartmentComplex",
        "@id": "https://mantra-burgundy-best-deals.com/#one-residences",
        "name": "Mantra One Residences",
        "description": "Luxury 3 & 4 BHK apartments in Magarpatta, Pune. Pure elegance near Seasons Mall.",
        "url": "https://mantra-burgundy-best-deals.com/#One-Residences",
        "image": "https://mantra-burgundy-best-deals.com/oneresidences3bhk.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Magarpatta City",
          "addressRegion": "Pune",
          "addressCountry": "IN"
        },
        "containsPlace": [
          {
            "@type": "Apartment",
            "name": "One Residences 3 BHK",
            "numberOfRooms": 3,
            "floorSize": { "@type": "QuantitativeValue", "value": 1696, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "price": "29000000", "priceCurrency": "INR" }
          }
        ]
      },

      // 5. FAQ Schema (Great for obtaining "People Also Ask" snippets)
      {
        "@type": "FAQPage",
        "@id": "https://mantra-burgundy-best-deals.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the price of Mantra Marvilla villas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 5 BHK luxury villas at Mantra Marvilla in Mundhwa start from approximately ₹5.10 Crore*."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Mantra Mayfair located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mantra Mayfair is located in Upper Koregaon Park, Mundhwa, offering excellent connectivity to Pune's IT hubs."
            }
          },
          {
            "@type": "Question",
            "name": "Are there 4 BHK flats available in Magarpatta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Mantra One Residences in Magarpatta offers spacious 4 BHK luxury apartments starting from approx ₹2.60 Cr*."
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