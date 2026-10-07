// Correct answer is first in source; all choices are shuffled for play.
const BANK=[];
function add(cat,tier,rows,source){rows.forEach(r=>BANK.push({id:BANK.length,cat,tier,q:r[0],answers:r.slice(1,5),note:r[5],source}));}
add('lucas',0,[
['Wie heißt der angehende Pirat aus Monkey Island?','Guybrush Threepwood','Ben Throttle','Manny Calavera','Bernard Bernoulli','Guybrush ist der Held der klassischen Monkey-Island-Adventures.'],
['Welcher Pirat ist Guybrushs großer Gegenspieler?','LeChuck','Calypso','Sordid','Dr. Fred','LeChuck kehrt in unterschiedlichen untoten Gestalten zurück.'],
['Welche Farbe hat das machthungrige Tentakel in Day of the Tentacle?','Purpur','Gelb','Blau','Weiß','Purpur-Tentakel will die Weltherrschaft übernehmen.'],
['Welches Tier ist Sam aus Sam & Max?','Ein Hund','Ein Hase','Eine Katze','Ein Fuchs','Sam ist der Hund im Anzug; Max sein hasenartiger Partner.'],
['Welchen Beruf hat Indiana Jones?','Archäologe','Pilot','Journalist','Schmied','Archäologie führt Indy auch in seinen Adventures zu alten Geheimnissen.'],
['Was fährt Ben in Full Throttle hauptsächlich?','Motorrad','Segelboot','Raumschiff','Rennrad','Full Throttle heißt auf Deutsch auch Vollgas.'],
['In welchem Spiel begegnet man Manny Calavera?','Grim Fandango','Loom','The Dig','Zak McKracken','Manny arbeitet im Reich der Toten.'],
['Was möchte Guybrush zu Beginn seines ersten Spiels werden?','Pirat','König','Zauberer','Detektiv','Sein Ziel steht gleich zu Beginn fest: Er will Pirat werden.']
], 'https://www.lucasfilm.com/games/');
add('lucas',1,[
['Wer ist die Gouverneurin von Mêlée Island in The Secret of Monkey Island?','Elaine Marley','Laverne','Sophia Hapgood','Maureen Corley','Elaine Marley wird zu einer zentralen Figur der Reihe.'],
['Wie heißt die Bar der Piratenanführer im ersten Monkey Island?','Scumm Bar','Blue Casket','The Kickstand','Mos Eisley Cantina','In der Scumm Bar erhält Guybrush seine drei Prüfungen.'],
['Welche drei Figuren steuert man in Day of the Tentacle?','Bernard, Hoagie und Laverne','Dave, Sam und Max','Guybrush, Elaine und LeChuck','Ben, Manny und Bobbin','Die drei Freunde landen in unterschiedlichen Zeiten.'],
['Wie heißen die Zeitmaschinen in Day of the Tentacle?','Chron-o-Johns','Time-o-Matics','Flux Cabinets','Temporal Pods','Die Zeitmaschinen haben die Form von Toilettenkabinen.'],
['Welches ältere Spiel ist in Day of the Tentacle spielbar?','Maniac Mansion','Loom','The Dig','Zak McKracken','Über einen Computer im Haus lässt sich Maniac Mansion starten.'],
['Welche verschollene Stadt sucht Indy in Fate of Atlantis?','Atlantis','Troja','El Dorado','Pompeji','Der Titel verrät das Ziel dieser Indiana-Jones-Geschichte.'],
['Welches Instrument der Magie benutzt Bobbin in Loom?','Einen Spinnrocken','Eine Kristallkugel','Ein Zauberbuch','Einen Spiegel','Mit dem magischen Spinnrocken wirkt Bobbin Melodiezauber.'],
['Wie heißt Bens Motorradgang in Full Throttle?','Polecats','Roadrunners','Vultures','Black Widows','Ben führt die Polecats an.']
], 'https://www.lucasfilm.com/games/');
add('lucas',2,[
['Wie heißt der Held von Loom mit vollem Namen?','Bobbin Threadbare','Boston Low','Ludger Brink','Rex Nebular','Bobbin Threadbare gehört zur Gilde der Weber.'],
['Wie heißt der Astronaut, den man in The Dig steuert?','Boston Low','Ludger Brink','Michael Dread','Bruno Hamzel','Commander Boston Low führt die Expedition an.'],
['Welche Gegenstände liefern atlantischen Maschinen in Fate of Atlantis Energie?','Orichalcum-Perlen','Goldene Dublonen','Imperiale Credits','Silberne Taler','Die Orichalcum-Perlen versorgen atlantische Mechanismen mit Energie.'],
['Wie heißt Indys Begleiterin in Fate of Atlantis?','Sophia Hapgood','Marion Ravenwood','Elaine Marley','Maggie Robbins','Sophia Hapgood ist eine ehemalige Archäologin und ein Medium.'],
['Wer ist der riesige, vermisste Bigfoot in Sam & Max Hit the Road?','Bruno','Conroy','Chester','Doug','Die Suche nach Bruno setzt die Reise in Gang.'],
['Wie heißt Mannys dämonischer Fahrer in Grim Fandango?','Glottis','Domino','Hector','Salvador','Glottis liebt Motoren und ist Mannys treuer Begleiter.'],
['Welche Insel ist Guybrushs Ausgangspunkt in Monkey Island 2?','Scabb Island','Plunder Island','Blood Island','Booty Island','Scabb Island ist die erste Insel in LeChuck’s Revenge.'],
['Wodurch wird Elaine zu Beginn von The Curse of Monkey Island verflucht?','Durch einen Diamantring','Durch einen Spiegel','Durch eine Spieluhr','Durch einen Kompass','Der verfluchte Ring verwandelt Elaine in eine Goldstatue.'],
['Wer ist der Reporter und Titelheld eines Lucasfilm-Adventures von 1988?','Zak McKracken','Bernard Bernoulli','Boston Low','Manny Calavera','Zak McKracken and the Alien Mindbenders erschien 1988.']
], 'https://www.lucasfilm.com/games/');
add('star',0,[
['Wer ist Luke Skywalkers Vater?','Darth Vader','Obi-Wan Kenobi','Han Solo','Mace Windu','Darth Vader ist Anakin Skywalker, Lukes Vater.'],
['Wie heißt Han Solos Wookiee-Copilot?','Chewbacca','Jabba','Yoda','Wicket','Chewbacca begleitet Han an Bord des Millennium Falken.'],
['Welche Waffe ist typisch für Jedi?','Lichtschwert','Armbrust','Dreizack','Flammenwerfer','Lichtschwerter sind die charakteristischen Waffen der Jedi.'],
['Welcher kleine grüne Jedi bildet Luke auf Dagobah aus?','Yoda','Jabba','Watto','Greedo','Luke wird auf Dagobah von Yoda unterrichtet.'],
['Welcher goldene Droide begleitet R2-D2?','C-3PO','BB-8','K-2SO','IG-88','C-3PO ist ein Protokolldroide.'],
['Wie heißt die gewaltige Kampfstation des Imperiums in Episode IV?','Todesstern','Starkiller-Basis','Wolkenstadt','Sternenfestung','Der erste Todesstern kann ganze Planeten zerstören.'],
['Welches Raumschiff fliegt Han Solo?','Millennium Falke','Tantive IV','Sklave I','Sternenzerstörer','Der Millennium Falke ist Hans berühmter Frachter.'],
['Wie lautet der Name von Lukes Zwillingsschwester?','Leia','Padmé','Rey','Jyn','Luke und Leia sind die Kinder von Anakin und Padmé.']
], 'https://www.starwars.com/databank');
add('star',1,[
['Auf welchem Eisplaneten liegt die Rebellenbasis in Episode V?','Hoth','Endor','Naboo','Jakku','Das Imperium greift die Echo-Basis auf Hoth an.'],
['Welcher Planet wird in Episode IV vom Todesstern zerstört?','Alderaan','Coruscant','Tatooine','Mustafar','Leia muss die Zerstörung ihrer Heimat Alderaan mitansehen.'],
['Wer tötet Qui-Gon Jinn in Episode I?','Darth Maul','Count Dooku','Darth Sidious','General Grievous','Qui-Gon unterliegt Darth Maul im Duell auf Naboo.'],
['Auf welchem Planeten wird die Klonarmee hergestellt?','Kamino','Geonosis','Utapau','Kashyyyk','Obi-Wan entdeckt die Klonarmee auf Kamino.'],
['Welcher Befehl löst die Verfolgung der Jedi durch die Klone aus?','Order 66','Order 99','Order 37','Order 1138','Palpatine aktiviert Order 66 in Episode III.'],
['Wer ist der genetische Spender für die Klonarmee?','Jango Fett','Boba Fett','Han Solo','Wilhuff Tarkin','Die Klone basieren auf Jango Fett.'],
['Wo duellieren sich Obi-Wan und Anakin am Ende von Episode III?','Mustafar','Naboo','Hoth','Dagobah','Das Duell findet auf dem Vulkanplaneten Mustafar statt.'],
['In welchem Material wird Han Solo in Episode V eingefroren?','Karbonit','Beskar','Durastahl','Kyber','Han wird in der Wolkenstadt in Karbonit eingefroren.']
], 'https://www.starwars.com/databank');
add('star',2,[
['Wie heißt Count Dooku als Sith?','Darth Tyranus','Darth Plagueis','Darth Bane','Darth Nihilus','Dookus Sith-Name lautet Darth Tyranus.'],
['Welche Kennung trägt Leias Gefängniszelle in Episode IV?','2187','1138','327','421','Leia wird im Haftblock des Todessterns in Zelle 2187 festgehalten.'],
['Wie heißt der Planet, auf dem Obi-Wan General Grievous in Episode III stellt?','Utapau','Felucia','Saleucami','Mygeeto','Obi-Wan spürt Grievous auf Utapau auf.'],
['Wie heißt der Toydarianer, dem Anakin zu Beginn von Episode I gehört?','Watto','Sebulba','Boss Nass','Nute Gunray','Watto betreibt einen Ersatzteilladen auf Tatooine.'],
['Welchen Decknamen verwendet Leia bei der Rettungsaktion in Jabbas Palast?','Boushh','Bane','Bodhi','Biggs','Leia verkleidet sich als der Kopfgeldjäger Boushh.'],
['Welche Spezies hilft den Rebellen auf dem Waldmond in Episode VI?','Ewoks','Wookiees','Gungans','Jawas','Die Ewoks helfen beim Kampf um den Schildgenerator.'],
['Wie heißt die Heimatwelt von Chewbacca?','Kashyyyk','Kessel','Corellia','Dantooine','Die Wookiees stammen von Kashyyyk.'],
['Wie heißt der Kristallplanet des letzten Gefechts in Episode VIII?','Crait','Exegol','Ahch-To','Takodana','Unter der weißen Salzschicht von Crait liegt rotes Mineral.'],
['Wer entwirft in Rogue One die Schwachstelle des Todessterns?','Galen Erso','Orson Krennic','Bail Organa','Cassian Andor','Galen Erso sabotiert die Konstruktion des Todessterns von innen.']
], 'https://www.starwars.com/databank');
add('simon',0,[
['Wie heißt der junge Held von Simon the Sorcerer?','Simon','Rincewind','Gandalf','Merlin','Simon ist ein Jugendlicher aus unserer Welt.'],
['Welches Kleidungsstück gehört zu Simons bekanntem Outfit?','Ein spitzer Zauberhut','Ein Wikingerhelm','Eine Baseballkappe','Eine Krone','Sein großer spitzer Hut ist Simons Markenzeichen.'],
['Wer ist Simons böser Gegenspieler in den ersten beiden Spielen?','Sordid','LeChuck','Calypso','Rincewind','Sordid ist der zentrale Gegenspieler.'],
['Zu welchem Genre gehören Simon the Sorcerer 1 und 2?','Point-and-Click-Adventure','Rennspiel','Echtzeitstrategie','Jump ’n’ Run','Dialoge, Gegenstände und Rätsel stehen im Mittelpunkt.'],
['Welche Art Welt erkundet Simon in Teil 1 hauptsächlich?','Eine magische Fantasywelt','Eine Unterwasserstation','Eine moderne Großstadt','Eine Raumkolonie','Simon begegnet Zauberern und zahlreichen Märchenwesen.'],
['Womit löst man viele Rätsel in beiden Simon-Spielen?','Mit eingesammelten Gegenständen','Mit Rennzeiten','Mit Fußballtoren','Mit Bauplänen für Fabriken','Gegenstände werden gesammelt und an passenden Stellen eingesetzt.'],
['Was prägt Simons Kommentare besonders?','Sarkasmus','Feierliche Ritterlichkeit','Ständige Reime','Militärischer Gehorsam','Simon kommentiert seine Umgebung oft bissig und sarkastisch.'],
['Welches Möbelstück dient in Teil 2 als magisches Transportmittel?','Ein Kleiderschrank','Ein Schaukelstuhl','Ein Schreibtisch','Eine Kommode','Ein verzauberter Kleiderschrank bringt Simon zurück in die Fantasywelt.']
], 'https://en.wikipedia.org/wiki/Simon_the_Sorcerer');
add('simon',1,[
['Wie heißt Simons Hund?','Chippy','Rufus','Max','Bruno','Chippy führt Simon im ersten Spiel zum Portal.'],
['Welchen guten Zauberer soll Simon in Teil 1 retten?','Calypso','Sordid','Runt','Merlin','Calypso benötigt Simons Hilfe gegen Sordid.'],
['Wer entwickelte die ersten beiden Simon-Spiele?','Adventure Soft','LucasArts','Sierra On-Line','Revolution Software','Simon the Sorcerer stammt von Adventure Soft.'],
['In welchem Jahr erschien der erste Simon the Sorcerer ursprünglich?','1993','1987','1998','2001','Das erste Spiel erschien 1993.'],
['Wer wird in Teil 2 Sordids Gehilfe?','Runt','Chippy','Calypso','Guybrush','Runt hilft Sordid bei seiner Rückkehr.'],
['Wo landet Simon zu Beginn von Teil 2 mit dem Zauberschrank?','Bei Calypsos Laden','In Jabbas Palast','In einer Piratenbar','In seinem Klassenzimmer','Der Schrank bringt ihn zu Calypsos Magieladen.'],
['Was öffnet im ersten Spiel den Zugang zur anderen Welt?','Ein magisches Buch','Ein Computerspiel','Ein Fernsehgerät','Eine Taschenuhr','Das Zauberbuch öffnet ein Portal, durch das Chippy springt.'],
['In welchem Jahr erschien Simon the Sorcerer II ursprünglich?','1995','1991','1999','2003','Der zweite Teil folgte 1995.']
], 'https://en.wikipedia.org/wiki/Simon_the_Sorcerer_II%3A_The_Lion%2C_the_Wizard_and_the_Wardrobe');
add('simon',2,[
['Wie lautet der englische Untertitel von Simon the Sorcerer II?','The Lion, the Wizard and the Wardrobe','The Secret of the Golden Hat','The Wizard and the Dragon','The Curse of the Magic Book','Der Untertitel spielt auf C. S. Lewis’ Narnia-Roman an.'],
['Welches Erz sucht Simon in Teil 1 für den Holzfäller?','Milrith','Orichalcum','Beskar','Adamantium','Der Holzfäller benötigt Milrith für einen neuen Axtkopf.'],
['Welches Hilfsmittel erhält Simon in Teil 1 vom Holzfäller?','Einen Metalldetektor','Einen Kompass','Ein Fernglas','Einen Dietrich','Der Metalldetektor hilft bei der Suche nach Milrith.'],
['Welche Holzart bevorzugen die Holzwürmer in Teil 1?','Mahagoni','Birke','Kiefer','Weide','Mahagoni lockt die Holzwürmer an.'],
['Was verbirgt sich in Teil 1 unter der Truhe im Haus des Sumpflings?','Eine Falltür','Ein Goldschatz','Eine Kristallkugel','Ein Brunnen','Nach dem Verschieben der Truhe lässt sich die Falltür öffnen.'],
['Was bietet der Sumpfling Simon in Teil 1 hartnäckig an?','Eintopf','Zaubertränke','Gebratene Kastanien','Schokoladenkuchen','Der Sumpfling bewirtet Simon mit seinem Eintopf.'],
['Wie heißt der gesuchte Zauberschrank-Treibstoff im englischen Teil 2?','Mucusade','Grog','Orichalcum','Moonshine','Im englischen Original heißt der Treibstoff Mucusade.'],
['Was geschieht gegen Ende von Teil 2 zwischen Simon und Sordid?','Sie tauschen die Körper','Sie gründen eine Schule','Sie werden Brüder','Sie verlieren beide ihr Gedächtnis','Sordid übernimmt Simons Körper; das Ende bleibt offen.'],
['Wer wird am Ende von Teil 2 in Simons Gestalt in dessen Welt geschickt?','Sordid','Runt','Calypso','Der Sumpfling','Calypso bemerkt den Körpertausch zu spät.']
], 'https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2');

