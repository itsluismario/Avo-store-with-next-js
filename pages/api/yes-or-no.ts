import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    data: string,
    error: null,
  }

const AvoRequest = async (req: NextApiRequest, res: NextApiResponse<ResponseData>
    )  => {

    const answer = Math.round(Math.random()) ? 'yes' : 'no'
    res.status(200).json({ data: answer, error: null, })
  }

 export default AvoRequest;