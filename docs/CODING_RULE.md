プロジェクトディレクトリ構成ルール

1. 基本方針
   プロジェクトで使用する全ての静的リソース（CSS, JS, 画像など）は、原則として `assets/` ディレクトリ配下に集約する。

2. ディレクトリ構造

```shell
project-root/
├── index.html
└── assets/
    ├── css/
    │   └── style.css          (自作スタイル)
    ├── js/
    │   └── main.js           (自作スクリプト)
    ├── images/               (画像ファイル)
    └── vendor/               (外部ライブラリ：単体JS/CSS or JS+CSSセット)
          ├── [library-name]/
          │     └── library.min.js (jQueryなどの単体外部JSファイル)
          ├── [library-name]/
          │     └── library.css (単体外部CSSファイル)
          └── [library-name]/    (例: swiper/ など)
            ├── library.min.js
            └── library.min.css

```

3. 配置ルール
   • **外部ライブラリ**: すべて `assets/vendor/[ライブラリ名]/` に配置する。
     - 単体 JS（jQuery など）: `assets/vendor/[library-name]/library.min.js`
     - 単体 CSS: `assets/vendor/[library-name]/library.css`
     - JS と CSS がセットのライブラリ（Swiper など）: 同一ディレクトリに `library.min.js` と `library.min.css` を配置

   • **自作ファイル**: `assets/css/style.css` および `assets/js/main.js` に配置する。

   • **画像**: `assets/images/` に配置する。

4. 読み込み順序（HTML）
   1. jQuery（依存する場合）
   2. 各種外部ライブラリの JS / CSS
   3. 自作の `style.css` / `main.js`
