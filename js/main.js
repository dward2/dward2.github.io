function IncreaseFont(){
  // this did not work: var curFontSize = document.getElementById("b_body").style.fontSize;
  var curFontSize = parseInt($('#b_body').css('font-size'));
  curFontSize = curFontSize + 2;
  $('#b_body').css('font-size', curFontSize);
}

function DecreaseFont(){
  // this did not work: var curFontSize = document.getElementById("b_body").style.fontSize;
  var curFontSize = parseInt($('#b_body').css('font-size'));
  curFontSize = curFontSize - 2;
  $('#b_body').css('font-size', curFontSize);
}
