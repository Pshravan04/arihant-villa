const fs = require('fs');

// 1. index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
const indexOld = `<p class="text-gray-500 text-[10px] uppercase tracking-widest">© 2026 World Villas. Marketed by Rudra\r\n                    Realty - Manas Parwani (MahaRERA: A51700035221).</p>`;
const indexOldLF = `<p class="text-gray-500 text-[10px] uppercase tracking-widest">© 2026 World Villas. Marketed by Rudra\n                    Realty - Manas Parwani (MahaRERA: A51700035221).</p>`;
const indexNew = `<p class="text-gray-500 text-[10px] uppercase tracking-widest">© 2026 World Villas. Marketed by Mira Enterprises (MahaRERA: A51700035221).</p>`;

if (indexContent.includes(indexOld)) {
    indexContent = indexContent.replace(indexOld, indexNew);
    fs.writeFileSync('index.html', indexContent, 'utf8');
    console.log('Updated index.html (CRLF)');
} else if (indexContent.includes(indexOldLF)) {
    indexContent = indexContent.replace(indexOldLF, indexNew);
    fs.writeFileSync('index.html', indexContent, 'utf8');
    console.log('Updated index.html (LF)');
} else {
    // Regex fallback
    const regex = /© 2026 World Villas\. Marketed by Rudra\s+Realty - Manas Parwani/g;
    if (regex.test(indexContent)) {
        indexContent = indexContent.replace(regex, '© 2026 World Villas. Marketed by Mira Enterprises');
        fs.writeFileSync('index.html', indexContent, 'utf8');
        console.log('Updated index.html (Regex)');
    } else {
        console.log('Warning: index.html pattern not matched');
    }
}

// 2. privacy.html
let privacyContent = fs.readFileSync('privacy.html', 'utf8');
privacyContent = privacyContent.replace(
    '<title>Privacy Policy -  World Villas | Rudra Realty</title>',
    '<title>Privacy Policy -  World Villas | Mira Enterprises</title>'
);
privacyContent = privacyContent.replace(
    /<strong class="text-gray-900">Rudra Realty - Manas\s+Parwani<\/strong>/g,
    '<strong class="text-gray-900">Mira Enterprises</strong>'
);
fs.writeFileSync('privacy.html', privacyContent, 'utf8');
console.log('Updated privacy.html');

// 3. terms.html
let termsContent = fs.readFileSync('terms.html', 'utf8');
termsContent = termsContent.replace(
    '<title>Terms & Conditions -  World Villas | Rudra Realty</title>',
    '<title>Terms & Conditions -  World Villas | Mira Enterprises</title>'
);
termsContent = termsContent.replace(
    /<strong class="text-gray-900">Rudra\s+Realty - Manas Parwani<\/strong>/g,
    '<strong class="text-gray-900">Mira Enterprises</strong>'
);
termsContent = termsContent.replace(
    /<strong class="text-gray-900">Rudra Realty - Manas\s+Parwani<\/strong>/g,
    '<strong class="text-gray-900">Mira Enterprises</strong>'
);
fs.writeFileSync('terms.html', termsContent, 'utf8');
console.log('Updated terms.html');

