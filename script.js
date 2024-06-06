"use strict";

const backToGalleryBtn = document.querySelector(".back--to--gallery");
const box = document.querySelector(".box");
const images = document.querySelectorAll(".images");
const mainPhoto = document.querySelector(".main--photo");
const gallery = document.querySelector(".gallery");
const previousPhoto = document.querySelector(".previous--photo");
const nextPhoto = document.querySelector(".next--photo");
const photoPaths = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg"
]

let currentPhotoIndex = 0;

backToGalleryBtn.addEventListener("click", function (){
    if(box.style.display === "none" || box.style.display === " ") {
        box.style.display = "block";
    }
    else {
        box.style.display = "none";
        gallery.style.gap = "10px";
        gallery.style.backgroundColor = "white";
        images.forEach(image => {
            image.style.opacity = "1";
        })
    }
});

images.forEach(image => {
    image.addEventListener("click", function (){
        images.forEach(el => {
            el.style.opacity = "0.1";
        })
        switch (image.id){
            case "image1":
                mainPhoto.src = "images/image1.jpg"
            break;
            case "image2":
                mainPhoto.src = "images/image2.jpg"
            break;
            case "image3":
                mainPhoto.src = "images/image3.jpg"
            break;
            case "image4":
                mainPhoto.src = "images/image4.jpg"
            break;
            case "image5":
                mainPhoto.src = "images/image5.jpg"
            break;
            case "image6":
                mainPhoto.src = "images/image6.jpg"
            break;
            default:
                console.log("Nie mozna znalesc zdjecia");

        }
        box.style.display = "block"
        gallery.style.gap = "0";
        gallery.style.backgroundColor = "black";

    });
})
previousPhoto.addEventListener("click", function (){
    currentPhotoIndex = (currentPhotoIndex - 1 + photoPaths.length) % photoPaths.length;
    mainPhoto.src = photoPaths[currentPhotoIndex];
});

nextPhoto.addEventListener("click", function () {
   currentPhotoIndex = (currentPhotoIndex + 1) % photoPaths.length;
   console.log(currentPhotoIndex);
   mainPhoto.src = photoPaths[currentPhotoIndex]
});
