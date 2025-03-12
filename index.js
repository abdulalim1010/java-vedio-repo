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
`;https://i.i
    
    categoryContainer.append(categoryDiv);
  }
}

const displayvedios = (videos) => {

  const videoContainer = document.getElementById("video-container");
  videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
     

      <div class=" gap-5 ">
        <figure class="relative">
          <img  class" w-full  h-40 " src="${video.thumbnail}" alt="Shoes" />
          <span class="absolute bottom-1 right-2 text-white bg-slate-800 py-2 px-4 font-medium rounded">3hrs 56 min
            ago</span>
        </figure>
        <div class="flex gap-5 px-0 py-5">
          <div class=" ">
            <div class="avatar">
              <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

          </div>
          <div>
            <h1 class="text-sm font-semibold ">Building a Winning UX Strategy Using the Kano Model </h1>
            <p class="texe-sm text-gray-400 flex">Awlad Hossain <img class="w-5 h-5"
                src="https://img.icons8.com/?size=100&id=11221&format=png" alt=""></p>
            <p class="m text-gray-400">91K views</p>
          </div>
        </div>
      </div>


   `;
    videoContainer.append(videoCard);
  });
};
loadCtagories()
loeadVideos()