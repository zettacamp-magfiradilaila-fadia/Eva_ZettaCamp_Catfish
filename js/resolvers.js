const BookModel = require('../js/book_model');

const getAllBooks = async function () {
  return await BookModel.find();
};

const insertOneBook = async function (parent, args) {
  const { title, author, date_published } = args.book_input;
  const result = await new BookModel({ title: title, author: author, date_published: date_published }).save();
  return result;
};

const insertManyBooks = async function (parent, args) {
  const { title, author, date_published } = args.book_input;
  const result = await new BookModel({ title: title, author: author, date_published: date_published }).inputMany();
  return result;
};

const resolvers = {
  Query: {
    getAllBooks,
  },

  Mutation: {
    insertOneBook,
    insertManyBooks,
  },
};
module.exports = resolvers;
