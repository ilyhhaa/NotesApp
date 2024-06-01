using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotesApp.Core.Models;
using NotesApp.DataAccess.Entities;

namespace NotesApp.DataAccess.Configurations
{
    public class NoteConfiguration : IEntityTypeConfiguration<NoteEntity>
    {
        public void Configure(EntityTypeBuilder<NoteEntity> builder)
        {
          builder.HasKey(a => a.Id);

            builder.Property(b => b.Title)
                .HasMaxLength(Note.MAX_LENGTH_OF_TITLE)
                .IsRequired();

            builder.Property(c => c.Description);
        }
    }
}
