# 3d-lifeform-landing — GitHub Pages (Next.js Static Export)

Этот проект настроен на статический экспорт Next.js и публикацию в GitHub Pages.

## Настройки проекта

В конфигурации включён статический экспорт и basePath для репозитория:

- [`next.config.js`](next.config.js:1)
  - `output: "export"`
  - `basePath: "/3d-lifeform-landing"`
  - `assetPrefix: "/3d-lifeform-landing/"`

При изменении имени репозитория обновите `basePath` и `assetPrefix`.

## Локальная сборка (при наличии npm/yarn/pnpm)

```bash
npm install
npm run build
```

После сборки статические файлы будут в папке `out/`.

## Публикация в GitHub Pages через Actions

Создайте workflow файл `.github/workflows/deploy.yml` (пример ниже) и убедитесь, что в настройках репозитория включён Pages: **Settings → Pages → Build and deployment → GitHub Actions**.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build (static export)
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Важно

- В Next.js 14 с `output: "export"` командой `next build` генерируется папка `out/`.
- Для корректных ссылок на GitHub Pages обязательно держать `basePath` и `assetPrefix` синхронизированными с именем репозитория.
