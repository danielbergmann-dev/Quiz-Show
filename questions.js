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

// Expansion: 30 distinct questions for each of seven topics; stable IDs preserve play history.
BANK.push(...[
  {
    "id": "expand-lucas-001",
    "cat": "lucas",
    "tier": 0,
    "q": "Full Throttle: Wie heißt die Mechanikerin, die Ben nach seinem Überfall hilft?",
    "answers": [
      "Maureen",
      "Miranda",
      "Moira",
      "Melissa"
    ],
    "note": "Richtig ist: Maureen.",
    "source": "https://en.wikipedia.org/wiki/Full_Throttle_(1995_video_game)",
    "subject": "throttle"
  },
  {
    "id": "expand-lucas-002",
    "cat": "lucas",
    "tier": 0,
    "q": "Grim Fandango: Wie werden die Bewohner des Totenreichs überwiegend dargestellt?",
    "answers": [
      "Als Skelette",
      "Als Schatten",
      "Als Geisterwolken",
      "Als Mumien"
    ],
    "note": "Richtig ist: Als Skelette.",
    "source": "https://en.wikipedia.org/wiki/Grim_Fandango",
    "subject": "grim"
  },
  {
    "id": "expand-lucas-003",
    "cat": "lucas",
    "tier": 0,
    "q": "The Dig: Was bedroht die Erde zu Beginn der Geschichte?",
    "answers": [
      "Ein Asteroid",
      "Eine Supernova",
      "Eine Alien-Flotte",
      "Ein schwarzes Loch"
    ],
    "note": "Richtig ist: Ein Asteroid.",
    "source": "https://www.lucasfilm.com/news/lucasfilm-games-rewind-the-dig/",
    "subject": "dig"
  },
  {
    "id": "expand-lucas-004",
    "cat": "lucas",
    "tier": 0,
    "q": "Sam & Max Hit the Road: Wer erschuf die Comicfiguren Sam und Max?",
    "answers": [
      "Steve Purcell",
      "Ron Gilbert",
      "Tim Schafer",
      "Brian Moriarty"
    ],
    "note": "Richtig ist: Steve Purcell.",
    "source": "https://en.wikipedia.org/wiki/Sam_%26_Max_Hit_the_Road",
    "subject": "sam"
  },
  {
    "id": "expand-lucas-005",
    "cat": "lucas",
    "tier": 0,
    "q": "Loom: Zu welcher Handwerksgilde gehört Bobbin?",
    "answers": [
      "Weber",
      "Schmiede",
      "Glasmacher",
      "Hirten"
    ],
    "note": "Richtig ist: Weber.",
    "source": "https://en.wikipedia.org/wiki/Loom_(video_game)",
    "subject": "loom"
  },
  {
    "id": "expand-lucas-006",
    "cat": "lucas",
    "tier": 0,
    "q": "Zak McKracken: Auf welchem Himmelskörper findet ein Teil des Abenteuers statt?",
    "answers": [
      "Mars",
      "Venus",
      "Jupiter",
      "Merkur"
    ],
    "note": "Richtig ist: Mars.",
    "source": "https://en.wikipedia.org/wiki/Zak_McKracken_and_the_Alien_Mindbenders",
    "subject": "zak"
  },
  {
    "id": "expand-lucas-007",
    "cat": "lucas",
    "tier": 1,
    "q": "Full Throttle: Wer leitet den Motorradhersteller und wird ermordet?",
    "answers": [
      "Malcolm Corley",
      "Adrian Ripburger",
      "Emmet",
      "Father Torque"
    ],
    "note": "Richtig ist: Malcolm Corley.",
    "source": "https://en.wikipedia.org/wiki/Full_Throttle_(1995_video_game)",
    "subject": "throttle"
  },
  {
    "id": "expand-lucas-008",
    "cat": "lucas",
    "tier": 1,
    "q": "Grim Fandango: Wie viele Jahre umfasst die Haupthandlung?",
    "answers": [
      "Vier",
      "Zwei",
      "Drei",
      "Sieben"
    ],
    "note": "Richtig ist: Vier.",
    "source": "https://en.wikipedia.org/wiki/Grim_Fandango",
    "subject": "grim"
  },
  {
    "id": "expand-lucas-009",
    "cat": "lucas",
    "tier": 1,
    "q": "The Dig: Wie heißt die Journalistin der Expedition?",
    "answers": [
      "Maggie Robbins",
      "Sophia Hapgood",
      "Annie Larris",
      "Elaine Marley"
    ],
    "note": "Richtig ist: Maggie Robbins.",
    "source": "https://www.lucasfilm.com/news/lucasfilm-games-rewind-the-dig/",
    "subject": "dig"
  },
  {
    "id": "expand-lucas-010",
    "cat": "lucas",
    "tier": 1,
    "q": "Sam & Max Hit the Road: Welche Begleiterin flieht mit Bruno vom Jahrmarkt?",
    "answers": [
      "Trixie",
      "Maureen",
      "Laverne",
      "Connie"
    ],
    "note": "Richtig ist: Trixie.",
    "source": "https://en.wikipedia.org/wiki/Sam_%26_Max_Hit_the_Road",
    "subject": "sam"
  },
  {
    "id": "expand-lucas-011",
    "cat": "lucas",
    "tier": 1,
    "q": "Loom: Wie viele Noten hat ein gewöhnlicher Zauberspruch im Spiel?",
    "answers": [
      "Vier",
      "Drei",
      "Fünf",
      "Sechs"
    ],
    "note": "Richtig ist: Vier.",
    "source": "https://en.wikipedia.org/wiki/Loom_(video_game)",
    "subject": "loom"
  },
  {
    "id": "expand-lucas-012",
    "cat": "lucas",
    "tier": 1,
    "q": "Zak McKracken: Bei welcher Art Zeitung arbeitet Zak?",
    "answers": [
      "Boulevardblatt",
      "Wissenschaftsjournal",
      "Sportzeitung",
      "Finanzzeitung"
    ],
    "note": "Richtig ist: Boulevardblatt.",
    "source": "https://en.wikipedia.org/wiki/Zak_McKracken_and_the_Alien_Mindbenders",
    "subject": "zak"
  },
  {
    "id": "expand-lucas-013",
    "cat": "lucas",
    "tier": 2,
    "q": "Full Throttle: Welcher Corley-Manager ist der zentrale Intrigant?",
    "answers": [
      "Adrian Ripburger",
      "Malcolm Corley",
      "Father Torque",
      "Todd Newlan"
    ],
    "note": "Richtig ist: Adrian Ripburger.",
    "source": "https://en.wikipedia.org/wiki/Full_Throttle_(1995_video_game)",
    "subject": "throttle"
  },
  {
    "id": "expand-lucas-014",
    "cat": "lucas",
    "tier": 2,
    "q": "Grim Fandango: Welchen Beruf hat Manny zu Beginn?",
    "answers": [
      "Reiseberater für Verstorbene",
      "Hafenpolizist",
      "Casino-Croupier",
      "Bestatter der Lebenden"
    ],
    "note": "Richtig ist: Reiseberater für Verstorbene.",
    "source": "https://en.wikipedia.org/wiki/Grim_Fandango",
    "subject": "grim"
  },
  {
    "id": "expand-lucas-015",
    "cat": "lucas",
    "tier": 2,
    "q": "The Dig: Wie heißt der Asteroid aus dem Auftakt?",
    "answers": [
      "Attila",
      "Apophis",
      "Icarus",
      "Cerberus"
    ],
    "note": "Richtig ist: Attila.",
    "source": "https://www.lucasfilm.com/news/lucasfilm-games-rewind-the-dig/",
    "subject": "dig"
  },
  {
    "id": "expand-lucas-016",
    "cat": "lucas",
    "tier": 2,
    "q": "Sam & Max Hit the Road: Welcher Country-Sänger jagt Bruno?",
    "answers": [
      "Conroy Bumpus",
      "Lee Harvey",
      "Shuv-Oohl",
      "Doug"
    ],
    "note": "Richtig ist: Conroy Bumpus.",
    "source": "https://en.wikipedia.org/wiki/Sam_%26_Max_Hit_the_Road",
    "subject": "sam"
  },
  {
    "id": "expand-lucas-017",
    "cat": "lucas",
    "tier": 2,
    "q": "Loom: Was bewirkt bei vielen Zaubern die umgekehrte Notenfolge?",
    "answers": [
      "Den gegenteiligen Effekt",
      "Doppelte Reichweite",
      "Eine Zeitreise",
      "Den Verlust des Spinnrockens"
    ],
    "note": "Richtig ist: Den gegenteiligen Effekt.",
    "source": "https://en.wikipedia.org/wiki/Loom_(video_game)",
    "subject": "loom"
  },
  {
    "id": "expand-lucas-018",
    "cat": "lucas",
    "tier": 2,
    "q": "Zak McKracken: Welcher Ort ist Zaks Heimatstadt zu Spielbeginn?",
    "answers": [
      "San Francisco",
      "Los Angeles",
      "New York",
      "Seattle"
    ],
    "note": "Richtig ist: San Francisco.",
    "source": "https://en.wikipedia.org/wiki/Zak_McKracken_and_the_Alien_Mindbenders",
    "subject": "zak"
  },
  {
    "id": "expand-star-001",
    "cat": "star",
    "tier": 0,
    "q": "Episode I: Welchen Planeten blockiert die Handelsföderation zu Beginn?",
    "answers": [
      "Naboo",
      "Corellia",
      "Bespin",
      "Dantooine"
    ],
    "note": "Richtig ist: Naboo.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace",
    "subject": "sw1"
  },
  {
    "id": "expand-star-002",
    "cat": "star",
    "tier": 0,
    "q": "Episode II: Wer spielt den erwachsenen Anakin Skywalker?",
    "answers": [
      "Hayden Christensen",
      "Jake Lloyd",
      "Ewan McGregor",
      "James McAvoy"
    ],
    "note": "Richtig ist: Hayden Christensen.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones",
    "subject": "sw2"
  },
  {
    "id": "expand-star-003",
    "cat": "star",
    "tier": 0,
    "q": "Rogue One: Wie heißt die Tochter von Galen Erso?",
    "answers": [
      "Jyn Erso",
      "Qi’ra",
      "Rose Tico",
      "Hera Syndulla"
    ],
    "note": "Richtig ist: Jyn Erso.",
    "source": "https://en.wikipedia.org/wiki/Rogue_One",
    "subject": "swr"
  },
  {
    "id": "expand-star-004",
    "cat": "star",
    "tier": 0,
    "q": "Episode VII: Wie heißt der kugelförmige Droide von Poe Dameron?",
    "answers": [
      "BB-8",
      "R4-P17",
      "D-O",
      "K-2SO"
    ],
    "note": "Richtig ist: BB-8.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
    "subject": "sw7"
  },
  {
    "id": "expand-star-005",
    "cat": "star",
    "tier": 0,
    "q": "Episode VI: Wer erwürgt Jabba mit einer Kette?",
    "answers": [
      "Leia",
      "Luke",
      "Lando",
      "Han"
    ],
    "note": "Richtig ist: Leia.",
    "source": "https://en.wikipedia.org/wiki/Return_of_the_Jedi",
    "subject": "sw6"
  },
  {
    "id": "expand-star-006",
    "cat": "star",
    "tier": 0,
    "q": "Episode VIII: Wer begleitet Finn auf seiner Mission nach Canto Bight?",
    "answers": [
      "Rose Tico",
      "Rey",
      "Paige Tico",
      "Maz Kanata"
    ],
    "note": "Richtig ist: Rose Tico.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
    "subject": "sw8"
  },
  {
    "id": "expand-star-007",
    "cat": "star",
    "tier": 1,
    "q": "Episode I: Wer spielt Qui-Gon Jinn?",
    "answers": [
      "Liam Neeson",
      "Alec Guinness",
      "Christopher Lee",
      "Peter Cushing"
    ],
    "note": "Richtig ist: Liam Neeson.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace",
    "subject": "sw1"
  },
  {
    "id": "expand-star-008",
    "cat": "star",
    "tier": 1,
    "q": "Episode II: Auf welchem Planeten findet die große Arena-Schlacht statt?",
    "answers": [
      "Geonosis",
      "Kamino",
      "Naboo",
      "Utapau"
    ],
    "note": "Richtig ist: Geonosis.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones",
    "subject": "sw2"
  },
  {
    "id": "expand-star-009",
    "cat": "star",
    "tier": 1,
    "q": "Rogue One: Auf welchem tropischen Planeten liegt das Archiv mit den Todessternplänen?",
    "answers": [
      "Scarif",
      "Eadu",
      "Jedha",
      "Lah’mu"
    ],
    "note": "Richtig ist: Scarif.",
    "source": "https://en.wikipedia.org/wiki/Rogue_One",
    "subject": "swr"
  },
  {
    "id": "expand-star-010",
    "cat": "star",
    "tier": 1,
    "q": "Episode VII: Auf welchem Wüstenplaneten lebt Rey zu Beginn?",
    "answers": [
      "Jakku",
      "Tatooine",
      "Pasaana",
      "Jedha"
    ],
    "note": "Richtig ist: Jakku.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
    "subject": "sw7"
  },
  {
    "id": "expand-star-011",
    "cat": "star",
    "tier": 1,
    "q": "Episode VI: Welche Kreatur wartet unter Jabbas Thronsaal?",
    "answers": [
      "Ein Rancor",
      "Ein Wampa",
      "Ein Nexu",
      "Ein Acklay"
    ],
    "note": "Richtig ist: Ein Rancor.",
    "source": "https://en.wikipedia.org/wiki/Return_of_the_Jedi",
    "subject": "sw6"
  },
  {
    "id": "expand-star-012",
    "cat": "star",
    "tier": 1,
    "q": "Episode VIII: Welcher Meister erscheint Luke als Machtgeist?",
    "answers": [
      "Yoda",
      "Qui-Gon Jinn",
      "Mace Windu",
      "Count Dooku"
    ],
    "note": "Richtig ist: Yoda.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
    "subject": "sw8"
  },
  {
    "id": "expand-star-013",
    "cat": "star",
    "tier": 2,
    "q": "Episode I: Wie heißt die Unterwasserstadt der Gungans?",
    "answers": [
      "Otoh Gunga",
      "Theed",
      "Mos Espa",
      "Tipoca City"
    ],
    "note": "Richtig ist: Otoh Gunga.",
    "source": "https://www.starwars.com/databank/otoh-gunga",
    "subject": "swo"
  },
  {
    "id": "expand-star-014",
    "cat": "star",
    "tier": 2,
    "q": "Episode II: Wer enthauptet Jango Fett in der Arena?",
    "answers": [
      "Mace Windu",
      "Obi-Wan Kenobi",
      "Anakin Skywalker",
      "Yoda"
    ],
    "note": "Richtig ist: Mace Windu.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones",
    "subject": "sw2"
  },
  {
    "id": "expand-star-015",
    "cat": "star",
    "tier": 2,
    "q": "Rogue One: Wie heißt der desertierte imperiale Pilot der Gruppe?",
    "answers": [
      "Bodhi Rook",
      "Cassian Andor",
      "Baze Malbus",
      "Antoc Merrick"
    ],
    "note": "Richtig ist: Bodhi Rook.",
    "source": "https://en.wikipedia.org/wiki/Rogue_One",
    "subject": "swr"
  },
  {
    "id": "expand-star-016",
    "cat": "star",
    "tier": 2,
    "q": "Episode VII: Wie lautet Finns ursprüngliche Sturmtruppler-Kennung?",
    "answers": [
      "FN-2187",
      "TK-421",
      "FN-2003",
      "CT-7567"
    ],
    "note": "Richtig ist: FN-2187.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
    "subject": "sw7"
  },
  {
    "id": "expand-star-017",
    "cat": "star",
    "tier": 2,
    "q": "Episode VI: Wer steuert den Millennium Falken beim Angriff auf den zweiten Todesstern als Hauptpilot?",
    "answers": [
      "Lando Calrissian",
      "Han Solo",
      "Wedge Antilles",
      "Luke Skywalker"
    ],
    "note": "Richtig ist: Lando Calrissian.",
    "source": "https://en.wikipedia.org/wiki/Return_of_the_Jedi",
    "subject": "sw6"
  },
  {
    "id": "expand-star-018",
    "cat": "star",
    "tier": 2,
    "q": "Episode VIII: Welche Vizeadmiralin rammt Snokes Flaggschiff mit einem Hyperraumsprung?",
    "answers": [
      "Amilyn Holdo",
      "Mon Mothma",
      "Nien Nunb",
      "Carlist Rieekan"
    ],
    "note": "Richtig ist: Amilyn Holdo.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
    "subject": "sw8"
  },
  {
    "id": "expand-simon-001",
    "cat": "simon",
    "tier": 0,
    "q": "Simon I: Was entfernt Simon aus dem Fuß des Barbaren?",
    "answers": [
      "Einen Dorn",
      "Eine Münze",
      "Einen Zahn",
      "Einen Schlüssel"
    ],
    "note": "Richtig ist: Einen Dorn.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer.aspx",
    "subject": "simon1walk"
  },
  {
    "id": "expand-simon-002",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Was soll Simon im Restaurant reparieren?",
    "answers": [
      "Die Uhr",
      "Den Kamin",
      "Das Dach",
      "Den Brunnen"
    ],
    "note": "Richtig ist: Die Uhr.",
    "source": "https://thehande.wordpress.com/simon-the-sorcerer-ii-2-walkthrough/",
    "subject": "simon2hande"
  },
  {
    "id": "expand-simon-003",
    "cat": "simon",
    "tier": 0,
    "q": "Simon I: Womit schneidet Simon den Bart des schlafenden Zwergs?",
    "answers": [
      "Mit einer Schere",
      "Mit einem Löffel",
      "Mit einer Feder",
      "Mit einer Münze"
    ],
    "note": "Richtig ist: Mit einer Schere.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer.aspx",
    "subject": "simon1walk"
  },
  {
    "id": "expand-simon-004",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Welches Kleidungsstück bekommt Simon für sein Piratenkostüm für eine Sonnenbrille?",
    "answers": [
      "Eine Augenklappe",
      "Einen Stiefel",
      "Einen Dreispitz",
      "Einen Handschuh"
    ],
    "note": "Richtig ist: Eine Augenklappe.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer2.aspx",
    "subject": "simon2walk"
  },
  {
    "id": "expand-simon-005",
    "cat": "simon",
    "tier": 0,
    "q": "Simon I: Welches Tier verliert eine Feder, nachdem Simon es erschreckt?",
    "answers": [
      "Eine Eule",
      "Ein Adler",
      "Ein Pfau",
      "Ein Huhn"
    ],
    "note": "Richtig ist: Eine Eule.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer.aspx",
    "subject": "simon1walk"
  },
  {
    "id": "expand-simon-006",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Wer ist der Kapitän des Piratenschiffs?",
    "answers": [
      "Captain Long Johns",
      "Captain LeChuck",
      "Captain Haddock",
      "Captain Hook"
    ],
    "note": "Richtig ist: Captain Long Johns.",
    "source": "https://thehande.wordpress.com/simon-the-sorcerer-ii-2-walkthrough/",
    "subject": "simon2hande"
  },
  {
    "id": "expand-simon-007",
    "cat": "simon",
    "tier": 1,
    "q": "Simon I: Was fehlt der Glocke, die Simon wieder zum Läuten bringen soll?",
    "answers": [
      "Der Klöppel",
      "Das Zifferblatt",
      "Die Kurbel",
      "Die Linse"
    ],
    "note": "Richtig ist: Der Klöppel.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer.aspx",
    "subject": "simon1walk"
  },
  {
    "id": "expand-simon-008",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Warum bekommt Simon eine kostenlose Tätowierung?",
    "answers": [
      "Er ist der tausendste Kunde",
      "Er gewinnt ein Kartenspiel",
      "Er rettet den Tätowierer",
      "Er bringt eigene Tinte mit"
    ],
    "note": "Richtig ist: Er ist der tausendste Kunde.",
    "source": "https://thehande.wordpress.com/simon-the-sorcerer-ii-2-walkthrough/",
    "subject": "simon2hande"
  },
  {
    "id": "expand-simon-009",
    "cat": "simon",
    "tier": 1,
    "q": "Simon I: Wofür verwendet Simon im Finale ein Streichholz beim Bootsbau?",
    "answers": [
      "Als Mast",
      "Als Ruder",
      "Als Anker",
      "Als Kiel"
    ],
    "note": "Richtig ist: Als Mast.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1",
    "subject": "simon1ag"
  },
  {
    "id": "expand-simon-010",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Was macht die Kleidung für Simons Kostüm grün?",
    "answers": [
      "Farbe im Brunnenwasser",
      "Ein Zauberring",
      "Drachenschleim",
      "Gemahlene Smaragde"
    ],
    "note": "Richtig ist: Farbe im Brunnenwasser.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer2.aspx",
    "subject": "simon2walk"
  },
  {
    "id": "expand-simon-011",
    "cat": "simon",
    "tier": 1,
    "q": "Simon I: Was benutzt Simon als Köder für die Maus im Finale?",
    "answers": [
      "Eine grüne Socke",
      "Ein Stück Käse",
      "Einen Apfel",
      "Eine tote Fliege"
    ],
    "note": "Richtig ist: Eine grüne Socke.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1",
    "subject": "simon1ag"
  },
  {
    "id": "expand-simon-012",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Womit schützt sich Simon vor der elektrischen Schildkröte?",
    "answers": [
      "Mit Gummihandschuhen",
      "Mit einer Metallrüstung",
      "Mit einem Wollschal",
      "Mit einem Holzschild"
    ],
    "note": "Richtig ist: Mit Gummihandschuhen.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer2.aspx",
    "subject": "simon2walk"
  },
  {
    "id": "expand-simon-013",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Wie überwindet Simon den lebenden Truhendeckel im Finale?",
    "answers": [
      "Er hält ihn mit einem Ast offen",
      "Er friert ihn ein",
      "Er singt ihm etwas vor",
      "Er füttert ihn mit Gold"
    ],
    "note": "Richtig ist: Er hält ihn mit einem Ast offen.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1",
    "subject": "simon1ag"
  },
  {
    "id": "expand-simon-014",
    "cat": "simon",
    "tier": 2,
    "q": "Simon II: Woher stammt das Zahnrad für die Restaurantuhr?",
    "answers": [
      "Aus einer Babywiege",
      "Aus einem Fernrohr",
      "Aus einer Armbrust",
      "Aus einem Wasserrad"
    ],
    "note": "Richtig ist: Aus einer Babywiege.",
    "source": "https://thehande.wordpress.com/simon-the-sorcerer-ii-2-walkthrough/",
    "subject": "simon2hande"
  },
  {
    "id": "expand-simon-015",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Was muss Simon im Finale aus einem zerdrückten Samen gewinnen?",
    "answers": [
      "Öl",
      "Tinte",
      "Mehl",
      "Parfüm"
    ],
    "note": "Richtig ist: Öl.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1",
    "subject": "simon1ag"
  },
  {
    "id": "expand-simon-016",
    "cat": "simon",
    "tier": 2,
    "q": "Simon II: Womit klebt Simon dem ausgestopften Papagei den Schnabel zu?",
    "answers": [
      "Mit Kaugummi",
      "Mit Honig",
      "Mit Harz",
      "Mit Siegelwachs"
    ],
    "note": "Richtig ist: Mit Kaugummi.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer2.aspx",
    "subject": "simon2walk"
  },
  {
    "id": "expand-simon-017",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Mit welchem Alltagsmittel wird der Schild im Finale zum Spiegel?",
    "answers": [
      "Metallpolitur",
      "Seifenwasser",
      "Kreidestaub",
      "Salz"
    ],
    "note": "Richtig ist: Metallpolitur.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer1",
    "subject": "simon1ag"
  },
  {
    "id": "expand-simon-018",
    "cat": "simon",
    "tier": 2,
    "q": "Simon II: Wie viele Ballons braucht Simon für den Zugang zur Schatzkammer?",
    "answers": [
      "Drei",
      "Zwei",
      "Fünf",
      "Sieben"
    ],
    "note": "Richtig ist: Drei.",
    "source": "https://thehande.wordpress.com/simon-the-sorcerer-ii-2-walkthrough/",
    "subject": "simon2hande"
  },
  {
    "id": "expand-nintendo-001",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Metroid: Wie heißt die spielbare Kopfgeldjägerin?",
    "answers": [
      "Samus Aran",
      "Joanna Dark",
      "Jill Valentine",
      "Aya Brea"
    ],
    "note": "Richtig ist: Samus Aran.",
    "source": "https://en.wikipedia.org/wiki/Super_Metroid",
    "subject": "metroid"
  },
  {
    "id": "expand-nintendo-002",
    "cat": "nintendo",
    "tier": 0,
    "q": "Kirby’s Adventure: Wie erlangt Kirby viele seiner Spezialfähigkeiten?",
    "answers": [
      "Durch Einsaugen und Verschlucken von Gegnern",
      "Durch Münzkäufe",
      "Durch Zaubersprüche im Menü",
      "Durch Levelpasswörter"
    ],
    "note": "Richtig ist: Durch Einsaugen und Verschlucken von Gegnern.",
    "source": "https://en.wikipedia.org/wiki/Kirby's_Adventure",
    "subject": "kirby"
  },
  {
    "id": "expand-nintendo-003",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Bros. 2, westliche NES-Fassung: Welche Prinzessin ist spielbar?",
    "answers": [
      "Peach",
      "Daisy",
      "Zelda",
      "Rosalina"
    ],
    "note": "Richtig ist: Peach.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._2",
    "subject": "mario2"
  },
  {
    "id": "expand-nintendo-004",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Kart: Auf welcher Konsole erschien das Original?",
    "answers": [
      "SNES",
      "NES",
      "Nintendo 64",
      "Game Boy"
    ],
    "note": "Richtig ist: SNES.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Kart",
    "subject": "kart"
  },
  {
    "id": "expand-nintendo-005",
    "cat": "nintendo",
    "tier": 0,
    "q": "Donkey Kong Country 2: Wer begleitet Diddy auf der Rettungsmission?",
    "answers": [
      "Dixie Kong",
      "Donkey Kong",
      "Kiddy Kong",
      "Tiny Kong"
    ],
    "note": "Richtig ist: Dixie Kong.",
    "source": "https://en.wikipedia.org/wiki/Donkey_Kong_Country_2:_Diddy's_Kong_Quest",
    "subject": "dk2"
  },
  {
    "id": "expand-nintendo-006",
    "cat": "nintendo",
    "tier": 0,
    "q": "The Legend of Zelda auf dem NES: Welcher Bösewicht hält Prinzessin Zelda gefangen?",
    "answers": [
      "Ganon",
      "Vaati",
      "Zant",
      "Majora"
    ],
    "note": "Richtig ist: Ganon.",
    "source": "https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)",
    "subject": "zelda1"
  },
  {
    "id": "expand-nintendo-007",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Metroid: Welche Fähigkeit lässt Samus durch enge Tunnel rollen?",
    "answers": [
      "Morph Ball",
      "Space Jump",
      "Speed Booster",
      "Grapple Beam"
    ],
    "note": "Richtig ist: Morph Ball.",
    "source": "https://en.wikipedia.org/wiki/Super_Metroid",
    "subject": "metroid"
  },
  {
    "id": "expand-nintendo-008",
    "cat": "nintendo",
    "tier": 1,
    "q": "Kirby’s Adventure: Welcher zerbrochene Gegenstand muss wiederhergestellt werden?",
    "answers": [
      "Star Rod",
      "Master Sword",
      "Moon Pearl",
      "Crystal Shard"
    ],
    "note": "Richtig ist: Star Rod.",
    "source": "https://en.wikipedia.org/wiki/Kirby's_Adventure",
    "subject": "kirby"
  },
  {
    "id": "expand-nintendo-009",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario Bros. 2, westliche NES-Fassung: Wie besiegt man viele Gegner?",
    "answers": [
      "Aufheben und auf andere Gegner werfen",
      "Nur durch Draufspringen",
      "Nur mit Feuerbällen",
      "Durch Anlocken ins Wasser"
    ],
    "note": "Richtig ist: Aufheben und auf andere Gegner werfen.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._2",
    "subject": "mario2"
  },
  {
    "id": "expand-nintendo-010",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Mario Kart: Welches besondere Rennformat lässt Spieler Ballons der Gegner zerstören?",
    "answers": [
      "Battle Mode",
      "Time Trial",
      "Grand Prix",
      "Match Race"
    ],
    "note": "Richtig ist: Battle Mode.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Kart",
    "subject": "kart"
  },
  {
    "id": "expand-nintendo-011",
    "cat": "nintendo",
    "tier": 1,
    "q": "Donkey Kong Country 2: Wen versuchen Diddy und Dixie zu retten?",
    "answers": [
      "Donkey Kong",
      "Cranky Kong",
      "Funky Kong",
      "Candy Kong"
    ],
    "note": "Richtig ist: Donkey Kong.",
    "source": "https://en.wikipedia.org/wiki/Donkey_Kong_Country_2:_Diddy's_Kong_Quest",
    "subject": "dk2"
  },
  {
    "id": "expand-nintendo-012",
    "cat": "nintendo",
    "tier": 1,
    "q": "The Legend of Zelda auf dem NES: Was erhält Link in der ersten Höhle von einem alten Mann?",
    "answers": [
      "Ein Schwert",
      "Einen Bogen",
      "Eine Flöte",
      "Eine Leiter"
    ],
    "note": "Richtig ist: Ein Schwert.",
    "source": "https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)",
    "subject": "zelda1"
  },
  {
    "id": "expand-nintendo-013",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Metroid: Auf welchem Planeten spielt der Hauptteil?",
    "answers": [
      "Zebes",
      "SR388",
      "Tallon IV",
      "Aether"
    ],
    "note": "Richtig ist: Zebes.",
    "source": "https://en.wikipedia.org/wiki/Super_Metroid",
    "subject": "metroid"
  },
  {
    "id": "expand-nintendo-014",
    "cat": "nintendo",
    "tier": 2,
    "q": "Kirby’s Adventure: Warum zerbrach Dedede ursprünglich den Star Rod?",
    "answers": [
      "Um Nightmare einzusperren",
      "Um Kirby zu entführen",
      "Um Dream Land zu verkaufen",
      "Um einen Drachen zu erschaffen"
    ],
    "note": "Richtig ist: Um Nightmare einzusperren.",
    "source": "https://en.wikipedia.org/wiki/Kirby's_Adventure",
    "subject": "kirby"
  },
  {
    "id": "expand-nintendo-015",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Bros. 2, westliche NES-Fassung: Wie heißt der Endgegner?",
    "answers": [
      "Wart",
      "Bowser",
      "Tatanga",
      "Wario"
    ],
    "note": "Richtig ist: Wart.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._2",
    "subject": "mario2"
  },
  {
    "id": "expand-nintendo-016",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Kart: Welche Strecke beendet den Special Cup?",
    "answers": [
      "Rainbow Road",
      "Bowser Castle 3",
      "Vanilla Lake 2",
      "Donut Plains 3"
    ],
    "note": "Richtig ist: Rainbow Road.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Kart",
    "subject": "kart"
  },
  {
    "id": "expand-nintendo-017",
    "cat": "nintendo",
    "tier": 2,
    "q": "Donkey Kong Country 2: Welche Fähigkeit von Dixie hilft bei weiten Sprüngen?",
    "answers": [
      "Propellerwirbel mit ihrem Haar",
      "Ein Doppelsprung mit Raketen",
      "Ein Luftschild",
      "Ein Greifhaken"
    ],
    "note": "Richtig ist: Propellerwirbel mit ihrem Haar.",
    "source": "https://en.wikipedia.org/wiki/Donkey_Kong_Country_2:_Diddy's_Kong_Quest",
    "subject": "dk2"
  },
  {
    "id": "expand-nintendo-018",
    "cat": "nintendo",
    "tier": 2,
    "q": "The Legend of Zelda auf dem NES: Welche Waffe trifft Ganon in der entscheidenden Endkampfphase?",
    "answers": [
      "Silberpfeile",
      "Feuerstab",
      "Bumerang",
      "Bomben"
    ],
    "note": "Richtig ist: Silberpfeile.",
    "source": "https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)",
    "subject": "zelda1"
  },
  {
    "id": "expand-sega-001",
    "cat": "sega",
    "tier": 0,
    "q": "Sonic CD: Welche rosafarbene Igeldame hat hier ihr Spieldebüt?",
    "answers": [
      "Amy Rose",
      "Blaze",
      "Rouge",
      "Cream"
    ],
    "note": "Richtig ist: Amy Rose.",
    "source": "https://en.wikipedia.org/wiki/Sonic_CD",
    "subject": "soniccd"
  },
  {
    "id": "expand-sega-002",
    "cat": "sega",
    "tier": 0,
    "q": "Golden Axe: Welcher der drei ursprünglichen Helden ist ein Zwerg?",
    "answers": [
      "Gilius Thunderhead",
      "Ax Battler",
      "Death Adder",
      "Tyris Flare"
    ],
    "note": "Richtig ist: Gilius Thunderhead.",
    "source": "https://en.wikipedia.org/wiki/Golden_Axe_(video_game)",
    "subject": "axe"
  },
  {
    "id": "expand-sega-003",
    "cat": "sega",
    "tier": 0,
    "q": "Ecco the Dolphin: Welches Tier steuert man?",
    "answers": [
      "Einen Delfin",
      "Einen Hai",
      "Einen Wal",
      "Einen Seelöwen"
    ],
    "note": "Richtig ist: Einen Delfin.",
    "source": "https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)",
    "subject": "ecco"
  },
  {
    "id": "expand-sega-004",
    "cat": "sega",
    "tier": 0,
    "q": "Gunstar Heroes: Welches Studio entwickelte das Spiel?",
    "answers": [
      "Treasure",
      "Rare",
      "Capcom",
      "Konami"
    ],
    "note": "Richtig ist: Treasure.",
    "source": "https://en.wikipedia.org/wiki/Gunstar_Heroes",
    "subject": "gunstar"
  },
  {
    "id": "expand-sega-005",
    "cat": "sega",
    "tier": 0,
    "q": "The Revenge of Shinobi: Wie heißt der Ninja-Held?",
    "answers": [
      "Joe Musashi",
      "Ryu Hayabusa",
      "Strider Hiryu",
      "Hattori Hanzo"
    ],
    "note": "Richtig ist: Joe Musashi.",
    "source": "https://en.wikipedia.org/wiki/The_Revenge_of_Shinobi_(1989_video_game)",
    "subject": "shinobi"
  },
  {
    "id": "expand-sega-006",
    "cat": "sega",
    "tier": 0,
    "q": "Altered Beast: Wer erweckt den Helden zum Leben?",
    "answers": [
      "Zeus",
      "Odin",
      "Anubis",
      "Poseidon"
    ],
    "note": "Richtig ist: Zeus.",
    "source": "https://en.wikipedia.org/wiki/Altered_Beast",
    "subject": "beast"
  },
  {
    "id": "expand-sega-007",
    "cat": "sega",
    "tier": 1,
    "q": "Sonic CD: Welche besondere Mechanik verändert die Level?",
    "answers": [
      "Zeitreisen",
      "Jahreszeiten per Knopfdruck",
      "Unterwasser-Basenbau",
      "Zufällige Schwerkraft"
    ],
    "note": "Richtig ist: Zeitreisen.",
    "source": "https://en.wikipedia.org/wiki/Sonic_CD",
    "subject": "soniccd"
  },
  {
    "id": "expand-sega-008",
    "cat": "sega",
    "tier": 1,
    "q": "Golden Axe: Wie heißt der Hauptgegner des ursprünglichen Arcade-Spiels?",
    "answers": [
      "Death Adder",
      "Dark Guld",
      "Mr. X",
      "Neff"
    ],
    "note": "Richtig ist: Death Adder.",
    "source": "https://en.wikipedia.org/wiki/Golden_Axe_(video_game)",
    "subject": "axe"
  },
  {
    "id": "expand-sega-009",
    "cat": "sega",
    "tier": 1,
    "q": "Ecco: Welche Fähigkeit dient der Kommunikation und Orientierung?",
    "answers": [
      "Sonar",
      "Gedankenlesen",
      "Infrarotsicht",
      "Magnetismus"
    ],
    "note": "Richtig ist: Sonar.",
    "source": "https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)",
    "subject": "ecco"
  },
  {
    "id": "expand-sega-010",
    "cat": "sega",
    "tier": 1,
    "q": "Gunstar Heroes: Was kann man mit den vier Grundwaffen tun?",
    "answers": [
      "Zwei zu einer neuen Waffe kombinieren",
      "Sie zu Fahrzeugen umbauen",
      "Sie nur verkaufen",
      "Sie zu Schilden einschmelzen"
    ],
    "note": "Richtig ist: Zwei zu einer neuen Waffe kombinieren.",
    "source": "https://en.wikipedia.org/wiki/Gunstar_Heroes",
    "subject": "gunstar"
  },
  {
    "id": "expand-sega-011",
    "cat": "sega",
    "tier": 1,
    "q": "The Revenge of Shinobi: Welche Wurfwaffen gehören zur Standardausrüstung?",
    "answers": [
      "Shuriken",
      "Bumerangs",
      "Harpunen",
      "Wurfäxte"
    ],
    "note": "Richtig ist: Shuriken.",
    "source": "https://en.wikipedia.org/wiki/The_Revenge_of_Shinobi_(1989_video_game)",
    "subject": "shinobi"
  },
  {
    "id": "expand-sega-012",
    "cat": "sega",
    "tier": 1,
    "q": "Altered Beast: Was löst die Verwandlung in eine Bestie aus?",
    "answers": [
      "Drei eingesammelte Spirit Balls",
      "Hundert Münzen",
      "Ein Zauberspruch",
      "Ein besiegter Endgegner"
    ],
    "note": "Richtig ist: Drei eingesammelte Spirit Balls.",
    "source": "https://en.wikipedia.org/wiki/Altered_Beast",
    "subject": "beast"
  },
  {
    "id": "expand-sega-013",
    "cat": "sega",
    "tier": 2,
    "q": "Sonic CD: Welche Schätze ersetzen hier die Chaos Emeralds als Sammelziel?",
    "answers": [
      "Time Stones",
      "Power Moons",
      "Dragon Balls",
      "Star Pieces"
    ],
    "note": "Richtig ist: Time Stones.",
    "source": "https://en.wikipedia.org/wiki/Sonic_CD",
    "subject": "soniccd"
  },
  {
    "id": "expand-sega-014",
    "cat": "sega",
    "tier": 2,
    "q": "Golden Axe: Wodurch füllt man den Vorrat für Zauber auf?",
    "answers": [
      "Mit blauen Tränken",
      "Mit goldenen Schilden",
      "Mit roten Federn",
      "Mit grünen Ringen"
    ],
    "note": "Richtig ist: Mit blauen Tränken.",
    "source": "https://en.wikipedia.org/wiki/Golden_Axe_(video_game)",
    "subject": "axe"
  },
  {
    "id": "expand-sega-015",
    "cat": "sega",
    "tier": 2,
    "q": "Ecco: Warum muss der Delfin regelmäßig auftauchen?",
    "answers": [
      "Um Luft zu holen",
      "Um seine Farbe zu ändern",
      "Um einen Spielstand zu laden",
      "Um Münzen abzugeben"
    ],
    "note": "Richtig ist: Um Luft zu holen.",
    "source": "https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)",
    "subject": "ecco"
  },
  {
    "id": "expand-sega-016",
    "cat": "sega",
    "tier": 2,
    "q": "Gunstar Heroes: Welche Farben tragen die beiden spielbaren Brüder?",
    "answers": [
      "Rot und Blau",
      "Grün und Gelb",
      "Schwarz und Weiß",
      "Orange und Violett"
    ],
    "note": "Richtig ist: Rot und Blau.",
    "source": "https://en.wikipedia.org/wiki/Gunstar_Heroes",
    "subject": "gunstar"
  },
  {
    "id": "expand-sega-017",
    "cat": "sega",
    "tier": 2,
    "q": "The Revenge of Shinobi: Wer komponierte den Soundtrack?",
    "answers": [
      "Yuzo Koshiro",
      "Koji Kondo",
      "Nobuo Uematsu",
      "Hirokazu Tanaka"
    ],
    "note": "Richtig ist: Yuzo Koshiro.",
    "source": "https://en.wikipedia.org/wiki/The_Revenge_of_Shinobi_(1989_video_game)",
    "subject": "shinobi"
  },
  {
    "id": "expand-sega-018",
    "cat": "sega",
    "tier": 2,
    "q": "Altered Beast: Welche Gestalt nimmt der Held im ersten Level an?",
    "answers": [
      "Werwolf",
      "Werbär",
      "Werdrache",
      "Wertiger"
    ],
    "note": "Richtig ist: Werwolf.",
    "source": "https://en.wikipedia.org/wiki/Altered_Beast",
    "subject": "beast"
  },
  {
    "id": "expand-purple-001",
    "cat": "purple",
    "tier": 0,
    "q": "In welchem Jahr wurde Deep Purple gegründet?",
    "answers": [
      "1968",
      "1964",
      "1972",
      "1975"
    ],
    "note": "Richtig ist: 1968.",
    "source": "https://deeppurple.com/pages/the-band",
    "subject": "dpband"
  },
  {
    "id": "expand-purple-002",
    "cat": "purple",
    "tier": 0,
    "q": "Wer spielte in der klassischen Mark-II-Besetzung Schlagzeug?",
    "answers": [
      "Ian Paice",
      "Cozy Powell",
      "Bill Ward",
      "John Bonham"
    ],
    "note": "Richtig ist: Ian Paice.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio04.html",
    "subject": "dprock"
  },
  {
    "id": "expand-purple-003",
    "cat": "purple",
    "tier": 0,
    "q": "Welches Instrument spielte Jon Lord hauptsächlich bei Deep Purple?",
    "answers": [
      "Orgel und Keyboards",
      "Bass",
      "Schlagzeug",
      "Saxofon"
    ],
    "note": "Richtig ist: Orgel und Keyboards.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio04.html",
    "subject": "dprock"
  },
  {
    "id": "expand-purple-004",
    "cat": "purple",
    "tier": 0,
    "q": "Wie heißt das erste Studioalbum von Deep Purple?",
    "answers": [
      "Shades of Deep Purple",
      "Fireball",
      "In Rock",
      "Machine Head"
    ],
    "note": "Richtig ist: Shades of Deep Purple.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio01.html",
    "subject": "dpshades"
  },
  {
    "id": "expand-purple-005",
    "cat": "purple",
    "tier": 0,
    "q": "Wer sang auf der Originalaufnahme von „Hush“ durch Deep Purple?",
    "answers": [
      "Rod Evans",
      "Ian Gillan",
      "David Coverdale",
      "Joe Lynn Turner"
    ],
    "note": "Richtig ist: Rod Evans.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio01.html",
    "subject": "dpshades"
  },
  {
    "id": "expand-purple-006",
    "cat": "purple",
    "tier": 1,
    "q": "Welches Livealbum dokumentiert Deep Purples Japan-Konzerte von 1972?",
    "answers": [
      "Made in Japan",
      "Made in Europe",
      "Nobody’s Perfect",
      "Last Concert in Japan"
    ],
    "note": "Richtig ist: Made in Japan.",
    "source": "https://deeppurple.com/pages/the-band",
    "subject": "dpband"
  },
  {
    "id": "expand-purple-007",
    "cat": "purple",
    "tier": 1,
    "q": "In welcher Stadt ereignete sich der Brand hinter „Smoke on the Water“?",
    "answers": [
      "Montreux",
      "Genf",
      "Zürich",
      "Lausanne"
    ],
    "note": "Richtig ist: Montreux.",
    "source": "https://www.loudersound.com/features/deep-purple-making-of-machine-head",
    "subject": "dpmachine"
  },
  {
    "id": "expand-purple-008",
    "cat": "purple",
    "tier": 1,
    "q": "Wer war der Bassist der klassischen Mark-II-Besetzung?",
    "answers": [
      "Roger Glover",
      "Nick Simper",
      "Glenn Hughes",
      "John Paul Jones"
    ],
    "note": "Richtig ist: Roger Glover.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio04.html",
    "subject": "dprock"
  },
  {
    "id": "expand-purple-009",
    "cat": "purple",
    "tier": 1,
    "q": "Welche zwei Musiker kamen für Mark III an Gesang und Bass hinzu?",
    "answers": [
      "David Coverdale und Glenn Hughes",
      "Rod Evans und Nick Simper",
      "Ian Gillan und Roger Glover",
      "Joe Lynn Turner und Bob Daisley"
    ],
    "note": "Richtig ist: David Coverdale und Glenn Hughes.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio08.html",
    "subject": "dpburn"
  },
  {
    "id": "expand-purple-010",
    "cat": "purple",
    "tier": 1,
    "q": "Auf welchem Originalalbum steht „Child in Time“?",
    "answers": [
      "In Rock",
      "Burn",
      "Fireball",
      "Stormbringer"
    ],
    "note": "Richtig ist: In Rock.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio04.html",
    "subject": "dprock"
  },
  {
    "id": "expand-purple-011",
    "cat": "purple",
    "tier": 2,
    "q": "Welches Album markierte 1984 die Wiedervereinigung von Mark II?",
    "answers": [
      "Perfect Strangers",
      "The House of Blue Light",
      "Slaves and Masters",
      "The Battle Rages On"
    ],
    "note": "Richtig ist: Perfect Strangers.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio11.html",
    "subject": "dpperfect"
  },
  {
    "id": "expand-purple-012",
    "cat": "purple",
    "tier": 2,
    "q": "Wer spielte auf „Come Taste the Band“ Gitarre?",
    "answers": [
      "Tommy Bolin",
      "Ritchie Blackmore",
      "Steve Morse",
      "Joe Satriani"
    ],
    "note": "Richtig ist: Tommy Bolin.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio10.html",
    "subject": "dpcome"
  },
  {
    "id": "expand-purple-013",
    "cat": "purple",
    "tier": 2,
    "q": "Auf welchem Deep-Purple-Album erschien „Mistreated“ erstmals?",
    "answers": [
      "Burn",
      "Stormbringer",
      "Machine Head",
      "Fireball"
    ],
    "note": "Richtig ist: Burn.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio08.html",
    "subject": "dpburn"
  },
  {
    "id": "expand-purple-014",
    "cat": "purple",
    "tier": 2,
    "q": "Wer schrieb den von Deep Purple gecoverten Song „Hush“?",
    "answers": [
      "Joe South",
      "Ray Davies",
      "Donovan",
      "Willie Dixon"
    ],
    "note": "Richtig ist: Joe South.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio01.html",
    "subject": "dpshades"
  },
  {
    "id": "expand-purple-015",
    "cat": "purple",
    "tier": 2,
    "q": "Welcher Song beschließt die originale „Stormbringer“-LP?",
    "answers": [
      "Soldier of Fortune",
      "Burn",
      "You Fool No One",
      "Mistreated"
    ],
    "note": "Richtig ist: Soldier of Fortune.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio09.html",
    "subject": "dpstorm"
  },
  {
    "id": "expand-beatles-001",
    "cat": "beatles",
    "tier": 0,
    "q": "Aus welcher englischen Stadt stammen die Beatles?",
    "answers": [
      "Liverpool",
      "Manchester",
      "Birmingham",
      "Leeds"
    ],
    "note": "Richtig ist: Liverpool.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "expand-beatles-002",
    "cat": "beatles",
    "tier": 0,
    "q": "Wer spielte in der berühmten Viererbesetzung Schlagzeug?",
    "answers": [
      "Ringo Starr",
      "George Harrison",
      "Paul McCartney",
      "John Lennon"
    ],
    "note": "Richtig ist: Ringo Starr.",
    "source": "https://www.thebeatles.com/beatles-anthology-0",
    "subject": "banth"
  },
  {
    "id": "expand-beatles-003",
    "cat": "beatles",
    "tier": 0,
    "q": "Wie heißt das erste britische Studioalbum der Beatles?",
    "answers": [
      "Please Please Me",
      "With the Beatles",
      "Beatles for Sale",
      "Help!"
    ],
    "note": "Richtig ist: Please Please Me.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "expand-beatles-004",
    "cat": "beatles",
    "tier": 0,
    "q": "Welches Album zeigt die Beatles auf einem Zebrastreifen?",
    "answers": [
      "Abbey Road",
      "Revolver",
      "Rubber Soul",
      "Let It Be"
    ],
    "note": "Richtig ist: Abbey Road.",
    "source": "https://www.thebeatles.com/abbey-road",
    "subject": "babbey"
  },
  {
    "id": "expand-beatles-005",
    "cat": "beatles",
    "tier": 0,
    "q": "Wie wird das Doppelalbum „The Beatles“ von 1968 meist genannt?",
    "answers": [
      "White Album",
      "Red Album",
      "Blue Album",
      "Black Album"
    ],
    "note": "Richtig ist: White Album.",
    "source": "https://www.thebeatles.com/beatles-0",
    "subject": "bwhite"
  },
  {
    "id": "expand-beatles-006",
    "cat": "beatles",
    "tier": 1,
    "q": "Welcher Produzent prägte die Studioarbeit der Beatles besonders?",
    "answers": [
      "George Martin",
      "Phil Ramone",
      "Quincy Jones",
      "Brian Eno"
    ],
    "note": "Richtig ist: George Martin.",
    "source": "https://www.thebeatles.com/beatles-anthology-0",
    "subject": "banth"
  },
  {
    "id": "expand-beatles-007",
    "cat": "beatles",
    "tier": 1,
    "q": "Welche deutsche Stadt war vor ihrem Durchbruch ein wichtiger Auftrittsort der Beatles?",
    "answers": [
      "Hamburg",
      "Berlin",
      "München",
      "Frankfurt"
    ],
    "note": "Richtig ist: Hamburg.",
    "source": "https://www.thebeatles.com/beatles-anthology-0",
    "subject": "banth"
  },
  {
    "id": "expand-beatles-008",
    "cat": "beatles",
    "tier": 1,
    "q": "Wer managte die Beatles bis zu seinem Tod 1967?",
    "answers": [
      "Brian Epstein",
      "Andrew Loog Oldham",
      "Peter Grant",
      "Allen Klein"
    ],
    "note": "Richtig ist: Brian Epstein.",
    "source": "https://www.thebeatles.com/beatles-anthology-0",
    "subject": "banth"
  },
  {
    "id": "expand-beatles-009",
    "cat": "beatles",
    "tier": 1,
    "q": "Wie hieß der erste Spielfilm der Beatles?",
    "answers": [
      "A Hard Day’s Night",
      "Help!",
      "Yellow Submarine",
      "Magical Mystery Tour"
    ],
    "note": "Richtig ist: A Hard Day’s Night.",
    "source": "https://www.thebeatles.com/hard-days-night-0",
    "subject": "bfilm"
  },
  {
    "id": "expand-beatles-010",
    "cat": "beatles",
    "tier": 1,
    "q": "Welches Label veröffentlichte das White Album erstmals?",
    "answers": [
      "Apple",
      "Decca",
      "Pye",
      "Island"
    ],
    "note": "Richtig ist: Apple.",
    "source": "https://www.thebeatles.com/beatles-0",
    "subject": "bwhite"
  },
  {
    "id": "expand-beatles-011",
    "cat": "beatles",
    "tier": 2,
    "q": "Welcher Beatle schrieb „While My Guitar Gently Weeps“?",
    "answers": [
      "George Harrison",
      "Paul McCartney",
      "John Lennon",
      "Ringo Starr"
    ],
    "note": "Richtig ist: George Harrison.",
    "source": "https://www.thebeatles.com/while-my-guitar-gently-weeps",
    "subject": "bguitar"
  },
  {
    "id": "expand-beatles-012",
    "cat": "beatles",
    "tier": 2,
    "q": "Welcher Gast spielt die Leadgitarre in „While My Guitar Gently Weeps“?",
    "answers": [
      "Eric Clapton",
      "Jeff Beck",
      "Jimmy Page",
      "Peter Green"
    ],
    "note": "Richtig ist: Eric Clapton.",
    "source": "https://www.thebeatles.com/while-my-guitar-gently-weeps",
    "subject": "bguitar"
  },
  {
    "id": "expand-beatles-013",
    "cat": "beatles",
    "tier": 2,
    "q": "In welchem Jahr erschien „Revolver“ ursprünglich?",
    "answers": [
      "1966",
      "1964",
      "1967",
      "1969"
    ],
    "note": "Richtig ist: 1966.",
    "source": "https://www.thebeatles.com/revolver",
    "subject": "brev"
  },
  {
    "id": "expand-beatles-014",
    "cat": "beatles",
    "tier": 2,
    "q": "Wer gestaltete das Cover von „Revolver“?",
    "answers": [
      "Klaus Voormann",
      "Peter Blake",
      "Richard Hamilton",
      "Robert Freeman"
    ],
    "note": "Richtig ist: Klaus Voormann.",
    "source": "https://www.thebeatles.com/revolver",
    "subject": "brev"
  },
  {
    "id": "expand-beatles-015",
    "cat": "beatles",
    "tier": 2,
    "q": "Auf welchem Gebäude fand der berühmte letzte Liveauftritt im Januar 1969 statt?",
    "answers": [
      "Apple-Hauptquartier in der Savile Row",
      "Abbey Road Studios",
      "Royal Albert Hall",
      "London Palladium"
    ],
    "note": "Richtig ist: Apple-Hauptquartier in der Savile Row.",
    "source": "https://www.thebeatles.com/30-january-1969-beatles-rooftop-gig",
    "subject": "broof"
  }
]);
HARD_BANK.push(...[
  {
    "id": "hard-expand-lucas-019",
    "cat": "lucas",
    "tier": 0,
    "q": "Full Throttle: Wer spricht Adrian Ripburger in der englischen Originalfassung?",
    "answers": [
      "Mark Hamill",
      "Harrison Ford",
      "Tim Curry",
      "James Earl Jones"
    ],
    "note": "Richtig ist: Mark Hamill.",
    "source": "https://en.wikipedia.org/wiki/Full_Throttle_(1995_video_game)",
    "subject": "throttle"
  },
  {
    "id": "hard-expand-lucas-020",
    "cat": "lucas",
    "tier": 0,
    "q": "Grim Fandango: Wie lautet Meches vollständiger Vorname?",
    "answers": [
      "Mercedes",
      "Marisol",
      "Margarita",
      "Magdalena"
    ],
    "note": "Richtig ist: Mercedes.",
    "source": "https://en.wikipedia.org/wiki/Grim_Fandango",
    "subject": "grim"
  },
  {
    "id": "hard-expand-lucas-021",
    "cat": "lucas",
    "tier": 0,
    "q": "The Dig: Welcher Schauspieler spricht Boston Low im englischen Original?",
    "answers": [
      "Robert Patrick",
      "Michael Biehn",
      "Lance Henriksen",
      "Kurt Russell"
    ],
    "note": "Richtig ist: Robert Patrick.",
    "source": "https://www.lucasfilm.com/news/lucasfilm-games-rewind-the-dig/",
    "subject": "dig"
  },
  {
    "id": "hard-expand-lucas-022",
    "cat": "lucas",
    "tier": 0,
    "q": "Sam & Max Hit the Road: Welche Automarke fahren die beiden?",
    "answers": [
      "DeSoto",
      "Studebaker",
      "Cadillac",
      "Packard"
    ],
    "note": "Richtig ist: DeSoto.",
    "source": "https://en.wikipedia.org/wiki/Sam_%26_Max_Hit_the_Road",
    "subject": "sam"
  },
  {
    "id": "hard-expand-lucas-023",
    "cat": "lucas",
    "tier": 1,
    "q": "Loom: Wie heißt der junge Schmied, dessen Kleidung Bobbin übernimmt?",
    "answers": [
      "Rusty Nailbender",
      "Goodmold",
      "Mandible",
      "Atropos"
    ],
    "note": "Richtig ist: Rusty Nailbender.",
    "source": "https://www.walkthroughking.com/text/loom.aspx",
    "subject": "loomwalk"
  },
  {
    "id": "hard-expand-lucas-024",
    "cat": "lucas",
    "tier": 1,
    "q": "Zak McKracken: Wie heißen die beiden Studentinnen auf dem Mars?",
    "answers": [
      "Melissa und Leslie",
      "Annie und Melissa",
      "Leslie und Elaine",
      "Annie und Laverne"
    ],
    "note": "Richtig ist: Melissa und Leslie.",
    "source": "https://en.wikipedia.org/wiki/Zak_McKracken_and_the_Alien_Mindbenders",
    "subject": "zak"
  },
  {
    "id": "hard-expand-lucas-025",
    "cat": "lucas",
    "tier": 1,
    "q": "Full Throttle: Welche Band lieferte viele der Rocksongs des Soundtracks?",
    "answers": [
      "The Gone Jackals",
      "The Black Crowes",
      "The Georgia Satellites",
      "The Cult"
    ],
    "note": "Richtig ist: The Gone Jackals.",
    "source": "https://en.wikipedia.org/wiki/Full_Throttle_(1995_video_game)",
    "subject": "throttle"
  },
  {
    "id": "hard-expand-lucas-026",
    "cat": "lucas",
    "tier": 1,
    "q": "Grim Fandango: Welches Schiff will Manny im zweiten Jahr erreichen?",
    "answers": [
      "SS Limbo",
      "SS Rubacava",
      "SS Calavera",
      "SS Marrow"
    ],
    "note": "Richtig ist: SS Limbo.",
    "source": "https://grimfandango.network/game-info/walkthrough/2",
    "subject": "grimwalk"
  },
  {
    "id": "hard-expand-lucas-027",
    "cat": "lucas",
    "tier": 2,
    "q": "The Dig: Welche Gegenstände können tote Wesen wiederbeleben?",
    "answers": [
      "Grüne Lebenskristalle",
      "Blaue Metallplatten",
      "Goldene Stäbe",
      "Rote Kugeln"
    ],
    "note": "Richtig ist: Grüne Lebenskristalle.",
    "source": "https://www.walkthroughking.com/text/dig.aspx",
    "subject": "digwalk"
  },
  {
    "id": "hard-expand-lucas-028",
    "cat": "lucas",
    "tier": 2,
    "q": "Sam & Max Hit the Road: Welche Sehenswürdigkeit besteht aus einem riesigen aufgewickelten Faden?",
    "answers": [
      "Der größte Bindfadenknäuel der Welt",
      "Der größte Teppich der Welt",
      "Die längste Hängebrücke",
      "Der größte Webstuhl"
    ],
    "note": "Richtig ist: Der größte Bindfadenknäuel der Welt.",
    "source": "https://en.wikipedia.org/wiki/Sam_%26_Max_Hit_the_Road",
    "subject": "sam"
  },
  {
    "id": "hard-expand-lucas-029",
    "cat": "lucas",
    "tier": 2,
    "q": "Loom: Welcher Bischof versucht die Macht der Weber für sich zu nutzen?",
    "answers": [
      "Mandible",
      "Goodmold",
      "Atropos",
      "Cob"
    ],
    "note": "Richtig ist: Mandible.",
    "source": "https://www.walkthroughking.com/text/loom.aspx",
    "subject": "loomwalk"
  },
  {
    "id": "hard-expand-lucas-030",
    "cat": "lucas",
    "tier": 2,
    "q": "Zak McKracken: Wie heißen die Aliens, die die Menschheit verdummen wollen?",
    "answers": [
      "Caponians",
      "Skolarians",
      "Zalorians",
      "Vorticons"
    ],
    "note": "Richtig ist: Caponians.",
    "source": "https://en.wikipedia.org/wiki/Zak_McKracken_and_the_Alien_Mindbenders",
    "subject": "zak"
  },
  {
    "id": "hard-expand-star-019",
    "cat": "star",
    "tier": 0,
    "q": "Episode I: Welcher Spezies gehört Podrenner Sebulba an?",
    "answers": [
      "Dug",
      "Toydarianer",
      "Gran",
      "Rodianer"
    ],
    "note": "Richtig ist: Dug.",
    "source": "https://www.starwars.com/databank/sebulba",
    "subject": "sws"
  },
  {
    "id": "hard-expand-star-020",
    "cat": "star",
    "tier": 0,
    "q": "Episode II: Wie heißt die Attentäterin, die Obi-Wan und Anakin durch Coruscant verfolgen?",
    "answers": [
      "Zam Wesell",
      "Aurra Sing",
      "Sly Moore",
      "Shmi Skywalker"
    ],
    "note": "Richtig ist: Zam Wesell.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones",
    "subject": "sw2"
  },
  {
    "id": "hard-expand-star-021",
    "cat": "star",
    "tier": 0,
    "q": "Rogue One: Wie lautet Galen Ersos Codename für den Plan-Datensatz, den Jyn findet?",
    "answers": [
      "Stardust",
      "Black Sun",
      "Eclipse",
      "Red Harvest"
    ],
    "note": "Richtig ist: Stardust.",
    "source": "https://en.wikipedia.org/wiki/Rogue_One",
    "subject": "swr"
  },
  {
    "id": "hard-expand-star-022",
    "cat": "star",
    "tier": 0,
    "q": "Episode VII: Wie heißt der Händler, bei dem Rey Schrott gegen Nahrung eintauscht?",
    "answers": [
      "Unkar Plutt",
      "Watto",
      "Dexter Jettster",
      "Quiggold"
    ],
    "note": "Richtig ist: Unkar Plutt.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
    "subject": "sw7"
  },
  {
    "id": "hard-expand-star-023",
    "cat": "star",
    "tier": 1,
    "q": "Episode VI: Wie heißt Admiral Ackbars Flaggschiff?",
    "answers": [
      "Home One",
      "Profundity",
      "Raddus",
      "Tantive IV"
    ],
    "note": "Richtig ist: Home One.",
    "source": "https://www.starwars.com/databank/home-one",
    "subject": "swh"
  },
  {
    "id": "hard-expand-star-024",
    "cat": "star",
    "tier": 1,
    "q": "Episode VIII: Wie nennt sich der undurchsichtige Codeknacker, der Finn und Rose hilft?",
    "answers": [
      "DJ",
      "Bodhi",
      "Hux",
      "Lor San Tekka"
    ],
    "note": "Richtig ist: DJ.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
    "subject": "sw8"
  },
  {
    "id": "hard-expand-star-025",
    "cat": "star",
    "tier": 1,
    "q": "Episode I: Wie heißt der U-Boot-Typ, den Boss Nass den Jedi überlässt?",
    "answers": [
      "Bongo",
      "Skiff",
      "Sandcrawler",
      "AT-TE"
    ],
    "note": "Richtig ist: Bongo.",
    "source": "https://www.starwars.com/databank/gungan-bongo-submarine",
    "subject": "swb"
  },
  {
    "id": "hard-expand-star-026",
    "cat": "star",
    "tier": 1,
    "q": "Episode II: Welcher Jedi soll laut den Kaminoanern die Klonarmee bestellt haben?",
    "answers": [
      "Sifo-Dyas",
      "Ki-Adi-Mundi",
      "Plo Koon",
      "Quinlan Vos"
    ],
    "note": "Richtig ist: Sifo-Dyas.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones",
    "subject": "sw2"
  },
  {
    "id": "hard-expand-star-027",
    "cat": "star",
    "tier": 2,
    "q": "Rogue One: Auf welchem Planeten arbeitet Galen Erso in einer imperialen Forschungsanlage?",
    "answers": [
      "Eadu",
      "Scarif",
      "Mustafar",
      "Wobani"
    ],
    "note": "Richtig ist: Eadu.",
    "source": "https://en.wikipedia.org/wiki/Rogue_One",
    "subject": "swr"
  },
  {
    "id": "hard-expand-star-028",
    "cat": "star",
    "tier": 2,
    "q": "Episode VII: Wie heißt der Informant, von dem Poe am Anfang einen Teil der Karte erhält?",
    "answers": [
      "Lor San Tekka",
      "Max von Sydow",
      "Bail Organa",
      "Armitage Hux"
    ],
    "note": "Richtig ist: Lor San Tekka.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens",
    "subject": "sw7"
  },
  {
    "id": "hard-expand-star-029",
    "cat": "star",
    "tier": 2,
    "q": "Episode VI: Welches gestohlene Shuttle bringt das Rebellenkommando nach Endor?",
    "answers": [
      "Tydirium",
      "Lambda One",
      "Sentinel",
      "Tantive III"
    ],
    "note": "Richtig ist: Tydirium.",
    "source": "https://en.wikipedia.org/wiki/Return_of_the_Jedi",
    "subject": "sw6"
  },
  {
    "id": "hard-expand-star-030",
    "cat": "star",
    "tier": 2,
    "q": "Episode VIII: Welcher Filmregisseur führte Regie?",
    "answers": [
      "Rian Johnson",
      "J. J. Abrams",
      "Gareth Edwards",
      "Ron Howard"
    ],
    "note": "Richtig ist: Rian Johnson.",
    "source": "https://en.wikipedia.org/wiki/Star_Wars:_The_Last_Jedi",
    "subject": "sw8"
  },
  {
    "id": "hard-expand-simon-019",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Welches Getränk hilft bei den gefangenen Dämonen?",
    "answers": [
      "Swamp Shake",
      "Ingwerbier",
      "Kirschsaft",
      "Kokosmilch"
    ],
    "note": "Richtig ist: Swamp Shake.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer2.aspx",
    "subject": "simon2walk"
  },
  {
    "id": "hard-expand-simon-020",
    "cat": "simon",
    "tier": 0,
    "q": "Simon I: Wo findet Simon zu Beginn einen Magneten?",
    "answers": [
      "Am Kühlschrank",
      "Im Brunnen",
      "Im Hut",
      "Unter der Brücke"
    ],
    "note": "Richtig ist: Am Kühlschrank.",
    "source": "https://www.walkthroughking.com/text/simonthesorcerer.aspx",
    "subject": "simon1walk"
  },
  {
    "id": "hard-expand-simon-021",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Was schnitzen die Holzwürmer für die zahnlose Hexe?",
    "answers": [
      "Holzzähne",
      "Eine Holzbrille",
      "Einen Holzlöffel",
      "Eine Holzflöte"
    ],
    "note": "Richtig ist: Holzzähne.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2",
    "subject": "simon2ag"
  },
  {
    "id": "hard-expand-simon-022",
    "cat": "simon",
    "tier": 0,
    "q": "Simon II: Welches Objekt hilft der schwerhörigen Hexe?",
    "answers": [
      "Ein Muschelhorn",
      "Eine Glocke",
      "Ein Trichter",
      "Eine Trompete"
    ],
    "note": "Richtig ist: Ein Muschelhorn.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2",
    "subject": "simon2ag"
  },
  {
    "id": "hard-expand-simon-023",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Was gewinnt Simon beim Rollenspiel als Innenarchitekt?",
    "answers": [
      "Einen Tapetenkatalog",
      "Einen Teppich",
      "Einen goldenen Schlüssel",
      "Einen Bauplan"
    ],
    "note": "Richtig ist: Einen Tapetenkatalog.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2",
    "subject": "simon2ag"
  },
  {
    "id": "hard-expand-simon-024",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Womit öffnet Simon mithilfe von Alix ein Schloss?",
    "answers": [
      "Mit ihrer Haarspange",
      "Mit ihrer Halskette",
      "Mit ihrem Armreif",
      "Mit ihrem Gürtel"
    ],
    "note": "Richtig ist: Mit ihrer Haarspange.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2",
    "subject": "simon2ag"
  },
  {
    "id": "hard-expand-simon-025",
    "cat": "simon",
    "tier": 1,
    "q": "Simon II: Was kombiniert Simon auf der Insel mit einem Holzstab zur Schaufel?",
    "answers": [
      "Ein Schaufelblatt",
      "Eine Bratpfanne",
      "Einen Helm",
      "Eine Muschel"
    ],
    "note": "Richtig ist: Ein Schaufelblatt.",
    "source": "https://adventuregamers.com/walkthroughs/simon-the-sorcerer-2",
    "subject": "simon2ag"
  },
  {
    "id": "hard-expand-simon-026",
    "cat": "simon",
    "tier": 1,
    "q": "Simon I: Womit holt Simon den Schädel im Finale von oben herunter?",
    "answers": [
      "Mit einem Speer",
      "Mit einer Leiter",
      "Mit einem Besen",
      "Mit einer Angel"
    ],
    "note": "Richtig ist: Mit einem Speer.",
    "source": "https://www.metzomagic.com/showArticle.php?index=862",
    "subject": "simon1faq"
  },
  {
    "id": "hard-expand-simon-027",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Was dient dem winzigen Simon als Bootsrumpf?",
    "answers": [
      "Ein Seerosenblatt",
      "Eine Nussschale",
      "Ein Holzschuh",
      "Eine Teetasse"
    ],
    "note": "Richtig ist: Ein Seerosenblatt.",
    "source": "https://www.metzomagic.com/showArticle.php?index=862",
    "subject": "simon1faq"
  },
  {
    "id": "hard-expand-simon-028",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Womit bedroht Simon den Frosch, um ihn zum Helfen zu bringen?",
    "answers": [
      "Mit dem Verzehr einer Kaulquappe",
      "Mit dem Austrocknen des Teichs",
      "Mit einer Katze",
      "Mit einem Angelhaken"
    ],
    "note": "Richtig ist: Mit dem Verzehr einer Kaulquappe.",
    "source": "https://www.metzomagic.com/showArticle.php?index=862",
    "subject": "simon1faq"
  },
  {
    "id": "hard-expand-simon-029",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Wie viele Kerzen werden für die Dämonenbeschwörung im Finale aufgestellt?",
    "answers": [
      "Acht",
      "Vier",
      "Sechs",
      "Zwölf"
    ],
    "note": "Richtig ist: Acht.",
    "source": "https://www.metzomagic.com/showArticle.php?index=862",
    "subject": "simon1faq"
  },
  {
    "id": "hard-expand-simon-030",
    "cat": "simon",
    "tier": 2,
    "q": "Simon I: Was lässt Simon nach seiner Verkleinerung wieder wachsen?",
    "answers": [
      "Ein Pilz",
      "Ein Zaubertrank",
      "Ein Kristall",
      "Ein Stück Kuchen"
    ],
    "note": "Richtig ist: Ein Pilz.",
    "source": "https://www.metzomagic.com/showArticle.php?index=862",
    "subject": "simon1faq"
  },
  {
    "id": "hard-expand-nintendo-019",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Metroid: Welche zwei Strahlenwaffen lassen sich regulär nicht gleichzeitig aktivieren?",
    "answers": [
      "Spazer und Plasma",
      "Ice und Wave",
      "Charge und Ice",
      "Wave und Plasma"
    ],
    "note": "Richtig ist: Spazer und Plasma.",
    "source": "https://en.wikipedia.org/wiki/Super_Metroid",
    "subject": "metroid"
  },
  {
    "id": "hard-expand-nintendo-020",
    "cat": "nintendo",
    "tier": 0,
    "q": "Kirby’s Adventure: Auf welchem ursprünglichen Nintendo-System erschien es?",
    "answers": [
      "NES",
      "SNES",
      "Game Boy Color",
      "Nintendo 64"
    ],
    "note": "Richtig ist: NES.",
    "source": "https://en.wikipedia.org/wiki/Kirby's_Adventure",
    "subject": "kirby"
  },
  {
    "id": "hard-expand-nintendo-021",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Bros. 2, westliche NES-Fassung: Auf welchem japanischen Spiel basiert es?",
    "answers": [
      "Yume Kōjō: Doki Doki Panic",
      "Wrecking Crew",
      "Mappy",
      "Wonder Boy"
    ],
    "note": "Richtig ist: Yume Kōjō: Doki Doki Panic.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._2",
    "subject": "mario2"
  },
  {
    "id": "hard-expand-nintendo-022",
    "cat": "nintendo",
    "tier": 0,
    "q": "Super Mario Kart: Wie viele Fahrer stehen im Original zur Auswahl?",
    "answers": [
      "Acht",
      "Sechs",
      "Zehn",
      "Zwölf"
    ],
    "note": "Richtig ist: Acht.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Kart",
    "subject": "kart"
  },
  {
    "id": "hard-expand-nintendo-023",
    "cat": "nintendo",
    "tier": 1,
    "q": "Donkey Kong Country 2: Welchen Piratentitel trägt K. Rool?",
    "answers": [
      "Kaptain",
      "Admiral",
      "Commodore",
      "Commander"
    ],
    "note": "Richtig ist: Kaptain.",
    "source": "https://en.wikipedia.org/wiki/Donkey_Kong_Country_2:_Diddy's_Kong_Quest",
    "subject": "dk2"
  },
  {
    "id": "hard-expand-nintendo-024",
    "cat": "nintendo",
    "tier": 1,
    "q": "The Legend of Zelda auf dem NES: Welche Triforce-Komponente sammelt Link in acht Teilen?",
    "answers": [
      "Weisheit",
      "Mut",
      "Kraft",
      "Zeit"
    ],
    "note": "Richtig ist: Weisheit.",
    "source": "https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)",
    "subject": "zelda1"
  },
  {
    "id": "hard-expand-nintendo-025",
    "cat": "nintendo",
    "tier": 1,
    "q": "Super Metroid: Welcher Gegenstand macht versteckte Passagen sichtbar?",
    "answers": [
      "X-Ray Scope",
      "Reserve Tank",
      "Spring Ball",
      "Hi-Jump Boots"
    ],
    "note": "Richtig ist: X-Ray Scope.",
    "source": "https://en.wikipedia.org/wiki/Super_Metroid",
    "subject": "metroid"
  },
  {
    "id": "hard-expand-nintendo-026",
    "cat": "nintendo",
    "tier": 1,
    "q": "Kirby’s Adventure: Welches Studio entwickelte das Spiel?",
    "answers": [
      "HAL Laboratory",
      "Rare",
      "Intelligent Systems",
      "Treasure"
    ],
    "note": "Richtig ist: HAL Laboratory.",
    "source": "https://en.wikipedia.org/wiki/Kirby's_Adventure",
    "subject": "kirby"
  },
  {
    "id": "hard-expand-nintendo-027",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Bros. 2, westliche NES-Fassung: Welche Figur kann kurz in der Luft schweben?",
    "answers": [
      "Prinzessin Peach",
      "Toad",
      "Mario",
      "Luigi"
    ],
    "note": "Richtig ist: Prinzessin Peach.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Bros._2",
    "subject": "mario2"
  },
  {
    "id": "hard-expand-nintendo-028",
    "cat": "nintendo",
    "tier": 2,
    "q": "Super Mario Kart: Welche grafische SNES-Technik erzeugt die drehbare Streckenansicht?",
    "answers": [
      "Mode 7",
      "Super FX",
      "Blast Processing",
      "Raytracing"
    ],
    "note": "Richtig ist: Mode 7.",
    "source": "https://en.wikipedia.org/wiki/Super_Mario_Kart",
    "subject": "kart"
  },
  {
    "id": "hard-expand-nintendo-029",
    "cat": "nintendo",
    "tier": 2,
    "q": "Donkey Kong Country 2: Womit bezahlt man Klubbas Zugang zur Verlorenen Welt?",
    "answers": [
      "Kremmünzen",
      "Bananenmünzen",
      "DK-Münzen",
      "Extraleben-Ballons"
    ],
    "note": "Richtig ist: Kremmünzen.",
    "source": "https://en.wikipedia.org/wiki/Donkey_Kong_Country_2:_Diddy's_Kong_Quest",
    "subject": "dk2"
  },
  {
    "id": "hard-expand-nintendo-030",
    "cat": "nintendo",
    "tier": 2,
    "q": "The Legend of Zelda auf dem NES: Welcher Name startet auf einem neuen Spielstand direkt die zweite Quest?",
    "answers": [
      "ZELDA",
      "LINK",
      "GANON",
      "HYRULE"
    ],
    "note": "Richtig ist: ZELDA.",
    "source": "https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)",
    "subject": "zelda1"
  },
  {
    "id": "hard-expand-sega-019",
    "cat": "sega",
    "tier": 0,
    "q": "Sonic CD: Wo findet das Rennen gegen Metal Sonic statt?",
    "answers": [
      "Stardust Speedway",
      "Green Hill",
      "Chemical Plant",
      "Ice Cap"
    ],
    "note": "Richtig ist: Stardust Speedway.",
    "source": "https://en.wikipedia.org/wiki/Sonic_CD",
    "subject": "soniccd"
  },
  {
    "id": "hard-expand-sega-020",
    "cat": "sega",
    "tier": 0,
    "q": "Golden Axe: Welche Heldin verfügt über besonders starke Feuermagie?",
    "answers": [
      "Tyris Flare",
      "Blaze Fielding",
      "Sarah Bryant",
      "Alis Landale"
    ],
    "note": "Richtig ist: Tyris Flare.",
    "source": "https://en.wikipedia.org/wiki/Golden_Axe_(video_game)",
    "subject": "axe"
  },
  {
    "id": "hard-expand-sega-021",
    "cat": "sega",
    "tier": 0,
    "q": "Ecco: Wie heißt die außerirdische Bedrohung?",
    "answers": [
      "Vortex",
      "Metroids",
      "Covenant",
      "Reapers"
    ],
    "note": "Richtig ist: Vortex.",
    "source": "https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)",
    "subject": "ecco"
  },
  {
    "id": "hard-expand-sega-022",
    "cat": "sega",
    "tier": 0,
    "q": "Gunstar Heroes: Welcher Boss verwandelt sich in unterschiedliche Kampfmaschinen?",
    "answers": [
      "Seven Force",
      "Death Adder",
      "Metal Sonic",
      "Dark Dragon"
    ],
    "note": "Richtig ist: Seven Force.",
    "source": "https://en.wikipedia.org/wiki/Gunstar_Heroes",
    "subject": "gunstar"
  },
  {
    "id": "hard-expand-sega-023",
    "cat": "sega",
    "tier": 1,
    "q": "The Revenge of Shinobi: Wie heißt das feindliche Syndikat?",
    "answers": [
      "Neo Zeed",
      "Red Falcon",
      "Mad Gear",
      "Black Shadow"
    ],
    "note": "Richtig ist: Neo Zeed.",
    "source": "https://en.wikipedia.org/wiki/The_Revenge_of_Shinobi_(1989_video_game)",
    "subject": "shinobi"
  },
  {
    "id": "hard-expand-sega-024",
    "cat": "sega",
    "tier": 1,
    "q": "Altered Beast: Wen soll der Held aus Neffs Gewalt retten?",
    "answers": [
      "Athena",
      "Artemis",
      "Hera",
      "Persephone"
    ],
    "note": "Richtig ist: Athena.",
    "source": "https://en.wikipedia.org/wiki/Altered_Beast",
    "subject": "beast"
  },
  {
    "id": "hard-expand-sega-025",
    "cat": "sega",
    "tier": 1,
    "q": "Sonic CD: Wie viele UFOs muss man in einer normalen Special Stage zerstören?",
    "answers": [
      "Sechs",
      "Vier",
      "Acht",
      "Zehn"
    ],
    "note": "Richtig ist: Sechs.",
    "source": "https://en.wikipedia.org/wiki/Sonic_CD",
    "subject": "soniccd"
  },
  {
    "id": "hard-expand-sega-026",
    "cat": "sega",
    "tier": 1,
    "q": "Golden Axe: Welches Element ist Gilius Thunderheads Magie zugeordnet?",
    "answers": [
      "Blitz",
      "Feuer",
      "Eis",
      "Wind"
    ],
    "note": "Richtig ist: Blitz.",
    "source": "https://en.wikipedia.org/wiki/Golden_Axe_(video_game)",
    "subject": "axe"
  },
  {
    "id": "hard-expand-sega-027",
    "cat": "sega",
    "tier": 2,
    "q": "Ecco: Was ist der Asterite?",
    "answers": [
      "Ein uraltes Wesen aus kugelförmigen Segmenten",
      "Ein versunkenes U-Boot",
      "Ein Kristallschlüssel",
      "Ein außerirdischer Raumanzug"
    ],
    "note": "Richtig ist: Ein uraltes Wesen aus kugelförmigen Segmenten.",
    "source": "https://en.wikipedia.org/wiki/Ecco_the_Dolphin_(video_game)",
    "subject": "ecco"
  },
  {
    "id": "hard-expand-sega-028",
    "cat": "sega",
    "tier": 2,
    "q": "Gunstar Heroes: Welcher Abschnitt verbindet Kämpfe mit einem Brettspiel?",
    "answers": [
      "Dice Palace",
      "Scrap Brain",
      "Sky Sanctuary",
      "Mystic Cave"
    ],
    "note": "Richtig ist: Dice Palace.",
    "source": "https://en.wikipedia.org/wiki/Gunstar_Heroes",
    "subject": "gunstar"
  },
  {
    "id": "hard-expand-sega-029",
    "cat": "sega",
    "tier": 2,
    "q": "The Revenge of Shinobi: Wie heißt die entführte Verlobte des Helden?",
    "answers": [
      "Naoko",
      "Ayame",
      "Kaede",
      "Kasumi"
    ],
    "note": "Richtig ist: Naoko.",
    "source": "https://en.wikipedia.org/wiki/The_Revenge_of_Shinobi_(1989_video_game)",
    "subject": "shinobi"
  },
  {
    "id": "hard-expand-sega-030",
    "cat": "sega",
    "tier": 2,
    "q": "Altered Beast: In welches Tier verwandelt sich Neff im Endkampf?",
    "answers": [
      "Ein Nashorn",
      "Einen Löwen",
      "Eine Schlange",
      "Einen Adler"
    ],
    "note": "Richtig ist: Ein Nashorn.",
    "source": "https://en.wikipedia.org/wiki/Altered_Beast",
    "subject": "beast"
  },
  {
    "id": "hard-expand-purple-016",
    "cat": "purple",
    "tier": 0,
    "q": "Bei wessen Konzert brannte das Casino von Montreux 1971?",
    "answers": [
      "Frank Zappa and the Mothers of Invention",
      "The Who",
      "Santana",
      "Ten Years After"
    ],
    "note": "Richtig ist: Frank Zappa and the Mothers of Invention.",
    "source": "https://www.loudersound.com/features/deep-purple-making-of-machine-head",
    "subject": "dpmachine"
  },
  {
    "id": "hard-expand-purple-017",
    "cat": "purple",
    "tier": 0,
    "q": "Welcher Keyboarder übernahm 2002 dauerhaft Jon Lords Platz?",
    "answers": [
      "Don Airey",
      "Rick Wakeman",
      "Keith Emerson",
      "Tony Banks"
    ],
    "note": "Richtig ist: Don Airey.",
    "source": "https://www.thehighwaystar.com/FAQ/history.html",
    "subject": "dphistory"
  },
  {
    "id": "hard-expand-purple-018",
    "cat": "purple",
    "tier": 0,
    "q": "Welcher Gitarrist kam 1994 nach Joe Satrianis vorübergehendem Einsatz zu Deep Purple?",
    "answers": [
      "Steve Morse",
      "Tommy Bolin",
      "Gary Moore",
      "Michael Schenker"
    ],
    "note": "Richtig ist: Steve Morse.",
    "source": "https://www.thehighwaystar.com/FAQ/history.html",
    "subject": "dphistory"
  },
  {
    "id": "hard-expand-purple-019",
    "cat": "purple",
    "tier": 0,
    "q": "In welchem Münchner Studio wurde „Stormbringer“ aufgenommen?",
    "answers": [
      "Musicland Studios",
      "Hansa Studios",
      "Dierks Studios",
      "Conny’s Studio"
    ],
    "note": "Richtig ist: Musicland Studios.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio09.html",
    "subject": "dpstorm"
  },
  {
    "id": "hard-expand-purple-020",
    "cat": "purple",
    "tier": 0,
    "q": "Welcher Instrumentaltitel eröffnet „Shades of Deep Purple“?",
    "answers": [
      "And the Address",
      "Wring That Neck",
      "A 200",
      "Owed to G"
    ],
    "note": "Richtig ist: And the Address.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio01.html",
    "subject": "dpshades"
  },
  {
    "id": "hard-expand-purple-021",
    "cat": "purple",
    "tier": 1,
    "q": "Welcher Produzent betreute das Debütalbum von Deep Purple?",
    "answers": [
      "Derek Lawrence",
      "Martin Birch",
      "Roger Glover",
      "Bob Ezrin"
    ],
    "note": "Richtig ist: Derek Lawrence.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio01.html",
    "subject": "dpshades"
  },
  {
    "id": "hard-expand-purple-022",
    "cat": "purple",
    "tier": 1,
    "q": "Welcher Bassist gehörte zur ursprünglichen Mark-I-Besetzung?",
    "answers": [
      "Nick Simper",
      "Roger Glover",
      "Glenn Hughes",
      "Bob Daisley"
    ],
    "note": "Richtig ist: Nick Simper.",
    "source": "https://www.thehighwaystar.com/FAQ/history.html",
    "subject": "dphistory"
  },
  {
    "id": "hard-expand-purple-023",
    "cat": "purple",
    "tier": 1,
    "q": "Welcher lange Titel beendet das selbstbetitelte Deep-Purple-Album von 1969?",
    "answers": [
      "April",
      "Child in Time",
      "Fools",
      "Mandrake Root"
    ],
    "note": "Richtig ist: April.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio03.html",
    "subject": "dp69"
  },
  {
    "id": "hard-expand-purple-024",
    "cat": "purple",
    "tier": 1,
    "q": "Welcher schottische Songwriter schrieb „Lalena“, das Deep Purple 1969 coverten?",
    "answers": [
      "Donovan",
      "Al Stewart",
      "Gerry Rafferty",
      "Bert Jansch"
    ],
    "note": "Richtig ist: Donovan.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio03.html",
    "subject": "dp69"
  },
  {
    "id": "hard-expand-purple-025",
    "cat": "purple",
    "tier": 1,
    "q": "Welcher Titel eröffnet die originale „Perfect Strangers“-LP?",
    "answers": [
      "Knocking at Your Back Door",
      "Perfect Strangers",
      "Under the Gun",
      "Nobody’s Home"
    ],
    "note": "Richtig ist: Knocking at Your Back Door.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio11.html",
    "subject": "dpperfect"
  },
  {
    "id": "hard-expand-purple-026",
    "cat": "purple",
    "tier": 2,
    "q": "Mit dem mobilen Studio welcher Band wurde „Machine Head“ aufgenommen?",
    "answers": [
      "The Rolling Stones",
      "The Beatles",
      "The Who",
      "Pink Floyd"
    ],
    "note": "Richtig ist: The Rolling Stones.",
    "source": "https://www.loudersound.com/features/deep-purple-making-of-machine-head",
    "subject": "dpmachine"
  },
  {
    "id": "hard-expand-purple-027",
    "cat": "purple",
    "tier": 2,
    "q": "Welches Instrumentalstück steht am Ende der ursprünglichen „Burn“-LP?",
    "answers": [
      "A 200",
      "Wring That Neck",
      "And the Address",
      "Son of Alerik"
    ],
    "note": "Richtig ist: A 200.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio08.html",
    "subject": "dpburn"
  },
  {
    "id": "hard-expand-purple-028",
    "cat": "purple",
    "tier": 2,
    "q": "Welcher Titel beschließt „Come Taste the Band“?",
    "answers": [
      "You Keep On Moving",
      "This Time Around",
      "Comin’ Home",
      "Love Child"
    ],
    "note": "Richtig ist: You Keep On Moving.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio10.html",
    "subject": "dpcome"
  },
  {
    "id": "hard-expand-purple-029",
    "cat": "purple",
    "tier": 2,
    "q": "Wer war neben Deep Purple als Produzent von „Stormbringer“ beteiligt?",
    "answers": [
      "Martin Birch",
      "George Martin",
      "Derek Lawrence",
      "Bob Ezrin"
    ],
    "note": "Richtig ist: Martin Birch.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio09.html",
    "subject": "dpstorm"
  },
  {
    "id": "hard-expand-purple-030",
    "cat": "purple",
    "tier": 2,
    "q": "Welchem Tontechniker widmete die Band „Hard Lovin’ Man“ auf „In Rock“?",
    "answers": [
      "Martin Birch",
      "Alan Parsons",
      "Geoff Emerick",
      "Eddie Kramer"
    ],
    "note": "Richtig ist: Martin Birch.",
    "source": "https://www.thehighwaystar.com/rosas/jouni/discos/studio04.html",
    "subject": "dprock"
  },
  {
    "id": "hard-expand-beatles-016",
    "cat": "beatles",
    "tier": 0,
    "q": "Welches Ensemble ergänzt Pauls Gitarre auf „Yesterday“?",
    "answers": [
      "Ein Streichquartett",
      "Ein Bläserquintett",
      "Ein Gospelchor",
      "Ein Jazztrio"
    ],
    "note": "Richtig ist: Ein Streichquartett.",
    "source": "https://www.thebeatles.com/yesterday-0",
    "subject": "byesterday"
  },
  {
    "id": "hard-expand-beatles-017",
    "cat": "beatles",
    "tier": 0,
    "q": "Welches Album wurde hauptsächlich vor „Abbey Road“ aufgenommen, aber erst danach veröffentlicht?",
    "answers": [
      "Let It Be",
      "Rubber Soul",
      "Revolver",
      "Beatles for Sale"
    ],
    "note": "Richtig ist: Let It Be.",
    "source": "https://www.thebeatles.com/abbey-road",
    "subject": "babbey"
  },
  {
    "id": "hard-expand-beatles-018",
    "cat": "beatles",
    "tier": 0,
    "q": "In welcher indischen Stadt schrieben die Beatles viele Songs für das White Album?",
    "answers": [
      "Rishikesh",
      "Mumbai",
      "Delhi",
      "Jaipur"
    ],
    "note": "Richtig ist: Rishikesh.",
    "source": "https://www.thebeatles.com/beatles-0",
    "subject": "bwhite"
  },
  {
    "id": "hard-expand-beatles-019",
    "cat": "beatles",
    "tier": 0,
    "q": "Wie viele Songs wurden am 11. Februar 1963 für „Please Please Me“ aufgenommen?",
    "answers": [
      "Zehn",
      "Vierzehn",
      "Acht",
      "Zwölf"
    ],
    "note": "Richtig ist: Zehn.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "hard-expand-beatles-020",
    "cat": "beatles",
    "tier": 0,
    "q": "Welcher Song wurde bei der langen „Please Please Me“-Session bewusst bis zuletzt aufgehoben?",
    "answers": [
      "Twist and Shout",
      "Love Me Do",
      "Misery",
      "Anna"
    ],
    "note": "Richtig ist: Twist and Shout.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "hard-expand-beatles-021",
    "cat": "beatles",
    "tier": 1,
    "q": "Wer fotografierte das Treppenhaus-Cover von „Please Please Me“?",
    "answers": [
      "Angus McBean",
      "Robert Freeman",
      "Iain Macmillan",
      "Astrid Kirchherr"
    ],
    "note": "Richtig ist: Angus McBean.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "hard-expand-beatles-022",
    "cat": "beatles",
    "tier": 1,
    "q": "Wie lautet Ringo Starrs bürgerlicher Name?",
    "answers": [
      "Richard Starkey",
      "Richard Stanley",
      "Richard Stiles",
      "Richard Stokes"
    ],
    "note": "Richtig ist: Richard Starkey.",
    "source": "https://www.thebeatles.com/ringo-starr-announces-his-20th-studio-album-whats-my-name-be-released-october-25-2019",
    "subject": "bringo"
  },
  {
    "id": "hard-expand-beatles-023",
    "cat": "beatles",
    "tier": 1,
    "q": "Wie viele Titel enthält das ursprüngliche White Album?",
    "answers": [
      "30",
      "24",
      "28",
      "32"
    ],
    "note": "Richtig ist: 30.",
    "source": "https://www.thebeatles.com/beatles-0",
    "subject": "bwhite"
  },
  {
    "id": "hard-expand-beatles-024",
    "cat": "beatles",
    "tier": 1,
    "q": "Was unterschied frühe White-Album-Cover durch einen individuellen Aufdruck?",
    "answers": [
      "Eine Seriennummer",
      "Ein persönlicher Widmungstext",
      "Ein Stadtname",
      "Ein Aufnahme-Tagesdatum"
    ],
    "note": "Richtig ist: Eine Seriennummer.",
    "source": "https://www.thebeatles.com/beatles-0",
    "subject": "bwhite"
  },
  {
    "id": "hard-expand-beatles-025",
    "cat": "beatles",
    "tier": 1,
    "q": "In welchem Monat wurde „Abbey Road“ 1969 erstmals veröffentlicht?",
    "answers": [
      "September",
      "Januar",
      "Juni",
      "Dezember"
    ],
    "note": "Richtig ist: September.",
    "source": "https://www.thebeatles.com/abbey-road",
    "subject": "babbey"
  },
  {
    "id": "hard-expand-beatles-026",
    "cat": "beatles",
    "tier": 2,
    "q": "Was fehlt auf der Vorderseite des originalen „Abbey Road“-Covers?",
    "answers": [
      "Bandname und Albumtitel",
      "Paul McCartney",
      "Der Zebrastreifen",
      "Ein Straßenhintergrund"
    ],
    "note": "Richtig ist: Bandname und Albumtitel.",
    "source": "https://www.thebeatles.com/abbey-road",
    "subject": "babbey"
  },
  {
    "id": "hard-expand-beatles-027",
    "cat": "beatles",
    "tier": 2,
    "q": "Welches Beatles-Album verdrängte „Please Please Me“ von Platz eins der britischen Albumcharts?",
    "answers": [
      "With the Beatles",
      "A Hard Day’s Night",
      "Help!",
      "Rubber Soul"
    ],
    "note": "Richtig ist: With the Beatles.",
    "source": "https://www.thebeatles.com/please-please-me",
    "subject": "bplease"
  },
  {
    "id": "hard-expand-beatles-028",
    "cat": "beatles",
    "tier": 2,
    "q": "Wie viele George-Harrison-Kompositionen stehen auf der britischen „Revolver“-LP?",
    "answers": [
      "Drei",
      "Eine",
      "Zwei",
      "Vier"
    ],
    "note": "Richtig ist: Drei.",
    "source": "https://www.thebeatles.com/revolver",
    "subject": "brev"
  },
  {
    "id": "hard-expand-beatles-029",
    "cat": "beatles",
    "tier": 2,
    "q": "An welchem Tag fand der Rooftop-Auftritt 1969 statt?",
    "answers": [
      "30. Januar",
      "9. Februar",
      "12. März",
      "22. August"
    ],
    "note": "Richtig ist: 30. Januar.",
    "source": "https://www.thebeatles.com/30-january-1969-beatles-rooftop-gig",
    "subject": "broof"
  },
  {
    "id": "hard-expand-beatles-030",
    "cat": "beatles",
    "tier": 2,
    "q": "Welcher Titel beendet die ursprüngliche „Sgt. Pepper“-LP?",
    "answers": [
      "A Day in the Life",
      "She’s Leaving Home",
      "Lovely Rita",
      "Getting Better"
    ],
    "note": "Richtig ist: A Day in the Life.",
    "source": "https://www.thebeatles.com/sgt-peppers-lonely-hearts-club-band",
    "subject": "bpepper"
  }
]);
