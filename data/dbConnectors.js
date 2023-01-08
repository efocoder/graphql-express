import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/widgets', {
	useNewUrlParser: true,
});

mongoose.set('strictQuery', false);

const widgetSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
	},
	soldouts: {
		type: String,
	},
	inventory: {
		type: String,
	},
	stores: {
		type: Array,
	},
});

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets };
