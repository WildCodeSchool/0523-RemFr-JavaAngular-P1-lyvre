import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AddressService } from 'src/app/services/address/address.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Feature } from 'src/app/utils/interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnChanges {

  constructor(private service: AddressService) {}
  @Output() sendCoordinates : EventEmitter<[number, number]> = new EventEmitter();
  @Input() addressFromPositions: string = "";

  addresses : Feature[] = []

  formAddress = new FormControl(this.addressFromPositions);

  getAddress(data : any) {
    if(data.target.value.length > 3) {
      this.service.getAddress(data.target.value).subscribe((data) => {
        this.addresses = data.features.map((feature: Feature) => feature)
      })
    }
  }

  onAddressSelected(event: MatAutocompleteSelectedEvent) {
    const selectedAddress = event.option.value;
    this.sendCoordinates.emit(selectedAddress.geometry.coordinates);
    this.formAddress.setValue(selectedAddress.properties.label);
  }

  ngOnChanges() {
    this.formAddress.setValue(this.addressFromPositions)
  }
}

