using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Parcial2.Models;

namespace Parcial2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ClienteService _clienteService;
        
        public ClienteController(CompraContext context)
        {
            _clienteService = new ClienteService(context);
        }
        // GET: api/Cliente
        [HttpGet]
        public IEnumerable<ClienteViewModel> Gets()
        {
            var clientes = _clienteService.ConsultarTodos().Select(p=> new ClienteViewModel(p));
            return clientes;
        }

        // GET: api/Cliente/5
        [HttpGet("{identificacion}")]
        public ActionResult<ClienteViewModel> Get(string identificacion)
        {
            var cliente = _clienteService.BuscarxIdentificacion(identificacion);
            if (cliente == null) return NotFound();
            var clienteViewModel = new ClienteViewModel(cliente);
            return clienteViewModel;
        }

        // POST: api/Cliente
        [HttpPost]
        public ActionResult<ClienteViewModel> Post(ClienteInputModel clienteInput)
        {
            Cliente cliente = MapearCliente(clienteInput);
            var response = _clienteService.Guardar(cliente);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Cliente", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Cliente);
        }

        private Cliente MapearCliente(ClienteInputModel clienteInput)
        {
            var cliente = new Cliente
            {
                Identificacion = clienteInput.Identificacion,
                Nombre = clienteInput.Nombre,
            };
            return cliente;
        }
        
    }
}