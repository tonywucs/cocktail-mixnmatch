// const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// // getDrink
// // function getDrink() {
// //     axios.get(`${BASE_URL}`)
// //     .then(response => {
// //         const cocktailImg = document.getElementById("cocktailImg"); 
// //         const cocktailNameElem = document.getElementById("cocktailName"); 

// //         const cocktailIngredientsUl = document.getElementById("cocktailIngredients");

        
// //         const cocktailImgSrc =  response.data.drinks[0].strDrinkThumb; // Drink img src
// //         // console.log(drinkImgSrc)
        
// //         const cocktailNameStr = response.data.drinks[0].strDrink; // Drink Name str
// //         // console.log(cocktailName)
        
// //         // cocktailImg.setAttribute("src", cocktailImgSrc);

// //         cocktailNameElem.innerText = cocktailNameStr; 
// //         // console.log(cocktailNameElem)
// //         // console.log(cocktailNameStr)

// //         let cockTailObj = response.data.drinks[0];
        
// //         const cocktailIngredientsArr = [];

// //           for (const key in cockTailObj) {
// //             if (key.includes("strIngredient") && cockTailObj[key] !== null) {
// //               cocktailIngredientsArr.push(cockTailObj[key]);
// //             }
// //           }

// //     const cocktailIngredients = document.getElementById("cocktailIngredients")

// //     // 

    
// //         console.log(cocktailIngredientsArr)
// //     })
// //     .catch(error => console.error(error));
// // }

// // getDrink()


// // // let ingredientOptions = [...realIngredients];

// // const ingredients = [
// //   "Lime juice",
// //   "Irish whiskey",
// //   "Apple brandy",
// //   "Carbonated water",
// //   "Cherry brandy",
// //   "Creme de Cacao",
// //   "Grenadine",
// //   "Port",
// //   "Coffee brandy",
// //   "Red wine",
// //   "Rum"
// // ]

// // let firstIngredient = document.getElementById("firstIngredient");

// // // firstIngredient.innerText = ingredients[0]

// // // Load page: calls for drink, img, name, ingredients

// // function addIngredientOptions() {
// //   let ingredient = document.createElement("div");

  
// // }

// let points = 0;

// // Write a header component which includes:
// // total points, drink name and strike counter
// function Header(points) {
//   return `
//     <header>
//       <section class="header>
//         <h3 class="header__points">Points: ${points}</h3>
//         <h3 class="header__drink-name"></h3>
//       </section>
//     </header>
//   `;
// }


// // const appEl = document.querySelector('#app')
// // const appEl = document.querySelector('#app')
// // appEl.innerHTML = Header(9)

// function incrementPoints(){
//   points++
// }


// {
//   /* <div class="number" id="points"></div>

// <div class="container">
//   <div class="cocktail-container">
//     <img id="cocktailImg" class="cocktail-img"></img>
//     <div id="cocktailName" class="cocktail-name"></div>
//   </div>
//   <div id="cocktailIngredients" class="cocktail-name">
//     <li id="firstIngredient"></li>

//   </d>
// </div> */}


// // Call 
// // 1) load page: loading the DOM + call drink Api: load our Image, name

// // getPossibleIngredients: take ingredient array --> add to dummyIngred --> shuffle
// // load ingredient options: load 


// function shuffle(array) {

//   let currentIndex = array.length;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     let randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }

// let realIng = ["a", "b", "c"]
// // Used like so
// const arr = [... realIng, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// shuffle(arr);

// console.log(arr);




//Eric's JS below

console.log("Eric's Mac")

// Globally accessible data from Promise
let cocktailObj = "";

let cocktailImgSrc = "";

let cocktailNameStr = "";

let cocktailIngredientsArr = "";

let userIngredientsOptionArr = "";

let shuffledUserIngredientsOptionArr = "";

let points = 0;

let strikeCount = 0;


const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const dummyIngredientsArr = [
  "Lime juice",
  "Irish whiskey",
  "Apple brandy",
  "Carbonated water",
  "Cherry brandy",
  "Creme de Cacao",
  "Grenadine",
  "Port",
  "Coffee brandy",
  "Red wine",
  "Rum"
]

const getName = (name) => {
  const nameEl = document.querySelector('.header__drink-name')
  nameEl.textContent = name
}

