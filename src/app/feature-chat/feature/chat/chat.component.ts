import { Component, inject, signal } from '@angular/core';
import { ChatBubbleComponent } from '../../ui/chat-bubble/chat-bubble.component';
import { ChatInputComponent } from '../../ui/chat-input/chat-input.component';
import { AgentService } from '../../../utils/agent.service';

@Component({
  selector: 'app-chat',
  imports: [ChatBubbleComponent, ChatInputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  readonly agentService = inject(AgentService);

  readonly date = new Date();
  readonly responses: any & { direction: 'left' | 'right' }[] = [
    {
      name: 'DevLuk AI Bot',
      date: new Date(),
      imgSrc: 'images/profile-ai.png',
      message: 'Hej jestem czego chcialbys sie dowiedziec o DevLuk?',
      direction: 'left',
    },
  ];

  userInput = '';

  async send(e: string) {
    this.responses.push({
      name: 'User',
      date: new Date(),
      message: e,
      direction: 'right',
    });
    const response = await this.agentService.updateChatFromUser(e);
    this.responses.push({
      name: 'DevLuk AI Bot',
      date: new Date(),
      imgSrc: 'images/profile-ai.png',
      message: response,
      direction: 'left',
    });
    console.log(response);
  }
}
