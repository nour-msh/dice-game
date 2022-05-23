window.onload=function(){
    
    myFunction()
    function myFunction(){
        var firstRan = math.floor(math.random()*6)+1;
        var secondRan= math.floor(math.random()*6)+1;
        if (firstRan==secondRan){
            document.querySelector("h1").innerHTML="Draw!";}
            else if(firstRan<secondRan){
                document.querySelector("h1").innerHTML="Player2 Wins!"}
                else{
                    document.querySelector("h1").innerHTML="Player1 wins!"
                }
            }

     






}
