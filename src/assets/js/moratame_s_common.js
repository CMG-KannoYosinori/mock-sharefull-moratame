/* quickLinkSiteMap
------------------------------------------- */
/* マイページプルダウンメニュー */
{
  var hb_mmLclTgr_switch_flg = false
  var flexible_container_height = $(".js-flexible-container").height()
  $("#hb_mmLclTgr").click(function () {
    if (hb_mmLclTgr_switch_flg) {
      $("#hb_mmLclMnuInr").css("display", "none")
      hb_mmLclTgr_switch_flg = false
      $(".js-flexible-container").css(
        "minHeight",
        flexible_container_height + "px"
      )
    } else {
      $("#hb_mmLclMnuInr").css("display", "block")
      var hb_mmLclMnuInr_lists_height = $(".js-hb_mmLclMnuInr_lists").height()
      $(".js-flexible-container").css(
        "minHeight",
        hb_mmLclMnuInr_lists_height + 20 + "px"
      )
      hb_mmLclTgr_switch_flg = true
    }
  })
}
/* /マイページプルダウンメニュー */
/* /quickLinkSiteMap
------------------------------------------- */
// attentionAccordion
function openAttention(num) {
  $("#attentionContainer" + num).slideToggle()
  $("#attentionHeader" + num + " .icon").toggleClass("open")
}
// /attentionAccordion
//ページ内スクロール
$(".toBtnAnchor").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#btnAnchor").offset().top,
    },
    "normal"
  )
  return false
})
//ページ上部へ戻る
$(".toPageTop").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    "normal"
  )
  return false
})
// /side_internal_nav
// first visitor modal
$(document).ready(function () {
  $(".modalClose").click(function () {
    $(".firstV-modal,#overlay02").fadeOut("slow")
  })
  $("#overlay02").click(function () {
    $(".firstV-modal,#overlay02").fadeOut("slow")
  })
})
// 商品ページコメント一覧、もっと読む
$(function () {
  $(".content-more").hide()
  $(".more-btn").css("color", "blue")
  $(".more-btn").click(function () {
    $(this).next().slideDown("slow")
    $(this).hide()
  })
})
// コメント投稿ページ「商品情報を見る」のトグル。
$(function () {
  $("#accordion-item_table .block_inner").hide()
  $("#accordion-item_table .btn-2").on("click", function () {
    $("#accordion-item_table .block_inner").stop(true, true).slideToggle("slow")
  })
})
// コメント投稿ページ「クチコミ投稿する前に」のトグル。
$(function () {
  $(".before_reviews-attention").hide()
  $(".before_reviews").on("click", function () {
    $(".before_reviews-attention").stop(true, true).slideToggle("slow")
  })
})
// quickBtn タメす商品詳細
if (document.getElementById("btnAnchor") != null) {
  $(function () {
    var btnAnchor = $("#btnAnchor").offset().top - $(window).height() + 112
    //scrollTop が btnAnchor より小さく、かつ100px 以上なら scrollBtn を表示
    $(window).scroll(function () {
      if ($(this).scrollTop() < btnAnchor && $(this).scrollTop() > 100) {
        $("#scrollBtn").stop().animate(
          {
            bottom: "0px",
          },
          200
        )
      } else {
        $("#scrollBtn").stop().animate(
          {
            bottom: "-255px",
          },
          400
        )
      }
    })
  })
}
// 今日のモラタメ
$(function () {
  var showFlag = false
  var todaysMoratame = $(".p-todays-moratame")
  todaysMoratame.css("bottom", "0px")
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      if (showFlag == false) {
        showFlag = true
        todaysMoratame.stop().animate(
          {
            bottom: "-" + todaysMoratame.height() + "px",
          },
          200
        )
        $(".l-container__mask").fadeOut("slow")
        $(".p-todays-moratame__block").slideUp()
      }
    } else {
      if (showFlag) {
        showFlag = false
        todaysMoratame.stop().animate(
          {
            bottom: "-0px",
          },
          200
        )
      }
    }
  })
  var switch_flg = false //---最初はoffの状態
  $(".p-todays-moratame__heading").on("click", function () {
    if (switch_flg) {
      $(".l-container__mask").fadeOut()
      $(".p-todays-moratame__block").slideUp("fast")
      $(".fa-chevron-circle-down")
        .removeClass("fa-chevron-circle-down")
        .addClass("fa-chevron-circle-up")
      switch_flg = false //---trueの時はfalseに
    } else {
      $(".l-container__mask").fadeIn()
      $(".p-todays-moratame__block").slideDown("fast")
      switch_flg = true //---falseの時はtrueに
      $(".fa-chevron-circle-up")
        .removeClass("fa-chevron-circle-up")
        .addClass("fa-chevron-circle-down")
    }
  })
  $(".l-container__mask").on("click", function () {
    $(".l-container__mask").fadeOut()
    $(".p-todays-moratame__block").slideUp("fast")
  })
})
// 今日のモラタメ
