const getData = async () => {
    const accessKey = "dc85910e763b5772d9052200a7c504d7";
    let response = await fetch(`http://api.coinlayer.com/api/live?access_key=${accessKey}`)
    let data = await response.json();
    return data;
}

// Create constants to hold DOM elements
const DOMElements = {
    cryptoList : ".crypto-card-div",
}

const createList = (name, rate) => {
    const html = `
        <div class="card col-lg-2 col-md-3 col-sm-5 bg-primary text-white">
            <div class="card-body">
                <h4 class="card-title">${name}</h5>
                <p class="card-text">${rate}</p>
            </div>
        </div>
    `;
    document.querySelector(DOMElements.cryptoList).insertAdjacentHTML('beforeend', html);        
}

const loadData = async () => {
    const cryptos = await getData();
    let count = 0;
    let cryptoList = cryptos['rates'];
    for (const crypto in cryptoList) {
        createList(crypto, cryptoList[crypto]);
        count++;
    }

}

const clearData = () => {
    document.querySelector(DOMElements.cryptoList).innerHTML = '';
}

loadData();