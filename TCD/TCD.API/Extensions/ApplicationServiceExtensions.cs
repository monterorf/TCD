using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TCD.Data.Models.Interfaces;
using TCD.Data.Models.Services;
using TCD.Data.Repositories;
using TCD.Data.UnitOfWork;

namespace TCD.API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            return services;
        }
    }
}
