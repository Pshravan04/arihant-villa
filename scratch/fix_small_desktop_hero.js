const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Navbar gap fine-tuning for 1024px screens
const oldNavGap = `hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[14px] 2xl:text-[15px] font-semibold whitespace-nowrap`;
const newNavGap = `hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 text-[12px] xl:text-[14px] 2xl:text-[15px] font-semibold whitespace-nowrap`;

if (content.includes(oldNavGap)) {
    content = content.replace(oldNavGap, newNavGap);
    console.log('Updated navbar gap for small desktop');
}

// 2. Hero Section container: add min-height and overflow-hidden for desktop
const oldHeroSection = `<section id="hero" class="relative bg-white min-h-screen lg:h-screen w-full flex flex-col lg:block pt-[80px]">`;
const newHeroSection = `<section id="hero" class="relative bg-white min-h-screen lg:h-screen lg:min-h-[640px] xl:min-h-[720px] 2xl:min-h-[780px] w-full flex flex-col lg:block pt-[80px] overflow-hidden">`;

if (content.includes(oldHeroSection)) {
    content = content.replace(oldHeroSection, newHeroSection);
    console.log('Updated hero section container');
} else {
    console.log('Warning: oldHeroSection pattern not matched');
}

// 3. Project Info Card: responsive scaling, centering, and sizing
const oldCardBlock = `        <!-- Project Info Card (Restored clean position on hero) -->
        <div
            class="relative lg:absolute lg:bottom-5 xl:bottom-8 lg:left-8 xl:left-20 w-[95%] lg:w-[90%] max-w-sm lg:max-w-[380px] z-20 mx-auto mt-4 lg:mt-0">
            <!-- Separate Box Above Main Card -->
            <div
                class="bg-[#B49D55] text-white py-2.5 px-3 mb-2.5 rounded-[2px] shadow-2xl text-center font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-white/20">
                Nearest and Biggest Premium Villa Community to Mumbai
            </div>

            <div
                class="premium-card p-4 lg:p-5 rounded-[2px] shadow-2xl space-y-2.5 text-center backdrop-blur-3xl bg-white border border-[#B49D55]/20">
                <div class="space-y-0.5">
                    <h1
                        class="text-2xl md:text-[1.75rem] font-bold text-[#B49D55] tracking-tighter leading-none mt-1 mb-1">
                        World Villas
                    </h1>
                    <div class="flex flex-col gap-0">
                        <p class="text-sm font-bold text-gray-800">by Superstructure</p>
                        <p class="text-sm font-medium text-black tracking-widest uppercase mt-0.5">At Chowk Mumbai 3.O
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-1.5 mt-2">
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] p-2 transform hover:scale-[1.02] transition-transform">
                        <p
                            class="text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-2">
                            <span class="text-[#B49D55]">◆</span> 90 Acre Of Premium Villa Living
                        </p>
                    </div>
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] p-2 transform hover:scale-[1.02] transition-transform">
                        <p
                            class="text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-2">
                            <span class="text-[#B49D55]">◆</span> 5 Star Hotel With 227 Keys
                        </p>
                    </div>

                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] p-2 transform hover:scale-[1.02] transition-transform flex items-center">
                        <p
                            class="text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-2 w-full text-center">
                            <span class="text-[#B49D55] shrink-0">◆</span> Mumbai Biggest GYM Khana
                        </p>
                    </div>
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] p-2 transform hover:scale-[1.02] transition-transform flex items-center">
                        <p
                            class="text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-2 w-full text-center">
                            <span class="text-[#B49D55] shrink-0">◆</span> Premium Retail Outlet
                        </p>
                    </div>
                </div>

                <div class="space-y-1 pt-1">
                    <div class="leading-snug">
                        <span class="block text-[15px] sm:text-base font-bold text-black uppercase tracking-wider">
                            4 & 6 BHK Villas
                        </span>
                        <span
                            class="block text-[11px] sm:text-xs font-medium text-gray-600 uppercase tracking-widest mt-0.5">
                            Price Starts At
                        </span>
                    </div>
                    <div class="flex items-baseline justify-center gap-2">
                        <span class="text-[#B49D55] text-xl font-bold">₹</span>
                        <span class="text-3xl font-bold text-[#B49D55]">5 Cr</span>
                        <span class="text-gray-900 font-medium text-[9px] uppercase">Onwards</span>
                    </div>
                </div>

                <button onclick="openPopup('Download Brochure')"
                    class="w-full animated-gradient-button text-white font-bold py-3 rounded-[2px] shadow-xl transition-all duration-500 uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02]">
                    Download Brochure
                </button>
            </div>
        </div>`;

