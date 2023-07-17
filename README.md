# 팀원
[김호정](https://github.com/HJKim423)

[권성민](https://github.com/kwonja)

[전유영](https://github.com/PollyGotACracker)

[한승완](https://github.com/hanseungwan1)

[신동재](https://github.com/lIIIlIIIlIIIl)

[조해창](https://github.com/Funbucket)


# 배포링크
[바로가기](https://pre-onboarding-11th-1-2.vercel.app/)

# 요구사항
https://github.com/hanseungwan1/selection-task

# 프로젝트 구조
```bash
📦 src
├── 📂 apis
│   ├── 📂 auth
│   │   │── 📄 index.tsx
│   ├── 📂 core
│   │   │── 📄 index.tsx
│   └── 📂 todos
│        └── 📄 index.tsx
│── 📂 hooks
│    │── 📄 useAuthRedirection.ts
│    └── 📄 useRouter.ts
│── 📂 layout
│    └── 📄 GeneralLayout.tsx
│── 📂 pages
│    │── 📂 home
│    │    │── 📄 index.tsx  
│    │── 📂 siginin
│    │    │── 📄 index.tsx
│    │    │── 📄 signin.hook.ts
│    │── 📂 signup
│    │    │── 📄 index.tsx
│    └── 📂 todo
│         │── 📄 InsertForm.tsx
│         │── 📄 ListItem.tsx
│         │── 📄 index.tsx
│         └── 📄 todo.hooks.ts
└── 📂 utils
    ├── 📂 auth
    │   │── 📄 index.ts
    ├── 📂 constants
    │   │── 📄 path.ts
    └── 📂 helper
         └── 📄 validationCheck.ts
```

# Best Practice
## 프로젝트 환경
### Eslint/ Prettier 설정
- CRA 로 타입스크립트 프로젝트 생성 후 폴더,파일 정리 후 팀 코드 컨벤션을 맞추기 위해 Eslint, Prettier 를 설정하였습니다.  
팀 회의때 정한 Prettier 옵션을 프로젝트에 적용하고 Eslint 를 사용하여 3개의 recommended rules plugin 설정하였습니다.

### husky 자동화 설정
- husky 패키지를 사용하여 특정 이벤트때 원하는 행동을 자동화 할 수 있습니다.

- commit 이벤트 발생시 eslint 가 실행되도록 `package.json` 파일에서 `scripts` 에 eslint 실행 명령어를 추가해주고 프로젝트에 husky 패키지를 초기화한 뒤 `pre-commit` 시 eslint 명령어 실행 동작을 추가하면 commit 전 eslint 명령어가 동작하고 eslint 통과 시 commit 이 되도록 자동화 구축하였습니다.

- 추가로 commit 메시지 룰도 추가하여 규칙에 없는 commit 메시지는 반려하여 프로젝트에 통일된 commit 메시지를 사용할 수 있었습니다.

### lint-staged 설정
- commit 할 때마다 모든 파일을 eslint 검사를 하면 시간이 많이 걸리기 때문에 `lint-staged` 패키지를 사용하여 변경된 파일만 검사를 진행하도록 설정하여 효율적인 lint 검사를 구축하였습니다.



## 권한에 따른 라우팅을 위한 Global Layout
### 라우팅 정보 리스트화
- 페이지와 레이어를 리스트 형태로 만들어 각 경로에 맞는 컴포넌트를 팹핑하고 분리하여, 해당 리스트를 렌더링하는 형태로 코드를 간소화하였습니다.

- 컴포넌트들을 맵핑할 때, 토큰 여부에 따라 분리하여 토큰이 필요한 페이지에는 리다이렉션을 진행하는 컴포넌트인 `GeneralLayout` 으로 감싸고, 토큰이 필요하지 않는 페이지는 그냥 반환되도록 하였습니다.

- 과제에서는 토큰이 필요한 페이지가 todo 페이지 하나이기 때문에 위와 같이 코드를 작성해도 크게 차이를 느낄 수 없지만, 페이지의 수가 많으면 많을 수록 반복해서 작성해야하는 코드의 양을 줄일 수 있습니다.  
(로그인과 회원가입 페이지를 따로 분리하기 어렵다고 판단하여 해당 페이지에서의 리다이렉션은 페이지 컴포넌트 안에서 진행하였습니다.)

### 리다이렉션
- 동일한 기능을 하는 코드를 함수화하여, 재사용성을 고려하여 더 간결하고 깨끗한 코드 작성을 작성할 수 있도록 하였습니다.

- 리다이렉트 기능을 하는 custom Hook 을 만들어서, 토큰이 필요한 페이지를 감쌌던 GeneralLayout 컴포넌트 안과 로그인, 회원가입 페이지에서 리다이렉트 처리를 진행하였습니다.

## 로그인 페이지
### 로그인
- 유효성 검사에 대한 코드복잡도가 증가할때를 대비해 따로 hook 을 만들어 관리했습니다.
- 유효성 검사 함수 리턴 값을 boolean 으로 설정하여 button 에 바로 적용했습니다. 
이를 통해 `useEffect` 와 state 를 사용하지 않아서 렌더링을 줄일 수 있었고, 코드를 줄여 가독성을 높였습니다.

## 회원가입 페이지
### 회원가입
- 유효성 검사를 위해 input 의 내용이 실시간 반영되어 회원가입 버튼의 `disabled` 속성으로 나타나도록 input 의 `onChange` 속성과 `useEffect` 를 이용했습니다.
- 이메일과 비밀번호 각각의 validation 값을 boolean 값으로 가져와 각각의 유효성 검사 메시지를 나타내 사용자의 이해가 쉽도록 구현하였습니다.

## todo 페이지
### 컴포넌트 분리와 리렌더링
- 화면 리렌더링을 최소화하면서도 제한된 시간을 고려하여 지나친 컴포넌트 분리는 지양하였습니다. 특히 input 의 `onChange` 이벤트는 잦은 리렌더링을 발생시키므로 해당 요소를 기준으로 하였습니다.
- index 컴포넌트에서 `useEffect` 를 사용하여 최초 데이터 setting 후 `todoList` state 변수에 저장했습니다. 서버에 요청 후 SUCCESS 응답을 받을 경우에만 해당 변수에 값을 재할당했습니다. 
데이터가 변경될 때마다 서버에 get 요청을 하지 않으면서, 화면 flickering 을 피할 수 있다는 이점이 있다고 판단했습니다.
- `map()` 을 사용해 ListItem 컴포넌트를 뿌리고 TODO 아이템의 데이터를 각 props 로 전달했습니다. ListItem 컴포넌트에서는 props 로 받은 데이터를 `todoItem` state 변수에 저장합니다. 
그러면 아이템 수정 시 전체 리스트가 아닌 해당 아이템만 리렌더링 되도록 할 수 있습니다.

### 수정 여부에 따른 DOM 변경
- 수정 버튼을 클릭할 때 DOM 변경은 `isEditMode` 변수를 따로 두어 bool 값에 따라 상태를 전환하도록 했습니다. 
input-text 간 전환은 삼항 연산자를 사용했습니다. button 은 중복되는 속성이 많기 때문에 배열 2개를 두어 상태에 맞는 배열을 `map()` 을 사용해 화면에 뿌렸습니다.

## apis와 utils
### apis
- axios instance 를 custom 하여 정의하여 재사용성을 높였습니다.
- 서버와 통신하는 api 호출에 관련한 로직의 재사용성을 높이기 위해서 apis 폴더에 모듈화 하였습니다.

### utils
- local storage 에 access token 을 저장하고 가져오는 로직의 재사용성을 높이기 위해서 utils 폴더에 모듈화 하였습니다.
