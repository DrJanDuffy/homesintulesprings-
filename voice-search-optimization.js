/**
 * Voice Search Optimization for Dr. Jan Duffy's Real Estate Website
 * 
 * This file contains implementations to enhance voice search compatibility
 * and natural language processing optimization for virtual assistants like
 * Siri, Google Assistant, and Alexa.
 */

// FAQ schema enhancer - Makes FAQs more discoverable for voice search
function enhanceFAQSchema() {
    // Check if FAQ sections exist on the page
    const faqSections = document.querySelectorAll('.faq-section');
    
    if (faqSections.length > 0) {
        let faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        };
        
        // Loop through all FAQ items and add to schema
        faqSections.forEach(section => {
            const questions = section.querySelectorAll('.faq-item');
            
            questions.forEach(item => {
                const questionText = item.querySelector('.faq-question').textContent;
                const answerText = item.querySelector('.faq-answer').textContent;
                
                faqSchema.mainEntity.push({
                    "@type": "Question",
                    "name": questionText,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answerText
                    }
                });
            });
        });
        
        // Add schema to page
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(faqSchema);
        document.head.appendChild(script);
    }
}

// Local business schema enhancer with voice search specific details
function enhanceLocalBusinessSchema() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy",
        "image": "https://www.drjanduffy.com/images/dr-jan-duffy.jpg",
        "url": "https://www.drjanduffy.com",
        "telephone": "+1-123-456-7890",
        "priceRange": "$$-$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2627 Nature Park Dr",
            "addressLocality": "North Las Vegas",
            "addressRegion": "NV",
            "postalCode": "89084",
            "addressCountry": "US"
        },
        // Voice search specific additions
        "sameAs": [
            "https://www.facebook.com/DrJanDuffy",
            "https://www.instagram.com/drjanduffy",
            "https://www.linkedin.com/in/drjanduffy"
        ],
        // Common voice search queries answered directly in schema
        "knowsAbout": [
            "Tule Springs real estate",
            "North Las Vegas homes for sale",
            "Tule Springs Northwest Village properties",
            "Berkshire Hathaway HomeService Nevada Properties",
            "Las Vegas housing market"
        ],
        // Opening hours in a format voice assistants understand
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "15:00"
            }
        ]
    };
    
    // Add schema to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
}

// Adds natural language attributes to listings for better voice search results
function enhanceListingData() {
    const listingItems = document.querySelectorAll('.listing-card');
    
    listingItems.forEach(listing => {
        // Get listing details
        const title = listing.querySelector('h3').textContent;
        const address = listing.querySelector('.listing-address').textContent;
        const price = listing.querySelector('.listing-price').textContent;
        const beds = listing.querySelector('.beds').textContent;
        const baths = listing.querySelector('.baths').textContent;
        const sqft = listing.querySelector('.sqft').textContent;
        
        // Add data attributes for voice search
        listing.setAttribute('data-voice-title', title);
        listing.setAttribute('data-voice-location', 'Tule Springs, North Las Vegas, Nevada');
        listing.setAttribute('data-voice-description', `${beds} bedroom, ${baths} bathroom home with ${sqft} in Tule Springs, priced at ${price}`);
        
        // Add common voice query terms as hidden metadata
        const voiceMetadata = document.createElement('div');
        voiceMetadata.className = 'voice-search-metadata';
        voiceMetadata.style.display = 'none';
        voiceMetadata.innerHTML = `
            <span class="voice-query">homes near Tule Springs Regional Park</span>
            <span class="voice-query">houses in North Las Vegas under ${parseInt(price.replace(/\D/g, '')) + 50000}</span>
            <span class="voice-query">Tule Springs ${beds} bedroom homes</span>
            <span class="voice-query">new homes in North Las Vegas</span>
            <span class="voice-query">Dr. Jan Duffy listings</span>
        `;
        
        listing.appendChild(voiceMetadata);
    });
}

// Add related questions that match voice search patterns
function addRelatedQuestions() {
    const contentSections = document.querySelectorAll('.content-section');
    
    contentSections.forEach(section => {
        // Only add to certain sections
        if (section.classList.contains('property-description') || 
            section.classList.contains('neighborhood-info') ||
            section.classList.contains('tule-springs-intro')) {
            
            const relatedQuestions = document.createElement('div');
            relatedQuestions.className = 'related-questions';
            relatedQuestions.innerHTML = `
                <h4>People also ask:</h4>
                <ul>
                    <li>How much are homes in Tule Springs?</li>
                    <li>Where is Tule Springs located?</li>
                    <li>Is Tule Springs a good neighborhood?</li>
                    <li>What schools are in Tule Springs?</li>
                    <li>How far is Tule Springs from the Las Vegas Strip?</li>
                </ul>
            `;
            
            section.appendChild(relatedQuestions);
        }
    });
}

// Add natural language page titles optimized for voice search
function optimizePageTitles() {
    // Get current page title
    const currentTitle = document.title;
    
    // Add voice search optimized metadata
    const titleMetadata = document.createElement('meta');
    titleMetadata.name = 'voice-title';
    
    // Create voice-optimized versions of common pages
    if (window.location.pathname.includes('listings')) {
        titleMetadata.content = "Homes for sale in Tule Springs with Dr. Jan Duffy";
        document.title = "Tule Springs Homes for Sale | North Las Vegas Real Estate | Dr. Jan Duffy";
    } 
    else if (window.location.pathname.includes('tule-springs')) {
        titleMetadata.content = "Tell me about Tule Springs neighborhood in North Las Vegas";
        document.title = "Tule Springs Community Guide | North Las Vegas | Dr. Jan Duffy";
    }
    else if (window.location.pathname.includes('contact')) {
        titleMetadata.content = "How to contact Dr. Jan Duffy real estate agent in North Las Vegas";
        document.title = "Contact Dr. Jan Duffy | Tule Springs Real Estate Expert";
    }
    else if (window.location.pathname.includes('about')) {
        titleMetadata.content = "Who is Dr. Jan Duffy realtor in North Las Vegas";
        document.title = "About Dr. Jan Duffy | Berkshire Hathaway HomeService Nevada Properties";
    }
    
    document.head.appendChild(titleMetadata);
}

// Initialize all voice search optimizations
document.addEventListener('DOMContentLoaded', function() {
    enhanceFAQSchema();
    enhanceLocalBusinessSchema();
    enhanceListingData();
    addRelatedQuestions();
    optimizePageTitles();
    
    console.log('Voice search optimizations loaded');
});
