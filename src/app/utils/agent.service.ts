import { Injectable, signal, resource, linkedSignal } from '@angular/core';
import { runFlow } from 'genkit/beta/client';

const USER = 'USER';
const AGENT = 'AGENT';
const ENDPOINT = 'http://localhost:4200/chatFlow';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  userInput = signal('');

  sessionId = linkedSignal<string, string>({
    source: () => this.agentResource.value()?.agentResponse || '',
    computation: (_agentResponse, previous): string =>
      !previous
        ? Date.now() + '' + Math.floor(Math.random() * 1000000000)
        : previous.value,
  });

  clearSession = linkedSignal({
    source: () => (this.agentResource.value() as any)?.agentResponse,
    computation: (_agentResponse, previous): boolean => !previous,
  });

  chat = linkedSignal<string, Chat[]>({
    source: () => (this.agentResource.value() as any).agentResponse,
    computation: (agentResponse, previous): Chat[] => {
      if (agentResponse === '') {
        return previous?.value || [];
      }

      const chatItem = this.chatItem(agentResponse, AGENT);
      return previous ? [chatItem, ...previous.value] : [chatItem];
    },
  });

  agentResource = resource({
    defaultValue: { agentResponse: '', options: [] },
    params: () => this.userInput(),
    loader: ({ params }): Promise<AgentResponse> => {
      return runFlow({
        url: ENDPOINT,
        input: {
          userInput: params,
          sessionId: this.sessionId(),
          clearSession: this.clearSession(),
        },
      });
    },
  });

  updateChatFromUser(userInput: string): string {
    const chatItem = this.chatItem(userInput, USER);
    this.chat.update((value) => [chatItem, ...value]);
    this.userInput.set(userInput);
    return userInput;
  }

  chatItem(text: string, role: Role): Chat {
    return {
      id: Math.floor(Math.random() * 2000),
      role,
      text,
      date: new Date(),
    };
  }
}

type Role = 'AGENT' | 'USER';

interface Chat {
  id: number;
  role: Role;
  text: string;
  date: Date;
}

interface AgentResponse {
  agentResponse: string;
  options: string[];
}
