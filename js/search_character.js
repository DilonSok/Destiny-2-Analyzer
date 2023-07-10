const url = 'https://api.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/All';
const  apiKey = "c9501b1afe3a4d879887457002eaf19d";

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-button').addEventListener('click', () => {
    //get input for who to search for
  const givenChar = document.getElementById('search-char').value;
  const parts = givenChar.split('#');
  const displayName = parts[0];
  const displayNameCode = parts[1];
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-API-Key', apiKey);
  
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText);
        console.log(response.Response);
      }
      else {
        console.error(`Request failed with status ${xhr.status}`);
      }
    }
  };
  
  const payload = JSON.stringify({
    displayName: displayName,
    displayNameCode: displayNameCode
  });
  console.log(payload);
  xhr.send(payload);
  });
  
});
