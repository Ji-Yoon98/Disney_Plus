# 📺 Disney_Plus

### TMDB API를 활용 React 영화 앱 만들기

👉🏻 **[사이트 바로가기](https://react-disney-plus-app-aac71.web.app/)**

# 📺 사용기술 & 개발환경

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" />
<br>
<img src="https://img.shields.io/badge/Visual Studio Code-0769AD?style=for-the-badge&logo=Visual Studio Code IDEA&logoColor=white">


# 📺 화면구성 및 기능

1. create-react-app으로 프로젝트 생성 

```bash
npx create-react-app ./
```

2. **[The Movie DB API 생성](https://themoviedb.org/)**
3. Axios 인스턴스 생성 및 요청

```bash
npm i axios
```

```jsx
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b1e0d5e162433113fccb1d86dc271bcf",
    language: "ko-KR"
  }
})

export default instance;
```

4. 전체 구조 생성  (nav, banner, category, row)
5. React Router Dom
```bash
npm i react-router-dom
```

5. Custom Hooks 만들기

**useDebounce Custom Hook**

Debounce: debounce function은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup이벤트 처리를 지연시킴

- UI코드가 모든 이벤트 처리 X
- 서버로 전송되는 API 호출 수도 크게 줄어듬
- 입력된 모든 문자를 처리하면 성능 저하 및 백엔드에 불필요한 로드가 추가 될 수 있음.

```jsx
import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
          setDebounceValue(value)
      }, delay);
  
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounceValue
}
```

**useOnClickOutside**

모달창 외부 클릭 시 모달 창을 닫게 만드는 Custom Hooks 구현

```jsx
import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
        // console.log("event.target", event.target)
        // 클릭 시 모달 창 안이라면 그냥 return
        if(!ref.current || ref.current.contains(e.target)) {
            return;
        }
        handler();
    };
    // 모달 창 바깥을 클릭하면 Callback 함수를 호출하는 Event 등록
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, handler])
    
}
```

6. Firebase와 애플리케이션 연동

> [Firebase 사이트로 이동](https://firebase.google.com/?hl=ko)\
> 콘솔로 이동\
> add project\
> Get started by adding Firebase to your app (선택)\
> Add Firebase SDK npm i firebase 설치\
> firebase.js 파일 생성 후 파일에 SDK 넣어주기\
> import “firebase/auth” 추가\
> app 내보내주기\
> index.js에서 import app from ‘./firebase’ 추가
기능

Authentication → Sign-in method 에서 기능 선택 및 사용 설정

[상세 내용 참고](https://firebase.google.com/docs/build?hl=ko)

7. Firebase 배포

> npm i -g firebase-tools
>  - -g는 global의 약자로 로컬에 글로벌로 설치하여 다른 프로젝트에서도 사용가능하게 함.
>
> firebase login 오류가 나는 경우가 많은데 그럴 경우엔 Windows PowerShell 앱을 검색 관리자로 실행
>  - 현재 권한상태를 확인 get-ExecutionPolicy
>  - 권한 상태를 “RemoteSigned”으로 변경 Set-ExecutionPolicy RemoteSigned / Yes
>  - 권한이 정상적으로 변경되었는지 확인 get-ExecutionPolicy
>  - vscode에서 명령어를 다시 수행
>  - 브라우저에서 Firebase CLI Login Successful 확인
>
> npm run build\
> firebase init\
> 어떠한 기능을 사용할지 space bar로 선택 후 엔터\
> 기존 or 새로운 프로젝트 선택\
> build\
> y\
> github에 올릴지 말지 선택\
> 터미널에 firebase deploy 후 호스팅 URL 확인

