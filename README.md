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

- **Live Server で静的 HTML を確認する場合**  
  このプロジェクトの `.vscode/settings.json` で `liveServer.settings.root` を `/dist` にしています。プロジェクトを開いた状態で Live Server を起動すると、サーバールートが `dist` になり、`http://127.0.0.1:5500/` でアセットも正しく読み込まれます（事前に `npm run build` を実行してください）。

- **デプロイ**（`dist/` を `gh-pages` ブランチに push）  
  事前にビルドする必要はありません。`npm run deploy` がビルド（GitHub Pages 用の pathPrefix 付き）から push まで一括で実行します。
  ```bash
  npm run deploy
  ```

## 公開後の URL

- **GitHub Pages**: https://cmg-kannoyosinori.github.io/mock-sharefull-moratame/