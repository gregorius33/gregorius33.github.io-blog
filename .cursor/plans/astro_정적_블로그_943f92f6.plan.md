---
name: Astro 정적 블로그
overview: Astro 기반 정적 블로그 생성기를 구축하여 마크다운 글 작성, 태그/카테고리 분류, 월별 아카이브, GitHub Pages 호스팅을 지원하는 아름다운 블로그를 만듭니다.
todos:
  - id: init
    content: Astro 프로젝트 초기화 (static output, Tailwind)
    status: completed
  - id: content-schema
    content: Content Collections 스키마 및 blog 폴더 구조 설정
    status: completed
  - id: layout-components
    content: Layout, Header, Footer, BlogCard 컴포넌트 구현
    status: completed
  - id: pages-home-about
    content: Home, About 페이지 구현
    status: completed
  - id: pages-blog
    content: Blog 목록, 태그/카테고리/월별 아카이브, 개별 포스트 페이지 구현
    status: completed
  - id: design
    content: Tailwind로 마크다운 스타일 및 반응형 디자인 적용
    status: completed
  - id: github-pages
    content: GitHub Pages 배포 설정 (config, Actions 워크플로우)
    status: completed
isProject: false
---

# Astro 정적 블로그 생성기 구현 계획

## 프로젝트 구조

```
myBlog/
├── src/
│   ├── components/       # 재사용 컴포넌트
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── BlogCard.astro
│   ├── content/
│   │   └── blog/         # 마크다운 포스트 (월별 폴더: 2025/03/)
│   │       └── 2025/
│   │           └── 03/
│   │               └── my-post.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro   # Home
│   │   ├── about.astro   # About
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   ├── tag/[tag].astro
│   │   │   ├── category/[category].astro
│   │   │   └── archive/[year]/[month].astro
│   │   └── blog/[...slug].astro  # 개별 포스트
│   └── config.ts
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 마크다운 Frontmatter 스키마

```yaml
---
title: "포스트 제목"
description: "요약"
pubDate: 2025-03-11
tags: ["태그1", "태그2"]
category: "카테고리명"
---
```

## 구현 단계

### 1. 프로젝트 초기화

- `npm create astro@latest`로 Astro 프로젝트 생성
- `output: 'static'` 설정 (astro.config.mjs)
- `base: '/28.myBlog/'` 또는 GitHub Pages 저장소명에 맞게 설정
- Tailwind CSS 통합 선택

### 2. Content Collections 설정

- `src/content/config.ts`에 blog 스키마 정의 (title, description, pubDate, tags, category)
- `src/content/blog/` 폴더 구조: `YYYY/MM/slug.md` 형태로 월별 관리

### 3. 레이아웃 및 공통 컴포넌트

- **Layout.astro**: 메타 태그, 공통 스타일, 반응형 루트
- **Header.astro**: Home | About | Blog 네비게이션
- **Footer.astro**: 저작권, 링크
- **BlogCard.astro**: 포스트 카드 (제목, 날짜, 태그, 요약)

### 4. 페이지 구현


| 페이지     | 경로                             | 기능                                |
| ------- | ------------------------------ | --------------------------------- |
| Home    | `/`                            | 최신 포스트 미리보기, 사이트 소개               |
| About   | `/about`                       | 정적 about 페이지 (마크다운 또는 직접 작성)      |
| Blog 목록 | `/blog`                        | 전체 포스트 목록, 월별/태그/카테고리 필터          |
| 태그별     | `/blog/tag/[tag]`              | 해당 태그 포스트만 표시                     |
| 카테고리별   | `/blog/category/[category]`    | 해당 카테고리 포스트만 표시                   |
| 월별 아카이브 | `/blog/archive/[year]/[month]` | 해당 월 포스트만 표시                      |
| 개별 포스트  | `/blog/[...slug]`              | 마크다운 렌더링 (getStaticPaths로 동적 라우팅) |


### 5. 디자인 (Tailwind CSS)

- **색상**: 다크/라이트 테마 또는 세련된 단색 팔레트 (예: slate + accent)
- **타이포그래피**: Inter, Noto Sans KR 등 가독성 좋은 폰트
- **마크다운 스타일**: prose 클래스로 제목, 리스트, 코드블록, 인용구 스타일링
- **반응형**: 모바일 우선, 카드 그리드 레이아웃

### 6. GitHub Pages 배포

- `astro.config.mjs`에 `site: 'https://<username>.github.io'`, `base: '/<repo>/'` 설정
- GitHub Actions 워크플로우: `push` 시 `npm run build` → `dist/`를 `gh-pages` 브랜치에 배포
- 또는 수동: `npx gh-pages -d dist`

## 주요 파일별 핵심 로직

**getStaticPaths (동적 라우팅)**:

- `getCollection('blog')`로 모든 포스트 로드
- slug, tags, categories, date 기준으로 경로 생성

**월별 그룹핑**:

- `pubDate`에서 year, month 추출
- `Object.entries()`로 그룹화 후 사이드바/드롭다운에 표시

## 의존성

- astro
- @astrojs/tailwind
- tailwindcss
- (선택) @astrojs/mdx - MDX 확장 지원 시

