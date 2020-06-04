// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Donation } = initSchema(schema);

export {
  User,
  Donation
};