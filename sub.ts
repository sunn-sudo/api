import express from 'express'
import { Data } from './src/openapi/openapiSample'
const app = express()
const port = 4000
const resData: Data = {
  id: 1,
  username: "username_dummy",
  firstName: "firstName_dummy",
  lastName: "lastName_dummy",
  email: "email_dummy",
  password: "password_dummy",
  phone: "phone_dummy",
  userStatus: 1000
}

app.get('/data', (req: any, res: any) => {
  res.json(resData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
