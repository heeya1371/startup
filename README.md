# 🍳 캠퍼스 맛집 가이드 (Campus Food Guide)

> **영남이공대학교 스타트업 프로젝트**의 일환으로 기획 및 개발된 웹 기반 대학 커뮤니티 플랫폼입니다.  
> 학교 주변(대명동 일대)의 가성비 맛집 정보를 직관적인 지도 UI로 제공하고, 학생들 간의 솔직한 익명 후기를 공유할 수 있도록 돕습니다.

<br>

## 🌐 바로가기
* **깃허브 페이지 배포 링크:** 🔗 [https://heeya1371.github.io/startup/](https://heeya1371.github.io/startup/)

<br>

## 🛠️ 기술 스펙 (Tech Stack)

| 구분 | 사용 기술 및 라이브러리 |
| :--- | :--- |
| **Frontend** | <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> |
| **API** | Kakao Maps API (카카오 지도 Open API) |
| **Deployment** | GitHub Pages (깃허브 페이지) |

<br>

## ✨ 주요 기능 (Key Features)

* **📍 카카오 지도 API 연동**
  * 대구 영남이공대학교 주변 맛집 좌표를 기반으로 지도 위에 마커(핀)를 시원하게 시각화합니다.
* **🔍 맛집 리스트 & 인터랙션**
  * 한식, 양식, 일식, 카페 등 카테고리별 뱃지가 적용된 맛집 리스트를 한눈에 확인할 수 있습니다.
  * 목록에서 특정 맛집을 클릭하면 지도의 초점이 해당 위치로 부드럽게 이동(`panTo`)합니다.
* **✍️ 실시간 익명 후기 작성 (CRUD 기반 인터랙션)**
  * 성별, 학년 제한 없이 대학 구성원 누구나 닉네임을 설정해 솔직한 맛 평가를 등록할 수 있습니다.
  * 최신 후기가 타임라인 맨 위로 실시간 추가되어 활발한 커뮤니티 피드백을 한눈에 검토할 수 있습니다.
* **📱 반응형 UI 레이아웃**
  * 데스크톱 PC뿐만 아니라 모바일, 태블릿 기기에서도 화면이 깨지지 않고 최적화된 상하 일렬 배치가 적용됩니다.

<br>

## 📂 폴더 구조 (Directory)
단일 디렉터리 구조로
