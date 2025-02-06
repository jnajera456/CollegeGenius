//endpoint used to receieve 2 users, with name + age
//-then, it outputs to the user the sum of ages

export default async function handler(request, response) {
  //how to make sure it's not assigning the same string to different users?
  const firstUser = request.body.firstUser; // object
  const secondUser = request.body.secondUser;

  // IF THERE ARE NO AGES, RETURN AN ERROR
  if (!firstUser.age || !secondUser.age) {
    response
      .status(400)
      .json({ message: "must provide a valid age for both users!" });
    return;
  }
  const firstAge = parseInt(firstUser.age);
  const secondAge = parseInt(secondUser.age);
  // ADD THE AGES
  const sum = firstAge + secondAge;
  //return sum
  response.json({
    sum: sum,
  });
}

// make an endpoint that receive 2 users (with name and age) and the endpoint will return an object like { sumOfAges: xxx }. The UI shold be able to type uin the 2 users names and ages. and the UI should see the sum returneed from the API.
