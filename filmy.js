// var tytul;
// var odc;
// var data;

// var mydata = JSON.parse(data);
// var liczba = Object.keys(mydata).length;

// fetch('filmydane.js')
// .then(function(response){
// return response.json();
// })
// .then(function(jsonData){
// console.log(jsonData);
// jsonData.results.forEach(function(item){
// clearInterval(time);
// console.log(item);
// document.getElementById("lista").innerHTML = "";
// test(item.title, item.episone_id, item.release_date);
// });
// });

// function test(tytul, odc, data)
// {
//    var a = document.createElement('div');
//    a.setAttribute("class", "col-lg-12 col-md-12 col-sm-12");
//    a.innerHTML = "<i class='fas fa-video'></i> "+tytul+"<br>"+"Odcinek "+odc+"<br><i class='far fa-calendar-alt'></i> "+data;
//    document.getElementById("lista").appendChild(a);

//    document.getElementsByTagName("sidebar").innerHTML = tytul;

// }



// var time = setInterval(function()
// {
//    console.log("loading...");
//    document.getElementById("ladowanie").innerHTML = "<h2><i class='fas fa-cog'></i>Loading...</h2>";
// },500);