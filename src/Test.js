export default function test() {
  let animal = {
    name: 'awfafafafw',
    age: 23
  }
  
  let newAnimal = {
    ...animal, 
    age: 1
  }
  
  console.log(newAnimal)
}

test()