const showDet = document.querySelector('#showData');
const spinner = document.querySelector('.loading');


// get details for a game by id
export async function getGameDetailsById(id){
    spinner.classList.remove('d-none');
    showDet.classList.add('d-none');
    const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    });
    if(request.status == 200){
        const result = await request.json();
        displayDetails(result);
        console.log(result);
        spinner.classList.add('d-none');
        showDet.classList.remove('d-none');
    };
};


// display the details in html on screen
function displayDetails(data){
    let container = '';
    container = `
    
    <div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100 mb-5" alt="image details" />
    <a class="btn bg w-100 text-light btn-outline-danger" target="_blank" href="${data.game_url}">Show Game</a>
 </div>
 <div class="col-md-8">
    <h3>Title: ${data.title}</h3>
    <p>Category: <span class="badge bg"> ${data.genre}</span> </p>
    <p>Platform: <span class="badge bg"> ${data.platform}</span> </p>
    <p>Status: <span class="badge bg"> ${data.status}</span> </p>
    <p class="small">${data.description}</p>
    
 </div>

    `;
    showDet.innerHTML = container;
};
