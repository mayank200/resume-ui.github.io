import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ mark it as standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,          // ✅ for ngIf, ngFor, ngStyle, async pipe etc.
    ReactiveFormsModule,   // ✅ for FormControl binding
    TranslateModule,       // ✅ for ngx-translate pipes and directives
    NgbNavModule,          // ✅ for ngbNav
    RouterModule,
    FormsModule
  ],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible = false;
  pageYPosition = 0;
  languageFormControl = new UntypedFormControl();
  cvName = "";

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {}

  scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() =>
        document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
      );
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    this.cvName = 'resume.pdf';
    let url = window.location.href;
    let newurl = url + "/../assets/cv/resume.pdf";
    newurl = newurl.replace('resume-ui/', '');
    window.open(newurl, "_blank");
  }

  @HostListener('window:scroll', ['$event'])
  getScrollPosition(event: Event) {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
    this.translate.use(language); // ✅ actually switch translation
  }
}
