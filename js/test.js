var apiKey = "c9501b1afe3a4d879887457002eaf19d";
const tester = document.getElementById('test');
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net//Platform/Destiny2/3/Account/4611686018492293152/Character/2305843009522836757/Stats/?groups=2/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var json = JSON.parse(this.responseText);
    console.log(json); 

    var act_cleared = json.Response.allPvE.allTime.activitiesCleared.basic.value;
    tester.innerText = "All-Time Activities Cleared (PvE): " + JSON.stringify(act_cleared);
  }
 
}

xhr.send();