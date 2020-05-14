using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Cliente
    {
        [Key]
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
    }
}
