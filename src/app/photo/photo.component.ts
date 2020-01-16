import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../services/photo-service.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() url = '';

  public photos = [];
  
  constructor(private photoService: PhotoService ) { }

  ngOnInit() {
  this.photos = this.photoService.getPhoto();
  }

}
