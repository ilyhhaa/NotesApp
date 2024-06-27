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

        [HttpPost]

        public async Task <ActionResult<Guid>> CreateNote([FromBody]NoteRequest request)
        {
            var (note, error) = Note.Create(Guid.NewGuid(), request.title, request.description);

            if (!string.IsNullOrEmpty(error)) 
            {
                return BadRequest(error);
            }

            var noteid = await _notesService.CreateNote(note);

            return Ok(noteid);    
        }

        [HttpPut("{id:guid}")]

        public async Task <ActionResult<Guid>> UpdateNote(Guid id, [FromBody]NoteRequest request)
        {
           var noteid =  await _notesService.UpdateNote(id,request.title,request.description);

            return Ok(noteid);
        }

        [HttpDelete("{id:guid}")]

        public async Task <ActionResult<Guid>> DeleteNote(Guid id)
        {
            return Ok(await _notesService.DeleteNote(id));
        }


    }
}
