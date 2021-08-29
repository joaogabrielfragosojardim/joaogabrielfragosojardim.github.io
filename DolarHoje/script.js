let urlApi = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
let dolarValue = document.getElementById("Dolar");
let realValue = 1
let realValueConvert = parseFloat(realValue).toFixed(2) 
realValueConvert = realValueConvert.toString().replace(".", ",")

fetch(urlApi)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let price = data.USDBRL.high;
    let priceConvert= parseFloat(price);
    priceConvert = priceConvert.toFixed(2);
    priceConvert = priceConvert.toString().replace(".", ",")
    dolarValue.innerHTML = `$${realValueConvert} custa R$${priceConvert}`

  });
