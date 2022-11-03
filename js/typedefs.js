const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookInsert {
    title: String
    author: String
    date_published: String
  }

  type Book {
    _id: ID
    title: String
    author: String
    date_published: String
  }

  type BookCredit {
    book: [Book]
    discount: Int
    price: Int
    tax: Int
    total_price: Int
  }

  type Query {
    getAllBooks: [Book]
  }

  type Mutation {
    insertOneBook(book_input: BookInsert): Book
    insertManyBooks(book_input: BookInsert): Book
  }
`;
module.exports = typeDefs;
