export default class HorarioFuncionamento {
  constructor(hora, semana, horario) {
    this.getHora = document.querySelector(hora);
    if (semana === undefined) {
      this.semana = "1,2,3,4,5";
    } else {
      this.semana = semana;
    }
    if (horario === undefined) {
      this.horario = "8,18";
    } else {
      this.horario = horario;
    }
  }

  horaFuncionamento() {
    this.semana = this.semana.split(",").map(Number);
    this.horario = this.horario.split(",").map(Number);

    const dataAgora = new Date();
    const diaSemana =
      this.semana.indexOf(dataAgora.getDay()) >= 0 &&
      this.semana.indexOf(dataAgora.getDay()) <= 5;
    const horarioSemana =
      dataAgora.getHours() > this.horario[0] &&
      dataAgora.getHours() <= this.horario[1];
    if (diaSemana && horarioSemana) {
      this.getHora.classList.add("aberto");
    }
  }

  init() {
    this.horaFuncionamento();
    return this;
  }
}
