function cal(){

    memeLine1 = document.getElementById("val1").value ;
    memeLine2 = document.getElementById("val2").value ;

    document.getElementById('l1').innerHTML = memeLine1;
    document.getElementById('l2').innerHTML = memeLine2;

    var i = Math.floor(Math.random() * 4) +1;
    document.getElementById('img').src = 'images/'+i+'.jpg';   

}

function chan(){
  var j = Math.floor(Math.random() * 5);
  document.getElementById('memeimg').src = 'images/'+j+'a.jpg'; 

}
