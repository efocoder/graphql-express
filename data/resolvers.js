import crypto from 'crypto';
import { Widgets } from './dbConnectors.js';

const resolvers = {
	getAllProducts: () => {
		return Widgets.find({});
	},

	getProduct: ({ id }) => {
		return Widgets.findById(id);
		// return new Promise((resolve) => {
		// 	Widgets.findOne({ _id: id }),
		// 		(err, product) => {
		// 			if (err) reject(err);
		// 			else resolve(product);
		// 		};
		// });
	},

	createProduct: ({ input }) => {
		console.log(input);
		const newWidget = new Widgets({
			name: input.name,
			description: input.description,
			price: input.price,
			soldout: input.soldout,
			inventory: input.inventory,
			stores: input.stores,
		});

		newWidget.id = newWidget._id;

		return new Promise((resolve) => {
			newWidget.save((err) => {
				if (err) reject(err);
				else resolve(newWidget);
			});
		});
	},

	updateProduct: ({ input }) => {
		console.log(input);
		return new Promise((resolve) => {
			Widgets.findOneAndUpdate(
				{ _id: input.id },
				input,
				{ new: true },
				(err, widget) => {
					if (err) reject(err);
					else resolve(widget);
				},
			);
		});
	},

	deleteProduct: ({ id }) => {
		return new Promise((resolve) => {
			Widgets.deleteOne({ _id: id }, (err) => {
				if (err) reject(err);
				else resolve('Successfully deleted');
			});
		});
	},
};

export default resolvers;
