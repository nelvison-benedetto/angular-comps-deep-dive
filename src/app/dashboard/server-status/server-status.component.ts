import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
    currentStatus = 'online';
    private interval?: ReturnType<typeof setInterval>;
    private destroyRef = inject(DestroyRef);  //piu moderna, alternativa a ngOnDestroy

    ngOnInit(): void {
      console.log("ON INIT");
      const interval = setInterval(() => {
        const rdn = Math.random();
        if(rdn<0.5){
          this.currentStatus = 'online';
        }
        else if (rdn<0.9){
          this.currentStatus = 'offline';
        }else{
          this.currentStatus = 'unknown';
        }
      }, 3000);

      this.destroyRef.onDestroy(() => {  //DestroyRef fornisce feats x cleanup
        clearInterval(interval);
      });
    }
    ngOnDestroy(): void {
    }


}
