import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PRODUCTS } from '../../models/mock-product';
import { AuditService } from '../../services/audit.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  products = PRODUCTS;
  searchhidden: boolean = true;
  isMypost: boolean= true;
  public audits: any[]= [];
  public totalCount=0;
  public pageIndex: number=0;
  public pageSize: number=10;
  
  
  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;
  
  constructor (private auditService: AuditService) {}
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 250) { // 650으로 바까라
      this.searchhidden = false;
    } else {
      this.searchhidden = true;
    }
  }

  public async ngOnInit(): Promise<void> {
    await this.getAudits(this.pageIndex,this.pageSize);
    this.pageIndex +=1;
  }
  public async getAudits(pageIndex: number, pageSize: number){
    try {
      const response:any= await   
      this.auditService.getAudits(pageIndex,pageSize).toPromise();
      this.audits = [...this.audits,...response.audits]
      this.totalCount = response.totalCount;
    } catch (error) {
      console.log(error)
    }
  }
  public async onScrollLoadData() {
    const nativeElement= this.uiElement.nativeElement
    console.log(this.uiElement)
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight  &&  this.audits.length !== this.totalCount){
      await this.getAudits(this.pageIndex, this.pageSize);
      this.pageIndex +=1;
    }
    // if(this.audits.length !== this.totalCount){
    //   await this.getAudits(this.pageIndex, this.pageSize);
    //   this.pageIndex +=1;
    // }
  }
}
