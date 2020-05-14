using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Compra
    {
        
        public string IdCliente { get; set; }
        public string NombreCliente { get; set; }
        public string Ruta { get; set; }
        public string Valor { get; set; }
        [Key]
        public string IdCompra { get; set; }

        public void CargarValor()
        {
            if (Ruta.Equals("Valledupar -Bogota"))
            {
                Valor = "$90.000";
            }
            else if (Ruta.Equals("Valledupar -Barranquilla"))
            {
                Valor = "$35.000";
            }
            else if (Ruta.Equals("Valledupar- Santa Marta"))
            {
                Valor = "$40.000";
            }
            else if (Ruta.Equals("Valledupar -Cartagena"))
            {
                Valor = "$60.000";
            }
        }
    }
}