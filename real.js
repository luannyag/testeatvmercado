document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".header-bottom-side-left .banner");
    let currentBannerIndex = 0;
    const bannerInterval = 5000; // Tempo em milissegundos entre cada troca de banner
    let bannerLoop;

    function showBanner(index) {
        for (let i = 0; i < banners.length; i++) {
            banners[i].classList.remove('active');
        }
        banners[index].classList.add('active');
    }

    function showNextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    }

    function showPrevBanner() {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
        showBanner(currentBannerIndex);
    }

    function startBannerLoop() {
        clearInterval(bannerLoop);
        bannerLoop = setInterval(showNextBanner, bannerInterval);
    }

    startBannerLoop(); // Inicia o loop de banners quando a página carrega

    const arrowPrev = document.getElementById("arrow-prev");
    const arrowNext = document.getElementById("arrow-next");

    arrowPrev.addEventListener("click", function() {
        showPrevBanner();
        startBannerLoop(); // Reinicia o loop ao clicar na seta
    });

    arrowNext.addEventListener("click", function() {
        showNextBanner();
        startBannerLoop(); // Reinicia o loop ao clicar na seta
    });

    // Exibir o primeiro banner ao carregar a página
    showBanner(currentBannerIndex);
});

function produtos(){
    window.location.href = "produtos.html"
}

function bebidas(){
    window.location.href = 'bebidas.html'
}

function hortifruti(){
    window.location.href = 'hortifruti.html'
}

function limpeza(){
    window.location.href = 'limpeza.html'
}

function congelados(){
    window.location.href = 'congelados.html'
}

function carrinho(){
    window.location.href = 'testecarrinho.html'
}

function basicos(){
    window.location.href = 'basicos.html'
}

function higiene(){
    window.location.href = 'higiene.html'
}

function eletrodomesticos(){
    window.location.href = 'eletrodomesticos.html'
}

function graos(){
    window.location.href = 'graos.html'
}

function mercearia(){
    window.location.href = 'mercearia.html'
}

function home(){
    window.location.href = 'index.html'
}

function login(){
    window.location.href = 'login.html'
}
document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionarCarrinho = document.querySelectorAll('.add-btn');
    const popup = document.getElementById("popup");

    botoesAdicionarCarrinho.forEach(botao => {
        botao.addEventListener('click', function() {
            adicionarItemAoCarrinho(botao);
            popup.style.display = "block";
            setTimeout(function() {
                popup.style.display = "none";
            }, 2000); //pop-up por 2 segundos
        });
    });

    function adicionarItemAoCarrinho(botao) {
        const produto = botao.closest('.produto');
        const nome = produto.querySelector('h3').textContent;
        const preco = produto.querySelector('.preço').textContent;
        const imagem = produto.querySelector('img').src;
        const idImagem = produto.querySelector('img').getAttribute('id');

        const itemCarrinho = {
            id: idImagem,
            nome: nome,
            preco: preco,
            imagem: imagem
        };

        let itensCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || [];

        itensCarrinho.push(itemCarrinho);

        localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    }
});

const itensCarrinho = [];




