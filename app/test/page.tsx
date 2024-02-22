"use client";

import React, { useState } from "react";
import { Form } from "./_component/form";
import { Input } from "./_component/input";

function TestPage() {
  const [move, setMove] = useState(0);
  return (
    <div className="bg-gray-100 max-w-full min-h-screen flex items-center justify-center">
      <Form move={move} setMove={setMove}>
        dance
      </Form>
    </div>
  );
}

export default TestPage;
