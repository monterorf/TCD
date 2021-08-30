using TCD.Data.Models.Models;

namespace TCD.Data.Models.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
