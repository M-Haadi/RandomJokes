const jokeBody =  document.querySelector('.joke-body');
const nextbtn= document.querySelector('.next-btn');
const nextbtn2= document.getElementsByClassName('next-btn')[1];
const displayAns= document.querySelector('.ans-btn');
const riddleBody= document.querySelector('.riddle-body');




// with fetct API METHOD (PROMISES)

const getjokes = () =>{


    setHeader= {

        headers: { 
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
    .then ( (response) => response.json() 
     )
    .then( (data)=>{

        jokeBody.innerHTML = data.joke;
    } )

}

nextbtn.addEventListener('click', getjokes);


setHeader= {

    headers: { 
        Accept: "application/json"
    }
}
fetch('https://icanhazdadjoke.com', setHeader)
.then ( (response) => response.json() 
 )
.then( (data)=>{

    jokeBody.innerHTML = data.joke;
} )




















// ============================================
// Riddle part
// ===============================================


const getriddle = () =>{


    setHeader= {

        headers: { 
            Accept: "application/json"
        }
    }

    fetch('https://riddles-api.vercel.app/random', setHeader)
    .then ( (response) => response.json() 
     )
    .then( (data)=>{
         
        riddleBody.innerHTML = data.riddle;

displayAns.addEventListener('click',()=>{
    riddleBody.innerHTML = `ANSWER: ${data.answer}`;
})

    } )

}

nextbtn2.addEventListener('click', getriddle);


setHeader= {

    headers: { 
        Accept: "application/json"
    }
}
fetch('https://riddles-api.vercel.app/random', setHeader)
.then ( (response) => response.json() 
 )
.then( (data)=>{

    riddleBody.innerHTML = data.riddle;
    displayAns.addEventListener('click',()=>{
        riddleBody.innerHTML = `ANSWER: ${data.answer}`;
    })
} )



