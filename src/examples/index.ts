import { test, assert, naturalArray, natural, randomNat } from "../index"

const add = (n1: number, n2: number) => n1 + n2

const addy = (n1: number, n2: number) => {
  if (n1 === 97) return n2
  return n1 + n2
}

test(
  'addition',
  assert('should be commutative',
    [randomNat(21), randomNat(34)],
    ([n1, n2]) => addy(n1, n2) === addy(n2, n1),
    100
  ),
  assert('should be associative',
    [randomNat(11), randomNat(13), randomNat(2)],
    ([n1, n2, n3]) => addy(addy(n1, n2), n3) === addy(n1, addy(n2, n3)),
    100
  ),
)

// fizz buzz
// const fizzBuzz = (ns: number[]) => ns.map((n: number) => {
//   if ((n % 5 === 0) && (n % 3 === 0)) return 'fizzbuzz'
//   if (n % 5 === 0) return 'buzz'
//   if (n % 3 === 0) return 'fizz'
//   return null
// }).filter((n) => n !== null)

// test(
//   'fizz buzz',
//   assert('should return fizz for all divisible by 3',
//     [naturalArray(10)],
//     ([n]) => fizzBuzz(n.filter(a => (a % 3 === 0) && (a % 5 !== 0))).every(a => a === 'fizz')
//   ),
//   assert('should return fizz for all divisible by 3',
//   [naturalArray(1)],
//   ([n]) => fizzBuzz(n.filter(a => (a % 3 !== 0) && (a % 5 === 0))).every(a => a === 'fizz')
//   ),
//   assert('should return fizz for all divisible by 3',
//   [naturalArray(1)],
//   ([n]) => fizzBuzz(n.filter(a => (a % 3 === 0) && (a % 5 === 0))).every(a => a === 'fizz')
//   ),
// )
