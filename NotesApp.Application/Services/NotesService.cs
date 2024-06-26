
using NotesApp.Core.Models;
using NotesApp.Repositories;

namespace NotesApp.Application.Services
{
    public class NotesService
    {
        private readonly INotesRepository _notesRepository;

        public NotesService(INotesRepository notesRepository)
        {
            _notesRepository = notesRepository;
        }


        public async Task<List <Note>> GetAllNotes()
        {
            return await _notesRepository.Get();
        }

        public async Task<Guid> CreateNote(Note note)
        {
            return await _notesRepository.Create(note);
        }
    }
}