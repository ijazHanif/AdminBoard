"use client";

import { useState } from "react";
import { BankAccount } from "@/types/Type";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/Typography";

const Page = () => {
  const initialBankAccounts: BankAccount[] = [
    {
      id: "1",
      nickname: "Personal Account",
      accountNumber: "123456789",
      accountTitle: "John Doe",
      purpose: "Personal savings",
    },
    {
      id: "2",
      nickname: "Business Account",
      accountNumber: "987654321",
      accountTitle: "Jane Doe",
      purpose: "Business income",
    },
    {
      id: "3",
      nickname: "Savings Account",
      accountNumber: "1122334455",
      accountTitle: "John Smith",
      purpose: "Retirement savings",
    },
  ];
  const [accounts, setAccounts] = useState<BankAccount[]>(initialBankAccounts);
  const [newAccount, setNewAccount] = useState<BankAccount>({
    id: "",
    nickname: "",
    accountNumber: "",
    accountTitle: "",
    purpose: "",
  });

  // Function to add a new account
  const handleAddAccount = () => {
    setAccounts([
      ...accounts,
      { ...newAccount, id: (accounts.length + 1).toString() },
    ]);
    setNewAccount({
      id: "",
      nickname: "",
      accountNumber: "",
      accountTitle: "",
      purpose: "",
    });
  };

  // Function to delete an account by its ID
  const handleDeleteAccount = (id: string) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  return (
    <div className="p-6">
      <Typography variant="h1" className="mb-4 text-2xl font-semibold">
        Bank Management
      </Typography>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input
          placeholder="Nickname"
          value={newAccount.nickname}
          onChange={(e) =>
            setNewAccount({ ...newAccount, nickname: e.target.value })
          }
          required
        />
        <Input
          placeholder="Account Number (optional)"
          value={newAccount.accountNumber}
          onChange={(e) =>
            setNewAccount({ ...newAccount, accountNumber: e.target.value })
          }
        />
        <Input
          placeholder="Account Title (optional)"
          value={newAccount.accountTitle}
          onChange={(e) =>
            setNewAccount({ ...newAccount, accountTitle: e.target.value })
          }
        />
        <Input
          placeholder="Purpose (optional)"
          value={newAccount.purpose}
          onChange={(e) =>
            setNewAccount({ ...newAccount, purpose: e.target.value })
          }
        />
        <div className="col-span-1 md:col-span-2">
          <Button onClick={handleAddAccount}>Add Account</Button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <Table className="min-w-full table-fixed border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableCell className="w-1/5 px-4 py-2 font-bold border">
                Nickname
              </TableCell>
              <TableCell className="w-1/5 px-4 py-2 font-bold border">
                Account Number
              </TableCell>
              <TableCell className="w-1/5 px-4 py-2 font-bold border">
                Account Title
              </TableCell>
              <TableCell className="w-1/5 px-4 py-2 font-bold border">
                Purpose
              </TableCell>
              <TableCell className="w-1/5 px-4 py-2 font-bold border">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell className="w-1/5 px-4 py-2 border">
                  {account.nickname}
                </TableCell>
                <TableCell className="w-1/5 px-4 py-2 border">
                  {account.accountNumber}
                </TableCell>
                <TableCell className="w-1/5 px-4 py-2 border">
                  {account.accountTitle}
                </TableCell>
                <TableCell className="w-1/5 px-4 py-2 border">
                  {account.purpose}
                </TableCell>
                <TableCell className="w-1/5 px-4 py-2 border">
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteAccount(account.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
