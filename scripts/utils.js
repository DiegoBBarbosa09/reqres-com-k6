export function getHeaders() {
  return {
    "Content-Type": "application/json",
  };
}

export function getRandomName() {
  const firstNames = ["Fulano", "Ciclano", "Beltrano", "João", "Maria"];
  const lastNames = ["Silva", "Santos", "Oliveira", "Pereira", "Costa"];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

export function getRandomJobs() {
  const jobs = [
    "Tech lead",
    "QA",
    "Desenvolverdor React",
    "Desenvolvedor .NET",
    "Desenvolvedor C#",
    "QA Lead",
  ];
  const randomJobs = jobs[Math.floor(Math.random() * jobs.length)];
  const timestamp = new Date().getTime(); // Garantir unicidade
  return `user${timestamp}@${randomJobs}`;
}
