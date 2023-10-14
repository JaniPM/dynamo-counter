import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const client = DynamoDBDocument.from(new DynamoDB({ endpoint: 'http://localhost:4566' }));

export default client;
