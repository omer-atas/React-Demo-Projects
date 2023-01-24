import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  // useHttp içerisine url ve taskformtasks gönderilebilrdi..

  useEffect(() => {
    // transformTasks metodu ile görevlere erişililir. Bir nesnede tutulur..
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
// bağımlılık kısmına fetchTasks yazmamızın sebebi ekleme oluğunda tekrar istek atılmasını sağlamaktır.
    fetchTasks(
      { url: 'https://react-real-time-b8216-default-rtdb.firebaseio.com/tasks.json' },
      transformTasks
    ); // fetchTasks sadece istek gönderir..

    // sadece fetchTasks() olsaydı 10. satırdaki kod yerine ;
    // const { isLoading, error, sendRequest: fetchTasks } = useHttp(
    //   { url: 'https://react-real-time-b8216-default-rtdb.firebaseio.com/tasks.json' },
    //   transformTasks
    // ); yazılırdıı
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
