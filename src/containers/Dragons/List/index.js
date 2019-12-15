import React, { lazy } from 'react';
import { ListSkeleton } from './ListSkeleton';

export const DragonsListPage = lazy(() => import('./List'));

export const DragonsList = props => (
  <React.Suspense fallback={<ListSkeleton />}>
    <DragonsListPage {...props} />
  </React.Suspense>
);
