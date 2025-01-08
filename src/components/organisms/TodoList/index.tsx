/**
 * List
 *
 * @package organisms
 */

import { memo } from "react";
import { type TodoType } from "@/interfaces/Todo";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";

type Props = {
  todoList: Array<TodoType>;
  handleDeleteTodo: (id: number, title: string) => void;
};
export const TodoList = memo((props: Props) => {
  const { todoList, handleDeleteTodo } = props;
  return (
    <ul className={styles.list}>
      {todoList.map((todo: TodoType) => (
        <li key={todo.id} className={styles.item}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.icon}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              onClick={() => handleDeleteTodo(todo.id, todo.title)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
});
