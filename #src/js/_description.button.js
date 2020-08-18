const description = document.querySelector(
    ".main-product__description-content"
);
const button = document.querySelector(".main-product__description-toggle");

let addButton = () => {
    const descriptionHeight = description.clientHeight;

    if (descriptionHeight <= 200) {
        return false;
    }

    description.style.maxHeight = "200px";
    description.classList.add(
        "main-product__description-content_state_collapsed"
    );

    button.classList.remove("button_type_link_disabled");
};

let clickButton = () => {
    description.style.maxHeight = "500vh";
    description.classList.remove(
        "main-product__description-content_state_collapsed"
    );
    button.classList.add("button_type_link_disabled");
};

export { button, addButton, clickButton };
