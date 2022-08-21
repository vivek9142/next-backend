import {useRef} from  'react';

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHander = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const reqBody = { email: enteredEmail , feedback:enteredFeedback };


    /*
    So, now we add this object to add metadata to this request, which we're sending, 
    informing the backend, informing the API route in the end, that this request will 
    carry JSON data. That is required for the API routes feature for Next.js therefore 
    to correctly parse the incoming request body, and convert JSON to JavaScript 
    for us so that we can conveniently access
    */

    fetch('/api/feedback',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => console.log(data));
  }

  return (
    <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHander}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id='email' ref={emailRef} />
          </div>

          <div>
            <label htmlFor="feedback">Email Address</label>
            <textarea id="feedback" cols="30" rows="5" ref={feedbackRef} ></textarea>
          </div>

          <div>
            <button>Submit Feedback</button>
          </div>

        </form>
    </div>
  )
}
