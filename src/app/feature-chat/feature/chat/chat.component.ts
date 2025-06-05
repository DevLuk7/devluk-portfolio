import { Component } from '@angular/core';
import { ChatBubbleComponent } from '../../ui/chat-bubble/chat-bubble.component';
import { ChatInputComponent } from '../../ui/chat-input/chat-input.component';

@Component({
  selector: 'app-chat',
  imports: [ChatBubbleComponent, ChatInputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  readonly date = new Date();
}
