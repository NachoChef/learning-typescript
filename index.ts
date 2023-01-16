const isOpen: boolean = false;
// this fails because name is defined on the window object already
// const name: string = 'Scott';
const theName: string = 'Scott';

const anAge: number = 37;
const alsoAge: number = 35.06;

const list: number[] = [0, 1, 2];

// tuple
const me: [string, number, boolean] = [theName, anAge, false];

//enum
enum Job {
  WebDev,
  WebDesigner,
  Engineer,
}
const job: Job = Job.Engineer;

const phone: any = 'iPhone';
const tablet: any = 3;

// never -> ok i dunno...can't assign to it? none?
// const something: never = 3;
