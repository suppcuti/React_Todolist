"use client";

import { createContext, useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Edit, Trash2 } from "lucide-react";

// Định nghĩa kiểu Todo
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Định nghĩa kiểu của Context
type TodoContextType = {
  todos: Todo[];
  addTodo: () => void;
  toggleComplete: (id: number) => void;
  editTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  text: string;
  setText: (text: string) => void;
};

// Tạo Context với giá trị mặc định
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    if (editing !== null) {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === editing ? { ...todo, text } : todo))
      );
      setEditing(null);
    } else {
      setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    }
    setText("");
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const editTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setText(todo.text);
      setEditing(id);
    }
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, editTodo, deleteTodo, text, setText }}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-md sm:max-w-lg bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center">📝 To-Do List</h2>
          <TodoForm />
          <TodoList />
        </Card>
      </div>
    </TodoContext.Provider>
  );
}

// Hook giúp sử dụng context dễ dàng hơn
function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}

function TodoForm() {
  const { addTodo, text, setText } = useTodoContext();
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
        className="flex-grow text-sm sm:text-base"
      />
      <Button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white">
        {text ? "Cập nhật" : "Thêm"}
      </Button>
    </div>
  );
}

function TodoList() {
  const { todos, toggleComplete, editTodo, deleteTodo } = useTodoContext();

  return (
    <div className="space-y-2">
      {todos.length === 0 && <p className="text-gray-500 text-center">Danh sách trống!</p>}
      {todos.map((todo) => (
        <Card key={todo.id} className="flex flex-row items-center justify-between p-3 border rounded-lg">
          <span
            className={`flex-grow cursor-pointer text-sm sm:text-base ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <div className="flex gap-2 flex-wrap">
            <Button variant="ghost" size="icon" onClick={() => editTodo(todo.id)}>
              <Edit size={16} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
              <Trash2 size={16} className="text-red-500" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
