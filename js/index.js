import {
    data
} from "./database.js";

console.table(data)

// criar topo //

function topo() {
    let topr = document.createElement('header')
    topr.setAttribute('class', 'barra')
    document.querySelector('body').appendChild(topr)

    let title = document.createElement('h1')
    title.setAttribute('class', 'titulo')
    let title_name = document.createTextNode('Weartake')
    document.querySelector('.barra').appendChild(title)
    document.querySelector('.titulo').appendChild(title_name)

    let navigation = document.createElement("nav")
    navigation.setAttribute('class', 'cabecalho')
    document.querySelector('header').appendChild(navigation)

    let ref = document.querySelector('.cabecalho')
    ref.innerHTML += `
    <a href="#" target="_self" rel="Todos">Todos</a>
            <a href="#" target="_self" rel="Acessórios">Acessórios</a>
            <a href="#" target="_self" rel="Calçados">Calçados</a>
            <a href="#" target="_self" rel="Camisetas">Camisetas</a>`
    principal()
}
topo()

//cartoes//

function principal() {
    let secao = document.createElement('main')
    document.querySelector('body').append(secao)

    let cartoes = document.createElement('section')
    cartoes.setAttribute('class', 'card')
    document.querySelector('main').appendChild(cartoes)

    let product = document.querySelector('.card')
    for (let i = 0; i < data.length; i++) {
        product.innerHTML += `
         <section class="produto">
        <figure>
            <section class="caixa">
                <img class="imagem" src="` + data[i].img + `" alt="` + data[i].nameItem + ` ">
            </section>
        </figure>
        <section class="detalhe">
            <p class="titulo-produto">` + data[i].tag + `</p>
            <h3 class="title">` + data[i].nameItem + `</h3>
            <p class="descricao-produto">` + data[i].description + `</p>
            <p class="valor-produto">R$ ` + data[i].value + `.00</p>
            <button class="botao">Adicionar ao carrinho</button>
        </section>           
    </section> `
    }
    rodape()
}

//Barra de pesquisar//

function rodape() {
    let rodape_final = document.createElement('footer')
    document.querySelector('main').appendChild(rodape_final)

    let pesquisar = document.createElement('section')
    document.querySelector('footer').appendChild(pesquisar)
    pesquisar.setAttribute("class", "but")


    let hold = document.createElement('input')
    hold.setAttribute('class', 'barrinha')
    hold.setAttribute('placeholder', 'digite aqui sua pesquisa')
    document.querySelector('.but').appendChild(hold)

    let bot = document.createElement('button')
    bot.setAttribute("class", "search")
    document.querySelector('.but').appendChild(bot)

    let bot_search = document.createTextNode('pesquisar')
    document.querySelector('.but').appendChild(bot)
    document.querySelector('.search').appendChild(bot_search)

    cart()
}

//carrinho de compras  array para o carrinho //

