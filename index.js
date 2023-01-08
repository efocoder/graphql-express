import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './data/resolvers.js';
import schema from './data/schema.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('GraphQL is amazing');
});

const root = resolvers;

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
		cors: true,
	}),
);

app.listen(8080, () =>
	console.log('Server running on port localhost:8080/graphql'),
);
