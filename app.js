const quiz = [
  {
    question : '次のうち群馬県の温泉ではないものはどれ？',
    answer :[
      '草津温泉',
      '伊香保温泉',
      '道後温泉',
      '水上温泉'
    ],
    correct : '道後温泉'
  }, 
  {
    question : '次のうち群馬県の市町村ではないものはどれ？',
    answer :[
      '嬬恋村',
      '桐生市',
      '太田市',
      '阿智村'
    ],
    correct : '阿智村'
  },
  {
    question : '次のうち群馬県ないのゆるキャラではないものはどれ？',
    answer :[
      'キノピー',
      'さのまる',
      'ぐんまちゃん',
      'ころとん'
    ],
    correct : 'さのまる'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;

  while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
      buttonIndex++;
  }
};
setupQuiz();

//ボタンをクリックしたら正誤判定
const clikHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
    }else{
      window.alert('間違い！');
  }
};

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  }else{
  //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！')
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',  (e) => {
    clikHandler (e);
  });
  handlerIndex++;
};


