# Submit URLs to IndexNow (Bing, Yandex, DuckDuckGo, etc.) for fast indexing.
# Reads INDEXNOW_SECRET from .env.local automatically.
#
# Usage:
#   .\scripts\submit-indexnow.ps1 https://www.poker-reflex.com/blog/your-new-article
#
# Multiple URLs:
#   .\scripts\submit-indexnow.ps1 https://www.poker-reflex.com/blog/article1 https://www.poker-reflex.com/blog/article2

param([Parameter(ValueFromRemainingArguments=$true)][string[]]$urls)

if (-not $urls -or $urls.Count -eq 0) {
    Write-Host "Usage: .\submit-indexnow.ps1 <url1> <url2> ..."
    exit 1
}

# Read the secret from .env.local
$envFile = Get-Content "$PSScriptRoot\..\.env.local" -ErrorAction SilentlyContinue
$secret = ($envFile | Where-Object { $_ -match "^INDEXNOW_SECRET=" }) -replace "^INDEXNOW_SECRET=", ""

if (-not $secret) {
    Write-Host "ERROR: INDEXNOW_SECRET not found in .env.local"
    exit 1
}

$body = @{ urls = $urls } | ConvertTo-Json

try {
    $response = Invoke-WebRequest `
        -Uri "https://www.poker-reflex.com/api/indexnow" `
        -Method Post `
        -Headers @{ "x-indexnow-secret" = $secret } `
        -Body $body `
        -ContentType "application/json" `
        -UseBasicParsing

    Write-Host "Status: $($response.StatusCode)"
    Write-Host "Response: $($response.Content)"
} catch {
    Write-Host "ERROR: $_"
}
