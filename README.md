## 🛒 코드스테이츠 쇼핑몰 북마크
코드스테이츠 부트캠프에서 솔로프로젝트로 쇼핑몰 북마크 웹 페이지를 구현하였습니다.

</br>

## 💻 실행 화면
![shoppingmall](https://github.com/jeongjwon/fe-sprint-coz-shopping/assets/76391160/f6449c77-9bc2-4756-a5fe-df91a1718d14)

첫 렌더링 시, ```메인 페이지```에는 헤더와 상품 리스트와 북마크 리스트가 나타납니다.
헤더의 좌측 로고와 타이틀 클릭시 첫 렌더링된 메인페이지로 이동됩니다.
각각의 상품의 사진을 클릭시 모달창이 열고 닫을 수 있습니다. 
상품의 북마크 버튼을 클릭시 북마크 리스트에 상품이 담깁니다. 담긴 상품을 다시 한번 북마크 버튼을 클릭시 북마크 리스트에서 삭제됩니다.

헤더의 우측 햄버거 버튼을 클릭시 상품 페이지와 북마크 페이지로 이동할 수 있는 드롭메뉴가 나타납니다.
```상품 리스트 페이지```에는 상품들의 타입에 맞게 필터 기능을 통해 렌더링되는 화면을 볼 수 있습니다.
```북마크 리스트 페이지```에는 북마크된 상품들이 보여지고 마찬가지로 타입별 필터 기능을 가집니다.


</br>

## 📍 주요 기능
- 라우팅 
  - 헤더 : 좌측 상단 로고와 텍스트 클릭시 메인페이지로 이동
  - 우측 상단 햄버거 : 상품 리스트 페이지, 북마크 페이지로 이동
- 모달창 : 상품 사진 클릭시 모달창 오픈 기능, 모달창의 닫기 버튼 기능
- 북마크 기능 : 로컬 스토리지를 활용하여 북마크된 상품을 관리
- 토스트 : react-toastify 사용하여 북마크 버튼 클릭시 토스트 알람 기능
- 타입별 데이터 렌더링 : 전체 상품을 타입에 따라 렌더링되게 필터 기능
- 전역 상태 관리 Reduxjs/tookit 사용 

</br>

## 🗂️ 파일 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂productsNav
 ┃ ┃ ┣ 📜all.png
 ┃ ┃ ┣ 📜brand.png
 ┃ ┃ ┣ 📜category.png
 ┃ ┃ ┣ 📜exhibition.png
 ┃ ┃ ┗ 📜product.png
 ┃ ┣ 📜bookmark_off.png
 ┃ ┣ 📜bookmark_on.png
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📜BookmarkList.js
 ┃ ┣ 📜Category.js
 ┃ ┣ 📜DropdownMenu.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Item.js
 ┃ ┣ 📜Loading.js
 ┃ ┣ 📜Modal.js
 ┃ ┣ 📜ProductList.js
 ┃ ┗ 📜Toast.js
 ┣ 📂constants
 ┃ ┣ 📜title.js
 ┃ ┗ 📜types.js
 ┣ 📂hooks
 ┃ ┗ 📜useFetch.js
 ┣ 📂pages
 ┃ ┣ 📜Bookmark.js
 ┃ ┣ 📜Main.js
 ┃ ┗ 📜ProductsList.js
 ┣ 📂store
 ┃ ┣ 📜bookmark.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜modal.js
 ┣ 📂style
 ┃ ┣ 📜Bookmark.styled.js
 ┃ ┣ 📜Category.styled.js
 ┃ ┣ 📜DropdownMenu.styled.js
 ┃ ┣ 📜Footer.styled.js
 ┃ ┣ 📜Header.styled.js
 ┃ ┣ 📜Item.styled.js
 ┃ ┣ 📜List.styled.js
 ┃ ┣ 📜Main.styled.js
 ┃ ┣ 📜Modal.styled.js
 ┃ ┣ 📜ProductsItem.styled.js
 ┃ ┣ 📜ProductsItems.styled.js
 ┃ ┣ 📜ProductsList.styled.js
 ┃ ┗ 📜Toast.styled.js
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
 ```
 </br>
 
## ⚙️ 사용 스택 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">



</br>

## 프로젝트 설치 및 실행방법
```git clone``` 후, ```package.json``` 파일에서 ```dependencies``` 를 ```npm install``` 을 이용해 설치해주세요.
설치가 완료되었다면, ```npm run start```를 실행하세요.




