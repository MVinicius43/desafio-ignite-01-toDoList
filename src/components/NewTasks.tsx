import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

import styles from './NewTasks.module.css'

interface NewTasksProps {
  newTask: string[];
  setNewTask: React.Dispatch<React.SetStateAction<string[]>>
}

export function NewTasks({ setNewTask, newTask }: NewTasksProps) {
  const [hasNewTask, setHasNewTask] = useState('')

  function handleWithNewTask() {
    setNewTask([...newTask, hasNewTask])
    setHasNewTask('')
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={e => { setHasNewTask(e.target.value) }}
          value={hasNewTask}
        />
      </div>

      <button className={styles.button} onClick={() => { handleWithNewTask() }}>
        Criar
        <PlusCircle size={20}/>
      </button>
    </div>
  )
}