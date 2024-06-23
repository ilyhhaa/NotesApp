using Microsoft.EntityFrameworkCore;
using NotesApp.Core.Models;
using NotesApp.DataAccess;
using NotesApp.DataAccess.Entities;
using System.Reflection;

namespace NotesApp.Repositories
{
    public class NoteRepository
    {
        private readonly Note_DB_Context _note_DB;

        public NoteRepository(Note_DB_Context note_DB)
        {
            _note_DB = note_DB;
        }

        public async Task <List<Note>> Get()
        {
            var noteEntities = await _note_DB.Notes
                .AsNoTracking() .ToListAsync();

            var notes = noteEntities
                .Select(n => Note.Create(n.Id, n.Title, n.Description).note)
                .ToList();

            return notes;

        }

        public async Task<Guid> Create (Note note)
        {
            var noteEntities = new NoteEntity
            {
                Id = note.Id,
                Title = note.Title,
                Description = note.Description,
                isComplete = false
            };

            await _note_DB.Notes.AddAsync(noteEntities);

            await _note_DB.SaveChangesAsync();

            return noteEntities.Id;
        }
    }
}
