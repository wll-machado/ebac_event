
const dataDoEvento = new Date("jun 17, 2024 07:30:00");
const timeStamp = dataDoEvento.getTime();

const contaHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const distanciaDoEvento = timeStamp - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);

    const horasAteOEvento = Math.floor(distanciaDoEvento % diaEmMs / horaEmMs);

    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutosEmMs);

    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);
    
    document.getElementById('contador').innerHTML = ` ${diasAteOEvento}d : ${horasAteOEvento}h: ${minutosAteOEvento}m: ${segundosAteOEvento}s`;

    if (distanciaDoEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = "Evento Expirado";
    }
},1000);

const button = document.querySelector('.button');

button.addEventListener('click',()=>{
    alert('Presença Confirmada!! Vejo você lá!!');
});