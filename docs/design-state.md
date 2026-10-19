# Design State — bastian-frese.info

> Stand 2026-10-19. Gilt für die Seite `bastian-frese.info`.

## Projekt

| Dimension | Wert | Quelle |
|---|---|---|
| Kategorie | technische Dokumentations- / Laborseite (eine Seite) | Auftrag Bastian, 19.10.2026 |
| Zweck | den real betriebenen Homelab-Betrieb nach außen zeigen, als Ergänzung zum Portfolio | Gespräch 19.10.2026 |
| Zielgruppe | Ausbildungsbetriebe und Verwaltung (WMK), technisch Interessierte | Bewerbungskontext, `bewerbung\README.md` |
| Bedürfnis der Zielgruppe | in 60 Sekunden erkennen, dass hier jemand Systeme wirklich betreibt — ohne Marketing | Interview-/Verwaltungskontext, `bewerbung\sandbox-konzept.md` |
| Hauptaktion | `bastian-frese.de` und Projekte ansehen; Kontakt aufnehmen | Aufbau der Seite |
| Markenstimme | sachlich, konkret, ohne Superlative; Zahlen statt Behauptungen | `bastian-frese.de`, `Projekte\portfolio-website.md` |
| Inhaltsdichte | mittel; Prosa plus Listen, keine Kartenstapel | diese Seite |

## Gestaltungsrichtung

**„Betriebsbuch / technische Zeichnung"** — helles Papier, Tinte, eine Signal­farbe,
Monospace für Daten. Bewusst **kein** zweites dunkles Terminal: die Portfolio-Seite ist
der dunkle Auftritt, diese Seite ist das Dokument dazu. Das passt zur Zielgruppe
(Verwaltung liest hell und ruhig besser) und zum Zweck (Bestand, Weg, Wachen, Netz).

Belege für die Richtung: Zielgruppe und Zweck oben; die vorhandene Marke liefert
IBM Plex (self-hosted, OFL) und die sachliche Sprache; die Inhalte sind überwiegend
tabellarisch (Dienste, Zonen, Projekte) und vertragen eine dokumentarische Form.

## Technik

| Dimension | Wert |
|---|---|
| Stack | **Astro 5** (statischer Build) + **Tailwind 4** + **Motion 12** |
| Abhängigkeiten | `astro`, `tailwindcss`, `@tailwindcss/vite`, `motion`; Schriften lokal aus `public/fonts/` (IBM Plex, OFL) |
| Einstieg | `src/pages/index.astro`; Build nach `dist/` |
| Token-Ebene | CSS Custom Properties in `:root`, Dark-Override unter `prefers-color-scheme: dark`, über `@theme inline` an Tailwind gebunden |
| Breakpoints | 900 px, 700 px; geprüft bei 390 und 1440 |
| Betrieb | nginx in LXC 118 `labor-ws` (192.168.100.5), Reverse Proxy über NPM (Host `999-labor.conf`), Tunnel über Cloudflare |
| Zertifikat | Let's Encrypt `npm-18` auf NPM, HTTP-01 über den Tunnel; Erneuerung per cron auf LXC 109 |

### Bewegung

- Einblenden beim Scrollen (`inView` + `animate`), 550 ms, 18 px Versatz.
- Diagramm-Kästen mit 90 ms Versatz.
- Ohne JavaScript oder bei `prefers-reduced-motion: reduce` bleibt alles sichtbar — die Klasse `js` wird nur dann gesetzt, wenn Bewegung erlaubt ist.
- Einzige JS-Datei: das gebündelte Motion-Skript (63 KB, 22,5 KB gzip).

## Regeln dieser Seite

- **Keine Dopplung mit `bastian-frese.de`.** Projektzahlen (Tests, Migrationen, Zeilen)
  stehen nur im Portfolio. Diese Seite nennt Projekte als Verweis, nicht als zweiten
  Katalog — sonst driften die Zahlen auseinander.
- **Die Rollen sind benannt.** `.info` = Labor/Betrieb; `.de` = Bewerbung, Werdegang,
  Projekte. Beide Seiten verlinken sich gegenseitig.
- Keine internen IP-Adressen, Hostnamen oder Versionsnummern im öffentlichen Text.
- Keine erfundenen Zahlen. Belegt sind: 3 Knoten, 40 Gäste, 35 laufend (16.10.2026,
  `pvesh get /cluster/resources`), 679 Tests (19.10.2026, `dotnet test --list-tests`),
  80 Tests Agent-Kalender (Chronik 15.10.2026).
- Keine Cookies, kein Tracking, keine externen Requests.
- Status wird als Text benannt, nicht nur als Farbe.

## Offene Punkte

- `www.bastian-frese.info` ist noch nicht eingerichtet (nur der Apex).
- Ein englischer oder barrierefreier Sprachumschalter ist nicht vorgesehen.
- Die Seite nennt keine konkreten Dienstadressen — bewusst.
