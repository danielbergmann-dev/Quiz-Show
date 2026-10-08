const $=s=>document.querySelector(s),names={all:'Alle Welten',lucas:'LucasArts',star:'Star Wars',simon:'Simon I & II',nintendo:'Pilze, Pixel & Triforce',sega:'Stacheln, Panzer & Prügel',purple:'Deep Purple',beatles:'The Beatles',hard:'Schwere Fragen'},prizes=[50,100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,500000,1000000];
let category='all',round=[],index=0,selected=null,phase='lobby',used={},hidden=[],help={},won=0,sound=false,audioCtx;
const euro=n=>new Intl.NumberFormat('de-DE').format(n)+' €';
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function tone(good){if(!sound)return;try{audioCtx??=new(window.AudioContext||window.webkitAudioContext)();audioCtx.resume();const t=audioCtx.currentTime;[good?440:170,good?554:150,good?660:120].forEach((hz,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=hz;g.gain.setValueAtTime(0,t+i*.11);g.gain.linearRampToValueAtTime(.08,t+i*.11+.02);g.gain.exponentialRampToValueAtTime(.001,t+i*.11+.35);o.connect(g);g.connect(audioCtx.destination);o.start(t+i*.11);o.stop(t+i*.11+.4)})}catch{}}
$('#sound').onclick=()=>{sound=!sound;$('#sound').innerHTML='♪ <span>Ton '+(sound?'an':'aus')+'</span>';$('#sound').setAttribute('aria-label','Ton '+(sound?'ausschalten':'einschalten'));$('#sound').title='Ton '+(sound?'ausschalten':'einschalten');tone(true)};

const topicIds=['lucas','star','simon','nintendo','sega','purple','beatles'];
let selectedTopics=new Set(topicIds),expertMode=false;
let seenQuestions={},seenSequence=0;
const historyKey='quiz-show-history-v1',settingsKey='quiz-show-settings-v1';
try{
 const saved=JSON.parse(localStorage.getItem(historyKey)||'{}');
 if(saved&&typeof saved==='object'&&!Array.isArray(saved)){
  for(const [id,value] of Object.entries(saved))if(Number.isSafeInteger(value)&&value>0)seenQuestions[id]=value;
  seenSequence=Math.max(0,...Object.values(seenQuestions));
 }
 const settings=JSON.parse(localStorage.getItem(settingsKey)||'null');
 if(settings&&Array.isArray(settings.topics)){
  selectedTopics=new Set(settings.topics.filter(id=>topicIds.includes(id)));
  expertMode=settings.expert===true;
 }
}catch{}
function saveSettings(){try{localStorage.setItem(settingsKey,JSON.stringify({topics:[...selectedTopics],expert:expertMode}))}catch{}}
function rememberQuestion(q){
 seenQuestions[q.id]=++seenSequence;
 try{localStorage.setItem(historyKey,JSON.stringify(seenQuestions))}catch{}
}
function mixLabel(){return selectedTopics.size===topicIds.length?'Alle Welten':selectedTopics.size===1?names[[...selectedTopics][0]]:selectedTopics.size+' Themen im Mix'}
function selectedPool(){return (expertMode?HARD_BANK:BANK).filter(q=>selectedTopics.has(q.cat))}
function toggleTopic(id){if(!topicIds.includes(id))return;selectedTopics.has(id)?selectedTopics.delete(id):selectedTopics.add(id);saveSettings();lobby();document.querySelector('[data-cat="'+id+'"]')?.focus({preventScroll:true})}
function questionSubject(q){
 if(q.subject)return q.cat+':'+q.subject;
 const title=q.q.match(/Monkey Island|Tentacle|Full Throttle|Grim Fandango|The Dig|Loom|Zak McKracken|Sam.*Max|Mario|Zelda|Donkey Kong|Sonic|Turtles|Streets of Rage|Simon II|Simon I/i);
 return q.cat+':'+(title?title[0].toLowerCase():'general');
}
function pickFresh(pool,count,counts={}){
 const remaining=shuffle(pool),picks=[];
 while(picks.length<count&&remaining.length){
  remaining.sort((a,b)=>(seenQuestions[a.id]||0)-(seenQuestions[b.id]||0)||(counts[a.cat]||0)-(counts[b.cat]||0)||(counts[questionSubject(a)]||0)-(counts[questionSubject(b)]||0));
  const q=remaining.shift();picks.push(q);counts[q.cat]=(counts[q.cat]||0)+1;counts[questionSubject(q)]=(counts[questionSubject(q)]||0)+1;
 }
 return picks;
}


