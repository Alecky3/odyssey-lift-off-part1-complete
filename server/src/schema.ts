const gql = require("graphql-tag");

const typeDefs = gql`
type Query {
tracksForHome: [Track!]!
}
"Track is a group of modules that teaches about a specific topic"
type Track {
id: ID!
title: String!
author: Author!
thumbnail: String
length: Int
modulesCount: Int
}

"Author of a complete track of module"
type Author {
id: ID!
name: String!
photo: String
}
`

export default typeDefs

