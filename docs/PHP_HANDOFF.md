# PHP実装への申し送り（838b19c 以降）

対象コミットは `838b19c` から `d68662d` まで（2026-09-24〜25）。スタイルの正は `src/assets/css/style.css`。確認画面はトップ（`src/index.html`）と、ためせる詳細（`src/detail/tamesu.html` / `tamesu--1.html` / `tamesu--2.html`）。商品情報のマークアップは `src/_includes/item-info.liquid`。

本番でテンプレートと CSS を合わせるのは「対応が必要」の項目。それ以外はモック側の整理で、出力や本番の挙動は変えていない。

## 対応が必要

### 1. ためせるカードの「残り N」を価格表示に変える

トップの「少額でためせる」カードだけ。`p.count`（残り数）をやめ、税込価格と参考価格を出す。バッジ（残りわずか / オススメ / リピート可）はそのまま。

```html
<p class="p-card__price">1,540（税込）</p>
<p class="p-card__reference">参考価格　オープン価格</p>
```

- 金額は3桁区切り。括弧は全角 `（税込）`。
- 「参考価格」と「オープン価格」のあいだは全角スペース。
- 価格: 16px / font-weight 600 / `#F76B1F`
- 参考価格: 12px / font-weight 400

「もらえる」カードの提供数・応募締切は変えない。

### 2. メーカー名

`.p-card__detail` の先頭の段落に `p-card__maker` を足す。1行省略は既存の `u-text-ellipsis` のまま。PHP側で `…` を付けて切らない。長い名前は CSS が末尾を省略する。

```html
<p class="p-card__maker u-text-ellipsis">メーカー名</p>
```

- 14px / font-weight 600
- ためせる・もらえるの両方

### 3. 商品名

商品名の段落を `p-card__name` にする。1行でも2行でも同じ高さ（2行分）を確保し、2行目の末尾を省略する。中の `<a>` には `u-text-ellipsis` を付けない（付けると2行クランプが効かない）。

```html
<p class="p-card__name">
  <a href="...">商品名</a>
</p>
```

- 14px / font-weight 500 / line-height 1.5
- `-webkit-line-clamp: 2`
- 高さは `calc(1.5em * 2)`（42px）で固定
- ためせる・もらえるの両方。もらえるで `<a>` が無いカードも、段落側に `p-card__name` を付ける

### 4. カードの列数

`.l-card-items` と `.l-card-items--tame` は、1024px 未満では2列のまま。375px で3列、768px で4列にしていた指定は外す。1024px 以上は従来どおり（`.l-card-items` は4列、`.l-card-items--tame` は5列）。

1024px 未満は `max-width: 409px` で中央寄せ。1024px 以上は `max-width` を外す。

`.l-card-items--mora` は変えていない（768px 未満1列、以上2列）。

### 5. 「※配送関連費とは」の文字色

ためせる詳細の配送関連費にある説明リンク。`t-text__ex` の灰色（`#666`）を上書きして `#0085C3` にする。サイズは `t-text__ex` の 10px のまま。

```html
<a href="#" class="p-item-info__link t-text__ex" target="_blank"> ※配送関連費とは </a>
```

`:link` / `:visited` / `:hover` / `:active` まで `#0085C3`。ホバー時の全体指定 `a:hover { color: #393 }` に負けないよう、`a.p-item-info__link` で指定する。

### 6. 配送関連費は数字だけを差し替える

表示の「円(税込)」は固定。地域で変わるのは金額の数字だけ。隠し select の option には数字だけを入れる（`455円(税込)` のように単位を付けない）。

```html
<p id="area_price" class="cost-em"><span class="p-item-info__amount"></span>円(税込)</p>
<select name="area_price" id="area_price_select" class="hidden">
  <option value="">1,100</option>
  <option value="1">546</option>
</select>
```

地域変更時は、選ばれた option のテキストを span に入れる。

```javascript
$("#area_price .p-item-info__amount").text(selected_price);
```

- 数字: 28px / font-weight 600。色は親の `.cost-em`（`#F76B1F`）
- 「円(税込)」: 括弧は半角。文字サイズは表のまま（768px 未満 12px、以上 14px）
- 3桁区切りが必要な金額は、option 側に `1,100` のように入れておく

### 7. 参考価格は配送関連費のバルーンにする

表の「参考価格」行（税別金額と「※参考価格とは」）は出さない。配送関連費の直下に、ベージュのバルーンで税込の参考価格を出す。同じ表にあるオレンジのバルーン（「この費用だけで試せます！」など）は変えない。

```html
<div class="c-balloon p-item-info__reference">参考価格 <span class="p-item-info__reference-price">3,456円（税込）</span></div>
```

- バルーン背景: `#E8E5D6`。吹き出しの先端（`::after`）も同じ色
- 文字色: `#333`（`.c-balloon` の白文字を上書きする）
- バルーン: 12px / padding `5px 8px 4px`
- 「3,456円（税込）」だけ font-weight 700。括弧は全角 `（税込）`
- 金額はダミー。本番の参考価格をこの位置に出す

## 対応不要

### Goodアイコンのパス（838b19c）

`.good-btn--more` の背景画像を `../images/ico_good01.png`・`ico_good02.png` から `../img/` に変更した。本番の配置にモックを合わせたもの。本番がすでに `img` を参照していれば変更不要。

### セクション見出し（d1e4d90）

`.c-section-heading` の `display` を `flex` から `block` に戻した。本番と同じ縦積みにするため。本番がすでに `block` なら変更不要。

### ためせる商品情報の共通化（8952298）

`tamesu.html` / `tamesu--1.html` / `tamesu--2.html` の `.itemInfo` を `src/_includes/item-info.liquid` に抜き出した。Eleventy の include なので、PHP側で同じ分割は不要。中身の表示仕様は上記 5〜7。`cmt.html` / `cmt1.html` の商品情報テーブルは対象外。
