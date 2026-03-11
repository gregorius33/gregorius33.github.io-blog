# My Blog

Astro 기반 정적 블로그입니다. 마크다운으로 글을 작성하고, GitHub Pages에 호스팅됩니다.

- **배포 URL:** [https://gregorius33.github.io/gregorius33.github.io-blog/](https://gregorius33.github.io/gregorius33.github.io-blog/)
- **저장소:** [https://github.com/gregorius33/gregorius33.github.io-blog](https://github.com/gregorius33/gregorius33.github.io-blog)

## 기술 스택


| 구분    | 기술                            |
| ----- | ----------------------------- |
| 프레임워크 | Astro 4.x                     |
| 스타일링  | Tailwind CSS                  |
| 마크다운  | @tailwindcss/typography       |
| 언어    | TypeScript                    |
| 배포    | GitHub Pages + GitHub Actions |


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

개발 서버: [http://localhost:4321/gregorius33.github.io-blog/](http://localhost:4321/gregorius33.github.io-blog/)

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

## 빌드 및 테스트

```bash
npm run build      # 정적 빌드 (결과물: dist/)
npm run preview   # 빌드 결과물 로컬 미리보기
```

## 배포

1. 저장소 **Settings > Pages**에서 Source를 **GitHub Actions**로 설정
2. `main` 브랜치에 push하면 자동 배포됩니다.

```bash
git add .
git commit -m "update"
git push
```

배포 완료까지 1~2분 소요됩니다.

## [참고] **정적 사이트 생성기(SSG) 사용 현황**

**Astro**는 블로그, 문서 사이트, 마케팅 페이지 같은 **콘텐츠 중심 정적 사이트**에 자주 쓰입니다.

### **비슷한 도구들**


| **도구**       | **특징**                   | **많이 쓰이는 곳**      |
| ------------ | ------------------------ | ----------------- |
| **Astro**    | 빠른 빌드, 마크다운·MDX 지원       | 블로그, 문서, 마케팅      |
| **Next.js**  | React 기반, SSG/SSR 모두 지원  | 웹앱, 대형 서비스        |
| **Gatsby**   | React, GraphQL           | 블로그, CMS 연동       |
| **Hugo**     | Go 기반, 매우 빠른 빌드          | 블로그, 문서           |
| **Jekyll**   | Ruby 기반, GitHub Pages 기본 | 블로그, GitHub Pages |
| **Eleventy** | 가볍고 유연                   | 블로그, 정적 사이트       |


### **이런 방식이 많이 쓰이는 이유**

1. **빠른 로딩** – HTML만 제공해서 성능이 좋음
2. **저렴한 호스팅** – GitHub Pages, Netlify, Vercel 등 무료/저비용
3. **보안** – 서버 로직이 없어 공격 표면이 작음
4. **SEO** – 미리 렌더링된 HTML이라 검색엔진에 유리

블로그·문서·랜딩 페이지 같은 콘텐츠 사이트에서는 Astro 같은 SSG를 쓰는 패턴이 일반적입니다.

- CSR (Client Side Rendering), SSR (Server Side Rendering), SSG (Static Site Generation)  
- SEO (Search Engine Optimization, 검색 엔진 최적화)

## [참고] Custom domain 설정

gitHub/Vercel에서 Custom domain 연결 가능하고 설정도 어렵지 않습니다.

### **GitHub Pages + 커스텀 도메인**

1. 저장소 **Settings** → **Pages** → **Custom domain**에 도메인 입력 (예: `blog.example.com`)
2. 도메인 등록업체(DNS)에서 **CNAME** 또는 **A 레코드** 설정
3. HTTPS는 GitHub가 자동으로 발급

### **Vercel + 커스텀 도메인**

1. Vercel 프로젝트 **Settings** → **Domains** → 도메인 추가
2. 안내에 따라 DNS에 **CNAME** 또는 **A 레코드** 추가
3. HTTPS 자동 발급

### **난이도**


| **항목**          | **난이도**             |
| --------------- | ------------------- |
| GitHub Pages 연결 | ⭐ 쉬움                |
| Vercel 연결       | ⭐ 쉬움                |
| DNS 설정          | ⭐⭐ 보통 (업체마다 화면만 다름) |


### **DNS 설정 예시**

- **서브도메인** (`blog.example.com`): CNAME → `username.github.io` 또는 `cname.vercel-dns.com`
- **루트 도메인** (`example.com`): A 레코드 → GitHub/Vercel이 안내하는 IP 주소 사용

도메인 업체(가비아, 카페24, Cloudflare 등)의 DNS 관리 화면에서 위 설정만 추가하면 됩니다.