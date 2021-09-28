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
  }

  horaAgora() {
    this.dataAgora = new Date();
    this.diaSemanaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  verificaFuncionamento() {
    const semanaAberto = this.semana.indexOf(this.diaSemanaAgora) !== -1;
    const horarioAberto =
      this.horaAgora >= this.horario[0] && this.horaAgora < this.horario[1];
    return semanaAberto && horarioAberto;
  }

  // const dataAgora = new Date();
  // const diaSemana = this.semana.indexOf(dataAgora.getDay()) !== -1;
  // const horarioSemana =
  //   dataAgora.getHours() > this.horario[0] &&
  //   dataAgora.getHours() <= this.horario[1];

  ativaFuncionamento() {
    if (this.verificaFuncionamento()) {
      this.getHora.classList.add("aberto");
    }
  }

  init() {
    if (this.getHora) {
      this.horaFuncionamento();
      this.horaAgora();
      this.ativaFuncionamento();
    }
    return this;
  }
}
