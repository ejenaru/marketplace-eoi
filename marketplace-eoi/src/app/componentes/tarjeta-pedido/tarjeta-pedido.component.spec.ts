import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPedidoComponent } from './tarjeta-pedido.component';

describe('TarjetaPedidoComponent', () => {
  let component: TarjetaPedidoComponent;
  let fixture: ComponentFixture<TarjetaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
