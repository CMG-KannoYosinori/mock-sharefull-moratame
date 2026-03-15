# コンポーネント

## レイアウト

- [.l-container](http://localhost:8080/index.html)
  - max-width: 960px;

## ボタン

- [ためせる商品一覧はこちら](http://localhost:8080/detail/index.html)
- [もらえる商品一覧はこちら](http://localhost:8080/detail/index.html)
- [申し込む](http://localhost:8080/detail/tamesu.html)
  [クチコミを再投稿する](http://localhost:8080/detail/tamesu.html)
- [この商品についてのクチコミをもっと見る](http://localhost:8080/detail/tamesu.html)
- [申し込む](http://localhost:8080/detail/morau.html)
- [入力内容確認へ](http://localhost:8080/signup01.html)
- [SMS認証を行う](http://localhost:8080/signup03.html)
- [内容を修正する](http://localhost:8080/signup03.html)

### .c-button（共通スタイル: `assets/css/components.css`）

| クラス | 用途 |
|--------|------|
| `.c-button` | ベース。幅100%（max-width: 640px）、高さ40px |
| `.c-button--confirm` / `.c-button--auth-tel` | 青背景。「入力内容確認へ」「SMS認証を行う」「認証」「SMS認証コードを送信」など |
| `.c-button--correct` | 白背景・青枠。「内容を修正する」「戻る」 |
| `.c-button--orange` | オレンジ背景。「申し込む」 |
| `.c-button--review` | 黄背景。「クチコミを再投稿する」など |

## フォーム

- [input radio](http://localhost:8080/signup01.html)
- [select](http://localhost:8080/signup01.html)
- [input text](http://localhost:8080/signup01.html)

### 会員登録・SMS認証フォーム（`assets/css/member-registration.css`）

signup01・SMS認証画面で共通のフォームUI。セクションで `.new-signup-input` を使い、各項目を `select-area` でラップする。

| クラス・構造 | 説明 |
|--------------|------|
| `section.new-signup-input` | フォーム全体のラップ。見出しは `h1.heading-ttl` |
| `div.select-area` | 1項目ブロック（例: `select-tel`, `select-sex`, `select-email`） |
| `div.form-ttl` | 項目ラベル行。背景 #f3f3f3 |
| `h2.element-ttl` | 項目名。必須のときは `span.required` を並べる |
| `div.input-area` | 入力エリア。`ul.input-menu.{tel|email|password|nickname 等}` > `li` > `input` |
| `ul.radio-menu.sexs` | ラジオボタン（性別・配信方法など）。`li` > `input` + `label` |
| `div.submit-area` | 送信ボタンエリア。`button.c-button` を配置 |
| `p.side-text` | 補足・説明文 |
| `div.error` | エラーメッセージ（赤文字） |

**参照ページ**: [会員情報入力 signup01](http://localhost:8080/contents/signup01.html)、[SMS認証 電話番号入力](http://localhost:8080/login/sms_auth_input.html)、[SMS認証コード入力](http://localhost:8080/login/sms_auth_confirm.html)

## フッター

## ページトップへ

- フッターの「ページトップへ」リンクの飛び先。各ページの `<body id="pageTop">` を指定する。
