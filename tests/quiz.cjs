const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const data=fs.readFileSync(__dirname+'/../questions.js','utf8'),app=fs.readFileSync(__dirname+'/../app.js','utf8');
const saved={};
function make(broken=false){const elements={};const ctx=vm.createContext({console,Math,Intl,innerWidth:390,localStorage:{getItem(k){if(broken)throw Error('blocked');return saved[k]||null},setItem(k,v){if(broken)throw Error('blocked');saved[k]=v}},document:{querySelector:s=>elements[s]??={innerHTML:'',setAttribute(){},focus(){}},querySelectorAll:()=>[],addEventListener(){}}});vm.runInContext(data+'\n'+app,ctx);return ctx}
const ctx=make();
vm.runInContext(`
const all=[...BANK,...HARD_BANK];
if(all.length!==363||BANK.length!==231||HARD_BANK.length!==132)throw Error('Pool counts');
if(new Set(all.map(q=>String(q.id))).size!==363)throw Error('Duplicate IDs');
if(new Set(all.map(q=>q.q.trim().toLowerCase())).size!==363)throw Error('Duplicate questions');
for(const q of all)if(q.answers.length!==4||new Set(q.answers).size!==4||!q.note||!q.source.startsWith('https://')||![0,1,2].includes(q.tier)||!topicIds.includes(q.cat))throw Error('Malformed question '+q.id);
for(let mask=1;mask<128;mask++)for(const mode of [false,true])for(let attempt=0;attempt<10;attempt++){
 selectedTopics=new Set(topicIds.filter((_,i)=>mask&(1<<i)));expertMode=mode;start();
 if(round.length!==15||new Set(round.map(q=>q.id)).size!==15)throw Error('Round length or duplicate');
 if(round.some(q=>!selectedTopics.has(q.cat)||q.choices.filter(a=>a.correct).length!==1))throw Error('Topic or choices');
 for(let i=1;i<15;i++)if((round[i].difficulty??round[i].tier)<(round[i-1].difficulty??round[i-1].tier))throw Error('Progression');
 if(mode&&selectedPool().length>=15&&round.some(q=>!String(q.id).startsWith('hard-')))throw Error('Unexpected fallback');
}
selectedTopics=new Set();lobby();let old=round;start();if(round!==old||!document.querySelector('#main').innerHTML.includes('id="start" disabled'))throw Error('Empty selection');
selectedTopics=new Set(topicIds);lobby();if(!document.querySelector('#main').innerHTML.includes('7 von 7 ausgewählt'))throw Error('Category count');
document.querySelector('#all-topics').onclick();if(selectedTopics.size)throw Error('Deselect all');
document.querySelector('#all-topics').onclick();if(selectedTopics.size!==7)throw Error('Select all');
for(const mode of [false,true]){
 selectedTopics=new Set(topicIds);expertMode=mode;seenQuestions={};seenSequence=0;
 const played=new Set();for(let n=0;n<8;n++){start();for(const q of round){if(played.has(q.id))throw Error('Avoidable repeat');played.add(q.id)}for(index=1;index<15;index++)nextQuestion();}
}
seenQuestions={};seenSequence=0;start();if(Object.keys(seenQuestions).length!==1)throw Error('Unseen questions recorded');let before=seenSequence;render();if(seenSequence!==before)throw Error('Render updates history');
const candidates=[0,1,2,3,4,5].map(i=>({id:'test-'+i,cat:'sega',q:'test',subject:'subject-'+(i%3)}));
if(new Set(pickFresh(candidates,3).map(questionSubject)).size!==3)throw Error('Subject balance');
selectedTopics=new Set(['purple','beatles']);expertMode=true;saveSettings();start();for(index=0;index<15;index++){phase='question';selected=round[index].choices.findIndex(a=>a.correct);lock();if(phase!=='correct')throw Error('Lock');}index=14;finish('million');if(!document.querySelector('#main').innerHTML.includes('1.000.000'))throw Error('Win');
`,ctx);
assert.equal(vm.runInContext("selectedTopics.has('purple')&&selectedTopics.has('beatles')&&expertMode&&Object.keys(seenQuestions).length>0",make()),true);
vm.runInContext('start();nextQuestion();saveSettings()',make(true));
saved['quiz-show-history-v1']='broken JSON';make();
console.log('PASS: 363 questions; 2540 rounds; all 127 combinations in both modes; 8 full mixed rounds per mode without repeats; source/answer/ID validation; subject balancing; persistence; unavailable storage; win flow.');
