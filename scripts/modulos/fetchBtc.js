export default function fetchBtc(url, seletor) {
  async function getBtc() {
    try {
      const getResponse = await fetch(url);
      const getDados = await getResponse.json();
      const getBtcInHtml = document.querySelector(seletor);

      getBtcInHtml.innerText = (100 / getDados.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  return getBtc();
}
