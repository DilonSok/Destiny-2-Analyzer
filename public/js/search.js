let displayName, displayNameCode;

document.getElementById("search-button").addEventListener("click", async () => {
    const input = document.getElementById("search-char").value.split("#");
    displayName = input[0];
    displayNameCode = input[1];

    try {
        const response = await fetch('/d2analyzer/search', {
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
        }
        else {
            console.error(`Request failed with status ${response.status}`);
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
        
});


    

