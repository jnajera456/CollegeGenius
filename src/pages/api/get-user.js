// endpoint

// STATELESS - do not save any data the next time around
// thats why we have databases

export default async function handler(request, response) {
  const userId = request.body.userId; // string

  const id = parseInt(userId);

  if (id && id > 100) {
    response.json({
      name: "Hank Schrader",
      age: 52,
      id: userId,
    });
  } else if (id && id < 100) {
    response.json({
      name: "Walter White",
      age: 61,
      id: userId,
    });
  } else {
    response.status(400).json({ message: "must provide a valid userId " });
  }
}

// make an endpoint that receive 2 users (with name and age) and the endpoint will return an object like { sumOfAges: xxx }. The UI shold be able to type uin the 2 users names and ages. and the UI should see the sum returneed from the API.
