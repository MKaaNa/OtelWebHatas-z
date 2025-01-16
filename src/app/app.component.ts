import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule'; // Doğru dosya yolunu kontrol edin
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

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