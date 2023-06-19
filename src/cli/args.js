const parseArgs = () => {
  const arr = process.argv.slice(2);
  let resultStr = "";

  for (let i = 0; i < arr.length; i += 2) {
    resultStr += `${arr[i].slice(2)} is ${arr[i + 1]}, `;
  }
  console.log(resultStr.slice(0, -2));
};

parseArgs();
