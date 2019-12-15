import React from 'react';
import { navigate } from '@reach/router';

import useRequest from 'utils/useRequest';
import { removeDragon } from 'api/dragons';
import { useAuthState } from 'providers/Auth';

import { Icon } from 'components/Icon';
import { Card } from 'components/Card';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Button } from 'components/Button';

export default function DragonsList() {
  const { isAuthenticated } = useAuthState();

  // TODO: orderam alfabeticamente
  const { data, revalidate } = useRequest(isAuthenticated ? 'v1/dragon' : null, { suspense: true });

  async function handleRemoveDragon(dragonId) {
    await removeDragon(dragonId);
    await revalidate();
  }

  return (
    <React.Fragment>
      <Title as="h2" className="text-gray-100">
        <Icon name="fas fa-dragon" /> Dragons list
      </Title>
      <Button onClick={() => navigate('/dragons/new')} className="my-4">
        <Icon name="fas fa-plus" className="mr-2" /> New dragon
      </Button>
      <div className="flex flex-wrap -m-2">
        {data.map(dragon => (
          <div key={dragon.id} className="w-full md:w-1/3 p-2 cursor-pointer" role="list">
            <Card role="listitem">
              <Card.Content onClick={() => navigate(`dragons/${dragon.id}`)} className="flex items-center">
                <Text className="text-xl">
                  <strong>{dragon.name}</strong>
                </Text>
              </Card.Content>
              <Card.Footer>
                <Button onClick={() => navigate(`dragons/${dragon.id}/edit`)} className="p-2 sm:p-4 text-center">
                  <Icon name="far fa-edit" className="mr-2" /> Edit
                </Button>
                <Button onClick={() => handleRemoveDragon(dragon.id)} className="p-2 sm:p-4 text-center is-danger">
                  <Icon name="far fa-trash-alt" className="mr-2" /> Remove
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
