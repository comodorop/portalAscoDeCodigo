function operaciones(op)
{

    var ops = {
        
        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        }


    };



    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    
    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        alert("Indique un número en 'numero1'");
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        alert("Indique un número en 'numero2'");
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'restar':
                var resultado = ops.restar(num1, num2);
                alert (resultado);
                break;
 
        }
    }

}

