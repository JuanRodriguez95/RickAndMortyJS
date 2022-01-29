const API = 'https://rickandmortyapi.com/api/character';
let characters = document.getElementById("characters");

const getAPI = (api) =>{
    return fetch('https://rickandmortyapi.com/api/character')
            .then((response)=> response.json())
            .then((json)=>{
                fillData(json);
            })
            .catch((error)=>{
                console.log("Error in the API");
            })
}

const fillData = (data) =>{
    let json = data.results;
    let item = " ";
    json.forEach(character => {
        let {id , name , status ,species, gender,type, image}=character;
        item += '<div class="card bg-secondary text-white mb-3" style="width:18rem;">';
        item += `<div class="card-header text-center"><h5>${name}</h5></div>`;
        item +=`<img class=image src=${image} alt="..." >`;
        item +='<div class="description ">'
        item +=`<p class="card-text "><strong>Species:</strong> ${species}</p>`;
        item +=`<p class="card-text "><strong>Gender:</strong> ${gender}</p>`;
        item +=`<p class="card-text "><strong>Status:</strong> ${status}</p>`;
        item +='</div>';
        item +='</div>';

    });
    characters.innerHTML=item;
}


getAPI(API);


