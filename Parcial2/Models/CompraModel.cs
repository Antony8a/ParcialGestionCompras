using Entity;
using System.ComponentModel.DataAnnotations;

namespace Parcial2.Models
{
    public class CompraInputModel
    {

        [Required(ErrorMessage = "La idCliente es requerida")]
        public string IdCliente { get; set; }
        [Required(ErrorMessage = "El nombre es requerido")]
        public string NombreCliente { get; set; }
        [Required(ErrorMessage = "La ruta es requerida")]
        public string Ruta { get; set; }
        [Required(ErrorMessage = "El Valor es requerido")]
        public string Valor { get; set; }
        [Required(ErrorMessage = "El IdCompra es requerido")]
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