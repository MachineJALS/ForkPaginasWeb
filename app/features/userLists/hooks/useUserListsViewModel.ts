"use client"

import { useState } from "react";

export const useUserListsViewModel = (initialUsers: string[] = []) => {
  const [users, setUsers] = useState<string[]>(initialUsers);
  const [name, setName] = useState("");

  const addUser = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUsers((prev) => [...prev, trimmed]);
    setName("");
  };

  const removeUser = (index: number) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    users,
    name,
    setName,
    addUser,
    removeUser,
  } as const;
};

export default useUserListsViewModel;
