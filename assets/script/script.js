AOS.init();

let tools = [
  "html5",
  "css3",
  "bootstrap",
  "javascript",
  "reactjs",
  "github",
  "gitbash",
  "vscode",
  "photoshop",
  "illustrator",
];

let bagianTools = document.querySelector(".tools");
let delay = 0;

let isiTools = [];

tools.forEach((value, index) => {
  isiTools.push(`assets/img/logo/${value}.png`);
});

isiTools.forEach((value, index) => {
  let col = document.createElement("div");
  col.setAttribute("class", "col-sm-3 col-md-2 m-3");
  col.setAttribute("data-aos", "fade-up");
  col.setAttribute("data-aos-offset", "150");
  col.setAttribute("data-aos-delay", `${(delay += 50)}`);

  let imgTools = document.createElement("img");
  imgTools.setAttribute("src", value);
  imgTools.setAttribute("class", "img-fluid");
  imgTools.setAttribute("alt", value);

  col.appendChild(imgTools);

  bagianTools.appendChild(col);
});

let design = [
  "cyborgguppy",
  "luwakmotobike",
  "kingfarmer",
  "homesteak",
  "flowerfish",
  "seafoodjulid",
  "batagor",
  "butetjayatas",
  "buttalewangang",
];

let bagianDesign = document.querySelector(".design");

let isiGambar = [];

design.forEach((value, index) => {
  isiGambar.push(`assets/img/thumb/${value}.png`);
});

isiGambar.forEach((value, index) => {
  let owlItem = document.createElement("div");
  owlItem.setAttribute("class", "item");

  let imgItem = document.createElement("img");
  imgItem.setAttribute("src", value);

  owlItem.appendChild(imgItem);

  bagianDesign.appendChild(owlItem);
});

let contacts = [
  {
    logo: "github",
    url: "https://github.com/anasfaisalamri",
  },
  {
    logo: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=085161552498",
  },
  {
    logo: "instagram",
    url: "https://instagram.com/anasfaisalamri",
  },
];

let bagianContact = document.querySelector(".contacts");

let isiContact = `${contacts
  .map(
    (contact) =>
      `<div class="col-sm-3 col-md-3 m-3" data-aos="fade-up" data-aos-offset="150" data-aos-delay="${(delay += 20)}">
        <a href="${contact.url}" target="_blank" rel="noopener noreferrer">
          <img src="assets/img/logo/${contact.logo}.png" alt="${contact.logo}">
        </a>
      </div>`
  )
  .join("")}`;

bagianContact.innerHTML = isiContact;

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".project")
  .find(".owl-carousel")
  .owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 10,
    nav: false,
    dotsClass: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
