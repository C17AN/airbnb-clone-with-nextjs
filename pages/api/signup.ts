import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return res.end();
  }
  res.statusCode = 405;
  return res.end();
  if (!email || !firstname || !lastname || !password || !birthday) {
    res.statusCode = 400;
    return res.send("필수 데이터가 없습니다.");
  }
};
