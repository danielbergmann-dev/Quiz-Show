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
