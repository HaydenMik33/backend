const {gql} = require('apollo-server')

const base = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
///just dummy datas let us be able to extend to
module.exports = [
  base,
  require("./chat"),
  require("./message"),
  require("./user")
];
