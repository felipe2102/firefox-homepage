let ativo = 0;
function change_paper(url){
    const bg1 = document.getElementById("i_bg1")
    const bg2 = document.getElementById("i_bg2");
    const string_url = `url("${url}")` 

    const novo = ativo === 1 ? bg2:bg1;
    const antigo = ativo === 1? bg1:bg2;

    novo.style.backgroundImage = `url('${url}')`;
    novo.style.opacity = 1;
    novo.style.transform = "scale(1.05)";
    antigo.style.transform = "scale(1)";

    antigo.style.opacity = 0;
    ativo = ativo === 1 ? 2:1;
    console.log("changed paper!")
}

function get_weather() {
    const weatherCodes = {
        0: "Céu limpo",

        1: "Poucas nuvens",
        2: "Parcialmente nublado",
        3: "Nublado",

        45: "Neblina",
        48: "Neblina",

        51: "Garoa",
        53: "Garoa",
        55: "Garoa intensa",

        61: "Chuva fraca",
        63: "Chuva moderada",
        65: "Chuva forte",

        80: "Pancadas de chuva",
        81: "Pancadas de chuva",
        82: "Chuva intensa",

        95: "Tempestade",
        96: "Tempestade com granizo",
        99: "Tempestade forte"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-20.3297&longitude=-40.2925&current=temperature_2m,weather_code&timezone=America%2FSao_Paulo&forecast_days=1")
        .then(response => response.json())
        .then(data => {
            console.log(data.current.temperature_2m);
            console.log(data.current.weather_code);

            document.getElementById("temperature").innerHTML = Math.round(data.current.temperature_2m) + "°C";

            document.getElementById("condition").innerHTML = weatherCodes[data.current.weather_code];
        });
}

function main() {
    const url1 = "/resources/wallpapers/01.jpg";
    const url2 = "/resources/wallpapers/02.jpg";
    const url3 = "/resources/wallpapers/03.jpg";
    const url4 = "/resources/wallpapers/04.jpg";
    const url5 = "../resources/wallpapers/05.png";
    const url6 = "../resources/wallpapers/06.png";
    const url7 = "../resources/wallpapers/07.jpeg";
    const url8 = "../resources/wallpapers/08.jpg";
    const url9 = "../resources/wallpapers/09.jpg";
    const url10 = "../resources/wallpapers/10.jpg";
    const url11 = "../resources/wallpapers/11.jpg";
    const url12 = "../resources/wallpapers/12.jpg";
    const url13 = "../resources/wallpapers/13.jpg";
    const url14 = "../resources/wallpapers/14.jpg";
    const url15 = "../resources/wallpapers/15.png";

    const urls = [
        url1,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
        url9,
        url10,
        url11,
        url12,
        url13,
        url14,
        url15,
    ];
    let current = Math.floor(Math.random() * urls.length);
    document.addEventListener("DOMContentLoaded", () => {change_paper(urls[current])});
    get_weather();
}

main();
