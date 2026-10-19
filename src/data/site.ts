export type Service = {
  name: string;
  role: string;
};

export const services: Service[] = [
  { name: "AdGuard Home", role: "DNS und DHCP für das gesamte Netz — inklusive fester Adressen und lokaler Namen." },
  { name: "Nginx Proxy Manager", role: "Eintrittspunkt für alle Dienste. Entscheidet anhand des Hostnamens, wohin ein Request geht." },
  { name: "Cloudflare Tunnel", role: "Öffentlicher Zugang ohne Portfreigabe am Router. Vier Verbindungen, ausgehend aufgebaut." },
  { name: "Authelia", role: "Zentrale Anmeldung mit zweitem Faktor vor den Verwaltungsdiensten." },
  { name: "Grafana · Prometheus · Loki", role: "Metriken, Logs und Alarmierung. Meldet, bevor ein Nutzer den Ausfall bemerkt." },
  { name: "Healthchecks", role: "Prüft, ob geplante Aufgaben tatsächlich ausgeführt wurden — nicht nur, ob der Dienst antwortet." },
  { name: "Uptime Kuma · Gatus", role: "Verfügbarkeit von innen und von außen. Zwei Blickwinkel, damit ein Fehler nicht nur an einer Stelle sichtbar wird." },
  { name: "Vaultwarden", role: "Passwort-Tresor auf eigener Hardware, nicht bei einem Anbieter." },
  { name: "Nextcloud", role: "Dateien und Freigaben, selbst gehostet." },
];

export const zones = [
  { name: "Internet", rule: "kein direkter Weg hinein" },
  { name: "Edge", rule: "nimmt öffentlichen Verkehr an" },
  { name: "Anwendungen", rule: "sprechen mit Daten, nicht mit Verwaltung" },
  { name: "Daten", rule: "nur aus den Anwendungen erreichbar" },
  { name: "Verwaltung", rule: "eigener Weg, eigener Schutz" },
  { name: "Gast", rule: "kein Weg zu Daten oder Verwaltung" },
];

