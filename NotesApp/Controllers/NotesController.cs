using Microsoft.AspNetCore.Mvc;
using NotesApp.Application.Services;
using NotesApp.Contracts;
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

        public async Task <ActionResult<List<NoteResponse>>> Get()
        {
            var notes = await _notesService.GetAllNotes();

            var response = notes.Select(n => new NoteResponse(n.Id, n.Title, n.Description));

            return Ok(response);
        }


    }
}
