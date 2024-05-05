const romanToInt = function (s) {
      const sym = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };

      let num = 0;

      for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
          num += next - cur;
          console.log('num',num)
          i++;
        } else {
          num += cur;
        }
      }

      return num;
}
console.log(romanToInt("CMVII"))