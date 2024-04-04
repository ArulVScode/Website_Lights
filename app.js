let sections = document.querySelectorAll('section');
let listLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            listLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav =document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

function toggleLights() {
    let toggle1 = document.getElementById("toggle-default1");
    let toggle2 = document.getElementById("toggle-default2");
    let toggle3 = document.getElementById("toggle-default3");
    let toggle4 = document.getElementById("toggle-default4");
    let toggle5 = document.getElementById("toggle-default5");
    let toggle6 = document.getElementById("toggle-default6");
    let toggle7 = document.getElementById("toggle-default7");
    let toggle8 = document.getElementById("toggle-default8");
    let toggle9 = document.getElementById("toggle-default9");
    let toggle10 = document.getElementById("toggle-default10");
    let lights1 = document.getElementById("lights1");
    let lights2 = document.getElementById("lights2");
    let lights3 = document.getElementById("lights3");
    let lights4 = document.getElementById("lights4");
    let lights5 = document.getElementById("lights5");
    let lights6 = document.getElementById("lights6");
    let lights7 = document.getElementById("lights7");
    let lights8 = document.getElementById("lights8");
    let lights9 = document.getElementById("lights9");
    let lights10 = document.getElementById("lights10");

    const toggles = [
        toggle1, toggle2, toggle3, toggle4, toggle5,
        toggle6, toggle7, toggle8, toggle9, toggle10
    ];

    const lights = [
        lights1, lights2, lights3, lights4, lights5,
        lights6, lights7, lights8, lights9, lights10
    ];

    toggles.forEach((toggle, index) => {
        if (toggle.checked) {
            lights[index].src = "on.gif"; 
        } else {
            lights[index].src = "off.gif"; 
        }
    });
}


function connected() {
    let checkbox1 = document.getElementById("default-checkbox");
    let toggle = document.getElementById("toggle-default");
    let toggle11 = document.getElementById("toggle-default11");
    let toggle12 = document.getElementById("toggle-default12");
    let toggle13 = document.getElementById("toggle-default13");
    let toggle14 = document.getElementById("toggle-default14");
    let lights1 = document.getElementById("lights1");
    let lights2 = document.getElementById("lights2");
    let lights3 = document.getElementById("lights3");
    let lights4 = document.getElementById("lights4");
    let lights5 = document.getElementById("lights5");
    let lights6 = document.getElementById("lights6");
    let lights7 = document.getElementById("lights7");
    let lights8 = document.getElementById("lights8");
    let lights9 = document.getElementById("lights9");
    let lights10 = document.getElementById("lights10");
    let lights11 = document.getElementById("lights11");
    let lights12 = document.getElementById("lights12");
    let lights13 = document.getElementById("lights13");
    let lights14 = document.getElementById("lights14");
    let lights15 = document.getElementById("lights15");
    let lights16 = document.getElementById("lights16");
    let lights17 = document.getElementById("lights17");
    let lights18 = document.getElementById("lights18");
    let lights19 = document.getElementById("lights19");
    let lights20 = document.getElementById("lights20");
    
    
    if (toggle.checked) { 
        lights1.src = "on.gif";
        lights2.src = "on.gif";
        lights3.src = "on.gif";
        lights4.src = "on.gif";
        lights5.src = "on.gif";
        lights6.src = "on.gif";
        lights7.src = "on.gif";
        lights8.src = "on.gif";
        lights9.src = "on.gif";
        lights10.src = "on.gif";
    } else if(checkbox1.checked) {
        if (toggle.checked) {
            lights6.src = "on.gif";
            lights7.src = "on.gif"; 
            lights8.src = "on.gif";
        } else {
            lights1.src = "off.gif";
            lights2.src = "off.gif";
            lights3.src = "off.gif";
            lights4.src = "off.gif";
            lights5.src = "off.gif";
        }
    } else {
        lights1.src = "off.gif";
        lights2.src = "off.gif";
        lights3.src = "off.gif";
        lights4.src = "off.gif";
        lights5.src = "off.gif";
        lights6.src = "off.gif";
        lights7.src = "off.gif";
        lights8.src = "off.gif";
        lights9.src = "off.gif";
        lights10.src = "off.gif";
        
    }

    if (toggle11.checked) {
        lights11.src = "on.gif";
        lights12.src = "on.gif";
        lights13.src = "on.gif";
    } else {
        lights11.src = "off.gif";
        lights12.src = "off.gif";
        lights13.src = "off.gif";
    }

    if (toggle12.checked) {
        lights14.src = "on.gif";
    } else {
        lights14.src = "off.gif";
    }

    if (toggle13.checked) {
        lights15.src = "on.gif";
        lights16.src = "on.gif";
    } else {
        lights15.src = "off.gif";
        lights16.src = "off.gif";
    }

    if (toggle14.checked) {
        lights17.src = "on.gif";
        lights18.src = "on.gif";
        lights19.src = "on.gif";
        lights20.src = "on.gif";
    } else {
        lights17.src = "off.gif";
        lights18.src = "off.gif";
        lights19.src = "off.gif";
        lights20.src = "off.gif";
    }
}