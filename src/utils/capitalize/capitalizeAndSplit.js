import capitalize from "./capitalize";

const capitalizeAndSplit = (str) => str.split('_').map(capitalize).join(' ');
export default capitalizeAndSplit;