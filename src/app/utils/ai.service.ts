import { Injectable, inject } from '@angular/core';
import {
  getGenerativeModel,
  GenerativeModel,
  ChatSession,
  FunctionDeclarationsTool,
  VertexAI,
} from '@angular/fire/vertexai';

@Injectable({
  providedIn: 'root',
})
export class AiService {
  private vertexAI = inject(VertexAI);
  private readonly model: GenerativeModel;
  private readonly chat: ChatSession;

  constructor() {
    const toolSet: FunctionDeclarationsTool = {
      functionDeclarations: [],
    };

    const systemInstruction =
      'Jestes assystem AI do poszukiwania informacji o Łukasz Kumiec (DevLuk8), Senior Developer';

    // Initialize the generative model with a model that supports your use case
    this.model = getGenerativeModel(this.vertexAI, {
      model: 'gemini-2.0-flash',
      systemInstruction: systemInstruction,
    });

    this.chat = this.model.startChat();
  }

  async ask(prompt: string) {
    let result = await this.chat.sendMessage(prompt);
    const functionCalls = result.response.functionCalls();

    if (functionCalls && functionCalls.length > 0) {
      for (const functionCall of functionCalls) {
        console.log(functionCall);
      }
    }

    return result.response.text();
  }
}
