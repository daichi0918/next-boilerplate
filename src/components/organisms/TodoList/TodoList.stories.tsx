import { useState } from "react";
import { type StoryFn } from "@storybook/react";

import { TodoList } from ".";

export default {
  component: TodoList,
  title: "Organisms/TodoList",
  // tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div style={{ padding: "5rem" }}>
        {/* Story() 呼び出しの引数を渡す必要はなく、そのまま Story を使います */}
        {Story()}
      </div>
    ),
  ],
};

export const FuncTodoList = () => {
  // Todoリストの状態管理
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
  ]);

  // handleDeleteTodo を更新して新しいリストを状態に反映
  const handleDelete = (id: number, title: string) => {
    if (window.confirm(`${title}を本当に削除しますか?`)) {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList); // リストを更新
    }
  };

  return <TodoList todoList={todoList} handleDeleteTodo={handleDelete} />;
};

FuncTodoList.storyName = "Default";

FuncTodoList.args = {
  todoList: [
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
  ],
};
