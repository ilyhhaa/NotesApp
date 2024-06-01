using System.ComponentModel.DataAnnotations;
using System.Net.WebSockets;
using System.Reflection;
using System.Runtime.InteropServices;

namespace Note.Core.Models
{
    public class Note
    {
       public const int MAX_LENGTH_OF_TITLE = 50;
        public const int MAX_LENGTH_OF_DESCRIPTION = 250;

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


        public static (Note note, string Error) Create (Guid _id, string _Title, string _Descrip)
        {
            var error = string.Empty;
            
            if(string.IsNullOrEmpty(_Descrip) || _Descrip.Length > MAX_LENGTH_OF_DESCRIPTION )
            {
                error = "Description is can not be Empty or longer then 250 symbols";

            }

            if (string.IsNullOrEmpty(_Title) || _Title.Length > MAX_LENGTH_OF_TITLE)
            {
                error = "Title is can not be Empty or longer then 50 symbols";

            }

            var note = new Note (_id, _Title, _Descrip);

            return (note, error);
        }

    }
}