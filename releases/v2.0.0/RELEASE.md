# Space Competition Student Platform V2 — Production Release

Prepared: 2026-09-16

## Scope

Official competition platform for approximately 300 grade 9–10 students, supporting individual participation or teams of 2–3, a teacher supervisor, two approved space competition tracks, educational resources, private participant media, project files/links, pledge, final review, submission and administration.

## Verification

- PHP tests: 91 passed, 0 failed
- Frontend production smoke: passed
- PHP syntax: 60 files, 0 syntax errors
- HTTP smoke: public routes 200; unknown competition track 404; protected student/admin routes redirect unauthenticated users with 303
- Archive integrity: passed
- Sensitive-entry archive scan: clean

## Production package

`Space_Competition_Platform_V2_Production.zip`

SHA-256:
`98c3bee269ad20b5d2665bb8d1e5ba610f7720cb0bd88c19cb7ccfac20a5b526`

The production package is generated only from the verified Git commit and must be deployed to PHP/MySQL hosting. Do not upload `.env`, rosters, passwords, participant photos, project files, logs or backups to GitHub.

## Required deployment order

1. PHP 8.2+ with PDO MySQL, Fileinfo, OpenSSL and Sessions.
2. HTTPS and Document Root pointing to `public/`.
3. Copy `.env.example` to server-only `.env` and configure MySQL/private storage.
4. Import `001_schema.sql` then `002_competition_v2.sql`.
5. Run `php tools/preflight.php` and resolve every FAIL.
6. Create admin via CLI.
7. Test with staging accounts.
8. Import up to 300 student accounts via CLI and protect/delete the one-time password CSV after distribution.
