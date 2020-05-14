using Entity;

namespace Parcial2.Models
{
    public class CompraInputModel
    {

        public string IdCliente { get; set; }
        public string NombreCliente { get; set; }
        public string Ruta { get; set; }
        public string Valor { get; set; }
        public string IdCompra { get; set; }
    }

    public class CompraViewModel : CompraInputModel
    {
        public CompraViewModel()
        {
        }
        public CompraViewModel(Compra compra)
        {
            IdCliente = compra.IdCliente;
            NombreCliente = compra.NombreCliente;
            Ruta = compra.Ruta;
            Valor = compra.Valor;
            IdCompra = compra.IdCompra;
        }
       
    }
}