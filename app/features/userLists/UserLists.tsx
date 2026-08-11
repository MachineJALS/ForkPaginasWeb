"use client"

import React from "react";
import { Section } from "@/app/components";
import FormField from "@/app/components/form-field/FormField";
import Button from "@/app/components/button/Button";
import Text from "@/app/components/text/Text";
import useUserListsViewModel from "./hooks/useUserListsViewModel";
import { USER_LISTS } from "@/app/constants";
import { UserListsProps } from "./models/UserListsProps.interface";

const UserLists: React.FC<UserListsProps> = ({ initialUsers = [], title = USER_LISTS.TITLE }) => {
  const { users, name, setName, addUser, removeUser } = useUserListsViewModel(initialUsers);

  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div className="flex items-center gap-2 mb-4">
        <FormField
          id="userName"
          name="userName"
          label={USER_LISTS.LABEL_NAME}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={USER_LISTS.PLACEHOLDER}
        />
        <Button type="button" className="ml-2" onClick={addUser}>
          {USER_LISTS.BUTTON_ADD}
        </Button>
      </div>

      <ul className="space-y-2">
        {users.length === 0 ? (
          <Text className="text-sm text-gray-500">{USER_LISTS.NO_USERS}</Text>
        ) : (
          users.map((u, i) => (
            <li key={i} className="flex items-center justify-between border p-2 rounded">
              <span>{u}</span>
              <Button onClick={() => removeUser(i)} className="text-sm text-red-600">
                {USER_LISTS.BUTTON_DELETE}
              </Button>
            </li>
          ))
        )}
      </ul>
    </Section>
  );
};

export default UserLists;
