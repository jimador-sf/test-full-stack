import 'reflect-metadata';

import UserResolver from './resolver/UserResolver';
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchemaSync } from 'type-graphql';

export const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [UserResolver],
    emitSchemaFile: true,
    validate: false
  })
});

export const graphql = server.createHandler();
