function fetchCryptoPrices() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            document.getElementById('bitcoin-price').textContent = `$${data.bitcoin.usd}`;
            document.getElementById('ethereum-price').textContent = `$${data.ethereum.usd}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

window.onload = fetchCryptoPrices;
setInterval(fetchCryptoPrices,600);