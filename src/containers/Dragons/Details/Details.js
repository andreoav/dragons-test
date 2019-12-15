import React from 'react';
import { navigate } from '@reach/router';

import useRequest from 'utils/useRequest';
import { removeDragon } from 'api/dragons';

import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Text } from 'components/Text';

export default function DragonDetails({ dragonId }) {
  const { data: dragon } = useRequest(dragonId ? `v1/dragon/${dragonId}` : null);

  async function handleRemoveDragon(dragonId) {
    await removeDragon(dragonId);
    await navigate('/dragons', { replace: true });
  }

  return dragon ? (
    <React.Fragment>
      <Title className="text-gray-100">
        <i className="fas fa-dragon"></i> {dragon.name}
      </Title>
      <div className="my-4">
        <Text>
          <i className="fas fa-dna"></i> Type: <strong>{dragon.type}</strong>
        </Text>
        <Text>
          <i className="far fa-clock"></i> Date: <strong>{dragon.createdAt}</strong>
        </Text>
      </div>
      <footer className="flex mt-4">
        <Button onClick={() => navigate(`${dragon.id}/edit`)} className="mr-2">
          <i className="far fa-edit mr-2"></i> Edit
        </Button>
        <Button onClick={() => handleRemoveDragon(dragon.id)} className="is-danger">
          <i className="far fa-trash-alt mr-2"></i> Remove
        </Button>
      </footer>
    </React.Fragment>
  ) : null;
}
