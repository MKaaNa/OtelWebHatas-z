import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule'; // Doğru dosya yolunu kontrol edin

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoNgZorroAntdModule], // imports dizisini birleştirin
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // styleUrl yerine styleUrls kullanın
})
export class AppComponent {
  title = 'OtelWeb';
}