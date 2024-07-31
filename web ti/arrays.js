function situacao(entrada1, entrada2, saida){
  var x = Number(document.getElementById(entrada1).value);
  var y = Number(document.getElementById(entrada2).value);
  var media = (x+y)/2

  document.getElementById(saida).innerHTML = "o resultado é "+ resultado(media);

}

function resultado(m){
  return m>=7;
}