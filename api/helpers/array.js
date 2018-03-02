exports.mergeRandomly = function mergeRandomly (a, b) {
  const result = []

  a = a.slice(0, a.length)
  b = b.slice(0, b.length)

  while (a.length || b.length) {
    let source = a

    if (Math.random() >= 0.5) {
      source = b
    }

    if (source.length) {
      result.push(source.shift())
    }

    console.log(a.length, b.length, result.length)
  }

  return result
}
