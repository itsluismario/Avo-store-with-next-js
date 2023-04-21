import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: string,
    error: null,
  }

var express = require('express')
var cors = require('cors')
var app = express()

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const yesOrNo = app.get('/api/yes-or-no', function (req: NextApiRequest, res: NextApiResponse<ResponseData>, next: any) {
  const answer = Math.round(Math.random()) ? 'yes' : 'no'
      res.status(200).json({ 
      data: answer, 
      error: null, 
    })
})

export default yesOrNo;