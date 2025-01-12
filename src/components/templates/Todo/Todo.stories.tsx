import { useEffect } from "react";

import { TodoTemplate } from "./index";

export default {
  component: TodoTemplate,
  title: "Template/Todo",
  // tags: ["autodocs"],
  decorators: [
    (Story: any) => {
      const Decorator = () => {
        useEffect(() => {
          const originalBackgroundColor = document.body.style.backgroundColor;
          const originalPadding = document.body.style.padding;

          document.body.style.backgroundColor = "teal";
          document.body.style.padding = "unset";

          return () => {
            document.body.style.backgroundColor = originalBackgroundColor;
            document.body.style.padding = originalPadding;
          };
        }, []);

        return <Story />;
      };

      return <Decorator />;
    },
  ],
};

export const FuncTodoTemplate = () => {
  return <TodoTemplate />;
};

FuncTodoTemplate.storyName = "Default";
