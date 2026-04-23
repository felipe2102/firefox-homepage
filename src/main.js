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

function main() {
    const url1 = "https://c.l3n.co/cQa7XM.jpg";
    const url2 = "https://b.l3n.co/cQaYkc.jpg";
    const url3 = "https://a.l3n.co/cQan9x.png";
    const url4 = "https://b.l3n.co/cQaeik.png";
    const url5 = "https://c.l3n.co/cQaLa1.png";
    const url6 = "https://d.l3n.co/cVPSYM.jpg";
    const url7 = "https://c.l3n.co/cVPl0q.jpg";
    const url8 = "https://b.l3n.co/cVPOfD.jpg";
    const url9 = "https://d.l3n.co/cVPvCa.jpg";
    const url10 = "https://c.l3n.co/cVP7p0.jpg";
    const url11 = "https://c.l3n.co/cVPMxk.jpg";
    const url12 = "https://d.l3n.co/cVPupH.jpg";
    const url13 = "https://c.l3n.co/cVfVTk.jpg";
    const url14 = "https://b.l3n.co/cVf97x.jpg";
    const url15 = "https://a.l3n.co/cVfdUH.jpg";

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
}

main();