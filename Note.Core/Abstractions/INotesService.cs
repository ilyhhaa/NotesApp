using NotesApp.Core.Models;

namespace NotesApp.Application.Services
{
    public interface INotesService
    {
        Task<Guid> CreateNote(Note note);
        Task<Guid> DeleteNote(Guid guid);
        Task<List<Note>> GetAllNotes();
        Task<Guid> UpdateNote(Guid id, string title, string description);
    }
}