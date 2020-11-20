import { gql } from "apollo-server-express";

//Fake Database
const user = [
  {
    id: "1",
    name: "ดอกทอง",
    username: "Dokthong",
    password: "123456",
    email: "dokthong@hotmail.com",
  },
  {
    id: "2",
    name: "ดอกเงิน",
    username: "Doknguen",
    password: "123456",
    email: "doknguen@hotmail.com",
  },
  {
    id: "3",
    name: "ดอกเบี้ย",
    username: "Dokbia",
    password: "123456",
    email: "dokbia@hotmail.com",
  },
];
export const resolvers = {
  Query: {
    user: (parrent, args, context, info) => {
      return user.filter((fuck) => fuck.id.toString() === args.id)[0];
    },
    users: (parrent, args, context, info)  => 
    {
        {return user}
      },
  },
};
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }
`;
