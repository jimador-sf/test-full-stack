import { usersGen } from '../../../../libs/feature-sets/src/lib/util/user-faker';
import { nameFilter } from './UserRepository';

describe('UserRepositoryTest', () => {
  it('should filter', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {name: 'herby'}))
    expect(filtered.length).toStrictEqual(1)
    expect(filtered[0].name).toStrictEqual(first.name)
  });

  it('should not filter undef criteria', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u))
    expect(filtered.length).toStrictEqual(2)

  });

  it('should not filter undef name', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {}))
    expect(filtered.length).toStrictEqual(2)
  });

  it('should not filter wrong name', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {name: 'fred'}))
    expect(filtered.length).toStrictEqual(2)
  });
});
