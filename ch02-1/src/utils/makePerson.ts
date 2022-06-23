export function makePerson(name: string, age: number){
    return {name: name, age: age}
}
export function testMakePerson(){
    console.log(
        makePerson('Seiwon', 28),
        makePerson('Sooyeon', 27)
    )
}