function cart() {

    let sec = document.createElement('section')
    sec.setAttribute('class', 'carrinho')
    document.querySelector('footer').appendChild(sec)



    let subtitulo = document.createElement('h3')
    subtitulo.setAttribute('class', 'bot')

    let subtitulo_title = document.createTextNode('Carrinho de Compras')
    document.querySelector('.carrinho').appendChild(subtitulo)
    document.querySelector('.bot').appendChild(subtitulo_title)

    let divisa = document.createElement('div')
    divisa.setAttribute('class', 'divisao')
    document.querySelector('footer').appendChild(divisa)

    //Parte final do carrinho//


    let final = document.createElement('section')
    final.setAttribute('class', 'final-carrinho')
    document.querySelector('footer').appendChild(final)

    let final_1 = document.createElement('section')
    final_1.setAttribute('class', 'quantidade-produto')
    document.querySelector('.final-carrinho').appendChild(final_1)

    let paragrafo = document.createElement('p')
    let paragrafo_2 = document.createTextNode('Quantidade :')
    paragrafo.setAttribute("class", "paragraf")
    document.querySelector('.quantidade-produto').appendChild(paragrafo)
    document.querySelector(".paragraf").appendChild(paragrafo_2)

    let paragrafo_3 = document.createElement('p')
    let paragrafo_4 = document.createTextNode('0')
    paragrafo_3.setAttribute("class", "paragrafi")
    document.querySelector('.quantidade-produto').appendChild(paragrafo_3)
    document.querySelector(".paragrafi").appendChild(paragrafo_4)

    let final_2 = document.createElement('section')
    final_2.setAttribute('class', 'total-compra')
    document.querySelector('.final-carrinho').appendChild(final_2)

    let paragrafo_5 = document.createElement('p')
    let paragrafo_6 = document.createTextNode('Total :')
    paragrafo_5.setAttribute("class", "paragrafiii")
    document.querySelector('.total-compra').appendChild(paragrafo_5)
    document.querySelector(".paragrafiii").appendChild(paragrafo_6)


    let paragrafo_7 = document.createElement('p')
    let paragrafo_8 = document.createTextNode('R$ 0.00')
    paragrafo_7.setAttribute("class", "paragrafii")
    document.querySelector('.total-compra').appendChild(paragrafo_7)
    document.querySelector(".paragrafii").appendChild(paragrafo_8)


    let final_3 = document.createElement('section')
    final_3.setAttribute('class', 'nona')
    document.querySelector('.final-carrinho').appendChild(final_3)

    let bat = document.createElement('button')
    let butttom = document.createTextNode('Finalizar Compra')
    bat.setAttribute("class", "finalizar")
    document.querySelector('.nona').appendChild(bat)
    document.querySelector('.nona').appendChild(butttom)
}
ready()

function ready() {
    let removeCartButton = document.querySelectorAll('.remove')
    for (let i = 0; i < removeCartButton.length; i++) {
        let butao = removeCartButton[i]
        butao.addEventListener('click', removeCartItem);

    }
    let addCart = document.querySelectorAll('.botao')
    for (let i = 0; i < addCart.length; i++) {
        let buton = addCart[i];
        buton.addEventListener("click", addCartClicked);
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    let imagi = buttonClicked.parentElement
    imagi.parentElement.remove()
    updatetotal()
}

function addCartClicked(event) {
    console.log(event)
    let buton = event.target;
    let shopProducts = buton.parentElement;
    let imege = shopProducts.parentElement;
    console.log(imege)
    let tite = imege.querySelectorAll(".title")[0].innerText;
    let prec = imege.querySelectorAll(".valor-produto")[0].innerText;
    let imagen = imege.querySelectorAll(".imagem")[0].src;
    addProductToCart(tite, prec, imagen);
}

function addProductToCart(tite, prec, imagen) {
    console.log(tite, prec, imagen)
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    let cartItems = document.querySelectorAll('.divisao')[0]
    let cartItemsNames = cartItems.querySelectorAll(".title")
    for (let i = 0; i < cartItemsNames.length; i++) {
        return;
    }
    // add eventlistenner button class remove
    let cartBoxContent = `   <figure class="tamanho-caixa">
    <img src=${imagen} alt="Jaqueta Masculina preta ">
    </figure>
    <section class="descricao-compra">
    <h3 class="nome">${tite}</h3>
    <p class="value">${prec}</p>
    <button class="remove">Remover produto</button>  
    </section>
    </section>`

    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    console.log(cartShopBox)
    cartShopBox.querySelectorAll(".remove")[0].addEventListener('click', removeCartItem);
    updatetotal()
}

function updatetotal() {
    let cartContent = document.querySelectorAll('.cart-box')
    let total = 0
    let quantidade = 0
    for (let index = 0; index < cartContent.length; index++) {
        let number = cartContent[index]
        let preco_elemento = number.querySelector('.value')
        let price_value = parseFloat(preco_elemento.innerText.replace('R$ ', ''))
        total += price_value
        quantidade += 1
    }
    document.querySelector('.paragrafii').innerHTML = 'R$ ' + total.toFixed(2)
    document.querySelector('.paragrafi').innerHTML = quantidade
}
