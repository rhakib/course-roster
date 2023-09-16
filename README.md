# Here are 3 features on Course Registration Website:

1. Purchase: Students can purchase courses through online.
2. Diverse Course Catalog: Students can choose course based on their interest to gain new skill.
3. Multiple Course: Student can't purchase same course twice, but they can purchase different courses at a time.

# How I manage the state in this assignment project:

First of all, I've declared a useState hook to store the fake data from JSON file.
Then I have fetched the fake data through useEffect hook and stored it on the state.

Then, I've declared another state to store the selected courses list to show them in the cart. Then I have passed the variable from state to the cart component and recieved it from there and then displayed it.

Then I've declared 3 more useState to store Credit Hours, Remaining Hours and Total price of course and passed them to the cart component to display them in their own places. That is how I managed state in this assignment!



