import { gql } from '@apollo/client';
export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username {
                cardio
                resistance {
                    name {
                        weight
                        sets
                        reps
                    }
                }
            }
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(user: $userId){
        _id
        username {
            cardio
            resistance {
                name {
                    weight
                    sets
                    reps
                }
            }
        }
    }
}
`;