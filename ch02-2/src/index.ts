import { makePerson } from "./Person/Person"
import express from "express"
import IPerson from "./Person/IPerson"
import * as U from "./utils/makeRandomNumber"


const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app
    .get("/", (req: express.Request, res: express.Response) => {
        try {
            let person;
            // const { name, age } = req.query
            const name = Object(req.query).name as string
            const age = Object(req.query).age as number
            if (age === null) {
                person = testMakePerson(name, U.makeRandomNumber())
            } else {
                person = testMakePerson(name, age)
            }
            res.send(person)
        } catch (e: any) {
            console.log(e)
        }
    })
    .post("/", (req: express.Request, res: express.Response) => {
        try {
            let person;
            console.log(req.body.name)
            if (req.body.age === null) {
                person = testMakePerson(req.body.name, U.makeRandomNumber())
            } else {
                person = testMakePerson(req.body.name, Number(req.body.age))
            }
            req.
            res.send(person)
        } catch (e: any) {
            console.log(e)
        }
})

const testMakePerson = (name: string, age: number): IPerson => {
    const person = makePerson({name: name, age: age })
    console.log(person)
    return person
}

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})