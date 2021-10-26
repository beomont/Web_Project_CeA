using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Web_Project_CeA.Models;

namespace Web_Project_CeA.Pages.Produtos
{
    public class CreateModel : PageModel
    {
        [BindProperty]
        public Produto Produto { get; set; }

        string baseUrl = "https://localhost:44343/";

        public async Task<IActionResult> OnPostAsync()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseUrl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client
                    .PostAsJsonAsync("api/Produtos", Produto);

                if (response.IsSuccessStatusCode)
                {
                    return RedirectToPage("./Index");
                }
                else
                {
                    return RedirectToPage("./Create");
                }

            }
        }
    }  

}
