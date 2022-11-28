import { Component} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent{
  name: string =  'Macbook';
  description: string = 'Pro 2017 8/256';
  price: number = 1000;
  category: Category = Category.Computer;
  isAvailable: boolean = true;
  list: number[] = [1, 2, 3, 4,]
}

enum Category {
  Computer,
  Phone,
  Headphones
}
