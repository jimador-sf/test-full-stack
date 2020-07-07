## Full Stack Developer Test

### Submitted by: 
James Dunnam

[Kanban board](https://github.com/jimador-sf/test-full-stack/projects/1)

### About
TypeScript/NodeJS AWS lambda GraphQL API and React Frontend application for User Management. 

## Project structure

- `apps/*` contains deployable applications.
    - [user-management-api](apps/user-management-api) - TS/Node/GQL/Lambda application and environment configuration
    - [user-management-app](apps/user-management-app) - React application - UI components are provided via `lib/feature-sets`
    - _*-e2e_ - end-to-end Cypress test suites. Due to time constraints, they are currently just "it renders" tests.
- `libs/*` shared library code
    - [data-access](libs/data-access) - primarily generated code. The graphql schema served by the _user-management-api_ is 
    processed and types and Apollo hooks are generated. This API is consumed by _feature-sets_ and _user-management-app_
    - [feature-sets](libs/data-access) - sharable UI components for the _user-management-app_

A dependency graph for the project can be generated with `yarn nx dep-graph`.

### Tools 
- [Nx](https://nx.dev/react)
- yarn
- TypeScript
- Node 
- Serverless
- AWS (Lambda/Dynamo/Gateway)
- Github Actions for SCM and CI&CD
- Cypress
- Storybook


## Serverless
Serverless manages the infrastructure for local and AWS deployments and testing.

### Automated AWS Deployment
Automated AWS deployments are provided via Serverless. Run `yarn nx user-management-api:deploy` after 
setting [up AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/deploying/) to deploy the user-management-api to AWS lambda, a DynamoDB instance with the 
User table, and an AWS gateway for communication with the GQL API.

#### Destroy
run `yarn nx user-management-api:destroy` to tear down your the user-management-api AWS environment created above.
 
## GraphQL Schema

The GQL schema can be found [here](./src/graphql/schema.graphql). The TS API is built with 
[TypeGraphQL](https://typegraphql.com/) and then the schema is generated from the TypeScript types. 

## Local Development
### Prerequisites
- [ ] Serverless [CLI](https://serverless.com/framework/docs/getting-started/)
- [ ] Local DynamoDB install https://www.serverless.com/plugins/serverless-dynamodb-local
- [ ] Amazon AWS account and `awscli` installed and configured: <https://aws.amazon.com/getting-started/>

### Running locally
```bash
sls dynamodb start 
```
This will start a local DynamoDB instance (via serverless) running on port 8000. When starting DynamoDB via 
Serverless, the AWS Cloudformation configuration is automatically picked up and proessed. The User table is created with 
the appropriate permissions, and the User table is [seeded with data](apps/user-management-api/seed). 

```bash
yarn nx serve user-management-api --port=5555
```
This will start a local instance of the user-management-api lambda running on port 5555. 
By default, the user-management-app ApolloClient is looking for the API service on port 5555.

```bash
yarn nx serve user-management-app
```
Starts the React app

## Useful commands

#### Dependency Graph

`yarn nx dep-graph` will display a dependency graph for all of the repo components.

#### Building

`yarn nx run-many --target=build --all`

#### Running Storybook

Run `nx run feature-sets:storybook` to launch [Storybook](https://storybook.js.org/) on port 4400.

#### Running unit tests

Run `yarn nx run-many --target=test --all` to execute the unit tests via [Jest](https://jestjs.io). 
To rerun tests only in modules that failed `yarn nx run-many --target=test --onlyFailed`

#### Running end-to-end tests

Run `nx test <APP_NAME-e2e>:2e2` to execute the acceptance tests via [Cypress](https://www.cypress.io/).


**NOTE: All deployments (locally and in AWS) are configurable with a dev or production flag.**

To serve the `production` profile locally, run:
 
```bash
nx serve user-management-api:production --port=5555
```


---
##### This library was generated with [Nx](https://nx.dev).
