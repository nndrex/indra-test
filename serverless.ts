import type { AWS } from '@serverless/typescript';

import {getFilmByid,postFilm,putFilm,deleteFilm} from '@functions/films';

const serverlessConfiguration: AWS = {
  service: 'starships-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline','serverless-auto-swagger'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [{
          Effect: "Allow",
          Action: [
            "dynamodb:DescribeTable",
            "dynamodb:Query",
            "dynamodb:Scan",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:UpdateItem",
            "dynamodb:DeleteItem",
          ],
          Resource: "arn:aws:dynamodb:us-east-1:*:table/films",
        }],
      },
    },
  },
  // import the function via paths
  functions: { getFilmByid,postFilm,putFilm,deleteFilm },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      TodosTable: {
        Type: "AWS::DynamoDB::Filmes",
        Properties: {
          TableName: "Filmes",
          AttributeDefinitions: [{
            AttributeName: "filmeId",
            AttributeType: "S",
          }],
          KeySchema: [{
            AttributeName: "filmeId",
            KeyType: "HASH"
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },

        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
