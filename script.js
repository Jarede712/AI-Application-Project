// dependencies
const { OpenAI } = require('@langchain/openai');
require('dotenv').config();
const inquirer = require('inquirer');

// creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
  temperature: 0,
  model: 'gpt-3.5-turbo',
});

const promptFunc = async (input) => {
  try {
    const res = await model.call(
      input
      // 'How do you capitalize all characters of a string in JavaScript?' // uncomment to run promptFunc by itself
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

// promptFunc(); // uncomment to run the promptFunc by itself (comment out the init function)

const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'ask a coding question',
      },
    ])
    .then((inquirerResponse) => {
      promptFunc(inquirerResponse.name);
    });
};

init();
