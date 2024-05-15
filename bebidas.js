function toggleSubcategorias() {
    var subcategorias = document.getElementById("subcategorias");
    var arrow = document.getElementById("arrow");

    if (subcategorias.style.display === "none") {
        subcategorias.style.display = "block";
        arrow.innerHTML = "&#9650;";
    } else {
        subcategorias.style.display = "none";
        arrow.innerHTML = "&#9660;";
    }
}


function filtrarItens(clickedCheckbox) {
    var produtos = document.querySelectorAll('.produto');
    var checkboxes = document.querySelectorAll('.subcategoria input[type="checkbox"]');

    // Desmarca todos os outros checkboxes
    checkboxes.forEach(function(checkbox) {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });

    // Filtra os produtos
    produtos.forEach(function(produto) {
        if (clickedCheckbox.checked) {
            if (produto.classList.contains(clickedCheckbox.name) || clickedCheckbox.name === "todos") {
                produto.style.display = 'inline-block';
            } else {
                produto.style.display = 'none';
            }
        } else {
            produto.style.display = 'inline-block'; // Se nenhum checkbox estiver marcado, mostra todos os produtos
        }
    });
}

function home(){
    window.location.href = "index.html"
}

function produtos(){
    window.location.href = 'produtos.html'
}

function bebidas(){
    window.location.href = 'bebidas.html'
}

function mercearia(){
    window.location.href = 'mercearia.html'
}

function graos(){
    window.location.href = 'graos.html'
}

function limpeza(){
    window.location.href = 'limpeza.html'
}

function congelados(){
    window.location.href = 'congelados.html'
}

function higiene(){
    window.location.href = 'higiene.html'
}

function eletrodomesticos(){
    window.location.href = 'eletrodomesticos.html'
}

function hortifruti(){
    window.location.href = 'hortifruti.html'
}

function basicos(){
    window.location.href = 'basicos.html'
}

function login(){
    window.location.href = 'login.html'
}