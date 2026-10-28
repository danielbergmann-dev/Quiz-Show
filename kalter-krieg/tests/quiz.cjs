const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const base=__dirname+'/../',code=fs.readFileSync(base+'questions.js','utf8')+'\n'+fs.readFileSync(base+'app.js','utf8');
const saved={};function boot(blocked=false){const els={};const c=vm.createContext({console,Intl,Math,innerWidth:390,localStorage:{getItem:k=>{if(blocked)throw Error();return saved[k]||null},setItem:(k,v)=>{if(blocked)throw Error();saved[k]=v}},document:{querySelector:s=>els[s]??={innerHTML:'',setAttribute(){},focus(){}},querySelectorAll:()=>[],addEventListener(){}}});vm.runInContext(code,c);return c}
const c=boot();vm.runInContext(`
const all=[...BANK,...HARD_BANK];
if(all.length!==60||new Set(all.map(q=>q.id)).size!==60||new Set(all.map(q=>q.q)).size!==60)throw Error('Counts');
for(const q of all)if(q.cat!=='coldwar'||q.answers.length!==4||new Set(q.answers).size!==4||!q.note||!q.sourceLabel.startsWith('Deine Übersicht · Folie '))throw Error('Question data');
for(const mode of [false,true]){
expertMode=mode;seenQuestions={};seenSequence=0;
const usedIds=new Set();
for(let game=0;game<2;game++){
 start();if(round.length!==15)throw Error('Round length');
 for(let i=0;i<15;i++){if(usedIds.has(round[i].id))throw Error('Repeat before exhausting pool');usedIds.add(round[i].id);if(round[i].id.startsWith('hard-')!==mode)throw Error('Wrong difficulty');}
 for(index=0;index<15;index++){nextQuestion();selected=round[index].choices.findIndex(a=>a.correct);lock();if(phase!=='correct')throw Error('Answer');}
 index=14;finish('million');if(won!==15)throw Error('Win');
}
start();selected=round[0].choices.findIndex(a=>!a.correct);lock();if(phase!=='wrong')throw Error('Wrong answer');
}
lobby();document.querySelector('#easy-mode').onclick();if(expertMode)throw Error('Easy UI');
document.querySelector('#hard-mode').onclick();if(!expertMode)throw Error('Hard UI');
start();joker('half');if(hidden.length!==2||hidden.some(i=>round[0].choices[i].correct))throw Error('50:50');
if(!document.querySelector('#main').innerHTML.includes('Kalter Krieg'))throw Error('Topic');
if(historyKey==='quiz-show-history-v1')throw Error('Shared history');
`,c);
assert.equal(vm.runInContext('expertMode',boot()),true);vm.runInContext('start();saveSettings()',boot(true));
console.log('PASS: 60 questions; both levels; two full rounds per level without repeats; correct/wrong outcomes; difficulty controls; 50:50; independent storage and blocked storage.');
