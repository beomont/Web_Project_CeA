using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web_Project_CeA.Models
{
    public class Produto
    {
        public int ID { get; set; }
        public string nome { get; set; }
        public string tamanho { get; set; }
        public string categoria { get; set; }
        public string divisao { get; set; }
        public string descricao { get; set; }
        public int estoque { get; set; }
        public string fornecedor { get; set; }
        public string imagem { get; set; }
        public string usuario_Alteracao { get; set; }
        public string reg_Alteracao { get; set; }
    }
}
