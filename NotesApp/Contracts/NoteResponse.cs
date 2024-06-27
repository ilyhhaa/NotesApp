namespace NotesApp.Contracts
{
    public record NoteResponse(
        Guid id,
        string title,
        string description);
   
}
