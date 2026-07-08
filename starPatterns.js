// STAR PATTERN 
// 1 .

// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++){
  let row = "";
  for (let j = 0; j < n; j++){
    row = row + "* "
  }
  console.log(row)
}

// 2. 
// *
// * *
// * * *
// * * * *
let n = 4;
for (let i = 0; i < n; i++){
  let row = "";
  for (let j = 0; j < i + 1; j++){
    row = row + "* "
  }
  console.log(row)
}
 

// 3.
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5;
for (let i = 0; i <= n; i++){
  let row = "";
  for (let j = 1; j < i + 1; j++){
    row = row + j
  }
  console.log(row)
}

// 4. 
// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1

let n = 5;
for (let i = 0; i <= n; i++){
  let row = "";
  for (let j = 0; j < n - i; j++){
    row = row + (j + 1);
  }
  console.log(row)
}

// 5. 
// 1
// 2 2
// 3 3 3 
// 4 4 4 4
// 5 5 5 5 5

let n = 5;
for (let i = 1; i < n; i++){
  let row = "";
  for (let j = 0; j < i; j++){
    row = row + i;
  }
  console.log(row)
}
