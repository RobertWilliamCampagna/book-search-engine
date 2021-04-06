// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query{
    me: User
}
type Mutation{
    login( email: String, password: String!)
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: ID!): User
}
    type User {
        _id: ID!
        username: String
        email: String
        book-count: Int
        savedBooks: [String]
    }
    type Book {
        _id: ID!
        bookID: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth{
        token: ID!
        user: User
    }
    
`;












// export the typeDefs
module.exports = typeDefs;