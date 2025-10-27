"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const initList = [
    {
      id: 1,
      label: "Finish the project report and send it to the team by 5 PM.",
      checked: true,
    },
    {
      id: 2,
      label: "Buy groceries: milk, bread, eggs, and coffee.",
      checked: false,
    },
    {
      id: 3,
      label: "Schedule a dentist appointment for next week.",
      checked: false,
    },
    {
      id: 4,
      label: "Clean up the workspace and organize project folders.",
      checked: true,
    },
    {
      id: 5,
      label: "Call the plumber to fix the kitchen sink leak.",
      checked: true,
    },
    {
      id: 6,
      label: "Prepare slides for Monday’s presentation.",
      checked: false,
    },
    {
      id: 7,
      label: "Reply to pending client emails and follow up on feedback.",
      checked: false,
    },
    {
      id: 8,
      label: "Go for a 30-minute evening run.",
      checked: true,
    },
  ];

  const [list, setList] = useState(initList);
  const handleCheck = (id: number) => {
    setList(list.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)));
  };
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "MMMM Mo yyyy") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {list.map((todo) => (
            <Card key={todo.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  id={todo.id + ""}
                  checked={todo.checked}
                  onClick={() => handleCheck(todo.id)}
                />
                <label
                  htmlFor={todo.id + ""}
                  className="text-sm text-muted-foreground"
                >
                  {todo.label}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
