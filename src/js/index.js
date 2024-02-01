const configuracao = document.getElementById("config");

const words = [
    "src/txt/br-utf8.txt",
    "src/txt/english.txt"
];

let txt = (words[Math.floor(Math.random() * words.length)]);
let espacoPalavraPC = document.getElementById("palavraPC");
let espacoPalavraMob = document.getElementById("palavraMob");
let palavraGeradaParaPC = "";
let palavraGeradaParaMobile = "";
let copiarMobile = document.getElementById("copiarMob");
let copiarComputador = document.getElementById("copiarPC");
let numeroP = "";
let numeroM = "";
let cont = 0;
let contM = 0
let vetor = "off";
let corFundoPC = document.getElementById("telaPC")
let corFundoMob = document.getElementById("telaMob")
let arrayTXT;

corFundoPC.classList.add("palPcor");
corFundoMob.classList.add("palMcor");

function definirCaractereAleatorio() {
    cont++;
    contM++;
    cta = (vetor[(Math.floor(Math.random() * vetor.length))]);
};

function limpar() {
    espacoPalavraPC.textContent = "";
    espacoPalavraMob.textContent = "";
    document.getElementById("AP").classList.remove("APc")
    copiarComputador.style = " background-color: darkgray;"
    copiarMobile.style = "background-color: whitesmoke;";
    document.getElementById("Qp").value = "";
    document.getElementById("Qm").value = "";
    numeroP = 30;
    numeroM = 20;
    cont = 0;
    contM = 0;
    corFundoPC.classList.remove("letrasPCor");
    corFundoMob.classList.remove("letrasMCor");
    corFundoPC.classList.remove("numerosPCor");
    corFundoMob.classList.remove("numerosMCor");
    corFundoPC.classList.remove("letrasNumerosPCor");
    corFundoMob.classList.remove("letrasNumerosMCor");
    corFundoPC.classList.remove("diversosPCor");
    corFundoMob.classList.remove("diversosMCor");
    corFundoPC.classList.remove("alfabetosPCor");
    corFundoMob.classList.remove("alfabetosMCor");
    corFundoPC.classList.remove("palPcor");
    corFundoMob.classList.remove("palMcor");
    document.getElementById("Qp").classList.remove("bloquear");
    document.getElementById("Qm").classList.remove("bloquear");
};

document.getElementById("pal").addEventListener("click", () => {
    txt = (words[Math.floor(Math.random() * words.length)]);
    fetch(txt)
        .then((res) => res.text())
        .then((data) => {
            (arrayTXT = data.split(/\r?\n/));
            definirPalavras();
        });
});

document.getElementById("letras_numeros").addEventListener("click", () => {
    limpar();
    corFundoPC.classList.add("letrasNumerosPCor");
    corFundoMob.classList.add("letrasNumerosMCor");
    vetor = letras_E_numeros;
    definirMob();
    cont = 0;
    definirPC();
});

document.getElementById("letras").addEventListener("click", () => {
    limpar();
    corFundoPC.classList.add("letrasPCor");
    corFundoMob.classList.add("letrasMCor");
    vetor = letras;
    definirMob();
    cont = 0;
    definirPC();
});

document.getElementById("numeros").addEventListener("click", () => {
    limpar();
    corFundoPC.classList.add("numerosPCor");
    corFundoMob.classList.add("numerosMCor");
    vetor = numeros;
    definirMob();
    cont = 0;
    definirPC();
});

document.getElementById("diversos").addEventListener("click", () => {
    limpar();
    corFundoPC.classList.add("diversosPCor");
    corFundoMob.classList.add("diversosMCor");
    vetor = caracteres;
    definirMob();
    cont = 0;
    definirPC();
});

document.getElementById("alf").addEventListener("click", () => {
    limpar();
    corFundoPC.classList.add("alfabetosPCor");
    corFundoMob.classList.add("alfabetosMCor");
    vetor = alfabetosPlus;
    definirMob();
    cont = 0;
    definirPC();
})

function numeroTrocadoPC() {
    cont = 0;
    espacoPalavraPC.textContent = "";
    document.getElementById("AP").classList.remove("APc")
    copiarComputador.style = " background-color: darkgray;";
    numeroP = document.getElementById("Qp").value;

    switch (document.getElementById("Qp").value) {
        case "":
            numeroP = 30;
            break;
    }
    definirPC();
};

