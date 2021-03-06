var stopWords = ["a", "an", "and", "tien"];

function wordFreq(string) {
    var words = string.replace(/[.,]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w] ) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

function compare(a,b) {
  if (a.size < b.size)
    return 1;
  if (a.size > b.size)
    return -1;
  return 0;
}


function returnWords(){
  var data= document.getElementById('txt').value;
  var arr = [];
  var freq = wordFreq(data.toLowerCase());
  Object.keys(freq).sort().forEach(function(word) {
  		var obj = {};
      obj["text"] = word;
      obj["size"] = freq[word];
      arr.push(obj);
  });
  return arr.filter((el) => {
      return stopWords.indexOf(el.text) === -1;
    }).sort(compare);
};

function drawWordCloud(){
  document.getElementById("wordcloud").innerHTML = "";
  var words = returnWords();
  d3.wordcloud()
    .size([400, 400])
    .selector('#wordcloud')
    .scale("log")
    .fill(d3.scale.ordinal().range(["#884400", "#448800", "#888800", "#444400"]))
    .words(words)
    .onwordclick(function(d, i) {
      var div = document.getElementById('result');
      div.innerHTML += d.text + ", ";
    })
    .start();
  }

window.drawWordCloud = drawWordCloud;
