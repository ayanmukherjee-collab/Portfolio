param(
    [Parameter(Mandatory=$true)]
    [string]$q,
    [Parameter(Mandatory=$true)]
    [string]$filename
)

# Encode parameters to handle spaces and special characters
$encodedQ = [uri]::EscapeDataString($q)
$encodedFilename = [uri]::EscapeDataString($filename)

$url = "https://cli-ayan-ai.vercel.app/api/ask?q=$encodedQ&filename=$encodedFilename"

Write-Host "Fetching response for: '$q'..." -ForegroundColor Cyan

try {
    # Use Invoke-WebRequest with explicit OutFile
    Invoke-WebRequest -Uri $url -OutFile $filename -UseBasicParsing
    Write-Host "Successfully created '$filename'." -ForegroundColor Green
} catch {
    Write-Host "Error: Failed to fetch the file. $($_.Exception.Message)" -ForegroundColor Red
}
