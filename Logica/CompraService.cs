using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class CompraService
    {
        private readonly CompraContext _context;

        public CompraService(CompraContext context)
        {
            _context = context;
        }

        public GuardarCompraResponse Guardar(Compra compra)
        {
            try
            {
                var compraBuscada = _context.Compras.Find(compra.IdCompra);
                if (compraBuscada != null)
                {
                    return new GuardarCompraResponse("Error la compra ya se encuentra registrada");
                }
                //compraBuscada.CargarValor();
                _context.Compras.Add(compra);
                _context.SaveChanges();
                return new GuardarCompraResponse(compra);
            }
            catch (Exception e)
            {
                return new GuardarCompraResponse($"Error de la aplicacion: {e.Message}");
            }

        }

        public List<Compra> ConsultarTodos()
        {
            List<Compra> compras = _context.Compras.ToList();
            return compras;
        }

        public Compra BuscarxIdentificacion(string identificacion)
        {
            var compra = _context.Compras.Find(identificacion);
            return compra;
        }

        

        public class GuardarCompraResponse
        {
            public GuardarCompraResponse(Compra compra)
            {
                Error = false;
                Compra = compra;
            }
            public GuardarCompraResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Compra Compra { get; set; }

        }

    }

}
