import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppsComponent } from './download-apps.component';

describe('DownloadAppsComponent', () => {
  let component: DownloadAppsComponent;
  let fixture: ComponentFixture<DownloadAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
