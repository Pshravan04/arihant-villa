const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Swap in Desktop Navbar
const desktopOldNav = `<a href="#pricing" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Price & Configurations</a>\r\n                    <a href="#floor-plans" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Floor Plans</a>`;
const desktopOldNavLF = `<a href="#pricing" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Price & Configurations</a>\n                    <a href="#floor-plans" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Floor Plans</a>`;

const desktopNewNav = `<a href="#floor-plans" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Floor Plans</a>\r\n                    <a href="#pricing" class="text-black hover:text-[#B49D55] transition-colors whitespace-nowrap">Price & Configurations</a>`;

if (content.includes(desktopOldNav)) {
    content = content.replace(desktopOldNav, desktopNewNav);
    console.log('Desktop navbar updated (CRLF)');
} else if (content.includes(desktopOldNavLF)) {
    content = content.replace(desktopOldNavLF, desktopNewNav.replace(/\r\n/g, '\n'));
    console.log('Desktop navbar updated (LF)');
} else {
    console.log('Warning: desktop navbar pattern not matched directly, checking regex...');
}

// 2. Swap in Mobile Navbar
const mobileOldNav = `<a href="#pricing" class="block text-black hover:text-[#B49D55] py-2 font-medium">Price &\r\n                    Configurations</a>\r\n                <a href="#floor-plans" class="block text-black hover:text-[#B49D55] py-2 font-medium">Floor Plans</a>`;
const mobileOldNavLF = `<a href="#pricing" class="block text-black hover:text-[#B49D55] py-2 font-medium">Price &\n                    Configurations</a>\n                <a href="#floor-plans" class="block text-black hover:text-[#B49D55] py-2 font-medium">Floor Plans</a>`;

const mobileNewNav = `<a href="#floor-plans" class="block text-black hover:text-[#B49D55] py-2 font-medium">Floor Plans</a>\r\n                <a href="#pricing" class="block text-black hover:text-[#B49D55] py-2 font-medium">Price &\r\n                    Configurations</a>`;

if (content.includes(mobileOldNav)) {
    content = content.replace(mobileOldNav, mobileNewNav);
    console.log('Mobile navbar updated (CRLF)');
} else if (content.includes(mobileOldNavLF)) {
    content = content.replace(mobileOldNavLF, mobileNewNav.replace(/\r\n/g, '\n'));
    console.log('Mobile navbar updated (LF)');
} else {
    console.log('Warning: mobile navbar pattern not matched directly, checking regex...');
}

// 3. Swap the sections: Floor Plans before Pricing
const pStartStr = '    <!-- Pricing & Configurations Section -->';
const fpStartStr = '    <!-- Floor Plans Section -->';
const aStartStr = '    <!-- Amenities Section -->';

const pIndex = content.indexOf(pStartStr);
const fpIndex = content.indexOf(fpStartStr);
const aIndex = content.indexOf(aStartStr);

if (pIndex === -1 || fpIndex === -1 || aIndex === -1) {
    console.error('Section delimiters not found! pIndex:', pIndex, 'fpIndex:', fpIndex, 'aIndex:', aIndex);
    process.exit(1);
}

if (pIndex > fpIndex) {
    console.log('Floor plans is already before pricing!');
    process.exit(0);
}

const pricingSection = content.slice(pIndex, fpIndex);
const floorPlansSection = content.slice(fpIndex, aIndex);

const newContent = content.slice(0, pIndex) + floorPlansSection + pricingSection + content.slice(aIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully swapped Floor Plans before Pricing & Configurations!');

