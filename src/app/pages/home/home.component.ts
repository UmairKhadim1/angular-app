// Angular modules
import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';

@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  public isLoading : boolean = true;

  constructor
  (
  ) { }

  // -------------------------------------------------------------------------------
  // INFO:  Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit() : void
  {
    setTimeout(_ =>
    {
      this.isLoading = false;
    }, 2000);
  }

  // -------------------------------------------------------------------------------
  // INFO:  Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // INFO:  Computed props -----------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // INFO:  Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // INFO:  Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // INFO:  Subscriptions ------------------------------------------------------------
  // -------------------------------------------------------------------------------

}
