import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly handle: string;
  readonly donations: Donation[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Donation {
  readonly id: string;
  readonly user: User;
  readonly organization?: string;
  readonly hashtags?: string[];
  readonly amount: number;
  readonly accumulatedAmount: number;
  readonly numberOfCalls: number;
  readonly limit: number;
  constructor(init: ModelInit<Donation>);
  static copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}