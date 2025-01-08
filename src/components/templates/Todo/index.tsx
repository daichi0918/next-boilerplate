"use client";

/**
 * TodoTemplate
 *
 * @package templates
 */
import { InputForm } from "@/components/atoms/InputForm";
import { TodoList } from "@/components/organisms/TodoList";

import { useTodo } from "../../../hooks/useTodo";
import styles from "./styles.module.css";

/**
 * TodoListTemplate
 * @returns {JSX.Element}
 */
export const TodoTemplate = () => {
  const {
    addInputValue,
    searchKeyWord,
    showTodoList,

    handleAddInputTitleChange,
    handleSearchKeyWordChange,
    handleAddTodo,
    handleDeleteTodo,
  } = useTodo();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        <h2 className={styles.subtitle}>ADD TODO</h2>
        <InputForm
          placeholder={"New Todo"}
          value={addInputValue}
          onChange={handleAddInputTitleChange}
          onKeyDown={handleAddTodo}
        />
      </section>
      <section className={styles.common}>
        <InputForm
          placeholder={"Search Keyword"}
          value={searchKeyWord}
          onChange={handleSearchKeyWordChange}
        />
      </section>
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
