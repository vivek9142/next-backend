import {useRef,useState} from  'react';

export default function Home() {
  const [feedbackItems,setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHander = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const reqBody = { email: enteredEmail , feedback:enteredFeedback };
    fetch('/api/feedback',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => console.log(data));
  }

  function loadFeedbackHandler(){
    fetch('/api/feedback')
    .then(response => response.json())
    .then(data => setFeedbackItems(data.feedback));
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


        {/* 
        we typically don't add an API route so that users have to enter them in their URL bar.
        That's not the user experience we typically wanna offer. Instead, maybe on 
        localhost:3000, we wanna have a button that loads all the stored feedback items 
        from that API route
        */}

        <hr />

        <button onClick={loadFeedbackHandler}>Load Feedback</button>

        <ul>
          {feedbackItems.map(item => <li key={item.key}>{item.text}</li>)}
        </ul>
    </div>
  )
}
