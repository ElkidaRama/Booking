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
let apartment_state = [...apartments];

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
updateAppUI(apartment_state);

// FILTER BY CATEGORY
function filterApartmentsByCategory(event) {
  let category_title = event.target.id;
  if (category_title === "All") {
    updateAppUI(apartment_state);
    return;
  }
  let filtered = [];
  for (let i = 0; i < apartment_state.length; i++) {
    const apartment_data = apartment_state[i];
    if (apartment_data.location === category_title) {
      filtered.push(apartment_data);
    }
  }
  updateAppUI(filtered);
}

// FILTER BY RATING
function filterByRating(event) {
  let filter_rating = event.target.id;
  filter_rating = +filter_rating.split("-")[1];
  const filtered = [];
  for (let i = 0; i < apartment_state.length; i++) {
    const apartment_data = apartment_state[i];
    if (Math.floor(apartment_data.rating) === filter_rating) {
      filtered.push(apartment_data);
    }
  }
  updateAppUI(filtered);
}

// SEARCH BY NAME
function searchByName(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#keyword");
  let keyword = searchInputElement.value.toLowerCase();
  if (keyword.length === 0) {
    updateAppUI(apartment_state);
    return;
  }
  let results = [];
  for (let i = 0; i < apartment_state.length; i++) {
    const apartment_data = apartment_state[i];
    if (apartment_data.name.toLowerCase().includes(keyword)) {
      results.push(apartment_data);
    }
  }
  updateAppUI(results);
}

// CATEGORY BUTTONS
function get_categories(data) {
  let unique_categories = [];
  for (let i = 0; i < data.length; i++) {
    const apartment_data = data[i];
    if (!unique_categories.includes(apartment_data.location)) {
      unique_categories.push(apartment_data.location);
    }
  }
  return unique_categories;
}

function showCategories(categories) {
  let container = document.querySelector("#categories-container");
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const btn = document.createElement("button");
    btn.id = category;
    btn.classList.add("btn", "btn-outline-primary", "mx-2");
    btn.innerText = category;
    btn.addEventListener("click", filterApartmentsByCategory);
    container.append(btn);
  }
}

let categories = get_categories(apartment_state);
showCategories(categories);
