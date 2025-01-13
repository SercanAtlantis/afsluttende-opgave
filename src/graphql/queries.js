import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        role
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query SearchUsers($searchTerm: String) {
    users(searchTerm: $searchTerm) {
      id
      username
      email
      role
      address
      phoneNumber
      createdAt
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!, 
    $email: String!, 
    $password: String!, 
    $role: String!,
    $address: String,
    $phoneNumber: String
  ) {
    createUser(
      username: $username, 
      email: $email, 
      password: $password, 
      role: $role,
      address: $address,
      phoneNumber: $phoneNumber
    ) {
      id
      username
      email
      role
      address
      phoneNumber
      createdAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!, 
    $username: String, 
    $email: String, 
    $role: String,
    $address: String,
    $phoneNumber: String
  ) {
    updateUser(
      id: $id, 
      username: $username, 
      email: $email, 
      role: $role,
      address: $address,
      phoneNumber: $phoneNumber
    ) {
      id
      username
      email
      role
      address
      phoneNumber
      createdAt
    }
  }
`;