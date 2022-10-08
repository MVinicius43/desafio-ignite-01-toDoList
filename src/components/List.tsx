import { useEffect, useState } from "react";

import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from './List.module.css'

interface ListProps {
  newTask: string[];
  task: string;
  setCompletedTasks: React.Dispatch<React.SetStateAction<number>>;
  setNewTask: React.Dispatch<React.SetStateAction<string[]>>;
  completedTasks: number;
}

export function List({ newTask, task, setCompletedTasks, completedTasks, setNewTask }: ListProps) {
  const [hasCompletedTask, setHasCompletedTask] = useState(false)

  function handleWithCompletedTasks() {
    setHasCompletedTask(!hasCompletedTask)
  }

  function handleWithDeleteTasks() {
    const deleteTask = [...newTask]
    setNewTask(deleteTask.filter(tk => {return tk !== task}))
    setHasCompletedTask(false)

    if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1)
    }
  }

  useEffect(() => {
    if (hasCompletedTask) {
      setCompletedTasks(completedTasks + 1)
    } else if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1)
    }
  }, [hasCompletedTask])

  return (
    <div className={styles.task}>
      <button onClick={() => { handleWithCompletedTasks() }}>
        {
          hasCompletedTask ?
          <CheckCircle size={24} weight="fill" color="#5E60CE"/>
          :
          <Circle size={24} color="#4EA8DE"/>
        }
      </button>

      <p className={hasCompletedTask ? styles.completedTasks : undefined}>{task}</p>
      
      <button onClick={() => { handleWithDeleteTasks() }}>
        <Trash size={24} />
      </button>
    </div>
  )
}