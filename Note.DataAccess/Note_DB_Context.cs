using Microsoft.EntityFrameworkCore;
using NotesApp.DataAccess.Entities;

namespace NotesApp.DataAccess
{
    public class Note_DB_Context: DbContext
    {
        public Note_DB_Context(DbContextOptions<Note_DB_Context> options):
            base (options)
        {
                
        }

        public DbSet<NoteEntity> Notes { get; set; }
    }
}