/**
 * 配送に関する注意事項などのアコーディオン開閉（jQuery 依存なし）
 * - `.js-t-accordion` クリックで直後の要素を表示/非表示
 * - `t-arrow_down` / `t-arrow_up` を切り替え
 * - `.is-open` で CSS トランジションによるスムース開閉
 */
function initItemDetailAccordion() {
  document.querySelectorAll(".js-t-accordion").forEach(function (trigger) {
    var content = trigger.nextElementSibling;
    if (!content) return;

    // 初期の display（インライン）を読み取り、CSS トランジション用に除去
    var initiallyOpen = getComputedStyle(content).display !== "none";
    content.style.removeProperty("display");
    content.classList.toggle("is-open", initiallyOpen);

    trigger.addEventListener("click", function () {
      content.classList.toggle("is-open");
      trigger.classList.toggle("t-arrow_down");
      trigger.classList.toggle("t-arrow_up");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initItemDetailAccordion);
} else {
  initItemDetailAccordion();
}
