const apiUrl = "https://fc6a2xdkkjizk5o4uh5ygniyiu0wqhwd.lambda-url.eu-north-1.on.aws/";

async function updateCounter() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("visitor-count").innerText =
            data.count;
    } catch (error) {
        console.error(error);
    }
}

updateCounter();