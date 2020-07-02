import 'reflect-metadata';

import UserResolver from './resolver/UserResolver';
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchemaSync } from 'type-graphql';
import * as path from 'path';
import { ISODateScalar } from '../../../libs/user-domain/src/lib/scalars';

export const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve('/tmp', 'schema.gql'),
    validate: false,
    scalarsMap: [{ type: Date, scalar: ISODateScalar }]
  })
});

export const graphql = server.createHandler();
