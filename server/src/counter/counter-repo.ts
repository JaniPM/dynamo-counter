import { ConditionalCheckFailedException } from '@aws-sdk/client-dynamodb';
import client from '../shared/dynamodb-client';

const TABLE_NAME = 'counters';

export const getCounters = async (): Promise<Record<string, number>> => {
  const result = await client.scan({
    TableName: TABLE_NAME,
    ConsistentRead: true,
  });

  if (!result.Items) {
    return {};
  }

  return result.Items.reduce((acc, item) => {
    acc[item.pk] = item.counter;
    return acc;
  }, {});
};

export const initCounterForUser = async (username: string): Promise<void> => {
  try {
    await client.put({
      TableName: TABLE_NAME,
      Item: { pk: username, counter: 0 },
      ConditionExpression: 'attribute_not_exists(#counter)',
      ExpressionAttributeNames: {
        '#counter': 'counter',
      },
    });
  } catch (err) {
    if (err instanceof ConditionalCheckFailedException) {
      console.info(`Counter for user ${username} already exists`);
      return;
    }

    console.error(err);
  }
};

export const increaseCounter = async (username: string): Promise<void> => {
  await client.update({
    TableName: TABLE_NAME,
    Key: { pk: username },
    UpdateExpression: 'ADD #counter :one',
    ExpressionAttributeNames: {
      '#counter': 'counter',
    },
    ExpressionAttributeValues: {
      ':one': 1,
    },
  });
};
