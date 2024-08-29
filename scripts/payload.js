export function postUsuarios(randomNome, randomJobs) {
  const cadastrarUsuarios = {
    name: randomNome,
    job: randomJobs,
  };
  return cadastrarUsuarios;
}
