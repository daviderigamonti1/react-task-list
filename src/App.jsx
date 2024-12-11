import tasks from "./data/tasks";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const firstList = tasks.filter((task) => {
    return task.state === "backlog" || task.state === "in_progress";
  });

  const firstListItem = firstList.map((task, index) => (
    <li key={index}><h4>{task.title}</h4>
      Priority: {task.priority}
      Est. time {task.estimatedTime}</li>
  ))

  const secondList = tasks.filter((task) => {
    return task.state === "completed";
  });

  const secondListItem = secondList.map((task, index) => (
    <li key={index}><h4>{task.title}</h4>
      Priority: {task.priority} <br />
      Est. time {task.estimatedTime}</li>
  ))

  return (
    <>
      <HeaderComponent />
      <main>
        <ul>{firstListItem}</ul>
        <ul>{secondListItem}</ul>
      </main>
    </>
  );
}

export default App;

/*
Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”.
Infine riprodurre il layout lasciato in allegato.
*BONUS*
Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
*/