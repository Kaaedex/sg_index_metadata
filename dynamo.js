const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
region: process.env.AWS_DEFAULT_REGION,
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})


const getSGItem = async (id) => 
{
const params = 
	{
	TableName: "sg_item_indexes",
	Key: {id}
	}
	const sgItem = await dynamoClient.scan(params).promise();
	return sgItem;
};

module.exports = 
{
getSGItem
}