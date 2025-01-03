let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let cursor = document.querySelector(".cursor");

const portfolio = document.querySelector("#portfolio-container");
const service = document.querySelector("#service-container");
const skill = document.querySelector("#skill-container");

const portfolioList = [
  { name: "Ecommerce Store", link: "https://kart.webibee.com" },
  { name: "VS ANIMAL HEALTH", link: "https://vsanimalhealth.com" },
  { name: "PLAINLIGHTS", link: "https://plainlights.com" },
  { name: "OS CRANE PARTS", link: "https://oscraneparts.com" },
  { name: "DYNAMAC DIGITAL", link: "https://dynamacdigital.vercel.app" },
];
const serviceList = [
  { name: "Frontend Development", icon: "fas fa-mobile" },
  { name: "API Integration", icon: "fas fa-network-wired" },
  { name: "Vercel Hosting", icon: "fa-solid fa-v" },
  { name: "Domain Buying", icon: "fa-solid fa-server" },
  { name: "Static Page Development", icon: "fa-solid fa-file" },
  { name: "Ecommerce Development", icon: "fa-solid fa-cart-shopping" },
];
const skillList = [
  { name: "React JS", fill: "80%", duration: "1200" },
  { name: "Next JS", fill: "80%", duration: "1400" },
  { name: "Node JS", fill: "70%", duration: "1600" },
  { name: "API Integration", fill: "90%", duration: "1800" },
];

portfolioList.forEach((item) => {
  portfolio.innerHTML += `<div
                            class="box"
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            data-aos-once="true"
                          >
                          <img
                            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80"
                          />
                          <h3>${item.name}</h3>
                          <div class="icons">
                            <a
                              href=${item.link}
                              class="fas fa-external-link-alt"
                              target="_blank"
                            ></a>
                          </div>
                        </div>`;
});
serviceList.forEach((item) => {
  service.innerHTML += `<div
                          class="box"
                          data-aos="zoom-in"
                          data-aos-duration="1500"
                          data-aos-once="true"
                        >
                          <i class='${item.icon}'></i>
                          <h3>${item.name}</h3>
                        </div>`;
});
skillList.forEach((item) => {
  skill.innerHTML += `<div
                        class="progress"
                        
                        data-aos="fade-right"
                        data-aos-duration='${item.duration}'
                        data-aos-once="true"
                      >
                        <h3>${item.name}<span>${item.fill}</span></h3>
                        <div class="bar"><span style="width: ${item.fill}"></span></div>
                      </div>`;
});

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
