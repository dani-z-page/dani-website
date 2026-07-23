# How this site is hosted

A record of how daniellezimmerman.co is wired together, so future-you (or anyone
helping) knows the setup without reverse-engineering it.

**Live site:** https://daniellezimmerman.co
**Source repo:** https://github.com/dani-z-page/dani-website (public)
**Set up:** July 2026

---

## The short version

The site is plain static files hosted **free on GitHub Pages**, served over the
custom domain **daniellezimmerman.co** (registered at **Cloudflare**), with a free
auto-renewing HTTPS certificate. To publish a change, you `git push` — that's it.

```
Your Mac  ──git push──▶  GitHub repo  ──auto-build──▶  GitHub Pages  ──serves──▶  daniellezimmerman.co
                         (dani-website)                                (via Cloudflare DNS)
```

---

## The three pieces

### 1. GitHub repo — `dani-z-page/dani-website`
Public repo holding the website files. The default branch is `main`. Every push
to `main` automatically rebuilds and redeploys the live site within a minute or two.

### 2. GitHub Pages — the free host
Turned on for this repo, building from the **`main` branch, root (`/`) folder**.
- Custom domain: **daniellezimmerman.co**
- **Enforce HTTPS: ON** (all http:// requests auto-redirect to https://)
- The **`CNAME`** file in the repo root contains `daniellezimmerman.co` — this is
  what binds the repo to the domain. **Do not delete it.**
- Settings live at: repo → **Settings → Pages** (on github.com).

### 3. Cloudflare — domain registrar + DNS
daniellezimmerman.co is registered at Cloudflare, which also runs its DNS.
The DNS records that point the domain at GitHub (in Cloudflare → DNS → Records):

| Type  | Name  | Content / Target        | Proxy      |
| ----- | ----- | ----------------------- | ---------- |
| A     | `@`   | `185.199.108.153`       | DNS only   |
| A     | `@`   | `185.199.109.153`       | DNS only   |
| A     | `@`   | `185.199.110.153`       | DNS only   |
| A     | `@`   | `185.199.111.153`       | DNS only   |
| CNAME | `www` | `dani-z-page.github.io` | DNS only   |

- The four **A records** point the bare domain at GitHub Pages' servers.
- The **www CNAME** sends www.daniellezimmerman.co to GitHub too (it then
  redirects to the bare domain).
- **"DNS only" (grey cloud)** matters: it lets GitHub manage the HTTPS
  certificate directly. If you ever switch a record to proxied (orange cloud),
  you must set Cloudflare's SSL/TLS mode to **Full** or the site can hit a
  redirect loop.

---

## Publishing a change

After editing files (see EDITING.md), from the site folder in Terminal:

```bash
git add -A
git commit -m "describe your change"
git push
```

The live site updates automatically. No redeploy step, no touching any of the
setup above.

---

## HTTPS certificate

GitHub issues and **auto-renews** a free Let's Encrypt certificate for both
`daniellezimmerman.co` and `www.daniellezimmerman.co`. There's nothing to renew
or pay for. If HTTPS ever breaks, it's almost always a DNS change — compare the
records above against Cloudflare → DNS.

---

## Troubleshooting quick reference

- **Site not updating after a push?** Check the push succeeded (`git status` should
  say "up to date"), then wait ~2 min for GitHub to rebuild.
- **HTTPS warning / cert error?** Verify the DNS records above are intact and set
  to "DNS only". A stuck certificate can be re-triggered in repo → Settings →
  Pages by removing and re-adding the custom domain.
- **Whole site down?** Confirm the four A records still point to the
  `185.199.x.153` addresses in Cloudflare.
