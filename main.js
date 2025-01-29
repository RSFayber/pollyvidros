const data = [
    {
        title: "PORTA COM TRILHO",
        image: "imagens/produto1.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
    {
        title: "JANELA DE VIDRO",
        image: "imagens/produto2.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
    {
        title: "PORTA GRANDE",
        image: "imagens/produto3.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
    {
        title: "CERCA DE VIDRO",
        image: "imagens/produto4.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
    {
        title: "BOX DE BANHEIRO",
        image: "imagens/produto5.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
    {
        title: "PORTA COM DOBRADIÇA",
        image: "imagens/produto6.png",
        moreInfo: "Detalhes adicionais sobre o produto, como materiais usados, dimensões e opções disponíveis."
    },
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (data) => {
    cardContainer.innerHTML = data.map(e => `
        <div class="card">
            <div class="card-content">
                <img src="${e.image}" alt="${e.title}">
                <h3>${e.title}</h3>
            </div>
            <div class="card-expanded">
                <p>${e.moreInfo}</p>
            </div>
        </div>
    `).join('');
};

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
});

window.addEventListener("load", () => displayData(data));
