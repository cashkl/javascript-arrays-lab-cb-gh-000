const app = "I don't do much."
kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name)  {
  kittens[kittens.length]=name

}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}