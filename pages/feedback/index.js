import {buildFeedbackPath, extractFeedbackPath} from '../api/feedback';
import { Fragment, useState } from 'react';

export default function FeedbackPage(props){

    const [feedbackData , setFeedbackData] = useState()

    function loadFeedbackHandler(id){
        fetch(`/api/${id}`).then(res => res.json()).then(data =>{
            setFeedbackData(data.feedback);
        })
    }
    /*
    Here, when this button is clicked,I wanna send the request to this dynamic API route to 
    fetch the details for a single feedback.
    */
    return (
        <Fragment>
            {feedbackData && (
                <p>
                  {feedbackData.email}  
                </p>
            )}
            <ul>
                {props.feedbackItems.map(item =>(
                    <li key={item.id}>
                    {item.text} 
                    <button onClick={loadFeedbackHandler.bind(null,item.id)}>
                        Show Details
                    </button>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
};

export async function getStaticProps(){
    const filePath = buildFeedbackPath();
    const data = extractFeedbackPath(filePath);
    return {
        props:{
            feedbackItems:data
        }
    }
}
