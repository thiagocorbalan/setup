import { User } from '@models/User';

test('it should be ok', () => {
	const user = new User();
	user.name = 'Thiago';

	expect(user.name).toEqual('Thiago');
});
