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
sortowanie();
});

var epiz=[];
var title=[];
var how=[];
var z=1;

function test(tytul, odc, data)
{
   z=odc;
   epiz[z]=odc;
   title[z]=tytul;
   how[z]=data;
}

function sortowanie()
{
   for(var i=1;i<8;i++)
   {
            document.getElementById("lista").innerHTML += "<div id='"+i+"' class='glowna col-lg-10 col-md-10 col-sm-10'><h1><i class='fas fa-film'></i> "+title[i]+"</h1><br>"+"Episode: "+epiz[i]+"<br><i class='far fa-calendar-alt'></i> "+how[i]+"</div>";
            document.getElementById("bok").innerHTML += "<a href='#"+i+"'><div class='klasa boczny col-lg-12 col-md-12 col-sm-12'><h1><i class='fas fa-film'></i> "+title[i]+"</h1><br>"+"Episode: "+epiz[i]+"<br><i class='far fa-calendar-alt'></i> "+how[i]+"</div></a>";
            if(i==1)
            {
               document.getElementById(i).innerHTML += "<br><p> Niepewność ogarnęła Republikę Galaktyczną. Powstał spór o opodatkowanie   szlaków handlowych w systemie gwiezdnym.</p><p>Mając nadzieje, że rozwiąże sprawę blokadą śmiercionośnych statków, chciwa Federacja Handlowa wstrzymała wszelkie dostawy na małą planetę Naboo.</p><p> Podczas gdy Kongres Republiki obraduje w nieskończoność, Naczelny Kanclerz potajemnie wysyła dwóch Rycerzy Jedi obrońców pokoju i sprawiedliwości w celu rozstrzygnięcia konfliktu.</p><p>Dwaj rycerze Jedi wyruszają z misją ocalenia planety Naboo przed inwazją wojsk Federacji Handlowej. Trafiają na pustynny glob, gdzie pomoże im mały Anakin Skywalker.</p><br<br> Zobacz zwiastun:<br><iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/Zm5doCoyIxM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==2)
            {
               document.getElementById(i).innerHTML += "<br><p>Mija dziesięć lat od bitwy o Naboo, a jedność galaktycznej Republiki znowu zostaje wystawiona na próbę. Podstępny książę Dooku (Christopher Lee) przewodzi międzyplanetarnemu buntowi przeciw demokratycznym rządom.</p><p> Będąca teraz wpływową senatorką Padmé Amidala (Natalie Portman) stara się ze wszystkich sił walczyć z separatystycznymi dążeniami. Jest jednak przeciwniczką rozbudowy armii, czym przysparza sobie wielu wrogów.</p><p> Dwaj Rycerze Jedi, Obi-Wan Kenobi (Ewan McGregor) i Anakin Skywalker (Hayden Christensen), zostają przydzieleni do jej ochrony. Wkrótce między Amidalą i Anakinem rodzi się zakazane uczucie. Druga część widowiskowej opowieści o nieustraszonych żołnierzach galaktyki. </p><p>Seria jest prequelem kultowej trylogii, nakręconej przez George’a Lucasa w latach siedemdziesiątych i osiemdziesiątych. Fabuła należy do najmocniejszych stron Ataku klonów. Jest ciekawa i dobrze poprowadzona, wyjaśnia też wiele szczegółów dotyczących młodości bohaterów gwiezdnej opowieści..</p><br<br> Zobacz zwiastun:<br><iframe width='560' height='315' class='col-lg-12 col-md-12 col-sm-12 col-xs-12' src='https://www.youtube.com/embed/LCFiW1PGWBc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==3)
            {
               document.getElementById(i).innerHTML += "<br><p>Trzy lata po wydarzeniach znanych z drugiej części wojny klonów wciąż trwają. Gdy Palpatine - już kanclerz - zostaje porwany przez Separatystów, na ratunek ruszają Obi-Wan Kenobi i Anakin Skywalker. Anakin - za namową kanclerza - ucina głowę hrabiemu Dooku.</p><p> BPo tych wydarzeniach Palpatine opowiada Skywalkerowi o najpotężniejszym z Sithów, Darcie Plagueisie, który zapanował nad śmiercią. Anakin widzi w tej Mocy szansę na uratowanie swojej żony - miał wizje, w których Padmé umiera przy porodzie. Ostatecznie Skywalker pomaga Sithowi zniszczyć Radę Jedi, jednocześnie stając się jego uczniem i przybierając imię Darth Vader.</p><p> Przejście Anakina na Ciemną Stronę Mocy można uznać za początek nadejścia Imperium. Vader zabił wszystkich uczniów Jedi (w tym dzieci), a Palpatine aktywował zaprogramowany wiele lat wcześniej w umysłach klonów Rozkaz 66 - eksterminację wszystkich Jedi, po czym ogłosił się Imperatorem nowo powstałego Imperium Galaktycznego.</p><br<br> Zobacz zwiastun:<br><iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/G5pkbmQt-Ls' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==4)
            {
               document.getElementById(i).innerHTML += "<br><p>Pierwsza część oryginalnej trylogii dzieje się 19 lat po upadku Republiki i powstaniu Imperium. Od wielu lat walczy z nim ponoszący ciągłe porażki Sojusz Rebeliantów. W końcu pojawia się jednak światełko w tunelu: specjalny oddział rebelii wykradł plany Gwiazdy Śmierci, ogromnej stacji bojowej zdolnej niszczyć całe planety.</p><p>Gdy Leia (Carrie Fisher), dorosła już córka Padmé i Anakina i jedna z przywódczyń Rebelii, podejmuje się transportu planów, dopada ją Darth Vader i więzi w Gwieździe Śmierci. Leia jednak zdołała wcześniej ukryć strategiczne informacje w niebiesko-białym droidzie R2-D2 (należącym kiedyś do jej matki i ojca). Ten wraz ze złotym, gadatliwym robotem C-3PO (zbudowanym wiele lat wcześniej przez Anakina) lądują w kapsule ratunkowej na znanej nam już planecie Tatooine. R2-D2 i C-3PO miały znaleźć Obi-Wana Kenobiego (Alec Guinness) i przekazać mu zaszyfrowane informacje.</p><br<br> Zobacz zwiastun:<br><iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/-Rfk9lz0XXE' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==5)
            {
               document.getElementById(i).innerHTML += "<br><p>Trzy lata po bitwie rebelianci wciąż kontynuują walkę z Imperium i budują nową bazę na mroźnej planecie Hoth. Imperium dowiaduje się o tym i rozpoczyna się kolejna bitwa. Wygrywają ją siły Vadera i Imperatora - rebelianci muszą się ewakuować i szukać kolejnych kryjówek.</p><p>Han Solo, Luke, Leia, Chewbacca i dwa sławne droidy muszą się jednak rozdzielić. Luke leci na bagnistą planetę Dagobah, by znaleźć Yodę, dawnego mistrza Jedi. Yoda wystąpił w pierwszych trzech częściach sagi, w których był jedną z najważniejszych figur Rady Jedi, jednak po przegranej walce z Darthem Sidiousem usunął się w cień.</p><br<br> Zobacz zwiastun:<br><iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/Mf48PUbxzC8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==6)
            {
               document.getElementById(i).innerHTML += "<br><p>Imperium zdążyło prawie w całości zbudować drugą Gwiazdę Śmierci, mimo że od bitwy o Yavin minęły zaledwie cztery lata. Lando Calrissian, Leia i Luke starają się odbić Hana z rąk Jabby Hutta. Nie wszystko idzie jednak po ich myśli: sami zostają pojmani przez ogromnego, ślimakopodobnego Jabbę. Bohaterowie ratują się jednak z opresji i przyłączają do Rebelii.</p><p>Luke postanawia raz jeszcze odłączyć się od grupy i odwiedzić starego Yodę. Mimo że mistrz powoli umiera (ma już ponad 900 lat), Luke rozmawia z nim o swojej ostatniej walce z Vaderem i dowiaduje się, że Leia jest jego siostrą.W tym samym czasie przywódcy Rebelii prezentują ostateczny plan zniszczenia Imperium. Druga Gwiazda śmierci jest chroniona polem siłowym wysyłanym z pobliskiej planety Endor. Po wielu próbach i zasadzkach, przy pomocy Ewoków, kosmitów wyglądających jak niedźwiadki, Hanowi i Lei udaje im się zniszczyć pole siłowe.</p><br<br> Zobacz zwiastun:<br> <iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/pCcucWBTQoU' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
            else if(i==7)
            {
               document.getElementById(i).innerHTML += "<br><p>Gwiezdne wojny: Przebudzenie mocy to siódma część słynnej sagi. Film otrzymał wiele nagród, wyróżniony także został pięcioma nominacjami do Oscara (m.in. za muzykę Johna Williamsa, montaż oraz efekty specjalne). Reżyserem i współautorem scenariusza tej produkcji został J.J. Abrams (Zagubieni, Star Trek). Akcja filmu Gwiezdne wojny: Przebudzenie mocy rozgrywa się trzydzieści lat od pokonania Imperium Zła. Niestety, Galaktyce znów zagraża niebezpieczeństwo. Władzę nad nią chce przejąć Najwyższy Porządek. Aby mu w tym przeszkodzić, powstał Ruch Oporu, któremu przewodzi generał Leia Organa (Carrie Fisher). </p><p>Tymczasem brat Lei, Luke Skywalker (Mark Hamill), zaginął. Gdy dociera do niej informacja, że przebywa on na pustynnej planecie Jakku, wysyła tam swojego najlepszego pilota, Poego Damerona (Oscar Isaac). Niestety, wpada on w ręce złowrogiego Kylo Rena (Adam Driver). Wkrótce w filmie 'Gwiezdne wojny: Przebudzenie mocy' pojawiają się także zbuntowany szturmowiec Finn (John Boyega) oraz Rey (Daisy Ridley) - młoda dziewczyna obdarzona niezwykłymi umiejętnościami. Oni także zostają wmieszani w rozgrywkę pomiędzy Ruchem Oporu a Najwyższym Porządkiem.</p><br<br> Zobacz zwiastun:<br><iframe class='col-lg-12 col-md-12 col-sm-12 col-xs-12' width='560' height='315' src='https://www.youtube.com/embed/P8248pLA9d8' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            }
   }
}

var time = setInterval(function()
{
   console.log("loading...");
   document.getElementById("ladowanie").innerHTML = "<h2><i class='fas fa-cog'></i>Loading...</h2>";
},500);