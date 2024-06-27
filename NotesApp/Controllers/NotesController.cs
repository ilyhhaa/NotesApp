using Microsoft.AspNetCore.Mvc;
using NotesApp.Application.Services;
using NotesApp.Core.Models;

namespace NotesApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly INotesService _notesService;

        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet]

        public async Task <ActionResult<List<NotesResponse>>> Get()
        {
           return await _notesService.GetAllNotes();
        }


    }
}
