import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Card } from 'components/Card';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import { Button } from 'components/Button';

export function ListSkeleton({ count = 6 }) {
  return (
    <React.Fragment>
      <Title className="text-gray-100">
        <Skeleton width={160} />
      </Title>
      <Button className="my-4">
        <Skeleton width={110} />
      </Button>
      <div className="flex flex-wrap -m-2">
        {[...Array(count).keys()].map((_, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-2 cursor-pointer">
            <Card>
              <Card.Content className="flex items-center">
                <Text className="text-xl">
                  <Skeleton width={150} />
                </Text>
              </Card.Content>
              <Card.Footer>
                <Text className="p-2 sm:p-4 text-sm text-center bg-gray-500">
                  <Skeleton width={80} />
                </Text>
                <Text className="p-2 sm:p-4 text-sm text-center bg-gray-500">
                  <Skeleton width={80} />
                </Text>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
