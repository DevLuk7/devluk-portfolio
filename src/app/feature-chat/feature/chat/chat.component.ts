import { Component, inject } from '@angular/core';
import { ChatBubbleComponent } from '../../ui/chat-bubble/chat-bubble.component';
import { ChatInputComponent } from '../../ui/chat-input/chat-input.component';
import { AiService } from '../../../utils/ai.service';

@Component({
  selector: 'app-chat',
  imports: [ChatBubbleComponent, ChatInputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  private readonly aiService = inject(AiService);

  readonly date = new Date();
  readonly responses: any & { direction: 'left' | 'right' }[] = [
    {
      name: 'DevLuk AI Bot',
      date: new Date(),
      imgSrc: 'images/profile-ai.png',
      message: 'Hej jestem czego chcialbys sie dowiedziec o DevLuk?',
      direction: 'left',
    },
    // {
    //   name: 'User',
    //   date: new Date(),
    //   message: 'Czesc co tam?',
    //   direction: 'right',
    // },
  ];

  async send(e: string) {
    this.responses.push({
      name: 'User',
      date: new Date(),
      message: e,
      direction: 'right',
    });
    const response = await this.aiService.ask(e);
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
