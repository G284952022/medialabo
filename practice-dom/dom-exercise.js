//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42'); 
let p = document.createElement('p'); 
p.textContent = '写真表と都市の緯度経度のページです'; 
h2.insertAdjacentElement('afterend',p); 
let p1 = document.querySelector('p'); 
p1.style = "text-emphasis : sesame green"; 
// 練習4-3 写真表作成プログラム
let div = document.querySelector('div#phototable'); 
let p6 = document.createElement('p'); 
let p7 = document.createElement('p'); 
let p8 = document.createElement('p'); 
let ne = document.createElement('img'); 
let ne1 = document.createElement('img'); 
let ne2 = document.createElement('img'); 
ne.setAttribute('src','taro.png') 
ne1.setAttribute('src','jiro.png') 
ne2.setAttribute('src','hanako.png') 
p6.insertAdjacentElement('beforeend',ne) 
p7.insertAdjacentElement('beforeend',ne1) 
p8.insertAdjacentElement('beforeend',ne2) 
div.insertAdjacentElement('beforeend',p6) 
div.insertAdjacentElement('beforeend',p7)
div.insertAdjacentElement('beforeend',p8)
// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('ul#location > li'); 
for(p4 of w){
	p4.remove();
} 
// 練習4-5 箇条書き追加プログラム
let ul = document.querySelector('ul#location'); 
for(let n of data){
	let aiueo = document.createElement('li');
    aiueo.textContent = n.name+" ... 緯度:"+n.lat+", 経度:"+n.lng;
	ul.insertAdjacentElement('beforeend',aiueo); 
}
