export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. ORGANIZATION: Authorized Channel Partner
      {
        "@type": "RealEstateAgent",
        "@id": "https://mantra-burgundy-best-deals.com/#organization",
        "name": "Mantra Burgundy - Authorized Channel Partner",
        "legalName": "Mantra Burgundy Sales Partner",
        "url": "https://mantra-burgundy-best-deals.com",
        "logo": "https://mantra-burgundy-best-deals.com/mantralogo.png",
        "image": "https://mantra-burgundy-best-deals.com/images/hero-render-og.jpg",
        "telephone": "+918237311365",
        "priceRange": "₹2.20 Cr - ₹5.10 Cr",
        "identifier": "A52100000378", // RERA ID
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "description": "Authorized Channel Partner for Mantra Burgundy Luxury Collection. Serving luxury home buyers in Pune and investors from Mumbai, Delhi, Bangalore & Hyderabad.",
        
        // TARGETING: Pincodes mapped to Cities for Better SEO Understanding
        "areaServed": [
          // PUNE (Local)
          { "@type": "PostalCode", "postalCode": "411036", "name": "Mundhwa" },
          { "@type": "PostalCode", "postalCode": "411014", "name": "Viman Nagar" },
          { "@type": "PostalCode", "postalCode": "411028", "name": "Hadapsar" },
          { "@type": "PostalCode", "postalCode": "411047", "name": "Lohgaon" },
          { "@type": "PostalCode", "postalCode": "412207", "name": "Wagholi" },
          { "@type": "PostalCode", "postalCode": "411060", "name": "Undri" },
          { "@type": "PostalCode", "postalCode": "411045", "name": "Baner" },
          { "@type": "PostalCode", "postalCode": "411057", "name": "Hinjewadi" },
          { "@type": "PostalCode", "postalCode": "411033", "name": "Tathawade" },
          { "@type": "PostalCode", "postalCode": "411021", "name": "Bavdhan" },
          { "@type": "PostalCode", "postalCode": "411038", "name": "Kothrud" },
          { "@type": "PostalCode", "postalCode": "411058", "name": "Warje" },
          { "@type": "PostalCode", "postalCode": "411002", "name": "Bajirao Road" },
          { "@type": "PostalCode", "postalCode": "411030", "name": "Sadashiv Peth" },
          { "@type": "PostalCode", "postalCode": "411048", "name": "Kondhwa" },
          { "@type": "PostalCode", "postalCode": "411001", "name": "Pune Camp" },

          // MUMBAI (High Net Worth Zones)
          { "@type": "PostalCode", "postalCode": "400050", "name": "Bandra West" },
          { "@type": "PostalCode", "postalCode": "400052", "name": "Khar West" },
          { "@type": "PostalCode", "postalCode": "400053", "name": "Andheri West" },
          { "@type": "PostalCode", "postalCode": "400049", "name": "Juhu" },
          { "@type": "PostalCode", "postalCode": "400018", "name": "Worli" },
          { "@type": "PostalCode", "postalCode": "400026", "name": "Cumballa Hill" },
          { "@type": "PostalCode", "postalCode": "400013", "name": "Lower Parel" },
          { "@type": "PostalCode", "postalCode": "400025", "name": "Prabhadevi" },
          { "@type": "PostalCode", "postalCode": "400051", "name": "Bandra East" },

          // NAVI MUMBAI & THANE
          { "@type": "PostalCode", "postalCode": "400601", "name": "Thane West" },
          { "@type": "PostalCode", "postalCode": "400703", "name": "Vashi" },
          { "@type": "PostalCode", "postalCode": "410210", "name": "Kharghar" },
          { "@type": "PostalCode", "postalCode": "400705", "name": "Sanpada" },
          { "@type": "PostalCode", "postalCode": "400706", "name": "Nerul" },

          // DELHI NCR (Investors)
          { "@type": "PostalCode", "postalCode": "110057", "name": "Vasant Vihar" },
          { "@type": "PostalCode", "postalCode": "110048", "name": "Greater Kailash" },
          { "@type": "PostalCode", "postalCode": "110016", "name": "Hauz Khas" },

          // BANGALORE (Tech Investors)
          { "@type": "PostalCode", "postalCode": "560034", "name": "Koramangala" },
          { "@type": "PostalCode", "postalCode": "560038", "name": "Indiranagar" },

          // HYDERABAD
          { "@type": "PostalCode", "postalCode": "500033", "name": "Jubilee Hills" },
          { "@type": "PostalCode", "postalCode": "500034", "name": "Banjara Hills" },

          // CHENNAI
          { "@type": "PostalCode", "postalCode": "600040", "name": "Anna Nagar" },
          { "@type": "PostalCode", "postalCode": "600020", "name": "Adyar" },

          // MAHARASHTRA TIER 2 (Nashik, Nagpur, Aurangabad)
          { "@type": "PostalCode", "postalCode": "440001", "name": "Nagpur Civil Lines" },
          { "@type": "PostalCode", "postalCode": "422001", "name": "Nashik City" },
          { "@type": "PostalCode", "postalCode": "431001", "name": "Aurangabad" }
        ],
        "sameAs": [
          "https://www.facebook.com/mantragrouppune/", 
          "https://www.instagram.com/mantraproperties" 
        ]
      },

      // 2. PROJECT: Mantra Marvilla
      {
        "@type": "SingleFamilyResidence",
        "@id": "https://mantra-burgundy-best-deals.com/#marvilla",
        "name": "Mantra Marvilla Villas",
        "description": "5 BHK Luxury Villas in Mundhwa, Pune. 5,500 sqft exclusive row houses.",
        "url": "https://mantra-burgundy-best-deals.com/#Marvilla-Villas",
        "image": "https://mantra-burgundy-best-deals.com/daycam.jpg",
        "numberOfRooms": 5,
        "floorSize": { "@type": "QuantitativeValue", "value": 5500, "unitCode": "FTK" },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mantra Marvilla, Mundhwa",
          "addressLocality": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 18.5302, "longitude": 73.9262 },
        "offers": {
          "@type": "Offer",
          "price": "51000000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/PreOrder",
          "seller": { "@id": "https://mantra-burgundy-best-deals.com/#organization" }
        }
      },

      // 3. PROJECT: Mantra Mayfair
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

      // 4. PROJECT: Mantra One Residences
      {
        "@type": "ApartmentComplex",
        "@id": "https://mantra-burgundy-best-deals.com/#one-residences",
        "name": "Mantra One Residences",
        "description": "Luxury 3 & 4 BHK apartments in Magarpatta, Pune.",
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
          },
          {
            "@type": "Apartment",
            "name": "One Residences 4 BHK",
            "numberOfRooms": 4,
            "floorSize": { "@type": "QuantitativeValue", "value": 2086, "unitCode": "FTK" },
            "offers": { "@type": "Offer", "availability": "https://schema.org/PreOrder" }
          }
        ]
      },

      // 5. FAQ
      {
        "@type": "FAQPage",
        "@id": "https://mantra-burgundy-best-deals.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the price of 5 BHK Villas in Mantra Marvilla?",
            "acceptedAnswer": { "@type": "Answer", "text": "The 5 BHK ultra-luxury villas at Mantra Marvilla (5,500 sqft) start from ₹5.10 Crore*." }
          },
          {
            "@type": "Question",
            "name": "What is the carpet area of Mantra One Residences?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mantra One Residences in Magarpatta offers spacious layouts: 3 BHK at 1696 sqft and 4 BHK at 2086 sqft." }
          },
          {
            "@type": "Question",
            "name": "Who is the authorized partner for Mantra Burgundy?",
            "acceptedAnswer": { "@type": "Answer", "text": "We are an authorized channel partner (RERA: A52100000378) providing official bookings and best deals for Mantra Marvilla, Mayfair, and One Residences." }
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