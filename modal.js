const modalBtn = document.querySelectorAll(".button");

const openModal = () => {
  document.querySelector(".bg-modal").style.display = "flex";
};

modalBtn.forEach(function (e) {
  e.addEventListener("click", openModal);
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
