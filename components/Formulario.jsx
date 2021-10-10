import styles from "../styles/Formulario.module.css";

export default function Forumulario() {
  return (
    <>
      <h1>Formulário</h1>
      <form className={styles.form}>
        <label htmlFor="nome">
          Nome:
          <input type="text" name="nome" id="nome" />
        </label>
        <label htmlFor="dataAvaliacao">
          Data Avaliação:
          <input type="date" id="dataAvaliacao" name="dataAvaliacao" />
        </label>
        <label htmlFor="sexo">
          Sexo:
          <p>
            Masculino
            <input type="radio" name="sexo" id="masculino" />
          </p>
          <p>
            Feminino
            <input type="radio" name="sexo" id="feminino" />
          </p>
        </label>
        <label htmlFor="idade">
          Idade:
          <input type="number" name="idade" id="idade" />
        </label>
        <label htmlFor="peso">
          Peso:
          <input type="number" name="peso" id="peso" />
        </label>
        <label htmlFor="altura">
          Altura:
          <input type="number" name="altura" id="altura" />
        </label>
      </form>
      <h1>Dados da Bioimpedância</h1>
      <form className={styles.form}>
        <label htmlFor="percGordura">
          Percentual de gordura:
          <input type="number" />
        </label>
        <label htmlFor="perMusculo">
          {" "}
          Percentual de Massa Muscular:
          <input type="numer" name="" id="" />
        </label>
        <label htmlFor="consumoCalorico">
          Consumo Calórico em Repouso:
          <input type="number" name="" id="" />
        </label>
        <label htmlFor="idadeCorporea">
          Idade Corpórea:
          <input type="number" name="" id="" />
        </label>
        <label htmlFor="gorduraVisceral">
          Gordura Visceral:
          <input type="nember" name="" id="" />
        </label>
      </form>

      <button type="submit"> Calcular</button>

      <h1>Resultado</h1>
    </>
  );
}
