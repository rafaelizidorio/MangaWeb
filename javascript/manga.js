

let mangaJson = [
    {id: 1, img:'imgs/capas/Lycoris.png', tag:'Ação, Drama', name:'Lycoris Recoil', rating:'4.5'},
    {id: 2, img:'imgs/capas/Frieren.png', tag:'Fantasia, Drama', name:'Sousou no Frieren', rating:'5'},
    {id: 3, img:'imgs/capas/Bocchi.png', tag:'Música, Drama', name:'Bocchi The Rock!', rating:'4'},
    {id: 4, img:'imgs/capas/Haikyu.png', tag:'Esporte, Drama', name:'Haikyuu!', rating:'3.5'},
    {id: 5, img:'imgs/capas/Hunter.png', tag:'Aventura, Ação', name:'Hunter x Hunter', rating:'2.5'},
    {id: 6, img:'imgs/capas/Jujutsu.png', tag:'Aventura, Ação', name:'Jujutsu Kaizen', rating:'3.5'},
    {id: 7, img:'imgs/capas/OnePiece.png', tag:'Aventura, Ação', name:'One Piece', rating:'4.5'},
    {id: 8, img:'imgs/capas/Overtake.png', tag:'Corrida, Drama', name:'Hunter x Hunter', rating:'4.5'},
];




// Vou definir um array com os Mangás, let mangaJson = [];
// Dentro desse array, eu irei definir os atributos que precisamos para apresentar o Mangá... {id:N, img: '.../', tag:'', name: '', rating:''}
// Após isso, precisamos chamar esses arquivos .JS no index, utilizando o <script type="text/javascript" src=""></script>
// Vamos precisar esconder o card dos mangás, e chamar ele no lugar que queremos. 
//
// No Script.js, vamos precisar mapear tudo que foi escrito no manga.js, utilizando o 
//       
//      mangaJson.map((item, index))=> {
//
//        let mangaItem = document.querySelector('Aqui vai a div do card').clodeNode(true);
//        - Preencher as informações...

//        - Para alterarmos as informações, vamos precisar fazer assim: 
//        mangaItem.querySelector('Informação que quero mudar').innerHTML = item.name;
//        - Lembrando que, se formos selecionar uma img no Json, trocaremos o innerHTML para src... 
//      
//        document.querySelector('Área que vai ficar o card').append( mangaItem );
//        - Aqui vamos selecionar a área que colocaremos os cards e adicionar com o append.
//
//      }
//