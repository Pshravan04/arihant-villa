const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const targetOld = `                <div class="space-y-1 pt-1">
                    <div class="leading-snug">
                        <span class="block text-xs text-gray-700 font-normal uppercase tracking-wider">
                            4 & 6 BHK Villas
                        </span>
                        <span
                            class="block text-[15px] sm:text-base font-medium text-black uppercase tracking-wide mt-0.5">
                            Price Starts At
                        </span>
                    </div>
                    <div class="flex items-baseline justify-center gap-2">
                        <span class="text-[#B49D55] text-xl font-bold">₹</span>
                        <span class="text-3xl font-bold text-[#B49D55]">5 Cr</span>
                        <span class="text-gray-900 font-medium text-[9px] uppercase">Onwards</span>
                    </div>
                </div>`;

const targetNew = `                <div class="space-y-1 pt-1">
                    <div class="leading-snug">
                        <span class="block text-[15px] sm:text-base font-bold text-black uppercase tracking-wider">
                            4 & 6 BHK Villas
                        </span>
                        <span class="block text-[11px] sm:text-xs font-medium text-gray-600 uppercase tracking-widest mt-0.5">
                            Price Starts At
                        </span>
                    </div>
                    <div class="flex items-baseline justify-center gap-2">
                        <span class="text-[#B49D55] text-xl font-bold">₹</span>
                        <span class="text-3xl font-bold text-[#B49D55]">5 Cr</span>
                        <span class="text-gray-900 font-medium text-[9px] uppercase">Onwards</span>
                    </div>
                </div>`;

// Normalize line endings for replacement
const targetOldLF = targetOld.replace(/\r\n/g, '\n');
const targetOldCRLF = targetOld.replace(/\r?\n/g, '\r\n');

if (content.includes(targetOldCRLF)) {
    content = content.replace(targetOldCRLF, targetNew.replace(/\r?\n/g, '\r\n'));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated font sizes (CRLF)!');
} else if (content.includes(targetOldLF)) {
    content = content.replace(targetOldLF, targetNew.replace(/\r\n/g, '\n'));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated font sizes (LF)!');
} else {
    console.error('Target block not found!');
    process.exit(1);
}

