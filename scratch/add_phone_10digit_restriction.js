const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Mobile Quick Form phone input
const mobileOld = `<input type="tel" name="phone" placeholder="Phone Number" required\r\n                        class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] p-4 text-sm focus:outline-none shadow-sm">`;
const mobileOldLF = `<input type="tel" name="phone" placeholder="Phone Number" required\n                        class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] p-4 text-sm focus:outline-none shadow-sm">`;

const mobileNew = `<input type="tel" name="phone" placeholder="Phone Number (10 Digits)" required\r\n                        pattern="[0-9]{10}" maxlength="10" minlength="10" inputmode="numeric"\r\n                        oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);"\r\n                        title="Please enter a valid 10-digit mobile number"\r\n                        class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] p-4 text-sm focus:outline-none shadow-sm">`;

if (content.includes(mobileOld)) {
    content = content.replace(mobileOld, mobileNew);
    console.log('Updated mobile form phone input (CRLF)');
} else if (content.includes(mobileOldLF)) {
    content = content.replace(mobileOldLF, mobileNew.replace(/\r\n/g, '\n'));
    console.log('Updated mobile form phone input (LF)');
} else {
    console.error('Mobile phone input pattern not found');
}

// 2. Desktop Lead Form Banner phone input
const desktopOld = `<input type="tel" name="phone" placeholder="Phone Number" required\r\n                            class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm transition-all border border-transparent">`;
const desktopOldLF = `<input type="tel" name="phone" placeholder="Phone Number" required\n                            class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm transition-all border border-transparent">`;

const desktopNew = `<input type="tel" name="phone" placeholder="Phone Number (10 Digits)" required\r\n                            pattern="[0-9]{10}" maxlength="10" minlength="10" inputmode="numeric"\r\n                            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);"\r\n                            title="Please enter a valid 10-digit mobile number"\r\n                            class="w-full bg-white text-gray-900 placeholder-gray-500 rounded-[2px] px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 shadow-sm transition-all border border-transparent">`;

if (content.includes(desktopOld)) {
    content = content.replace(desktopOld, desktopNew);
    console.log('Updated desktop banner phone input (CRLF)');
} else if (content.includes(desktopOldLF)) {
    content = content.replace(desktopOldLF, desktopNew.replace(/\r\n/g, '\n'));
    console.log('Updated desktop banner phone input (LF)');
} else {
    console.error('Desktop phone input pattern not found');
}

// 3. Popup modal phone input
const popupOld = `<input type="text" name="phone" placeholder="Mobile*" required class="w-full outline-none py-2">`;
const popupNew = `<input type="tel" name="phone" placeholder="Mobile (10 Digits)*" required pattern="[0-9]{10}" maxlength="10" minlength="10" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);" title="Please enter a valid 10-digit mobile number" class="w-full outline-none py-2">`;

if (content.includes(popupOld)) {
    content = content.replace(popupOld, popupNew);
    console.log('Updated popup modal phone input');
} else {
    console.error('Popup phone input pattern not found');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added 10-digit restrictions to all phone inputs in index.html!');

