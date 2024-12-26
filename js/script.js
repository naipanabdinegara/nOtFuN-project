// Select all navigation link items and the indicator element
const linkItems = document.querySelectorAll(".link-item");
const indicator = document.querySelector(".indicator");

// Add click event listeners to each navigation link
linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
        // Remove the 'active' class from the previously active element
        document.querySelector(".active").classList.remove("active");
        // Add the 'active' class to the clicked element
        linkItem.classList.add("active");

        // Update the indicator's position based on the clicked element
        const offsetLeft = linkItem.offsetLeft;
        const elementWidth = linkItem.offsetWidth;
        indicator.style.left = `${offsetLeft + elementWidth / 2 - indicator.offsetWidth / 2}px`;
    });
});

// Set the initial position of the indicator
const activeLink = document.querySelector(".link-item.active");
if (activeLink) {
    const offsetLeft = activeLink.offsetLeft;
    const elementWidth = activeLink.offsetWidth;
    indicator.style.left = `${offsetLeft + elementWidth / 2 - indicator.offsetWidth / 2}px`;
}

// Select elements for dynamic content updates
const webname = document.querySelector('.webname');
const subname = document.querySelector('.subname');
const content = document.querySelector('.content');
const buttonHome = document.querySelector('.home');
const projButton = document.querySelector('.project');
const abtButton = document.querySelector('.about');
const atButton = document.querySelector('.attribution');

// Animation duration in milliseconds (matches your CSS animation)
const animationDuration = 500; 

// Function to handle button click and dynamic content update
function handleButtonClick(buttonType) {
    console.log(`${buttonType} button clicked`);

    // Add fade-out class to start the animation
    webname.classList.add('fade-out');
    subname.classList.add('fade-out');
    content.classList.add('fade-out');

    // Wait for the animation to finish before updating content
    setTimeout(() => {
        // Fetch data from JSON
        fetch('js/data.json')
            .then(response => response.json())
            .then(data => {
                console.log("Data successfully loaded, updating content...");

                // Update content based on the clicked button
                switch (buttonType) {
                    case 'home':
                        webname.innerHTML = data.webname;
                        subname.innerHTML = data.subname1;
                        content.innerHTML = data.content;
                        break;
                    case 'project':
                        webname.innerHTML = data.webname;
                        subname.innerHTML = data.subname2;
                        content.innerHTML = data.project;
                        break;
                    case 'about':
                        webname.innerHTML = data.webname;
                        subname.innerHTML = data.subname3;
                        content.innerHTML = data.introduction;
                        break;
                    case 'attribution':
                        webname.innerHTML = data.webname;
                        subname.innerHTML = data.subname4;
                        content.innerHTML = data.attribution;
                        break;
                }

                // Remove fade-out class after updating content
                webname.classList.remove('fade-out');
                subname.classList.remove('fade-out');
                content.classList.remove('fade-out');
                console.log("Animation and content update completed.");
            })
            .catch(error => {
                console.error("Error loading data:", error);
            });
    }, animationDuration); // Delay matches the animation duration
}

// Add event listeners for navigation buttons
buttonHome.addEventListener('click', () => handleButtonClick('home'));
projButton.addEventListener('click', () => handleButtonClick('project'));
abtButton.addEventListener('click', () => handleButtonClick('about'));
atButton.addEventListener('click', () => handleButtonClick('attribution'));

// Function to load default data on page load
function loadDefaultData() {
    fetch('js/data.json') // Change the path to your JSON file location
        .then(response => response.json())
        .then(data => {
            webname.innerHTML = data.webname;
            subname.innerHTML = data.subname1;
            content.innerHTML = data.content;
        });
}

// Load default data when the page is loaded
window.onload = loadDefaultData;
