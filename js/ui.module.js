const game = document.querySelector('#games');
const loading = document.querySelector('.loading');


// get all games
export async function getData() {
    loading.classList.remove('d-none');
    game.classList.add('d-none');


    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  const request = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games",options);  
  if(request.status == 200){
    const api = await request.json();
    displayData(api)
    console.log(api);
    loading.classList.add('d-none');
    game.classList.remove('d-none');
  };
};

// get games by category name
export async function getDataByType(games){
    loading.classList.remove('d-none');
    game.classList.add('d-none');

   const options ={
     method: 'GET',
     headers: {
        'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
 }
  }   
    const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${games}`,options);
    if(request.status == 200){
        const res = await request.json();
        displayData(res);
        console.log(res);
        loading.classList.add('d-none');
        game.classList.remove('d-none');
    };
};


// display data on screen in html
export function displayData(data){
    let container = '';
    for (let i = 0; i < data.length; i++) {
      container += `
         <div class="col-12 col-sm-12 col-md-6 col-lg-4 gy-4 gx-4">
            <div data-id="${data[i].id}"  class="card h-100">
               <div  class="card-body">
                  <figure class="position-relative">
                     <img data-game-id=${data[i].id} class="w-100" src="${data[i].thumbnail}" />         
                  </figure>
                  <figcaption> 
                     <div class="hstack justify-content-between">
                        <h3 data-game-id=${data[i].id} class="small">${data[i].title}</h3>
                        <span class="badge bg p-2">Free</span>
                     </div>  
                     <p data-game-id=${data[i].id} class="card-text small text-center opacity-50">${data[i].short_description}</p>
                  </figcaption>
               </div> 
               <footer class="card-footer small hstack justify-content-between"> 
                  <span data-game-id=${data[i].id}>${data[i].genre}</span>
                  <span data-game-id=${data[i].id}>${data[i].platform}</span>
               </footer>
            </div>
         </div>
      `;
   }
    games.innerHTML = container;
};
