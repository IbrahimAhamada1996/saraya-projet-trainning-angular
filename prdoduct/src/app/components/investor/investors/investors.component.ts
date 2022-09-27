import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../../services/investor.service';
import { Investor } from '../../../model/investor';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  searchQuarter = '';
  searchYaer = 0
  investorsQuater: any = [];
  investors: any = [];
  allInvestors: Investor[] = [];
  isPresent=true;
  constructor(private investorService:InvestorService) { }

  ngOnInit(): void {

    this.investorService.getAllInvestors().subscribe(
      response=>{
        this.investorsQuater = response;
        this.investors = response;
        this.allInvestors = this.investors;
        console.log(this.allInvestors);
      }
    )

  }

  search(values:any){
    if(this.searchQuarter!='' && this.searchYaer!=0){
      this.investors =   this.allInvestors.filter(i=>i.quater.toLowerCase().includes(values.value.searchQuarter.toLowerCase()) && i.year==values.value.searchYaer)
    }else if (this.searchYaer!=0 && this.searchQuarter=='') {
      this.investors =   this.allInvestors.filter( i=>i.year==values.value.searchYaer)
    } else if (this.searchQuarter != '' && this.searchYaer==0) {

        this.investors =   this.allInvestors.filter(i=>i.quater.toLowerCase().includes(values.value.searchQuarter.toLowerCase()))
    } else {
      this.isPresent = false
    }


    console.log(values.value.searchQuarter)
    console.log(values.value.searchYaer)
    console.log(this.isPresent)
    console.log(this.investors);
    console.log(this.searchQuarter,this.searchYaer)
  }
}
