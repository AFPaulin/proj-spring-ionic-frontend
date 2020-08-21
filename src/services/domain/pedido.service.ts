
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.cofig";
import { PedidoDTO } from "../../models/pedido.dto";

@Injectable()
export class PedidoService {

    constructor(public http: HttpClient) {
    }

    insert(obj: PedidoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response',
                // coloca esse "text" pq caso ele converta o nulo em json ele dá erro 
                responseType: 'text'
            }
        );
    }
}
