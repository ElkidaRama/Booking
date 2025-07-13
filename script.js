apartments = [
  {
    name: "Valentino Zirkon",
    reviews: 26,
    rating: 4,
    location: "Tirana, Albania",
    price: 4706,
    image: "img1.png",
    detailsPage: "details.html",
  },
  {
    name: "Siart Apartment",
    reviews: 24,
    rating: 3,
    location: "Tirana, Albania",
    price: 3011,
    image: "img2.png",
    detailsPage: "details.html",
  },
  {
    name: "Shehu Apartment 1",
    reviews: 19,
    rating: 3,
    location: "Tirana, Albania",
    price: 4236,
    image: "img3.png",
    detailsPage: "details.html",
  },
  {
    name: "Lunarist - Luxury Suites with Jacuzzi in Blloku",
    reviews: 16,
    rating: 4,
    location: "Tirana, Albania",
    price: 6989,
    image: "img4.png",
    detailsPage: "details.html",
  },
  {
    name: "Modern Central Loft",
    reviews: 32,
    rating: 5,
    location: "Tirana, Albania",
    price: 5120,
    image: "img5.png",
    detailsPage: "details.html",
  },
  {
    name: "Blloku Smart Studio",
    reviews: 21,
    rating: 4,
    location: "Tirana, Albania",
    price: 3650,
    image: "img6.png",
    detailsPage: "details.html",
  },
  {
    name: "Green Oasis Apartment",
    reviews: 17,
    rating: 3,
    location: "Tirana, Albania",
    price: 2899,
    image: "img7.png",
    detailsPage: "details.html",
  },
  {
    name: "Penthouse View Tirana",
    reviews: 28,
    rating: 5,
    location: "Tirana, Albania",
    price: 7520,
    image: "img8.png",
    detailsPage: "details.html",
  },
  {
    name: "Cozy Riverside Apartment",
    reviews: 14,
    rating: 3,
    location: "Tirana, Albania",
    price: 3100,
    image: "img9.png",
    detailsPage: "details.html",
  },
];

function createAppUI(app_data) {
  let app_card = document.createElement("div");
  app_card.innerHTML = `<a href="${app_data.detailsPage}" class="card h-100">
            <img src="${app_data.image}" class="card-img-top" alt="${
    app_data.name
  }" />
            <div class="card-body">
              <div class="mb-2 text-warning">
                ${'<i class="fa-solid fa-star"></i>'.repeat(app_data.rating)}
              </div>
              <h5 class="card-title">${app_data.name}</h5>
              <p class="card-text">Exceptional · ${app_data.reviews} reviews</p>
              <p><i class="fa-solid fa-location-dot"></i> ${
                app_data.location
              }</p>
            </div>
            <p class="text-end fw-bold">ALL ${app_data.price}</p>
          </a>`;
  return app_card;
}

function updateAppUI(app_data_state) {
  let appListContainer = document.querySelector("#app-list-container");
  appListContainer.innerHTML = "";

  for (let i = 0; i < app_data_state.length; i++) {
    const app_data = app_data_state[i];
    const newAppCard = createAppUI(app_data);
    appListContainer.append(newAppCard);
  }
}

updateAppUI(apartments);
