let heigh = 5;
let tree = "";

for (let i = 1; i <= heigh; i++){
  for (let j = 0;j < heigh - i; j++) tree +=" ";
  for (let k = 0;k < 2 * i - 1; k++) tree +="*";
  if (i < heigh) tree += "\n";
}
console.log(tree);


