import {getData,getDataByType} from './ui.module.js'
import {getGameDetailsById} from './details.module.js'

const dataShow = document.querySelector('#det');
const links = document.querySelectorAll(".nav-link");
let active = document.querySelector(".active");
const home = document.body;

// loop on links
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      let tagLink = e.target;
      active.classList.remove("active");
      tagLink.classList.add("active");
      active = tagLink;
      var gameType = tagLink.innerHTML;
      getDataByType(gameType);
    });
};

document.addEventListener('click',function(e){
    //get the id of the game by click on any part of card
    let gameId = e.target.getAttribute('data-game-id');
    if(gameId != null){
        dataShow.classList.remove('d-none');
        getGameDetailsById(gameId);
        
    };
    // if user click on X btn 
    let closeBtn = e.target.getAttribute('id')
    if(closeBtn == 'closeBtn'){
        dataShow.classList.add('d-none');
      
    };
});



getData();
