const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Cardio {
    _id: ID
    type: String
    name: String
    distance: Int
    duration: Int
    date: Int
    userId: [User]
  }

  type Resistance {
    _id: ID
    type: String
    name: String
    weight: Int
    sets: Int
    reps: Int
    date: Int
    userId: [User]
  }

  type User {
    _id: ID
    username: String
    password: String
    email: String
    cardios: [Cardio]
    resistances: [Resistance]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    cardios: [Cardio]
    resistances: [Resistance]
    users: [User]
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

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
