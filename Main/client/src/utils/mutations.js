import { gql } from '@apollo/client';
// export const ADD_USERS = gql`
//     query allUsers {
//         users {
//             _id
//             username {
//                 cardio
//                 resistance {
//                     name {
//                         weight
//                         sets
//                         reps
//                     }
//                 }
//             }
//         }
//     }
// `;

// export const ADD_CARDIO = gql`
//  mutation addCardio($userId: ID!, $cardio: String!){
//     addCardio(userId, cardio: $cardio) {
//         _id
//         username {
//             cardio
//             resistance {
//                 name {
//                     weight
//                     sets
//                     reps
//                 }
//             }
//         }
//     }
// }
// `;
// export const ADD_RESISTANCE = gql`
// mutation addResistance($userId: ID!, $resistance: String!){
//     addResistance(userId, resistance: $resistance) {
//         _id
//         username {
//             cardio
//             resistance {
//                 name {
//                     weight
//                     sets
//                     reps
//                 }
//             }
//         }
//     }
// }
// `;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;