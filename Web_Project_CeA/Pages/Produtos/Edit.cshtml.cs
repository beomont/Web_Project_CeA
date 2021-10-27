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
    public class EditModel : PageModel
    {
        [BindProperty]
        public Produto Produto { get; set; }
        string baseUrl = "https://localhost:44329/";
        public async Task<IActionResult> OnGetAsyn(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseUrl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = await client.GetAsync("api/Pokemons/" + id);

                if (response.IsSuccessStatusCode)
                {
                    string result = response.Content.ReadAsStringAsync().Result;
                    Produto = JsonConvert.DeserializeObject<Produto>(result);
                }
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseUrl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("applicaton/json"));
                HttpResponseMessage response = await client
                    .PutAsJsonAsync("api/Produtos/" + Produto.Id, Produto);
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToPage("./index");
                }
                else
                {
                    return Page();
                }
            }
        }
    }
}