const getPoints = (points) => {
  const pointsEl = document.querySelector('.header__points')
  pointsEl.innerHTML = 'Points: ' + points
}

const loadDrinkImage = (path) => {
  const cocktailImgElem = document.querySelector('.drink'); 
  cocktailImgElem.style.backgroundImage = `url(${path})`;
}

// function that loops through each option item
function loadOptionItems(shuffledArray) {
  const optionItemEls = document.querySelectorAll('.options__item')
  // console.log(optionItemEls)
  optionItemEls.forEach((item, i) => {
    item.textContent = shuffledArray[i]
    item.classList.remove('options__item--success')
    item.classList.remove('options__item--fail')
  })
}

// getDrink
function getDrink() {
    axios.get(`${BASE_URL}`)
    .then(response => {

        cocktailObj = response.data.drinks[0];
        // console.log(cocktailObj);
        
        cocktailImgSrc =  response.data.drinks[0].strDrinkThumb; // Drink img src
        // console.log(cocktailImgSrc)
        
        cocktailNameStr = response.data.drinks[0].strDrink; // Drink Name str
        // console.log(cocktailNameStr)

        getName(cocktailNameStr);
        getPoints(points)
        
        cocktailIngredientsArr = [];

          for (const key in cocktailObj) {
            if (key.includes("strIngredient") && cocktailObj[key] !== null) {
              cocktailIngredientsArr.push(cocktailObj[key]);
            }
          }

        // console.log(`Real Ingredients: ${cocktailIngredientsArr}`);
      
        // console.log(cocktailImgElem)

        // const cocktailNameElem = document.querySelector('.'); 
        // console.log(cocktailNameElem)
        
        loadDrinkImage(cocktailImgSrc)
        

        // cocktailNameElem.innerText = cocktailNameStr; 
        // console.log(cocktailNameElem)
        // console.log(cocktailNameStr)
        

          userIngredientsOptionArr = [...cocktailIngredientsArr];

            for(let i = 0; userIngredientsOptionArr.length < 12; i++) {

              if(!userIngredientsOptionArr.includes(dummyIngredientsArr[i])) {
                userIngredientsOptionArr.push(dummyIngredientsArr[i])
              }
            }

            // console.log(userIngredientsOptionArr)

          shuffledUserIngredientsOptionArr = shuffle(userIngredientsOptionArr);
          loadOptionItems(shuffledUserIngredientsOptionArr)

          updateIngredientsLeft()

          // console.log(shuffledUserIngredientsOptionArr)
          // console.log(cocktailIngredientsArr)
            
            // Function that loads items on options
          // console.log(cocktailNameStr)
          // console.log(cocktailImgSrc)
          // console.log(shuffledArray)

          // loadOptionItems(shuffledUserIngredientsOptionArr)
          
    })
    .catch(error => console.error(error));
}

getDrink()


// let ingredientOptions = [...realIngredients];


// let firstIngredient = document.getElementById("firstIngredient");

// firstIngredient.innerText = ingredients[0]

// Load page: calls for drink, img, name, ingredients

// function addIngredientOptions() {
//   let ingredient = document.createElement("div");
// }

// Write a header component which includes:
// total points, drink name and strike counter


function incrementPoints() {
  const pointsEl = document.querySelector('.header__points')
  points++
  pointsEl.innerText = 'Points: ' + points
}

function incrementStrike() {
  strikeCount++;
}

