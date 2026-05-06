import { ElementRef } from '@angular/core';
import { PolizaRowTag } from './poliza-row-tag';

describe('PolizaRowTag', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new PolizaRowTag(elementRef);
    expect(directive).toBeTruthy();
  });
});
