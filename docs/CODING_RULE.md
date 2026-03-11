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
    │   ├── components/       # UI部品（ボタン、ヘッダー、ページトップへなど）
    │   │   ├── page-top-scroll.js
    │   │   └── ...
    │   ├── utils/            # 汎用的な関数（計算、フォーマットなど）
    │   │   └── ...
    │   ├── services/         # API通信などの外部連携
    │   │   └── ...
    │   └── main.js           # エントリーポイント（全体をまとめる場所）
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

   • **JS モジュール構成**（`assets/js/` 配下）:
     - **components/** … UI部品（ボタン、ヘッダー、ページトップへなど）。各ファイルは ES Module として export し、`main.js` から import して利用する。
     - **utils/** … 汎用的な関数（計算、フォーマットなど）。
     - **services/** … API通信などの外部連携。
     - **main.js** … エントリーポイント。components / utils / services を import し、初期化処理などをまとめて実行する。

   • **画像**: `assets/images/` に配置する。

4. 読み込み順序（HTML）
   1. jQuery（依存する場合）
   2. 各種外部ライブラリの JS / CSS
   3. 自作の `style.css` / `main.js`

5. HTML コメントの形式
   - **ブロックの開始**にはコメントを書かない。
   - **ブロックの終了**にのみ、`<!-- /ブロック名 -->` の形式でコメントを書く。
   - スラッシュはブロック名の直前に1つ。例: `<!-- /breadCrumbs -->`、`<!-- /contents -->`
   - ブロック名は、対応する要素のクラス名・id・役割に合わせて簡潔に付ける。
