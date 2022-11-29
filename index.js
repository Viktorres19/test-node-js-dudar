const os = require('os')
let res = os.platform()
console.log(res) // win32

const my_math = require('./modules/my_math')
let res1 = my_math.add(4, 5)
let res2 = my_math.add(3, 4)
console.log(res1)
console.log(res2)