function shuffle(array) {

  let currentIndex = array.length;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let realIng = ["a", "b", "c"]
// Used like so
const arr = [... realIng, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

shuffle(arr);

// console.log(arr);

// setTimeout(() => console.log(cocktailImgSrc), 2000);

// setTimeout(() => console.log(cocktailObj), 2000);

// setTimeout(() => console.log(cocktailNameStr), 2000);

// setTimeout(() => console.log(cocktailIngredientsArr), 2000);

// setTimeout(() => console.log(userIngredientsOptionArr), 2000);

// setTimeout(() => console.log(shuffledUserIngredientsOptionArr), 2000);
// setTimeout(() => loadOptionItems(shuffledUserIngredientsOptionArr), 2000);

// const optionsEl = document.querySelector('.options__item')
// optionsEl.addEventListener('click', (event) => {
//   console.log("click")
// })

// function Header(points, name) {
//   return `
//     <header>
//       <section class="header">
//         <h3 class="header__points">Points: ${points}</h3>
//         <h3 class="header__drink-name">${name}</h3>
//         <div class="header__strike-zone">
//           <img src="./assets/icons/strike.svg" alt="Strike X" class="header__strike-img">
//           <img src="./assets/icons/strike.svg" alt="Strike X" class="header__strike-img">
//           <img src="./assets/icons/strike.svg" alt="Strike X" class="header__strike-img">
//         </div>
//       </section>
//     </header>
//   `;
// }

// function Drink(imgUrl) {
//   return `
//     <section class="drink" style="background-image: url(${imgUrl});"></section>
//   `;
// }

// function Options(shuffledArray) {
//   return `
//     <section class="options">
//       <ul class="options__list">
//         <li class="options__item" draggable="true">${shuffledArray[0]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[1]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[2]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[3]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[4]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[5]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[6]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[7]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[8]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[9]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[10]}</li>
//         <li class="options__item" draggable="true">${shuffledArray[11]}</li>
//       </ul>
//     </section>
//   `;
// }

// function Homepage(points, name, imgUrl, shuffledArray) {
//   console.log(points)
//   console.log(name)
//   console.log(imgUrl)
//   console.log(shuffledArray)

//   return `
//     ${Header(points, name)}
//     <main class="game">
//       ${Drink(imgUrl)}
//       ${Options(shuffledArray)}
//     </main>
//   `;
// }

// const appEl = document.querySelector('#app')
//           appEl.innerHTML = Homepage(points, cocktailNameStr, cocktailImgSrc, shuffledUserIngredientsOptionArr)



const optionsList = document.querySelector(".options__list")
let clickedChild = '';

optionsList.addEventListener("dragstart", (e) => {
  let ingredientOptions = optionsList.querySelectorAll(".option__item");
  clickedChild = e.target.closest(".options__list > * ");
  
  console.log(clickedChild.innerText)
})


const shakerEl = document.querySelector('.drink')
shakerEl.addEventListener("dragover", (e) => {
  e.preventDefault()
})

shakerEl.addEventListener("drop", (e) => {
  e.preventDefault()
  const clickedOption = clickedChild.childNodes[0].textContent
  const clickedIndex = cocktailIngredientsArr.indexOf(clickedOption)
  console.log(cocktailIngredientsArr);
  console.log(cocktailIngredientsArr.includes(clickedOption));
  console.log(cocktailIngredientsArr.indexOf(clickedOption));

  if (cocktailIngredientsArr.includes(clickedOption)) {
    incrementPoints()
    clickedChild.classList.add('options__item--success')
    console.log('Before: ' + cocktailIngredientsArr)
    cocktailIngredientsArr.splice(clickedIndex, 1)
    console.log('After: ' + cocktailIngredientsArr)

    if (!cocktailIngredientsArr.length) {
      // clickedChild.classList.add('options__item--success')
      setTimeout(getDrink, 3000)
      setTimeout(removeMessage, 4000)
      removeStrikes(); // *** we forgot this call
      // setTimeout(() => { 
      //   alert('You Win')
      // }, 3000)
      showMessage("Do you work here?")
      // confirm('You Win')
    }

  } else {
    clickedChild.classList.add('options__item--fail')
    showStrikes()
    incrementStrike()
    console.log(strikeCount)

    if (strikeCount === 3) {
      removeStrikes()
      setTimeout(getDrink, 3000)
      setTimeout(removeMessage, 4500)
      showMessage("You've had too much")
      // setTimeout(alert('You Win'), 3000)
    }
  }

})

function showStrikes() {
  const strikeEls = document.querySelectorAll('.header__strike-img')
  console.log(strikeEls)
  strikeEls[strikeCount].classList.add('header__strike-img--on')
}

function removeStrikes() {
  strikeCount = 0
  const strikeEls = document.querySelectorAll('.header__strike-img')
  strikeEls.forEach((strike) => {
    strike.classList.remove('header__strike-img--on')
  })
}

function updateIngredientsLeft() {
  document.querySelector('.header__count').textContent = cocktailIngredientsArr.length
}

function showMessage(msg) {
  const messageEl = document.createElement('div')
  messageEl.classList.add('message')
  messageEl.textContent = msg

  const gameEl = document.querySelector('.game')
  gameEl.appendChild(messageEl)
}

function removeMessage() {
  document.querySelector('.message').outerHTML = ""
}