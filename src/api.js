// Asignamor la url de la API de donde vamos a tomar todos los valores
const url = "https://api.coincap.io/v2";

// Acceder a la lista de assets o coins del API
function getAssets() {
  return fetch(`${url}/assets?limit=20`) /* Se hace la consulta */
    .then((res) => res.json()) /* Si tiene un resultado lo convierte en json */
    .then((res) => res.data); /* Se separa la data que es lo que nos interesa */
  // data ya esta definido por la misma pagina de donde se optiene el API
}

// Acceder al asset o coin de la API
function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Acceder al historia de asset o coin de la API
function getAssetHistory(coin) {
  const now = new Date(); // Inicializa una nueva fecha
  const end = now.getTime(); // Obtiene la fecha actual
  now.setDate(now.getDate() - 1); // Coloca la fecha de un dia anterior a la actual con el -1
  const start = now.getTime(); // Obtiene la fecha actual menos un dia

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

// Acceder los mercados de ofertas del API
function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

// Nos devolvera un exchange en particular a partir de un id, este idviene del endpoint de getMarkets
function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};

// ---- Importamos la API donde vayamos a ver los resultados en este caso getAssets en Home.vue
