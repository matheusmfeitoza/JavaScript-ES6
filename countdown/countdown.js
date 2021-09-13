export default class countdown {
  constructor(date) {
    this._date = date;
  }
  get _getFutureDate() {
    return new Date(this._date);
  }
  get _actualDate() {
    return new Date();
  }
  get _timeStamp() {
    return this._getFutureDate.getTime() - this._actualDate.getTime();
  }
  get _day() {
    return Math.floor(this._timeStamp / (24 * 60 * 60 * 1000));
  }
  get _hours() {
    return Math.floor(this._timeStamp / (60 * 60 * 1000));
  }
  get _minutes() {
    return Math.floor(this._timeStamp / (60 * 1000));
  }
  get _seconds() {
    return Math.floor(this._timeStamp / 1000);
  }

  get total() {
    const days = this._day;
    const hours = this._hours % 24;
    const minutes = this._minutes % 60;
    const seconds = this._seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
