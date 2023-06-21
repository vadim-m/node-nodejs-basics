const parseEnv = () => {
  const resultArr = [];
  for (let prop in process.env) {
    if (prop.includes("RSS_")) {
      resultArr.push(`${prop}=${process.env[prop]}`);
    }
  }
  console.log(resultArr.join("; "));
};

parseEnv();
