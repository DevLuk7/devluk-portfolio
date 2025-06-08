import { Chat, genkit, Session } from 'genkit/beta';
import { googleAI, gemini20Flash } from '@genkit-ai/googleai';
import { parse } from 'partial-json';
import { z } from 'zod';

const model = gemini20Flash;

const ai = genkit({
  plugins: [googleAI()],
  model,
});

let session: Session;

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: z.object({
      userInput: z.string(),
      sessionId: z.string(),
      clearSession: z.boolean(),
    }),
    outputSchema: z.object({
      agentResponse: z.string(),
      options: z.optional(z.array(z.string())),
    }),
  },
  async ({ userInput, sessionId, clearSession }) => {
    if (userInput.length === 0) {
      userInput = 'Hi';
    }

    let chat: Chat;
    if (clearSession) {
      session = ai.createSession({ sessionId });
      await session.updateMessages(sessionId, []);
    }
    chat = session.chat({ sessionId, model });
    const prompt = `
    Jestes asystentem do udzielania informacji o stronie na ktorej sie znajdujesz. Jest to strona portfolio.

    User input: ${userInput}

    Respond to the user and, if you ask the user a question.

    Final responses should be structured as follows:

    {
      agentResponse: "INSERT YOUR RESPONSE",
    }

    Respond as JSON only. Wrap all field values in double quotes. Do not use single quotes.`;

    const { text } = await chat.send({ prompt });
    return parse(maybeStripMarkdown(text));
  },
);

const markdownRegex = /^\s*(```json)?((.|\n)*?)(```)?\s*$/i;
function maybeStripMarkdown(withMarkdown: string) {
  const mdMatch = markdownRegex.exec(withMarkdown);
  if (!mdMatch) {
    return withMarkdown;
  }
  return mdMatch[2];
}
