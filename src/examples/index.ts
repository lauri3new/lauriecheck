import { test, assert, naturalArray } from "../index"

// fizz buzz
const fizzBuzz = (ns: number[]) => ns.map((n: number) => {
  if ((n % 5 === 0) && (n % 3 === 0)) return 'fizzbuzz'
  if (n % 5 === 0) return 'buzz'
  if (n % 3 === 0) return 'fizz'
  return null
}).filter((n) => n !== null)

test(
  'fizz buzz',
  assert('should return fizz for all divisible by 3',
    [naturalArray(1)],
    ([n]) => fizzBuzz(n.filter(a => a % 3 === 0)).every(a => a === 'fizz')
  ),
  assert('should return fizz for all divisible by 3',
  [naturalArray(1)],
  ([n]) => fizzBuzz(n.filter(a => a % 3 === 0)).every(a => a === 'fizz')
  ),
  assert('should return fizz for all divisible by 3',
  [naturalArray(1)],
  ([n]) => fizzBuzz(n.filter(a => a % 3 === 0)).every(a => a === 'fizz')
  ),
)
