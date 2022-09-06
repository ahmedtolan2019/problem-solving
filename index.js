import solution from "./solutions/index.js";

/************************* prepare input ****************************/
// [val, [left], [right]]
let root = [4, [3, 4], [1]];

//define a tree node
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let input = new TreeNode(
  root[0],
  new TreeNode(...root[1]),
  new TreeNode(...root[2])
);

/************************* run solution ****************************/
let output = solution(input);

/************************* output ****************************/
console.log("input: ", input);
console.log("output: ", output);
