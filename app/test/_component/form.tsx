"use client";

import { useState, FormEvent } from "react";
import { Display } from "./display";
import { Experience } from "./experience";
import { Input } from "./input";
import { Name } from "./name";

interface FormProps {
  children: React.ReactNode;
  move: number;
  setMove: (move: number) => void;
}

export const Form = ({ children, move, setMove }: FormProps) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [text, setText] = useState("");
  const array = [
    [
      {
        id: 1,
        input: (
          <Input
            id="name"
            placeholder="enter your name"
            setValue={setName}
            value={name}
          />
        ),
      },
    ],
    [
      {
        id: 2,
        input: (
          <Input
            id="info"
            placeholder="Enter the description"
            setValue={setInfo}
            value={info}
          />
        ),
        textarea: (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[5rem] rounded-md border "
            placeholder="Explain yourself"
          >
            this will good stuff
          </textarea>
        ),
      },
    ],
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, info, text });
  };

  return (
    <form
      onSubmit={onSubmit}
      action=""
      className="flex flex-col items-center pt-4 w-[70%] mx-auto"
    >
      <div className="flex items-center gap-x-1 mb-t mb-3">
        <button
          className="bg-amber-500 h-8 w-14 rounded-md cursor-pointer"
          disabled={move === 0}
          type="button"
          onClick={() => setMove(move - 1)}
        >
          prev
        </button>
        <button
          disabled={array[move + 1] === undefined}
          className="bg-emerald-500 h-8 w-14 rounded-md cursor-pointer disabled:cursor-wait disabled:bg-emerald-900"
          type="button"
          onClick={() => setMove(move + 1)}
        >
          next
        </button>
      </div>
      {array[move].map((data, index) => (
        <Display
          key={index * Math.random() + 1}
          input={data?.input}
          textarea={data?.textarea}
        />
      ))}
      <button
        type="submit"
        className="bg-rose-300 w-[5rem] h-10 p-2 rounded-md"
      >
        Sumbit
      </button>
    </form>
  );
};
