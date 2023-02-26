import express from 'express'
import { Data, SampleApiApi } from './src/openapi/openapiSample'
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  const resDataApi = new SampleApiApi()
  const resData = resDataApi.dataGet()
  resData.then((item) => {
    res.status(item.status).json(item.data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
