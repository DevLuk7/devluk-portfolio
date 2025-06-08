import { Component, inject, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgentService } from '../../../utils/agent.service';

@Component({
  selector: 'app-chat-input',
  imports: [FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class ChatInputComponent {
  readonly agentService = inject(AgentService);

  readonly userInput = model<string>('Powiedz mi cos wiecej o DevLuk');

  onSubmit(): void {
    if (this.userInput() !== '') {
      this.agentService.updateChatFromUser(this.userInput());
      this.userInput.set('');
    }
  }
}
