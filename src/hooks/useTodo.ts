import type { ChangeEvent, KeyboardEvent } from "react";
import { useMemo, useState } from "react";

import { INITIAL_TODO_LIST, INITIAL_TODO_LIST_LENGTH } from "../constants/data";

/**
 * useTodo
 *
 * @package hooks
 */

type Todo = {
  id: number;
  title: string;
};

export const useTodo = () => {
  /* state定義 */
  const [addInputValue, setAddInputValue] = useState("");
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [todoLength, setTodoLength] = useState(INITIAL_TODO_LIST_LENGTH);
  const [originTodoList, setOriginTodoList] =
    useState<Todo[]>(INITIAL_TODO_LIST);

  /* action定義 */
  /**
   * inputの値更新機能
   */
  const handleAddInputTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAddInputValue(e.target.value);
  const handleSearchKeyWordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchKeyWord(e.target.value);

  /**
   * todoList検索機能
   */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyWord, "i");
    return originTodoList.filter((todo) => todo.title.match(regexp));
  }, [originTodoList, searchKeyWord]);

  /**
   * todo追加機能
   */
  const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (addInputValue !== "" && e.key === "Enter") {
      const newId = todoLength + 1;
      setOriginTodoList([
        ...originTodoList,
        {
          id: newId,
          title: addInputValue,
        },
      ]);
      setTodoLength(newId);
      setAddInputValue("");
    }
  };

  /**
   * todo削除機能
   * @param {number} targetId
   * @param {string} targetTitle
   */
  const handleDeleteTodo = (targetId: number, targetTitle: string) => {
    if (window.confirm(`${targetTitle}を本当に削除しますか?`)) {
      const newTodoList = originTodoList.filter((todo) => targetId !== todo.id);
      console.log(newTodoList);
      setOriginTodoList(newTodoList);
    }
  };

  return {
    addInputValue,
    searchKeyWord,
    showTodoList,

    handleAddInputTitleChange,
    handleSearchKeyWordChange,
    handleAddTodo,
    handleDeleteTodo,
  };
};
