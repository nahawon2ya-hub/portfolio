# 💻 HYEWON의 포트폴리오

## 🌟 소개
> "사용자가 편하게 느낄 수 있는 화면을 만드는 프론트엔드 개발자, 이혜원입니다."

사용자 입장에서 생각하며, 쉽고 직관적인 UI를 만들기 위해 노력하고 있습니다.  
React를 활용해 화면을 구현하고, 데이터를 효율적으로 관리하는 방식에도 관심이 있습니다.

---

## 🎯 핵심 기능
- **데이터 기반 관리** : JSON 파일로 포트폴리오 데이터 관리 → 유지보수와 확장 용이  
- **인터랙티브 소개** : TypeIt 타이핑 애니메이션으로 첫인상 강화  
- **스마트 내비게이션** : Scroll Spy + 부드러운 스크롤 이동  
- **3D 키 비주얼** : 큐브 회전으로 핵심 키워드 노출  
- **스킬 버튼 인터랙션** : JSON 데이터 기반, 버튼 클릭(onClick)으로 선택한 카테고리 기술 아이콘 강조  
- **사용자 피드백** : 이메일 복사 및 Toast 알림 제공  
- **배포 및 최적화** : Vercel + GitHub 연동 자동 배포, 반응형 화면 지원  

---

## 🛠 기술 스택

**프론트엔드 / 상태 관리**  
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)](https://react.dev/) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flatsquare&logo=JavaScript&logoColor=black)](https://developer.mozilla.org/ko/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/HTML) [![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)](https://sass-lang.com/) [![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white)](https://www.json.org/json-en.html)  

**배포 / 라이브러리**  
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white)](https://vercel.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/) [![Intersection Observer](https://img.shields.io/badge/Intersection_Observer-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API) [![TypeIt](https://img.shields.io/badge/TypeIt-FF5F5F?style=flat-square&logo=itunes&logoColor=white)](https://typeitjs.com/)  

**디자인 도구**  
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white)](https://www.figma.com/)

---

## 💥트러블슈팅

### 📌 클릭 이동 시 스크롤 이벤트 충돌
- **문제**: 메뉴 클릭 중 Scroll Spy와 상태 업데이트 충돌 → 메뉴 highlight 깜빡임
- **해결**: 클릭 이동 중에는 스크롤 이벤트를 일시적으로 무시하도록 플래그(`ignoreScroll`)를 사용하고, 스크롤 이동이 완료된 후에 다시 활성화하여 메뉴 highlight가 자연스럽게 표시되도록 조정했습니다.

### 📌 Scroll Spy 오프셋 불안정
- **문제**: 기존 -100 오프셋 사용 → 화면 크기나 레이아웃 변화 시 active 위치가 불안정함
- **해결**: 섹션 위치 계산과 비교 시 오프셋을 제거하고, 현재 스크롤 위치가 각 섹션 시작 위치 이상일 때 active가 되도록 변경하여 활성화 위치를 정확하게 조정했습니다.

### 📌 섹션 위치 계산
- **문제**: Scroll Spy가 섹션 위치를 정확히 모름 → 메뉴 highlight 불안정
- **해결**: 각 섹션의 화면 내 위치(offsetTop)를 한 번 계산하여 상태로 저장하고, 스크롤 이벤트나 메뉴 클릭 시 이 정보를 기반으로 active 메뉴를 업데이트하도록 개선했습니다.

---

### 🔗 링크 및 연락처
- 🌐 **배포:** https://hwportfolio.vercel.app/  
- 🐱 **깃허브:** https://github.com/nahawon2ya-hub  
- ✉️ **이메일:** nahawon2ya@gmail.com