function lobby(){
 phase='lobby';
 const pool=selectedPool(),fallback=expertMode&&selectedTopics.size>0&&pool.length<15;
 $('#main').innerHTML=`<section class="lobby">
 <h1 class="mix-title">Dein Themenmix</h1>
 <p class="hint">Eine oder mehrere Welten antippen. Erneut tippen zum Abwählen.</p>
 <div class="selection-tools"><span>${selectedTopics.size} von ${topicIds.length} ausgewählt</span><button class="text-button" id="all-topics">${selectedTopics.size===topicIds.length?'Alle abwählen':'Alle auswählen'}</button></div>
 <div class="categories" role="group" aria-label="Themen auswählen">${topicIds.map(id=>`<button class="category ${selectedTopics.has(id)?'active':''}" data-cat="${id}" aria-pressed="${selectedTopics.has(id)}"><span class="selection-check" aria-hidden="true">${selectedTopics.has(id)?'✓':'＋'}</span><strong>${names[id]}</strong><small>${{lucas:'Adventure-Klassiker',star:'Die Kinofilme',simon:'Magie & Sarkasmus',nintendo:'Mario · Zelda · Donkey Kong',sega:'Sonic · Turtles · Sega-Klassiker',purple:'Hardrock · Alben · Besetzungen',beatles:'Songs · Studio · Bandgeschichte'}[id]}</small></button>`).join('')}</div>
 <button class="difficulty-toggle ${expertMode?'active':''}" id="expert-mode" aria-pressed="${expertMode}"><span>Schwere Fragen</span><strong>${expertMode?'An ✓':'Aus'}</strong></button>
 <p class="hint pool-note" aria-live="polite">${!selectedTopics.size?'Wähle mindestens eine Kategorie.':fallback?'Expertenfragen werden mit den schwierigsten klassischen Fragen deiner Auswahl ergänzt.':pool.length+' Fragen in deiner Auswahl.'}</p>
 <button class="primary start" id="start" ${selectedTopics.size?'':'disabled'}>Quizshow starten</button>
 <div class="rules"><span><b>15</b> Gewinnstufen</span><span><b>3</b> Joker</span><span><b>2</b> Sicherheitsstufen</span></div>
 <p class="hint history-note">Schon gespielte Fragen werden auf diesem Gerät nach hinten gestellt.</p></section>`;
 document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>toggleTopic(b.dataset.cat));
 $('#all-topics').onclick=()=>{selectedTopics=selectedTopics.size===topicIds.length?new Set():new Set(topicIds);saveSettings();lobby();$('#all-topics').focus({preventScroll:true})};
 $('#expert-mode').onclick=()=>{expertMode=!expertMode;saveSettings();lobby();$('#expert-mode').focus({preventScroll:true})};
 $('#start').onclick=start;
}
function start(){
 if(!selectedTopics.size)return;
 round=[];const counts={};
 if(expertMode){
  let picks=pickFresh(selectedPool(),15,counts).map(q=>({...q,difficulty:q.tier+3}));
  for(const tier of [2,1,0]){
   if(picks.length===15)break;
   picks.push(...pickFresh(BANK.filter(q=>selectedTopics.has(q.cat)&&q.tier===tier),15-picks.length,counts).map(q=>({...q,difficulty:q.tier})));
  }
  round=shuffle(picks).sort((a,b)=>a.difficulty-b.difficulty);
 }else{
  for(let tier=0;tier<3;tier++)round.push(...shuffle(pickFresh(selectedPool().filter(q=>q.tier===tier),5,counts)));
 }
 if(round.length!==15){lobby();return}
 round=round.map(q=>({...q,choices:shuffle(q.answers.map((text,i)=>({text,correct:i===0})))}));
 category=expertMode?'hard':selectedTopics.size===1?[...selectedTopics][0]:'all';
 index=0;won=0;used={};nextQuestion();
}

