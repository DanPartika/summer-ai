import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const config = new Configuration({
  organization: "org-RuytBaOuXZ0M4iuWry2HuYgN",
  apiKey:"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"
});

const openai = new OpenAIApi(config);

const userCLI = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
userCLI.prompt();

userCLI.on("line", async (input) => {
  await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role:"user", content:input}]
    }).then((result)=> {
      console.log(result.data.choices[0].message.content);
      userCLI.prompt();
    }).catch((e)=>{
      console.log(e);
    })
})

