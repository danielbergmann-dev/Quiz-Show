// Correct answer first; shuffled for play. Original educational questions.
const BANK=[
  {
    "id": "easy-cw-1",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welche zwei Supermächte prägten den Kalten Krieg?",
    "answers": [
      "USA und Sowjetunion",
      "Frankreich und China",
      "Deutschland und Japan",
      "Großbritannien und Italien"
    ],
    "note": "Um beide Supermächte bildeten sich rivalisierende Machtblöcke.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  },
  {
    "id": "easy-cw-2",
    "cat": "coldwar",
    "tier": 0,
    "q": "Warum heißt der Konflikt „Kalter Krieg“?",
    "answers": [
      "Die Supermächte vermieden einen direkten großen Krieg gegeneinander",
      "Alle Kämpfe fanden im Winter statt",
      "Es wurden keine Waffen gebaut",
      "Der Konflikt betraf nur die Arktis"
    ],
    "note": "„Kalt“ bedeutet nicht friedlich: Es gab Kriege in anderen Ländern.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  },
  {
    "id": "easy-cw-3",
    "cat": "coldwar",
    "tier": 0,
    "q": "Wozu diente der Marshallplan vor allem?",
    "answers": [
      "Zum wirtschaftlichen Wiederaufbau Europas",
      "Zum Bau der Berliner Mauer",
      "Zur Gründung der DDR",
      "Zur Auflösung der UNO"
    ],
    "note": "Wirtschaftliche Stabilität sollte auch kommunistischen Einfluss begrenzen.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "easy-cw-4",
    "cat": "coldwar",
    "tier": 0,
    "q": "Was bedeutet „Containment“ im Kalten Krieg?",
    "answers": [
      "Eindämmung kommunistischer Ausbreitung",
      "Auflösung aller Grenzen",
      "Vereinigung aller Armeen",
      "Abschaffung des Welthandels"
    ],
    "note": "Die USA wollten eine weitere Ausdehnung sowjetischen Einflusses verhindern.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "easy-cw-5",
    "cat": "coldwar",
    "tier": 0,
    "q": "Was war die NATO?",
    "answers": [
      "Ein westliches Verteidigungsbündnis",
      "Eine sowjetische Partei",
      "Ein europäisches Parlament",
      "Eine Währungsunion"
    ],
    "note": "Die NATO wurde 1949 gegründet.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-westen/militaerallianzen",
    "subject": "nato"
  },
  {
    "id": "easy-cw-6",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welcher Staat führte den Ostblock?",
    "answers": [
      "Die Sowjetunion",
      "Kanada",
      "Frankreich",
      "Die Bundesrepublik"
    ],
    "note": "Die UdSSR besaß im Ostblock eine beherrschende Stellung.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  },
  {
    "id": "easy-cw-7",
    "cat": "coldwar",
    "tier": 0,
    "q": "Wie wurde West-Berlin während der Blockade versorgt?",
    "answers": [
      "Durch eine Luftbrücke",
      "Durch einen Tunnel nach Hamburg",
      "Nur durch sowjetische Züge",
      "Durch eine neue Seestraße"
    ],
    "note": "Die Westalliierten brachten lebenswichtige Güter mit Flugzeugen.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlin-blockade-1948.html",
    "subject": "berlin"
  },
  {
    "id": "easy-cw-8",
    "cat": "coldwar",
    "tier": 0,
    "q": "In welchem Jahr begann der Bau der Berliner Mauer?",
    "answers": [
      "1961",
      "1945",
      "1949",
      "1989"
    ],
    "note": "Am 13. August 1961 begann die Abriegelung.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html",
    "subject": "wall"
  },
  {
    "id": "easy-cw-9",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welche Fluchtbewegung sollte die Mauer hauptsächlich stoppen?",
    "answers": [
      "Aus der DDR in den Westen",
      "Aus Frankreich in die DDR",
      "Aus den USA nach Berlin",
      "Aus Polen in die Sowjetunion"
    ],
    "note": "Die SED wollte die Massenflucht über West-Berlin unterbinden.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html",
    "subject": "wall"
  },
  {
    "id": "easy-cw-10",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welche Krise brachte die Welt 1962 an den Rand eines Atomkriegs?",
    "answers": [
      "Die Kubakrise",
      "Die Suezkrise",
      "Die Ölkrise",
      "Die Berlin-Blockade"
    ],
    "note": "Sowjetische Atomraketen auf Kuba lösten die Zuspitzung aus.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  },
  {
    "id": "easy-cw-11",
    "cat": "coldwar",
    "tier": 1,
    "q": "Wer war während der Kubakrise US-Präsident?",
    "answers": [
      "John F. Kennedy",
      "Harry S. Truman",
      "Ronald Reagan",
      "Richard Nixon"
    ],
    "note": "Kennedy verhandelte mit Nikita Chruschtschow.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  },
  {
    "id": "easy-cw-12",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was bedeutet „Glasnost“?",
    "answers": [
      "Offenheit",
      "Aufrüstung",
      "Abschottung",
      "Planerfüllung"
    ],
    "note": "Gorbatschow wollte mehr öffentliche Diskussion ermöglichen.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten/glasnost-und-perestroika.html",
    "subject": "reform"
  },
  {
    "id": "easy-cw-13",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was bedeutet „Perestroika“?",
    "answers": [
      "Umgestaltung",
      "Kriegserklärung",
      "Grenzsperre",
      "Geheimpolizei"
    ],
    "note": "Die Reformen sollten Staat, Wirtschaft und Gesellschaft verändern.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten/glasnost-und-perestroika.html",
    "subject": "reform"
  },
  {
    "id": "easy-cw-14",
    "cat": "coldwar",
    "tier": 1,
    "q": "Welcher Politiker steht für Glasnost und Perestroika?",
    "answers": [
      "Michail Gorbatschow",
      "Josef Stalin",
      "Walter Ulbricht",
      "Konrad Adenauer"
    ],
    "note": "Er wurde 1985 Generalsekretär der sowjetischen Kommunistischen Partei.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten/glasnost-und-perestroika.html",
    "subject": "reform"
  },
  {
    "id": "easy-cw-15",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was sollte Entspannungspolitik erreichen?",
    "answers": [
      "Spannungen durch Gespräche und Vereinbarungen verringern",
      "Jeden Kontakt abbrechen",
      "Alle Bündnisse sofort militärisch besiegen",
      "Den Handel vollständig stoppen"
    ],
    "note": "Entspannung setzte auf Verständigung trotz fortbestehender Gegensätze.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung.html",
    "subject": "confrontation"
  },
  {
    "id": "easy-cw-16",
    "cat": "coldwar",
    "tier": 1,
    "q": "In welchem Jahr entstanden Bundesrepublik und DDR?",
    "answers": [
      "1949",
      "1945",
      "1955",
      "1961"
    ],
    "note": "Aus den Besatzungszonen entwickelten sich zwei deutsche Staaten.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre.html",
    "subject": "after"
  },
  {
    "id": "easy-cw-17",
    "cat": "coldwar",
    "tier": 1,
    "q": "Welcher Militärallianz trat die Bundesrepublik 1955 bei?",
    "answers": [
      "Der NATO",
      "Dem Warschauer Pakt",
      "Der UNO-Armee",
      "Der Roten Armee"
    ],
    "note": "Der Beitritt band die Bundesrepublik militärisch an den Westen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-westen/militaerallianzen",
    "subject": "nato"
  },
  {
    "id": "easy-cw-18",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was regelte der Grundlagenvertrag von 1972?",
    "answers": [
      "Die Beziehungen zwischen Bundesrepublik und DDR",
      "Die Gründung der Sowjetunion",
      "Die Aufteilung Koreas",
      "Die Einführung des Euro"
    ],
    "note": "Beide deutschen Staaten vereinbarten geregelte Beziehungen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik/grundlagenvertrag",
    "subject": "treaty"
  },
  {
    "id": "easy-cw-19",
    "cat": "coldwar",
    "tier": 1,
    "q": "Wie hieß das östliche Militärbündnis unter sowjetischer Führung?",
    "answers": [
      "Warschauer Pakt",
      "NATO",
      "Europäische Gemeinschaft",
      "Völkerbund"
    ],
    "note": "Das Bündnis entstand 1955 als Gegengewicht zur NATO.",
    "source": "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321391/warschauer-pakt/",
    "subject": "pact"
  },
  {
    "id": "easy-cw-20",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was war Sputnik 1957?",
    "answers": [
      "Ein sowjetischer Satellit",
      "Ein amerikanischer Panzer",
      "Ein deutscher Friedensvertrag",
      "Ein britisches U-Boot"
    ],
    "note": "Der Satellitenstart zeigte sowjetische technische Leistungsfähigkeit.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  },
  {
    "id": "easy-cw-21",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was begann 1950 mit dem Angriff Nordkoreas auf Südkorea?",
    "answers": [
      "Der Koreakrieg",
      "Der Vietnamkrieg",
      "Der Zweite Weltkrieg",
      "Der Afghanistankrieg"
    ],
    "note": "Der Koreakrieg wurde 1953 durch einen Waffenstillstand unterbrochen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  },
  {
    "id": "easy-cw-22",
    "cat": "coldwar",
    "tier": 2,
    "q": "In welcher Stadt wurde 1975 die KSZE-Schlussakte unterzeichnet?",
    "answers": [
      "Helsinki",
      "Paris",
      "Rom",
      "Prag"
    ],
    "note": "Die Schlussakte war ein wichtiger Schritt der Entspannung.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung/ksze.html",
    "subject": "ksze"
  },
  {
    "id": "easy-cw-23",
    "cat": "coldwar",
    "tier": 2,
    "q": "Welche Forderung passt zur KSZE-Schlussakte?",
    "answers": [
      "Menschenrechte achten",
      "Andere Staaten beliebig angreifen",
      "Alle Wahlen verbieten",
      "Grenzen nur mit Gewalt verändern"
    ],
    "note": "Die Staaten bekannten sich zu Grundfreiheiten und friedlicher Streitregelung.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung/ksze.html",
    "subject": "ksze"
  },
  {
    "id": "easy-cw-24",
    "cat": "coldwar",
    "tier": 2,
    "q": "Wann wurde Deutschland wiedervereinigt?",
    "answers": [
      "3. Oktober 1990",
      "9. November 1989",
      "13. August 1961",
      "8. Mai 1945"
    ],
    "note": "Maueröffnung und staatliche Wiedervereinigung sind unterschiedliche Ereignisse.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/weg-zur-einheit",
    "subject": "end"
  },
  {
    "id": "easy-cw-25",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was verstärkte 1989 den Druck auf die SED-Führung?",
    "answers": [
      "Massenproteste und Flucht",
      "Ein neuer Kaiser",
      "Die Einführung des Euro",
      "Eine britische Besetzung der DDR"
    ],
    "note": "Die Herrschaft verlor zunehmend Rückhalt.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten.html",
    "subject": "change"
  },
  {
    "id": "easy-cw-26",
    "cat": "coldwar",
    "tier": 2,
    "q": "Warum verließen viele Menschen die DDR vor dem Mauerbau?",
    "answers": [
      "Wegen Unfreiheit und mangelnder Perspektiven",
      "Weil die DDR keine Städte hatte",
      "Weil jede Arbeit verboten war",
      "Weil Reisen in den Westen vorgeschrieben waren"
    ],
    "note": "Politische und wirtschaftliche Motive wirkten zusammen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/flucht-und-notaufnahme.html",
    "subject": "flight"
  },
  {
    "id": "easy-cw-27",
    "cat": "coldwar",
    "tier": 2,
    "q": "Wie wurden die Versorgungsflugzeuge der Luftbrücke oft genannt?",
    "answers": [
      "Rosinenbomber",
      "Silberpfeile",
      "Mauersegler",
      "Ostexpress"
    ],
    "note": "Der Spitzname erinnert an die Hilfe für West-Berlin.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlin-blockade-1948.html",
    "subject": "berlin"
  },
  {
    "id": "easy-cw-28",
    "cat": "coldwar",
    "tier": 2,
    "q": "Welche Währung wurde 1948 in den Westzonen eingeführt?",
    "answers": [
      "Deutsche Mark",
      "Euro",
      "Rubel",
      "Ostmark"
    ],
    "note": "Die Währungsreform war Teil der wirtschaftlichen Neuordnung.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre.html",
    "subject": "after"
  },
  {
    "id": "easy-cw-29",
    "cat": "coldwar",
    "tier": 2,
    "q": "Wie reagierte die SED-Führung auf Gorbatschows Reformkurs?",
    "answers": [
      "Sie lehnte grundlegende Reformen ab",
      "Sie führte sofort freie Wahlen ein",
      "Sie löste die DDR 1985 auf",
      "Sie trat der NATO bei"
    ],
    "note": "Die SED fürchtete um ihren Machtanspruch.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten/glasnost-und-perestroika.html",
    "subject": "reform"
  },
  {
    "id": "easy-cw-30",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was sollte der „heiße Draht“ zwischen Washington und Moskau verbessern?",
    "answers": [
      "Die Kommunikation in Krisen",
      "Die Stromversorgung Berlins",
      "Die Fernsehunterhaltung",
      "Die Kontrolle aller Grenzen"
    ],
    "note": "Die direkte Verbindung sollte gefährliche Missverständnisse verringern.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  }
];
const HARD_BANK=[
  {
    "id": "hard-cw-1",
    "cat": "coldwar",
    "tier": 0,
    "q": "Warum ergänzten sich Truman-Doktrin und Marshallplan?",
    "answers": [
      "Politische Eindämmung wurde wirtschaftlich unterstützt",
      "Beide verlangten die Auflösung der USA",
      "Beide waren sowjetische Militärpläne",
      "Beide verboten Wiederaufbauhilfe"
    ],
    "note": "Stabile Wirtschaft sollte Gesellschaften weniger anfällig für kommunistischen Einfluss machen.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "hard-cw-2",
    "cat": "coldwar",
    "tier": 0,
    "q": "Wie ist Schdanows Zwei-Lager-Theorie einzuordnen?",
    "answers": [
      "Als sowjetische ideologische Deutung des Konflikts",
      "Als neutrale Weltkarte",
      "Als NATO-Vertrag",
      "Als Beweis weltweiter Demokratie"
    ],
    "note": "Die Theorie wertete das eigene Lager positiv und den Gegner negativ.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "hard-cw-3",
    "cat": "coldwar",
    "tier": 0,
    "q": "Was meint „Lager“ in der Zwei-Lager-Theorie?",
    "answers": [
      "Politische Machtblöcke",
      "Flüchtlingsunterkünfte",
      "Warenlager",
      "Militärische Schlafplätze"
    ],
    "note": "Gemeint sind Staaten und Kräfte mit gemeinsamer politischer Ausrichtung.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "hard-cw-4",
    "cat": "coldwar",
    "tier": 0,
    "q": "Wie stellte Schdanow das von den USA geführte Lager dar?",
    "answers": [
      "Als imperialistisch und antidemokratisch",
      "Als kommunistisch und klassenlos",
      "Als neutral und bündnisfrei",
      "Als sowjetisch geführt"
    ],
    "note": "Das ist Schdanows propagandistische Bewertung, keine neutrale Beschreibung.",
    "source": "https://www.bpb.de/shop/zeitschriften/izpb/internationale-beziehungen-i-245/10328/ursachen-und-entstehung-des-kalten-krieges/",
    "subject": "origins"
  },
  {
    "id": "hard-cw-5",
    "cat": "coldwar",
    "tier": 0,
    "q": "Warum ist „Marshallplan = reine Wohltätigkeit“ unvollständig?",
    "answers": [
      "Die Hilfe verfolgte auch politische und wirtschaftliche Interessen",
      "Es wurden nur Waffen geliefert",
      "Es gab keinerlei Wiederaufbauhilfe",
      "Das Programm wurde von Stalin geleitet"
    ],
    "note": "Wiederaufbau und die Stärkung westlicher Bindungen gehörten zusammen.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre.html",
    "subject": "after"
  },
  {
    "id": "hard-cw-6",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welche Entwicklung ging der Berlin-Blockade unmittelbar voraus?",
    "answers": [
      "Die Währungsreform in den Westzonen und Westsektoren",
      "Der Mauerfall",
      "Die Gründung des Warschauer Pakts",
      "Die Kubakrise"
    ],
    "note": "Der Währungsstreit verschärfte den Konflikt um Berlin.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlin-blockade-1948.html",
    "subject": "berlin"
  },
  {
    "id": "hard-cw-7",
    "cat": "coldwar",
    "tier": 0,
    "q": "Warum war die Luftbrücke politisch bedeutsam?",
    "answers": [
      "Sie hielt die Westmächte in Berlin präsent, ohne die Blockade militärisch zu durchbrechen",
      "Sie löste die DDR auf",
      "Sie machte Berlin zur NATO-Hauptstadt",
      "Sie beendete den Ost-West-Konflikt"
    ],
    "note": "Versorgung wurde zum Zeichen westlicher Entschlossenheit.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlin-blockade-1948.html",
    "subject": "berlin"
  },
  {
    "id": "hard-cw-8",
    "cat": "coldwar",
    "tier": 0,
    "q": "Welche Reihenfolge stimmt?",
    "answers": [
      "Berlin-Blockade – Mauerbau – Kubakrise",
      "Kubakrise – Mauerbau – Berlin-Blockade",
      "Mauerbau – Kubakrise – Berlin-Blockade",
      "Berlin-Blockade – Kubakrise – Mauerbau"
    ],
    "note": "Die Ereignisse gehören zu 1948/49, 1961 und 1962.",
    "source": "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlin-blockade-1948.html",
    "subject": "berlin"
  },
  {
    "id": "hard-cw-9",
    "cat": "coldwar",
    "tier": 0,
    "q": "Warum belastete die Fluchtbewegung die DDR-Wirtschaft?",
    "answers": [
      "Viele junge und qualifizierte Arbeitskräfte gingen verloren",
      "Alle Betriebe wurden nach Kuba verlegt",
      "Die DDR hatte keinen Außenhandel",
      "Die Bevölkerung verdoppelte sich sofort"
    ],
    "note": "Abwanderung verschärfte wirtschaftliche und gesellschaftliche Probleme.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/flucht-und-notaufnahme.html",
    "subject": "flight"
  },
  {
    "id": "hard-cw-10",
    "cat": "coldwar",
    "tier": 0,
    "q": "Wie ist die SED-Bezeichnung der Mauer als „antifaschistischer Schutzwall“ zu beurteilen?",
    "answers": [
      "Als Rechtfertigung, die das Verhindern der Flucht verdeckte",
      "Als sachlich vollständige Erklärung",
      "Als westdeutscher Gesetzestitel",
      "Als Name eines NATO-Plans"
    ],
    "note": "Quellenbegriffe müssen auf ihre politische Funktion geprüft werden.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html",
    "subject": "wall"
  },
  {
    "id": "hard-cw-11",
    "cat": "coldwar",
    "tier": 1,
    "q": "Welche Folge hatte der Mauerbau für den Alltag?",
    "answers": [
      "Familien, Verkehrswege und Arbeitsverbindungen wurden getrennt",
      "Alle Reisebeschränkungen entfielen",
      "Berlin wurde sofort wiedervereinigt",
      "Ost und West erhielten dieselbe Regierung"
    ],
    "note": "Die Grenze griff unmittelbar in das Leben der Menschen ein.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/mauerbau/13-august-1961-mauerbau.html",
    "subject": "wall"
  },
  {
    "id": "hard-cw-12",
    "cat": "coldwar",
    "tier": 1,
    "q": "Warum bedrohten Raketen auf Kuba die USA besonders?",
    "answers": [
      "Kuba liegt nahe am amerikanischen Festland",
      "Kuba grenzt an Alaska",
      "Kuba lag im Zentrum Europas",
      "Kuba war damals ein US-Bundesstaat"
    ],
    "note": "Die Stationierung verschärfte die militärische Bedrohungslage.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  },
  {
    "id": "hard-cw-13",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was gehörte zur Beilegung der Kubakrise?",
    "answers": [
      "Sowjetischer Raketenabzug aus Kuba und amerikanischer aus der Türkei",
      "Sofortige deutsche Einheit",
      "Auflösung der UNO",
      "Sowjetische Besetzung Washingtons"
    ],
    "note": "Die Einigung beruhte auf Zugeständnissen beider Seiten.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  },
  {
    "id": "hard-cw-14",
    "cat": "coldwar",
    "tier": 1,
    "q": "Welche Lehre förderte die Kubakrise?",
    "answers": [
      "Krisenkommunikation und Verhandlungen sind lebenswichtig",
      "Atomkrieg sei gefahrlos",
      "Diplomatie sei grundsätzlich nutzlos",
      "Wirtschaft ersetze jede Außenpolitik"
    ],
    "note": "Beide Seiten erkannten die Gefahr unkontrollierter Eskalation.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg/kuba-krise.html",
    "subject": "cuba"
  },
  {
    "id": "hard-cw-15",
    "cat": "coldwar",
    "tier": 1,
    "q": "Warum war die Bundesrepublik 1955 nicht neutral?",
    "answers": [
      "Sie trat dem westlichen Militärbündnis bei",
      "Sie gehörte beiden Bündnissen gleichzeitig an",
      "Sie war ein Teil der Sowjetunion",
      "Sie hatte sämtliche Außenbeziehungen abgebrochen"
    ],
    "note": "Der NATO-Beitritt war ein zentraler Schritt der Westbindung.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-westen/militaerallianzen",
    "subject": "nato"
  },
  {
    "id": "hard-cw-16",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was bedeutet die Beistandsidee eines Verteidigungsbündnisses?",
    "answers": [
      "Mitglieder unterstützen sich im Angriffsfall",
      "Jedes Mitglied führt immer allein Krieg",
      "Alle Mitglieder werden ein einziger Staat",
      "Jeder Streit führt automatisch zum Atomkrieg"
    ],
    "note": "Beistand ist nicht mit einer automatischen atomaren Antwort gleichzusetzen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/weg-nach-westen/militaerallianzen",
    "subject": "nato"
  },
  {
    "id": "hard-cw-17",
    "cat": "coldwar",
    "tier": 1,
    "q": "Warum bedeutete Entspannung nicht das Ende des Systemgegensatzes?",
    "answers": [
      "Zusammenarbeit war trotz verschiedener politischer Ordnungen möglich",
      "Alle Staaten führten dieselbe Verfassung ein",
      "Die Sowjetunion trat der NATO bei",
      "Die DDR wurde 1972 aufgelöst"
    ],
    "note": "Annäherung sollte Konflikte beherrschbarer machen.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik.html",
    "subject": "ost"
  },
  {
    "id": "hard-cw-18",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was war ein Ziel der neuen Ostpolitik?",
    "answers": [
      "Kontakte und praktische Erleichterungen trotz Teilung",
      "Sofortige Eroberung der DDR",
      "Verbot aller Verhandlungen",
      "Abbruch sämtlicher Beziehungen zu Polen"
    ],
    "note": "Die Politik setzte auf Vereinbarungen statt ausschließlicher Konfrontation.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik.html",
    "subject": "ost"
  },
  {
    "id": "hard-cw-19",
    "cat": "coldwar",
    "tier": 1,
    "q": "Warum richteten Bundesrepublik und DDR Ständige Vertretungen ein?",
    "answers": [
      "Die Bundesrepublik vermied normale Botschaftsbeziehungen zwischen zwei ausländischen Staaten",
      "Botschaften waren weltweit verboten",
      "Es gab keine Hauptstädte",
      "Beide Staaten waren bereits vereint"
    ],
    "note": "Die Bundesrepublik hielt an einer besonderen innerdeutschen Beziehung fest.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik/grundlagenvertrag",
    "subject": "treaty"
  },
  {
    "id": "hard-cw-20",
    "cat": "coldwar",
    "tier": 1,
    "q": "Was blieb für die Bundesrepublik trotz Grundlagenvertrag ein Ziel?",
    "answers": [
      "Die Wiedervereinigung",
      "Die Abschaffung des Grundgesetzes",
      "Der Beitritt zum Warschauer Pakt",
      "Die Auflösung aller Länder"
    ],
    "note": "Geregelte Beziehungen bedeuteten keinen Verzicht auf die Einheit.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-modernisierung/neue-ostpolitik/grundlagenvertrag",
    "subject": "treaty"
  },
  {
    "id": "hard-cw-21",
    "cat": "coldwar",
    "tier": 2,
    "q": "Warum half die KSZE-Schlussakte oppositionellen Gruppen?",
    "answers": [
      "Sie konnten sich auf zugesagte Menschenrechte berufen",
      "Sie erhielten automatisch Regierungsämter",
      "Sie durfte nur im Westen gelesen werden",
      "Sie verbot Kritik an Regierungen"
    ],
    "note": "Der Widerspruch zwischen Zusage und Wirklichkeit wurde politisch nutzbar.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung/ksze.html",
    "subject": "ksze"
  },
  {
    "id": "hard-cw-22",
    "cat": "coldwar",
    "tier": 2,
    "q": "Welche Aussage über die KSZE-Schlussakte stimmt?",
    "answers": [
      "Sie war eine politische Verpflichtung, keine automatische Garantie ihrer Umsetzung",
      "Sie hob alle Grenzen auf",
      "Sie vereinigte NATO und Warschauer Pakt",
      "Sie schaffte die SED sofort ab"
    ],
    "note": "Die tatsächliche Einhaltung blieb umkämpft.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung/ksze.html",
    "subject": "ksze"
  },
  {
    "id": "hard-cw-23",
    "cat": "coldwar",
    "tier": 2,
    "q": "Warum wollte Gorbatschow Reformen anstoßen?",
    "answers": [
      "Er reagierte auf wirtschaftliche und gesellschaftliche Probleme",
      "Er wollte die Monarchie zurückholen",
      "Er wollte den Marshallplan 1947 verhindern",
      "Er wollte die Berliner Blockade beginnen"
    ],
    "note": "Sein Reformprojekt sollte das sozialistische System zunächst erneuern.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten/glasnost-und-perestroika.html",
    "subject": "reform"
  },
  {
    "id": "hard-cw-24",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was bewirkte die Gründung des Warschauer Pakts 1955?",
    "answers": [
      "Sie festigte die militärische Blockbildung in Europa",
      "Sie machte alle Mitgliedstaaten bündnisfrei",
      "Sie vereinigte beide deutschen Staaten",
      "Sie löste die NATO auf"
    ],
    "note": "Die UdSSR sicherte damit auch ihren Einfluss auf ihre Verbündeten.",
    "source": "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321391/warschauer-pakt/",
    "subject": "pact"
  },
  {
    "id": "hard-cw-25",
    "cat": "coldwar",
    "tier": 2,
    "q": "Warum war der Abbau der ungarisch-österreichischen Grenzsperren 1989 wichtig?",
    "answers": [
      "Er eröffnete DDR-Bürgern neue Fluchtmöglichkeiten",
      "Er vereinigte Österreich und Ungarn",
      "Er beendete den Koreakrieg",
      "Er schuf die Berliner Mauer"
    ],
    "note": "Flucht über andere Staaten verstärkte den Druck auf die DDR.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten.html",
    "subject": "change"
  },
  {
    "id": "hard-cw-26",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was unterscheidet Maueröffnung und Wiedervereinigung?",
    "answers": [
      "Grenzöffnung und staatliche Vereinigung sind verschiedene Schritte",
      "Beides geschah am selben Tag",
      "Die Einheit fand vor dem Mauerbau statt",
      "Die Maueröffnung schaffte alle Staaten ab"
    ],
    "note": "Zwischen der Öffnung 1989 und der Einheit 1990 lagen politische Verhandlungen.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/weg-zur-einheit",
    "subject": "end"
  },
  {
    "id": "hard-cw-27",
    "cat": "coldwar",
    "tier": 2,
    "q": "Welche Rolle spielte die freie Volkskammerwahl 1990?",
    "answers": [
      "Ihr Ergebnis stärkte den Weg zur deutschen Einheit",
      "Sie gründete die NATO",
      "Sie verlängerte Stalins Herrschaft",
      "Sie führte erstmals die Mauer ein"
    ],
    "note": "Demokratische Entscheidungen prägten den weiteren Einigungsprozess.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/weg-zur-einheit",
    "subject": "end"
  },
  {
    "id": "hard-cw-28",
    "cat": "coldwar",
    "tier": 2,
    "q": "Warum ist „Gorbatschow allein verursachte die Wende“ zu einfach?",
    "answers": [
      "Reformen, Proteste, Flucht und strukturelle Probleme wirkten zusammen",
      "In der DDR gab es keine Proteste",
      "Die Wirtschaft spielte keine Rolle",
      "Alle Veränderungen wurden 1949 beschlossen"
    ],
    "note": "Historische Umbrüche haben meist mehrere Ursachen und Akteure.",
    "source": "https://www.hdg.de/lemo/kapitel/deutsche-einheit/wandel-im-osten.html",
    "subject": "change"
  },
  {
    "id": "hard-cw-29",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was zeigt die neue Konfrontation um 1980?",
    "answers": [
      "Entspannung war kein unumkehrbarer Prozess",
      "Der Kalte Krieg war bereits 1975 vollständig beendet",
      "Beide Bündnisse existierten nicht mehr",
      "Alle Atomwaffen waren abgeschafft"
    ],
    "note": "Afghanistan, Polen und Rüstungspolitik verschärften die Spannungen erneut.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-krisenmanagement/konfrontation-und-annaeherung.html",
    "subject": "confrontation"
  },
  {
    "id": "hard-cw-30",
    "cat": "coldwar",
    "tier": 2,
    "q": "Was zeigt der sowjetische Satellitenstart 1957 über den Kalten Krieg?",
    "answers": [
      "Der Wettbewerb betraf auch Technik und Prestige",
      "Er war ausschließlich ein Landkrieg",
      "Wissenschaft spielte keine Rolle",
      "Beide Blöcke betrieben keine Propaganda"
    ],
    "note": "Erfolge im Weltraum dienten auch als Zeichen der Systemstärke.",
    "source": "https://www.hdg.de/lemo/kapitel/geteiltes-deutschland-gruenderjahre/kalter-krieg.html",
    "subject": "war"
  }
];
