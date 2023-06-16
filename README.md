# Front-end automation for Tesla website using Cypress testing tool 

[Tesla](https://www.tesla.com/)

[Cypress](https://www.cypress.io/)



[![Cypress Tests](https://github.com/mohamedmoheyeldin/tesla_cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/mohamedmoheyeldin/tesla_cypress/actions/workflows/cypress.yml)




$url = "https://api.github.com/repos/$repoFullName/check-runs"
$hdr = @{
Accept = 'application/vnd.github.antiope-preview+json'
Authorization = "token $ghToken"
}
$bdy = @{
name       = $report_name
head_sha   = $ref
status     = 'completed'
conclusion = $conclusion
output     = @{
title   = $report_title
summary = "This run completed at ``$([datetime]::Now)``"
text    = $reportData
}
}
Invoke-WebRequest -Headers $hdr $url -Method Post -Body ($bdy | ConvertTo-Json)