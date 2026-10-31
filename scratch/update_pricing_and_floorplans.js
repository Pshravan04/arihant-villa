const fs = require('fs');

const filePath = 'index.html';
const content = fs.readFileSync(filePath, 'utf8');

const targetStart = '    <!-- Pricing & Configurations Section -->';
const targetEnd = '    <!-- Amenities Section -->';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex === -1 || endIndex === -1) {
    console.error('Target delimiters not found!');
    process.exit(1);
}

const replacement = `    <!-- Pricing & Configurations Section -->
    <section id="pricing" class="py-10 lg:py-14 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-6 lg:mb-10 reveal">
                <span class="text-[#B49D55] font-bold uppercase tracking-widest text-xs">Investment Summary</span>
                <h2 class="font-heading text-[36px] font-bold mt-2 mb-4">Pricing & Configuration</h2>
                <p class="text-gray-600 text-sm max-w-xl mx-auto">Ultra-spacious Delhi Kothi style luxury villas designed for generations at Chowk Mumbai 3.0.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <!-- 4 BHK (Extra Large A) -->
                <div
                    class="bg-white border border-[#B49D55]/30 rounded-[2px] p-6 lg:p-7 space-y-5 hover:shadow-2xl hover:border-[#B49D55] transition-all reveal flex flex-col justify-between">
                    <div>
                        <div class="border-b border-[#B49D55]/15 pb-3">
                            <h3 class="text-xl font-bold text-[#B49D55]">4 BHK Villa</h3>
                            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">( Extra Large A )</p>
                        </div>
                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Plot Size</span>
                                <span class="font-bold text-gray-900">2400 Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Useable Area</span>
                                <span class="font-bold text-[#B49D55]">5000+ Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-lg">₹5 Cr* <span class="text-[10px] text-gray-600 font-normal">Onwards</span></span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openPopup('Get 4 BHK (Extra Large A) Cost Sheet')"
                        class="w-full py-3.5 bg-[#B49D55] text-white font-bold rounded-[2px] hover:bg-[#9e8742] transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase shadow-md hover:shadow-lg mt-4">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Cost Sheet
                    </button>
                </div>

                <!-- 4 BHK (Super Large A) -->
                <div
                    class="bg-white border border-[#B49D55]/30 rounded-[2px] p-6 lg:p-7 space-y-5 hover:shadow-2xl hover:border-[#B49D55] transition-all reveal flex flex-col justify-between">
                    <div>
                        <div class="border-b border-[#B49D55]/15 pb-3">
                            <h3 class="text-xl font-bold text-[#B49D55]">4 BHK Villa</h3>
                            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">( Super Large A )</p>
                        </div>
                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Plot Size</span>
                                <span class="font-bold text-gray-900">3150 Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Useable Area</span>
                                <span class="font-bold text-[#B49D55]">6000+ Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-lg">₹6 Cr*++ <span class="text-[10px] text-gray-600 font-normal">Onwards</span></span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openPopup('Get 4 BHK (Super Large A) Cost Sheet')"
                        class="w-full py-3.5 bg-[#B49D55] text-white font-bold rounded-[2px] hover:bg-[#9e8742] transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase shadow-md hover:shadow-lg mt-4">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Cost Sheet
                    </button>
                </div>

                <!-- 4 BHK (Super Large B) River Front -->
                <div
                    class="bg-white border-2 border-[#B49D55] rounded-[2px] p-6 lg:p-7 space-y-5 shadow-lg hover:shadow-2xl transition-all reveal flex flex-col justify-between relative">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B49D55] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-[2px] shadow-sm">
                        River Front
                    </div>
                    <div>
                        <div class="border-b border-[#B49D55]/15 pb-3">
                            <h3 class="text-xl font-bold text-[#B49D55]">4 BHK Villa</h3>
                            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">( Super Large B )</p>
                        </div>
                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Plot Size</span>
                                <span class="font-bold text-gray-900">3150 Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Useable Area</span>
                                <span class="font-bold text-[#B49D55]">6000+ Sq.Ft.</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-lg">₹7 Cr* <span class="text-[10px] text-gray-600 font-normal">Onwards</span></span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openPopup('Get 4 BHK (Super Large B River Front) Cost Sheet')"
                        class="w-full py-3.5 bg-[#B49D55] text-white font-bold rounded-[2px] hover:bg-[#9e8742] transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase shadow-md hover:shadow-lg mt-4">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Cost Sheet
                    </button>
                </div>

                <!-- 6 BHK (Extra Large B) -->
                <div
                    class="bg-white border border-[#B49D55]/30 rounded-[2px] p-6 lg:p-7 space-y-5 hover:shadow-2xl hover:border-[#B49D55] transition-all reveal flex flex-col justify-between">
                    <div>
                        <div class="border-b border-[#B49D55]/15 pb-3">
                            <h3 class="text-xl font-bold text-[#B49D55]">6 BHK Villa</h3>
                            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">( Extra Large B )</p>
                        </div>
                        <div class="space-y-2.5 mt-4">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Configuration</span>
                                <span class="font-bold text-gray-900">Palatial Villa</span>
                            </div>
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-500 font-medium">Details</span>
                                <span class="font-bold text-[#B49D55]">Information On Request</span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                                <span class="text-gray-500 text-xs uppercase font-medium">Starts From</span>
                                <span class="text-[#B49D55] font-bold text-base">Price On Request</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="openPopup('Get 6 BHK (Extra Large B) Cost Sheet')"
                        class="w-full py-3.5 bg-[#B49D55] text-white font-bold rounded-[2px] hover:bg-[#9e8742] transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase shadow-md hover:shadow-lg mt-4">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Cost Sheet
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Floor Plans Section -->
    <section id="floor-plans" class="py-10 lg:py-14 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-6 lg:mb-10 reveal">
                <span class="text-[#B49D55] font-bold uppercase tracking-widest text-xs">Unit Layouts</span>
                <h2 class="font-heading text-[36px] font-bold mt-2 mb-4">Floor Plans</h2>
                <p class="text-gray-600 text-sm max-w-xl mx-auto">Thoughtfully planned master architectural layouts with expansive courtyards and terraces.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <!-- 4 BHK Plan (Extra Large A) -->
                <div class="relative group reveal">
                    <div class="premium-card p-4 rounded-[2px] bg-white shadow-xl relative overflow-hidden border border-[#B49D55]/20">
                        <div
                            class="aspect-square bg-gray-50 rounded-[2px] relative overflow-hidden flex items-center justify-center">
                            <img src="assets/4bhk-2400.webp" alt="4 BHK Villa Plan (Extra Large A)"
                                class="w-full h-full object-cover blur-sm transition-transform duration-500 group-hover:scale-105">
                            <div
                                class="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4">
                                <h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>
                                <p class="text-white/80 text-xs mb-4">Extra Large A (2400 Sq.Ft.)</p>
                                <button onclick="openPopup('View 4 BHK Extra Large A Plan')"
                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">
                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4 BHK Plan (Super Large A) -->
                <div class="relative group reveal">
                    <div class="premium-card p-4 rounded-[2px] bg-white shadow-xl relative overflow-hidden border border-[#B49D55]/20">
                        <div
                            class="aspect-square bg-gray-50 rounded-[2px] relative overflow-hidden flex items-center justify-center">
                            <img src="assets/4bhkslva-3150.webp" alt="4 BHK Villa Plan (Super Large A)"
                                class="w-full h-full object-cover blur-sm transition-transform duration-500 group-hover:scale-105">
                            <div
                                class="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4">
                                <h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>
                                <p class="text-white/80 text-xs mb-4">Super Large A (3150 Sq.Ft.)</p>
                                <button onclick="openPopup('View 4 BHK Super Large A Plan')"
                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">
                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4 BHK Plan (Super Large B - River Front) -->
                <div class="relative group reveal">
                    <div class="premium-card p-4 rounded-[2px] bg-white shadow-xl relative overflow-hidden border-2 border-[#B49D55]">
                        <div
                            class="aspect-square bg-gray-50 rounded-[2px] relative overflow-hidden flex items-center justify-center">
                            <img src="assets/4bhkslva-3150.webp" alt="4 BHK Villa Plan (Super Large B - River Front)"
                                class="w-full h-full object-cover blur-sm transition-transform duration-500 group-hover:scale-105">
                            <div
                                class="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4">
                                <span class="bg-[#B49D55] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] mb-2 shadow-sm">River Front</span>
                                <h4 class="text-white font-bold text-base mb-1">4 BHK Villa Plan</h4>
                                <p class="text-white/80 text-xs mb-4">Super Large B (3150 Sq.Ft.)</p>
                                <button onclick="openPopup('View 4 BHK Super Large B River Front Plan')"
                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">
                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6 BHK Plan (Extra Large B) -->
                <div class="relative group reveal">
                    <div class="premium-card p-4 rounded-[2px] bg-white shadow-xl relative overflow-hidden border border-[#B49D55]/20">
                        <div
                            class="aspect-square bg-gray-50 rounded-[2px] relative overflow-hidden flex items-center justify-center">
                            <img src="assets/6bhk.webp" alt="6 BHK Villa Plan (Extra Large B)"
                                class="w-full h-full object-cover blur-sm transition-transform duration-500 group-hover:scale-105">
                            <div
                                class="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center p-4">
                                <h4 class="text-white font-bold text-base mb-1">6 BHK Villa Plan</h4>
                                <p class="text-white/80 text-xs mb-4">Extra Large B (Palatial)</p>
                                <button onclick="openPopup('View 6 BHK Extra Large B Plan')"
                                    class="px-5 py-2.5 bg-white text-[#B49D55] text-[11px] font-bold rounded-[2px] uppercase tracking-widest hover:bg-[#B49D55] hover:text-white transition-all shadow-lg flex items-center gap-1.5">
                                    <i data-lucide="lock" class="w-3.5 h-3.5"></i> Unlock Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

`;

const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated index.html with new pricing and floor plans!');

