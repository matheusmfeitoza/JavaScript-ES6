export default function fetchBtc() {
  async function getBtc() {
    const getResponse = await fetch("https://blockchain.info/ticker");
    const getDados = await getResponse.json();
    const getBtcInHtml = document.querySelector(".btc-price");

    getBtcInHtml.innerText = (100 / getDados.BRL.sell).toFixed(4);
  }
  getBtc();
}
