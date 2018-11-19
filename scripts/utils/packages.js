const path = require("path");

const Project = require("@lerna/project");

const { smush, validateIsString } = require("./string");

const rootPath = path.resolve(__dirname, "..", "..");

const npmScope = "@jsport";
const packagePrefix = "lordgun-design-system-";

const toPackageName = str => {
  validateIsString(str);
  return `${npmScope}/${packagePrefix}${smush(str)}`;
};

const getPackages = async () => {
  const project = new Project(rootPath);
  return project.getPackages();
};

module.exports = {
  toPackageName,
  getPackages
};
