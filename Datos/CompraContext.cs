using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class CompraContext: DbContext
    {
        public CompraContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Compra> Compras { get; set;}
        public DbSet<Cliente> Clientes { get; set;}
        

    }
}