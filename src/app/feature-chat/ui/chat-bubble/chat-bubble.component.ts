import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  imports: [DatePipe],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.scss',
})
export class ChatBubbleComponent {
  readonly imgSrc = input<string>();
  readonly name = input.required<string>();
  readonly date = input.required<Date>();
  readonly message = input.required<string>();
  readonly direction = input.required<'right' | 'left'>();
}
