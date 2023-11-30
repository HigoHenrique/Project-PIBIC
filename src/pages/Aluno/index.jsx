import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { saveAs } from 'file-saver';

const PdfContent = React.forwardRef(({ inputValue }, ref) => (
  <div ref={ref} >
     <img src="../../assets/logo.png" alt="Logo" style={{ width: '500px', height: 'auto' }} />
    <h1>Relatório</h1>
    <p>{inputValue}</p>
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
