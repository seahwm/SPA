import { Component, Input } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    @Input('name') srvNm:string='';

}