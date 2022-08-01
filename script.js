document.addEventListener("colorschemechange", (event) => {
  document.documentElement.style.setProperty(
    "color-scheme",
    event.detail.colorScheme
  );
});
