const app = "I don't do much."
kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name)  {
  kittens[kittens.length]=name

}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
kittens.shift()
}
function appendKitten(name) {
var kittens2=kittens
  kittens2.push(name)
}
function prependKitten(name) {
  
}