let displayName, displayNameCode;

document.getElementById("search-button").addEventListener("click", async () => {
    const input = document.getElementById("search-char").value.split("#");
    displayName = input[0];
    displayNameCode = input[1];

    try {
        const response = await fetch('/d2wrapped/searchName', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                displayName: displayName,
                displayNameCode: displayNameCode
            })
        });
    
        if (response.ok) {
            const data = await response.json();
            console.log(data.Response); // Access the 'Response' property
            console.log(data.Message); // Access the 'Message' property
            console.log(data.MessageData); // Access the 'MessageData' property
            const membershipId = data.Response.UserInfoCard.membershipId;
            const membershipType = data.Response.UserInfoCard.membershipType;
        }
        else {
            console.error(`Request failed with status ${response.status}`);
        }


    }
    catch (error) {
        console.error('An error occurred:', error);
    }


    //get all characterId's
    try {
        const response = await fetch('/d2wrapped/getCharacters', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                destinyMembershipId: membershipId,
                membershipType: membershipType,
                component: Characters
            })
        });
    
        if (response.ok) {
            const data = await response.json();
            const characterIds = [];
            const characterData = data.Response.Characters;

            //Creating array of CharacterId's
            if(Array.isArray(characterData)){
                if(characterData.hasOwnProperty("characterId")){
                    characterIds.push(characterData);
                }
            }
        }
        else {
            console.error(`Request failed with status ${response.status}`);
        }


    }
    catch (error) {
        console.error('An error occurred:', error);
    }
        
    //get all historical stats
    //this can be done with just serverside 
    try {
        const response = await fetch('/d2wrapped/getHistoricalData', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                destinyMembershipId: membershipId,
                membershipType: membershipType,
            })
        });
    
        if (response.ok) {
            const data = await response.json();
            //load historical 'data' into database
        }
        else {
            console.error(`Request failed with status ${response.status}`);
        }


    }
    catch (error) {
        console.error('An error occurred:', error);
    }
       
});




    

