export default {
  install(app) {
    app.config.globalProperties.$loadImage = src => {
      return new Promise(resolve => {
        //createElement HTML 요소를 생성해서 메모리에 저장
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          //완료!
          resolve()
        })
      })
    }
  }
}