function numeroTrocadoMob() {
    contM = 0;
    espacoPalavraMob.textContent = "";
    copiarMobile.style = "background-color: whitesmoke;";
    numeroM = document.getElementById("Qm").value;
    switch (document.getElementById("Qm").value) {
        case "":
            numeroM = 20;
            break;
    }
    definirMob();
};

configuracao.addEventListener("click", () => {
    if (configuracao.textContent === "☰") {
        configuracao.textContent = "☷";
    } else {
        configuracao.textContent = "☰";
    };

    document.getElementById("configLista").classList.toggle("hidden");
});

function definirPC() {
    while (cont < numeroP) {
        definirCaractereAleatorio()
        espacoPalavraPC.textContent += cta;
    };
};

function definirMob() {
    while (contM < numeroM) {
        definirCaractereAleatorio();
        espacoPalavraMob.textContent += cta;
    };
};

copiarComputador.addEventListener("click", function () {
    palavraGeradaParaPC = espacoPalavraPC.textContent;
    copiarPalavra(palavraGeradaParaPC);
    copiarComputador.textContent = "Copiado!";
    copiarComputador.style = "background-color: #50C878; font-size: xx-small;";
    document.getElementById("AP").classList.add("APc");
    document.getElementById("configLista").classList.add("bloquear");
    setTimeout(function () {
        copiarComputador.textContent = "⧉ 🖥️";
        copiarComputador.style = "background-color: #50C878; font-size: small;";
        document.getElementById("configLista").classList.remove("bloquear");

        switch (vetor) {
            case "off":
                defPC();
                break;
            default:
                cont = 0;
                espacoPalavraPC.textContent = "";
                definirPC();
        }
        document.getElementById("AP").classList.remove("APc")
        copiarComputador.style = " background-color: darkgray;"
    }, 2000);
});

copiarMobile.addEventListener("click", function () {
    palavraGeradaParaMobile = espacoPalavraMob.textContent;
    copiarPalavra(palavraGeradaParaMobile);
    copiarMobile.textContent = "Copiado!";
    copiarMobile.style = "background-color: #50c896; font-size: xx-small;";
    document.getElementById("configLista").classList.add("bloquear");
    setTimeout(function () {
        copiarMobile.textContent = "⧉ 📱";
        copiarMobile.style = "background-color: #50c896; font-size: small;";
        document.getElementById("configLista").classList.remove("bloquear");

        switch (vetor) {
            case "off":
                defMob();
                break;
            default:
                contM = 0;
                espacoPalavraMob.textContent = "";

                definirMob();
        }
        copiarMobile.style = "background-color: whitesmoke;";
    }, 2000);
});

function copiarPalavra(pal) {
    let palavraTemp = document.createElement("input");
    palavraTemp.value = pal;
    document.body.appendChild(palavraTemp);
    palavraTemp.select();
    document.execCommand("copy");
    document.body.removeChild(palavraTemp);
}

function videoTuto() {
    document.getElementById("tutoV").classList.toggle("hidden");
    document.getElementById("fecharTutoV").classList.toggle("hidden");
    document.getElementById("tutoV").setAttribute("src", "https://www.youtube.com/embed/FdQS9uAtY3o?si=HA3_jbbo3UuuWB8x");
};

function tarefas() {
    window.open("listaR.html");
}

fetch(txt)
    .then((res) => res.text())
    .then((data) => {
        (arrayTXT = data.split(/\r?\n/));
        definirPalavras();
    });

function definirPalavras() {
    limpar();
    document.getElementById("Qp").classList.add("bloquear");
    document.getElementById("Qm").classList.add("bloquear");
    vetor = "off";
    corFundoPC.classList.add("palPcor");
    corFundoMob.classList.add("palMcor");
    defMob();
    defPC();
};

function defMob() {
    espacoPalavraMob.textContent = (arrayTXT[Math.floor(Math.random() * arrayTXT.length)]);
};

function defPC() {
    espacoPalavraPC.textContent = (arrayTXT[Math.floor(Math.random() * arrayTXT.length)]);
};