export default class Inventario{
    constructor(table){
        this._inventario = new Array();
        this._table = table
    }

    //añadir producto al vector
    add(product){
        if(this._inventario.length<20){
            let pos = this._find(product);
            if (pos>=0){
                return false;
            }
            else{
                this._inventario.push(product);
                console.log(this._inventario.length);
                return true;
            }
        }
        else{
            return alert("El inventario está lleno.")
        }
    }

    //Encontrar el producto en el vector
    _find(product){
        let pos = -1
        for(let i=0; i<this._inventario.length; i++){
            let s = this._inventario[i].getId()
            if(s == product.getId()){
                pos = i;
            }
        }
        return pos;
    }

    showAll(){
        this._table.innerHTML = ""
        for(let i=0; i<this._inventario.length;i++){
            let row = this._table.insertRow(-1);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[i].getId();
            colName.innerHTML = this._inventario[i].getName();
            colQuantity.innerHTML = this._inventario[i].getQuantity();
            colCost.innerHTML = this._inventario[i].getCost();
            colTotal.innerHTML = this._inventario[i].getTotal();
        }
    }
    showInverse(){
        this._table.innerHTML = "";
        for(let i=0; i<this._inventario.length;i++){
            let row = this._table.insertRow(0);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[i].getId();
            colName.innerHTML = this._inventario[i].getName();
            colQuantity.innerHTML = this._inventario[i].getQuantity();
            colCost.innerHTML = this._inventario[i].getCost();
            colTotal.innerHTML = this._inventario[i].getTotal();
        }
    }
    search(inId){
        
        let id = inId.value;
        let pos = -1
        for(let i=0; i<this._inventario.length; i++){
            let s = this._inventario[i].getId()
            if(s == id){
                pos = i;
            }
        }
        if(pos>=0){
            this._table.innerHTML = "";
            let row = this._table.insertRow(0);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[pos].getId();
            colName.innerHTML = this._inventario[pos].getName();
            colQuantity.innerHTML = this._inventario[pos].getQuantity();
            colCost.innerHTML = this._inventario[pos].getCost();
            colTotal.innerHTML = this._inventario[pos].getTotal();
            
            inId.value = "";
            return alert("Articulo encontrado.");
        }
        else{
            return alert("El articulo que busca no existe.");
        }
    }
    delete(inId){
        
        let id = inId.value;
        let pos = -1
        for(let i=0; i<this._inventario.length; i++){
            let s = this._inventario[i].getId()
            if(s == id){
                pos = i;
            }
        }
        if(pos>=0){
            this._table.innerHTML = "";
            let row = this._table.insertRow(0);

            let colId = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);

            colId.innerHTML = this._inventario[pos].getId();
            colName.innerHTML = this._inventario[pos].getName();
            colQuantity.innerHTML = this._inventario[pos].getQuantity();
            colCost.innerHTML = this._inventario[pos].getCost();
            colTotal.innerHTML = this._inventario[pos].getTotal();

            let k = pos+1
            for(let i = pos; i<this._inventario.length-1; i++,k++){
                console.log(this._inventario)
                let temp = this._inventario[i];
                this._inventario[i] = this._inventario[k];
                this._inventario[k] = temp;
            }
            
            console.log(this._inventario)
            this._inventario.pop();
            inId.value = "";
            return alert("Articulo eliminado exitosamente.");
        }
        else{
            return alert("El articulo que desea eliminar no existe.");
        }
    }
    addProductPosition(product,inPos){
        if(this._inventario.length<20){
            let pos = this._find(product);
            if (pos>=0){
                return false;
            }
            else{

                
                let pos = inPos.value;
                if(pos > (this._inventario.length + 1)){
                    return alert("Esa posición no está disponible.")
                }
                this._inventario.push(product);
                let j = (this._inventario.length)-1
                let k = (this._inventario.length)-2;

                for(let i=j; i>pos-1; i--,k--){
                    let temp = this._inventario[k];
                    this._inventario[k] = this._inventario[i]
                    this._inventario[i] = temp;
                }
                
                console.log(this._inventario);
                inPos.value = "";
                return true;
            }
        }
        else{
            return alert("El inventario está lleno.")
        }
    }
}