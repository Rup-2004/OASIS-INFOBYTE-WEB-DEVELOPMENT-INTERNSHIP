// Function to get the current date
function updateDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(); // Get date in local format
    document.getElementById('currentDate').innerText = dateStr;
}

// Function to get the current time
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString(); // Get time in local format
    document.getElementById('currentTime').innerText = timeStr;
}

// Function to get the user's IP address and location
async function fetchUserInfo() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        document.getElementById('ipAddress').innerText = data.ip;
        const locationStr = `${data.city}, ${data.region}, ${data.country}`;
        document.getElementById('location').innerText = locationStr;
    } catch (error) {
        document.getElementById('ipAddress').innerText = "Unable to fetch IP";
        document.getElementById('location').innerText = "Unable to fetch location";
        console.error("Error fetching user info:", error);
    }
}


// Initial updates when the page loads
window.onload = () => {
    updateDate();
    updateTime();
    fetchUserInfo();
};

// Update the time every second
setInterval(updateTime, 1000);



function disclaimer(){
    alert("Disclaimer: This page does not store any of your data. It only displays the information locally in your browser to showcase my coding skills.");
}


// var filterIndex=0;

// const largepic=document.querySelector("#profile-pic");

// function setFilter() {
//     if (filterIndex==0) {
//         largepic.style.filter="none";
//         filterIndex=1;
//     } else{
//         largepic.style.filter='grayscale(50%)';
//         filterIndex=0;
//     }
// }

// setInterval(() => {
//     setFilter();
// }, 3000);
