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

export type Entry = {
  /** Anzeigedatum, z. B. "26.09.2026" */
  date: string;
  /** Maschinenlesbar für <time datetime> */
  datetime: string;
  title: string;
  issue: string;
  cause: string;
  change: string;
};

/** Einträge des Betriebsbuchs, neueste zuerst nicht nötig — chronologisch. */
export const entries: Entry[] = [
  {
    date: "21.09.2026",
    datetime: "2026-09-21",
    title: "Das Netz war flach",
    issue:
      "Jedes System erreichte jedes andere. Zwei Systeme hatten dieselbe Adresse, und eine Gast-Firewall war eingerichtet, aber abgeschaltet — in der Oberfläche sah beides richtig aus.",
    cause:
      "Es war nie aufgeschrieben, was erlaubt sein soll. Gefunden wurde das beim Auslesen der Cluster-Konfiguration, nicht durch einen Ausfall.",
    change:
      "Daraus entstand ein Zonenplan als Zielbild, mit einem Satz als Grundlage: verboten, was nicht ausdrücklich erlaubt ist. Wie weit die Segmentierung technisch umgesetzt ist, bleibt offen und steht so auf dieser Seite.",
  },
  {
    date: "26.09.2026",
    datetime: "2026-09-26",
    title: "Die Sicherung meldete Erfolg und lief leer",
    issue: "Die nächtliche Sicherung schrieb 32 Kilobyte statt 109 Megabyte.",
    cause:
      "Ein Skript startete ohne den nötigen Suchpfad, fand sein Werkzeug nicht und brach still ab. Kein Alarm, weil der Dienst ja antwortete.",
    change:
      "Geprüft wird jetzt, ob die Aufgabe gelaufen ist — nicht, ob der Dienst antwortet. Der Fund steht ausführlich in Kapitel 03.",
  },
  {
    date: "26.09.2026",
    datetime: "2026-09-26",
    title: "Der stärkste Datenstrom hieß „sonstiges“",
    issue: "Der größte gemessene Verkehr im Netz war keinem Dienst zugeordnet.",
    cause:
      "Die Zuordnung nahm den kleineren der beiden Ports. Ein Client mit reserviertem Quellport schlug damit den echten Dienstport aus dem Rennen.",
    change:
      "Beide Ports werden übertragen, entschieden wird an genau einer Stelle. Ein falsches Etikett ist schlimmer als ein fehlendes — lieber „unbekannt“ als eine falsche Aussage.",
  },
  {
    date: "26.09.2026",
    datetime: "2026-09-26",
    title: "Das Messwerkzeug zählte sich selbst",
    issue: "Jeder Knoten meldete seinen eigenen Messbericht als Gastverkehr.",
    cause:
      "Der Selbstausschluss verglich Adresse und Port auf derselben Paketseite. Die Adresse des Knotens trifft dort nie den Port der Gegenstelle — die Regel konnte nie greifen.",
    change:
      "Das Ziel wird aus der Konfiguration abgeleitet, statt an zwei Stellen eingetragen zu sein. Was doppelt gepflegt wird, läuft irgendwann auseinander.",
  },
  {
    date: "26.09.2026",
    datetime: "2026-09-26",
    title: "Schriften wurden still blockiert",
    issue:
      "Die Seite sah „fast wie vorher“ aus. Die selbst gehosteten Schriften luden nicht.",
    cause:
      "Die Content-Security-Policy hatte keine Regel für Schriften und fiel deshalb auf „nichts erlaubt“ zurück. Kein Fehler, keine Meldung, kein Log — die Regel galt einfach nicht.",
    change:
      "Nach jeder neuen Art von Ressource wird die Policy mitgeprüft. Ein Rückfall auf eine Systemschrift sieht fast richtig aus.",
  },
  {
    date: "26.09.2026",
    datetime: "2026-09-26",
    title: "Ein Endpunkt war von außen erreichbar",
    issue:
      "Ein Pfad, der von außen nur „nicht gefunden“ liefern darf, antwortete mit „nicht berechtigt“.",
    cause:
      "Die Sperre traf den Pfad exakt. Ein Schrägstrich am Ende führte daran vorbei, und dahinter antwortete die Anwendung selbst.",
    change:
      "Die Sperre greift jetzt als Präfix. Alle Schreibweisen liefern „nicht gefunden“. Eine exakte Übereinstimmung ist keine Sperre.",
  },
  {
    date: "19.–20.10.2026",
    datetime: "2026-10-19",
    title: "Dieses Betriebsbuch geht online",
    issue: "Zwei Seiten, die dieselben Zahlen führen, driften auseinander.",
    cause:
      "Bewerbung und Betrieb brauchen verschiedene Leser. Ein Portfolio braucht Zahlen, ein Betriebsbuch braucht Ursachen.",
    change:
      "Die Projektzahlen stehen nur im Portfolio auf bastian-frese.de. Hier steht der Betrieb darunter — und wenn eine Zahl sich ändert, ändert sie sich an genau einer Stelle.",
  },
];


