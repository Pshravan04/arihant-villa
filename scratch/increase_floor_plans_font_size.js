const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const fpStart = '    <!-- Floor Plans Section -->';
const pStart = '    <!-- Pricing & Configurations Section -->';

const startIndex = content.indexOf(fpStart);
const endIndex = content.indexOf(pStart);

if (startIndex === -1 || endIndex === -1) {
    console.error('Delimiters not found!');
    process.exit(1);
}

const oldSection = content.slice(startIndex, endIndex);

let updatedSection = oldSection;

// Replace Card 1
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/80 text-xs mb-4">Extra Large A (2400 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Extra Large A Plan')"\r\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\r\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\r\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Extra Large A (2400 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Extra Large A Plan')"\r\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\r\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\r\n                                </button>`
);

// Fallback LF
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\n                                <p class="text-white/80 text-xs mb-4">Extra Large A (2400 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Extra Large A Plan')"\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Extra Large A (2400 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Extra Large A Plan')"\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\n                                </button>`
);

// Replace Card 2
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/80 text-xs mb-4">Super Large A (3150 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Super Large A Plan')"\r\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\r\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\r\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Super Large A (3150 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Super Large A Plan')"\r\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\r\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\r\n                                </button>`
);

// Fallback LF
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\n                                <p class="text-white/80 text-xs mb-4">Super Large A (3150 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Super Large A Plan')"\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Super Large A (3150 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Super Large A Plan')"\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\n                                </button>`
);

// Replace Card 3 (River Front)
updatedSection = updatedSection.replace(
    `<span\r\n                                    class="bg-[#B49D55] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] mb-2 shadow-sm">River\r\n                                    Front</span>\r\n                                <h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/80 text-xs mb-4">Super Large B (3150 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Super Large B River Front Plan')"\r\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\r\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\r\n                                </button>`,
    `<span\r\n                                    class="bg-[#B49D55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[2px] mb-2.5 shadow-md">River\r\n                                    Front</span>\r\n                                <h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\r\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Super Large B (3150 Sq.Ft.)</p>\r\n                                <button onclick="openPopup('View 4 BHK Super Large B River Front Plan')"\r\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\r\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\r\n                                </button>`
);

// Fallback LF
updatedSection = updatedSection.replace(
    `<span\n                                    class="bg-[#B49D55] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] mb-2 shadow-sm">River\n                                    Front</span>\n                                <h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>\n                                <p class="text-white/80 text-xs mb-4">Super Large B (3150 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Super Large B River Front Plan')"\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\n                                </button>`,
    `<span\n                                    class="bg-[#B49D55] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[2px] mb-2.5 shadow-md">River\n                                    Front</span>\n                                <h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">4 BHK Villa Plan</h4>\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Super Large B (3150 Sq.Ft.)</p>\n                                <button onclick="openPopup('View 4 BHK Super Large B River Front Plan')"\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\n                                </button>`
);

// Replace Card 4 (6 BHK)
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">6 BHK Villa Plan</h4>\r\n                                <p class="text-white/80 text-xs mb-4">Extra Large B (Palatial)</p>\r\n                                <button onclick="openPopup('View 6 BHK Extra Large B Plan')"\r\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\r\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\r\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">6 BHK Villa Plan</h4>\r\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Extra Large B (Palatial)</p>\r\n                                <button onclick="openPopup('View 6 BHK Extra Large B Plan')"\r\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\r\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\r\n                                </button>`
);

// Fallback LF
updatedSection = updatedSection.replace(
    `<h4 class="text-white font-bold text-base mb-1">6 BHK Villa Plan</h4>\n                                <p class="text-white/80 text-xs mb-4">Extra Large B (Palatial)</p>\n                                <button onclick="openPopup('View 6 BHK Extra Large B Plan')"\n                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">\n                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan\n                                </button>`,
    `<h4 class="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-tight">6 BHK Villa Plan</h4>\n                                <p class="text-white/95 text-xs sm:text-sm lg:text-[15px] font-medium mb-5">Extra Large B (Palatial)</p>\n                                <button onclick="openPopup('View 6 BHK Extra Large B Plan')"\n                                    class="px-6 py-3 bg-white text-[#B49D55] text-xs sm:text-[13px] font-bold rounded-[2px] uppercase tracking-wider hover:bg-[#B49D55] hover:text-white transition-all shadow-xl flex items-center gap-2">\n                                    <i data-lucide="lock" class="w-4 h-4"></i> Unlock Plan\n                                </button>`
);

content = content.slice(0, startIndex) + updatedSection + content.slice(endIndex);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated font sizes in floor plans section!');

