
const contadores=document.querySelectorAll(".contador");
const tempoObejetivo1= new Date("2024-10-05T00:00:00");
const tempoObejetivo2= new Date("2024-12-05T00:00:00");
const tempoObejetivo3= new Date("2024-12-30T00:00:00");
const tempoObejetivo4= new Date("2025-02-01T00:00;00");

const tempos=[tempoObejetivo1,tempoObejetivo2,tempoObejetivo3,tempoObejetivo4];

fuction calculaTempo(tempoObeketivo){
    let tempoAtual= new Date();
    let tempoFinal= tempoObejetivo- tempoAtual;
    let segundos= Math.floor(tempoFinal/1000);
    let minutos= Math.floor(minutos/60);
    
}