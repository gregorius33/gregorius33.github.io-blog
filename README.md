# My Blog

Astro 기반 정적 블로그입니다. 마크다운으로 글을 작성하고, GitHub Pages에 호스팅됩니다.

- **배포 URL:** https://gregorius33.github.io/MyBlog/
- **저장소:** https://github.com/gregorius33/MyBlog

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Astro 4.x |
| 스타일링 | Tailwind CSS |
| 마크다운 | @tailwindcss/typography |
| 언어 | TypeScript |
| 배포 | GitHub Pages + GitHub Actions |

## 기능

- 정적 페이지 빌드 (GitHub Pages 호스팅)
- 마크다운 글 작성 및 렌더링
- Home, About, Blog 메뉴
- 월별 포스트 관리 (`src/content/blog/YYYY/MM/`)
- 태그 및 카테고리 분류
- 사이트 설정 파일로 타이틀, 문구, 이미지 등 일괄 관리

## 프로젝트 구조

```
myBlog/
├── src/
│   ├── components/       # Header, Footer, BlogCard
│   ├── content/blog/     # 마크다운 포스트 (YYYY/MM/제목.md)
│   ├── layouts/          # Layout.astro
│   ├── pages/            # index, about, blog/*
│   ├── site-config.ts    # 사이트 설정 (이름, 문구, 이미지 등)
│   └── styles/          # global.css
├── public/               # 정적 파일 (이미지, favicon 등)
│   ├── avatar.jpg       # 홈 대표 이미지
│   ├── favicon.jpg      # 파비콘
│   └── images/blog/      # 포스트용 이미지
├── deploy.bat            # 배포 배치파일 (Windows)
└── astro.config.mjs
```

## 시작하기

```bash
npm install
npm run dev
```

개발 서버: http://localhost:4321/MyBlog/

## 사이트 설정

`src/site-config.ts` 파일에서 다음 항목을 수정할 수 있습니다.

| 항목 | 설명 | 예시 |
|------|------|------|
| `siteName` | 사이트 이름 (헤더, 푸터, copyright) | `"Greg's My Blog"` |
| `homeGreeting` | 홈 화면 인사말 | `"안녕하세요"` |
| `homeSubtitle` | 홈 화면 인사말 아래 설명 (여러 줄: `\n`) | 문자열 |
| `homeImage` | 홈 대표 이미지 | `"avatar.jpg"` 또는 `"📝"` |
| `siteLogo` | 헤더 로고 | `"avatar.jpg"` 또는 `"📝"` |
| `favicon` | 파비콘 | `"favicon.jpg"` |
| `aboutContent` | About 페이지 전체 내용 | HTML 문자열 |

**이미지 vs 이모지:** 확장자(`.jpg`, `.png` 등)가 있으면 `public/` 폴더의 이미지, 없으면 이모지로 표시됩니다.

## 수정 위치 참고

| 수정 대상 | 파일 |
|-----------|------|
| 상단/하단 타이틀, 홈 문구, About, 이미지 | `src/site-config.ts` |
| Copyright 문구 | `src/site-config.ts` → `siteName` |
| 코드 블록 스타일 | `src/styles/global.css` |

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

## 마크다운에 이미지 추가

1. 이미지를 `public/images/blog/` 폴더에 저장
2. 마크다운에서 다음 문법 사용:

```markdown
![이미지 설명](/MyBlog/images/blog/파일명.jpg)
```

## 빌드 및 테스트

```bash
npm run build      # 정적 빌드 (결과물: dist/)
npm run preview   # 빌드 결과물 로컬 미리보기
```

## 배포

1. 저장소 **Settings > Pages**에서 Source를 **GitHub Actions**로 설정
2. `main` 브랜치에 push하면 자동 배포됩니다.

### 배치파일 사용 (Windows)

```batch
deploy.bat                    # 기본 메시지 "update"로 커밋
deploy.bat 새 글 추가         # 커밋 메시지 지정
deploy.bat "2026년 2월 포스트 업데이트"  # 공백 포함 시 따옴표 사용
```

### 수동 배포

```bash
git add .
git commit -m "update"
git push
```

배포 완료까지 1~2분 소요됩니다.

---

## 참고

### 정적 사이트 생성기(SSG)

Astro는 블로그, 문서 사이트, 마케팅 페이지 같은 콘텐츠 중심 정적 사이트에 자주 쓰입니다. 비슷한 도구로 Next.js, Gatsby, Hugo, Jekyll, Eleventy 등이 있습니다.

### 커스텀 도메인

- **GitHub Pages:** Settings → Pages → Custom domain에 도메인 입력 후 DNS에서 CNAME/A 레코드 설정
- **Vercel:** Settings → Domains에서 도메인 추가 후 DNS 설정
