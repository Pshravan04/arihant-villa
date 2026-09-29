$urls = @(
    "https://www.arihant-project.com/arihant-world-villa/",
    "https://www.arihantworldvillas.com/",
    "https://arihantworldvilla.com/"
)

$downloadDir = "d:\TGM - sites\Arihant World Villas\assets\extracted"
if (-Not (Test-Path $downloadDir)) {
    New-Item -ItemType Directory -Path $downloadDir | Out-Null
}

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        
        # Simple regex to get src attributes
        $imgRegex = '<img[^>]+src="([^"]+)"'
        $matches = [regex]::Matches($response.Content, $imgRegex, "IgnoreCase")
        
        foreach ($match in $matches) {
            $src = $match.Groups[1].Value
            if ($src.Contains("?")) {
                $src = $src.Substring(0, $src.IndexOf("?"))
            }
            if ($src -notmatch "^http") {
                if ($src.StartsWith("/")) {
                    $baseUri = [System.Uri]$url
                    $src = $baseUri.Scheme + "://" + $baseUri.Host + $src
                } else {
                    $src = $url.TrimEnd('/') + '/' + $src
                }
            }
            
            $filename = [System.IO.Path]::GetFileName($src)
            if ([string]::IsNullOrWhiteSpace($filename)) { continue }
            
            $destPath = Join-Path $downloadDir $filename
            
            if (-Not (Test-Path $destPath)) {
                Write-Host "Downloading: $src"
                try {
                    Invoke-WebRequest -Uri $src -OutFile $destPath -UseBasicParsing -ErrorAction SilentlyContinue
                } catch {
                    Write-Host "Failed to download $src"
                }
            }
        }
    } catch {
        Write-Host "Failed to fetch $url"
    }
}

Write-Host "Extraction complete."
