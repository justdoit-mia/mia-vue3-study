Number.isInteger(25) // true
Number.isInteger(25.1) // false

Number.isInteger(25) // true
Number.isInteger(25.0) // true

Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

Number.isInteger(3.0000000000000002) // true

Number.isInteger(5E-324) // false
Number.isInteger(5E-325) // true