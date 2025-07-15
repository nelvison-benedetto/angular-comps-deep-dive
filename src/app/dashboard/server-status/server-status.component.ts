import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{  //usi OnInit x execute something appena il comp si è costruito, OnDestroy non lo uso better DestroyRef
    currentStatus = signal<'online' | 'offline' | 'unknown'> ('offline');  //var reactive that can contains only online/offline/unknown (seta start offline)
    private interval?: ReturnType<typeof setInterval>;
    private destroyRef = inject(DestroyRef);  //piu moderna, alternativa a ngOnDestroy

    constructor(){

      effect(()=>{  //eseguito all build del comp xk è dentro il constr, e poi executed ogni volta che qualcosa dentro effect() cambia
        console.log("status changed to: "+this.currentStatus());
      });

    }

    ngOnInit(): void {  //
      console.log("ON INIT");

      const interval = setInterval(() => {  //infinite loop (ogni 3sec repeated)
        const rdn = Math.random();
        if(rdn<0.5){
          this.currentStatus.set('online');
        }
        else if (rdn<0.9){
          this.currentStatus.set('offline');
        }else{
          this.currentStatus.set('unknown');
        }
      }, 3000);  //ogni 3 sec

      this.destroyRef.onDestroy(() => {  //DestroyRef fornisce feats x cleanup, this row eseguito quando comp viene distrutto e.g. vai su un'altra pagina
        clearInterval(interval);
      });
    }

    ngOnDestroy(): void {  //non la utilizzo, ma è obbligatoria x usare interface OnDestroy
    }


}
