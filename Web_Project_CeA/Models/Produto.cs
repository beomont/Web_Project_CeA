using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web_Project_CeA.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tamanho { get; set; }
        public string Categoria { get; set; }
        public string Divisao { get; set; }
        public string Descricao { get; set; }
        public int Estoque { get; set; }
        public string Fornecedor { get; set; }
        public string Imagem { get; set; }
        public string Usuario_alt { get; set; }
        public DateTime Reg_alt { get; set; } = DateTime.Now;
    }
}
