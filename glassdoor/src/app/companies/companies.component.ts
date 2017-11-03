import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './shared/company.model';
import { CompanyService }    from './shared/company.service';

@Component({
  selector: 'my-companies',
  templateUrl: './companies.component.html',
  styleUrls: [ './companies.component.css' ]
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;

  constructor(
    private companyService: CompanyService,
    private router: Router) { }

  getCompanies(): void {
    this.companyService
        .getCompanies()
        .then(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.companyService.create(name)
      .then(company => {
        this.companies.push(company);
        this.selectedCompany = null;
      });
  }

  delete(company: Company): void {
    this.companyService
        .delete(company.id)
        .then(() => {
          this.companies = this.companies.filter(c => c !== company);
          if (this.selectedCompany === company) { this.selectedCompany = null; }
        });
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompany.id]);
  }
}