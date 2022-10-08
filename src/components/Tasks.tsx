import clipboard from '../assets/clipboard.svg'
import { List } from './List';

import styles from './Tasks.module.css'

interface TasksProps {
  newTask: string[];
  completedTasks: number;
  setCompletedTasks: React.Dispatch<React.SetStateAction<number>>;
  setNewTask: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Tasks({ newTask, completedTasks, setCompletedTasks, setNewTask }: TasksProps) {

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <p>{newTask.length}</p>
        </div>

        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <p>{`${completedTasks} de ${newTask.length}`}</p>
        </div>
      </header>

      <div className={newTask.length === 0 ? styles.emptyToDo : styles.list}>
        {
          newTask.length === 0 ?
          <>
            <img src={clipboard} alt="clipboard"/>
            <p>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>
              Crie tarefas e organize seus itens a fazer
            </p>
          </>
          :
          newTask.map(task => {
            return (
              <List
                key={task}
                completedTasks={completedTasks}
                newTask={newTask}
                setNewTask={setNewTask}
                setCompletedTasks={setCompletedTasks}
                task={task}
              />
            )
          })
        }
      </div>
    </div>
  )
}