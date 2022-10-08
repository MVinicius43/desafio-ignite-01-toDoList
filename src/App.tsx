import { Header } from './components/Header'
import { NewTasks } from './components/NewTasks'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'
import './global.css'
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTasks newTask={newTask} setNewTask={setNewTask}/>

        <Tasks newTask={newTask} setNewTask={setNewTask} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
      </div>
    </div>
  )
}

export default App
