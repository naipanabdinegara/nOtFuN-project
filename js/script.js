const linkItems = document.querySelectorAll(".link-item");
const indicator = document.querySelector(".indicator");

linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
        // Hapus class 'active' dari elemen sebelumnya
        document.querySelector(".active").classList.remove("active");
        // Tambahkan class 'active' ke elemen yang diklik
        linkItem.classList.add("active");

        // Atur posisi indikator
        const offsetLeft = linkItem.offsetLeft;
        const elementWidth = linkItem.offsetWidth;
        indicator.style.left = `${offsetLeft + elementWidth / 2 - indicator.offsetWidth / 2}px`;
    });
});

// Set posisi awal indikator
const activeLink = document.querySelector(".link-item.active");
if (activeLink) {
    const offsetLeft = activeLink.offsetLeft;
    const elementWidth = activeLink.offsetWidth;
    indicator.style.left = `${offsetLeft + elementWidth / 2 - indicator.offsetWidth / 2}px`;
}

// Define a variabel
const webname = document.querySelector('.webname');
const subname = document.querySelector('.subname');
const content = document.querySelector('.content')
const buttonHome = document.querySelector('.home');
const projButton = document.querySelector('.project');
const abtButton = document.querySelector('.about')
const atButton = document.querySelector('.attribution')

// EventListener for buttonHome
buttonHome.addEventListener('click', function() {
    console.log("Tombol Home diklik");

    // Add fade-out class for starting animation
    webname.classList.add('fade-out');
    subname.classList.add('fade-out');
    content.classList.add('fade-out');

    // Set the timeout for changing animation on text
    setTimeout(() => {
        console.log("Animasi selesai, mengganti teks...");
       // Fetch the JSON data
      fetch('js/data.json')
     .then(response => response.json())
     .then(data => {
    // Update the text content with the data from the JSON file
    webname.innerHTML = data.webname;
    subname.innerHTML = data.subname1;
    content.innerHTML = data.content1;
  });

        // Delete fade.out class
        webname.classList.remove('fade-out');
        subname.classList.remove('fade-out');
        content.classList.remove('fade-out');
    }, 800); 
});

// EventListener for projButton
projButton.addEventListener('click', function() {
    console.log("Tombol Home diklik");

    // Add fade-out class for starting animation
    webname.classList.add('fade-out');
    subname.classList.add('fade-out');
    content.classList.add('fade-out');

    // Set the timeout for changing animation on text
    setTimeout(() => {
        console.log("Animasi selesai, mengganti teks...");
       // Fetch the JSON data
      fetch('js/data.json')
     .then(response => response.json())
     .then(data => {
    // Update the text content with the data from the JSON file
    webname.innerHTML = data.webname;
    subname.innerHTML = data.subname2;
    content.innerHTML = data.project;
  });

        // Delete fade.out class
        webname.classList.remove('fade-out');
        subname.classList.remove('fade-out');
        content.classList.remove('fade-out');
    }, 800); 
});

// EventListener for projButton
abtButton.addEventListener('click', function() {
    console.log("Tombol Home diklik");

    // Add fade-out class for starting animation
    webname.classList.add('fade-out');
    subname.classList.add('fade-out');
    content.classList.add('fade-out');

    // Set the timeout for changing animation on text
    setTimeout(() => {
        console.log("Animasi selesai, mengganti teks...");
       // Fetch the JSON data
      fetch('js/data.json')
     .then(response => response.json())
     .then(data => {
    // Update the text content with the data from the JSON file
    webname.innerHTML = data.webname;
    subname.innerHTML = data.subname3;
    content.innerHTML = data.introduction;
  });

        // Delete fade.out class
        webname.classList.remove('fade-out');
        subname.classList.remove('fade-out');
        content.classList.remove('fade-out');
    }, 800); 
});

// EventListener for atButton
atButton.addEventListener('click', function() {
    console.log("Tombol Home diklik");

    // Add fade-out class for starting animation
    webname.classList.add('fade-out');
    subname.classList.add('fade-out');
    content.classList.add('fade-out');

    // Set the timeout for changing animation on text
    setTimeout(() => {
        console.log("Animasi selesai, mengganti teks...");
       // Fetch the JSON data
      fetch('js/data.json')
     .then(response => response.json())
     .then(data => {
    // Update the text content with the data from the JSON file
    webname.innerHTML = data.webname;
    subname.innerHTML = data.subname4;
    content.innerHTML = data.attribution;
  });

        // Delete fade.out class
        webname.classList.remove('fade-out');
        subname.classList.remove('fade-out');
        content.classList.remove('fade-out');
    }, 800); 
});


// Function to load data from data.json when index.html loaded
function loadDefaultData() {
  fetch('js/data.json') // change the path to your json file location
    .then(response => response.json())
    .then(data => {
      document.querySelector('.webname').innerHTML = data.webname;
      document.querySelector('.subname').innerHTML = data.subname1;
      document.querySelector('.content').innerHTML = data.content;
    });
}

// Call a function to load data
window.onload = loadDefaultData;
  
