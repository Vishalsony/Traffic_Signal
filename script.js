// function green()
// {
//     document.getElementById("green").style.backgroundColor="green";
//     document.getElementById("red").style.backgroundColor="";
//     document.getElementById("yellow").style.backgroundColor="";
// }
function myfunction(event)
{
     console.log(event)

     if(event.target.id == "green")
     {
            document.getElementById("green").style.backgroundColor="green";
            document.getElementById("red").style.backgroundColor="";
            document.getElementById("yellow").style.backgroundColor="";
     }
     if(event.target.id == "red")
     {
            document.getElementById("red").style.backgroundColor="red";
            document.getElementById("green").style.backgroundColor="";
            document.getElementById("yellow").style.backgroundColor="";
     }
     if(event.target.id == "yellow")
     {
            document.getElementById("yellow").style.backgroundColor="yellow";
            document.getElementById("green").style.backgroundColor="";
            document.getElementById("red").style.backgroundColor="";
     }
    
}

