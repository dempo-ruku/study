let getResult = document.getElementById('getResult');
let result = document.getElementById('result');

getResult.addEventListener('click', function () {
  result.innerHTML = '結果は「' + omikuji.getResult() + '」でした。';
})

let omikuji = {
  results: ["大吉", "吉", "中吉", "小吉", "凶"],
  getResult: function () {
    let results = this.results;
    return results[Math.floor(Math.random() * results.length)];
  }
}
