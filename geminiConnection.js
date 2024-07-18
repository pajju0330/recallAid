const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();


async function generateText(GEMINI_API_KEY) {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = `Give me only Javascript list named questions of Object({question,options,answer}) containing 5 very random easy GK MCQ questions (questions should be different from previous)
        THE RESPONSE SHOULD DIRECTLY CONTAIN LIST AND NOTHING ELsE. DONT WRITE WORD LIKE JSON OR JAVASCRIPT BEFORE, IT SHOULD BE PARSABLE
    `
    try{
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(GEMINI_API_KEY);
        return JSON.parse(text);
    }catch(err){
        console.log("error: ", err);
        const lst = [];
        return lst;
    }   
}

module.exports = { generateText };
