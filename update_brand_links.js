const fs = require('fs');

const brandUpdates = [
    { name: 'Delsey', filename: 'delsey.html' },
    { name: 'Rimowa', filename: 'rimowa.html' },
    { name: 'American Tourister', filename: 'american-tourister.html' },
    { name: 'Victorinox', filename: 'victorinox.html' },
    { name: 'Briggs & Riley', filename: 'briggs-riley.html' },
    { name: 'Eastpak', filename: 'eastpak.html' },
    { name: 'Hartmann', filename: 'hartmann.html' },
    { name: 'Antler', filename: 'antler.html' },
    { name: 'Carlton', filename: 'carlton.html' },
    { name: 'Lipault', filename: 'lipault.html' },
    { name: 'Paravel', filename: 'paravel.html' },
    { name: 'Globe-Trotter', filename: 'globe-trotter.html' },
    { name: 'Osprey', filename: 'osprey.html' },
    { name: 'Travelpro', filename: 'travelpro.html' }
];

// Read the current index.html file
let content = fs.readFileSync('index.html', 'utf8');

// Update each brand card
brandUpdates.forEach(brand => {
    // Find the brand card and update the h3 title to be a link
    const titlePattern = new RegExp(`<h3>${brand.name}</h3>`, 'g');
    const titleReplacement = `<h3><a href="${brand.filename}" style="text-decoration: none; color: inherit;">${brand.name}</a></h3>`;
    content = content.replace(titlePattern, titleReplacement);
    
    // Add brand page link to the contact info
    const contactPattern = new RegExp(`<p><strong>Website:</strong> <a href="https://www\\.([^"]+)" target="_blank">[^<]+</a></p>`, 'g');
    const contactReplacement = `<p><strong>Website:</strong> <a href="https://www.$1" target="_blank">$1</a></p>
                            <p><strong>Brand Page:</strong> <a href="${brand.filename}">View Full Details</a></p>`;
    content = content.replace(contactPattern, contactReplacement);
});

// Write the updated content back to index.html
fs.writeFileSync('index.html', content);

console.log('All brand links updated successfully!'); 