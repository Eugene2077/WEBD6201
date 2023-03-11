console.log("exer.js loaded");

// Promise 는 어떻게 작동하는가? 
//https://www.w3schools.com/js/js_promise.asp
function Display(some) {
    document.getElementById("promise-container").innerHTML = some;
  }

let aPromise = new Promise(function(a, b) {
    a("it is a");
    b("I don't b");
})

.then(
function(value) {Display(value);},
function(error) {Display(error);}
);
  

// -----------------------------------------------------------------
// Fetch 와 promise 설명(chatGPT)
// fetch() is a built-in function in JavaScript that is used to make network requests to a server and retrieve data from it

// 뭘 가져올지 헤더에서 정의함
let aFetchHeaders = {"Accept": "application/json"}
//  아래 사이트에서 헤더에서 정한 json내용 가져와
fetch('https://icanhazdadjoke.com', {headers: aFetchHeaders})
// fetch로 뭘 가져오면, Promise 로 가져온다, 그래서 fetch다음에는 그냥 .then을 쓰는 것이다

// 그러면(then) 뭘 가져왔는지 볼까? , 그리고 json으로 변환한것을 다시 리턴(또 다른 Promise로 리턴된다)
.then( (response) => {
    console.log(response);
    return response.json();
})
// 그리고나서(then) 리턴된 promise를 다시 표시해보면
.then(data => {
    console.log(data);
  })

  // 실패한경우 에러표시
.catch(error => {
    console.error(error);
  });




































// let jokeUrl = 'https://icanhazdadjoke.com';
// let theFetchHeaders = {"Accept": "application/json"}

// fetch(jokeUrl, {
//     headers: theFetchHeaders
// })

// .then((res) => {
//     // send the json from the promise on to the next then()
//     return res.json();
// })