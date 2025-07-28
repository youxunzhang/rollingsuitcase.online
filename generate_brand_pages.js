const fs = require('fs');

const brands = [
    {
        name: 'Delsey',
        filename: 'delsey.html',
        description: 'French luxury luggage brand known for innovative security features and lightweight design',
        founded: '1946',
        countries: '60+',
        serviceCenters: '400+',
        warranty: '10-year',
        collections: [
            { name: 'Chatelet', icon: '💼', desc: 'Premium hardside luggage with innovative security features and elegant design' },
            { name: 'Helium', icon: '👜', desc: 'Ultra-lightweight collection with advanced materials and smart packing solutions' },
            { name: 'Paris', icon: '🎒', desc: 'Classic French design with modern functionality and superior craftsmanship' },
            { name: 'Voyage', icon: '🧳', desc: 'Travel-focused collection with expandable design and organizational features' }
        ],
        contact: {
            hotline: '+33-1-4923-5678',
            address: '1 Rue du Ballon, 93160 Noisy-le-Grand, France',
            usService: '+1-877-DELSEY-1',
            email: 'service@delsey.com',
            website: 'delsey.com'
        }
    },
    {
        name: 'Rimowa',
        filename: 'rimowa.html',
        description: 'German engineering excellence in aluminum and polycarbonate luggage since 1898',
        founded: '1898',
        countries: '80+',
        serviceCenters: '300+',
        warranty: '5-year',
        collections: [
            { name: 'Original', icon: '💼', desc: 'Iconic aluminum luggage with distinctive grooves and premium construction' },
            { name: 'Classic', icon: '👜', desc: 'Timeless design with polycarbonate shell and innovative features' },
            { name: 'Essential', icon: '🎒', desc: 'Modern collection with clean lines and practical functionality' },
            { name: 'Hybrid', icon: '🧳', desc: 'Combination of aluminum and polycarbonate for unique style and durability' }
        ],
        contact: {
            hotline: '+49-221-9876-543',
            address: 'Richard-Byrd-Straße 13, 50829 Köln, Germany',
            usService: '+1-888-RIMOWA-1',
            email: 'repair@rimowa.com',
            website: 'rimowa.com'
        }
    },
    {
        name: 'American Tourister',
        filename: 'american-tourister.html',
        description: 'Durable, functional, and stylish luggage solutions for every travel need and budget',
        founded: '1933',
        countries: '120+',
        serviceCenters: '800+',
        warranty: '10-year',
        collections: [
            { name: 'Trek', icon: '💼', desc: 'Durable hardside luggage with vibrant colors and reliable performance' },
            { name: 'Field', icon: '👜', desc: 'Softside collection with expandable design and multiple pockets' },
            { name: 'Voyager', icon: '🎒', desc: 'Lightweight luggage with spinner wheels and TSA-approved locks' },
            { name: 'Pro', icon: '🧳', desc: 'Professional series with business-friendly features and executive styling' }
        ],
        contact: {
            hotline: '+1-800-AT-LUGGAGE',
            address: '575 West Street, Mansfield, MA 02048, USA',
            europeanService: '+44-20-8765-4321',
            email: 'support@americantourister.com',
            website: 'americantourister.com'
        }
    },
    {
        name: 'Victorinox',
        filename: 'victorinox.html',
        description: 'Swiss Army precision applied to travel gear with multi-functional design and reliability',
        founded: '1884',
        countries: '100+',
        serviceCenters: '600+',
        warranty: 'Lifetime',
        collections: [
            { name: 'Werks', icon: '💼', desc: 'Professional travel gear with Swiss precision engineering and durability' },
            { name: 'Altmont', icon: '👜', desc: 'Lightweight collection with innovative design and practical features' },
            { name: 'Spectra', icon: '🎒', desc: 'Hardside luggage with polycarbonate shell and modern aesthetics' },
            { name: 'Luggage', icon: '🧳', desc: 'Classic Swiss design with multi-functional compartments and reliability' }
        ],
        contact: {
            hotline: '+41-41-818-1211',
            address: 'Schmiedgasse 57, 6438 Ibach, Switzerland',
            usService: '+1-800-VICTORINOX',
            email: 'travel@victorinox.com',
            website: 'victorinox.com'
        }
    },
    {
        name: 'Briggs & Riley',
        filename: 'briggs-riley.html',
        description: 'Innovative luggage with lifetime guarantee and smart design',
        founded: '1993',
        countries: '50+',
        serviceCenters: '200+',
        warranty: 'Lifetime',
        collections: [
            { name: 'Baseline', icon: '💼', desc: 'Essential travel gear with lifetime guarantee and practical design' },
            { name: 'Sympatico', icon: '👜', desc: 'Expandable luggage with innovative compression system and durability' },
            { name: 'Torq', icon: '🎒', desc: 'Hardside collection with polycarbonate shell and modern styling' },
            { name: 'ZDX', icon: '🧳', desc: 'Advanced technology with smart features and premium materials' }
        ],
        contact: {
            hotline: '+1-877-745-3978',
            address: '400 Wireless Blvd, Hauppauge, NY 11788, USA',
            email: 'support@briggs-riley.com',
            website: 'briggs-riley.com'
        }
    },
    {
        name: 'Eastpak',
        filename: 'eastpak.html',
        description: 'Urban and durable luggage, backpacks, and travel gear',
        founded: '1952',
        countries: '70+',
        serviceCenters: '300+',
        warranty: '30-year',
        collections: [
            { name: 'Padded Pak\'r', icon: '💼', desc: 'Iconic backpack with durable construction and comfortable design' },
            { name: 'Out of Office', icon: '👜', desc: 'Professional luggage with urban style and practical functionality' },
            { name: 'Transit', icon: '🎒', desc: 'Travel-focused collection with expandable design and organization' },
            { name: 'Urban', icon: '🧳', desc: 'City lifestyle gear with modern aesthetics and durability' }
        ],
        contact: {
            hotline: '+32-2-508-8000',
            address: '55 Avenue Ariane, 1200 Brussels, Belgium',
            email: 'info@eastpak.com',
            website: 'eastpak.com'
        }
    },
    {
        name: 'Hartmann',
        filename: 'hartmann.html',
        description: 'American luxury luggage since 1877, known for elegance and craftsmanship',
        founded: '1877',
        countries: '40+',
        serviceCenters: '150+',
        warranty: 'Lifetime',
        collections: [
            { name: 'Tweed', icon: '💼', desc: 'Classic tweed luggage with timeless elegance and superior craftsmanship' },
            { name: 'Wings', icon: '👜', desc: 'Lightweight collection with modern design and practical features' },
            { name: 'Heritage', icon: '🎒', desc: 'Traditional styling with contemporary functionality and durability' },
            { name: 'Executive', icon: '🧳', desc: 'Professional luggage with sophisticated design and business features' }
        ],
        contact: {
            hotline: '+1-800-323-4278',
            address: '575 West Street, Mansfield, MA 02048, USA',
            email: 'service@hartmann.com',
            website: 'hartmann.com'
        }
    },
    {
        name: 'Antler',
        filename: 'antler.html',
        description: 'British heritage brand with lightweight, stylish suitcases',
        founded: '1914',
        countries: '30+',
        serviceCenters: '100+',
        warranty: '10-year',
        collections: [
            { name: 'Clifton', icon: '💼', desc: 'Lightweight hardside luggage with British design and durability' },
            { name: 'Chelsea', icon: '👜', desc: 'Softside collection with expandable design and practical features' },
            { name: 'Mayfair', icon: '🎒', desc: 'Premium collection with sophisticated styling and quality materials' },
            { name: 'Kensington', icon: '🧳', desc: 'Classic British design with modern functionality and reliability' }
        ],
        contact: {
            hotline: '+44-20-8953-3443',
            address: '1 Brooklands, London NW11 9QS, UK',
            email: 'help@antler.co.uk',
            website: 'antler.co.uk'
        }
    },
    {
        name: 'Carlton',
        filename: 'carlton.html',
        description: 'Global luggage brand with a focus on innovation and value',
        founded: '1978',
        countries: '90+',
        serviceCenters: '500+',
        warranty: '5-year',
        collections: [
            { name: 'Lite', icon: '💼', desc: 'Ultra-lightweight luggage with innovative design and affordability' },
            { name: 'Premium', icon: '👜', desc: 'High-quality collection with modern features and value pricing' },
            { name: 'Travel', icon: '🎒', desc: 'Travel-focused gear with practical design and durability' },
            { name: 'Business', icon: '🧳', desc: 'Professional luggage with business-friendly features and style' }
        ],
        contact: {
            hotline: '+91-22-6789-8888',
            address: '87 Maker Chambers III, Mumbai, India',
            email: 'care@carltontravelgoods.com',
            website: 'carltontravelgoods.com'
        }
    },
    {
        name: 'Lipault',
        filename: 'lipault.html',
        description: 'Parisian chic luggage with vibrant colors and soft materials',
        founded: '2004',
        countries: '25+',
        serviceCenters: '80+',
        warranty: '2-year',
        collections: [
            { name: 'Paris', icon: '💼', desc: 'Parisian-inspired luggage with vibrant colors and feminine design' },
            { name: 'Plume', icon: '👜', desc: 'Ultra-lightweight collection with soft materials and elegant styling' },
            { name: 'Weekender', icon: '🎒', desc: 'Weekend travel gear with practical design and chic aesthetics' },
            { name: 'Accessories', icon: '🧳', desc: 'Travel accessories with Parisian flair and functionality' }
        ],
        contact: {
            hotline: '+33-1-2345-6789',
            address: '21 Rue du Faubourg Saint-Antoine, 75011 Paris, France',
            email: 'contact@lipault.com',
            website: 'lipault.com'
        }
    },
    {
        name: 'Paravel',
        filename: 'paravel.html',
        description: 'Sustainable travel goods with eco-friendly materials',
        founded: '2016',
        countries: '15+',
        serviceCenters: '50+',
        warranty: '3-year',
        collections: [
            { name: 'Aviator', icon: '💼', desc: 'Sustainable hardside luggage with recycled materials and modern design' },
            { name: 'Cabana', icon: '👜', desc: 'Eco-friendly softside collection with water-resistant materials' },
            { name: 'Weekender', icon: '🎒', desc: 'Sustainable weekend bags with recycled fabrics and practical design' },
            { name: 'Accessories', icon: '🧳', desc: 'Eco-conscious travel accessories with sustainable materials' }
        ],
        contact: {
            hotline: '+1-888-726-0001',
            address: '401 Broadway, New York, NY 10013, USA',
            email: 'hello@tourparavel.com',
            website: 'tourparavel.com'
        }
    },
    {
        name: 'Globe-Trotter',
        filename: 'globe-trotter.html',
        description: 'Handcrafted luxury suitcases made in England since 1897',
        founded: '1897',
        countries: '20+',
        serviceCenters: '30+',
        warranty: 'Lifetime',
        collections: [
            { name: 'Centenary', icon: '💼', desc: 'Handcrafted luxury luggage with traditional English craftsmanship' },
            { name: 'Safari', icon: '👜', desc: 'Heritage collection with vintage styling and premium materials' },
            { name: 'Original', icon: '🎒', desc: 'Classic English design with modern functionality and durability' },
            { name: 'Limited Edition', icon: '🧳', desc: 'Exclusive collections with unique designs and premium finishes' }
        ],
        contact: {
            hotline: '+44-20-7409-6900',
            address: '35 Albemarle St, London W1S 4JD, UK',
            email: 'info@globe-trotter.com',
            website: 'globe-trotter.com'
        }
    },
    {
        name: 'Osprey',
        filename: 'osprey.html',
        description: 'Performance travel packs and luggage for adventure travelers',
        founded: '1974',
        countries: '60+',
        serviceCenters: '200+',
        warranty: 'All Mighty Guarantee',
        collections: [
            { name: 'Farpoint', icon: '💼', desc: 'Travel backpacks with innovative design and adventure-ready features' },
            { name: 'Porter', icon: '👜', desc: 'Duffel bags with durable construction and practical functionality' },
            { name: 'Wheeled', icon: '🎒', desc: 'Wheeled luggage with backpack versatility and travel convenience' },
            { name: 'Daylite', icon: '🧳', desc: 'Day packs with lightweight design and organizational features' }
        ],
        contact: {
            hotline: '+1-866-284-7830',
            address: '115 Progress Circle, Cortez, CO 81321, USA',
            email: 'care@osprey.com',
            website: 'osprey.com'
        }
    },
    {
        name: 'Travelpro',
        filename: 'travelpro.html',
        description: 'Preferred by airline crews, known for durability and innovation',
        founded: '1987',
        countries: '80+',
        serviceCenters: '400+',
        warranty: 'Limited Lifetime',
        collections: [
            { name: 'Crew', icon: '💼', desc: 'Professional luggage designed by and for airline crew members' },
            { name: 'Maxlite', icon: '👜', desc: 'Ultra-lightweight collection with innovative design and durability' },
            { name: 'Platinum', icon: '🎒', desc: 'Premium collection with advanced features and executive styling' },
            { name: 'Walkabout', icon: '🧳', desc: 'Travel-focused gear with practical design and reliability' }
        ],
        contact: {
            hotline: '+1-800-741-7471',
            address: '700 Banyan Trail, Boca Raton, FL 33431, USA',
            email: 'support@travelpro.com',
            website: 'travelpro.com'
        }
    }
];

