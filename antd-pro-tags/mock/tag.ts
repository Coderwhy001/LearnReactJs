import { Request, Response } from 'express';
const getTags = (req: Request, res: Response) => {
  console.log(req, res)
  res.json({
    data: [
      {
        id: 1,
        title: 'vue'
      },
      {
        id: 3,
        title: 'antd'
      },
      {
        id: 4,
        title: 'umi'
      }
    ]
  })
}
export default {
  'GET /api/tag/all': getTags
}