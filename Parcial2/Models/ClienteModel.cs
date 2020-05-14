using Entity;

namespace Parcial2.Models
{
    public class ClienteInputModel
    {
        public string Identificacion { get; set; }
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