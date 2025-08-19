-- account
INSERT INTO accounts (first_name, last_name, email, password_hash)
VALUES ('Carlo', 'Cantando', 'carlo@example.com', crypt('testpass123', gen_salt('bf')))
ON CONFLICT (email) DO NOTHING;

-- plan for Carlo
WITH a AS (SELECT id FROM accounts WHERE email='carlo@example.com')
INSERT INTO plans (account_id, name, start_date, end_date, is_public, public_slug)
SELECT a.id, 'Austin Test Trip', '2025-08-10', '2025-08-14', true, 'austin-test-trip'
FROM a
ON CONFLICT DO NOTHING;
