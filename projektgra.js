var tab=[];

for(var i=0; i<300; i++)
{
   tab[i]=0;
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
         document.getElementById(i).style.backgroundImage = "url('rocketright.png')";
      }
      if((i>=0 && i<szer) || i%szer==0 || i%szer==19 || i>=280)
      {
         document.getElementById(i).style.backgroundColor= "darkgray";
      }
      // if((i%25==10 || i%30==19) && document.getElementById(i).style.backgroundColor != "darkgray")
      // {
      //    document.getElementById(i).style.backgroundColor = "blue";
      //    document.getElementById(i).innerHTML = "<i style='color:white;' class='fas fa-meteor'></i>"
      // }
      if(i==(leng-szer-2))
      {
         document.getElementById(i).style.backgroundImage = "url('celg.jpg')";
         document.getElementById(i).style.backgroundColor = "pink";
      }
      if(i>22 && i<276 && document.getElementById(i).style.backgroundColor != "darkgray")
      {
         losowanie()
         function losowanie()
         {
            for(var j=0; j<40; j++)
            {
               if(i==Math.floor(Math.random()*250+22))
               {
                  document.getElementById(i).style.backgroundColor = "blue";
                  document.getElementById(i).innerHTML = "<i style='color:white;' class='fas fa-meteor'></i>"
               }
            }           
         }
      }
   }
}


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
                  
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Utknąłeś, uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();             
                  document.getElementById(i+1).style.backgroundColor = "darkgray";                  
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i-1).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Sukces! Udało Ci się wlecieć do czarnej dziury, gratulacje!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
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
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Utknąłeś, uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i-szer).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Sukces! Udało Ci się wlecieć do czarnej dziury, gratulacje!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
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
                  document.getElementById(i).style.backgroundImage = "";
                  // document.getElementById(i-szer).innerHTML = "";
                  // document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>";
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
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Utknąłeś, uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  // koniec();
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i+szer).style.backgroundColor == "pink")
               {
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Sukces! Udało Ci się wlecieć do czarnej dziury, gratulacje!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
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
                  document.getElementById(i).style.backgroundImage = "";
                  // document.getElementById(i+szer).innerHTML = "";
                  // document.getElementById(i).innerHTML = "<div class='kratki' id='"+i+"'></div>"; 
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
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Utknąłeś, uderzyłeś w kometę i nie udało Ci się dotrzeć do celu :c Uważaj następnym razem!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
               }
               else if(document.getElementById(i+1).style.backgroundColor == "pink")
               {
                  
                  document.getElementById("wynik").innerHTML = "<div class='polewynik'>Sukces! Udało Ci się wlecieć do czarnej dziury, gratulacje!<br><br><br><label>Zagraj ponownie: <a href='projektgra.html'><button class='btn btn-danger'>Play</button></a></label></div>";
                  document.getElementById(i+1).style.backgroundColor = "darkgray";
                  document.getElementById(i-1).style.backgroundColor = "darkgray";
                  document.getElementById(i+szer).style.backgroundColor = "darkgray";
                  document.getElementById(i-szer).style.backgroundColor = "darkgray";
                  // koniec();
               }
               else
               {
                  tab[i]=0;
                  tab[i+1]=1;                 
                  document.getElementById(i).style.backgroundImage = "";
                  document.getElementById(i+1).style.backgroundImage = "url('rocketright.png')";
               }
               break;
            }       
         }
         break;
   } 
}



// function koniec()
// {

   
//    document.getElementById(i+1).style.backgroundColor = "darkgray";
//    document.getElementById(i-1).style.backgroundColor = "darkgray";
//    document.getElementById(i+szer).style.backgroundColor = "darkgray";
//    document.getElementById(i-szer).style.backgroundColor = "darkgray";

// }
