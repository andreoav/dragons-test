import { client } from './client';

export function removeDragon(dragonId) {
  return client.delete(`v1/dragon/${dragonId}`);
}

export function createDragon({ name, type }) {
  return client.post('v1/dragon', { name, type });
}

export function editDragon(dragonId, { name, type }) {
  return client.put(`v1/dragon/${dragonId}`, { name, type });
}
