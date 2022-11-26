const ali2obj = (ali) => { return (ali in REGALI_MAP ? REGALI_MAP[ali] : null); }
const val2obj = (val) => { return (val.toString() in REGVAL_MAP ? REGVAL_MAP[val.toString()] : REGVAL_MAP["1"] ); }

const REGALI_MAP = {
  "zero": {
     "val": 0,
     "des": "constant value 0"
  },
  "ra": {
     "val": 1,
     "des": "return address"
  },
  "sp": {
     "val": 2,
     "des": "stack pointer"
  },
  "gp": {
     "val": 3,
     "des": "global pointer"
  },
  "tp": {
     "val": 4,
     "des": "thread pointer"
  },
  "t0": {
     "val": 5,
     "des": "temporaries"
  },
  "t1": {
     "val": 6,
     "des": "temporaries"
  },
  "t2": {
     "val": 7,
     "des": "temporaries"
  },
  "s0/fp": {
     "val": 8,
     "des": "saved register / frame pointer"
  },
  "s1": {
     "val": 9,
     "des": "saved register"
  },
  "a0": {
     "val": 10,
     "des": "function arguments / return value"
  },
  "a1": {
     "val": 11,
     "des": "function arguments"
  },
  "a2": {
     "val": 12,
     "des": "function arguments"
  },
  "a3": {
     "val": 13,
     "des": "function arguments"
  },
  "a4": {
     "val": 14,
     "des": "function arguments"
  },
  "a5": {
     "val": 15,
     "des": "function arguments"
  },
  "a6": {
     "val": 16,
     "des": "function arguments"
  },
  "a7": {
     "val": 17,
     "des": "function arguments"
  },
  "s2": {
     "val": 18,
     "des": "saved registers"
  },
  "s3": {
     "val": 19,
     "des": "saved registers"
  },
  "s4": {
     "val": 20,
     "des": "saved registers"
  },
  "s5": {
     "val": 21,
     "des": "saved registers"
  },
  "s6": {
     "val": 22,
     "des": "saved registers"
  },
  "s7": {
     "val": 23,
     "des": "saved registers"
  },
  "s8": {
     "val": 24,
     "des": "saved registers"
  },
  "s9": {
     "val": 25,
     "des": "saved registers"
  },
  "s10": {
     "val": 26,
     "des": "saved registers"
  },
  "s11": {
     "val": 27,
     "des": "saved registers"
  },
  "t3": {
     "val": 28,
     "des": "temporaries"
  },
  "t4": {
     "val": 29,
     "des": "temporaries"
  },
  "t5": {
     "val": 30,
     "des": "temporaries"
  },
  "t6": {
     "val": 31,
     "des": "temporaries"
  }
};

const REGVAL_MAP = {
  "0": {
     "des": "constant value 0",
     "ali": "zero"
  },
  "1": {
     "des": "return address",
     "ali": "ra"
  },
  "2": {
     "des": "stack pointer",
     "ali": "sp"
  },
  "3": {
     "des": "global pointer",
     "ali": "gp"
  },
  "4": {
     "des": "thread pointer",
     "ali": "tp"
  },
  "5": {
     "des": "temporaries",
     "ali": "t0"
  },
  "6": {
     "des": "temporaries",
     "ali": "t1"
  },
  "7": {
     "des": "temporaries",
     "ali": "t2"
  },
  "8": {
     "des": "saved register / frame pointer",
     "ali": "s0/fp"
  },
  "9": {
     "des": "saved register",
     "ali": "s1"
  },
  "10": {
     "des": "function arguments / return value",
     "ali": "a0"
  },
  "11": {
     "des": "function arguments",
     "ali": "a1"
  },
  "12": {
     "des": "function arguments",
     "ali": "a2"
  },
  "13": {
     "des": "function arguments",
     "ali": "a3"
  },
  "14": {
     "des": "function arguments",
     "ali": "a4"
  },
  "15": {
     "des": "function arguments",
     "ali": "a5"
  },
  "16": {
     "des": "function arguments",
     "ali": "a6"
  },
  "17": {
     "des": "function arguments",
     "ali": "a7"
  },
  "18": {
     "des": "saved registers",
     "ali": "s2"
  },
  "19": {
     "des": "saved registers",
     "ali": "s3"
  },
  "20": {
     "des": "saved registers",
     "ali": "s4"
  },
  "21": {
     "des": "saved registers",
     "ali": "s5"
  },
  "22": {
     "des": "saved registers",
     "ali": "s6"
  },
  "23": {
     "des": "saved registers",
     "ali": "s7"
  },
  "24": {
     "des": "saved registers",
     "ali": "s8"
  },
  "25": {
     "des": "saved registers",
     "ali": "s9"
  },
  "26": {
     "des": "saved registers",
     "ali": "s10"
  },
  "27": {
     "des": "saved registers",
     "ali": "s11"
  },
  "28": {
     "des": "temporaries",
     "ali": "t3"
  },
  "29": {
     "des": "temporaries",
     "ali": "t4"
  },
  "30": {
     "des": "temporaries",
     "ali": "t5"
  },
  "31": {
     "des": "temporaries",
     "ali": "t6"
  }
};

export default { ali2obj, val2obj };