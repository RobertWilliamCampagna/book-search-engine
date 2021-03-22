const { AuthenticanError, AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");
const Book = require("../models/Book");
const { signToken } = require('../utils/auth');
const { populate } = require("../models/User");


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ })
              .select('__v -password')
              populate('books');
      
              return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
      },
      login: async (parent, {email, password}) => {
          const user = await User.findOne({ email });

          if(!user){
              throw new AuthenticationError('Credentials are not correct!');

          }
          const correctPw = await user.isCorrectPassword(password);

          if(!correctPw){
              throw new AuthenticationError('Credentials are not correct!');

          }
          const token = signToken(user);
          return { token, user };
      },
      saveBook: async(parent, args) =>{

      },
      removeBook: async(parent, args) => {
          
      },
  }

};
  
  module.exports = resolvers;