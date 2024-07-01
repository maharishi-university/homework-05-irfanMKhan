const isPrime = (n: number): Promise<{ prime: boolean }> => {
  return new Promise((resolve, reject) => {
    if (n <= 1) {
      reject({ prime: false });
    } else {
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
          reject({ prime: false });
          return;
        }
      }
      resolve({ prime: true });
    }
  });
};

const testIsPrime = async (n: number) => {
  console.log("start");
  try {
    const result = await isPrime(n);
    console.log(result.prime);
  } catch (error) {
    console.error(error.prime);
  }
  console.log("end");
};

testIsPrime(17);
testIsPrime(12);
testIsPrime(115);
testIsPrime(97);
