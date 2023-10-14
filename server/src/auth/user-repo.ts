import client from '../shared/dynamodb-client';

const TABLE_NAME = 'users';

type UserItem = {
  username: string;
};

export const createOrUpdateUser = async (username: string) => {
  await client.put({
    TableName: TABLE_NAME,
    Item: { pk: username },
  });
};

export const findUserByUsername = async (username: string): Promise<UserItem | null> => {
  const result = await client.get({
    TableName: TABLE_NAME,
    Key: { pk: username },
  });

  if (!result.Item) {
    return null;
  }

  return { username: result.Item.pk };
};