const newCardBlock = `        <!-- Project Info Card (Responsive scaling & vertical centering on desktop) -->
        <div
            class="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-6 xl:left-12 2xl:left-20 w-[95%] lg:w-[90%] max-w-sm lg:max-w-[315px] xl:max-w-[350px] 2xl:max-w-[380px] z-20 mx-auto mt-4 lg:mt-0">
            <!-- Separate Box Above Main Card -->
            <div
                class="bg-[#B49D55] text-white py-1.5 xl:py-2.5 px-2.5 xl:px-3 mb-1.5 xl:mb-2.5 rounded-[2px] shadow-2xl text-center font-bold text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-wider border border-white/20">
                Nearest and Biggest Premium Villa Community to Mumbai
            </div>

            <div
                class="premium-card p-3 lg:p-3.5 xl:p-4 2xl:p-5 rounded-[2px] shadow-2xl space-y-1.5 xl:space-y-2 2xl:space-y-2.5 text-center backdrop-blur-3xl bg-white border border-[#B49D55]/20">
                <div class="space-y-0.5">
                    <h1
                        class="text-xl xl:text-2xl 2xl:text-[1.75rem] font-bold text-[#B49D55] tracking-tighter leading-none mt-0.5 mb-0.5 xl:mt-1 xl:mb-1">
                        World Villas
                    </h1>
                    <div class="flex flex-col gap-0">
                        <p class="text-xs xl:text-sm font-bold text-gray-800">by Superstructure</p>
                        <p class="text-[10px] xl:text-xs 2xl:text-sm font-medium text-black tracking-widest uppercase mt-0.5">At Chowk Mumbai 3.O
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-1 xl:gap-1.5 mt-1 xl:mt-2">
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] py-1 px-2 xl:p-2 transform hover:scale-[1.02] transition-transform">
                        <p
                            class="text-[10px] xl:text-[11px] 2xl:text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-1.5 xl:gap-2">
                            <span class="text-[#B49D55]">◆</span> 90 Acre Of Premium Villa Living
                        </p>
                    </div>
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] py-1 px-2 xl:p-2 transform hover:scale-[1.02] transition-transform">
                        <p
                            class="text-[10px] xl:text-[11px] 2xl:text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-1.5 xl:gap-2">
                            <span class="text-[#B49D55]">◆</span> 5 Star Hotel With 227 Keys
                        </p>
                    </div>

                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] py-1 px-2 xl:p-2 transform hover:scale-[1.02] transition-transform flex items-center">
                        <p
                            class="text-[10px] xl:text-[11px] 2xl:text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-1.5 xl:gap-2 w-full text-center">
                            <span class="text-[#B49D55] shrink-0">◆</span> Mumbai Biggest GYM Khana
                        </p>
                    </div>
                    <div
                        class="bg-[#B49D55] shadow-md rounded-[2px] py-1 px-2 xl:p-2 transform hover:scale-[1.02] transition-transform flex items-center">
                        <p
                            class="text-[10px] xl:text-[11px] 2xl:text-[12px] font-normal text-white leading-tight flex items-center justify-center gap-1.5 xl:gap-2 w-full text-center">
                            <span class="text-[#B49D55] shrink-0">◆</span> Premium Retail Outlet
                        </p>
                    </div>
                </div>

                <div class="space-y-0.5 xl:space-y-1 pt-0.5 xl:pt-1">
                    <div class="leading-snug">
                        <span class="block text-xs xl:text-sm 2xl:text-base font-bold text-black uppercase tracking-wider">
                            4 & 6 BHK Villas
                        </span>
                        <span
                            class="block text-[9px] xl:text-[10px] 2xl:text-xs font-medium text-gray-600 uppercase tracking-widest mt-0.5">
                            Price Starts At
                        </span>
                    </div>
                    <div class="flex items-baseline justify-center gap-1.5 xl:gap-2">
                        <span class="text-[#B49D55] text-lg xl:text-xl font-bold">₹</span>
                        <span class="text-2xl xl:text-3xl font-bold text-[#B49D55]">5 Cr</span>
                        <span class="text-gray-900 font-medium text-[8px] xl:text-[9px] uppercase">Onwards</span>
                    </div>
                </div>

                <button onclick="openPopup('Download Brochure')"
                    class="w-full animated-gradient-button text-white font-bold py-2 xl:py-2.5 2xl:py-3 rounded-[2px] shadow-xl transition-all duration-500 uppercase tracking-[0.2em] text-[9px] xl:text-[10px] hover:scale-[1.02]">
                    Download Brochure
                </button>
            </div>
        </div>`;

// Check line endings and replace
const oldCardCRLF = oldCardBlock.replace(/\r?\n/g, '\r\n');
const oldCardLF = oldCardBlock.replace(/\r?\n/g, '\n');

if (content.includes(oldCardCRLF)) {
    content = content.replace(oldCardCRLF, newCardBlock.replace(/\r?\n/g, '\r\n'));
    console.log('Replaced card block (CRLF)');
} else if (content.includes(oldCardLF)) {
    content = content.replace(oldCardLF, newCardBlock.replace(/\r?\n/g, '\n'));
    console.log('Replaced card block (LF)');
} else {
    console.error('oldCardBlock not found!');
    process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated index.html for small desktop screens!');

