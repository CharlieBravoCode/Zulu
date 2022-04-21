
export class Event {
    constructor(
      public identifier: string,
      public title: string,
      public location: string,
      public latitud: number,
      public longitud: number,
      public id?: number,
      ) { }
  }