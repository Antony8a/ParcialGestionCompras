using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ClienteService
    {
        private readonly CompraContext _context;
        public ClienteService(CompraContext context)
        {
            _context = context;
        }
        public GuardarClienteResponse Guardar(Cliente cliente)
        {
            try
            {
                var clienteBuscado = _context.Clientes.Find(cliente.Identificacion);
                if (clienteBuscado != null)
                {
                    return new GuardarClienteResponse("Error el cliente ya se encuentra registrada");
                }
                _context.Clientes.Add(cliente);
                _context.SaveChanges();
                return new GuardarClienteResponse(cliente);
            }
            catch (Exception e)
            {
                return new GuardarClienteResponse($"Error de la aplicacion: {e.Message}");
            }

        }

        public List<Cliente> ConsultarTodos()
        {
            List<Cliente> clientes = _context.Clientes.ToList();
            return clientes;
        }

        public Cliente BuscarxIdentificacion(string identificacion)
        {
            var clientes = _context.Clientes.Find(identificacion);
            return clientes;
        }

        public class GuardarClienteResponse
        {
            public GuardarClienteResponse(Cliente cliente)
            {
                Error = false;
                Cliente = cliente;
            }
            public GuardarClienteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Cliente Cliente { get; set; }

        }
    }
}