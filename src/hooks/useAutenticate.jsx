import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

function useAutenticate() {
  const navigateTo = useNavigate();
  const {setUserLogged} = useUser();

  async function login(email, password, setInvalidMatricula) {
    const responseProf = await fetch(
      "https://3.144.79.84/professores"
    ).then((res) => {
      return res.json();
    });

    const professor = responseProf.find(
      (professor) =>
        professor.email === email && professor.matricula === password
    );

    if (professor) {
      navigateTo("/professor");
      setUserLogged(professor)
    } else {

      const responseAdm = await fetch(
        "https://3.144.79.84/administradores"
      ).then((res) => {
        return res.json();
      });
      
      const adm = responseAdm.find(
        (adm) => adm.email === email && adm.senha === password
      );

      if (adm) {
        navigateTo("/administrador");
        setUserLogged(adm)
      } else {
        setInvalidMatricula(true);
      }
    }
  }

  async function logout() {
    setUserLogged({})
    navigateTo("/login")
  }
  return {
    login,
    logout
  };
}
export default useAutenticate;
