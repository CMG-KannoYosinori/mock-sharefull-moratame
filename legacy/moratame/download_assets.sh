#!/bin/bash
# legacy/moratame で参照している外部アセットを読み込みパスに合わせて保存する
set -e
BASE="$(cd "$(dirname "$0")" && pwd)"
STG="${BASE}/../stg"
mkdir -p "$BASE"/{s/css,s/js,s/Scripts/smartbanner,s/Scripts/mobile,js,css,plugins/jquery.bxslider,plugins/Remodal-1.1.1/dist,img,images/banner,img2014/common,images/common/2014/s,images/improvement/9255/images,s/cmn}

# URLをダウンロードしてパスに保存（クエリは除去）
download() {
  local url="$1"
  local path="$2"
  if [[ "$url" == //* ]]; then url="https:$url"; fi
  local dir="${path%/*}"
  mkdir -p "$BASE/$dir"
  local file="$BASE/$path"
  if [[ -f "$file" ]]; then return 0; fi
  echo "Download: $url -> $path"
  curl -sfL -o "$file" "$url" 2>/dev/null || true
}

# code.jquery.com
download "https://code.jquery.com/jquery-1.12.4.min.js" "js/jquery-1.12.4.min.js"
download "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" "js/jquery-ui.min.js"

# www.moratame.net (protocol-relative → https)、クエリは除去して1回ずつ
download "https://www.moratame.net/s/Scripts/smartbanner/smartbanner.min.css" "s/Scripts/smartbanner/smartbanner.min.css"
download "https://www.moratame.net/s/Scripts/smartbanner/smartbanner.min.js" "s/Scripts/smartbanner/smartbanner.min.js"
download "https://www.moratame.net/s/Scripts/smoothScroll.js" "s/Scripts/smoothScroll.js"
download "https://www.moratame.net/js/jquery.heightLine.js" "js/jquery.heightLine.js"
download "https://www.moratame.net/plugins/jquery.bxslider/jquery.bxslider.min.js" "plugins/jquery.bxslider/jquery.bxslider.min.js"
download "https://www.moratame.net/s/js/call_the_bxSlider.js" "s/js/call_the_bxSlider.js"
download "https://www.moratame.net/css/bootstrap.v3.3.7--scope.css" "css/bootstrap.v3.3.7--scope.css"
download "https://www.moratame.net/js/clips.js" "js/clips.js"
download "https://www.moratame.net/js/helper-sp.js" "js/helper-sp.js"
download "https://www.moratame.net/plugins/jquery.bxslider/jquery.bxslider.css" "plugins/jquery.bxslider/jquery.bxslider.css"
download "https://www.moratame.net/s/css/html5-doctor-reset-stylesheet.min.css" "s/css/html5-doctor-reset-stylesheet.min.css"
download "https://www.moratame.net/s/css/common.css" "s/css/common.css"
download "https://www.moratame.net/s/css/style.3078.css" "s/css/style.3078.css"
download "https://www.moratame.net/s/css/style--sp.css" "s/css/style--sp.css"
download "https://www.moratame.net/s/css/style.moratamelist-tame--sp.css" "s/css/style.moratamelist-tame--sp.css"
download "https://www.moratame.net/s/css/tooltip.css" "s/css/tooltip.css"
download "https://www.moratame.net/s/css/pickup.css" "s/css/pickup.css"
download "https://www.moratame.net/plugins/Remodal-1.1.1/dist/remodal.css" "plugins/Remodal-1.1.1/dist/remodal.css"
download "https://www.moratame.net/plugins/Remodal-1.1.1/dist/remodal-default-theme.css" "plugins/Remodal-1.1.1/dist/remodal-default-theme.css"
download "https://www.moratame.net/plugins/Remodal-1.1.1/dist/remodal-user.css" "plugins/Remodal-1.1.1/dist/remodal-user.css"
download "https://www.moratame.net/plugins/Remodal-1.1.1/dist/remodal.min.js" "plugins/Remodal-1.1.1/dist/remodal.min.js"
download "https://www.moratame.net/css/style--common-sp-and-pc.css" "css/style--common-sp-and-pc.css"
download "https://www.moratame.net/css/style--common-sp-and-pc-2.css" "css/style--common-sp-and-pc-2.css"
download "https://www.moratame.net/css/mamahalo-pickup-items.css" "css/mamahalo-pickup-items.css"
download "https://www.moratame.net/s/js/inputimg.js" "s/js/inputimg.js"
download "https://www.moratame.net/s/js/jquery.cycle.all.js" "s/js/jquery.cycle.all.js"
download "https://www.moratame.net/s/js/pagetop.js" "s/js/pagetop.js"
download "https://www.moratame.net/css/p9255-common--sp.css" "css/p9255-common--sp.css"
download "https://www.moratame.net/css/p9255-top--sp.css" "css/p9255-top--sp.css"
download "https://www.moratame.net/s/js/moratame_s_common.js" "s/js/moratame_s_common.js"
download "https://www.moratame.net/s/js/p9255-scripts.js" "s/js/p9255-scripts.js"
download "https://www.moratame.net/s/css/member-registration.css" "s/css/member-registration.css"
download "https://www.moratame.net/s/css/colorbox.css" "s/css/colorbox.css"
download "https://www.moratame.net/s/js/jquery.colorbox.js" "s/js/jquery.colorbox.js"
download "https://www.moratame.net/s/js/hideShowPassword.js" "s/js/hideShowPassword.js"
download "https://www.moratame.net/s/js/jqm/jquery.mobile-1.3.1.min.js" "s/js/jqm/jquery.mobile-1.3.1.min.js"
download "https://www.moratame.net/s/js/jqm/jquery.mobile-1.3.1.min.css" "s/js/jqm/jquery.mobile-1.3.1.min.css"
download "https://www.moratame.net/s/Scripts/mobile/jquery.mobile.custom.js" "s/Scripts/mobile/jquery.mobile.custom.js"
download "https://www.moratame.net/s/css/jquery.mobile-1.3.1-user.css" "s/css/jquery.mobile-1.3.1-user.css"
download "https://www.moratame.net/js/smsauthinput.js" "js/smsauthinput.js"
download "https://www.moratame.net/js/smsauthconfirm.js" "js/smsauthconfirm.js"

# stg.moratame.net / www.moratame.net (same path)
download "https://stg.moratame.net/s/css/html5-doctor-reset-stylesheet.min.css" "s/css/html5-doctor-reset-stylesheet.min.css"
download "https://stg.moratame.net/s/css/member-registration.css" "s/css/member-registration.css"
download "https://stg.moratame.net/img/milestone-2.png" "img/milestone-2.png"
download "https://www.moratame.net/img/milestone-1.png" "img/milestone-1.png"
download "https://stg.moratame.net/images/banner/banner_sms_auth_sp.png" "images/banner/banner_sms_auth_sp.png"

# image.moratame.net
download "https://image.moratame.net/s/cmn/btn_01.png" "s/cmn/btn_01.png"
download "https://image.moratame.net/img2014/common/pmark_s.gif" "img2014/common/pmark_s.gif"
download "https://image.moratame.net/images/banner/SDGs_SP.png" "images/banner/SDGs_SP.png"
download "https://image.moratame.net/images/banner/pickup-bnr--premium.png" "images/banner/pickup-bnr--premium.png"
download "https://image.moratame.net/images/banner/robamimi-mt-slide-sp.png" "images/banner/robamimi-mt-slide-sp.png"
download "https://image.moratame.net/images/banner/pickup-bnr--family.20190614.png" "images/banner/pickup-bnr--family.20190614.png"
download "https://image.moratame.net/images/banner/anti-fraud_sp-side.jpg" "images/banner/anti-fraud_sp-side.jpg"
download "https://image.moratame.net/images/banner/pickup-bnr--stamp.png" "images/banner/pickup-bnr--stamp.png"
download "https://image.moratame.net/img2014/common/fb01.png" "img2014/common/fb01.png"
download "https://image.moratame.net/img2014/common/twitter01.png" "img2014/common/twitter01.png"
download "https://image.moratame.net/img2014/common/instagram.png" "img2014/common/instagram.png"
download "https://image.moratame.net/img2014/common/line.png" "img2014/common/line.png"
download "https://image.moratame.net/images/common/2014/s/icon_close02.png" "images/common/2014/s/icon_close02.png"

# renewal-image-stg.moratame.net
download "https://renewal-image-stg.moratame.net/img2014/common/moratame-appli.png" "img2014/common/moratame-appli.png"
download "https://renewal-image-stg.moratame.net/images/improvement/9255/images/9255-sticky-button.png" "images/improvement/9255/images/9255-sticky-button.png"

# legacy/stg からコピー（ダウンロードで取得できなかった場合のフォールバック）
copy_from_stg() { local src="$1"; local dst="$2"; if [[ -f "$STG/$src" ]] && [[ ! -s "$BASE/$dst" ]]; then mkdir -p "$BASE/${dst%/*}"; cp "$STG/$src" "$BASE/$dst"; echo "Copy from stg: $src -> $dst"; fi; }
copy_from_stg "css/style--sp.css" "s/css/style--sp.css"
copy_from_stg "css/bootstrap.v3.3.7--scope.css" "css/bootstrap.v3.3.7--scope.css"
copy_from_stg "css/member-registration.css" "s/css/member-registration.css"
copy_from_stg "css/style--common-sp-and-pc.css" "css/style--common-sp-and-pc.css"
copy_from_stg "plugins/bx-slider/jquery.bxslider.min.js" "plugins/jquery.bxslider/jquery.bxslider.min.js"
copy_from_stg "plugins/bx-slider/jquery.bxslider.css" "plugins/jquery.bxslider/jquery.bxslider.css"

# style--common-sp-and-pc-2.css が stg に無い場合は空で作成
for f in css/style--common-sp-and-pc-2.css css/mamahalo-pickup-items.css s/css/style.3078.css s/css/style.moratamelist-tame--sp.css s/css/common.css s/css/tooltip.css s/css/pickup.css s/css/html5-doctor-reset-stylesheet.min.css s/css/jquery.mobile-1.3.1-user.css s/css/colorbox.css; do
  if [[ ! -f "$BASE/$f" ]] || [[ ! -s "$BASE/$f" ]]; then
    mkdir -p "$BASE/${f%/*}"
    touch "$BASE/$f"
  fi
done

echo "Done."
