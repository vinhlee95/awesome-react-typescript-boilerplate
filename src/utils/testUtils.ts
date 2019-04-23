import {build, fake, sequence} from 'test-data-bot'

export const postBuilder = build('Post').fields({
	id: sequence(x => x),
	userid: sequence(x => x),
	title: fake(f => f.lorem.word()),
	body: fake(f => f.lorem.words()),
})