BANK.forEach(q=>{if(q.cat==='simon' && q.tier===2 && /Erz|Holzfäller|Holzart|Truhe|Eintopf/.test(q.q)) q.source='https://adventuregamers.com/walkthroughs/simon-the-sorcerer1';});

// Expert-only pool: correct answer first; never mixed into classic rounds.
const HARD_BANK=[
  {
    "id": "hard-0",
    "cat": "lucas",
    "tier": 0,
    "q": "Monkey Island 2, schwerer Modus: Was dient Captain Dread als Ersatz für seine verlorene Glückskette?",
    "answers": [
      "Wallys Monokel",
      "Largos Toupet",
      "Ein goldener Ohrring",
      "Eine Leuchtturmlinse"
    ],
    "note": "Dread akzeptiert Wallys Monokel.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-1",
    "cat": "lucas",
    "tier": 0,
    "q": "Day of the Tentacle: Welche drei Stoffe braucht Red Edison für seine Batterie?",
    "answers": [
      "Öl, Essig und Gold",
      "Öl, Wein und Silber",
      "Wasser, Salz und Gold",
      "Essig, Quecksilber und Kupfer"
    ],
    "note": "Red benötigt Öl, Essig und Gold.",
    "source": "https://www.swordsandsoftware.com/dott.php"
  },
  {
    "id": "hard-2",
    "cat": "lucas",
    "tier": 0,
    "q": "Monkey Island 2, schwerer Modus: Womit stellt Guybrush die Pumpe am Wasserfall ab?",
    "answers": [
      "Mit dem Affen Jojo",
      "Mit einem verbogenen Nagel",
      "Mit Stans Gehstock",
      "Mit einer Sargkurbel"
    ],
    "note": "Jojo wird als lebender Schraubenschlüssel eingesetzt.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-3",
    "cat": "lucas",
    "tier": 1,
    "q": "Day of the Tentacle: Wer nimmt Hoagies Weinflasche für die Zeitkapsel entgegen?",
    "answers": [
      "Thomas Jefferson",
      "Benjamin Franklin",
      "George Washington",
      "John Hancock"
    ],
    "note": "Jefferson verwahrt den Wein in seiner Zeitkapsel.",
    "source": "https://www.swordsandsoftware.com/dott.php"
  },
  {
    "id": "hard-4",
    "cat": "lucas",
    "tier": 1,
    "q": "Monkey Island 2, schwerer Modus: Was tauscht der Antiquitätenhändler gegen sein Kartenstück ein?",
    "answers": [
      "Die Galionsfigur der Mad Monkey",
      "Den Pokal des Spuckwettbewerbs",
      "Die Leuchtturmlinse",
      "Das Fernrohr aus dem Baumhaus"
    ],
    "note": "Die gesuchte Galionsfigur stammt vom Wrack der Mad Monkey.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-5",
    "cat": "lucas",
    "tier": 1,
    "q": "Day of the Tentacle: Was wirft Hoagie in den Vorschlagskasten für die Verfassung?",
    "answers": [
      "Eine Staubsaugerwerbung",
      "Einen Batteriebauplan",
      "Einen Hotelprospekt",
      "Eine Zigarrenwerbung"
    ],
    "note": "Die Werbung macht Staubsauger zur gesetzlichen Pflicht.",
    "source": "https://www.swordsandsoftware.com/dott.php"
  },
  {
    "id": "hard-6",
    "cat": "lucas",
    "tier": 2,
    "q": "Monkey Island 2, schwerer Modus: Welche Regel löst das Fingerspiel vor dem Glücksspielraum?",
    "answers": [
      "Die zuerst gezeigten Finger zählen",
      "Die zuletzt gezeigten Finger zählen",
      "Beide Fingerzahlen addieren",
      "Die genannte Zahl verdoppeln"
    ],
    "note": "Entscheidend ist die zuerst gezeigte Fingerzahl.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-7",
    "cat": "lucas",
    "tier": 2,
    "q": "Monkey Island 2, schwerer Modus: Was muss Guybrush für den wiederbelebten Toten am Strand erledigen?",
    "answers": [
      "Den Herd in dessen Hütte abstellen",
      "Das Fenster der Hütte schließen",
      "Den Papagei füttern",
      "Die Hütte abschließen"
    ],
    "note": "Erst nach dem Abstellen des Herds erhält Guybrush das Kartenstück.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-8",
    "cat": "lucas",
    "tier": 2,
    "q": "Monkey Island 2, schwerer Modus: Welche Kombination weist im Haus hinter dem Wasserfall den richtigen Ziegel?",
    "answers": [
      "Fernrohr, Statue und Spiegel",
      "Monokel, Kerze und Fenster",
      "Linse, Kompass und Spiegel",
      "Fernrohr, Laterne und Uhr"
    ],
    "note": "Das Fernrohr in der Statue lenkt Licht über den Spiegel.",
    "source": "https://www.hubbe.net/~/hubbe/monkey2.html"
  },
  {
    "id": "hard-9",
    "cat": "lucas",
    "tier": 2,
    "q": "Day of the Tentacle: Wie heißt die Weinflasche, aus der später Essig wird?",
    "answers": [
      "Chateau de Cheapaux 1775",
      "Chateau de Tentacle 1789",
      "Chateau Edison 1800",
      "Chateau de Chrono 1776"
    ],
    "note": "Das Etikett lautet Chateau de Cheapaux 1775.",
    "source": "https://gamefaqs.gamespot.com/pc/564903-maniac-mansion-day-of-the-tentacle/faqs/51983"
  },
  {
    "id": "hard-10",
    "cat": "simon",
    "tier": 0,
    "q": "Simon 1: Womit bringt Simon das Sousaphon des Musikers zum Verstummen?",
    "answers": [
      "Mit einer Wassermelone",
      "Mit Bienenwachs",
      "Mit einem Wollknäuel",
      "Mit Sumpfeintopf"
    ],
    "note": "Simon verstopft das Instrument mit einer Wassermelone.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1"
  },
  {
    "id": "hard-11",
    "cat": "simon",
    "tier": 0,
    "q": "Simon 1: Womit verstopft Simon den Zapfhahn des Bierfasses?",
    "answers": [
      "Bienenwachs",
      "Baumharz",
      "Lehm",
      "Käse"
    ],
    "note": "Das Wachs täuscht dem Wirt ein leeres Fass vor.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1"
  },
  {
    "id": "hard-12",
    "cat": "simon",
    "tier": 0,
    "q": "Simon 2: Welches Werkzeug erhält Simon nach der Rechenhilfe beim Eisenhändler?",
    "answers": [
      "Ein Brecheisen für Linkshänder",
      "Eine Säge für Linkshänder",
      "Einen Hammer ohne Stiel",
      "Einen rostigen Schraubenschlüssel"
    ],
    "note": "Die Belohnung ist ein Linkshänder-Brecheisen.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-13",
    "cat": "simon",
    "tier": 1,
    "q": "Simon 1: Womit schiebt Simon den Schlüssel im Goblinlager aus dem Schloss?",
    "answers": [
      "Mit einem Rattenknochen",
      "Mit einer Feder",
      "Mit einem Nagel",
      "Mit einem Kletterhaken"
    ],
    "note": "Ein Rattenknochen drückt den Schlüssel heraus.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1"
  },
  {
    "id": "hard-14",
    "cat": "simon",
    "tier": 1,
    "q": "Simon 2: Was trägt Simon, um als Mitglied in die verrückte Gesellschaft aufgenommen zu werden?",
    "answers": [
      "Haferbrei",
      "Eine goldene Perücke",
      "Einen Schlauch als Gürtel",
      "Einen umgedrehten Kessel"
    ],
    "note": "Die Gesellschaft hat eine Stelle für einen Breiträger frei.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-15",
    "cat": "simon",
    "tier": 1,
    "q": "Simon 2: Wessen Brief legt Simon im Kreditbüro in den Eingangskorb?",
    "answers": [
      "Den der drei Bären",
      "Den von Calypso",
      "Den des Eisenhändlers",
      "Den von Goldlöckchen"
    ],
    "note": "Dadurch schickt das Büro seine Abrissleute zu den Bären.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-16",
    "cat": "simon",
    "tier": 2,
    "q": "Simon 1: Womit kitzelt Simon den schnarchenden Zwerg, um an den Schlüssel zu kommen?",
    "answers": [
      "Mit einer Feder",
      "Mit einem Grashalm",
      "Mit einem Rattenknochen",
      "Mit einem Pinsel"
    ],
    "note": "Die Feder bringt den Zwerg dazu, den Schlüssel freizugeben.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1"
  },
  {
    "id": "hard-17",
    "cat": "simon",
    "tier": 2,
    "q": "Simon 2: Wie heißt der Akkordeonspieler, den der geworfene Baseballschläger trifft?",
    "answers": [
      "Malcolm",
      "Cedric",
      "Mortimer",
      "Roderick"
    ],
    "note": "Der bisherige Tanzlehrer heißt Malcolm.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-18",
    "cat": "simon",
    "tier": 2,
    "q": "Simon 2: Wie viele Dollar entspricht ein Gold Sovereign im englischen Währungssystem?",
    "answers": [
      "15",
      "16",
      "45",
      "64"
    ],
    "note": "Drei Silver Sovereigns zu je fünf Dollar ergeben 15 Dollar.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-19",
    "cat": "simon",
    "tier": 2,
    "q": "Simon 2: Welcher Name steht auf der Visitenkarte des Scherzartikelhändlers?",
    "answers": [
      "Dr. J. Beagle",
      "Dr. M. Badger",
      "Prof. P. Fox",
      "Dr. B. Weasel"
    ],
    "note": "Die Visitenkarte nennt Dr. J. Beagle.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2"
  },
  {
    "id": "hard-20",
    "cat": "star",
    "tier": 0,
    "q": "Episode II: Wie heißt die leitende Bibliothekarin der Jedi-Archive?",
    "answers": [
      "Jocasta Nu",
      "Depa Billaba",
      "Yaddle",
      "Adi Gallia"
    ],
    "note": "Jocasta Nu leitet die Jedi-Archive.",
    "source": "https://www.starwars.com/databank/jocasta-nu"
  },
  {
    "id": "hard-21",
    "cat": "star",
    "tier": 0,
    "q": "Episode VI: Wie heißt der Pfleger von Jabbas Rancor?",
    "answers": [
      "Malakili",
      "Bib Fortuna",
      "Ree-Yees",
      "Ephant Mon"
    ],
    "note": "Malakili kümmert sich um Jabbas Tiere.",
    "source": "https://www.starwars.com/databank/malakili"
  },
  {
    "id": "hard-22",
    "cat": "star",
    "tier": 0,
    "q": "Episode V: Welchen Sternenzerstörer kommandiert Captain Needa?",
    "answers": [
      "Avenger",
      "Executor",
      "Devastator",
      "Tyrant"
    ],
    "note": "Needa kommandiert die Avenger.",
    "source": "https://www.starwars.com/databank/captain-needa"
  },
  {
    "id": "hard-23",
    "cat": "star",
    "tier": 1,
    "q": "Episode III: Wer warnt Obi-Wan auf Utapau heimlich vor Grievous?",
    "answers": [
      "Tion Medon",
      "Sio Bibble",
      "Mas Amedda",
      "San Hill"
    ],
    "note": "Der Hafenverwalter Tion Medon gibt Obi-Wan den Hinweis.",
    "source": "https://www.starwars.com/databank/tion-medon"
  },
  {
    "id": "hard-24",
    "cat": "star",
    "tier": 1,
    "q": "Episode VI: Zu welcher Spezies gehört Salacious B. Crumb?",
    "answers": [
      "Kowakianischer Echsenaffe",
      "Kubaz",
      "Chadra-Fan",
      "Snivvian"
    ],
    "note": "Jabbas lachender Begleiter ist ein kowakianischer Echsenaffe.",
    "source": "https://www.starwars.com/databank/salacious-crumb"
  },
  {
    "id": "hard-25",
    "cat": "star",
    "tier": 1,
    "q": "Episode I: Welcher Senator vertritt die Handelsföderation?",
    "answers": [
      "Lott Dod",
      "Daultay Dofine",
      "Rune Haako",
      "Nute Gunray"
    ],
    "note": "Lott Dod ist der Senator der Handelsföderation.",
    "source": "https://www.starwars.com/databank/lott-dod"
  },
  {
    "id": "hard-26",
    "cat": "star",
    "tier": 2,
    "q": "Episode I: Welcher Kapitän stirbt auf dem zerstörten Droidenkontrollschiff?",
    "answers": [
      "Daultay Dofine",
      "Rune Haako",
      "Lott Dod",
      "Nute Gunray"
    ],
    "note": "Daultay Dofine bleibt an Bord des Kontrollschiffs.",
    "source": "https://www.starwars.com/databank/daultay-dofine"
  },
  {
    "id": "hard-27",
    "cat": "star",
    "tier": 2,
    "q": "Episode II und III: Welcher Spezies gehört Palpatines blasse Beraterin Sly Moore an?",
    "answers": [
      "Umbaraner",
      "Kaminoaner",
      "Pau’an",
      "Arkanier"
    ],
    "note": "Sly Moore stammt aus dem Volk der Umbaraner.",
    "source": "https://www.starwars.com/databank/Sly-Moore"
  },
  {
    "id": "hard-28",
    "cat": "star",
    "tier": 2,
    "q": "Episode III: Auf welcher Ebene versteckt sich Grievous laut Tion Medon?",
    "answers": [
      "Auf der zehnten",
      "Auf der siebten",
      "Auf der zwölften",
      "Auf der fünfzehnten"
    ],
    "note": "Tion Medon nennt Obi-Wan die zehnte Ebene.",
    "source": "https://www.starwars.com/databank/tion-medon"
  },
  {
    "id": "hard-29",
    "cat": "star",
    "tier": 2,
    "q": "Episode III: Wie heißt das Reittier, das Obi-Wan auf Utapau auswählt?",
    "answers": [
      "Boga",
      "Bongo",
      "Bubo",
      "Bala"
    ],
    "note": "Obi-Wans Varactyl trägt den Namen Boga.",
    "source": "https://www.starwars.com/databank/utapau"
  }
];

