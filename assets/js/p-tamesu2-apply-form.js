/**
 * tamesu2 申込フォーム（モック用）
 *
 * 本番では PHP 側の決済分岐・coupon.exec.php 連携に置き換えてください。
 */
function initTamesu2ApplyForm() {
  var paymentRadios = document.querySelectorAll('input[name="payment"]');
  var creditForm = document.querySelector(".input_area2");
  var couponNone = document.getElementById("coupon_none");
  var couponInputRadio = document.getElementById("input_coupon_radio");
  var couponApplied = document.getElementById("input_coupon");
  var couponCodeInput = document.getElementById("input-coupon-code");
  var couponApplyButton = document.querySelector('[name="coupon_check"]');

  function toggleCreditForm(show) {
    if (!creditForm) return;

    if (window.jQuery) {
      if (show) {
        window.jQuery(creditForm).slideDown(300);
      } else {
        window.jQuery(creditForm).slideUp(200);
      }
      return;
    }

    creditForm.style.display = show ? "" : "none";
  }

  function syncPaymentUI() {
    var selected = document.querySelector('input[name="payment"]:checked');
    if (!selected) return;

    toggleCreditForm(selected.value === "2");
  }

  paymentRadios.forEach(function (radio) {
    radio.addEventListener("change", syncPaymentUI);
  });

  function activateCouponInput() {
    if (couponNone) {
      couponNone.checked = false;
    }

    if (couponInputRadio) {
      couponInputRadio.checked = true;
      if (couponCodeInput && couponCodeInput.value) {
        couponInputRadio.value = couponCodeInput.value;
      }
    }

    if (couponApplied) {
      couponApplied.classList.remove("hidden");
    }
  }

  if (couponCodeInput) {
    couponCodeInput.addEventListener("focus", activateCouponInput);
    couponCodeInput.addEventListener("input", activateCouponInput);
  }

  if (couponApplyButton) {
    couponApplyButton.addEventListener("click", function () {
      var code = couponCodeInput ? couponCodeInput.value.trim() : "";
      if (!code) {
        alert("クーポンコードを入力してください");
        return;
      }

      activateCouponInput();

      if (couponInputRadio) {
        couponInputRadio.value = code;
      }

      var display = document.getElementById("discount_display");
      if (display) {
        display.innerHTML = "入力クーポン<em>100円引き</em>";
      }
    });
  }

  syncPaymentUI();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTamesu2ApplyForm);
} else {
  initTamesu2ApplyForm();
}
