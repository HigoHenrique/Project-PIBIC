import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { saveAs } from 'file-saver';



const PdfContent = React.forwardRef(({ inputValue }, ref) => (
  <div ref={ref} >
     <img id="foto" src="https://www.calendariodovestibular.com.br/wp-content/uploads/2013/03/post_unicap.png" alt="Logo"/>
     <img id="foto2" src="https://3.bp.blogspot.com/-ZlUb7VtvlsU/XL26k8OWPoI/AAAAAAAAGH4/BXmt8JjRUBckc3GjNNwJjbI4RgJYMkfjwCLcBGAs/s640/logo-pibic.png" alt="Logo"/>
    <h1 id="título">DECLARAÇÃO DE VÍNCULO</h1>

    <div id="texto"><h3>A [Nome da Universidade/Instituição], por meio desta declaração, atesta que o(a) estudante [Seu Nome Completo], regularmente matriculado(a) no curso de [Seu Curso], </h3> 
      <h3>está oficialmente vinculado(a) e participando ativamente do Programa Institucional de Bolsas de Iniciação Científica (PIBIC).</h3>
     <h3> O(a) estudante mencionado(a) encontra-se envolvido(a) no projeto de pesquisa intitulado "[Título do Projeto]", sob a orientação do(a) Professor(a) [Nome do Orientador].</h3>
     <h3>Esta participação tem o objetivo de promover o avanço do conhecimento na área de [Área de Pesquisa] e proporcionar uma experiência enriquecedora em pesquisa científica.</h3></div>
     <div id="caixa">

     <h2>AUTENTICAÇÃO</h2>
     <span id="data">Recife, 30/11/2023 20:42:23</span>
     <img id="foto3" src="https://s3.online24.pt/foto/como-criar-uma-assinatura-digital-73_bg.jpg" alt="Logo"/>

     <div id="assinatura">
     <span>Profº Ana Joul Pinheiro</span>
     <p>Diretora de Gestão Escolar</p>
     <p>Matº 205.87-9</p>
     </div>

     <p>RECONHECIDA PELO DECRETO N° 30.417, PUBLICADO NO D.O.U. DE N° 33 DE 08 FEVEREIRO DE 1952 E</p>
     <p id="id">RECREDENCIADA PELA PORTARIA N° 2.145 - MEC, DE 12.12.2019, PUBLICADA NO D.O.U. N° 241, DE 13.12.2019</p>
     
     </div>

     
     
  </div>
  
));

const Aluno = () => {
  const [inputValue, setInputValue] = React.useState('');
  const pdfContentRef = React.useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePrint = useReactToPrint({
    content: () => pdfContentRef.current,
  });

  const handleDownload = () => {
    handlePrint();
    setTimeout(() => {
      const content = pdfContentRef.current;
      if (content) {
        const pdfOptions = {
          filename: 'relatorio.pdf',
        };
        content.toBlob((blob) => {
          saveAs(blob, pdfOptions.filename);
        });
      }
    }, 500);
  };

  return (
    <main id="main-container">
    <div>
      <h1>Gerador de PDF</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem"
      />
      <button onClick={handleDownload}>Gerar PDF</button>
      <div style={{ display: 'none' }}>
        <PdfContent inputValue={inputValue} ref={pdfContentRef} />
      </div>
    </div>
    </main>
  );
};

export default Aluno;
