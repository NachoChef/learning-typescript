export interface Person {
  name: string;
  age?: number; // optional
}

export enum Job {
  WebDev,
  WebDesigner,
  Engineer,
}

// doesn't work, have to define before you can export
// same with arrow functions
// export default enum Job {
//   WebDev,
//   WebDesigner,
//   Engineer,
// }

export default Job;
