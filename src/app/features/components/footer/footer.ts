import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite';
import { initFlowbite } from 'flowbite';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
