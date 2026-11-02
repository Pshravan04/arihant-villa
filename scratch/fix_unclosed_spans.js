const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
    '<span class="text-[#B49D55] font-bold text-lg">₹5 Cr++ <span',
    '<span class="text-[#B49D55] font-bold text-lg">₹5 Cr++</span>'
);

content = content.replace(
    '<span class="text-[#B49D55] font-bold text-lg">₹6 Cr++ <span',
    '<span class="text-[#B49D55] font-bold text-lg">₹6 Cr++</span>'
);

content = content.replace(
    '<span class="text-[#B49D55] font-bold text-lg">₹7 Cr++ <span',
    '<span class="text-[#B49D55] font-bold text-lg">₹7 Cr++</span>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully fixed unclosed span tags in index.html!');

