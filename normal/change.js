// Written by ZanuZoss :)

let canClick = true;

// Preload GIFs
const gifs = [
  "assets/normal/light/blinking.gif",
  "assets/normal/light/catching feather.gif",
  "assets/normal/light/playtime.gif",
  "assets/normal/light/smelling.gif",
  "assets/normal/light/stretching.gif"
];

const loadedGifs = [];

gifs.forEach((gifUrl) => {
  const img = new Image();
  img.src = gifUrl;
  img.onload = () => {
    loadedGifs.push(img);
    
    // Check if all GIFs are preloaded
    if (loadedGifs.length === gifs.length) {
      
      // After checking if all GIFs are preloaded, add Click Function and randomize GIFs
      $(".miuicat").click(function() {
        if (canClick) {
          canClick = false;
          const numVal = Math.floor(Math.random() * 5);
          const gif = loadedGifs[numVal];
          $("#miuicat").attr("src", gif.src);

          // Set timeout to block Click Function for 3 seconds
          setTimeout(() => {
            canClick = true;
          }, 3000);
        }
      });
    }
  };
});
