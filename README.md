# bastian-frese.info — Labor

Betriebsbuch des Homelabs. Ergänzung zum Portfolio auf `bastian-frese.de`.

## Stack

Astro 5 (statischer Build) + Tailwind 4 + Motion 12. Kein Server-Prozess.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Betrieb

| Ding | Wert |
|---|---|
| Gast | LXC 118 `labor-ws` auf `prox1`, 192.168.100.5 |
| Webserver | nginx, `/var/www/labor`, Konfiguration `deploy/nginx-labor.conf` |
| Reverse Proxy | NPM auf LXC 109, `deploy/npm-labor.conf` → `/opt/nginx-proxy-manager/data/nginx/proxy_host/999-labor.conf` |
| DNS lokal | AdGuard-Rewrite `bastian-frese.info` → 192.168.100.75 |
| Tunnel | Cloudflare-Ingress `bastian-frese.info` → `https://localhost:443` |
| Zertifikat | Let's Encrypt `npm-18` auf NPM, Erneuerung per `/etc/cron.d/npm-cert-renew` |

## Deploy

```bash
npm run build
tar -czf /tmp/labor-dist.tgz -C dist .
scp /tmp/labor-dist.tgz prox1:/tmp/
ssh prox1 "pct push 118 /tmp/labor-dist.tgz /tmp/labor-dist.tgz"
ssh prox1 "pct exec 118 -- bash -lc 'rm -rf /var/www/labor && mkdir -p /var/www/labor && tar --no-same-owner -xzf /tmp/labor-dist.tgz -C /var/www/labor && chown -R www-data:www-data /var/www/labor'"
```

`--no-same-owner` ist nötig, weil das Windows-tar uid 197609 in das Archiv schreibt.

## Gestaltung

Richtung, Tokens und Regeln stehen in `docs/design-state.md`. Kurz: helles,
dokumentarisches „Betriebsbuch“; kein zweites dunkles Terminal. Keine internen IPs im
öffentlichen Text.
