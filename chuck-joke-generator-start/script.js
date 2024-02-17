const jokeBtn = document.querySelector('button');
const jokeDisplay = document.querySelector('#joke')
const xhr = new XMLHttpRequest();



const loadJoke = (e) =>{
    xhr.open('GET','https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {

    if (this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText);
        jokeDisplay.textContent = data.value

    }
};
xhr.send(); 

}

jokeBtn.addEventListener('click',loadJoke);