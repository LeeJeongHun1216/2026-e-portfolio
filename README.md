# 이정훈 e-포트폴리오

최종제출 PDF의 HTML을 재사용한 정적 웹사이트입니다. Vite로 빌드하며 백엔드나 환경 비밀키가 필요 없습니다. Node.js 22.12 이상을 사용하세요.

## 실행

- npm ci
- npm run dev
- npm run build
- npm run preview

## GitHub와 Vercel 배포

1. 이 폴더의 파일을 GitHub 저장소에 올립니다. node_modules, dist, .vercel 폴더는 제외합니다.
2. Vercel의 Add New → Project에서 GitHub 저장소를 가져옵니다. 저장소 하위 폴더에 두었다면 해당 폴더를 Root Directory로 지정합니다.
3. Vite 설정을 적용합니다. 빌드 명령은 npm run build, 출력 폴더는 dist입니다. 이 값은 vercel.json에도 있습니다.
4. Deploy를 누릅니다. 맞춤 도메인을 사용하는 경우 SITE_URL에 https://로 시작하는 최종 공개 주소를 설정하고 다시 배포하면 공유 이미지와 대표 주소에도 반영됩니다.
5. 공개 주소에서 프로젝트 링크와 PDF 다운로드를 확인합니다.

public/portfolio.pdf는 원본 최종제출 파일입니다. 사이트 공개 시 이 PDF와 스크린샷도 공개됩니다.
