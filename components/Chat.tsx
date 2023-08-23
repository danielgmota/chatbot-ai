"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Using vercel SDK to create IA chatbot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[500px] w-full space-y-4">
          {messages.map((messages) => {
            return (
              <div
                key={messages.id}
                className="flex gap-3 text-slate-600 text-sm"
              >
                {messages.role === "user" && (
                  <Avatar>
                    <AvatarFallback>DM</AvatarFallback>
                    <AvatarImage src="https://github.com/danielgmota.png" />
                  </Avatar>
                )}
                {messages.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>VC</AvatarFallback>
                    <AvatarImage src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {messages.role === "user" ? "Eu" : "BOT"}:
                  </span>
                  {messages.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="outline">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

export default Chat;