// 8-bit and 16-bit classics; platforms are specified where versions differ.
BANK.push(...[
  {
    "id": "retro-0",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Bros. 3: Welches Power-up verleiht Mario Waschbärschwanz und Ohren?",
    "answers": [
      "Das Superblatt",
      "Die Feder",
      "Die Feuerblume",
      "Der Froschanzug"
    ],
    "note": "Das Superblatt verwandelt Mario in Waschbär-Mario.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-1",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Bros. 3: Welcher Anzug erleichtert das Schwimmen?",
    "answers": [
      "Froschanzug",
      "Hammeranzug",
      "Tanuki-Anzug",
      "Waschbäranzug"
    ],
    "note": "Der Froschanzug verbessert Marios Bewegung im Wasser.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-2",
    "cat": "nintendo",
    "tier": 0,
    "q": "Donkey Kong Country: Wer begleitet Donkey Kong als zweiter spielbarer Held?",
    "answers": [
      "Diddy Kong",
      "Dixie Kong",
      "Funky Kong",
      "Cranky Kong"
    ],
    "note": "Im ersten Country-Abenteuer kämpft Diddy an Donkey Kongs Seite.",
    "source": "https://world-of-nintendo.com/manuals/super_nes/donkey_kong_country.shtml"
  },
  {
    "id": "retro-3",
    "cat": "nintendo",
    "tier": 0,
    "q": "Donkey Kong Country: Welcher tierische Helfer ist ein Nashorn?",
    "answers": [
      "Rambi",
      "Enguarde",
      "Expresso",
      "Winky"
    ],
    "note": "Rambi ist das Nashorn.",
    "source": "https://world-of-nintendo.com/manuals/super_nes/donkey_kong_country.shtml"
  },
  {
    "id": "retro-4",
    "cat": "nintendo",
    "tier": 0,
    "q": "A Link to the Past: Welches Werkzeug zieht Link über Abgründe zu passenden Zielen?",
    "answers": [
      "Der Enterhaken",
      "Der Feuerstab",
      "Der Bumerang",
      "Die Flöte"
    ],
    "note": "Der Enterhaken überbrückt bestimmte Abgründe.",
    "source": "https://www.zeldadungeon.net/wiki/A_Link_to_the_Past_Items"
  },
  {
    "id": "retro-5",
    "cat": "nintendo",
    "tier": 0,
    "q": "Link’s Awakening auf dem Game Boy: Welches Wesen soll Link aufwecken?",
    "answers": [
      "Den Windfisch",
      "Den Deku-Baum",
      "Lord Jabu-Jabu",
      "Den roten Leuenkönig"
    ],
    "note": "Links Reise dreht sich um den schlafenden Windfisch.",
    "source": "https://gamefaqs.gamespot.com/gameboy/563277-the-legend-of-zelda-links-awakening/faqs/13376"
  },
  {
    "id": "retro-6",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario Bros. 3: Welcher Anzug erlaubt Mario, sich in eine Statue zu verwandeln?",
    "answers": [
      "Tanuki-Anzug",
      "Froschanzug",
      "Hammeranzug",
      "Nur das Superblatt"
    ],
    "note": "Die Statue gehört zur Tanuki-Verwandlung.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-7",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario Bros. 3: Welcher Gegenstand zerstört Felsen auf der Weltkarte?",
    "answers": [
      "Ein Hammer",
      "Eine Feuerblume",
      "Eine Wolke",
      "Eine Spieluhr"
    ],
    "note": "Der Karten-Hammer räumt Felsen aus dem Weg.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-8",
    "cat": "nintendo",
    "tier": 1,
    "q": "Donkey Kong Country: Wie heißt der Schwertfisch, auf dem man reiten kann?",
    "answers": [
      "Enguarde",
      "Expresso",
      "Squawks",
      "Rambi"
    ],
    "note": "Enguarde hilft in Unterwasserleveln.",
    "source": "https://world-of-nintendo.com/manuals/super_nes/donkey_kong_country.shtml"
  },
  {
    "id": "retro-9",
    "cat": "nintendo",
    "tier": 1,
    "q": "Donkey Kong Country: Welcher Helfer ist ein Strauß?",
    "answers": [
      "Expresso",
      "Winky",
      "Squawks",
      "Enguarde"
    ],
    "note": "Expresso ist der schnelle Strauß.",
    "source": "https://world-of-nintendo.com/manuals/super_nes/donkey_kong_country.shtml"
  },
  {
    "id": "retro-10",
    "cat": "nintendo",
    "tier": 1,
    "q": "A Link to the Past: Welcher Gegenstand verhindert Links Verwandlung in ein Kaninchen in der Schattenwelt?",
    "answers": [
      "Die Mondperle",
      "Der Zauberspiegel",
      "Das Buch Mudora",
      "Das Kraftarmband"
    ],
    "note": "Mit der Mondperle behält Link seine Gestalt.",
    "source": "https://www.zeldadungeon.net/wiki/A_Link_to_the_Past_Items"
  },
  {
    "id": "retro-11",
    "cat": "nintendo",
    "tier": 1,
    "q": "Link’s Awakening auf dem Game Boy: Wer lehrt Link die Ballade des Windfisches?",
    "answers": [
      "Marin",
      "Tarin",
      "Richard",
      "Madam MiouMiou"
    ],
    "note": "Marin bringt Link die Ballade bei.",
    "source": "https://gamefaqs.gamespot.com/gameboy/563277-the-legend-of-zelda-links-awakening/faqs/13376"
  },
  {
    "id": "retro-12",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Bros. 3: Was bewirkt die Spieluhr auf der Weltkarte?",
    "answers": [
      "Sie lässt Hammer-Brüder einschlafen",
      "Sie versetzt Mario in eine andere Welt",
      "Sie deckt geheime Wege auf",
      "Sie verwandelt Felsen in Münzen"
    ],
    "note": "Schlafende Karten-Gegner lassen sich umgehen.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-13",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Bros. 3: Was ermöglicht die Lakitu-Wolke im Karteninventar?",
    "answers": [
      "Ein gewöhnliches Level zu überspringen",
      "Ein Luftschiff zurückzurufen",
      "Einen Wasserpegel abzusenken",
      "Alle Festungen zu öffnen"
    ],
    "note": "Mit der Wolke kann Mario einen Levelpunkt passieren.",
    "source": "https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAACE.pdf"
  },
  {
    "id": "retro-14",
    "cat": "nintendo",
    "tier": 2,
    "q": "Donkey Kong Country: Welcher tierische Helfer trägt in einer dunklen Höhle eine Lampe?",
    "answers": [
      "Squawks",
      "Expresso",
      "Winky",
      "Rambi"
    ],
    "note": "Squawks beleuchtet den Weg.",
    "source": "https://world-of-nintendo.com/manuals/super_nes/donkey_kong_country.shtml"
  },
  {
    "id": "retro-15",
    "cat": "nintendo",
    "tier": 2,
    "q": "A Link to the Past: Welches Buch liest alte Inschriften?",
    "answers": [
      "Buch Mudora",
      "Buch der Geheimnisse",
      "Buch der Schatten",
      "Buch der Sieben Weisen"
    ],
    "note": "Das Buch Mudora übersetzt die Inschriften.",
    "source": "https://www.zeldadungeon.net/wiki/A_Link_to_the_Past_Items"
  },
  {
    "id": "retro-16",
    "cat": "nintendo",
    "tier": 2,
    "q": "A Link to the Past: Welches Medaillon öffnet den Zugang zum Schildkrötenfelsen?",
    "answers": [
      "Quake / Erdbeben",
      "Ether / Äther",
      "Bombos",
      "Keines, nur der Eisstab"
    ],
    "note": "Am Schildkrötenfelsen wird Quake benötigt.",
    "source": "https://www.zeldadungeon.net/wiki/A_Link_to_the_Past_Items"
  },
  {
    "id": "retro-17",
    "cat": "nintendo",
    "tier": 2,
    "q": "Link’s Awakening auf dem Game Boy: Wie viele Instrumente der Sirenen muss Link sammeln?",
    "answers": [
      "Acht",
      "Sechs",
      "Sieben",
      "Neun"
    ],
    "note": "In acht Dungeons liegen acht Instrumente.",
    "source": "https://gamefaqs.gamespot.com/gameboy/563277-the-legend-of-zelda-links-awakening/faqs/13376"
  },
  {
    "id": "retro-18",
    "cat": "sega",
    "tier": 0,
    "q": "Sonic the Hedgehog auf dem Mega Drive: Was sammelt Sonic als Schutz vor Treffern?",
    "answers": [
      "Ringe",
      "Kristalle",
      "Sterne",
      "Schlüssel"
    ],
    "note": "Ringe schützen Sonic vor gewöhnlichen Treffern.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-19",
    "cat": "sega",
    "tier": 0,
    "q": "Sonic 2 auf dem Mega Drive: Welches Tier ist Tails?",
    "answers": [
      "Ein Fuchs",
      "Ein Waschbär",
      "Ein Eichhörnchen",
      "Ein Igel"
    ],
    "note": "Tails ist ein Fuchs mit zwei Schwänzen.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-20",
    "cat": "sega",
    "tier": 0,
    "q": "Sonic 3 & Knuckles: Welche Figur kann gleiten und Wände erklimmen?",
    "answers": [
      "Knuckles",
      "Tails",
      "Metal Sonic",
      "Amy"
    ],
    "note": "Knuckles nutzt Gleitflug und Kletterfähigkeiten.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-21",
    "cat": "sega",
    "tier": 0,
    "q": "Welches klassische Turtles-Spiel trägt den Untertitel „Turtles in Time“ in seiner SNES-Fassung?",
    "answers": [
      "Teenage Mutant Ninja Turtles IV",
      "Teenage Mutant Ninja Turtles II",
      "Teenage Mutant Ninja Turtles III",
      "Teenage Mutant Ninja Turtles V"
    ],
    "note": "Auf dem SNES heißt es TMNT IV: Turtles in Time.",
    "source": "https://www.konami.com/games/eu/en/products/teenage_mutant_ninja_turtles/"
  },
  {
    "id": "retro-22",
    "cat": "sega",
    "tier": 0,
    "q": "Welches Studio entwickelte die klassischen Turtles-Spiele für NES, SNES und Mega Drive?",
    "answers": [
      "Konami",
      "Capcom",
      "Rare",
      "Treasure"
    ],
    "note": "Die klassischen Turtles-Spiele stammen von Konami.",
    "source": "https://www.konami.com/games/eu/en/products/teenage_mutant_ninja_turtles/"
  },
  {
    "id": "retro-23",
    "cat": "sega",
    "tier": 0,
    "q": "Streets of Rage 2: Welche spielbare Figur kämpft auf Rollschuhen?",
    "answers": [
      "Skate",
      "Axel",
      "Max",
      "Blaze"
    ],
    "note": "Skate nutzt seine Rollschuhe im Kampf.",
    "source": "https://strategywiki.org/wiki/Streets_of_Rage_2/Characters"
  },
  {
    "id": "retro-24",
    "cat": "sega",
    "tier": 1,
    "q": "Sonic 2 auf dem Mega Drive: Wie heißt Tails mit richtigem Namen?",
    "answers": [
      "Miles Prower",
      "Ray Prower",
      "Mighty Miles",
      "Nack Prower"
    ],
    "note": "Sein Name Miles Prower spielt auf „miles per hour“ an.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-25",
    "cat": "sega",
    "tier": 1,
    "q": "Sonic 2 auf dem Mega Drive: Wie viele Chaos Emeralds gibt es?",
    "answers": [
      "Sieben",
      "Sechs",
      "Acht",
      "Fünf"
    ],
    "note": "In Sonic 2 sind es sieben Chaos Emeralds.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-26",
    "cat": "sega",
    "tier": 1,
    "q": "Sonic 3 & Knuckles: Welcher Schild lässt Sonic unter Wasser atmen?",
    "answers": [
      "Wasserschild",
      "Feuerschild",
      "Blitzschild",
      "Alle drei Schilde"
    ],
    "note": "Der Wasserschild schützt vor dem Ertrinken.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-27",
    "cat": "sega",
    "tier": 1,
    "q": "Welcher Turtles-Klassiker erschien für Mega Drive / Genesis?",
    "answers": [
      "The Hyperstone Heist",
      "The Manhattan Project",
      "Fall of the Foot Clan",
      "Back from the Sewers"
    ],
    "note": "The Hyperstone Heist ist der Mega-Drive-Titel.",
    "source": "https://www.konami.com/games/eu/en/products/teenage_mutant_ninja_turtles/"
  },
  {
    "id": "retro-28",
    "cat": "sega",
    "tier": 1,
    "q": "Streets of Rage 2: Welche spielbare Figur ist ein Wrestler?",
    "answers": [
      "Max",
      "Axel",
      "Skate",
      "Blaze"
    ],
    "note": "Max ist der kräftige Wrestler des Teams.",
    "source": "https://strategywiki.org/wiki/Streets_of_Rage_2/Characters"
  },
  {
    "id": "retro-29",
    "cat": "sega",
    "tier": 1,
    "q": "Turtles in Time auf dem SNES: Wer ist der Boss von „Bury My Shell at Wounded Knee“?",
    "answers": [
      "Leatherhead",
      "Baxter Stockman",
      "Slash",
      "Rat King"
    ],
    "note": "Am Ende des Zuglevels wartet Leatherhead.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/47909"
  },
  {
    "id": "retro-30",
    "cat": "sega",
    "tier": 2,
    "q": "Sonic 3 & Knuckles: Welcher Schild zieht nahe Ringe an?",
    "answers": [
      "Blitzschild",
      "Wasserschild",
      "Feuerschild",
      "Keiner der Schilde"
    ],
    "note": "Der Blitzschild zieht Ringe an.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-31",
    "cat": "sega",
    "tier": 2,
    "q": "Sonic 3 & Knuckles: Was wird für Hyper Sonic zusätzlich zu den Chaos Emeralds gesammelt?",
    "answers": [
      "Die Super Emeralds",
      "Die Time Stones",
      "Die Sol Emeralds",
      "Die Chaos Rings"
    ],
    "note": "Hyper Sonic benötigt die Super Emeralds.",
    "source": "https://manuals.sega.com/origins/en/index.html"
  },
  {
    "id": "retro-32",
    "cat": "sega",
    "tier": 2,
    "q": "Turtles in Time auf dem SNES: Welches Gegnerduo kämpft auf dem Piratenschiff?",
    "answers": [
      "Bebop und Rocksteady",
      "Tokka und Rahzar",
      "Slash und Leatherhead",
      "Baxter und Rat King"
    ],
    "note": "Bebop und Rocksteady stehen am Ende von „Skull and Crossbones“.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/47909"
  },
  {
    "id": "retro-33",
    "cat": "sega",
    "tier": 2,
    "q": "Welcher Untertitel gehört zum dritten Turtles-Spiel für NES?",
    "answers": [
      "The Manhattan Project",
      "The Hyperstone Heist",
      "Radical Rescue",
      "Back from the Sewers"
    ],
    "note": "TMNT III auf dem NES heißt The Manhattan Project.",
    "source": "https://www.konami.com/games/eu/en/products/teenage_mutant_ninja_turtles/"
  },
  {
    "id": "retro-34",
    "cat": "sega",
    "tier": 2,
    "q": "Streets of Rage 2: Wessen jüngerer Bruder ist Skate?",
    "answers": [
      "Adam Hunter",
      "Axel Stone",
      "Max Thunder",
      "Mr. X"
    ],
    "note": "Skate ist Adams jüngerer Bruder.",
    "source": "https://strategywiki.org/wiki/Streets_of_Rage_2/Characters"
  },
  {
    "id": "retro-35",
    "cat": "sega",
    "tier": 2,
    "q": "Turtles in Time auf dem SNES: In welchem Jahr spielt „Neon Night-Riders“?",
    "answers": [
      "2020",
      "1999",
      "2050",
      "2100"
    ],
    "note": "Die Hoverboard-Etappe ist im Jahr 2020 angesiedelt.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/47909"
  }
]);
HARD_BANK.push(...[
  {
    "id": "hard-retro-0",
    "cat": "nintendo",
    "tier": 0,
    "q": "A Link to the Past: Welches Medaillon öffnet den Dungeon Misery Mire (englischer Name)?",
    "answers": [
      "Ether / Äther",
      "Bombos",
      "Quake / Erdbeben",
      "Die Mondperle"
    ],
    "note": "Für Misery Mire wird Ether eingesetzt.",
    "source": "https://www.zeldadungeon.net/wiki/A_Link_to_the_Past_Items"
  },
  {
    "id": "hard-retro-1",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Bros. 3: Welche Verwandlung schützt Mario beim Ducken vor vielen Feuerbällen?",
    "answers": [
      "Hammer-Mario",
      "Feuer-Mario",
      "Waschbär-Mario",
      "Frosch-Mario"
    ],
    "note": "Der Panzer des Hammeranzugs wehrt Feuer ab.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._3"
  },
  {
    "id": "hard-retro-2",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario Bros. 3 auf dem NES: In welchem einzigen Level gibt es den nutzbaren Goomba-Schuh?",
    "answers": [
      "5-3",
      "3-5",
      "6-3",
      "7-5"
    ],
    "note": "Der Goomba-Schuh erscheint in Welt 5-3.",
    "source": "https://en.wikibooks.org/wiki/Super_Mario_Bros._3/Items"
  },
  {
    "id": "hard-retro-3",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario World auf dem SNES: Wie viele gefundene Ausgänge zeigt ein vollständig gelöster Spielstand an?",
    "answers": [
      "96",
      "95",
      "100",
      "120"
    ],
    "note": "Alle gezählten Ausgänge ergeben 96.",
    "source": "https://www.mariowiki.com/Secret_exit"
  },
  {
    "id": "hard-retro-4",
    "cat": "nintendo",
    "tier": 2,
    "q": "A Link to the Past: Welches Wesen überreicht Link das Quake-Medaillon nach einem Steinwurf ins Wasser?",
    "answers": [
      "Ein Wels",
      "Eine große Fee",
      "Ein Zora-König",
      "Eine Schildkröte"
    ],
    "note": "Ein Wels übergibt Link Quake.",
    "source": "https://gamefaqs.gamespot.com/snes/588436-the-legend-of-zelda-a-link-to-the-past/faqs/20432"
  },
  {
    "id": "hard-retro-5",
    "cat": "nintendo",
    "tier": 2,
    "q": "Link’s Awakening auf dem Game Boy: Welches Instrument erhält Link im Fischmaul?",
    "answers": [
      "Wind-Marimba",
      "Muschelgeige",
      "Poseidon-Harfe",
      "Seestern-Triangel"
    ],
    "note": "Die Wind-Marimba ist das fünfte Instrument.",
    "source": "https://www.zeldapendium.de/wiki/Instrumente_der_Sirenen"
  },
  {
    "id": "hard-retro-6",
    "cat": "sega",
    "tier": 0,
    "q": "Turtles in Time auf dem SNES: In welchem Jahr fährt der Zug in „Bury My Shell at Wounded Knee“?",
    "answers": [
      "1885",
      "1530",
      "1899",
      "1865"
    ],
    "note": "Das Zuglevel spielt 1885.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/14244"
  },
  {
    "id": "hard-retro-7",
    "cat": "sega",
    "tier": 0,
    "q": "Streets of Rage 2: Unter welchem Namen ist Skate in der japanischen Fassung bekannt?",
    "answers": [
      "Sammy",
      "Eddie Junior",
      "Ricky",
      "Billy"
    ],
    "note": "In Japan heißt die Figur Sammy.",
    "source": "https://strategywiki.org/wiki/Streets_of_Rage_2/Characters"
  },
  {
    "id": "hard-retro-8",
    "cat": "sega",
    "tier": 1,
    "q": "Turtles in Time auf dem SNES: Wer ist der Boss von „Prehistoric Turtlesaurus“?",
    "answers": [
      "Slash",
      "Leatherhead",
      "Rat King",
      "Metalhead"
    ],
    "note": "Die SNES-Fassung setzt hier Slash als Boss ein.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/14244"
  },
  {
    "id": "hard-retro-9",
    "cat": "sega",
    "tier": 1,
    "q": "Turtles in Time auf dem SNES: Auf welches Jahr ist „Starbase: Where No Turtle Has Gone Before“ datiert?",
    "answers": [
      "2100",
      "2020",
      "2000",
      "2200"
    ],
    "note": "Die Raumstation liegt im Jahr 2100.",
    "source": "https://gamefaqs.gamespot.com/snes/588779-teenage-mutant-ninja-turtles-iv-turtles-in-time/faqs/14244"
  },
  {
    "id": "hard-retro-10",
    "cat": "sega",
    "tier": 2,
    "q": "Sonic 3 & Knuckles auf dem Mega Drive: Welche Verwandlung erhält Tails mit allen Super Emeralds?",
    "answers": [
      "Super Tails",
      "Hyper Tails",
      "Turbo Tails",
      "Ultra Tails"
    ],
    "note": "Im Original heißt die Verwandlung Super Tails.",
    "source": "https://manuals.sega.com/wp-content/uploads/2022/06/SM_Sonic_Origin_En_220617.pdf"
  },
  {
    "id": "hard-retro-11",
    "cat": "sega",
    "tier": 2,
    "q": "Wie heißt das dritte Turtles-Spiel für den ursprünglichen Game Boy?",
    "answers": [
      "Radical Rescue",
      "The Manhattan Project",
      "Back from the Sewers",
      "Fall of the Foot Clan"
    ],
    "note": "Auf dem Game Boy trägt Teil III den Untertitel Radical Rescue.",
    "source": "https://www.konami.com/games/eu/en/products/teenage_mutant_ninja_turtles/"
  }
]);
