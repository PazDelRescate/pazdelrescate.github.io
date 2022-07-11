import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/products/product_1.jpeg`,
  name: sample([
    '23GBCS-HM',
    '23GBSB-RR',
    '23TWCH-RR',
    '23GBCS-LP1111',
    '23GBSB-FRK',
    '23TWCH-TowleyClone',
    '23GBCS-Jobber',
    '23GBSB-Freestone',
    '23TWCH-Gobble',
    '23GBCS-Carrot',
    '23GBSB-HorseRanch',
    '23TWCH-Pond',
    '23GBCS-123FakeStreet',
    '23GBSB-DunderMifflin',
    '23TWCH-MichaelScott',
    '23GBCS-FallenTree',
    '23GBSB-Lab',
    '23TWCH-Achoo',
    '23GBCS-GobbledyGook',
    '23GBSB-AlmostFamous',
    '23TWCH-Whoozeewhatzit',
    '23GBCS-Free',
    '23GBSB-WaldenPond',
    '23TWCH-GreatGatsby',
  ]),
  owner: sample([
    'Abbots Landing',
    'Gumdlock Bumshoe',
    'Imageree'
  ]),
  last: faker.date.between('2020-01-01T00:00:00.000Z', '2022-06-017T00:00:00.000Z'),
  status: sample(['completed', 'pending']),
  location: sample([
    'Abbots Landing',
    'Gumdlock Bumshoe',
    'Imageree'
  ]),
  FSO2: sample([
    '15',
    '22',
    '32'
  ]),
  pH: sample([
    '3.56',
    '3.85',
    '3.65'
  ]),
  TA: sample([
    '5.7',
    '6.5',
    '7.0'
  ]),
  RS: sample([
    '0.01',
    '0.99',
    '0.67'
  ]),
  ML: sample([
    '0.01',
    '0.99',
    '2.13'
  ]),
  VA: sample([
    '0.21',
    '0.45',
    '0.67'
  ]),
}));

export default users;
