const url = 'https://randomuser.me/api/?results=10';

async function getUsers(lista) {                                                //cria uma funcao que vai pegar a informacao (usuarios) que vai jogar nessa lista (eh uma lista html) de forma assincrona
    const resp = await fetch(url);                                              //declara a constante resp. await fetch(url): estamos chamando a url - de forma assincrona, e recebemos uma promise - uma promessa de resposta, mas q nao ta pronta ainda
    const objeto = await resp.json();                                           //declara a constante objeto. e ai com esse resp nos fazemos a mesma coisa e recebemos mais uma promessa, vamos esperar a resposta no formato json, que ja vem como objeto. isso pq estamos usando fetch, o fetch vai: await fetch, pesou ai dai eh fetch .json, ja pegou a resposta json. lembrando que temos que usar async await pq ele trabalha com as palavras da forma sincrona

    let itens ="";                                                              //recebendo a resposta json, temos os itens q sao itens da nossa lista, declara a variavel itens
    for(let pessoa of objeto.results){                                          //declarou pessoa, que eh a variavel q vamos aplicar as info de cada item que vai p lista. 
        itens += `<li>${pessoa.name.title} ${pessoa.name.first} ${pessoa.name.last}</li>`;           //esse results eh um vetor da randomuser, um vetor composto por varios objetos, onde cada objeto eh uma pessoa que tem informacoes q tb se dividem
    }                                                                           //ou seja, estamos navengando nos atributos do objeto, e temos um vetor daquele objeto que por acaso - pq escolhemos no url - vai ter 10 posicoes
    document.getElementById(lista).innerHTML = itens;                           //ai apos ele pegar todos os itens, a gente coloca eles como um innerhtml da lista, pois temos uma <ul> e dentro dela estamos colocando os <li> de uma vez so no inner html
}