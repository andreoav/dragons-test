import React from 'react';
import { navigate } from '@reach/router';
import { parseISO, format } from 'date-fns';

import useRequest from 'utils/useRequest';
import { removeDragon } from 'api/dragons';

import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { Content } from 'components/Content';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';

export default function DragonDetails({ dragonId }) {
  const { data: dragon } = useRequest(dragonId ? `v1/dragon/${dragonId}` : null);

  async function handleRemoveDragon(dragonId) {
    await removeDragon(dragonId);
    await navigate('/dragons');
  }

  return dragon ? (
    <Content>
      <Card>
        <Card.Content>
          <Title variant="dark">
            <Icon name="fas fa-dragon" /> {dragon.name}
          </Title>
          <div className="my-4">
            <Text>
              <Icon name="fas fa-dna" /> <strong>{dragon.type}</strong>
            </Text>
            <Text>
              <Icon className="far fa-clock" /> <strong>{format(parseISO(dragon.createdAt), 'PPpp	')}</strong>
            </Text>
          </div>
        </Card.Content>
      </Card>
      <footer className="flex mt-4">
        <Button onClick={() => navigate(`${dragon.id}/edit`)} className="mr-2">
          <i className="far fa-edit mr-2"></i> Edit
        </Button>
        <Button onClick={() => handleRemoveDragon(dragon.id)} className="is-danger">
          <i className="far fa-trash-alt mr-2"></i> Remove
        </Button>
      </footer>
    </Content>
  ) : null;
}
