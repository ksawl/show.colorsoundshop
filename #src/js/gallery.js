lightbox.option({
    albumLabel: "Картинка %1 из %2",
    wrapAround: true,
});

document.querySelector(".lightbox-desk__open").addEventListener("click", () => {
    document.querySelector(".lightbox-desk a:first-child").click();
});

document
    .querySelector(".lightbox-mob__open")
    .addEventListener("click", () => {
        document.querySelector(".lightbox-mob a:first-child").click();
    });
