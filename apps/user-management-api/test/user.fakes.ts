import * as f from 'factory.ts';
import * as faker from "faker";

export const nameGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
export const addressGen: () => f.Sync.Generator<string> = () => f.each(() => faker.address.streetName());
export const descriptionGen: () => f.Sync.Generator<string> = () => f.each(() => faker.lorem.sentences(3));
export const dateGen: () => f.Sync.Generator<Date> = () => f.each(() => faker.date.recent(1000));
export const idGen: () => f.Sync.Generator<string> = () => f.each(() => faker.random.alphaNumeric(16));
