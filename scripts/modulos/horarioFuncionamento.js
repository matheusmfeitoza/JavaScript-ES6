export default function horarioFuncionamento(){
    const getHora = document.querySelector('[data-semana]')
    const semana = getHora.dataset.semana.split(',').map(Number);
    const horario = getHora.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    console.log(dataAgora)
    const diaSemana = semana.indexOf(dataAgora.getDay()) > 0 && semana.indexOf(dataAgora.getDay()) <= 5; 
    const horarioSemana = dataAgora.getHours() > horario[0] && dataAgora.getHours() <= horario[1];
    console.log(diaSemana,horarioSemana )
    if(diaSemana && horarioSemana){
       getHora.classList.add('aberto')
    }
}