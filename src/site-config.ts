/**
 * 블로그 사이트 설정
 *
 * 이 파일만 수정하면 다음 항목을 변경할 수 있습니다:
 * - 상단/하단 타이틀 (siteName)
 * - 홈 인사말 및 설명 (homeGreeting, homeSubtitle)
 * - 홈/헤더 이미지 또는 이모지 (homeImage, siteLogo)
 * - 파비콘 (favicon)
 * - About 페이지 전체 내용 (aboutContent, HTML)
 *
 * 이미지: public 폴더 기준 경로 (예: avatar.jpg)
 * 이모지: 문자열로 직접 입력 (예: "📝")
 */

export const siteConfig = {
  /** 사이트 이름 (헤더, 푸터, copyright에 표시) */
  siteName: "Greg's My Blog",

  /** 홈 화면 인사말 */
  homeGreeting: "안녕하세요",

  /** 홈 화면 인사말 아래 설명 문구 */
  homeSubtitle:
    "마크다운으로 작성한 글을 렌더링하는 정적 블로그를 만들어 보았어요.\nGreg의 소소한 일상과 관심사들에 대한 글들입니다.\n태그와 카테고리로 분류되고, 월별로 정리된 포스트를 확인해 보세요.",

  /** 홈 화면 대표 이미지 (public 폴더 기준 경로, 예: avatar.jpg) */
  homeImage: "avatar.jpg",

  /** 헤더/타이틀 로고 - 이미지 경로 또는 이모지 (예: "avatar.jpg" 또는 "📝") */
  siteLogo: "avatar.jpg",

  /** 파비콘 (public 폴더 기준 경로, jpg/png/ico 등) */
  favicon: "favicon.jpg",

  /** About 페이지 내용 (HTML 사용 가능) */
  aboutContent: `
    <p class="text-lg text-slate-600 leading-relaxed">
      Astro 기반 정적 블로그입니다.
    </p>
    <p class="text-slate-600 leading-relaxed mt-4">
      마크다운으로 글을 작성하고, 태그와 카테고리로 분류할 수 있습니다.
      월별 아카이브로 포스트를 관리하며, GitHub Pages에 호스팅됩니다.
    </p>
    <h2 class="text-2xl font-semibold text-slate-800 mt-8 mb-4">기능</h2>
    <ul class="list-disc list-inside text-slate-600 space-y-2">
      <li>정적 페이지 빌드 (GitHub Pages 호스팅)</li>
      <li>마크다운 글 작성 및 렌더링</li>
      <li>Home, About, Blog 메뉴</li>
      <li>월별 포스트 관리</li>
      <li>태그 및 카테고리 분류</li>
    </ul>
  `,
} as const;
