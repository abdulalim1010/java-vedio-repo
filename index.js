console.log("index is connected")
function loadCtagories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
  .then(data=>displaycategories(data.categories))
  
}
function loeadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayvedios(data.videos))
  



}





function displaycategories(categories) {
  const categoryContainer = document.getElementById("category-container")
  for (let cat of categories) {
    //console.log(cat)
    const categoryDiv = document.createElement("div")
    categoryDiv.innerHTML = `<button class="btn btn-sm hover: bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`;
    
    categoryContainer.append(categoryDiv);
  }
}

const displayvedios = (videos) => {

  const videoContainer = document.getElementById("video-container");
  videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>    `;
    videoContainer.append(videoCard);
  });
};
loadCtagories()
loeadVideos()