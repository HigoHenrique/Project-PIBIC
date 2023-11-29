import { useNavigate } from "react-router-dom";

function useAutenticate() {
  const navigateTo = useNavigate();
  
  async function login(email, password, setInvalidMatricula) {
    const responseProf = await fetch(
      "https://pibicdb.onrender.com/professores"
    ).then((res) => {
      return res.json();
    });

    const professor = responseProf.find(
      (professor) =>
        professor.email === email && professor.matricula === password
    );

    if (professor) {
      navigateTo("/homeProf");

    } else {

      const responseAdm = await fetch(
        "https://pibicdb.onrender.com/administradores"
      ).then((res) => {
        return res.json();
      });
      
      const adm = responseAdm.find(
        (adm) => adm.email === email && adm.senha === password
      );

      if (adm) {
        navigateTo("/homeAdm");
      } else {
        setInvalidMatricula(true);
      }
    }
  }
  return {
    login,
  };
}
export default useAutenticate;
