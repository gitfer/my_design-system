import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

const req = require.context(
  "../packages",
  true,
  /^((?![\\/]node_modules|dist[\\/]).)*\.story.js$/
);

console.trace("================================== ", req.keys());

function loadStories() {
  // console.trace("==================================req", filename);
  req.keys().forEach(filename => {
    console.trace("================================== filename: ", filename);
    return req(filename);
  });
}

configure(loadStories, module);
