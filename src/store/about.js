//개발자 정보, 사용자정보 취급 데이터
export default {
  namespaced: true,
  //상태는 하나의 데이터이고 데이터는 함수로 만들어야함
  //객체데이터는 참조형 데이터이고 불변성을 유지하기위해서 함수로 만들어서 반환해줘야함
  state: () => ({
    name: 'soyoung',
    email: 'sysung93@gmail.com',
    blog :'https://sosocodingday.tistory.com/',
    phone: '+82-10-1234-5678',
    image: ''
  })
}