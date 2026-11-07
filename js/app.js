// eTube JS

// --- Data Types (Open console to see the data types) ---
// String
let siteName = "eTube";
let siteDescription = "A video sharing platform";
let isLoggedIn = false; // Boolean
let currentUser;
let featuredVideos = null; // Null

let tags = ["music", "gaming", "education", "comedy"]; // Array
let channel = {
  name: "eTube Channel",
  subscribers: 1000000,
  isVerified: true,
}; // Object

console.log("Welcome to " + siteName);
console.log(typeof siteName, typeof isLoggedIn, typeof currentUser, typeof featuredVideos, typeof tags, typeof channel);

// ------------------------- Dark Mode Toggle -------------------------
function toggleTheme() {
  document.body.classList.toggle("dark");
  let btn=document.getElementById("themeBtn");
  if(document.body.classList.contains("dark")){
    btn.innerHTML="&#9728;&#65039;Light";
  } else {
    btn.innerHTML="&#127769;Dark";
  }
}