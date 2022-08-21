import fs from 'fs';
import path from 'path';

function buildFeedbackPath(){
    return path.join(process.cwd(),'data', 'feedback.json');
}

function extractFeedbackPath(filePath){
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function  handler(req,res){
    if(req.method === 'POST'){
        const email = req.body.email;
        const feedbackText = req.body.feedback;

        const newFeedBack = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText
        }
    
    const filePath = buildFeedbackPath();
    const data = extractFeedbackPath(filePath);
    
    data.push(newFeedBack);
    
    fs.writeFileSync(filePath, JSON.stringify(data,0,2));

    res.status(201).json({message: 'Success', feedback: newFeedBack});
    } else {
        /*
        let's say for incoming get requests we wanna get access
        to all our feedback objects that were stored and return those as JSON.
        */

        const filePath = buildFeedbackPath();
        const data = extractFeedbackPath(filePath);

        res.status(200).json({feedback: data});
    }
}

export default handler