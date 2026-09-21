const dialog = document.querySelector(".image-dialog");
if (dialog) {
  let trigger;
  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      trigger = button;
      const image = dialog.querySelector("img");
      image.src = button.dataset.lightboxSrc;
      image.alt = button.querySelector("img").alt;
      dialog.querySelector("figcaption").textContent = button.dataset.caption;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    trigger?.focus({ preventScroll: true });
  });
}
