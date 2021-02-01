var videoElement = document.querySelector(".video");
var mainElement = document.querySelector(".main");
var skipInput = document.querySelector(".first-input");
var volumeInput = document.querySelector(".second-input");
var imageElement = document.querySelector(".img");
var title = document.querySelector(".title");
var prikolelement = document.querySelector(".prikol");
var skipspan = document.querySelector(".skip");
skipInput.value = 0;
volumeInput.value = 100;

function executing() {
   var fulltime =  videoElement.duration;
   var clearTime = videoElement.currentTime;
      setInterval(() => {
        title.innerHTML = parseFloat(videoElement.currentTime, ).toFixed(2);
        skipInput.value = (videoElement.currentTime * 100) / videoElement.duration;
      }, 1000);

   skipInput.addEventListener("change",function () {
   videoElement.play();

   videoElement.currentTime = (skipInput.value * videoElement.duration) / 100
   })

   volumeInput.addEventListener("change",function () {
       videoElement.volume = volumeInput.value / 100;
       if (volumeInput.value == 100 || volumeInput.value > 80) {
         imageElement.src = "./image-video/last.svg"
       } else if (volumeInput.value == 80 || volumeInput.value > 55) {
         imageElement.src = "./image-video/third.svg"
       } else if (volumeInput.value == 55 || volumeInput.value > 25) {
           imageElement.src = "./image-video/second.svg"
       } else if (volumeInput.value == 14 || volumeInput.value > 0) {
          imageElement.src = "./image-video/first.svg"
       } else {
          imageElement.src = "./image-video/mute.svg"
       }


   })
   var header = document.querySelector(".header");
   videoElement.addEventListener("dblclick",function () {
     this.pause()
     mainElement.classList.remove("hidden");
     prikolelement.classList.add("visible");
     skipspan.classList.add("invisible")
     prikolelement.play()

   })
   videoElement.addEventListener("click",function () {
      // header.classList.toggle("blok")
     this.play();
     mainElement.classList.add("hidden")
    //  prikolelement.classList.remove("visible")
     skipspan.addEventListener("click", function () {
       prikolelement.classList.remove("visible");
       this.classList.remove("invisible");
       prikolelement.pause()
     })

   })
   videoElement.addEventListener("mouseenter",function () {
      header.classList.add("blok")
   })
   videoElement.addEventListener("mouseleave",function () {
     header.classList.remove("blok")
   })

   }
executing()

var photo = document.querySelector(".photo");
photo.addEventListener("click", function () {
    if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
})
videoElement.addEventListener("mouseenter",function () {

})