function nextQuestion(){selected=null;hidden=[];help={};phase='question';rememberQuestion(round[index]);render();}
function secured(){return won>=10?16000:won>=5?500:0}
function choose(i){if(phase!=='question'||hidden.includes(i)||!Number.isInteger(i)||i<0||i>3)return false;selected=i;render();return true}
function lock(){if(phase!=='question'||selected===null)return;phase=round[index].choices[selected].correct?'correct':'wrong';if(phase==='correct')won=index+1;tone(phase==='correct');render();}
function render(){const q=round[index],active=phase==='question';$('#main').innerHTML=`<div class="game"><section class="stage" aria-label="Quizfrage"><div class="game-top"><span>${mixLabel()} <span style="opacity:.45">/</span> ${category==='hard'?'Expertenrunde':'Klassische Runde'}</span><strong>Frage ${index+1} <span style="color:var(--muted)">/ 15</span></strong></div><div class="joker-row"><div class="joker-wrap"><button class="joker" data-joker="half" ${used.half||!active?'disabled':''} aria-label="50:50-Joker: zwei falsche Antworten entfernen">50:50</button><small>50:50</small></div><div class="joker-wrap"><button class="joker" data-joker="audience" ${used.audience||!active?'disabled':''} aria-label="Publikumsjoker"><svg width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="13" cy="5" r="3"/><path d="M7 21v-6a6 6 0 0 1 12 0v6M3 8a2.5 2.5 0 1 0 0 .1M23 8a2.5 2.5 0 1 1 0 .1M1 21v-6q0-4 5-3M25 21v-6q0-4-5-3"/></svg></button><small>Publikum</small></div><div class="joker-wrap"><button class="joker" data-joker="phone" ${used.phone||!active?'disabled':''} aria-label="Telefonjoker">☎</button><small>Telefon</small></div></div><div class="prize"><small>DIE FRAGE FÜR</small><strong>${euro(prizes[index])}</strong></div><div class="question-meta"><span class="pill">${names[q.cat]}</span><span>${(expertMode&&String(q.id).startsWith('hard-')?['Für Kenner','Detailwissen','Expertenfinale']:['Zum Warmwerden','Jetzt wird’s knifflig','Für echte Kenner'])[q.tier]}</span></div><div class="question"><h2 id="question-title" tabindex="-1">${q.q}</h2></div><div class="answers">${q.choices.map((a,i)=>`<button class="answer ${hidden.includes(i)?'removed':''} ${selected===i?'selected':''} ${!active&&a.correct?'correct':''} ${phase==='wrong'&&selected===i?'wrong':''}" data-answer="${i}" ${!active||hidden.includes(i)?'disabled':''} aria-pressed="${selected===i}"><span class="letter">${'ABCD'[i]}:</span><span>${a.text}</span></button>`).join('')}</div><div class="action-area" aria-live="polite">${active?`<p class="hint">${selected===null?'Welche Antwort loggst du ein?':`Antwort ${'ABCD'[selected]} gewählt. Bist du sicher?`}</p><button class="primary" id="lock" ${selected===null?'disabled':''}>Antwort einloggen</button>`:`<p class="explanation"><strong>${phase==='correct'?'Richtig!':'Leider nicht richtig.'}</strong> ${q.note}<a href="${q.source}" target="_blank" rel="noopener">Nachlesen</a></p><button class="primary" id="continue">${phase==='wrong'?'Zum Ergebnis':index===14?'Million abholen':'Nächste Frage'}</button>`}</div><div class="bottom-status"><span>Sicher: <b>${euro(secured())}</b></span>${active?`<button class="text-button" id="quit">Mit ${euro(won?prizes[won-1]:0)} aussteigen</button>`:''}</div></section><details class="ladder" ${innerWidth>650?'open':''}><summary>DEIN WEG ZUR MILLION</summary><ol>${prizes.map((p,i)=>`<li class="${[4,9,14].includes(i)?'safe ':''}${i<won?'passed ':''}${i===index?'current':''}" ${i===index?'aria-current="step"':''}><span class="number">${String(i+1).padStart(2,'0')}</span><span>${euro(p)} ${[4,9].includes(i)?'◆':''}</span></li>`).join('')}</ol><p class="ladder-note">◆ 500 € & 16.000 € sind sicher,<br>sobald du die Stufe erreichst.</p></details></div>`;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>choose(+b.dataset.answer));document.querySelectorAll('[data-joker]').forEach(b=>b.onclick=()=>joker(b.dataset.joker));if($('#lock'))$('#lock').onclick=lock;if($('#continue'))$('#continue').onclick=()=>{if(phase==='wrong')finish('lost');else if(index===14)finish('million');else{index++;nextQuestion();$('#question-title').focus({preventScroll:true})}};if($('#quit'))$('#quit').onclick=quit;}
function showDialog(html,button='Verstanden',callback){$('#dialog-content').innerHTML=html;$('#close-dialog').textContent=button;$('#close-dialog').onclick=()=>{$('#modal').close();if(callback)callback()};$('#modal').showModal()}
function joker(type){if(phase!=='question'||used[type]||!['half','audience','phone'].includes(type))return;const q=round[index],correct=q.choices.findIndex(a=>a.correct);used[type]=true;if(type==='half'){hidden=shuffle([0,1,2,3].filter(i=>i!==correct)).slice(0,2);if(hidden.includes(selected))selected=null;render();return}const available=[0,1,2,3].filter(i=>!hidden.includes(i));let favorite=Math.random()<(q.tier===2?.72:.9)?correct:shuffle(available.filter(i=>i!==correct))[0];if(type==='audience'){let weights=[0,1,2,3].map(i=>hidden.includes(i)?0:i===favorite?45+Math.random()*20:6+Math.random()*14),sum=weights.reduce((a,b)=>a+b,0),values=weights.map(w=>Math.floor(w/sum*100));values[favorite]+=100-values.reduce((a,b)=>a+b,0);render();showDialog(`<h2>Das Publikum hat abgestimmt.</h2><p>Simulierte Abstimmung – auch die Mehrheit kann sich irren.</p><div class="bars">${values.map((v,i)=>`<div class="bar-item"><small>${v} %</small><i style="--height:${v*1.6}px"></i><b>${'ABCD'[i]}</b></div>`).join('')}</div>`)}else{render();showDialog(`<div class="eyebrow" style="margin-bottom:15px">DEIN TELEFONJOKER</div><h2>„Ich würde ${'ABCD'[favorite]} nehmen.“</h2><p>${q.choices[favorite].text}</p><p>Simulierter Tipp eines Fans. Eine Hilfe, aber keine Garantie.</p>`)}}
function quit(){showDialog(`<h2>Auf Nummer sicher?</h2><p>Du nimmst ${euro(won?prizes[won-1]:0)} mit und beendest diese Runde.</p><button class="primary full" id="confirm-quit" style="margin-bottom:12px">Gewinn mitnehmen</button>`,'Weiterspielen');$('#confirm-quit').onclick=()=>{$('#modal').close();finish('quit')}}
function finish(kind){phase='result';let amount=kind==='lost'?secured():won?prizes[won-1]:0;$('#main').innerHTML=`<section class="result"><div class="emblem"><span>${kind==='million'?'★':'?'}</span></div><p class="eyebrow">${kind==='million'?'ALLE 15 FRAGEN GEKNACKT':kind==='quit'?'GUT GESPIELT':'DAS WAR DEINE RUNDE'}</p><h1>${kind==='million'?'Du hast die Million!':kind==='quit'?'Wissen zahlt sich aus.':'Die nächste Runde wartet.'}</h1><div class="amount">${euro(amount)}</div><p>${won} von 15 Fragen richtig beantwortet.<br>${kind==='lost'?'Dein Gewinn entspricht der letzten erreichten Sicherheitsstufe.':kind==='million'?'Von der ersten Frage bis zum großen Finale. Hut ab!':'Dieser Gewinn gehört dir – als Spielgeld natürlich.'}</p><div class="result-actions"><button class="primary" id="again">Noch eine Runde</button><button class="secondary" id="home">Themenmix ändern</button></div></section>`;$('#again').onclick=start;$('#home').onclick=lobby;}
document.addEventListener('keydown',e=>{if($('#modal').open||phase!=='question'||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName))return;const i='abcd'.indexOf(e.key.toLowerCase());if(i>=0){e.preventDefault();choose(i)}});
lobby();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'read_quiz_state',description:'Read the current visible quiz question and available answers without revealing the solution.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({phase,category,topics:[...selectedTopics],expertMode,questionNumber:phase==='lobby'?null:index+1,question:phase==='question'?round[index].q:null,choices:phase==='question'?round[index].choices.map((a,i)=>hidden.includes(i)?null:{letter:'ABCD'[i],text:a.text}):null,selected:selected===null?null:'ABCD'[selected],secured:secured()})})).catch(()=>{})}catch{}}
