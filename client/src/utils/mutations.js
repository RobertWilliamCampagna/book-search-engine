import gql from 'graphql-tag';


// Login User mutation
export const LOGIN_USER =gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;
// Add User mutation
export const ADD_USER = gql`
        mutation addUser($username: String!, $email: String!, $password: String!){
            addUser(username: $username, email: $email, password: $password){
               token
               user{
                _id
                username
              
                }
            }

         
     }
 `;

 // Save Book mutation
 export const SAVE_BOOK = gql`
 mutation saveBook($bookId: String!, $title: String!, $description: String, $authors: [String], $image: String, $link: String) {
    saveBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
                }
            }
        }
        `;
// Remove Book mutation
export const REMOVE_BOOK = gql`
        mutation removeBook($bookId: String!) {
            removeBook(bookId: $bookId){
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                }

            }
        }
        `;

        