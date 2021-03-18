const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
const resultDivided = document.getElementById('result-area');
var startTime = null;
var seconds = 0;
var currentTime = 0;

function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}

function start_function(){
   startTime = Date.now();
  console.log("start");
}

function stop_function(){
  currentTime = Date.now();
  seconds = (currentTime - startTime);
  console.log("stop");
}

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

//STARTボタン
startButton.onclick = start_function();

//STOPボタン作成
stopButton.onclick = stop_function();

//結果表示エリア作成
if(startTime === null){
  const paragraph = document.createElement('p');
  paragraph.innerText = 'スタートボタンでルーレットを回してね';
  }else if(startTime > currentTime){
    const paragraph = document.createElement('p');
    paragraph.innerText = 'ストップボタンでルーレットを止めてね';
  }else{
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '今回の話題';
    resultDivided.appendChild(header);
    const paragraph = document.createElement('p');
    const result = roulette(seconds);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
  }

//ルーレットの結果を判定
function roulette(seconds) {
    const index = seconds % answers.length;
    let result = answers[index];
    return result;
}

//テスト
console.assert(
    startTime !== null,
    'ルーレットが正常にスタートしました。'
);

