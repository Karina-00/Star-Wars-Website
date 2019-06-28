var tytul;
var odc;
var data;
var i = 1;


fetch('https://swapi.co/api/films/?page='+i)
.then(function(response){
return response.json();
})
.then(function(jsonData){
console.log(jsonData);
jsonData.results.forEach(function(item){
clearInterval(time);
console.log(item);
document.getElementById("ladowanie").innerHTML = "";
test(item.title, item.episode_id, item.release_date);
});
});

function test(tytul, odc, data)
{
   var a = document.createElement('div');
   a.setAttribute("class", "film col-lg-12 col-md-12 col-sm-12");
   a.innerHTML = "<h1><i class='fas fa-film'></i> "+tytul+"</h1><br>"+"Episode: "+odc+"<br><i class='far fa-calendar-alt'></i> "+data;
   document.getElementById("lista").appendChild(a);
   // document.getElementsByTagName("sidebar").innerHTML = tytul;
}


var time = setInterval(function()
{
   console.log("loading...");
   document.getElementById("ladowanie").innerHTML = "<h2><i class='fas fa-cog'></i>Loading...</h2>";
},500);