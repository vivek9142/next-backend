import { buildFeedbackPath,extractFeedbackPath } from "./feedback";

export default function handler(req, res) {
  const feedbackid = req.query.feedbackid;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedbackPath(filePath);

  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackid);

  res.status(200).json({feedback:selectedFeedback});
}

/* 
we can also do corresponding operation with respecitve to the url  request methods 
right here i just implemented get route to get specific id.
*/