import { Request, Response } from 'express';
import listAnUserIdParamsService from '../../services/user/listAnUserIdParams.service';


const listAnUserIdParamsController = async (req: Request, res: Response) => {

    const users = await listAnUserIdParamsService(req.params.userId)
   
    return res.status(200).json(users)

}



export default listAnUserIdParamsController