// --------------- S P E C I F I C A T I O N - S E C T I O N ------------

const containerElements = document.querySelectorAll(".specification-container");

containerElements.forEach((container) => {
  const imageElements = container.querySelectorAll("img");
  const buttonElements = container.querySelectorAll("button");

  // Hide all images except the first one initially
  imageElements.forEach((image, index) => (image.style.display = index === 0 ? "block" : "none"));

  buttonElements.forEach((button, index) => {
    button.addEventListener("click", () => {
      imageElements.forEach((image) => (image.style.display = "none"));
      imageElements[index].style.display = "block";
    });
  });
});

// --------------- S P E C I F I C A T I O N - S E C T I O N ------------