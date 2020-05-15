using Entity;
using System.ComponentModel.DataAnnotations;


namespace Parcial2.Models
{
    public class ClienteInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }
        [Required(ErrorMessage = "El nombre es requerido")]
        public string Nombre { get; set; }
    }

    public class ClienteViewModel : ClienteInputModel
    {
        public ClienteViewModel()
        {
        }
        public ClienteViewModel(Cliente cliente)
        {
            Identificacion = cliente.Identificacion;
            Nombre = cliente.Nombre;
            
        }
        
    }
}