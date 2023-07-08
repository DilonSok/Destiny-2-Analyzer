var apiKey = "c9501b1afe3a4d879887457002eaf19d";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

const tester = document.getElementById('test');

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
  test.innerText = json.Response.data.inventoryItem.itemName;
 }
}

xhr.send();