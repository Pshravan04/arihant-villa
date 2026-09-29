$directory = "d:\TGM - sites\Arihant World Villas"

$replacements = @(
    @("9228170776", "0000000000"),
    @("A041272501874", "A0000000000")
)

Get-ChildItem -Path $directory -Filter *.html | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    foreach ($replacement in $replacements) {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $replacement[0], $replacement[1])
    }
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Host "Dummy contact details updated successfully."
