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
  readonly responses: any[] = [];

  async send(e: string) {
    console.log(e);
    this.responses.push({
      name: 'DevLuk',
      date: new Date(),
      imgSrc: 'images/profile.jpeg',
      message: e,
    });
    const response = await this.aiService.ask(e);
    this.responses.push({
      name: 'AI',
      date: new Date(),
      message: response,
    });
    console.log(response);
  }
}
