# Vite와 SASS/SCSS 로 만드는 Youtube-APP
![1](https://github.com/reserver7/react-sass-youtube-app/assets/78328320/d7c4a1ca-4787-4d0e-bfe1-4056bf9a1def)
## visit site : [https://react-sass-youtube-app.netlify.app](https://react-sass-youtube-app-five.vercel.app/)
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="2%" /> vite + React
```bash
$ npm init vite

# y
# ./ (현재 해당하는 프로젝트의 root일경우)
# React
# JavaScript
```
    
    

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="2%" /> Modules
```bash
$ npm install axios dayjs react-icons react-router-dom react-tooltip react-youtube sass

$ npm istall -D eslint
$ npx eslint --init

# yse - 처음 패키지 사용
# javascript(export/export) - esm
# problems 까지
# react
# typescript -> no/yes 여부
# browser
# confing -> javascript
# latest 설치 -> yes
# package manager -> 사용하고 있는것 선택
```
- lint - vite를 사용할때 보통 사용, 문법오류 용도 설치 ( 설치중 코드 컨벤션 필요에 따라 선택 가능 )
- axios - 요청과 응답 데이터의 변형
- dayjs - 날짜 데이터 조작
- react-router-dom - 페이지 전환
- react-tooltip - 툴팁
- react-youtube - 비디오 부분 처리
## ✏ Vite에서 .env 환경변수 넣어쓰기

1. 환경변수 작성
vite에서 환경변수를 사용하기 위해서는 CRA와는 다르게 REACT_APP_이 아닌 VITE_를 앞에 작성을 해주어야 합니다.
- `VITE_API_KEY = "API_KEY"`

2. 환경변수 불러오기
변수 작성방법이 다르듯이 불러오는 방법도 다릅니다.
process.env.가 아닌 import.meta.env.로 접근을 해주어야 합니다.
- `import.meta.env.VITE_API_KEY`

## ✏ API_KEY ( .env ) 숨기기
### - 이미 올린경우  
1. env 파일 삭제  

        $ git rm .env --cached
        $ git add .
        $ git commit -m 'remove .env file from git'
        $ git push
  
3. git history 특정 파일 삭제 명령어

   `$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA'` --prune-empty --tag-name-filter cat -- --all  
   `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` 구간에 파일이나 폴더 작성
   
   - 파일의 경우 ./파일명.js 등으로 작성 (env의 경우엔 .env)
   - 폴더의 경우 -r option을 추가로 작성
  
   과정이 끝나면 git에 push 해주면 관련된 commit이 사라집니다.
     
     `$ git push origin --force --all`
     
### - 상태관리만 하고 내용은 없는 경우  
    $ git rm .env --cached
    $ git commit -m '내용'
    $ git push origin main  

### ❗ `.env`를 생성하기 이전에 `.gitignore`에 `.env`를 미리 넣어주자..
