const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

const imageArray = [
  "img/ijazah.jpeg",
  "img/transkip 1.jpeg",
  "img/transkip 2.jpeg",
];

// Loop untuk menambahkan gambar ke halaman
imageArray.forEach((src) => {
  let img = document.createElement("img");
  img.src = src;
  imageContainer.appendChild(img);
});

/*

// Unplash API
const count = 10;
const apiKey = "lnJ7NaDSNVh3KNaKTPZqnsSE25aaEw2QYgchJcbqx44";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//hepler function for setAttribute on DOM element
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create element for link and photo, add to DOM
function displayPhoto() {
  // run function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> to link to unplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // create img for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      tittle: photo.alt_description,
    });
    //put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//mendapatkan foto melalui Unplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhoto();
  } catch (error) {
    //  terjadi kesalahan
  }
}

// cek to see if scrolling near bottom of page, load img
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log("load more");
  }
});

//call fungsi
getPhotos();


*/
