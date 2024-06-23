using NotesApp.Core.Models;

namespace NotesApp.Repositories
{
    public interface INotesRepository
    {
        Task<Guid> Create(Note note);
        Task<Guid> Delete(Guid id);
        Task<List<Note>> Get();
        Task<Guid> Update(Guid id, string title, string description);
    }
}