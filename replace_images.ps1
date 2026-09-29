$directory = "d:\TGM - sites\Arihant World Villas"

$replacements = @(
    @("assets/arihant-world-villas-logo.png", "assets/logo.svg"),
    @("assets/arihant-world-villas-banner-1.jpeg", "assets/deskban1.webp"),
    @("assets/arihant-world-villas-banner-2.jpeg", "assets/deskban2.webp"),
    @("assets/new images/arihant-world-villas-exterior-6.jpg", "assets/45-47.webp"),
    @("assets/arihant-world-villas-master-plan.jpg", "assets/masterplan.webp"),
    @("assets/arihant-world-villas-rera.png", "assets/qrcode_p52000076635.webp")
)

# Fix for index.html specifically
$indexPath = Join-Path $directory "index.html"
$content = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

foreach ($replacement in $replacements) {
    $content = $content.Replace($replacement[0], $replacement[1])
}

# Unit Plans
$content = $content.Replace('src="assets/new images/arihant-world-villas-unit-plan.webp" alt="2BHK Plan"', 'src="assets/4bhk-2400.webp" alt="4BHK Plan"')
$content = $content.Replace('src="assets/new images/arihant-world-villas-unit-plan.webp" alt="3BHK Plan"', 'src="assets/6bhk.webp" alt="6BHK Plan"')
$content = $content.Replace('src="assets/new images/arihant-world-villas-unit-plan.webp" alt="4BHK Plan"', 'src="assets/4bhkslva-3150.webp" alt="Custom Villa Plan"')

# Amenities
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-7.jpg', 'assets/banquet-hall.webp')
$content = $content.Replace('assets/ai-images/arihant-world-villas-infinity-pool.png', 'assets/swimming-pool.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-interior-1.jpg', 'assets/tree-garden.webp')
$content = $content.Replace('assets/ai-images/arihant-world-villas-modern-gym.png', 'assets/sports-arena.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-1.jpg', 'assets/riverside-promenade.webp')
$content = $content.Replace('assets/ai-images/arihant-world-villas-kids-play.png', 'assets/kids-play-area.webp')

# Gallery
$content = $content.Replace('assets/new images/arihant-world-villas-gallery-img19.jpg', 'assets/1.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-5.jpg', 'assets/2.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-4.jpg', 'assets/3.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-2.jpg', 'assets/4.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-8.jpg', 'assets/barbeque-station.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-interior-2.jpg', 'assets/open-air-cinema.webp')
$content = $content.Replace('assets/new images/arihant-world-villas-exterior-3.jpg', 'assets/forest-trails.webp')
# (The second exterior-6 was already replaced globally to 45-47.webp)

[System.IO.File]::WriteAllText($indexPath, $content, [System.Text.Encoding]::UTF8)

# Fix thankyou.html
$thankyouPath = Join-Path $directory "thankyou.html"
$contentTY = [System.IO.File]::ReadAllText($thankyouPath, [System.Text.Encoding]::UTF8)
$contentTY = $contentTY.Replace("assets/arihant-world-villas-logo.png", "assets/logo.svg")
[System.IO.File]::WriteAllText($thankyouPath, $contentTY, [System.Text.Encoding]::UTF8)

Write-Host "Replaced all images successfully."
