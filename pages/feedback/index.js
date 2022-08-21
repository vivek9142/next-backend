import {buildFeedbackPath, extractFeedbackPath} from '../api/feedback';


export default function FeedbackPage(props){
    return <ul>
        {props.feedbackItems.map(item =>(
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
};

export async function getStaticProps(){
    /*
    Well, we did see similar examples in the data fetching sections. There we for example, 
    also talked to Firebase and we then use the fetch API here, the fetch function
    here inside of getStaticProps to still send the request to an API and get data from there.
    And that works as you saw there.
    
    But, whilst this is absolutely fine for external APIs like the Firebase API, you should 
    not use fetch inside of getStaticProps or getServerSideProps to talk to your own API.
    Instead since this is all part of one project and therefore ultimately all served by 
    one server. 
    
    What you should do instead is write any node JS logic that should execute 
    here directly inside of getStaticProps. So if we have some logic in our API route
    which also might need to be executed here inside of a regular page,
    then we should just make it available through an export so that we can run the code 
    to find in the API route directly here inside of getStaticProps or getServerSideProps.


    So that means that here in this case this code for building the feedback path
    and extracting the feedback should be executed directly here in getStaticProps.
    We just don't wanna set some response status code and return a response
    because that's not what getStaticProps is about. This is just about producing the data
    for our page component. But since I already have extract feedback and filled feedback 
    path in separate functions we can just export these functions to make them available
    outside of this API feedback JS file export both functions and then in index JS,
    */

    const filePath = buildFeedbackPath();
    const data = extractFeedbackPath(filePath);
    return {
        props:{
            feedbackItems:data
        }
    }
}

/*
So now we have that code here inside of our regular page instead of using fetch and 
sending a request to our own API route because when working with your own API routes
and when requiring them in your regular pages you should not send the HTTP request to them
but instead leverage the fact that it's all running on the same computer on the same server
and therefore just import it and directly run that code instead of sending that unnecessary 
HTTP request.
*/