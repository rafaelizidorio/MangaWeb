
mangaJson.map((item, index)=>{

    let mangaItem = document.querySelector('.invisivel .manga').cloneNode(true);

    document.querySelector('.listagem .listagem-manga').append( mangaItem );

    mangaItem.querySelector('.manga .tag').innerHTML = item.tag;
    mangaItem.querySelector('.manga .title').innerHTML = item.name;
    mangaItem.querySelector('.manga .nota').innerHTML = item.rating;
    mangaItem.querySelector('.manga img').src = item.img;

});

function menuSelector(){
    if(menuselector.style.display == 'block'){
        menuselector.style.display = 'none';
    }else{
        menuselector.style.display = 'block';
    }
}