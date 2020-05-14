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
    public class CompraController : ControllerBase
    {
        private readonly CompraService _compraService;
        public CompraController(CompraContext context)
        {
            _compraService = new CompraService(context);
        }

        // GET: api/Compra
        [HttpGet]
        public IEnumerable<CompraViewModel> Gets()
        {
            var compras = _compraService.ConsultarTodos().Select(p => new CompraViewModel(p));
            return compras;
        }

        // GET: api/Compra/5
        [HttpGet("{identificacion}")]
        public ActionResult<CompraViewModel> Get(string identificacion)
        {
            var compra = _compraService.BuscarxIdentificacion(identificacion);
            if (compra == null) return NotFound();
            var compraViewModel = new CompraViewModel(compra);
            return compraViewModel;
        }
        
        

        // POST: api/Compra
        [HttpPost]
        public ActionResult<CompraViewModel> Post(CompraInputModel compraInput)
        {
            Compra compra = MapearCompra(compraInput);
            var response = _compraService.Guardar(compra);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar compra", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Compra);
        }

        private Compra MapearCompra(CompraInputModel compraInput)
        {
            var compra = new Compra
            {
                IdCompra = compraInput.IdCompra,
                NombreCliente = compraInput.NombreCliente,
                Ruta = compraInput.Ruta,
                Valor = compraInput.Valor,
                IdCliente = compraInput.IdCliente,
                
            };
            return compra;
        }

    }
}