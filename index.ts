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

// never -> ok i dunno...can't assign to it?
// const something: never = 3;

// Functions in TypeScript

// optional param
// const sayWord = (word?: string): string => {
//   console.log(word || 'Jello');
//   return word || 'Jello';
// };

// default param
// rest params work as expected
const sayWord = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord('Hello', 'Hey', 'There');

// implicit types
let newName = 'Bill';
newName = 'Wes';

// type from initial declaration
let newNameTwo = newName;

// Union type with |
let thisname: string | number | boolean = 'Alfred';
thisname = 3;

// implicit types just work off the current type, not declared union
let thisOtherName = thisname;
// thisOtherName = false;

const makeMargin = (x: string | number) => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('10');

// Null Types

let dog: string;
dog = 'lucie';

// Interfaces

interface Person {
  name: string;
  age?: number; // optional
}

// destructured interface param
const sayName = ({ name, age }: Person): Person => {
  console.log(name, age);
  return { name, age };
};

sayName({ name: 'Scott', age: 32 });
sayName({ age: 32, name: 'Scott' });

// Enums
// for when you want a limited set of items available

// numeric enum
enum Type {
  Video, //0
  BlogPost, //1
  Quiz, //2
}

console.log(Type.Quiz); // => 2 (looks like java enum's ordinal)

const createContent = (contentType: Type) => {};

// createContent(Video);
// createContent('Video');
createContent(Type.Video);
createContent(0);

// string enum
enum Type2 {
  Video = 'VIDEO', //0
  BlogPost = 'BLOG_POST', //1
  Quiz = 'QUIZ', //2
}

const createContent2 = (contentType: Type2) => {};

createContent2(Type2.Quiz);
// createContent2('QUIZ'); // not going to work, not the _same_ string as the type'd version

// Classes

class Team {
  // default public, or specify with 'public'
  // or readonly = final
  private readonly teamName: string;

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  getTeamName() {
    return this.teamName;
  }

  score(): string {
    console.log('GOOOOOOOOOOAL');
    return 'Goal!';
  }
}

const redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.getTeamName());
