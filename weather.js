let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

let Sdata;
let NNum=0;

////////// 課題3-2 ここからプログラムを書こう


console.log('緯度 '+data.coord["lat"]);
console.log('経度 '+data.coord["lon"]);
console.log(data.weather[0].description); 
console.log(data.main["temp_min"]);
console.log(data.main["temp_max"]);
console.log(data.main["humidity"]);
console.log(data.wind["speed"] );
console.log(data.wind["deg"] );
console.log(data.name);


let b1 = document.querySelector('button#sendRequest');
b1.addEventListener('click', sendRequest);
let b2 = document.querySelector('button#SerchKey');
b2.addEventListener('click', KeyHyouzi);

/*
let body = document.querySelector('body'); 
let div = document.querySelector('div#result'); 
let img = document.createElement('img'); 
img.setAttribute('src','https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.nicovideo.jp%2Fmaterial%2Fnc43755&psig=AOvVaw15M4BZjgxsfxULND7mHfqM&ust=1689926058462000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPD3nqfnnIADFQAAAAAdAAAAABAN');
body.insertAdjacentElement('beforeend',img);
*/



function kousin(){
  NNum = NNum+1;
  let div = document.querySelector('div#result'); 
  let ul = document.createElement('ul'); 
  let li = document.createElement('li');
  li.textContent = '緯度: '+Sdata.coord["lat"];
  div.insertAdjacentElement('beforeend', ul); 
  ul.insertAdjacentElement('beforeend', li); 

  let li1 = document.createElement('li');
  li1.textContent = '経度: '+Sdata.coord["lon"];
  ul.insertAdjacentElement('beforeend', li1); 

  let li2 = document.createElement('li');
  li2.textContent = '天気: '+Sdata.weather[0].description;
  ul.insertAdjacentElement('beforeend', li2); 

  let li3 = document.createElement('li');
  li3.textContent = '最低気温: '+Sdata.main["temp_min"];
  ul.insertAdjacentElement('beforeend', li3); 

  let li4 = document.createElement('li');
  li4.textContent = '最高気温: '+Sdata.main["temp_max"];
  ul.insertAdjacentElement('beforeend', li4); 

  let li5 = document.createElement('li');
  li5.textContent = '湿度: '+Sdata.main["humidity"];
  ul.insertAdjacentElement('beforeend', li5); 

  let li6 = document.createElement('li');
  li6.textContent = '風速: '+Sdata.wind["speed"];
  ul.insertAdjacentElement('beforeend', li6); 

  let li7 = document.createElement('li');
  li7.textContent = '風向き: '+Sdata.wind["deg"];
  ul.insertAdjacentElement('beforeend', li7); 

  let li8 = document.createElement('li');
  li8.textContent = '都市名: '+Sdata.name;
  ul.insertAdjacentElement('beforeend', li8); 
}

function sendRequest(){
  if(NNum>0){
    let div1 = document.querySelector('ul'); 
    div1.remove();
  }
  let i = document.querySelector('input[id]');
  let tosi = i.value;
  console.log("検索名 = "+tosi);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+i.value+'.json';

  axios.get(url)
       .then(showResult)
       .catch(showError)
       .then(finish);
}

function showResult(Serve){
  Sdata = Serve.data;

  if (typeof Sdata === 'string') {
    Sdata = JSON.parse(Sdata);
  }

  console.log(Sdata);
  kousin();
}

function showError(err){
  console.log(err);
}

function finish(){
  console.log('通信が終了しました。');
}

function KeyHyouzi(){
  if(document.querySelector('ul')!==null){
    let div1 = document.querySelector('ul'); 
    div1.remove();
  }
  NNum=NNum+1;
  let div = document.querySelector('div#result'); 
  let ul = document.createElement('ul'); 
  let li = document.createElement('li');
  div.insertAdjacentElement('beforeend', ul); 
  ul.insertAdjacentElement('beforeend', li); 
  li.textContent = 'Cairo カイロ （エジプト)  :  360630';

  let li1 = document.createElement('li');
  li1.textContent = 'Moscow モスクワ （ロシア）:  524901';
  ul.insertAdjacentElement('beforeend', li1); 

  let li2 = document.createElement('li');
  li2.textContent = 'Johannesburg ヨハネスブルク （南アフリカ）:  993800';
  ul.insertAdjacentElement('beforeend', li2); 

  let li3 = document.createElement('li');
  li3.textContent = 'Beijing 北京 （中華人民共和国）:  1816670';
  ul.insertAdjacentElement('beforeend', li3); 

  let li4 = document.createElement('li');
  li4.textContent = 'Tokyo 東京 （日本）:  1850147';
  ul.insertAdjacentElement('beforeend', li4);

  let li5 = document.createElement('li');
  li5.textContent = 'Singapore シンガポール:  1880252';
  ul.insertAdjacentElement('beforeend', li5); 

  let li6 = document.createElement('li');
  li6.textContent = 'Sydney シドニー （オーストラリア）:  2147714';
  ul.insertAdjacentElement('beforeend', li6); 

  let li7 = document.createElement('li');
  li7.textContent = 'London ロンドン （イギリス）:  2643743';
  ul.insertAdjacentElement('beforeend', li7); 

  let li8 = document.createElement('li');
  li8.textContent = 'Paris パリ （フランス）:  2968815';
  ul.insertAdjacentElement('beforeend', li8);

  let li9 = document.createElement('li');
  li9.textContent = 'Rio de Janeiro リオデジャネイロ （ブラジル）:  3451189';
  ul.insertAdjacentElement('beforeend', li9); 

  let li10 = document.createElement('li');
  li10.textContent = 'New York ニューヨーク （アメリカ合衆国）: 5128581';
  ul.insertAdjacentElement('beforeend', li10); 

  let li11 = document.createElement('li');
  li11.textContent = 'Los Angeles ロサンゼルス （アメリカ合衆国）:  5368361';
  ul.insertAdjacentElement('beforeend', li11);
}

