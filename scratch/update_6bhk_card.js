const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const targetOld = `                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Details</span>
                                <span class="font-bold text-[#B49D55]">Information On Request</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-base">Price On Request</span>
                            </div>
                        </div>`;

const targetNew = `                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Plot Size</span>
                                <span class="font-bold text-[#B49D55]">On Request</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Useable Area</span>
                                <span class="font-bold text-[#B49D55]">On Request</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-lg">On Request</span>
                            </div>
                        </div>`;

const targetOldCRLF = targetOld.replace(/\r?\n/g, '\r\n');
const targetOldLF = targetOld.replace(/\r?\n/g, '\n');

if (content.includes(targetOldCRLF)) {
    content = content.replace(targetOldCRLF, targetNew.replace(/\r?\n/g, '\r\n'));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated 6BHK card (CRLF)!');
} else if (content.includes(targetOldLF)) {
    content = content.replace(targetOldLF, targetNew.replace(/\r?\n/g, '\n'));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated 6BHK card (LF)!');
} else {
    console.error('Target 6BHK block not found!');
    process.exit(1);
}

