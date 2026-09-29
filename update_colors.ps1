$directory = "d:\TGM - sites\Arihant World Villas"

$replacements = @(
    @("#24432D", "#8C3626"),
    @("#1a3222", "#6b291d"),
    @("#C5A059", "#B49D55"),
    @("#A6823C", "#917d43"),
    # Also handle lowercase variants just in case
    @("#24432d", "#8C3626"),
    @("#c5a059", "#B49D55")
)

Get-ChildItem -Path $directory -Filter *.html | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    foreach ($replacement in $replacements) {
        # Case insensitive replacement for hex codes
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, "(?i)$($replacement[0])", $replacement[1])
    }
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Host "Colors updated successfully."
