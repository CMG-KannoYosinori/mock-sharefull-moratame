$(document).ready(function() {
  // forEach 文で書く場合
  const tooltipsTriggers = document.querySelectorAll(".js-tooltip-clip-trigger")
  const modalBase = document.querySelector(".js-modal-clip-base")
  const modal = document.querySelector(".js-modal-clip")
  const modalClose = document.querySelector(".js-modal-close")
  tooltipsTriggers.forEach((tooltipsTrigger) => {
    tooltipsTrigger.addEventListener("mouseover", function () {
      const tooltip = this.parentNode.querySelector(".js-tooltip-clip")
      const className = this.childNodes[1].childNodes[1].className.animVal;
      if ( className.match(/clip_off/)) {
        //クリップリストに追加されていない場合の処理
        tooltip.classList.remove("hidden")
        tooltip.classList.add("appear")
        $(this).prev().css("display","block");
      }
    })
    tooltipsTrigger.addEventListener("mouseout", function () {
      const tooltip = this.parentNode.querySelector(".js-tooltip-clip")
      if (tooltip !== null) {
        tooltip.classList.remove("appear")
        tooltip.classList.add("hidden")
        $(this).prev().css("display","none");
      }
    })
    tooltipsTrigger.addEventListener("click", function () {
      const tooltip = this.parentNode.querySelector(".js-tooltip-clip")
      if (tooltip !== null) {
        tooltip.classList.remove("appear")
        tooltip.classList.add("hidden")
        $(this).prev().css("display","none");
      }
    })
  })

  if(modalBase){
    modalBase.addEventListener("click", function () {
      modalBase.classList.remove("appear")
      modalBase.classList.add("hidden")
      modal.classList.remove("appear")
      modal.classList.add("hidden")
    })
  }
  if(modalClose){
    modalClose.addEventListener("click", function () {
      modal.classList.remove("appear")
      modal.classList.add("hidden")
      modalBase.classList.remove("appear")
      modalBase.classList.add("hidden")
    })
  }

  // for 文で書く場合

  // const tooltipsTrigger = document.querySelectorAll(".js-tooltip-clip-trigger")
  // for (let i = 0; i < tooltipsTrigger.length; i++) {
  //   tooltipsTrigger[i].addEventListener("mouseover", function () {
  //     let tooltip = this.parentNode.querySelector(".js-tooltip-clip")
  //     tooltip.style.display = "block"
  //   })
  //   tooltipsTrigger[i].addEventListener("mouseout", function () {
  //     let tooltip = this.parentNode.querySelector(".js-tooltip-clip")
  //     tooltip.style.display = "none"
  //   })
  // }
});
