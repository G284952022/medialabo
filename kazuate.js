// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let owari = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

let span1 = document.querySelector("span#answer");
span1.textContent = "";



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="kaitou"]');
  
  let yoso = i.value - 0;       
  kaisu = kaisu + 1;
  //let yoso = 4;

  let span = document.querySelector("span#kaisu") ; 
  span.textContent = kaisu; 
  let span1 = document.querySelector("span#answer");
  span1.textContent = yoso;
  let p = document.querySelector("p#result"); 
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  console.log(kaisu+'回目の予想: '+yoso);

  if(kaisu > 3||owari>0){
    p.textContent = '答えは '+kotae+' でした.既にゲームは終わっています.'; 
  }else if(kotae === yoso){
    owari = owari + 1;
    p.textContent = '正解です。おめでとう！';
  }else if (kotae < yoso){
    p.textContent = 'まちがい. 答えはもっと小さいですよ';
  } else if(kotae > yoso){
    p.textContent = 'まちがい. 答えはもっと大きいですよ';
  } 
  if(kaisu === 3&&owari===0){
    p.textContent = '答えは '+kotae+' でした.既にゲームは終わっています.'; 
  }


  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}