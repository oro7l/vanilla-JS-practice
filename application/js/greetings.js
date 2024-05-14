const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(loginInput.value);
// }

//loginButton.addEventListener("click", onLoginBtnClick) 
//form으로 바꾸게 되면 submit이 되므로 더이상 클릭이 상관없음

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
        event.preventDefault(); //브라우저의 기본 동작을 막음. 
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username); 
        //greeting.innerText = "Hello " + username;
        paintGreetings();
    }



//########## FORM ###########
// const link = document.querySelector("a");

// function handleLinkClick(event){
//     event.preventDefault(); //link의 기본 동작은 이동임. 그걸 막는 상황
//     console.log(event);
//     alert("Clicked!");
// }

// link.addEventListener("click", handleLinkClick);
//handleLinkClick({발생한 event에 대한 정보를 object로 첫 번째 인자를 통해 넘겨줌})

function paintGreetings(username){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //submit이후에 새로고침되는 문제가 발생
} else {
    paintGreetings("username");
}
