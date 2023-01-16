import { useState } from "react";
import { useForm } from "react-hook-form";
import "../index.css";

function Cv() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [infoUser, setInfoUser] = useState({});
  const [currentUser, setCurrentUser] = useState(false);

  function handleClick(e) {
    setCurrentUser(infoUser);
  }

  return (
    <>
      <div className="user">
        <form className="info" onSubmit={handleSubmit(onSubmit)}>
          <button onClick={(e) => handleClick(e)}>yo</button>

          <label>
            Nom :
            <input type="text" name="firstname" value={infoUser.nom} />
          </label>

          <label>
            prenom :
            <input type="text" name="lastname" value={infoUser.prenom} />
          </label>

          <label>
            age :
            <input type="text" name="age" value={infoUser.age} />
          </label>

          <label>
            email :
            <input type="text" name="email" value={infoUser.email} />
          </label>

          <label>
            tel :
            <input type="text" name="tel" value={infoUser.tel} />
          </label>

          <label>
            ville :
            <input type="text" name="ville" value={infoUser.ville} />
          </label>

          <label>
            langue :
            <input type="text" name="langue" value={infoUser.langue} />
          </label>

          <label>
            competence :
            <input type="text" name="competence" value={infoUser.competence} />
            <input type="text" name="competence" value={infoUser.competence} />
            <input type="text" name="competence" value={infoUser.competence} />
            <input type="text" name="competence" value={infoUser.competence} />
            <input type="text" name="competence" value={infoUser.competence} />
            <input type="text" name="competence" value={infoUser.competence} />
          </label>
        </form>
      </div>
    </>
  );
}

export default Cv;
