# mock-sharefull-moratame

## 開発コマンド

- **依存のインストール**
  ```bash
  npm install
  ```

- **ビルド**（`dist/` に出力）
  ```bash
  npm run build
  ```

- **開発サーバー**（プレビュー・ライブリロード）
  ```bash
  npm start
  ```

- **デプロイ**（`dist/` を `gh-pages` ブランチに push）  
  事前にビルドする必要はありません。`npm run deploy` がビルド（GitHub Pages 用の pathPrefix 付き）から push まで一括で実行します。
  ```bash
  npm run deploy
  ```

## 公開後の URL

- **GitHub Pages**: https://cmg-kannoyosinori.github.io/mock-sharefull-moratame/