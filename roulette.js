const rouletteDivided = document.getElementById('roulette-area');
const resultDivided = document.getElementById('result-area');
const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
var startTime = null;
var seconds = 0;
var currentTime = 0;

function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}

while(true){
  removeAllChildren(rouletteDivided);
  const paragraph = document.createElement('p');
  paragraph.innerText = 'スタートボタンでルーレットを回してね';
  rouletteDivided.appendChild(paragraph);
  
  if(startTime > currentTime){
    removeAllChildren(rouletteDivided);
    const paragraph = document.createElement('p');
    paragraph.innerText = 'ストップボタンでルーレットを止めてね';
    rouletteDivided.appendChild(paragraph);
    }
}
     
function start_function(){
   startTime = Date.now();
  console.log("start");
  console.log(startTime);
}
startButton.onclick = start_function;

function stop_function(){
  currentTime = Date.now();
  seconds = (currentTime - startTime);
  console.log("stop");
  console.log(currentTime);
  console.log(seconds);
  
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '今回の話題';
  resultDivided.appendChild(header);
  const paragraph = document.createElement('p');
  const result = roulette(seconds);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
}
stopButton.onclick = stop_function;

//topicの内容
const answers = [
    '好きな食べ物は？',
    '最近ハマっていることは？',
    '得意なことは？',
    '今までで一番楽しかったエピソードは？',
    '今までで一番恥ずかしかったエピソードは？',
    '好きな有名人は？',
    '秘密の話を聞かせて！',
    '自分の変な習慣を紹介！',
    '〇〇さんの第一印象はこうだった！',
    '私のオススメ(本,映画など)を紹介！',
    '学生時代の部活動は何してた？',
    '今までで一番ショックを受けたエピソードは？',
    '〇〇さんのいいところはココ！',
    '嫌いな食べ物は？',
    '最近の悩み事をみんなに相談！',
    '休日の過ごし方を紹介！',
    '生まれ変わったら何になりたい？'
];

//ルーレットの結果を判定
function roulette(seconds) {
    const index = seconds % answers.length;
    let result = answers[index];
    return result;
}

