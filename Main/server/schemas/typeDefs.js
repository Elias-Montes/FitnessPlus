const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Cardio  {
  _id: ID
  type: String
  name: String
  distance: Int
  duration: Int
  date: Int
  userId:[User]
}

type Resistance {
    _id: ID
    type: String
    name: String
    weight: Int
    sets: Int
    reps: Int
    date: Int
    userId:[User]
}

type User {
    _id: ID
    username: String
    password: String
    email: String
    cardio:[Cardio]
    resistance:[Resistance]
}

type Goal {
  goal: String
  date: Int
  userId: [User]
}

type Sleep {
  sleep: Int
  date: Int
  userId: [User]
}

type Weight {
  weight: Int
  weightType: String
  date: Int
  userId: [User]
}

type Query {
  cardio: [Cardio]
  resistance: [Resistance]
  user:[User]
  goal: [Goal]
  sleep: [Sleep]
  weight: [Weight]
}
`;

module.exports = typeDefs;