const galleryItem = document.querySelectorAll(".gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 0;

function showLightBox(n) {
    if (n < 0) {
        index = galleryItem.length - 1;
    } else if (n >= galleryItem.length) {
        index = 0;
    }
    let imageLocation = galleryItem[index].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function openLightbox(n) {
    index = n;
    showLightBox(index);
    lightBoxContainer.style.display = "flex";
}

function closeLightbox() {
    lightBoxContainer.style.display = "none";
}

lightBoxPrev.addEventListener("click", () => {
    openLightbox(index - 1);
});

lightBoxNext.addEventListener("click", () => {
    openLightbox(index + 1);
});

galleryItem.forEach((item, i) => {
    item.addEventListener("click", () => {
        openLightbox(i);
    });
});

lightBoxContainer.addEventListener("click", (e) => {
    if (e.target === lightBoxContainer) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    } else if (e.key === "ArrowLeft") {
        openLightbox(index - 1);
    } else if (e.key === "ArrowRight") {
        openLightbox(index + 1);
    }
});