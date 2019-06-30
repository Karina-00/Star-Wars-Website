var imie;
var wys;
var masa;
var i = 1;

akcja()


function akcja()
{
   if(i==1)
   {
         document.getElementById("poprzedni").setAttribute("class", "hidden");
         document.getElementById("nastepny").removeAttribute("class", "hidden");
         document.getElementById("nastepny").setAttribute("class", "btn btn-primary btn-lg guzik");
         fetch('https://swapi.co/api/people/?page='+i)
         .then(function(response){
         return response.json();
      })
         .then(function(jsonData){
         console.log(jsonData);
         jsonData.results.forEach(function(item){
         clearInterval(time);
         console.log(item);
         document.getElementById("gra").innerHTML = "";
         test(item.name, item.height, item.mass);
      });
      });
   }
   else if(i == 9)
   {
      document.getElementById("poprzedni").removeAttribute("class", "hidden");
      document.getElementById("poprzedni").setAttribute("class", "btn btn-primary btn-lg guzik");
      document.getElementById("nastepny").setAttribute("class", "hidden");
            fetch('https://swapi.co/api/people/?page='+i)
         .then(function(response){
         return response.json();
      })
         .then(function(jsonData){
         console.log(jsonData);
         jsonData.results.forEach(function(item){
         clearInterval(time);
         console.log(item);
         document.getElementById("gra").innerHTML = "";
         test(item.name, item.height, item.mass);

      });
      });
   }
   else
   {
      document.getElementById("poprzedni").removeAttribute("class", "hidden");
      document.getElementById("poprzedni").setAttribute("class", "btn btn-primary btn-lg guzik");
      document.getElementById("nastepny").removeAttribute("class", "hidden");
      document.getElementById("nastepny").setAttribute("class", "btn btn-primary btn-lg guzik");
      

         fetch('https://swapi.co/api/people/?page='+i)
         .then(function(response){
         return response.json();
      })
         .then(function(jsonData){
         console.log(jsonData);
         jsonData.results.forEach(function(item){
         clearInterval(time);
         console.log(item);
         document.getElementById("gra").innerHTML = "";
         test(item.name, item.height, item.mass);

      });
      });
   }
}


function dalej()
{
   
   time = setInterval(function()
   {
      console.log("loading...");
      document.getElementById("gra").innerHTML = "<h2><i class='fas fa-cog'></i>Loading...</h2>";
   },500);
   document.getElementById("dane").innerHTML = "";   
   i++;
   akcja();
}

function wstecz()
{
   time = setInterval(function()
      {
         console.log("loading...");
         document.getElementById("gra").innerHTML = "<h2><i class='fas fa-cog'></i> Loading...</h2>";
      },500);
      document.getElementById("dane").innerHTML = ""; 
      i--;
      akcja();
   
}

function test(imie, wys, masa)
{
   var a = document.createElement('div');
   a.setAttribute("class", "klasa col-sm-4 col-md-3 col-lg-2");
   a.setAttribute("onclick", "grastart()");
   a.innerHTML = "<i class='fas fa-user'></i>"+" "+imie+"<br>"+wys+" cm"+"<br>"+masa+" kg";
   document.getElementById("dane").appendChild(a);
}
function grastart()
{
   location.href= "projektgra.html";
}

var time = setInterval(function()
{
   console.log("loading...");
   document.getElementById("gra").innerHTML = "<h2><i class='fas fa-cog'></i>Loading...</h2>";
},500);


