
var tab=[];

for(var i=0; i<300; i++)
{
   tab[i]=0;
}

function koniec()
{
   
   document.getElementById(i+1).style.backgroundColor = "darkgray";
   document.getElementById(i-1).style.backgroundColor = "darkgray";
   document.getElementById(i+szer).style.backgroundColor = "darkgray";
   document.getElementById(i-szer).style.backgroundColor = "darkgray";

}


var szer = 20;
tab[1+szer] = 1;
var leng = tab.length;

tabcreation();
function tabcreation()
{
   for(var i=0; i<leng; i++)
   {
      document.getElementById("plansza").innerHTML += "<div id='"+i+"'></div>";
      document.getElementById(i).classList.add("kratki") 
      
      if(i%szer==19)
      {
         document.getElementById("plansza").innerHTML += "<div style='clear:both;'></div>";
      }
      if(tab[i]==1)
      {
         // document.getElementById(i).innerHTML = "<div id='"+i+"'><i style='color:white;' class='fas fa-space-shuttle'></i></div>";
         document.getElementById(i).style.backgroundImage = "url('rocketright.png')";
      }
      if((i>=0 && i<szer) || i%szer==0 || i%szer==19 || i>=280)
      {
         document.getElementById(i).style.backgroundColor= "darkgray";
         // document.getElementById("plansza").style.zIndex = "-1";
         // document.getElementById(i).style.backgroundImage = "";
      }
      if((i%25==10 || i%30==19) && document.getElementById(i).style.backgroundColor != "darkgray" )
      {
         document.getElementById(i).style.backgroundColor = "blue";
         document.getElementById(i).innerHTML = "<div><i style='color:white; padding: 2px;' class='fas fa-meteor'></i></div>"
      }
      if(i==(leng-szer-2))
      {
         document.getElementById(i).style.backgroundImage = "url('koniec.jpg')";
         document.getElementById(i).style.backgroundColor = "pink";
      }
   }
}



var gdzie;
document.addEventListener('keydown', key);
function key(e)
{
   var keyCode=e.keyCode;
   switch(keyCode)
   {
      case 65:
         // a
         for(var i=0; i<leng; i++)
         {
            if(tab[i]==1)
            {
               if(document.getElementById(i-1).style.backgroundColor == "darkgray")
               {
                  tab[i]=1
               }
               else if(document.getElementById(i-1).style.backgroundColor == "blue")
               {
                  alert("przegrałeś");
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i-1).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Wygrałeś, doskonale!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else
               {
                  tab[i-1]=1;
                  tab[i]=0;
                  document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>";
                  document.getElementById(i-1).innerHTML = "";
                  document.getElementById(i-1).style.backgroundImage = "url('rocketleft.png')";
                  document.getElementById(i).style.backgroundImage = "";
               }
               break;
            }            
         }
         break;

      case 87:
         // w
         for(var i=0; i<leng; i++)
         {
            if(tab[i]==1)
            {
               if(document.getElementById(i-szer).style.backgroundColor == "darkgray")
               {
                  tab[i]=1;
               }
               else if(document.getElementById(i-szer).style.backgroundColor == "blue")
               {
                  alert("przegrałeś");
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
   document.getElementById(i-1).style.backgroundColor = "darkgray";
   document.getElementById(i+szer).style.backgroundColor = "darkgray";
   document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i-szer).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Wygrałeś, doskonale!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
   document.getElementById(i-1).style.backgroundColor = "darkgray";
   document.getElementById(i+szer).style.backgroundColor = "darkgray";
   document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else
               {
                  tab[i-szer]=1;
                  tab[i]=0;
                  document.getElementById(i-szer).style.backgroundImage = "url('rocketup.png')";
                  document.getElementById(i-szer).innerHTML = "";
                  document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>";
                  document.getElementById(i).style.backgroundImage = "";
               }
            }
         }

         break;

      case 83:
         // s
         for(var i=0; i<leng; i++)
         {
            if(tab[i]==1)
            {
               if(document.getElementById(i+szer).style.backgroundColor == "darkgray")
               {
                  tab[i]=1;
               }
               else if(document.getElementById(i+szer).style.backgroundColor == "blue")
               {
                  alert("przegrałeś");
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
   document.getElementById(i-1).style.backgroundColor = "darkgray";
   document.getElementById(i+szer).style.backgroundColor = "darkgray";
   document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i+szer).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Wygrałeś, doskonale!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // document.getElementById(i+1).style.backgroundColor = "darkgray";
               //   koniec();
               document.getElementById(i+1).style.backgroundColor = "darkgray";
   document.getElementById(i-1).style.backgroundColor = "darkgray";
   document.getElementById(i+szer).style.backgroundColor = "darkgray";
   document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else
               {
                  tab[i]=0;
                  tab[i+szer]=1;
                  document.getElementById(i+szer).style.backgroundImage = "url('rocketdown.png')";
                  document.getElementById(i+szer).innerHTML = "";
                  document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>";
                  document.getElementById(i).style.backgroundImage = "";
               }
               break;
            }
         }


         break;

      case 68:
         // d
         for(var i=0; i<leng; i++)
         {
            if(tab[i]==1)
            {
               
               if(document.getElementById(i+1).style.backgroundColor == "darkgray")
               {
                  tab[i]=1;
               }
              
               else if(document.getElementById(i+1).style.backgroundColor == "blue")
               {
                  alert("przegrałeś");
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  
                  document.getElementById(i-szer).classList.remove("kratki");
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).classList.add("nowy");
                  
               }
               else if(document.getElementById(i+1).style.backgroundColor == "pink")
               {
                  
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Wygrałeś, doskonale!<br><br><br><label>Zagraj ponownie: <a href='projekt.html'><button class='btn btn-danger'>Play</button></a></label></div>";

                  // koniec();
   //                document.getElementById(i+1).setAttribute('data',"test");
                  
   // document.getElementById(i-1).style.backgroundColor = "";
   // document.getElementById(i+szer).style.backgroundColor = "";
   // document.getElementById(i-szer).style.backgroundColor = "";
   // document.getElementById(i+1).style.backgroundColor = "darkgray";
   // document.getElementById(i-1).style.backgroundColor = "darkgray";
   // document.getElementById(i+szer).style.backgroundColor = "darkgray";
   // document.getElementById(i-szer).style.backgroundColor = "darkgray";

   // z-index
               }
               else
               {
                  tab[i]=0;
                  tab[i+1]=1;
                  document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>";
                  document.getElementById(i).style.backgroundImage = "";
                  document.getElementById(i+1).style.backgroundImage = "url('rocketright.png')";
                  document.getElementById(i+1).innerHTML = "";
               }
               break;
            }       
         }
         break;
   } 
}


