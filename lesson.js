const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resultDivided = document.getElementById('result-area');
var startTime = 0;

function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}

//STARTボタン
startButton.onclick = () => {
   startTime = Date.now();
//DO:ルーレット回してる風の何か
}

//STOPボタン作成
stopButton.onclick = () => {
    var currentTime = Date.now();
    var seconds = (currentTime - startTime) / 1000;
//DO:ルーレット回してる風の何かを止める
}

//結果表示エリア作成
removeAllChildren(resultDivided);
const header = document.createElement('h3');
header.innerText = '今回の話題';
resultDivided.appendChild(header);

const paragraph = document.createElement('p');
const result = roulette(seconds);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);


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

//テスト
/*
console.assert(
    assessment('太郎') === '太郎のいいところはユニークさです。太郎だけのその特徴が皆を楽しくさせます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力名が同じ場合に同じ診断結果を出力する処理が正しくありません。'
);*/