function generateHTML(brand) {
    const heroColor = brand.name === 'Tumi' ? 'linear-gradient(135deg,#1d1d1f,#424245)' : 'linear-gradient(135deg,#007aff,#5856d6)';
    const buttonColor = brand.name === 'Tumi' ? '#1d1d1f' : '#ff3b30';
    const buttonHover = brand.name === 'Tumi' ? '#424245' : '#d70015';
    const statColor = brand.name === 'Tumi' ? '#1d1d1f' : '#007aff';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brand.name} - Premium Luggage Solutions | RollingSuitcase</title>
    <meta name="description" content="Discover ${brand.name}'s premium luggage collection. Professional repair services and authorized service centers worldwide.">
    <meta name="keywords" content="${brand.name}, luggage, suitcase, repair, service, travel">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif; background: #f5f5f7; color: #1d1d1f; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: rgba(251,251,253,0.8); backdrop-filter: blur(20px); position: fixed; width: 100%; top: 0; z-index: 1000; border-bottom: 1px solid #d2d2d7; }
        nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
        .logo { font-size: 1.5rem; font-weight: 700; color: #1d1d1f; }
        .nav-links { display: flex; list-style: none; gap: 2rem; }
        .nav-links a { text-decoration: none; color: #1d1d1f; font-weight: 500; transition: color 0.3s; }
        .nav-links a:hover { color: #007aff; }
        .mobile-menu { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
        .hero { background: ${heroColor}; color: #fff; padding: 120px 0 80px; text-align: center; }
        .hero h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.2; }
        .hero p { font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9; }
        .brand-info { padding: 80px 0; background: #fff; }
        .brand-info h2 { text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 3rem; color: #1d1d1f; }
        .brand-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .brand-description { color: #6e6e73; line-height: 1.8; font-size: 1.1rem; }
        .brand-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 2rem; }
        .stat-item { text-align: center; padding: 1.5rem; background: #f5f5f7; border-radius: 12px; }
        .stat-number { font-size: 2rem; font-weight: 700; color: ${statColor}; }
        .stat-label { color: #6e6e73; margin-top: 0.5rem; }
        .products { padding: 80px 0; background: #f5f5f7; }
        .products h2 { text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 3rem; color: #1d1d1f; }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .product-card { background: #fff; padding: 2rem; border-radius: 16px; text-align: center; transition: transform 0.3s; }
        .product-card:hover { transform: translateY(-5px); }
        .product-icon { font-size: 3rem; margin-bottom: 1rem; }
        .product-card h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1d1d1f; }
        .product-card p { color: #6e6e73; line-height: 1.6; }
        .services { padding: 80px 0; background: #fff; }
        .services h2 { text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 3rem; color: #1d1d1f; }
        .service-details { background: #f5f5f7; padding: 3rem; border-radius: 16px; margin-bottom: 2rem; }
        .service-details h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1d1d1f; }
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .contact-item { background: #fff; padding: 1.5rem; border-radius: 12px; border: 1px solid #d2d2d7; }
        .contact-item h4 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1d1d1f; }
        .contact-item p { color: #6e6e73; }
        .cta-button { background: ${buttonColor}; color: #fff; padding: 1rem 2rem; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 1.1rem; transition: background 0.3s; display: inline-block; }
        .cta-button:hover { background: ${buttonHover}; }
        footer { background: #1d1d1f; color: #fff; padding: 60px 0 20px; }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap: 2rem; margin-bottom: 2rem; }
        .footer-section h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #fff; }
        .footer-section ul { list-style: none; }
        .footer-section ul li { margin-bottom: 0.5rem; }
        .footer-section ul li a { color: #a1a1a6; text-decoration: none; transition: color 0.3s; }
        .footer-section ul li a:hover { color: #007aff; }
        .footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid #424245; color: #a1a1a6; }
        @media (max-width: 768px) { .nav-links { display: none; } .mobile-menu { display: block; } .hero h1 { font-size: 2.5rem; } .brand-content { grid-template-columns: 1fr; gap: 2rem; } .brand-stats { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <div class="logo">RollingSuitcase</div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#features">Features</a></li>
                <li><a href="index.html#brands">Brands</a></li>
                <li><a href="index.html#how-it-works">How It Works</a></li>
                <li><a href="index.html#pricing">Pricing</a></li>
                <li><a href="index.html#testimonials">Reviews</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
            </ul>
            <button class="mobile-menu">☰</button>
        </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <h1>${brand.name}</h1>
            <p>${brand.description}</p>
            <a href="#services" class="cta-button">Get Repair Service</a>
        </div>
    </section>

    <!-- Brand Info -->
    <section class="brand-info">
        <div class="container">
            <h2>About ${brand.name}</h2>
            <div class="brand-content">
                <div>
                    <p class="brand-description">
                        Founded in ${brand.founded}, ${brand.name} has established itself as a leading name in the luggage industry, 
                        known for its commitment to quality, innovation, and customer satisfaction. With decades of experience 
                        in creating travel solutions, ${brand.name} continues to push the boundaries of design and functionality.
                    </p>
                    <p class="brand-description">
                        From their earliest designs to their latest innovations, ${brand.name} has maintained a focus on 
                        creating luggage that meets the diverse needs of modern travelers. Their commitment to quality 
                        craftsmanship and innovative design has made them a trusted choice for travelers worldwide.
                    </p>
                </div>
                <div class="brand-stats">
                    <div class="stat-item">
                        <div class="stat-number">${brand.founded}</div>
                        <div class="stat-label">Founded</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${brand.countries}</div>
                        <div class="stat-label">Countries Served</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${brand.serviceCenters}</div>
                        <div class="stat-label">Service Centers</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${brand.warranty}</div>
                        <div class="stat-label">Warranty</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Products -->
    <section class="products">
        <div class="container">
            <h2>Popular ${brand.name} Collections</h2>
            <div class="products-grid">
                ${brand.collections.map(collection => `
                <div class="product-card">
                    <div class="product-icon">${collection.icon}</div>
                    <h3>${collection.name}</h3>
                    <p>${collection.desc}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Services -->
    <section class="services" id="services">
        <div class="container">
            <h2>${brand.name} Repair Services</h2>
            <div class="service-details">
                <h3>Professional Repair Services</h3>
                <p>${brand.name} offers comprehensive repair services through their global network of authorized service centers. 
                Whether you need wheel replacement, handle repair, zipper fixes, or shell damage repair, our certified 
                technicians use genuine ${brand.name} parts to restore your luggage to its original condition.</p>
            </div>
            <div class="contact-grid">
                <div class="contact-item">
                    <h4>Repair Hotline</h4>
                    <p>${brand.contact.hotline}</p>
                </div>
                <div class="contact-item">
                    <h4>Headquarters</h4>
                    <p>${brand.contact.address}</p>
                </div>
                ${brand.contact.usService ? `
                <div class="contact-item">
                    <h4>US Service</h4>
                    <p>${brand.contact.usService}</p>
                </div>
                ` : ''}
                ${brand.contact.europeanService ? `
                <div class="contact-item">
                    <h4>European Service</h4>
                    <p>${brand.contact.europeanService}</p>
                </div>
                ` : ''}
                <div class="contact-item">
                    <h4>Email Support</h4>
                    <p>${brand.contact.email}</p>
                </div>
                <div class="contact-item">
                    <h4>Official Website</h4>
                    <p><a href="https://www.${brand.contact.website}" target="_blank">${brand.contact.website}</a></p>
                </div>
                <div class="contact-item">
                    <h4>Warranty Support</h4>
                    <p>${brand.warranty} warranty on most products</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>RollingSuitcase</h3>
                    <p>Your trusted partner for premium rolling suitcase solutions and professional repair services worldwide.</p>
                </div>
                <div class="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="index.html#brands">Brand Directory</a></li>
                        <li><a href="index.html#how-it-works">Repair Services</a></li>
                        <li><a href="index.html#pricing">Service Plans</a></li>
                        <li><a href="#">Warranty Support</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="index.html#faq">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 RollingSuitcase. All rights reserved. | Connecting travelers with premium luggage solutions worldwide.</p>
            </div>
        </div>
    </footer>

    <script>
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    </script>
</body>
</html>`;
}

// Generate all brand pages
brands.forEach(brand => {
    const html = generateHTML(brand);
    fs.writeFileSync(brand.filename, html);
    console.log(`Generated ${brand.filename}`);
});

console.log('All brand pages generated successfully!'); 