# Wanted Pre Onboarding Challenge FE

### [👨‍💻 도전을 즐기는 개발자 배한조입니다](https://www.notion.so/3e61bb9e1a1747e1b492d7485806a495)

### 📰 목차
|  머릿말             |
| -------------------|
| 과재 개요           |
| 프로젝트 시작       |
| 사용 기술           |
| 커밋 & 브랜치 컨벤션 |
| 폴더 구조           |

## ✨ 과제 개요

회원가입, 로그인을 이용한 todo list입니다.

- [ ] 회원가입 기능
  - [ ] 정규식을 이용해 이메일 포멧을 확인합니다.
  - [ ] 비밀번호는 8글자 이상이어야 합니다.
  - [ ] 위 두 조건을 충족하지 못할 시 회원가입 버튼이 비활성화됩니다.
- [ ] 로그인 기능
  - [ ] 이미 로그인 된 경우 `/`에 리다이렉트됩니다.
  - [ ] JWT는 로컬 스토리지에 저장되어 있습니다.
  - [ ] 로그아웃 시 로컬 스토리지에 있는 JWT를 삭제합니다.
- [ ] Todo List
  - [ ] CRUD가 가능합니다.
  - [ ] `/todo`에는 입력창과 목록만 보입니다.
  - [ ] 특정 todo를 클릭하면 `/todo/:id`로 리다이렉트되며 오른쪽에 상세 보기가 추가됩니다.
  - [ ] react-router-rom의 navigate를 통해 뒤로 가기시 이전 내용이 보입니다.

## 🔒 프로젝트 시작

```
// Step.0
wanted-pre-onboarding-challenge-fe-1-api 프로젝트가 필요합니다.

// Step.1
.env 파일을 추가합니다
REACT_APP_WANTED_API = http://localhost:8080

// Step.2
yarn install로 패키지를 설치합니다.

// Step.3
yarn start로 프로젝트를 시작합니다.
```

## 🛠 사용 기술
- React.js
- react-router-dom
- Styled-Components
- Axios
- ESLint & Prettier

## ⚖ 커밋 & 브랜치 컨벤션
#### 커밋 컨벤션

예시) `feat: todo 등록 구현`

|  머릿말     | 설명        |
| ----------- | ---------- |
| feat        | 기능 구현   |
| setting     | 패키지 설치, 개발 설정    |
| refactor    | 기능변화 없이 최적화, 코드 개선 등    |
| fix         | 버그 수정   |
| style       | 스타일링, 변수명 수정, 주석 추가   |
| docs        | README.md 작성   |

#### 브랜치 네이밍 컨벤션 (약식)

예시) `feature/signIn`

|  머릿말      | 설명        |
| ----------- | ---------- |
| master      | 최종 결과    |
| feature     | 기능 단위 구현    |
| fix         | master에서 발견된 버그 수정   |

## 📐 폴더 구조
```
├── 📂 public
│── 📂 src
|    │── 📂 components           // 공통 컴포넌트
|    │── 📂 lib                  // api, 공용 함수
|    │── 📂 pages                // 라우터
|    |      │── 📂 Home
|    |      │── 📂 SignIn
|    |      │── 📂 SignUp
|    |      └── 📂 Todo
|    |
|    |── 📂 styles               // 공통 스타일
|    └── 📝 App.js & index.js
|
└── 📝 .eslint & .prettier
```
