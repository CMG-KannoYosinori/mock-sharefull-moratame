function initItemSetSelect() {
  document.querySelectorAll(".p-item-set-select").forEach(function (area) {
    var select = area.querySelector(".p-item-set-select__select");
    var label = area.querySelector(".p-item-set-select__label");
    if (!select || !label) return;

    function updateLabel() {
      var option = select.options[select.selectedIndex];
      label.textContent = option ? option.textContent : "";
      area.classList.toggle("is-unselected", select.value === "0");
    }

    updateLabel();
    select.addEventListener("change", function () {
      updateLabel();
      select.blur();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initItemSetSelect);
} else {
  initItemSetSelect();
}
