# data-access

## Sharable, Apollo hooks based, GraphQL data access component.

This library generates all User based graphql queries and mutations from the 
[user operations schema](src/lib/graphql/user-operations.graphql).
Code generation is provided via [GraphQL Code Generator](https://graphql-code-generator.com/). Generated 
types and operations are defined in [codegen.yml](codegen.yml)
The frontend types are generated from the [user-management-api]() graphql schema, and the operations
generated are defined in this library. This provides loose coupling, and an API that can be 
contract tested to quickly detect breaking API changes.

To generate new Apollo hooks and types run:

```bash
yarn ng run data-access:generate
```



##### This library was generated with [Nx](https://nx.dev).
