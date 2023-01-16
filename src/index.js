"use strict";
exports.__esModule = true;
var Interfaces_1 = require("./Interfaces");
var isOpen = false;
// this fails because name is defined on the window object already
// const name: string = 'Scott';
var theName = 'Scott';
var anAge = 37;
var alsoAge = 35.06;
var list = [0, 1, 2];
// tuple
var me = [theName, anAge, false];
//enum
// enum Job {
//   WebDev,
//   WebDesigner,
//   Engineer,
// }
var job = Interfaces_1["default"].Engineer;
var phone = 'iPhone';
var tablet = 3;
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
var sayWord = function (word) {
    if (word === void 0) { word = 'Hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayWord('Hello', 'Hey', 'There');
// implicit types
var newName = 'Bill';
newName = 'Wes';
// type from initial declaration
var newNameTwo = newName;
// Union type with |
var thisname = 'Alfred';
thisname = 3;
// implicit types just work off the current type, not declared union
var thisOtherName = thisname;
// thisOtherName = false;
var makeMargin = function (x) {
    return "margin: ".concat(x, "px;");
};
makeMargin(10);
makeMargin('10');
// Null Types
var dog;
dog = 'lucie';
// Interfaces
// interface Person {
//   name: string;
//   age?: number; // optional
// }
// destructured interface param
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
    return { name: name, age: age };
};
sayName({ name: 'Scott', age: 32 });
sayName({ age: 32, name: 'Scott' });
// Enums
// for when you want a limited set of items available
// numeric enum
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
console.log(Type.Quiz); // => 2 (looks like java enum's ordinal)
var createContent = function (contentType) { };
// createContent(Video);
// createContent('Video');
createContent(Type.Video);
createContent(0);
// string enum
var Type2;
(function (Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type2 || (Type2 = {}));
var createContent2 = function (contentType) { };
createContent2(Type2.Quiz);
// createContent2('QUIZ'); // not going to work, not the _same_ string as the type'd version
// Classes
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.getTeamName = function () {
        return this.teamName;
    };
    Team.prototype.score = function () {
        console.log('GOOOOOOOOOOAL');
        return 'Goal!';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
console.log(redWings.getTeamName());
