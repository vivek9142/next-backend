/*
inside of the API folder, like this feedback.js file
we don't export a react component. So in the upper page files,
we do create a react component and export that as a default.
We don't do that in API routes.
*/
import fs from 'fs';
import path from 'path';

function  handler(req,res){
    //checking which req is triggering here
    if(req.method === 'POST'){
        const email = req.body.email;
        const feedbackText = req.body.feedback;

        const newFeedBack = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        }
    
    // store new feedback in json file
    const filePath = path.join(process.cwd(),'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    
    data.push(newFeedBack);
    
    fs.writeFileSync(filePath, JSON.stringify(data,0,2));

    //send response
    res.status(201).json({message: 'Success', feedback: newFeedBack});
    } else {
        /*
        This line of code would also execute though after we go through this if check
        because function execution does not stop just because we set some response data.
        Hence, to not send two responses, we should move this code into an else block
        */
        res.status(200).json({message: 'This Works!'});
    }
}

export default handler