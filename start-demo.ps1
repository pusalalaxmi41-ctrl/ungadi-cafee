$ErrorActionPreference = "Stop"

$bundledNode = "C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$node = if (Test-Path -LiteralPath $bundledNode) { $bundledNode } else { "node" }
$siteRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Set-Location -LiteralPath $siteRoot
& $node "$siteRoot\server.mjs"
