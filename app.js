let cars = [
    {
      "brand": "Toyota",
      "famousModel": "Camry",
      "color": "Super White",
      "image": "./images/toyota.jfif"
    },
    {
      "brand": "Ford",
      "famousModel": "Mustang",
      "color": "Race Red",
      "image": "./images/ford.jfif"
    },
    {
      "brand": "BMW",
      "famousModel": "3 Series",
      "color": "Alpine White",
      "image": "./images/bmw.jfif"
    },
    {
      "brand": "Mercedes-Benz",
      "famousModel": "C-Class",
      "color": "Obsidian Black",
      "image": "./images/merceds.webp"
    },
    {
      "brand": "Honda",
      "famousModel": "Civic",
      "color": "Crystal Black Pearl",
      "image": "./images/honda.jpg"
    },
    {
      "brand": "Tesla",
      "famousModel": "Model S",
      "color": "Midnight Silver Metallic",
      "image": "./images/tesla.webp"
    },
    {
      "brand": "Audi",
      "famousModel": "A4",
      "color": "Ibis White",
      "image": "./images/audi.jfif"
    },
    {
      "brand": "Chevrolet",
      "famousModel": "Corvette",
      "color": "Torch Red",
      "image": "./images/chevrolet.jfif"
    },
    {
      "brand": "Nissan",
      "famousModel": "Altima",
      "color": "Gun Metallic",
      "image": "./images/nissan.jfif"
    },
    {
      "brand": "Hyundai",
      "famousModel": "Elantra",
      "color": "Phantom Black",
      "image": "./images/hyundai.jfif"
    },
    {
      "brand": "Volkswagen",
      "famousModel": "Golf",
      "color": "Pure White",
      "image": "./images/volkswagen.jfif"
    },
    {
      "brand": "Porsche",
      "famousModel": "911",
      "color": "Guards Red",
      "image": "./images/porsche.jfif"
    },
    {
      "brand": "Lexus",
      "famousModel": "RX",
      "color": "Nebula Gray Pearl",
      "image": "./images/lexus.jfif"
    },
    {
      "brand": "Subaru",
      "famousModel": "Outback",
      "color": "Crystal White Pearl",
      "image": "./images/subaru.jpg"
    },
    {
      "brand": "Ferrari",
      "famousModel": "488",
      "color": "Rosso Corsa",
      "image": "./images/ferrari.jpg"
    },
    {
      "brand": "lamborghini",
      "famousModel": "Huracan Evo",
      "color": "Crystal silver Pearl",
      "image": "./images/Lamborghini.webp"
    }
  ]

  let main = document.querySelector("#main");
//   main.innerHTML = `
//   <nav class="navbar w-100 h-20 navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
    
//     <div class="new">
//       <div class="collapse navbar-collapse" id="navbarScroll">
//         <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
//           <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li class="nav-item">
//           <a class="nav-link" href="#">Brands</a>
//           </li>
//           <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//           </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact us</a>
//         </li>
//     </div>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>`

  for(let keys in cars){
    main.innerHTML += `

    <div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3" style="width: 18rem;" data-aos="zoom-in" data-aos-duration="1000">
  <img src="${cars[keys].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cars[keys].brand}</h5>
    <h5 class="card-title">${cars[keys].famousModel}</h5>
    <h5 class="card-title">${cars[keys].color}</h5>
    <a href="#" class="btn btn-primary" onclick="buy();">Buy Now</a>
  </div>
</div>`;
  }
  function buy(){
    window.location.href = "./detail.html"
  }
  
  function home(){
    window.location.href = "index.html"
  }

  let output = document.querySelector("#output");
  
  