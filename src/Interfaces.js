"use strict";
exports.__esModule = true;
exports.Job = void 0;
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["Engineer"] = 2] = "Engineer";
})(Job = exports.Job || (exports.Job = {}));
// doesn't work, have to define before you can export
// same with arrow functions
// export default enum Job {
//   WebDev,
//   WebDesigner,
//   Engineer,
// }
exports["default"] = Job;
