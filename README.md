# My Blog

Astro 기반 정적 블로그입니다. 마크다운으로 글을 작성하고, GitHub Pages에 호스팅할 수 있습니다.

## 기능

- 정적 페이지 빌드 (GitHub Pages 호스팅)
- 마크다운 글 작성 및 렌더링
- Home, About, Blog 메뉴
- 월별 포스트 관리 (`src/content/blog/YYYY/MM/`)
- 태그 및 카테고리 분류

## 시작하기

```bash
npm install
npm run dev
```

## 새 글 작성

`src/content/blog/YYYY/MM/제목.md` 경로에 마크다운 파일을 생성하세요.

```yaml
---
title: "포스트 제목"
description: "요약"
pubDate: 2025-03-11
tags: ["태그1", "태그2"]
category: "카테고리명"
---

본문 내용...
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## GitHub Pages 배포

1. 저장소의 **Settings > Pages**에서 Source를 **GitHub Actions**로 설정
2. `main` 브랜치에 push하면 자동으로 배포됩니다.

저장소 이름이 `28.myBlog`가 아닌 경우, `astro.config.mjs`의 `base` 값을 저장소 이름에 맞게 수정하세요.
