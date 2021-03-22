// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query{
    me: User
}
type Mutation{
    login()
    addUser()
    saveBook()
    removeBook()
}
    type User {
        _id: ID!
        username: String
        email: String
        book-count: Int
        saved-books: [String]
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