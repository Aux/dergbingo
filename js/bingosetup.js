var conferenceName;
var boardImage = "./images/dergflop.gif";
var boardExists = false;

function newbingo() {
  var e = document.getElementById("conference");
  conferenceName = e.options[e.selectedIndex].value;
  var shortname = conferenceName.split(' ').join('');
  var bingoList = 'bingoList' + shortname;

  Generic();
  Beatsaber();

  if (boardExists === false){
    initBoard();
    boardExists = true;
  }

  srl.bingo(window[bingoList], 5, conferenceName);

  switch (conferenceName) {
    case "Beatsaber":
      $('#FreeSpace').attr('src',"./images/dergsaber.png");
      break;
    default:
      $('#FreeSpace').attr('src',"./images/dergflop.gif");
      break;
  }
}

