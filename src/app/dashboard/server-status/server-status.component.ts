import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
    currentStatus = signal<'online' | 'offline' | 'unknown'> ('offline');
    private interval?: ReturnType<typeof setInterval>;
    private destroyRef = inject(DestroyRef);  //piu moderna, alternativa a ngOnDestroy

    constructor(){
      effect(()=>{
        console.log("status changed to: "+this.currentStatus());
      });
    }

    ngOnInit(): void {
      console.log("ON INIT");
      const interval = setInterval(() => {
        const rdn = Math.random();
        if(rdn<0.5){
          this.currentStatus.set('online');
        }
        else if (rdn<0.9){
          this.currentStatus.set('offline');
        }else{
          this.currentStatus.set('unknown');
        }
      }, 3000);

      this.destroyRef.onDestroy(() => {  //DestroyRef fornisce feats x cleanup
        clearInterval(interval);
      });
    }
    ngOnDestroy(): void {
    }


}
