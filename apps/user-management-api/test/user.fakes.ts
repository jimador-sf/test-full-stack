import * as f from 'factory.ts';
import * as faker from 'faker';
import Geo = Faker.Geo;

export const nameGen: () => f.Sync.Generator<string> = () => f.each(() => faker.helpers.userCard().name);
export const addressGen: () => f.Sync.Generator<string> = () => f.each(() => {
  const { city, street, zipcode } = faker.helpers.userCard().address;
  return `${street}, ${city}, ${zipcode}`;
});
export const descriptionGen: () => f.Sync.Generator<string> = () => f.each(() => faker.lorem.sentences(3));
export const dateGen: (days?: number) => f.Sync.Generator<Date> = (days = 1000) => f.each(() => faker.date.recent(days));
export const idGen: () => f.Sync.Generator<string> = () => f.each(() => faker.random.alphaNumeric(16));
export const latLngGen: () => f.Sync.Generator<Geo> = () => f.each(() => {
  const {lat, lng} = faker.helpers.userCard().address.geo;
  return {
    lat, lng
  }
});
