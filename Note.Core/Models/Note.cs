using System.ComponentModel.DataAnnotations;
using System.Net.WebSockets;
using System.Reflection;
using System.Runtime.InteropServices;

namespace Note.Core.Models
{
    public class Note
    {

        private Note(Guid _id, string _Title, string _Desrip)
        {
            Id = _id;
            Title = _Title;
            Description = _Desrip;

        }
        public Guid Id { get;}

         public string Title { get;} = string.Empty;

        public string Description { get;} = string.Empty;

        public bool isComplete { get; set; } = false;


        public static (Note note, string Error) Create (Guid _id, string _Title, string _Desrip)
        {
            var error = string.Empty;
            
            var note = new Note (_id, _Title, _Desrip);

            return (note, error);
        }

    }
}