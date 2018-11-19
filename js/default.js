var number = math.floor(math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。０～２の数字を入力してください！'));

var message;
if(answer === number){
  message = 'あたり!';
}else if(answer < number){
  message = '残念!大きいです';
}else if(answer  number){
  message = '残念！小さいです';
}else{
  message = '0~3の数字を入力してください';
}

docment.getElementById('choice').textContent = message;
