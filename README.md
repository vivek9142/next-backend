## Introduction to Integration of API in Next JS

We can add our own API endpoints to next.js by simply creating a new sub folder inside of pages. So, inside of this pages directory, we create a sub folder and that sub folder has to be called API.

Now up to this point, those file and folder names were mostly up to you. This is now not up to you.This has to be called API because that's a special folder which will be recognized by next.js and any pages if you wanna call them like this, which you set up inside of that API folder will be treated in a special way.

We create a Feedback.js file inside api folder.
Now that will create a special path, we can send requests to.
It will allow us to send requests to our domain. So during development.that's local host 3000/API/feedback.This is what this will enable us to do.

Instead, this allows us to execute any server side code of our choice and that's important
server side code. Any code we write in here,will never end up in any client side code bundle.
So any code we write here will never be exposed to visitors of our webpage,just as code 
written and getStaticProps and getServerProps would never be exposed to our visitors.

## Interact with frontend by Form

We're making form in index.js and we'll try to interact with backend using this form.


##  Using API Routes To Get Data.

If I still enter a request and send it to /api/feedback through the browser URL bar,
that will automatically be a get request. Therefore, it will not trigger this if block
or it'll not make it into this if block because the method is not post, but get.

And therefore this line of code will execute which is why we see this response.
And now that we got this response, of course, let me also make it crystal clear
that you can also handle incoming get requests in whichever way you want.

let's say for incoming get requests we wanna get access
to all our feedback objects that were stored and return those as JSON.
So that in our front end application, we could also send a behind the scenes request
to fetch all feedback entries and display them on the screen.

## Using API Routes For Pre-Rendering Pages

*** Go-To - Feedback folder in pages folder

## Creating & Using Dynamic API Route

let's say you don't just wanna have /api/feedback which handles post and get requests,
but you also wanna support /api/feedback/some feedback ID to just fetched a single piece
of data for that specific feedback item, because maybe you need that somewhere on your page.

For example, on the feedback page, you could say that for every list item you're rendering here,  you also have like a show details button. And when that button is clicked,
you wanna show the details for that feedback item. And hence you want to fetch the data,
the full data for that feedback item.

we already know dynamic pages where you create a page with that square bracket notation, 
like this. This would then allow for a request sent to /feedback/some-id.And some-id would 
be interpreted as a value for this ID placeholder and you could then use it inside of that page component and so on.

That's what we already learned before. Now that's for regular pages.We can use a similar feature for API routes,because it's also not unrealistic that we wanna send the request to /api/feedback and then the ID of a specific feedback to then load the data for that specific feedback.