import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgentService } from '../utils/agent.service';

@Component({
  selector: 'app-agent-chat',
  imports: [FormsModule],
  templateUrl: './agent-chat.component.html',
  styleUrl: './agent-chat.component.scss',
})
export class AgentChatComponent {
  agentService = inject(AgentService);
  userInput = '';

  onSubmit(): void {
    if (this.userInput !== '') {
      this.agentService.updateChatFromUser(this.userInput);
      this.userInput = '';
    }
  }
}
